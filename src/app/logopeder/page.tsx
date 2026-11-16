import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { PageHeader } from "@/components/PageHeader";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "Våre logopeder i Tromsø",
  description: "Møt logopedene Ingrid Steineger Dahl og Berit Småbakk, begge MNLF, hos Tromsølogopedene i Tromsø.",
  alternates: { canonical: "/logopeder" },
};

export default function Logopeder() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Logopeder", path: "/logopeder" }]} title="Våre logopeder" lead="Ansatte logopeder ved Tromsølogopedene." />
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6">
        <ul className="space-y-8">
          {TEAM.map((t) => (
            <li key={t.slug} className="grid gap-6 rounded-2xl border border-line p-6 sm:grid-cols-[auto_1fr] sm:p-8">
              <Image src={t.photo} alt={`${t.name}, ${t.title}`} width={160} height={160} className="h-40 w-40 rounded-2xl object-cover" />
              <div>
                <h2 className="text-2xl font-bold">{t.name}</h2>
                <p className="font-semibold text-sage-dark">{t.title}</p>
                <p className="mt-3 text-lg">{t.intro}</p>
                <h3 className="mt-5 font-bold">Tilbyr behandling og oppfølging av barn og voksne med:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {t.treats.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="font-semibold text-blue hover:underline">Tlf {t.phone}</a>
                  <Link href={`/logopeder/${t.slug}`} className="font-semibold text-blue hover:underline">Mer om {t.name.split(" ")[0]} →</Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <ContactBlock />
    </>
  );
}
