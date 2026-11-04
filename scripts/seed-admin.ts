// Usage: npx tsx --env-file=.env.local scripts/seed-admin.ts
// Reads ADMIN_SEED="email1:password1,email2:password2" from env. Never commit real values.
import bcrypt from "bcryptjs";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
const seed = process.env.ADMIN_SEED;
if (!url || !seed) throw new Error("Set DATABASE_URL and ADMIN_SEED");
const sql = neon(url);

for (const pair of seed.split(",")) {
  const i = pair.indexOf(":");
  const email = pair.slice(0, i).trim().toLowerCase();
  const pw = pair.slice(i + 1);
  if (!email || pw.length < 10) throw new Error(`Bad entry for ${email}: password min 10 chars`);
  const hash = await bcrypt.hash(pw, 12);
  await sql`insert into admins (email, password_hash) values (${email}, ${hash})
            on conflict (email) do update set password_hash = excluded.password_hash`;
  console.log("seeded", email);
}
