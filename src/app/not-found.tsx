import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = { title: "Siden finnes ikke", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="font-semibold text-sage-dark">404</p>
      <h1 className="mt-2 text-4xl font-bold">Vi finner ikke siden</h1>
      <p className="mt-4 text-lg">Siden du leter etter finnes ikke, eller er flyttet.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Til forsiden</Button>
        <Button href="/tjenester" variant="outline">Se tjenester</Button>
        <Button href="/kontakt" variant="outline">Kontakt oss</Button>
      </div>
    </section>
  );
}
