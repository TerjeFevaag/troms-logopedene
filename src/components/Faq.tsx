import type { Faq as FaqT } from "@/content/services";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export function Faq({ faqs, title = "Ofte stilte spørsmål" }: { faqs: FaqT[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title" className="bg-tint py-16 md:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} name="faq" className="group px-5 sm:px-7">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-navy">
                {f.q}
                <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-tint text-2xl leading-none text-blue transition-transform" aria-hidden="true">+</span>
              </summary>
              <p className="pb-6 pr-12 text-ink">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
