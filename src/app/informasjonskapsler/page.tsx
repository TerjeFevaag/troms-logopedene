import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Retningslinjer for informasjonskapsler",
  description: "Hvilke informasjonskapsler og lokal lagring Tromsølogopedene bruker på nettstedet, og hvordan du endrer valgene dine.",
  alternates: { canonical: "/informasjonskapsler" },
};

// TODO(client): have the client/lawyer review before launch. Update this page if analytics, maps or other third-party services are added.
export default function Informasjonskapsler() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Informasjonskapsler", path: "/informasjonskapsler" }]} title="Retningslinjer for informasjonskapsler" lead="Sist oppdatert 5. november 2026." />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          <h2 className="!mt-0">Hva er informasjonskapsler?</h2>
          <p>
            Informasjonskapsler (cookies) er små tekstfiler som et nettsted lagrer i nettleseren din. Lignende teknologi, som lokal lagring i nettleseren, brukes også til å huske valg.
          </p>
          <h2>Hva vi bruker</h2>
          <p>{SITE.name} bruker ingen sporings- eller markedsføringsinformasjonskapsler, og nettstedet viser ingen annonser. Vi bruker bare det som er nødvendig:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Navn</th><th>Formål</th><th>Type</th><th>Varighet</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>tl_consent</code></td>
                  <td>Husker valget ditt om informasjonskapsler, slik at vi ikke spør deg på nytt.</td>
                  <td>Lokal lagring i nettleseren (ikke sendt til serveren)</td>
                  <td>Til du sletter nettleserdata</td>
                </tr>
                <tr>
                  <td><code>tl_session</code></td>
                  <td>Holder administratorer innlogget i artikkelverktøyet. Settes bare ved innlogging og aldri for vanlige besøkende.</td>
                  <td>Nødvendig informasjonskapsel (kun HTTP, sikker)</td>
                  <td>Inntil 7 dager</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Nødvendige informasjonskapsler krever ikke samtykke, og de kan ikke slås av.</p>
          <h2>Statistikk</h2>
          <p>
            Vi bruker ikke statistikkverktøy i dag. Hvis vi tar i bruk anonym statistikk senere, laster vi den bare hvis du har sagt ja, og denne siden oppdateres.
          </p>
          <h2>Eksterne tjenester</h2>
          <p>
            Skrifter lastes fra vår egen server, og nettstedet viser ikke kart, videoer eller innhold fra sosiale medier. Nettstedet driftes hos Vercel Inc., som kan behandle teknisk informasjon som IP-adresse i serverlogger for å levere og sikre tjenesten. Les mer i <Link href="/personvern">personvernerklæringen</Link>.
          </p>
          <h2>Endre eller trekke tilbake valget ditt</h2>
          <p>
            Du kan endre valget når som helst:{" "}
            <CookieSettingsButton className="font-semibold text-blue underline underline-offset-2 hover:text-blue-dark">åpne innstillinger for informasjonskapsler</CookieSettingsButton>. Du kan også slette informasjonskapsler og lokal lagring i nettleserens innstillinger.
          </p>
          <h2>Spørsmål</h2>
          <p>
            Ta kontakt via <Link href="/kontakt">kontaktsiden</Link>. Du kan klage til Datatilsynet (datatilsynet.no) hvis du mener personopplysninger behandles i strid med regelverket.
          </p>
        </div>
      </section>
    </>
  );
}
