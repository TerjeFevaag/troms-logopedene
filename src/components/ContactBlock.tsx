import { Button } from "./Button";
import { SITE } from "@/content/site";
import { TEAM } from "@/content/team";

export function ContactBlock() {
  return (
    <section aria-labelledby="contact-cta" className="bg-blue text-white">
      <div className="mx-auto grid max-w-site gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <h2 id="contact-cta" className="!text-white text-3xl font-bold md:text-4xl">Hvordan kan vi hjelpe deg?</h2>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Ta kontakt, så finner vi ut hva som passer for deg eller barnet ditt. Vi hjelper også med henvisning og HELFO-papirer.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="light">Ta kontakt</Button>
            <Button href="/refusjon" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-blue">Om refusjon</Button>
          </div>
        </div>
        <ul className="space-y-3 text-lg">
          {TEAM.map((t) => (
            <li key={t.slug} className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">{t.name}</p>
              <p className="text-white/80">{t.title}</p>
              <a href={`tel:+47${t.phone.replace(/\s/g, "")}`} className="-my-1 inline-block py-2 font-semibold underline underline-offset-4">Tlf {t.phone}</a>
            </li>
          ))}
          {SITE.email && (
            <li><a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></li>
          )}
        </ul>
      </div>
    </section>
  );
}
