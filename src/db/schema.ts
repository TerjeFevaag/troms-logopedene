import { pgTable, serial, text, timestamp, integer, uniqueIndex } from "drizzle-orm/pg-core";

export const admins = pgTable(
  "admins",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [uniqueIndex("admins_email_idx").on(t.email)],
);

export const articles = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull().default(""),
    body: text("body").notNull().default(""),
    coverImageUrl: text("cover_image_url"),
    coverAlt: text("cover_alt"),
    status: text("status", { enum: ["draft", "published"] }).notNull().default("draft"),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    authorId: integer("author_id").references(() => admins.id, { onDelete: "set null" }),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [uniqueIndex("articles_slug_idx").on(t.slug)],
);

export type Article = typeof articles.$inferSelect;
