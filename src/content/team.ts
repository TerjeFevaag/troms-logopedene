export type Therapist = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  phone: string; // from old site, confirm with client
  email: string; // TODO(client) new address
  lead: string;
  intro: string;
  treats: string[];
  certifications: string[];
  services: string[]; // service slugs
};

export const TEAM: Therapist[] = [
  {
    slug: "ingrid-steineger-dahl",
    name: "Ingrid Steineger Dahl",
    title: "Logoped MNLL",
    photo: "/images/team/ingrid-steineger-dahl.jpg",
    phone: "466 68 638",
    email: "",
    lead: "Behandling og oppfølging av barn og voksne med språk- og talevansker.",
    intro:
      "Ingrid er logoped MNLL og arbeider med barn og voksne. Hun har særlig kompetanse på alternativ og supplerende kommunikasjon, språkvansker knyttet til biomedisinske tilstander og lyttetrening etter cochlea-implantat.",
    treats: [
      "Språk- og talevansker",
      "Språkvansker assosiert med biomedisinske tilstander (LDx)",
      "Alternativ og supplerende kommunikasjon / kommunikasjonshjelpemidler",
      "Cochlea implantat (lyttetrening)",
      "Stemmevansker (barn)",
    ],
    certifications: [],
    services: ["sprakvansker", "ask", "lyttetrening-ci", "stemmevansker"],
  },
  {
    slug: "berit-smabakk",
    name: "Berit Småbakk",
    title: "Logoped MNLL",
    photo: "/images/team/berit-smabakk.jpg",
    phone: "911 82 401",
    email: "",
    lead: "Behandling og oppfølging av barn og voksne, med særlig kompetanse på stamming og svelgevansker.",
    intro:
      "Berit er logoped MNLL og behandler barn og voksne. Hun er sertifisert i Lidcombe-programmet, PCI stammebehandling og McNeill Dysphagia Theory Program, og utreder lese- og skrivevansker med LOGOS.",
    treats: [
      "Språk- og talevansker",
      "Taleflytvansker (stamming og løpsk tale)",
      "Afasi (språkvansker etter hjerneskade), dysartri og dysfagi (svelgevansker)",
      "Ansiktslammelser",
      "Stemmevansker",
      "VCD (vocal cord dysfunction) / EILO / stridor",
      "Utredning (LOGOS) av lese- og skrivevansker/dysleksi, samt dokumentasjon og bistand ved søknad om staveprogrammer for dyslektikere",
    ],
    certifications: [
      "Lidcombe-programmet: foreldreveiledning/behandling av småbarnsstamming (3–6 år)",
      "PCI stammebehandling: foreldre–barn-terapi (2–7 år)",
      "McNeill Dysphagia Theory Program",
    ],
    services: [
      "sprakvansker",
      "stamming",
      "svelgevansker",
      "ansiktslammelse",
      "stemmevansker",
      "eilo-vcd",
      "dysleksi",
    ],
  },
];

export const therapistBySlug = (s: string) => TEAM.find((t) => t.slug === s);
