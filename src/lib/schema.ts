import { SITE, abs } from "@/content/site";
import type { Faq, Service } from "@/content/services";
import type { Therapist } from "@/content/team";

const ORG_ID = abs("/#organization");

export function organizationSchema() {
  const a = SITE.address;
  const hasAddress = a.street && a.postalCode;
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    url: abs("/"),
    logo: abs("/images/logo.png"),
    image: abs("/images/hero.jpg"),
    description: SITE.description,
    medicalSpecialty: "SpeechPathology",
    areaServed: { "@type": "City", name: "Tromsø" },
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: a.street,
            postalCode: a.postalCode,
            addressLocality: a.city,
            addressCountry: a.country,
          },
        }
      : { address: { "@type": "PostalAddress", addressLocality: "Tromsø", addressCountry: "NO" } }),
    employee: [
      { "@id": abs("/logopeder/ingrid-steineger-dahl#person") },
      { "@id": abs("/logopeder/berit-smabakk#person") },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: abs("/"),
    name: SITE.name,
    inLanguage: "nb-NO",
    publisher: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": abs(`/tjenester/${s.slug}#service`),
    name: s.name,
    description: s.metaDescription,
    url: abs(`/tjenester/${s.slug}`),
    serviceType: s.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "Tromsø" },
    inLanguage: "nb-NO",
  };
}

export function personSchema(t: Therapist) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": abs(`/logopeder/${t.slug}#person`),
    name: t.name,
    jobTitle: t.title,
    image: abs(t.photo),
    url: abs(`/logopeder/${t.slug}`),
    worksFor: { "@id": ORG_ID },
    knowsAbout: t.treats,
  };
}

export function articleSchema(a: {
  title: string;
  slug: string;
  excerpt: string;
  cover?: string | null;
  published: Date;
  updated: Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    url: abs(`/artikler/${a.slug}`),
    mainEntityOfPage: abs(`/artikler/${a.slug}`),
    datePublished: a.published.toISOString(),
    dateModified: a.updated.toISOString(),
    inLanguage: "nb-NO",
    ...(a.cover ? { image: a.cover } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
