import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Vilkår for bruk av nettstedet",
  description: "Vilkår for bruk av tromsologopedene.no: informasjon, ansvar, lenker og opphavsrett.",
  alternates: { canonical: "/vilkar" },
};

// TODO(client): have the client/lawyer review before launch. Add practice-specific terms (cancellation, payment) only when the client provides them.
export default function Vilkar() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Vilkår", path: "/vilkar" }]} title="Vilkår for bruk av nettstedet" lead="Sist oppdatert 5. november 2026." />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          <h2 className="!mt-0">1. Om nettstedet</h2>
          <p>
            Dette nettstedet drives av {SITE.name}. Ved å bruke nettstedet godtar du disse vilkårene. Hvis du ikke godtar dem, ber vi deg om å ikke bruke nettstedet.
          </p>
          <h2>2. Generell informasjon, ikke helsehjelp</h2>
          <p>
            Innholdet på nettstedet er generell informasjon om logopedi og våre tjenester. Det er ikke individuell medisinsk eller faglig rådgiving og erstatter ikke utredning eller behandling. Ta kontakt med logoped eller lege hvis du har spørsmål om din eller barnets situasjon. Ved akutte vansker, for eksempel plutselig endret tale eller svelging, kontakt fastlege, legevakt (116 117) eller nødnummer 113.
          </p>
          <h2>3. Timebestilling og behandling</h2>
          <p>
            Når du tar kontakt, avtaler du time direkte med en av logopedene. Vilkår for selve behandlingen, som avtaletid, avbestilling og betaling, avtales ved timebestilling. Kontaktskjemaet er ikke en bindende timebestilling og skal ikke brukes til sensitive helseopplysninger.
          </p>
          <h2>4. Refusjon fra HELFO</h2>
          <p>
            Informasjonen om refusjon er veiledende. Det er HELFO som avgjør om vilkårene er oppfylt, og regelverket kan endres. Se <Link href="/refusjon">refusjonssiden</Link> og helfo.no for oppdaterte regler.
          </p>
          <h2>5. Opphavsrett</h2>
          <p>
            Tekst, bilder, logo og design på nettstedet tilhører {SITE.name} eller rettighetshavere vi har avtale med, og er beskyttet av åndsverkloven. Du kan lese, skrive ut og dele lenker til sidene for personlig bruk. Annen gjengivelse eller kopiering krever skriftlig samtykke.
          </p>
          <h2>6. Lenker til andre nettsteder</h2>
          <p>
            Nettstedet kan lenke til eksterne nettsteder, for eksempel helfo.no. Vi har ikke kontroll over innholdet der og er ikke ansvarlige for det.
          </p>
          <h2>7. Ansvar</h2>
          <p>
            Vi arbeider for at informasjonen skal være korrekt og oppdatert, men kan ikke garantere at den alltid er fullstendig eller feilfri. Nettstedet leveres slik det er, og vi er ikke ansvarlige for tap som skyldes bruk av informasjonen eller midlertidig nedetid, i den utstrekning loven tillater det. Dette begrenser ikke rettigheter du har etter ufravikelig lov, for eksempel som pasient eller forbruker.
          </p>
          <h2>8. Personvern og informasjonskapsler</h2>
          <p>
            Hvordan vi behandler personopplysninger, står i <Link href="/personvern">personvernerklæringen</Link>. Bruk av informasjonskapsler er beskrevet i <Link href="/informasjonskapsler">retningslinjene for informasjonskapsler</Link>.
          </p>
          <h2>9. Endringer</h2>
          <p>Vi kan oppdatere disse vilkårene. Gjeldende versjon ligger alltid på denne siden, med dato for siste oppdatering.</p>
          <h2>10. Lovvalg</h2>
          <p>Vilkårene reguleres av norsk rett. Tvister avgjøres av norske domstoler.</p>
          <h2>11. Kontakt</h2>
          <p>
            Spørsmål om vilkårene kan sendes via <Link href="/kontakt">kontaktsiden</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
