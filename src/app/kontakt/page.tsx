import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { MAPS_URL, SITE } from "@/content/site";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "Kontakt oss og bestill time",
  description: "Kontakt Tromsølogopedene i Sykehusveien 21, 9019 Tromsø. Ring Ingrid Steineger Dahl eller Berit Småbakk, eller send oss en melding.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Kontakt", path: "/kontakt" }]} title="Kontakt oss" lead="Ring eller send en melding, så finner vi ut hva som passer for deg eller barnet ditt." />
      <section className="mx-auto grid max-w-site gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Ring oss</h2>
          <ul className="mt-5 space-y-4">
            {TEAM.map((t) => (
              <li key={t.slug} className="rounded-2xl border border-line p-5">
                <p className="text-lg font-bold">{t.name}</p>
                <p className="text-sage-dark font-semibold">{t.title}</p>
                <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="inline-block py-2 text-lg font-semibold text-blue hover:underline">Tlf {t.phone}</a>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-bold">Hvor finner du oss</h2>
          <address className="mt-3 text-lg not-italic">
            {SITE.name}<br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}
          </address>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block py-2 font-semibold text-blue hover:underline">
            Vis i Google Maps<span className="sr-only"> (åpnes i ny fane)</span> →
          </a>
          <p className="mt-3">Vi behandler på vårt kontor i {SITE.address.street}, eller etter avtale i hjemmet, barnehagen og skolen.</p>
          <Image src="/images/stock/forelder-og-barn-leser-i-telt.jpg" alt="Forelder og barn leser sammen i et lekentelt" width={1600} height={1067} sizes="(min-width: 1024px) 560px, 100vw" className="mt-8 aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Send en melding</h2>
          <p className="mt-2 text-ink/80">Ikke send sensitive helseopplysninger i skjemaet. Vi tar kontakt og avklarer videre på telefon.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
