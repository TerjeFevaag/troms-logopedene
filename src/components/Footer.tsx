import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { TEAM } from "@/content/team";
import { CookieSettingsButton } from "./CookieSettingsButton";

const link = "inline-block py-1.5 hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white p-3">
            <Image src="/images/logo.png" alt="Tromsølogopedene" width={160} height={131} className="h-auto w-36" />
          </div>
          <p className="mt-4 text-sm">{SITE.tagline}. Logopedpraksis i Tromsø for barn og voksne.</p>
        </div>
        <nav aria-label="Tjenester">
          <h2 className="text-base font-bold !text-white">Tjenester</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/tjenester/${s.slug}`} className={link}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Informasjon">
          <h2 className="text-base font-bold !text-white">Informasjon</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/om-oss" className={link}>Om oss</Link></li>
            <li><Link href="/logopeder" className={link}>Logopedene</Link></li>
            <li><Link href="/refusjon" className={link}>Refusjon og henvisning</Link></li>
            <li><Link href="/artikler" className={link}>Artikler</Link></li>
            <li><Link href="/kontakt" className={link}>Kontakt</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-base font-bold !text-white">Kontakt</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>Tromsø</p>
            {TEAM.map((t) => (
              <p key={t.slug}>
                {t.name}:{" "}
                <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="font-semibold text-white hover:underline">
                  {t.phone}
                </a>
              </p>
            ))}
            {SITE.email && (
              <p><a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a></p>
            )}
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-5 text-xs sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Alle rettigheter reservert.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><Link href="/personvern" className={link}>Personvern</Link></li>
            <li><Link href="/vilkar" className={link}>Vilkår</Link></li>
            <li><Link href="/informasjonskapsler" className={link}>Informasjonskapsler</Link></li>
            <li><CookieSettingsButton className={link}>Cookie-innstillinger</CookieSettingsButton></li>
          </ul>
          <p>
            Nettbutikk utviklet av{" "}
            <a href="https://fevaag.no" target="_blank" rel="noopener" className="font-semibold text-white underline underline-offset-2 hover:no-underline">
              Fevaag Web Consulting
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
