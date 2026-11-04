"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db, schema } from "@/db";
import { createSession, destroySession, requireSession } from "@/lib/auth";
import { cleanHtml } from "@/lib/sanitize";
import { slugify } from "@/lib/slug";

const { admins, articles } = schema;

type FormState = { error?: string } | undefined;

// Best-effort brute-force throttle (per server instance).
const attempts = new Map<string, { n: number; t: number }>();
const WINDOW = 15 * 60_000;
const DUMMY_HASH = "$2a$12$CwTycUXWue0Thq9StjUM0uJ8e3p0b0u8bYd1v9p7Z3e5y2q5X8rO2";

export async function loginAction(_: FormState, fd: FormData): Promise<FormState> {
  if (!db) return { error: "Databasen er ikke koblet til." };
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0] ?? "local";
  const a = attempts.get(ip);
  const recent = a && Date.now() - a.t < WINDOW ? a : undefined;
  if (recent && recent.n >= 8) return { error: "For mange forsøk. Prøv igjen senere." };

  const email = String(fd.get("email") ?? "").trim().toLowerCase();
  const password = String(fd.get("password") ?? "");
  const admin = (await db.select().from(admins).where(eq(admins.email, email)).limit(1))[0];
  // Compare against a dummy hash when the user is missing, to keep timing similar.
  const ok = await bcrypt.compare(password, admin?.passwordHash ?? DUMMY_HASH);
  if (!admin || !ok) {
    attempts.set(ip, { n: (recent?.n ?? 0) + 1, t: Date.now() });
    return { error: "Feil e-post eller passord." };
  }
  attempts.delete(ip);
  await createSession(admin.id, admin.email);
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

function revalidateAll(slug?: string) {
  revalidateTag("articles", "max");
  revalidatePath("/artikler");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/artikler/${slug}`);
}

export async function saveArticleAction(_: FormState, fd: FormData): Promise<FormState> {
  const session = await requireSession();
  if (!db) return { error: "Databasen er ikke koblet til." };

  const id = Number(fd.get("id") || 0);
  const title = String(fd.get("title") ?? "").trim();
  if (!title) return { error: "Tittel mangler." };
  const slug = slugify(String(fd.get("slug") ?? "") || title);
  if (!slug) return { error: "Ugyldig adresse (slug)." };
  const status = String(fd.get("intent")) === "publish" ? "published" : "draft";
  const coverImageUrl = String(fd.get("coverImageUrl") ?? "") || null;
  const coverAlt = String(fd.get("coverAlt") ?? "").trim() || null;
  if (coverImageUrl && !coverAlt) return { error: "Legg til bildebeskrivelse (alt-tekst) for omslagsbildet." };
  if (coverImageUrl && !/^https:\/\//.test(coverImageUrl)) return { error: "Ugyldig bilde-URL." };

  const existing = id ? (await db.select().from(articles).where(eq(articles.id, id)).limit(1))[0] : undefined;
  const values = {
    slug,
    title,
    excerpt: String(fd.get("excerpt") ?? "").trim().slice(0, 300),
    body: cleanHtml(String(fd.get("body") ?? "")),
    coverImageUrl,
    coverAlt,
    status: status as "draft" | "published",
    seoTitle: String(fd.get("seoTitle") ?? "").trim() || null,
    seoDescription: String(fd.get("seoDescription") ?? "").trim() || null,
    updatedAt: new Date(),
    publishedAt: status === "published" ? (existing?.publishedAt ?? new Date()) : (existing?.publishedAt ?? null),
  };

  try {
    if (existing) {
      await db.update(articles).set(values).where(eq(articles.id, id));
      if (existing.slug !== slug) revalidatePath(`/artikler/${existing.slug}`);
    } else {
      await db.insert(articles).values({ ...values, authorId: session.id });
    }
  } catch (e) {
    const msg = String((e as Error).message);
    if (msg.includes("articles_slug_idx") || msg.includes("duplicate")) return { error: "Adressen (slug) er allerede i bruk." };
    console.error(e);
    return { error: "Kunne ikke lagre." };
  }
  revalidateAll(slug);
  redirect("/admin?lagret=1");
}

export async function deleteArticleAction(fd: FormData) {
  await requireSession();
  if (!db) return;
  const id = Number(fd.get("id"));
  const row = (await db.select().from(articles).where(eq(articles.id, id)).limit(1))[0];
  await db.delete(articles).where(eq(articles.id, id));
  revalidateAll(row?.slug);
  redirect("/admin?slettet=1");
}

export async function setStatusAction(fd: FormData) {
  await requireSession();
  if (!db) return;
  const id = Number(fd.get("id"));
  const to = String(fd.get("to")) === "published" ? "published" : "draft";
  const row = (await db.select().from(articles).where(eq(articles.id, id)).limit(1))[0];
  if (!row) return;
  await db
    .update(articles)
    .set({
      status: to,
      updatedAt: new Date(),
      publishedAt: to === "published" ? (row.publishedAt ?? new Date()) : row.publishedAt,
    })
    .where(eq(articles.id, id));
  revalidateAll(row.slug);
  redirect("/admin");
}
