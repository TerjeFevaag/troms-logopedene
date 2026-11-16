import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { Faq } from "@/components/Faq";
import { PageHeader } from "@/components/PageHeader";
import { REFUSJON_FAQS } from "@/content/faqs";
import { HELFO_SOURCES } from "@/content/helfo";

export const metadata: Metadata = {
  title: "Refusjon og henvisning: HELFO og logoped",
  description:
    "Slik får du logopedbehandling dekket av HELFO: henvisning fra lege med diagnose. Ingen egenandel, ingen søknad og ikke krav om avslag fra kommunen.",
  alternates: { canonical: "/refusjon" },
};

export default function Refusjon() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Refusjon", path: "/refusjon" }]}
        title="Refusjon og henvisning"
        lead="Slik får du logopedbehandling dekket av HELFO."
      />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          <p className="!mt-0 text-lg">
            Logopedbehandling kan dekkes av folketrygden gjennom HELFO. Vi har avtale om direkte oppgjør med HELFO. Det betyr at vi sender regningen direkte til HELFO, og at du ikke trenger å søke om noe selv.
          </p>

          <h2>Dette trenger du</h2>
          <ol>
            <li>
              <strong>Henvisning fra lege.</strong> Fastlege, sykehuslege eller annen spesialist kan henvise. Henvisningen må inneholde en diagnose (ICPC-2 eller ICD-10).
            </li>
            <li>
              <strong>Behandlingen må ha vesentlig betydning</strong> for helsen og funksjonsevnen din. Logopeden vurderer dette når behandlingen starter.
            </li>
          </ol>
          <p>Du trenger ikke søke HELFO, og du trenger ikke forhåndsgodkjenning.</p>

          <h2>Hva koster det?</h2>
          <p>
            Det er ingen egenandel for logopedbehandling i folketrygden. Det er heller ingen fast grense for antall behandlinger, og du trenger ikke ny henvisning underveis. Vi vurderer fortløpende sammen med deg om behandlingen fortsatt hjelper.
          </p>

          <h2>Barn og unge</h2>
          <p>
            Barn og unge trenger <strong>ikke</strong> avslag fra kommunen (PPT) eller fylket for å få behandlingen dekket. Men får barnet allerede logopedhjelp for det samme fra kommunen, barnehagen eller skolen, dekker ikke HELFO behandlingen i tillegg. Logopedhjelp som er en del av spesialundervisning eller spesialpedagogisk hjelp, er kommunens eller fylkets ansvar.
          </p>

          <h2>Dette dekkes ikke</h2>
          <ul>
            <li>
              <strong>Lese- og skrivevansker, dysleksi og dyskalkuli.</strong> Dette er skolens ansvar. <Link href="/tjenester/dysleksi">Se tjenesten for lese- og skrivevansker</Link>.
            </li>
            <li>
              <strong>Behandling hjemme</strong> dekkes bare når helsetilstanden gjør at du ikke kan komme til kontoret.
            </li>
          </ul>

          <h2>Vi hjelper deg</h2>
          <p>
            Er du usikker på om du har rett til dekning, kan du ringe en av logopedene. Vi forteller deg gjerne hva du bør be legen om i henvisningen.
          </p>

          <p className="text-sm text-ink/70">
            Kilder:{" "}
            <a href={HELFO_SOURCES.forskrift} rel="noopener noreferrer">forskrift om stønad til logoped og audiopedagog (Lovdata)</a> og{" "}
            <a href={HELFO_SOURCES.rundskriv} rel="noopener noreferrer">Helsedirektoratets rundskriv</a>. Regelverket kan endres.
          </p>
        </div>
      </section>
      <Faq faqs={REFUSJON_FAQS} />
      <ContactBlock />
    </>
  );
}
