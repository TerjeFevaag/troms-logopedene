import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { HideOnAdmin } from "@/components/HideOnAdmin";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Logoped i Tromsø | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: SITE.name,
    title: `Logoped i Tromsø | ${SITE.name}`,
    description: SITE.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Tromsølogopedene: logoped i Tromsø" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#205078", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={dmSans.variable}>
      <body>
        <HideOnAdmin><Header /></HideOnAdmin>
        <main id="innhold">{children}</main>
        <HideOnAdmin><Footer /></HideOnAdmin>
        <HideOnAdmin><CookieConsent /></HideOnAdmin>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
