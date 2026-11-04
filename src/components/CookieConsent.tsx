"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Consent banner. The site currently sets no non-essential cookies, but the banner records the
 * visitor's choice so any future analytics can be gated on it (see `hasAnalyticsConsent`).
 * The choice is kept in localStorage (key `tl_consent`), not in a cookie.
 */
const KEY = "tl_consent";
const CHANGE = "tl:consent-change";
export const OPEN_COOKIE_SETTINGS = "tl:open-cookie-settings";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

function read(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function parseAnalytics(raw: string | null): boolean {
  if (!raw || raw === "server") return false;
  try {
    return JSON.parse(raw)?.analytics === true;
  } catch {
    return false;
  }
}

/** Use before loading any optional script (analytics etc.). */
export function hasAnalyticsConsent(): boolean {
  return parseAnalytics(read());
}

export function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, read, () => "server");
  const [dismissed, setDismissed] = useState(false);
  const [reopened, setReopened] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choice, setChoice] = useState<boolean | null>(null);

  useEffect(() => {
    const open = () => {
      setDismissed(false);
      setReopened(true);
      setShowSettings(true);
      setChoice(null);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
  }, []);

  const visible = stored !== "server" && !dismissed && (stored === null || reopened);
  if (!visible) return null;

  const analytics = choice ?? parseAnalytics(stored);

  function save(value: boolean) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: 1, analytics: value, ts: Date.now() }));
    } catch {
      /* storage unavailable: the banner is simply dismissed for this page view */
    }
    window.dispatchEvent(new Event(CHANGE));
    setDismissed(true);
    setReopened(false);
    setShowSettings(false);
  }

  const btn = "min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition";

  return (
    <section
      role="region"
      aria-label="Informasjonskapsler"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-white p-5 shadow-2xl sm:inset-x-6 md:left-6 md:right-auto md:mx-0"
    >
      <h2 className="text-lg font-bold text-navy">Informasjonskapsler og personvern</h2>
      <p className="mt-2 text-sm text-ink">
        Nettstedet bruker bare det som er nødvendig for at det skal fungere. Du kan velge om vi i fremtiden får bruke anonym statistikk for å forbedre siden. Les mer i{" "}
        <Link href="/informasjonskapsler" className="font-semibold text-blue underline underline-offset-2">retningslinjene for informasjonskapsler</Link> og{" "}
        <Link href="/personvern" className="font-semibold text-blue underline underline-offset-2">personvernerklæringen</Link>.
      </p>

      {showSettings && (
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-start justify-between gap-4 rounded-xl bg-tint p-3">
            <div>
              <p className="font-semibold text-navy">Nødvendige</p>
              <p className="text-ink/80">Sikrer at nettstedet og innlogging for administratorer fungerer, og husker dette valget. Kan ikke slås av.</p>
            </div>
            <span className="shrink-0 rounded-full bg-sage-light/50 px-3 py-1 text-xs font-semibold text-sage-dark">Alltid på</span>
          </li>
          <li className="flex items-start justify-between gap-4 rounded-xl bg-tint p-3">
            <div>
              <p className="font-semibold text-navy">Statistikk</p>
              <p className="text-ink/80">Anonym bruksstatistikk. Brukes ikke i dag.</p>
            </div>
            <label className="relative mt-0.5 inline-flex h-7 w-12 shrink-0 cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={analytics}
                onChange={(e) => setChoice(e.target.checked)}
                aria-label="Tillat statistikk"
              />
              <span className="absolute inset-0 rounded-full bg-ink/30 transition peer-checked:bg-sage-dark peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue" />
              <span className="absolute left-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
            </label>
          </li>
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {showSettings ? (
          <button type="button" onClick={() => save(analytics)} className={`${btn} bg-blue text-white hover:bg-blue-dark`}>
            Lagre valg
          </button>
        ) : (
          <>
            <button type="button" onClick={() => save(true)} className={`${btn} bg-blue text-white hover:bg-blue-dark`}>
              Godta alle
            </button>
            <button type="button" onClick={() => save(false)} className={`${btn} border-2 border-blue text-blue hover:bg-tint`}>
              Kun nødvendige
            </button>
            <button type="button" onClick={() => setShowSettings(true)} className={`${btn} text-navy underline underline-offset-4 hover:bg-tint`}>
              Innstillinger
            </button>
          </>
        )}
      </div>
    </section>
  );
}
