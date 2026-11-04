import { and, desc, eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { db, schema } from "@/db";
import { cleanHtml } from "@/lib/sanitize";
import type { Article } from "@/db/schema";
import { SEED_ARTICLES } from "@/content/articles-seed";

const { articles } = schema;

// Dev-only preview: with no database configured, show the starter articles so the pages can be reviewed.
// Never used in production builds.
const PREVIEW = !db && process.env.NODE_ENV !== "production";
const previewArticles: Article[] = SEED_ARTICLES.map((a, i) => ({
  id: -(i + 1),
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  body: cleanHtml(a.body),
  coverImageUrl: a.cover?.src ?? null,
  coverAlt: a.cover?.alt ?? null,
  status: "published" as const,
  seoTitle: a.seoTitle ?? null,
  seoDescription: a.seoDescription ?? null,
  authorId: null,
  publishedAt: new Date(a.publishedAt),
  createdAt: new Date(a.publishedAt),
  updatedAt: new Date(a.publishedAt),
})).sort((a, b) => b.publishedAt!.getTime() - a.publishedAt!.getTime());

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  if (!db) return fallback;
  try {
    return await fn();
  } catch (e) {
    console.error("DB error", e);
    return fallback;
  }
}

// unstable_cache stores JSON, so Date fields come back as strings. Revive them for callers.
function revive(a: Article): Article {
  return {
    ...a,
    publishedAt: a.publishedAt ? new Date(a.publishedAt) : null,
    createdAt: new Date(a.createdAt),
    updatedAt: new Date(a.updatedAt),
  };
}

const cachedPublished = PREVIEW
  ? async (): Promise<Article[]> => previewArticles
  : unstable_cache(
  async (): Promise<Article[]> =>
    safe(
      () =>
        db!.select().from(articles).where(eq(articles.status, "published")).orderBy(desc(articles.publishedAt)),
      [],
    ),
  ["articles-published"],
  { tags: ["articles"], revalidate: 3600 },
);

export async function getPublishedArticles(): Promise<Article[]> {
  return (await cachedPublished()).map(revive);
}

export async function getLatestArticles(n: number) {
  return (await getPublishedArticles()).slice(0, n);
}

export const getPublishedBySlug = async (slug: string): Promise<Article | null> => {
  if (PREVIEW) return previewArticles.find((a) => a.slug === slug) ?? null;
  const a = await unstable_cache(
    async (): Promise<Article | null> =>
      safe(async () => {
        const r = await db!
          .select()
          .from(articles)
          .where(and(eq(articles.slug, slug), eq(articles.status, "published")))
          .limit(1);
        return r[0] ?? null;
      }, null),
    ["article", slug],
    { tags: ["articles"], revalidate: 3600 },
  )();
  return a ? revive(a) : null;
};

// Admin (uncached)
export async function adminListArticles(): Promise<Article[]> {
  return safe(() => db!.select().from(articles).orderBy(desc(articles.updatedAt)), []);
}
export async function adminGetArticle(id: number): Promise<Article | null> {
  return safe(async () => (await db!.select().from(articles).where(eq(articles.id, id)).limit(1))[0] ?? null, null);
}
