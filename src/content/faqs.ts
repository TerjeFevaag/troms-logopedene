import type { Faq } from "./services";
import { ADDRESS_LINE } from "./site";

export const HOME_FAQS: Faq[] = [
  {
    q: "Hva gjør en logoped?",
    a: "En logoped utreder, gir råd og behandler vansker med språk, tale, stemme, flyt i talen og svelging, hos barn og voksne. Vi hjelper også ved lese- og skrivevansker og med kommunikasjonshjelpemidler.",
  },
  {
    q: "Trenger jeg henvisning for å komme til logoped?",
    a: "For at behandlingen skal dekkes av HELFO, trengs vanligvis henvisning fra fastlege eller spesialist. For barn og unge under 18 år kreves i tillegg avslag på logopedisk oppfølging fra kommunen (PPT) eller fylket. Se siden om refusjon.",
  },
  {
    q: "Får jeg dekket behandlingen av HELFO?",
    a: "Behandling hos logoped med refusjonsavtale dekkes for de fleste gjennom folketrygden når vilkårene er oppfylt. Vi kan hjelpe med søknadsprosessen. Ta kontakt for oppdatert informasjon om vår avtale.",
  },
  {
    q: "Hvem kan komme til dere?",
    a: "Både barn og voksne. Vi hjelper blant annet ved språkvansker, stamming, stemmevansker, svelgevansker, afasi, dysleksi og behov for alternativ og supplerende kommunikasjon.",
  },
  {
    q: "Hvor foregår behandlingen?",
    a: `Vi behandler på kontoret vårt i ${ADDRESS_LINE}, eller etter avtale i hjemmet, barnehagen eller skolen. Ta kontakt for å høre hva som er mulig i ditt tilfelle.`,
  },
  {
    q: "Hvordan bestiller jeg time?",
    a: "Ta kontakt på telefon eller e-post, eller bruk kontaktskjemaet. Vi finner sammen ut hva som passer og hvilke papirer som trengs.",
  },
];

export const ABOUT_FAQS: Faq[] = [
  {
    q: "Hvem er Tromsølogopedene?",
    a: "Tromsølogopedene er en logopedpraksis i Tromsø drevet av logopedene Ingrid Steineger Dahl og Berit Småbakk, begge MNLL (medlem av Norsk Logopedlag).",
  },
  {
    q: "Hva betyr MNLL?",
    a: "MNLL betyr medlem av Norsk Logopedlag, den faglige organisasjonen for logopeder i Norge.",
  },
  {
    q: "Hvilke retningslinjer følger dere?",
    a: "Vi arbeider etter Norsk Logopedlags etiske retningslinjer og de satsene for undersøkelse og behandling som HELFO har satt.",
  },
  {
    q: "Hva er forskjellen på logoped og audiopedagog eller spesialpedagog?",
    a: "Logopeder har særlig fagkompetanse på språk, tale, stemme, flyt og svelging. Andre faggrupper kan ha andre ansvarsområder. Vi samarbeider gjerne med dem rundt deg.",
  },
  {
    q: "Samarbeider dere med andre?",
    a: "Ja. Vi samarbeider med fastleger, sykehus, kompetansesentre, PPT, barnehager og skoler når det trengs, og alltid med ditt samtykke.",
  },
];

export const REFUSJON_FAQS: Faq[] = [
  {
    q: "Hva trenger jeg for å få behandlingen dekket av HELFO?",
    a: "Henvisning fra spesialist eller fastlege med diagnose i henhold til ICPC-2. For barn og unge under 18 år trengs også avslag på logopedisk oppfølging fra kommunen (PPT) eller fylket (for elever i videregående opplæring).",
  },
  {
    q: "Kan dere hjelpe med papirene til HELFO?",
    a: "Ja. Vi kan være behjelpelige med søknadsprosessen og videresender aktuelle papirer til HELFO hvis du ønsker det.",
  },
  {
    q: "Hvor finner jeg mer informasjon?",
    a: "Se helfo.no, eller ta kontakt med oss.",
  },
];
