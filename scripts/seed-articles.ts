// Usage: npx tsx --env-file=.env.local scripts/seed-articles.ts [--publish]
// Inserts the starter articles from src/content/articles-seed.ts. Existing slugs are left untouched.
// They are inserted as DRAFTS unless --publish is passed, so the therapists can review them first.
import { neon } from "@neondatabase/serverless";
import { cleanHtml } from "../src/lib/sanitize";
import { SEED_ARTICLES } from "../src/content/articles-seed";

const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
if (!url) throw new Error("Set DATABASE_URL");
const sql = neon(url);
const publish = process.argv.includes("--publish");

for (const a of SEED_ARTICLES) {
  const status = publish ? "published" : "draft";
  const publishedAt = publish ? new Date(a.publishedAt) : null;
  const rows = await sql`
    insert into articles (slug, title, excerpt, body, cover_image_url, cover_alt, status, seo_title, seo_description, published_at)
    values (${a.slug}, ${a.title}, ${a.excerpt}, ${cleanHtml(a.body)}, ${a.cover?.src ?? null}, ${a.cover?.alt ?? null}, ${status}, ${a.seoTitle ?? null}, ${a.seoDescription ?? null}, ${publishedAt})
    on conflict (slug) do nothing
    returning slug`;
  console.log(rows.length ? `inserted (${status}): ${a.slug}` : `exists, skipped: ${a.slug}`);
}
