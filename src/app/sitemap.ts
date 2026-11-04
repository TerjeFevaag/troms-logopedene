import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { abs } from "@/content/site";
import { TEAM } from "@/content/team";
import { getPublishedArticles } from "@/lib/articles";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articles = await getPublishedArticles();
  const fixed: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/tjenester", 0.9, "monthly"],
    ["/om-oss", 0.8, "monthly"],
    ["/logopeder", 0.8, "monthly"],
    ["/refusjon", 0.8, "monthly"],
    ["/kontakt", 0.8, "yearly"],
    ["/artikler", 0.6, "weekly"],
    ["/personvern", 0.2, "yearly"],
    ["/vilkar", 0.2, "yearly"],
    ["/informasjonskapsler", 0.2, "yearly"],
  ];
  return [
    ...fixed.map(([p, priority, changeFrequency]) => ({ url: abs(p), lastModified: now, priority, changeFrequency })),
    ...SERVICES.map((s) => ({ url: abs(`/tjenester/${s.slug}`), lastModified: now, priority: 0.9, changeFrequency: "monthly" as const })),
    ...TEAM.map((t) => ({ url: abs(`/logopeder/${t.slug}`), lastModified: now, priority: 0.7, changeFrequency: "monthly" as const })),
    ...articles.map((a) => ({ url: abs(`/artikler/${a.slug}`), lastModified: a.updatedAt, priority: 0.5, changeFrequency: "monthly" as const })),
  ];
}
