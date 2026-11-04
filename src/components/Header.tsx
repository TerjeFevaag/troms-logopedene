"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/site";
import { SERVICES } from "@/content/services";
import { TEAM } from "@/content/team";
import { ServiceIcon } from "./ServiceIcon";

export function Header() {
  const pathname = usePathname();
  // Menus are "open" only for the path they were opened on, so navigating closes them.
  const [mobileAt, setMobileAt] = useState<string | null>(null);
  const [megaAt, setMegaAt] = useState<string | null>(null);
  const mobile = mobileAt === pathname;
  const mega = megaAt === pathname;
  const setMobile = (v: boolean | ((x: boolean) => boolean)) =>
    setMobileAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const setMega = (v: boolean | ((x: boolean) => boolean)) =>
    setMegaAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaAt(null);
        setMobileAt(null);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  return (
    <>
      <a
        href="#innhold"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue focus:shadow-lg"
      >
        Hopp til innhold
      </a>
      <div className="hidden bg-navy text-sm text-white md:block">
        <div className="mx-auto flex max-w-site items-center justify-between px-6 py-2">
          <p className="text-white/80">Logoped i Tromsø · Utredning, rådgiving og oppfølging</p>
          <ul className="flex items-center gap-6">
            {TEAM.map((t) => (
              <li key={t.slug}>
                <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {t.name.split(" ")[0]}: {t.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="relative mx-auto flex h-[72px] max-w-site items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Tromsølogopedene, til forsiden">
            <Image src="/images/logo-mark.png" alt="" width={52} height={45} priority className="h-11 w-auto" />
            <span className="text-xl font-bold tracking-tight text-navy sm:text-2xl">Tromsølogopedene</span>
          </Link>

          <nav aria-label="Hovedmeny" className="hidden items-center gap-1 lg:flex">
            <div ref={megaRef}>
              <button
                type="button"
                aria-expanded={mega}
                aria-controls="mega-tjenester"
                onClick={() => setMega((v) => !v)}
                className="flex items-center gap-1 rounded-full px-4 py-2 font-semibold text-navy hover:bg-tint"
              >
                Tjenester
                <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m5 8 5 5 5-5" />
                </svg>
              </button>
              {mega && (
                <div id="mega-tjenester" className="absolute left-1/2 top-full mt-3 w-[880px] max-w-[calc(100vw_-_2rem)] -translate-x-1/2 rounded-2xl border border-line bg-white p-6 shadow-xl">
                  <ul className="grid grid-cols-3 gap-3">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/tjenester/${s.slug}`} onClick={() => setMegaAt(null)} className="flex h-full gap-3 rounded-xl p-3 hover:bg-tint">
                          <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-tint text-sage-dark">
                            <ServiceIcon name={s.icon} className="h-6 w-6" />
                          </span>
                          <span>
                            <span className="block font-semibold text-navy">{s.name}</span>
                            <span className="mt-0.5 block text-sm leading-snug text-ink/80">{s.short.split(".")[0]}.</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-line pt-4 text-right">
                    <Link href="/tjenester" onClick={() => setMegaAt(null)} className="font-semibold text-blue underline-offset-4 hover:underline">
                      Se alle tjenester →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {NAV.filter((n) => n.href !== "/tjenester" && n.href !== "/kontakt").map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={pathname.startsWith(n.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 font-semibold hover:bg-tint ${pathname.startsWith(n.href) ? "text-blue" : "text-navy"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/kontakt" className="ml-2 rounded-full bg-blue px-5 py-2.5 font-semibold text-white hover:bg-blue-dark">
              Bestill time
            </Link>
          </nav>

          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full text-navy hover:bg-tint lg:hidden"
            aria-label={mobile ? "Lukk meny" : "Åpne meny"}
            aria-expanded={mobile}
            aria-controls="mobilmeny"
            onClick={() => setMobile((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {mobile ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

      </header>
      {mobile && (
        <div id="mobilmeny" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobilmeny" className="mx-auto max-w-xl px-4 py-6">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setMobileAt(null)} className="block rounded-xl px-4 py-3 text-lg font-semibold text-navy hover:bg-tint">
                    {n.label}
                  </Link>
                  {n.href === "/tjenester" && (
                    <ul className="mb-2 ml-4 border-l-2 border-line pl-3">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/tjenester/${s.slug}`} onClick={() => setMobileAt(null)} className="block rounded-lg px-3 py-2 text-ink hover:bg-tint">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 rounded-2xl bg-tint p-5">
              {TEAM.map((t) => (
                <a key={t.slug} href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="block font-semibold text-blue">
                  Ring {t.name.split(" ")[0]}: {t.phone}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
