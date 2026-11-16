// Single source for what the site says about HELFO coverage.
// Rules checked 2026-11-16 against:
// - Forskrift om stønad til dekning av utgifter til undersøkelse og behandling hos logoped og audiopedagog
//   (FOR-2021-12-17-3709, in force 1 Jan 2022): https://lovdata.no/dokument/SF/forskrift/2021-12-17-3709
// - Helsedirektoratets rundskriv til folketrygdloven § 5-10 (comments on § 1 and § 3).
// Key points: referral from any doctor with diagnosis (ICPC-2 or ICD-10); no application to HELFO and no
// avslag from kommune/PPT required (since 2022); no egenandel; no 25-treatment limit; no stønad if the
// patient gets the same help from kommune/fylkeskommune; dysleksi/dyskalkuli are NOT covered.
// Confirmed by the client 2026-11-16: the practice has "avtale om direkte oppgjør" with HELFO.

export const HELFO_SOURCES = {
  forskrift: "https://lovdata.no/dokument/SF/forskrift/2021-12-17-3709",
  rundskriv:
    "https://www.helsedirektoratet.no/rundskriv/folketrygdloven-kap-5/rundskriv-til-folketrygdloven--5-10--logoped-og-audiopedagog",
};

export const HELFO_TEXT = {
  /** One sentence for cards and short blurbs. */
  short: "Med henvisning fra lege dekker HELFO de fleste behandlingene. Det er ingen egenandel, og du trenger ikke søke selv.",
  /** Slightly longer, for the home page band. */
  band: "Har du henvisning fra lege, dekker HELFO de fleste behandlingene. Da betaler du ingenting, og du trenger ikke søke selv. Barn trenger ikke avslag fra kommunen først.",
  /** Shown on service pages that are covered. */
  serviceCovered:
    "Behandlingen kan dekkes av HELFO når du har henvisning fra lege med diagnose. Det er ingen egenandel, og vi gjør opp direkte med HELFO.",
  /** Shown on service pages that are not covered. */
  serviceNotCovered:
    "Utredning og oppfølging av lese- og skrivevansker og dysleksi dekkes ikke av HELFO. Det er skolens ansvar å gi spesialundervisning. Ta kontakt hvis du vil vite hva en utredning koster hos oss.",
  /** Answer to "Trenger jeg henvisning?" on service pages. */
  referral:
    "Ja, fra lege, hvis HELFO skal dekke behandlingen. Fastlege, sykehuslege eller annen spesialist kan henvise, og henvisningen må inneholde en diagnose.",
};
