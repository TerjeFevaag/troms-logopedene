import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getPublishedArticles } from "@/lib/articles";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Artikler om språk, tale, stemme og svelging",
  description: "Artikler og nyttig informasjon fra logopedene hos Tromsølogopedene i Tromsø.",
  alternates: { canonical: "/artikler" },
};

export default async function Artikler() {
  const list = await getPublishedArticles();
  const fmt = new Intl.DateTimeFormat("nb-NO", { dateStyle: "long" });
  return (
    <>
      <PageHeader crumbs={[{ name: "Artikler", path: "/artikler" }]} title="Artikler" lead="Nyttig informasjon fra logopedene." />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        {list.length === 0 ? (
          <p className="rounded-2xl bg-tint p-8 text-center text-lg">Ingen artikler er publisert ennå. Kom gjerne tilbake snart.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <li key={a.id} className="flex flex-col overflow-hidden rounded-2xl border border-line">
                {a.coverImageUrl && (
                  <div className="relative aspect-video">
                    <Image src={a.coverImageUrl} alt={a.coverAlt ?? ""} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-ink/70">{fmt.format(a.publishedAt ?? a.updatedAt)}</p>
                  <h2 className="mt-1 text-xl font-bold"><Link href={`/artikler/${a.slug}`} className="hover:underline">{a.title}</Link></h2>
                  <p className="mt-2 flex-1 text-ink/85">{a.excerpt}</p>
                  <Link href={`/artikler/${a.slug}`} className="mt-4 font-semibold text-blue hover:underline">Les artikkelen →</Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
