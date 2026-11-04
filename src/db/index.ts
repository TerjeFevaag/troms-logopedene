import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

/** null when no database is configured (e.g. local build without env). */
export const db = url ? drizzle(neon(url), { schema }) : null;
export { schema };
