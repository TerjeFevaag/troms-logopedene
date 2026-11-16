import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { MAPS_URL, SITE } from "@/content/site";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "Kontakt oss og bestill time",
  description: "Kontakt Tromsølogopedene i Sykehusvegen 21, 9019 Tromsø. Send oss en melding eller ring en av logopedene direkte.",
  alternates: { canonical: "/kontakt" },
};

const label = "text-sm font-semibold uppercase tracking-wide text-sage-dark";

export default function Kontakt() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Kontakt", path: "/kontakt" }]}
        title="Kontakt oss"
        lead="Send en melding eller ring en av logopedene, så finner vi ut hva som passer for deg eller barnet ditt."
      >
        <Button href="#ring-oss" variant="outline">Ring en logoped</Button>
      </PageHeader>

      <section className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-14">
        <div>
          <h2 className="text-2xl font-bold">Send en melding</h2>
          <p className="mt-2 text-ink/80">Ikke send sensitive helseopplysninger i skjemaet. Vi tar kontakt og avklarer videre på telefon.</p>
          <ContactForm />
        </div>

        <aside className="space-y-6 lg:pt-1">
          <div className="rounded-2xl bg-tint p-6">
            <h2 className="text-xl font-bold">Hvor finner du oss</h2>
            <p className={`mt-4 ${label}`}>Besøksadresse</p>
            <address className="mt-1 text-lg not-italic">
              {SITE.name}<br />
              {SITE.address.street}<br />
              {SITE.address.postalCode} {SITE.address.city}
            </address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block py-2 font-semibold text-blue hover:underline">
              Vis i Google Maps<span className="sr-only"> (åpnes i ny fane)</span> →
            </a>
            <p className="mt-2 text-ink/90">Vi behandler på kontoret, eller etter avtale i hjemmet, barnehagen og skolen.</p>
          </div>

          <div className="rounded-2xl border border-line p-6">
            <p className={label}>Postadresse</p>
            <address className="mt-1 not-italic">
              {SITE.name}<br />
              {SITE.postalAddress.street}<br />
              {SITE.postalAddress.postalCode} {SITE.postalAddress.city}
            </address>
            <p className="mt-2 text-sm text-ink/80">Kun for post. Behandlingen skjer på kontoret i {SITE.address.street}.</p>
          </div>

          <div className="rounded-2xl border border-line p-6">
            <h2 className="text-xl font-bold">Henvisning og HELFO</h2>
            <p className="mt-2 text-ink/90">De fleste får behandlingen dekket av HELFO. Vi hjelper deg med henvisning og papirer.</p>
            <Link href="/refusjon" className="mt-1 inline-block py-2 font-semibold text-blue hover:underline">Les om refusjon →</Link>
          </div>
        </aside>
      </section>

      <section id="ring-oss" className="scroll-mt-24 border-t border-line bg-white">
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Ring en logoped direkte</h2>
          <p className="mt-2 max-w-2xl text-ink/80">Du kan ringe den logopeden du ønsker. Er du usikker, ring hvem som helst av oss, så hjelper vi deg videre.</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((t) => (
              <li key={t.slug} className="flex flex-col items-center rounded-2xl border border-line p-6 text-center">
                <Image src={t.photo} alt="" width={96} height={96} className="h-24 w-24 rounded-full object-cover" />
                <p className="mt-4 text-lg font-bold">{t.name}</p>
                <p className="font-semibold text-sage-dark">{t.title}</p>
                <a
                  href={`tel:+47${t.phone.replace(/\s/g, "")}`}
                  className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-blue px-6 font-semibold text-white hover:bg-blue-dark"
                >
                  <span className="sr-only">Ring {t.name} på </span>Tlf {t.phone}
                </a>
                <Link href={`/logopeder/${t.slug}`} className="mt-2 inline-block py-2 text-sm font-semibold text-blue hover:underline">
                  Les mer om {t.name.split(" ")[0]} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
