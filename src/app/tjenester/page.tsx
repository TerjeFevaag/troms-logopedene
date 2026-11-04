import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { PageHeader } from "@/components/PageHeader";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Tjenester: logoped i Tromsø",
  description:
    "Se alle tjenester hos Tromsølogopedene: språkvansker, stamming, stemmevansker, svelgevansker, ansiktslammelse, dysleksi, EILO/VCD, lyttetrening etter CI og AKK.",
  alternates: { canonical: "/tjenester" },
};

export default function Tjenester() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Tjenester", path: "/tjenester" }]} title="Tjenester" lead="Dette kan vi hjelpe deg med. Velg et fagområde for å lese mer om hvordan vi jobber." />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/tjenester/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-lg">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-tint text-sage-dark"><ServiceIcon name={s.icon} /></span>
                <h2 className="mt-5 text-xl font-bold">{s.name}</h2>
                <p className="mt-2 flex-1 text-ink/85">{s.short}</p>
                <span className="mt-4 font-semibold text-blue group-hover:underline">Les mer →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactBlock />
    </>
  );
}
