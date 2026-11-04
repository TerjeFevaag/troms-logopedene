import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBlock } from "@/components/ContactBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { articleSchema } from "@/lib/schema";
import { getPublishedArticles, getPublishedBySlug } from "@/lib/articles";

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPublishedArticles()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getPublishedBySlug(slug);
  if (!a) return {};
  const title = a.seoTitle || a.title;
  const description = a.seoDescription || a.excerpt || undefined;
  return {
    title,
    description,
    alternates: { canonical: `/artikler/${a.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/artikler/${a.slug}`,
      publishedTime: a.publishedAt?.toISOString(),
      modifiedTime: a.updatedAt.toISOString(),
      images: a.coverImageUrl
        ? [{ url: a.coverImageUrl, alt: a.coverAlt ?? a.title }]
        : [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Tromsølogopedene: logoped i Tromsø" }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = await getPublishedBySlug(slug);
  if (!a) notFound();
  const date = new Intl.DateTimeFormat("nb-NO", { dateStyle: "long" }).format(a.publishedAt ?? a.updatedAt);
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Artikler", path: "/artikler" }, { name: a.title, path: `/artikler/${a.slug}` }]}
        eyebrow={date}
        title={a.title}
        lead={a.excerpt || undefined}
      />
      <article className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
        {a.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={a.coverImageUrl} alt={a.coverAlt ?? ""} className="mb-8 w-full rounded-2xl" />
        )}
        <div className="prose-site" dangerouslySetInnerHTML={{ __html: a.body }} />
        </div>
      </article>
      <ContactBlock />
      <JsonLd
        data={articleSchema({
          title: a.title,
          slug: a.slug,
          excerpt: a.excerpt,
          cover: a.coverImageUrl,
          published: a.publishedAt ?? a.createdAt,
          updated: a.updatedAt,
        })}
      />
    </>
  );
}
