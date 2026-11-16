// Usage: npx tsx --env-file=.env.local scripts/update-article-from-seed.ts <slug> [--apply]
// Overwrites title, excerpt, body and SEO fields of ONE existing article with the version in
// src/content/articles-seed.ts. Status, cover image and dates are left as they are.
// Without --apply it only prints what would change. Note: the database is shared with production.
import { neon } from "@neondatabase/serverless";
import { cleanHtml } from "../src/lib/sanitize";
import { SEED_ARTICLES } from "../src/content/articles-seed";

const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
if (!url) throw new Error("Set DATABASE_URL");
const sql = neon(url);

const slug = process.argv[2];
const apply = process.argv.includes("--apply");
const a = SEED_ARTICLES.find((x) => x.slug === slug);
if (!slug || !a) throw new Error(`Unknown slug. Choose one of: ${SEED_ARTICLES.map((x) => x.slug).join(", ")}`);

async function main() {
  const [row] = await sql`select slug, status, title, length(body) as len from articles where slug = ${slug}`;
  if (!row) throw new Error(`No article with slug ${slug} in the database`);
  console.log(`found: ${row.slug} (${row.status}), body ${row.len} chars -> ${cleanHtml(a!.body).length} chars`);
  if (!apply) return console.log("dry run, pass --apply to write");
  await sql`
    update articles set
      title = ${a!.title}, excerpt = ${a!.excerpt}, body = ${cleanHtml(a!.body)},
      seo_title = ${a!.seoTitle ?? null}, seo_description = ${a!.seoDescription ?? null}, updated_at = now()
    where slug = ${slug}`;
  console.log("updated");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
