/**
 * Starter articles (Norwegian). Intended for review by Ingrid and Berit before publishing.
 * - In development without a database they show up as published, so the pages can be reviewed.
 * - `npm run db:seed-articles` inserts them into the database as DRAFTS (add `--publish` to publish).
 * Dates are placeholders: adjust when publishing. Content is general information, not individual advice.
 */
export type SeedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  cover?: { src: string; alt: string };
  publishedAt: string; // ISO date
  body: string; // HTML limited to what lib/sanitize.ts allows
};

export const SEED_ARTICLES: SeedArticle[] = [
  {
    slug: "nar-bor-du-ta-kontakt-med-logoped-for-barnet",
    cover: { src: "/images/articles/nar-bor-du-ta-kontakt-med-logoped-for-barnet.jpg", alt: "Lite barn blar i en bildebok hjemme i stuen" },
    title: "Når bør du ta kontakt med logoped for barnet ditt?",
    excerpt:
      "Barn utvikler språk i ulikt tempo. Her er noen tegn som kan være grunn til å få en vurdering, og hva du kan gjøre først.",
    seoTitle: "Når bør barnet til logoped? Tegn på språkvansker",
    seoDescription:
      "Tegn på at barnet kan trenge hjelp med språk eller tale, og hva du som forelder kan gjøre. Informasjon fra logopedene i Tromsø.",
    publishedAt: "2026-10-06T08:00:00+02:00",
    body: `
<p>Alle barn utvikler språk i sitt eget tempo, og det er stor variasjon i hva som regnes som vanlig. Likevel kan det være lurt å få en vurdering tidlig hvis du er usikker. Å spørre koster ingenting, og tidlig hjelp gjør ofte en forskjell.</p>
<h2>Tegn som kan være grunn til å ta kontakt</h2>
<p>Dette er eksempler, ikke en fasit. Ett enkelt tegn betyr ikke nødvendigvis at noe er galt, men flere sammen eller bekymring over tid er et godt signal.</p>
<ul>
<li>Barnet bruker få ord eller sjelden setter sammen ord til små setninger i to- til treårsalderen.</li>
<li>Barnet forstår ikke enkle beskjeder, eller virker å forstå mindre enn jevnaldrende.</li>
<li>Andre enn de nærmeste har vanskelig for å forstå hva barnet sier etter at det har fylt tre til fire år.</li>
<li>Barnet strever med å finne ord, bruker mye «den der» og peker, eller gir opp å fortelle.</li>
<li>Barnet gjentar lyder eller ord, stopper opp eller får ordene til å «sitte fast», og blir frustrert av det.</li>
<li>Stemmen er hes eller anstrengt over lengre tid.</li>
<li>Du er rett og slett bekymret. Din magefølelse som forelder teller.</li>
</ul>
<h2>Sjekk hørselen</h2>
<p>Hørselen påvirker språkutviklingen. Hvis du lurer på om barnet hører godt, ta det opp med helsestasjonen eller fastlegen. En hørselsundersøkelse er ofte et naturlig første steg.</p>
<h2>Hva en logoped gjør</h2>
<p>Logopeden kartlegger hvordan barnet forstår og bruker språk og snakker, ofte gjennom lek og samtale med deg til stede. Du får en tydelig beskrivelse av funnene og en anbefaling om hva som er lurt å gjøre videre. Noen barn trenger bare råd til hverdagen, andre trenger oppfølging over tid.</p>
<h2>Kom i gang</h2>
<p>Du kan ringe en av oss og høre hva som passer for deg og barnet ditt. Les mer om <a href="/tjenester/sprakvansker">språkvansker hos barn og voksne</a>, og om hvordan <a href="/refusjon">refusjon fra HELFO</a> fungerer.</p>
`,
  },
  {
    slug: "stamming-hos-barn-rad-til-foreldre",
    cover: { src: "/images/articles/stamming-hos-barn-rad-til-foreldre.jpg", alt: "Forelder og barn ligger og ler sammen i et lekentelt mens de leser" },
    title: "Stamming hos små barn: råd til foreldre",
    excerpt:
      "Mange små barn går gjennom perioder med stamming. Slik kan du støtte barnet i hverdagen, og når det er lurt å få en vurdering.",
    seoTitle: "Stamming hos barn: råd til foreldre og når du bør få hjelp",
    seoDescription:
      "Hva du kan gjøre hvis barnet ditt stammer, og når du bør kontakte logoped. Om Lidcombe-programmet og PCI. Logoped i Tromsø.",
    publishedAt: "2026-10-13T08:00:00+02:00",
    body: `
<p>Stamming starter ofte tidlig, gjerne mellom to og fem års alder, når språket vokser raskt. Barnet kan gjenta lyder eller ord, forlenge lyder eller stoppe helt opp før et ord. For noen går det over av seg selv. For andre vedvarer det. Det er vanskelig å forutsi hvem som er hvem, og derfor er det lurt å få en vurdering hvis du er bekymret.</p>
<h2>Dette kan du gjøre hjemme</h2>
<ul>
<li>Gi barnet god tid. La det snakke ferdig uten å avbryte eller fullføre setninger.</li>
<li>Unngå råd som «ta det rolig» eller «tenk deg om først». De kan få barnet til å merke at det er noe galt.</li>
<li>Snakk selv litt roligere og med små pauser. Det gir barnet et rolig eksempel uten at du sier noe om stammingen.</li>
<li>Se på barnet og vis at du lytter til det som blir sagt, ikke til hvordan det blir sagt.</li>
<li>Sett av korte, rolige samtalestunder hver dag uten tidspress, for eksempel under lek eller leggerutinen.</li>
</ul>
<h2>Når bør du få en vurdering?</h2>
<p>Ta kontakt med logoped hvis stammingen har vart i noen måneder, hvis den blir tydeligere, hvis barnet virker anspent eller frustrert, eller hvis det finnes stamming i nær familie. Du trenger ikke vente og se hvis du er urolig.</p>
<h2>Behandling av tidlig stamming</h2>
<p>For små barn finnes behandlingsmetoder der foreldrene er med som viktige støttespillere. Hos oss tilbyr Berit Småbakk, som er sertifisert i begge, <strong>Lidcombe-programmet</strong> (for barn fra tre til seks år) og <strong>PCI</strong>, foreldre–barn-behandling (for barn fra to til sju år). Hvilken tilnærming som passer, avgjør vi etter en vurdering og en samtale med dere.</p>
<p>Les mer på siden om <a href="/tjenester/stamming">stamming og løpsk tale</a>, eller <a href="/kontakt">ta kontakt</a>.</p>
`,
  },
  {
    slug: "slik-far-du-logopedbehandling-dekket-av-helfo",
    cover: { src: "/images/articles/slik-far-du-logopedbehandling-dekket-av-helfo.jpg", alt: "Kvinnelig lege sitter ved skrivebordet sitt" },
    title: "Slik får du logopedbehandling dekket av HELFO",
    excerpt:
      "De fleste får logopedbehandling dekket gjennom folketrygden hvis vilkårene er oppfylt. Her er hva du trenger, steg for steg.",
    seoTitle: "Logoped og HELFO: henvisning og refusjon forklart",
    seoDescription:
      "Hva du trenger for å få logopedbehandling dekket av HELFO: henvisning, diagnose og avslag fra kommunen eller fylket. Logoped i Tromsø.",
    publishedAt: "2026-10-20T08:00:00+02:00",
    body: `
<p>Mange lurer på om logopedbehandling dekkes av det offentlige. Det kan det gjøre, men bare hvis vilkårene er oppfylt. Her er en enkel oversikt. Regelverket kan endres, så sjekk alltid oppdatert informasjon på <a href="https://www.helfo.no">helfo.no</a>.</p>
<h2>Dette trenger du</h2>
<ol>
<li><strong>Henvisning</strong> fra fastlege eller spesialist, med diagnose etter ICPC-2.</li>
<li><strong>Avslag på logopedisk oppfølging</strong> fra kommunen (PPT) eller fylket (gjelder elever i videregående opplæring). Dette gjelder for barn og unge under 18 år.</li>
</ol>
<p>For voksne er det vanligvis henvisningen som er det sentrale.</p>
<h2>Slik går du frem</h2>
<ul>
<li>Snakk med fastlegen din om vanskene og be om henvisning til logoped.</li>
<li>Gjelder det et barn eller en ungdom under 18 år, søk først om logopedisk hjelp via kommunen (PPT), eller fylket for videregående elever, og be om skriftlig svar.</li>
<li>Ta kontakt med en av logopedene. Vi forteller deg hva som mangler og hva som er neste steg.</li>
</ul>
<h2>Vi hjelper deg</h2>
<p>Er du usikker på hvordan du skal gå frem, kan du kontakte en av oss. Vi videresender om ønskelig aktuelle papirer til HELFO.</p>
<p>Se også siden om <a href="/refusjon">refusjon og henvisning</a>.</p>
`,
  },
  {
    slug: "slik-tar-du-vare-pa-stemmen",
    cover: { src: "/images/articles/slik-tar-du-vare-pa-stemmen.jpg", alt: "Et glass vann på et trebord" },
    title: "Slik tar du vare på stemmen i hverdagen",
    excerpt:
      "Stemmen er et arbeidsredskap for mange. Enkle vaner kan beskytte den, og noen tegn bør sjekkes av lege eller logoped.",
    seoTitle: "Stemmehygiene: tips for å ta vare på stemmen",
    seoDescription:
      "Enkle råd for en sunn stemme, og når hes eller sliten stemme bør undersøkes. Informasjon fra logopedene i Tromsø.",
    publishedAt: "2026-10-27T08:00:00+01:00",
    body: `
<p>Lærere, barnehageansatte, kundebehandlere og mange andre bruker stemmen hele dagen. Men stemmen kan bli sliten for alle, særlig ved forkjølelse, lite søvn eller mye snakking i støyende omgivelser.</p>
<h2>Vaner som hjelper</h2>
<ul>
<li><strong>Drikk nok vann</strong> gjennom dagen. Stemmebåndene fungerer best når kroppen er godt hydrert.</li>
<li><strong>Ta pauser.</strong> Etter lange perioder med mye snakking hjelper det å hvile stemmen litt.</li>
<li><strong>Unngå å rope eller hviske hardt.</strong> Begge deler kan slite på stemmen. Prøv heller å komme nærmere den du snakker med, eller bruk andre virkemidler for å få oppmerksomhet.</li>
<li><strong>Unngå hyppig kremting.</strong> Prøv å svelge, ta en slurk vann eller gjøre en myk «hmm» i stedet.</li>
<li><strong>Snakk i støyende omgivelser med omhu.</strong> Å snakke over bakgrunnsstøy får mange til å presse stemmen.</li>
<li><strong>La kroppen være avspent.</strong> Spente skuldre og nakke kan prege stemmen.</li>
</ul>
<h2>Når bør du få det sjekket?</h2>
<p>Hvis du er hes eller har en forandret stemme i mer enn noen uker uten at du er forkjølet, bør du ta kontakt med fastlegen. Stemmebåndene bør da undersøkes av lege (øre-nese-hals), slik at man kan utelukke sykdom. Logoped kan så hjelpe med stemmetrening og vaner.</p>
<h2>Hva en logoped kan hjelpe med</h2>
<p>Logopeden kartlegger stemmebruken din gjennom samtale og funksjonsøvelser og gir konkrete øvelser og råd til hverdagen. Les mer om <a href="/tjenester/stemmevansker">stemmevansker</a>.</p>
`,
  },
  {
    slug: "dysleksi-tegn-og-hva-en-utredning-innebaerer",
    cover: { src: "/images/articles/dysleksi-tegn-og-hva-en-utredning-innebaerer.jpg", alt: "Bokstavklosser i tre med fargede bokstaver" },
    title: "Dysleksi: tegn å se etter og hva en utredning innebærer",
    excerpt:
      "Lese- og skrivevansker har ingenting med intelligens å gjøre. Her er noen tegn, og hva som skjer ved en utredning.",
    seoTitle: "Dysleksi: tegn og utredning av lese- og skrivevansker",
    seoDescription:
      "Tegn på dysleksi hos barn og voksne, og hva en utredning med LOGOS innebærer. Logoped i Tromsø.",
    publishedAt: "2026-11-03T08:00:00+01:00",
    body: `
<p>Dysleksi er en vanske med å lese og skrive, og har ingenting å gjøre med hvor smart noen er. Mange med dysleksi er flinke på andre områder. Dysleksi kan gå igjen i familier, og en tidlig forståelse av vanskene kan gjøre hverdagen mye lettere.</p>
<h2>Tegn å se etter</h2>
<p>Dette er eksempler. Ett enkelt tegn betyr ikke nødvendigvis dysleksi.</p>
<ul>
<li>Barnet har vansker med rim, lydlek og å lære bokstavene før skolestart.</li>
<li>Lesingen går langsomt og slitsomt, og barnet gjetter på ord framfor å lese dem.</li>
<li>Det er vanskelig å huske hvordan ord staves, og samme ord kan skrives på ulike måter.</li>
<li>Barnet eller den unge unngår å lese høyt, og virker sliten eller lei av lekser.</li>
<li>Voksne kan kjenne seg igjen i at lesing og skriving alltid har krevd mye mer krefter enn for andre.</li>
</ul>
<h2>Hva skjer ved en utredning?</h2>
<p>Hos oss utreder vi lese- og skrivevansker med den datamaskinbaserte kartleggingen <strong>LOGOS</strong>, sammen med andre kartlegginger og en samtale. Du får en tydelig beskrivelse av funnene og anbefaling om videre oppfølging, tilpasset barnet eller den voksnes behov.</p>
<h2>Hjelp i hverdagen</h2>
<p>Det finnes tilpasninger og hjelpemidler som kan hjelpe, for eksempel staveprogram. Vi kan hjelpe med dokumentasjon og søknad om staveprogram for dyslektikere.</p>
<p>Les mer om <a href="/tjenester/dysleksi">lese- og skrivevansker og dysleksi</a>, eller <a href="/kontakt">ta kontakt</a>.</p>
`,
  },
  {
    slug: "svelgevansker-tegn-du-ikke-bor-overse",
    cover: { src: "/images/articles/svelgevansker-tegn-du-ikke-bor-overse.jpg", alt: "En skål med suppe og en skje" },
    title: "Svelgevansker: tegn du ikke bør overse",
    excerpt:
      "Svelgevansker kan være lette å overse. Her er tegn som bør tas på alvor, og hva en logoped kan hjelpe med.",
    seoTitle: "Svelgevansker (dysfagi): tegn og hjelp fra logoped",
    seoDescription:
      "Tegn på svelgevansker og hva du bør gjøre. Om logopedisk utredning og behandling av dysfagi i Tromsø.",
    publishedAt: "2026-11-04T08:00:00+01:00",
    body: `
<p>Å svelge er noe vi sjelden tenker på, helt til det ikke fungerer. Svelgevansker (dysfagi) kan komme etter hjerneslag eller andre nevrologiske sykdommer, ved aldring, og av andre årsaker. Mange venner seg til vanskene og tar ikke opp problemet, men det er viktig å få det vurdert.</p>
<h2>Tegn som bør tas på alvor</h2>
<ul>
<li>Hoste eller kremting under eller rett etter måltider eller når man drikker.</li>
<li>Våt eller gurglende stemme etter at man har spist eller drukket.</li>
<li>Følelse av at mat eller drikke «setter seg fast» i halsen.</li>
<li>Måltider som tar uvanlig lang tid, eller at man unngår visse typer mat.</li>
<li>Uønsket vekttap eller gjentatte infeksjoner i luftveiene.</li>
<li>Spytt som renner ut av munnen eller samler seg i munnen.</li>
</ul>
<p><strong>Ved akutt kvelning eller pustevansker: ring 113.</strong></p>
<h2>Hva bør du gjøre?</h2>
<p>Ta kontakt med fastlegen din, som kan henvise videre. Logoped kan så utrede hvordan svelgingen fungerer, og foreslå tiltak og oppfølging.</p>
<h2>Hvordan logopeden kan hjelpe</h2>
<p>Etter en kartlegging legger logopeden en plan som kan inneholde funksjonsøvelser, råd om kosttilpasning og, når det passer, metoder som VitalStim, biofeedback og Novafon. Berit Småbakk er sertifisert i <em>McNeill Dysphagia Theory Program</em>.</p>
<p>Les mer om <a href="/tjenester/svelgevansker">spise- og svelgevansker</a>, eller <a href="/kontakt">ta kontakt</a>.</p>
`,
  },
];
