import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactBlock } from "@/components/ContactBlock";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ABOUT_FAQS } from "@/content/faqs";
import { SITE, abs } from "@/content/site";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "Om oss: logopedpraksis i Tromsø",
  description:
    "Tromsølogopedene er en logopedpraksis i Tromsø med logopedene Ingrid Steineger Dahl og Berit Småbakk. Les om hvordan vi jobber.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOss() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Om oss", path: "/om-oss" }]}
        title="Om Tromsølogopedene"
        lead="Utredning, rådgiving og oppfølging for barn og voksne i Tromsø."
      >
        <Button href="/kontakt">Ta kontakt</Button>
      </PageHeader>

      <section className="mx-auto grid max-w-site gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px]">
        <div className="prose-site max-w-3xl">
          <Image src="/images/hero-photo.jpg" alt="Logoped sammen med et barn i en logopedtime" width={765} height={485} sizes="(min-width: 1024px) 768px, 100vw" priority className="!mb-10 aspect-[16/9] w-full rounded-2xl object-cover" />
          <h2 className="!mt-0">Hvem vi er</h2>
          <p>
            Tromsølogopedene er en logopedpraksis i Tromsø drevet av logopedene Ingrid Steineger Dahl og Berit Småbakk. Begge er medlemmer av Norsk Logopedlag (MNLL) og har lang erfaring innen logopedisk arbeid med barn og voksne.
          </p>
          <h2>Slik jobber vi</h2>
          <p>
            Vi tilbyr utredning, rådgiving og oppfølging eller behandling ved språk-, tale- og kommunikasjonsvansker, afasi, stamming, stemmevansker, svelgevansker, ansiktslammelser, EILO, lyttetrening etter CI-operasjon, lese- og skrivevansker og alternativ og supplerende kommunikasjon.
          </p>
          <p>
            Vi behandler på vårt kontor, eller etter avtale i hjemmet, barnehagen og skolen. Vi arbeider etter Norsk Logopedlags etiske retningslinjer og de satsene for undersøkelse og behandling som HELFO har satt.
          </p>
          <h2>Refusjon</h2>
          <p>
            De fleste får behandlingen dekket gjennom folketrygden når vilkårene er oppfylt. Vi kan være behjelpelige med søknadsprosessen. <Link href="/refusjon">Les mer om refusjon</Link>.
          </p>
          <h2>Se alle tjenester</h2>
          <p>
            Hvert fagområde har sin egen side. <Link href="/tjenester">Gå til tjenester</Link>.
          </p>
        </div>

        <aside aria-labelledby="team-h" className="space-y-5">
          <h2 id="team-h" className="text-2xl font-bold">Logopedene</h2>
          {TEAM.map((t) => (
            <Link key={t.slug} href={`/logopeder/${t.slug}`} className="flex items-center gap-4 rounded-2xl border border-line p-4 hover:border-sage hover:shadow-md">
              <Image src={t.photo} alt={`${t.name}, ${t.title}`} width={88} height={88} className="h-[88px] w-[88px] rounded-xl object-cover" />
              <span>
                <span className="block text-lg font-bold text-navy">{t.name}</span>
                <span className="block font-semibold text-sage-dark">{t.title}</span>
                <span className="mt-1 block text-sm text-blue">Les mer →</span>
              </span>
            </Link>
          ))}
        </aside>
      </section>

      <Faq faqs={ABOUT_FAQS} />
      <ContactBlock />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Om Tromsølogopedene",
          url: abs("/om-oss"),
          inLanguage: "nb-NO",
          about: { "@id": abs("/#organization") },
          isPartOf: { "@id": abs("/#website") },
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />
    </>
  );
}
