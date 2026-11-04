"use client";

import { useState } from "react";

const field = "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-base focus:border-blue";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await res.json().catch(() => ({}));
      if (res.ok) {
        setState("ok");
        (e.target as HTMLFormElement).reset();
      } else {
        setState("error");
        setMsg(j.error ?? "Noe gikk galt. Prøv igjen eller ring oss.");
      }
    } catch {
      setState("error");
      setMsg("Noe gikk galt. Prøv igjen eller ring oss.");
    }
  }

  if (state === "ok") {
    return (
      <p role="status" className="mt-6 rounded-2xl bg-tint p-6 text-lg font-semibold text-navy">
        Takk for meldingen! Vi tar kontakt så snart vi kan.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate={false}>
      <div className="hidden" aria-hidden="true">
        <label>Ikke fyll ut<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div>
        <label htmlFor="name" className="font-semibold text-navy">Navn</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="font-semibold text-navy">E-post</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold text-navy">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="font-semibold text-navy">Melding</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 accent-blue" />
        <span>Jeg samtykker til at Tromsølogopedene behandler opplysningene for å svare på henvendelsen. Se <a href="/personvern" className="text-blue underline">personvernerklæringen</a>.</span>
      </label>
      {state === "error" && <p role="alert" className="font-semibold text-red-700">{msg}</p>}
      <button type="submit" disabled={state === "sending"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue px-7 py-3 font-semibold text-white hover:bg-blue-dark disabled:opacity-60">
        {state === "sending" ? "Sender …" : "Send melding"}
      </button>
    </form>
  );
}
