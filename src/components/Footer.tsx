import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { TEAM } from "@/content/team";
import { CookieSettingsButton } from "./CookieSettingsButton";

const link = "inline-block py-1.5 hover:text-white hover:underline";
const heading = "text-sm font-bold uppercase tracking-wider !text-sage-light";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_1.35fr_0.85fr_1.15fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block rounded-xl bg-white p-3">
              <Image src="/images/logo.png" alt="Tromsølogopedene" width={160} height={131} className="h-auto w-36" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {SITE.tagline}. Logopedpraksis i Tromsø for barn, ungdom og voksne.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-blue transition-colors hover:bg-tint"
            >
              Bestill time
            </Link>
          </div>

          <nav aria-label="Tjenester">
            <h2 className={heading}>Tjenester</h2>
            <ul className="mt-4 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tjenester/${s.slug}`} className={link}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informasjon">
            <h2 className={heading}>Informasjon</h2>
            <ul className="mt-4 text-sm">
              <li><Link href="/om-oss" className={link}>Om oss</Link></li>
              <li><Link href="/logopeder" className={link}>Logopedene</Link></li>
              <li><Link href="/refusjon" className={link}>Refusjon og henvisning</Link></li>
              <li><Link href="/artikler" className={link}>Artikler</Link></li>
              <li><Link href="/kontakt" className={link}>Kontakt</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Kontakt</h2>
            <address className="mt-4 space-y-4 text-sm not-italic">
              <p>
                {SITE.address.street ? (
                  <>
                    {SITE.address.street}<br />
                    {SITE.address.postalCode} {SITE.address.city}
                  </>
                ) : (
                  "Tromsø"
                )}
              </p>
              <ul className="space-y-3">
                {TEAM.map((t) => (
                  <li key={t.slug}>
                    <p className="font-semibold text-white">{t.name}</p>
                    <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="inline-block py-1 hover:text-white hover:underline">
                      {t.phone}
                    </a>
                  </li>
                ))}
              </ul>
              {SITE.email && (
                <p><a href={`mailto:${SITE.email}`} className="inline-block py-1 hover:text-white hover:underline">{SITE.email}</a></p>
              )}
            </address>
          </div>
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
            Nettside utviklet av{" "}
            <a href="https://fevaag.no" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white hover:no-underline">
              Fevaag Web Consulting
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
