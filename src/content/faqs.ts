import type { Faq } from "./services";
import { ADDRESS_LINE } from "./site";

export const HOME_FAQS: Faq[] = [
  {
    q: "Hva gjør en logoped?",
    a: "En logoped utreder, gir råd og behandler vansker med språk, tale, stemme, flyt i talen og svelging, hos barn og voksne. Vi hjelper også ved lese- og skrivevansker og med kommunikasjonshjelpemidler.",
  },
  {
    q: "Trenger jeg henvisning for å komme til logoped?",
    a: "Du kan ta kontakt uten henvisning. For at HELFO skal dekke behandlingen, trenger du henvisning fra lege med diagnose. Fastlege, sykehuslege eller annen spesialist kan henvise. Barn og unge trenger ikke avslag fra kommunen eller PPT først. Se siden om refusjon.",
  },
  {
    q: "Får jeg dekket behandlingen av HELFO?",
    a: "Ja, de fleste behandlingene våre dekkes når du har henvisning fra lege. Det er ingen egenandel, og vi gjør opp direkte med HELFO, så du trenger ikke søke selv. Lese- og skrivevansker og dysleksi dekkes ikke.",
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
    a: "Ring en av logopedene, eller bruk kontaktskjemaet. Vi finner sammen ut hva som passer, og om du trenger henvisning fra lege.",
  },
];

export const ABOUT_FAQS: Faq[] = [
  {
    q: "Hvem er Tromsølogopedene?",
    a: "Tromsølogopedene er en logopedpraksis i Tromsø drevet av logopedene Ingrid Steineger Dahl og Berit Småbakk, begge MNLF (medlem av Norsk Logopedforbund).",
  },
  {
    q: "Hva betyr MNLF?",
    a: "MNLF betyr medlem av Norsk Logopedforbund, en fagorganisasjon for logopeder i Norge.",
  },
  {
    q: "Hvilke retningslinjer følger dere?",
    a: "Vi arbeider etter Norsk Logopedforbunds etiske retningslinjer og de satsene for undersøkelse og behandling som HELFO har satt.",
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
    a: "Henvisning fra lege med diagnose (ICPC-2 eller ICD-10). Fastlege, sykehuslege og andre spesialister kan henvise. Du trenger ikke søke HELFO selv.",
  },
  {
    q: "Må barnet mitt ha avslag fra kommunen eller PPT først?",
    a: "Nei, det er ikke et krav. Men HELFO dekker ikke behandlingen hvis barnet allerede får logopedhjelp for det samme fra kommunen, barnehagen eller skolen.",
  },
  {
    q: "Må jeg betale noe?",
    a: "Nei, det er ingen egenandel for logopedbehandling i folketrygden. Vi gjør opp direkte med HELFO.",
  },
  {
    q: "Hvor mange behandlinger dekkes?",
    a: "Det er ingen fast grense, og du trenger ikke ny henvisning underveis. Vi vurderer fortløpende sammen med deg om behandlingen fortsatt hjelper.",
  },
  {
    q: "Dekkes lese- og skrivevansker og dysleksi?",
    a: "Nei. Utredning og oppfølging av lese- og skrivevansker, dysleksi og dyskalkuli dekkes ikke av HELFO. Det er skolens ansvar.",
  },
];
