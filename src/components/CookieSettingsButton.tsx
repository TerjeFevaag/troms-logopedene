"use client";

import { OPEN_COOKIE_SETTINGS } from "./CookieConsent";

export function CookieSettingsButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}>
      {children}
    </button>
  );
}
