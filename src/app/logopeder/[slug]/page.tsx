import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ContactBlock } from "@/components/ContactBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { serviceBySlug } from "@/content/services";
import { TEAM, therapistBySlug } from "@/content/team";
import { personSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = therapistBySlug(slug);
  if (!t) return {};
  return {
    title: `${t.name}, ${t.title} i Tromsø`,
    description: `${t.name} er ${t.title.toLowerCase()} hos Tromsølogopedene. ${t.lead}`,
    alternates: { canonical: `/logopeder/${t.slug}` },
  };
}

export default async function TherapistPage({ params }: Props) {
  const { slug } = await params;
  const t = therapistBySlug(slug);
  if (!t) notFound();
  const services = t.services.map((s) => serviceBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Logopeder", path: "/logopeder" }, { name: t.name, path: `/logopeder/${t.slug}` }]}
        eyebrow={t.title}
        title={t.name}
        lead={t.lead}
      >
        <Button href={`tel:+47${t.phone.replace(/\s/g, "")}`}>Ring {t.phone}</Button>
        <Button href="/kontakt" variant="outline">Send melding</Button>
      </PageHeader>
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-[200px_1fr]">
        <Image src={t.photo} alt={`${t.name}, ${t.title}`} width={200} height={200} className="h-[200px] w-[200px] rounded-2xl object-cover" priority />
        <div className="prose-site max-w-3xl">
          <p className="!mt-0 text-lg">{t.intro}</p>
          <h2>Tilbyr behandling og oppfølging av barn og voksne med</h2>
          <ul>{t.treats.map((x) => <li key={x}>{x}</li>)}</ul>
          {t.certifications.length > 0 && (
            <>
              <h2>Sertifiseringer</h2>
              <ul>{t.certifications.map((x) => <li key={x}>{x}</li>)}</ul>
            </>
          )}
          <h2>Tjenester</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/tjenester/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <ContactBlock />
      <JsonLd data={personSchema(t)} />
    </>
  );
}
