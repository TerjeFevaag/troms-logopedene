import { HELFO_TEXT } from "./helfo";

export type Faq = { q: string; a: string };

export type ServiceImage = { src: string; alt: string; width: number; height: number };

export type Service = {
  slug: string;
  image?: ServiceImage; // optional photo shown at the top of the service page
  name: string;
  short: string; // card one-liner (service overview, llms.txt)
  plain: string; // very simple card text for the home page and menu (readers with reading difficulties)
  metaTitle: string;
  metaDescription: string;
  lead: string;
  icon: "chat" | "wave" | "voice" | "swallow" | "face" | "book" | "breath" | "ear" | "aac";
  forWho: string[];
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  faqs: Faq[];
  related: string[];
  /** false when HELFO does not cover the service (e.g. dysleksi). Defaults to covered. */
  helfoCovered?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "sprakvansker",
    image: { src: "/images/stock/mor-og-sonn-leser.jpg", alt: "Mor og sønn leser en bok sammen i sofaen", width: 1600, height: 900 },
    name: "Språkvansker",
    short: "Utredning og behandling av språkvansker hos barn og voksne, inkludert afasi etter hjerneskade.",
    plain: "For barn og voksne som strever med å forstå eller bruke språk. Også etter hjerneslag.",
    metaTitle: "Språkvansker hos barn og voksne i Tromsø",
    metaDescription:
      "Logoped i Tromsø for språkvansker hos barn og voksne: språklyder, ordforråd, grammatikk og afasi. Utredning og behandling hos Tromsølogopedene.",
    lead: "Språkvansker kan handle om å forstå språk, å uttrykke seg, eller begge deler. Vi utreder og følger opp barn og voksne, med tilnærminger tilpasset alder og behov.",
    icon: "chat",
    forWho: [
      "Barn med vansker med språklyder, ordforråd, begrepsforståelse, setningsstruktur, grammatikk og bruk av språket",
      "Voksne med afasi, dysfasi, dyspraksi og andre kognitive vansker etter hjerneskade",
    ],
    sections: [
      {
        heading: "Språkvansker hos barn",
        paragraphs: [
          "Noen barn har vansker med å uttale språklyder, lære ord, forstå begreper eller bygge setninger og bruke grammatikk. Andre strever med å bruke språket i samspill med andre.",
          "Vi bruker lekpregede tilnærminger som passer barnets alder og behov, og involverer foreldre og andre voksne rundt barnet, slik at øvingen også skjer i hverdagen.",
        ],
      },
      {
        heading: "Språkvansker etter hjerneskade",
        paragraphs: [
          "Etter hjerneskade, for eksempel hjerneslag, kan språket bli rammet. Det kalles ofte afasi. Vi kartlegger hva som fungerer og hva som er vanskelig, og lager en plan sammen med deg.",
        ],
      },
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Ulike kartlegginger, sammen med eventuelle andre utredninger og dine ønsker og behov, danner grunnlaget for det videre arbeidet. Du får en tydelig beskrivelse av funnene og hva vi anbefaler.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hvordan vet jeg om barnet mitt har en språkvanske?",
        a: "Tegn kan være at barnet har få ord for alderen, vanskeligheter med å forstå beskjeder, korte eller grammatisk uvanlige setninger, eller at andre har vanskelig for å forstå barnet. Er du usikker, kan du ta kontakt med oss eller fastlegen. En logoped kan kartlegge og gi en vurdering.",
      },
      {
        q: "Trenger jeg henvisning?",
        a: HELFO_TEXT.referral,
      },
      {
        q: "Behandler dere både barn og voksne?",
        a: "Ja. Vi følger opp både barn og voksne med språkvansker, blant annet afasi etter hjerneskade.",
      },
      {
        q: "Kan foreldre være med i behandlingen?",
        a: "Ja. For barn er foreldrenes deltakelse ofte en viktig del av opplegget, og vi gir veiledning slik at øvingen kan fortsette hjemme.",
      },
    ],
    related: ["ask", "dysleksi", "lyttetrening-ci"],
  },
  {
    slug: "stamming",
    name: "Stamming og løpsk tale",
    short: "Behandling av taleflytvansker for barn og voksne, blant annet Lidcombe-programmet og PCI.",
    plain: "Hjelp når talen hakker eller stopper opp.",
    metaTitle: "Stamming og løpsk tale: behandling i Tromsø",
    metaDescription:
      "Logoped i Tromsø for stamming og løpsk tale. Lidcombe-programmet, PCI stammebehandling og Restart-DCM hos Tromsølogopedene.",
    lead: "Stamming og løpsk tale handler om talens flyt. Etter kartlegging og samtale velger vi tilnærmingen som passer deg og familien best.",
    icon: "wave",
    forWho: [
      "Småbarn og barn som stammer",
      "Foreldre som lurer på om barnets talevansker er stamming",
      "Ungdom og voksne med stamming eller løpsk tale",
    ],
    sections: [
      {
        heading: "Hva vi tilbyr",
        paragraphs: ["Etter kartlegging og samtaler avgjøres hvilken type tilnærming som passer den enkelte og familien. Vi kan blant annet tilby:"],
        bullets: [
          "Lidcombe-programmet: foreldreveiledning/behandling av småbarnsstamming (3–6 år)",
          "PCI stammebehandling: foreldre–barn-terapi (2–7 år)",
          "Restart-DCM",
        ],
      },
      {
        heading: "Tidlig innsats",
        paragraphs: [
          "Mange barn går gjennom en periode med uflyt i språkutviklingen. Hos noen vedvarer den. Tidlig vurdering gir trygghet og gir oss muligheten til å starte behandling i tide hvis det trengs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hva er Lidcombe-programmet?",
        a: "Lidcombe-programmet er en behandling for småbarnsstamming (3–6 år) der foreldrene får veiledning i å gi barnet tilbakemelding i dagliglivet, med jevnlig oppfølging av logoped.",
      },
      {
        q: "Hva er PCI stammebehandling?",
        a: "PCI (Parent–Child Interaction) er foreldre–barn-terapi for barn i alderen 2–7 år. Foreldrene lærer å støtte barnets taleflyt gjennom samspillet.",
      },
      {
        q: "Når bør jeg ta kontakt hvis barnet stammer?",
        a: "Du kan ta kontakt så snart du er bekymret. Vi anbefaler å ikke vente lenge hvis stammingen har vart noen måneder eller barnet virker plaget av den.",
      },
      {
        q: "Behandler dere voksne som stammer?",
        a: "Ja. Vi kartlegger og tilbyr oppfølging også for voksne, avhengig av dine mål og behov.",
      },
    ],
    related: ["stemmevansker", "sprakvansker"],
  },
  {
    slug: "stemmevansker",
    name: "Stemmevansker",
    short: "Kartlegging og trening ved hes, anstrengt eller slitt stemme.",
    plain: "Når stemmen er hes, sliten eller anstrengt.",
    metaTitle: "Stemmevansker: logoped i Tromsø",
    metaDescription:
      "Har du stemmevansker? Logoped i Tromsø hjelper med kartlegging, funksjonsøvelser og gode stemmevaner. Tromsølogopedene.",
    lead: "Via samtaler og funksjonsøvelser kartlegger vi årsakene til stemmevansken og lager en plan for å bedre stemmefunksjonen.",
    icon: "voice",
    forWho: [
      "Barn og voksne med hes, anstrengt eller slitt stemme",
      "Personer som bruker stemmen mye i jobben",
      "Personer som er henvist etter ØNH-utredning",
    ],
    sections: [
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Kartleggingen sammen med ØNH-utredningen er retningsgivende for det videre arbeidet. Samarbeidet med logopeden består gjerne av trening med spesifikke øvelser, samt bevissthetsarbeid for å innarbeide gode stemmevaner.",
        ],
      },
    ],
    faqs: [
      {
        q: "Må jeg til lege først?",
        a: "Ved stemmevansker er det vanlig at øre-nese-hals-lege (ØNH) undersøker stemmebåndene først. Utredningen er retningsgivende for arbeidet vi gjør sammen.",
      },
      {
        q: "Behandler dere barn med stemmevansker?",
        a: "Ja. Vi følger opp barn og voksne med stemmevansker.",
      },
      {
        q: "Hvor lang tid tar det å bedre stemmen?",
        a: "Det varierer med årsak og hvor mye du kan øve. Vi gir deg en realistisk plan etter kartleggingen.",
      },
    ],
    related: ["eilo-vcd", "stamming"],
  },
  {
    slug: "svelgevansker",
    name: "Spise- og svelgevansker (dysfagi)",
    short: "Utredning og behandling av svelgevansker, blant annet med VitalStim og Novafon.",
    plain: "Når det er vanskelig å spise, drikke eller svelge.",
    metaTitle: "Svelgevansker (dysfagi): logoped i Tromsø",
    metaDescription:
      "Logoped i Tromsø for spise- og svelgevansker (dysfagi). McNeill Dysphagia Theory Program, VitalStim, biofeedback og Novafon.",
    lead: "Svelgevansker kan gi forslukning, hosting under måltider og redusert matglede. Vi utreder og behandler med anerkjente metoder.",
    icon: "swallow",
    forWho: [
      "Personer med svelgevansker og pareser, for eksempel etter hjerneslag",
      "Personer som hoster eller forsluker seg under måltider",
    ],
    sections: [
      {
        heading: "Hva vi tilbyr",
        paragraphs: [
          "Innen svelgevansker og pareser kan vi tilby VitalStim og biofeedback, samt Novafon lydbølgeapparat i behandlingen, der dette synes hensiktsmessig. Vi tilbyr blant annet:",
        ],
        bullets: ["McNeill Dysphagia Theory Program", "Novafon eller VitalStim"],
      },
    ],
    faqs: [
      {
        q: "Hva er dysfagi?",
        a: "Dysfagi betyr svelgevansker, altså vansker med å spise, drikke eller svelge på en trygg og effektiv måte.",
      },
      {
        q: "Hva er McNeill Dysphagia Theory Program?",
        a: "Det er et strukturert treningsprogram for svelgevansker basert på målrettede svelgeøvelser. Berit Småbakk er sertifisert i metoden.",
      },
      {
        q: "Trenger jeg henvisning?",
        a: HELFO_TEXT.referral,
      },
    ],
    related: ["ansiktslammelse", "stemmevansker"],
  },
  {
    slug: "ansiktslammelse",
    name: "Ansiktslammelser (facialisparese)",
    short: "Funksjonsøvelser og stimulering ved lammelse i ansiktet.",
    plain: "Øvelser når ansiktet er lammet eller svakt.",
    metaTitle: "Ansiktslammelse (facialisparese) i Tromsø",
    metaDescription:
      "Logoped i Tromsø for ansiktslammelse (facialisparese). Funksjonsøvelser med Novafon og VitalStim hos Tromsølogopedene.",
    lead: "Ansiktslammelse kan påvirke tale, spising og uttrykk. Vi hjelper deg med målrettede øvelser og stimulering.",
    icon: "face",
    forWho: ["Personer med lammelse eller nedsatt funksjon i ansiktsmuskulaturen"],
    sections: [
      {
        heading: "Hva vi tilbyr",
        paragraphs: ["Vi tilbyr blant annet:"],
        bullets: ["Novafon og VitalStim sammen med funksjonsøvelser"],
      },
    ],
    faqs: [
      {
        q: "Hva er facialisparese?",
        a: "Facialisparese er lammelse eller svekkelse i ansiktsmuskulaturen, ofte på én side av ansiktet.",
      },
      {
        q: "Hva innebærer behandlingen?",
        a: "Behandlingen består av funksjonsøvelser, ofte kombinert med Novafon eller VitalStim der det er hensiktsmessig.",
      },
    ],
    related: ["svelgevansker", "sprakvansker"],
  },
  {
    slug: "dysleksi",
    image: { src: "/images/stock/forelder-og-barn-leser-i-telt.jpg", alt: "Forelder og barn leser sammen i et lekentelt", width: 1600, height: 1067 },
    name: "Lese- og skrivevansker / dysleksi",
    short: "Utredning med LOGOS og målrettet oppfølging ved lese- og skrivevansker.",
    plain: "Kartlegging og hjelp når lesing og skriving er vanskelig.",
    metaTitle: "Dysleksi og lese- og skrivevansker i Tromsø",
    metaDescription:
      "Utredning av lese- og skrivevansker og dysleksi med LOGOS hos logoped i Tromsø. Oppfølging og hjelp med søknad om staveprogram.",
    lead: "Vi utreder lese- og skrivevansker og kan avdekke dyslektiske trekk, med oppfølging tilpasset behovet.",
    icon: "book",
    forWho: [
      "Barn og unge som strever med lesing og skriving",
      "Voksne som mistenker dysleksi",
    ],
    sections: [
      {
        heading: "Utredning med LOGOS",
        paragraphs: [
          "Utredning med LOGOS, et databasert kartleggingsverktøy, kan sammen med tidligere og andre kartlegginger avdekke eventuelle dyslektiske trekk.",
        ],
      },
      {
        heading: "Oppfølging og hjelpemidler",
        paragraphs: [
          "Vi tilbyr spesifikk oppfølging av vanskene ved ønske eller behov. Vi kan også gi dokumentasjon og bistand ved søknad om staveprogrammer for dyslektikere.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hva er LOGOS?",
        a: "LOGOS er et databasert verktøy for kartlegging av lese- og skrivevansker. Resultatene vurderes sammen med andre opplysninger.",
      },
      {
        q: "Kan dere hjelpe med søknad om staveprogram?",
        a: "Ja. Vi kan gi dokumentasjon og bistand ved søknad om staveprogrammer for dyslektikere.",
      },
      {
        q: "Hvilken alder utreder dere?",
        a: "Ta kontakt, så vurderer vi sammen om en utredning er riktig og hva som passer for alderen.",
      },
      {
        q: "Dekker HELFO utredningen?",
        a: "Nei. Lese- og skrivevansker og dysleksi dekkes ikke av HELFO. Det er skolens ansvar å gi spesialundervisning. Ta kontakt hvis du vil vite hva en utredning koster hos oss.",
      },
    ],
    related: ["sprakvansker", "stamming"],
    helfoCovered: false,
  },
  {
    slug: "eilo-vcd",
    name: "VCD / EILO / stridor",
    short: "Kartlegging og trening ved anstrengelsesutløste pustevansker fra strupen.",
    plain: "Når det blir tungt å puste under trening.",
    metaTitle: "EILO, VCD og stridor: logoped i Tromsø",
    metaDescription:
      "Logoped i Tromsø for VCD (vocal cord dysfunction), EILO og stridor. Kartlegging, avspenning og innlæring av konkrete øvelser.",
    lead: "EILO og VCD gir pustevansker, ofte under anstrengelse, fordi strupen snevres inn. Vi kartlegger og lærer deg konkrete øvelser.",
    icon: "breath",
    forWho: [
      "Personer med anstrengelsesutløste pustevansker",
      "Idrettsutøvere og unge som får pustebesvær under hard trening",
    ],
    sections: [
      {
        heading: "Hva er EILO og VCD?",
        paragraphs: [
          "EILO står for anstrengelsesutløst inspiratorisk larynx-obstruksjon. VCD står for vocal cord dysfunction. Begge kan gi pustevansker og stridor (en pipende eller sugende lyd ved innpust).",
        ],
      },
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Vi tilbyr kartlegging og oppfølging med samtale, avspenning og innlæring av konkrete øvelser.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hva er forskjellen på EILO og astma?",
        a: "Ved EILO er det strupen som snevres inn, ikke luftveiene i lungene. Symptomene kan ligne, så riktig utredning hos lege er viktig. Logopeden jobber med pustemønster og øvelser.",
      },
      {
        q: "Trenger jeg henvisning?",
        a: HELFO_TEXT.referral,
      },
    ],
    related: ["stemmevansker", "svelgevansker"],
  },
  {
    slug: "lyttetrening-ci",
    name: "Lyttetrening etter CI-operasjon",
    short: "Logopedisk oppfølging og lyttetrening etter lydpåsetting av cochlea-implantat.",
    plain: "Lyttetrening når du har fått cochlea-implantat (CI).",
    metaTitle: "Lyttetrening etter CI-operasjon i Tromsø",
    metaDescription:
      "Logopedisk oppfølging og lyttetrening etter cochlea-implantat (CI) i Tromsø, etter henvisning fra kompetansesenter eller sykehus.",
    lead: "Etter henvisning fra kompetansesenter eller sykehus tilbyr vi logopedisk oppfølging og lyttetrening etter lydpåsetting.",
    icon: "ear",
    forWho: ["Barn og voksne som har fått cochlea-implantat (CI)"],
    sections: [
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Lyttetrening hjelper deg å utnytte det nye hørselsinntrykket i hverdagen. Opplegget tilpasses alder, behov og samarbeid med kompetansesenter eller sykehus.",
        ],
      },
    ],
    faqs: [
      {
        q: "Trenger jeg henvisning?",
        a: "Ja. For at HELFO skal dekke oppfølgingen, må henvisningen komme fra lege, for eksempel ved sykehuset. Vi samarbeider gjerne med sykehus og kompetansesenter underveis.",
      },
      {
        q: "Hvem utfører lyttetreningen?",
        a: "Ingrid Steineger Dahl følger opp lyttetrening etter cochlea-implantat.",
      },
    ],
    related: ["sprakvansker", "ask"],
  },
  {
    slug: "ask",
    name: "Alternativ og supplerende kommunikasjon (ASK)",
    short: "Tilpassing og utprøving av kommunikasjonshjelpemidler ved alvorlige språk- og talevansker.",
    plain: "Andre måter å kommunisere på, når det er vanskelig å snakke.",
    metaTitle: "ASK: alternativ og supplerende kommunikasjon",
    metaDescription:
      "Logoped i Tromsø for alternativ og supplerende kommunikasjon (ASK): tilpassing og utprøving av kommunikasjonshjelpemidler.",
    lead: "ASK er kommunikasjonsstøtte for personer med alvorlige språk- og talevansker. Vi tilpasser og prøver ut løsninger sammen med deg og dine nærmeste.",
    icon: "aac",
    forWho: [
      "Barn og voksne med alvorlige språk- og talevansker",
      "Familier og nærpersoner som trenger veiledning i bruk av kommunikasjonshjelpemidler",
    ],
    sections: [
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Tilpassing og utprøving gjøres av logoped med spesialkompetanse innen fagfeltet. Målet er at du skal kunne gjøre deg forstått og delta i hverdagen på dine premisser.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hva betyr ASK?",
        a: "ASK betyr alternativ og supplerende kommunikasjon, for eksempel tegn, bilder, kommunikasjonsbøker og talemaskiner.",
      },
      {
        q: "Kan ASK hindre at barnet lærer å snakke?",
        a: "Nei. Forskning tyder på at ASK ikke hindrer talen, og den kan i stedet støtte språkutviklingen. Logopeden vurderer hva som passer.",
      },
    ],
    related: ["sprakvansker", "lyttetrening-ci"],
  },
];

export const serviceBySlug = (s: string) => SERVICES.find((x) => x.slug === s);
