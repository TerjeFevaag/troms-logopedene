import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactBlock } from "@/components/ContactBlock";
import { Faq } from "@/components/Faq";
import { ServiceIcon } from "@/components/ServiceIcon";
import { HOME_FAQS } from "@/content/faqs";
import { HELFO_TEXT } from "@/content/helfo";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { TEAM } from "@/content/team";
import { getLatestArticles } from "@/lib/articles";

export const revalidate = 300;

export const metadata: Metadata = {
  title: { absolute: "Logoped i Tromsø | Tromsølogopedene" },
  description:
    "Logoped i Tromsø for barn og voksne. Utredning, rådgiving og behandling ved språk-, tale- og stemmevansker, stamming, svelgevansker og dysleksi.",
  alternates: { canonical: "/" },
};

// Keep these short and plain: many visitors have reading and writing difficulties.
const FACTS = [
  { big: String(TEAM.length), label: "logopeder", text: "Alle er medlem av Norsk Logopedforbund." },
  { big: String(SERVICES.length), label: "fagområder", text: "Fra språk og stamming til svelging." },
  { big: "Alle", label: "aldre", text: "Fra småbarn til eldre." },
  { big: "HELFO", label: "dekker det meste", text: "Med henvisning fra lege betaler du ingen egenandel." },
];

export default async function Home() {
  const articles = await getLatestArticles(3);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/hero.jpg"
          quality={90}
          alt="Logoped sammen med et barn i en logopedtime"
          fill
          priority
          sizes="(min-width: 1280px) 2200px, (min-width: 768px) 1900px, 1px"
          className="-z-10 hidden object-cover md:block md:object-right"
        />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white from-20% via-white/55 via-45% to-transparent md:block 2xl:to-60%" aria-hidden="true" />
        <div className="mx-auto max-w-site px-4 pb-8 pt-12 sm:px-6 md:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark">{SITE.slogan}</p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold sm:text-5xl lg:text-6xl">Logoped i Tromsø for barn og voksne</h1>
          <p className="mt-5 max-w-lg text-lg text-ink md:text-xl">
            Strever du eller barnet ditt med å snakke, forstå eller svelge? Vi kan hjelpe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt">Bestill time</Button>
            <Button href="/tjenester" variant="outline">Se tjenester</Button>
          </div>
        </div>
        {/* Mobile uses the photo-only crop: hero.jpg has a white fade baked into its left half. */}
        <div className="px-4 pb-2 sm:px-6 md:hidden">
          <Image
            src="/images/hero-photo.jpg"
            quality={90}
            alt="Logoped sammen med et barn i en logopedtime"
            width={1600}
            height={1014}
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            className="aspect-[4/3] w-full rounded-2xl object-cover object-[85%_center]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-20" aria-labelledby="intro">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="intro" className="text-3xl font-bold md:text-4xl">Velkommen til oss</h2>
            <p className="mt-5 text-lg">
              Logopedene våre har lang erfaring med barn, ungdom og voksne. Sammen finner vi ut hva som er vanskelig. Så får du en plan for behandlingen.
            </p>
            <p className="mt-4 text-lg">
              Du finner oss i {SITE.address.street} i {SITE.address.city}. Etter avtale kan vi også komme hjem til deg, i barnehagen eller på skolen.
            </p>
            <Image src="/images/stock/mor-og-sonn-leser.jpg" alt="Mor og sønn leser en bok sammen i sofaen" width={1600} height={900} sizes="(min-width: 768px) 560px, 100vw" className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover" />
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {FACTS.map((f) => (
              <li key={f.label} className="rounded-2xl bg-tint p-5">
                <p className="text-3xl font-bold text-blue sm:text-4xl">{f.big}</p>
                <p className="font-semibold text-navy">{f.label}</p>
                <p className="mt-1 text-sm text-ink/80">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-tint py-16 md:py-20" aria-labelledby="tjenester">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <h2 id="tjenester" className="text-3xl font-bold md:text-4xl">Dette kan vi hjelpe deg med</h2>
          <p className="mt-3 max-w-2xl text-lg">Trykk på et område for å lese mer.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/tjenester/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-lg">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-tint text-sage-dark"><ServiceIcon name={s.icon} /></span>
                  <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-ink/85">{s.plain}</p>
                  <span className="mt-4 font-semibold text-blue group-hover:underline">Les mer →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-20" aria-labelledby="logopeder">
        <h2 id="logopeder" className="text-3xl font-bold md:text-4xl">Våre logopeder</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {TEAM.map((t) => (
            <li key={t.slug} className="flex gap-5 rounded-2xl border border-line p-5 sm:p-6">
              <Image src={t.photo} alt={`${t.name}, ${t.title}`} width={104} height={104} className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-[104px] sm:w-[104px]" />
              <div>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-sage-dark font-semibold">{t.title}</p>
                <p className="mt-2 text-ink/85">{t.lead}</p>
                <Link href={`/logopeder/${t.slug}`} className="mt-1 inline-block py-2 font-semibold text-blue hover:underline">Les mer om {t.name.split(" ")[0]} →</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sage-dark py-14 text-white md:py-16" aria-labelledby="helfo">
        <div className="mx-auto grid max-w-site gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 id="helfo" className="!text-white text-3xl font-bold">Hva koster det?</h2>
            <p className="mt-3 max-w-2xl text-lg text-white/90">
              {HELFO_TEXT.band}
            </p>
          </div>
          <Button href="/refusjon" variant="light">Les mer om HELFO</Button>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="mx-auto max-w-site px-4 py-16 sm:px-6 md:py-20" aria-labelledby="artikler">
          <div className="flex items-end justify-between gap-4">
            <h2 id="artikler" className="text-3xl font-bold md:text-4xl">Siste artikler</h2>
            <Link href="/artikler" className="font-semibold text-blue hover:underline">Alle artikler →</Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <li key={a.id} className="overflow-hidden rounded-2xl border border-line">
                {a.coverImageUrl && (
                  <div className="relative aspect-video">
                    <Image src={a.coverImageUrl} alt={a.coverAlt ?? ""} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <p className="text-sm text-ink/70">{new Intl.DateTimeFormat("nb-NO", { dateStyle: "long" }).format(a.publishedAt ?? a.updatedAt)}</p>
                  <h3 className="mt-1 text-lg font-bold"><Link href={`/artikler/${a.slug}`} className="hover:underline">{a.title}</Link></h3>
                  <p className="mt-2 text-ink/85">{a.excerpt}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Faq faqs={HOME_FAQS} />
      <ContactBlock />
    </>
  );
}
