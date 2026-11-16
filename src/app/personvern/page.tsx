import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ADDRESS_LINE, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Slik behandler Tromsølogopedene personopplysninger på nettstedet.",
  alternates: { canonical: "/personvern" },
};

// TODO(client): have the client/lawyer review before launch. Controller details still need org.nr.
export default function Personvern() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Personvern", path: "/personvern" }]} title="Personvernerklæring" />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          <h2 className="!mt-0">Behandlingsansvarlig</h2>
          <p>{SITE.name}, {ADDRESS_LINE}, er behandlingsansvarlig for personopplysninger som samles inn gjennom dette nettstedet.</p>
          <h2>Hvilke opplysninger vi behandler</h2>
          <p>
            Hvis du bruker kontaktskjemaet, behandler vi navn, e-post, telefonnummer og innholdet i meldingen. Vi ber deg om ikke å sende sensitive helseopplysninger gjennom skjemaet.
          </p>
          <h2>Formål og rettslig grunnlag</h2>
          <p>Vi bruker opplysningene til å svare på din henvendelse. Grunnlaget er ditt samtykke (GDPR art. 6 nr. 1 bokstav a).</p>
          <h2>Lagring</h2>
          <p>Henvendelser slettes når de er besvart og det ikke lenger er behov for dem.</p>
          <h2>Databehandlere</h2>
          <p>Nettstedet driftes hos Vercel Inc. E-post fra kontaktskjemaet sendes via en e-posttjeneste. Statistikk uten personidentifiserbare opplysninger kan samles inn.</p>
          <h2>Informasjonskapsler</h2>
          <p>Det offentlige nettstedet bruker ingen sporingsinformasjonskapsler. Innloggede administratorer får en nødvendig informasjonskapsel for innlogging. Se <Link href="/informasjonskapsler">retningslinjene for informasjonskapsler</Link> og <Link href="/vilkar">vilkårene for bruk av nettstedet</Link>.</p>
          <h2>Dine rettigheter</h2>
          <p>
            Du har rett til innsyn, retting, sletting og begrensning av behandling, og til å trekke samtykket tilbake. Du kan klage til Datatilsynet (datatilsynet.no).
          </p>
        </div>
      </section>
    </>
  );
}
