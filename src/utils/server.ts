import fastify from "fastify";
import { logger } from "./logger";
import { applicationRoutes } from "../modules/applications/applications.routes";

export async function buildServer() {
    const app = fastify({
        logger
    })

    app.register(applicationRoutes,{prefix:'/api/applications'})

    return app
}
