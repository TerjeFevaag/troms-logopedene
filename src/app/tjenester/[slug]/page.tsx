import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ContactBlock } from "@/components/ContactBlock";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { HELFO_TEXT } from "@/content/helfo";
import { SERVICES, serviceBySlug } from "@/content/services";
import { TEAM } from "@/content/team";
import { serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/tjenester/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `/tjenester/${s.slug}`,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Tromsølogopedene: logoped i Tromsø" }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const providers = TEAM.filter((t) => t.services.includes(s.slug));
  const related = s.related.map((r) => serviceBySlug(r)).filter(Boolean) as typeof SERVICES;

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Tjenester", path: "/tjenester" }, { name: s.name, path: `/tjenester/${s.slug}` }]}
        eyebrow="Tjeneste"
        title={s.name}
        lead={s.lead}
      >
        <Button href="/kontakt">Bestill time</Button>
        <Button href="/refusjon" variant="outline">Om refusjon</Button>
      </PageHeader>

      <div className="mx-auto grid max-w-site gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_340px]">
        <article className="prose-site max-w-3xl">
          {s.image && (
            <Image src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} sizes="(min-width: 1024px) 768px, 100vw" className="!mb-10 aspect-[16/9] w-full rounded-2xl object-cover" />
          )}
          <h2 className="!mt-0">Hvem er dette for?</h2>
          <ul>{s.forWho.map((w) => <li key={w}>{w}</li>)}</ul>
          {s.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {sec.bullets && <ul>{sec.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </section>
          ))}
          <h2>Refusjon</h2>
          <p>
            {s.helfoCovered === false ? HELFO_TEXT.serviceNotCovered : HELFO_TEXT.serviceCovered}{" "}
            <Link href="/refusjon">Les om refusjon og henvisning</Link>.
          </p>
        </article>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-tint p-6">
            <h2 className="text-lg font-bold">Hvem tilbyr dette?</h2>
            <ul className="mt-4 space-y-4">
              {providers.map((t) => (
                <li key={t.slug}>
                  <Link href={`/logopeder/${t.slug}`} className="flex items-center gap-3">
                    <Image src={t.photo} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                    <span>
                      <span className="block font-semibold text-navy">{t.name}</span>
                      <span className="text-sm text-ink/80">{t.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line p-6">
            <h2 className="text-lg font-bold">Relaterte tjenester</h2>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}><Link href={`/tjenester/${r.slug}`} className="inline-block py-1.5 font-semibold text-blue hover:underline">{r.name}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Faq faqs={s.faqs} />
      <ContactBlock />
      <JsonLd data={serviceSchema(s)} />
    </>
  );
}
