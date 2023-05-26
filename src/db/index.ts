import { Pool } from "pg";
import { env } from "../config/env";
import {drizzle} from 'drizzle-orm/node-postgres'


const pool = new Pool({
    connectionString: env.DB_CONN,
    ssl: true,
})

export const db = drizzle(pool)
