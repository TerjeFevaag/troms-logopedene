import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { Faq } from "@/components/Faq";
import { PageHeader } from "@/components/PageHeader";
import { REFUSJON_FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Refusjon og henvisning: HELFO og logoped",
  description:
    "Regler for logopedbehandling dekket av HELFO: henvisning fra lege med ICPC-2-diagnose og avslag fra kommunen (PPT) eller fylket for barn under 18 år.",
  alternates: { canonical: "/refusjon" },
};

export default function Refusjon() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Refusjon", path: "/refusjon" }]}
        title="Refusjon og henvisning"
        lead="Regler for logopedbehandling dekket av HELFO."
      />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          <p className="!mt-0 text-lg">
            Vi arbeider etter Norsk Logopedlags etiske retningslinjer og de satsene for undersøkelse og behandling som HELFO har satt. Logopeder med refusjonsavtale med Helseøkonomiforvaltningen (HELFO) kan gi de fleste behandling som dekkes gjennom folketrygden.
          </p>
          <h2>Dette trenger du</h2>
          <ol>
            <li>Henvisning fra spesialist eller fastlege med diagnose i henhold til ICPC-2.</li>
            <li>Avslag på logopedisk oppfølging fra kommunen (PPT) eller fylket (gjelder elever i videregående opplæring). Dette gjelder for barn og unge under 18 år.</li>
          </ol>
          <p>
            Se mer informasjon på <a href="https://www.helfo.no" rel="noopener noreferrer">www.helfo.no</a>.
          </p>
          <h2>Vi hjelper deg</h2>
          <p>
            Ønsker du mer spesifikk informasjon, eller trenger hjelp til hvordan du går frem, kan du kontakte en av logopedene. Vi videresender om ønskelig aktuelle papirer til HELFO.
          </p>
        </div>
      </section>
      <Faq faqs={REFUSJON_FAQS} />
      <ContactBlock />
    </>
  );
}
