import { buildServer } from "./utils/server";

async function gracefulShutdown({app}:{app:Awaited<ReturnType<typeof buildServer>>}){
    await app.close()
}

async function main() {
    const app = await buildServer()

    await app.listen({
        port: 3000,
    })

   const signals = ["SIGINT", "SIGTERM"]
   signals.forEach(signal => {
        process.on(signal,()=>{
            gracefulShutdown({app})
        })
    })
}

main()
