export const SITE = {
  name: "Tromsølogopedene",
  legalName: "Tromsølogopedene", // TODO(client): legal name + org.nr
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tromsologopedene.no", // TODO(client): confirm domain
  tagline: "Utredning, rådgiving og oppfølging",
  slogan: "språk · tale · stemme · svelg",
  city: "Tromsø",
  description:
    "Tromsølogopedene er en logopedpraksis i Tromsø. Vi tilbyr utredning, rådgiving og behandling ved språk-, tale- og stemmevansker, stamming, svelgevansker, dysleksi og mer.",
  // TODO(client): fill these in. Left empty on purpose so nothing invented reaches schema/metadata.
  // Visit address: used in schema, maps and everywhere patients look for where to go.
  address: { street: "Sykehusvegen 21", postalCode: "9019", city: "Tromsø", country: "NO" },
  // Postal address: only for written correspondence (contact page, privacy policy). Never in schema.
  postalAddress: { street: "Malmvegen 126", postalCode: "9022", city: "Krokelvdalen" },
  phone: "", // general phone
  email: "", // general email
  openingHours: "",
  orgNumber: "",
} as const;

export const NAV = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/logopeder", label: "Logopeder" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/refusjon", label: "Refusjon" },
  { href: "/artikler", label: "Artikler" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** "Sykehusvegen 21, 9019 Tromsø" */
export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`;
/** "Malmvegen 126, 9022 Krokelvdalen" */
export const POSTAL_ADDRESS_LINE = `${SITE.postalAddress.street}, ${SITE.postalAddress.postalCode} ${SITE.postalAddress.city}`;
/** Plain link to Google Maps (no embed, so no third-party cookies on our pages). */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

export const abs =(path = "") => `${SITE.url}${path}`;
