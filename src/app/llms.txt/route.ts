import { SERVICES } from "@/content/services";
import { ADDRESS_LINE, SITE, abs } from "@/content/site";
import { TEAM } from "@/content/team";
import { getPublishedArticles } from "@/lib/articles";

export const revalidate = 3600;

export async function GET() {
  const articles = await getPublishedArticles();
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description} Nettstedet er på norsk (bokmål).`,
    "",
    `Logopedpraksis i Tromsø for barn, ungdom og voksne. Vi behandler på kontoret i ${ADDRESS_LINE}, eller etter avtale i hjemmet, barnehagen og skolen. Behandling kan dekkes av HELFO med henvisning fra lege med diagnose. Ingen egenandel, ingen søknad til HELFO, og barn trenger ikke avslag fra kommunen/PPT. Lese- og skrivevansker/dysleksi dekkes ikke.`,
    "",
    "## Tjenester",
    ...SERVICES.map((s) => `- [${s.name}](${abs(`/tjenester/${s.slug}`)}): ${s.short}`),
    "",
    "## Logopeder",
    ...TEAM.map((t) => `- [${t.name}, ${t.title}](${abs(`/logopeder/${t.slug}`)}): ${t.lead}`),
    "",
    "## Viktige sider",
    `- [Om oss](${abs("/om-oss")}): Hvem vi er og hvordan vi jobber`,
    `- [Refusjon og henvisning](${abs("/refusjon")}): Regler for behandling dekket av HELFO`,
    `- [Kontakt](${abs("/kontakt")}): Telefon og kontaktskjema`,
    `- [Artikler](${abs("/artikler")}): Artikler fra logopedene`,
    "",
    ...(articles.length
      ? ["## Artikler", ...articles.map((a) => `- [${a.title}](${abs(`/artikler/${a.slug}`)})${a.excerpt ? `: ${a.excerpt}` : ""}`), ""]
      : []),
    "## Kontakt",
    `- Adresse: ${ADDRESS_LINE}`,
    ...TEAM.map((t) => `- ${t.name}: ${t.phone}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
