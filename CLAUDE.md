# CLAUDE.md — Tromsølogopedene website

Read this fully before writing any code. It is the source of truth for the build.

## 1. Project summary

- **Client:** Tromsølogopedene — a new speech therapy (logoped) practice in Tromsø, Norway.
- **Background:** The old practice, Logopedklinikken Tromsø (https://logopedklinikken.com), is splitting up. Two of its four therapists are leaving to found Tromsølogopedene. This is a **new brand and a new site**, not a copy of the old one. Take structure and copy as a starting point only.
- **Language:** Norwegian Bokmål (`lang="nb"`). All UI, copy, metadata, schema and llms.txt in Norwegian. Code, comments and this file in English.
- **Hosting:** Vercel.
- **Admin requirement:** Admins can sign in and publish simple articles themselves (no developer needed).
- **Quality bar:** Mobile responsive and pixel perfect. SEO is a first-class deliverable, not an afterthought.

## 2. Hard rules (from the client brief)

1. Include **only** these two therapists:
   - **Ingrid Steineger Dahl**, Logoped MNLF
   - **Berit Småbakk**, Logoped MNLF
2. **Do NOT** include the other two therapists from the old practice anywhere (their names are deliberately not recorded in this public repo; the client brief has them): no names, photos, bios, emails, phone numbers, or mentions in alt text, schema, llms.txt or sitemap.
3. **Every service gets its own page.** Do not put services on one long page like the old site did.
4. **FAQs must appear on:** Hjem, Om oss, and every service page. Each FAQ block also emits `FAQPage` JSON-LD that matches the visible text exactly.
5. Colours come from the logo (section 4). Layout/reference content from the old site; layout *feel* from https://clinics.midwestern.edu/ (section 5).
6. Must ship with: `robots.txt`, `sitemap.xml`, `llms.txt`, schema markup, and the SEO items in section 8.
7. Do not invent facts. Anything not in this file or supplied by the client (address, phone, opening hours, org number, prices, new email domain) is a `TODO(client)` placeholder, never made up. List open items in section 12.

## 3. Facts gathered from research

### Old site (logopedklinikken.com), what exists
WordPress + Yoast. Only 7 URLs: `/`, `/tjenester/`, `/logopeder/`, `/informasjon/`, `/informasjon/refusjonsavtale/`, `/kontakt-oss/`, `/personvernerklaering/`. It has **no** Om oss page, **no** FAQ, **no** separate service pages, **no** opening hours, **no** org number, **no** general phone, **no** social links. So we are writing the FAQs, About copy and service pages ourselves, using the old copy as source material and a professional, accurate tone.

Old tagline: "Utredning, rådgiving og oppfølging". Practice treats at the clinic, or by agreement at home, in kindergarten and at school. Therapists have a HELFO refusal agreement, so most users get treatment covered through Folketrygden; the practice helps with the application and forwards papers to HELFO on request.

### The two therapists (only these)
**Ingrid Steineger Dahl**, logoped MNLF
- Phone (old site): 466 68 638. Email on old site is on the old domain; use a `TODO(client)` for the new address.
- Treats children and adults with: language and speech difficulties; language difficulties associated with biomedical conditions (LDx); alternative and augmentative communication (AAC) / communication aids; cochlea implant (listening training); voice difficulties (children).

**Berit Småbakk**, logoped MNLF
- Phone (old site): 911 82 401. Email: `TODO(client)` for new address.
- Treats children and adults with: language and speech difficulties; fluency disorders (stuttering and cluttering); **certified in the Lidcombe Programme** (parent guidance/treatment of early stuttering, ages 3–6) and **PCI stuttering treatment** (parent–child therapy, ages 2–7); aphasia, dysarthria and dysphagia; **certified in the McNeill Dysphagia Theory Program**; facial paralysis; voice difficulties; VCD / EILO / stridor; assessment (LOGOS) of reading and writing difficulties/dyslexia, plus documentation and help applying for spelling software for dyslexics.

Confirm with the client before publishing the phone numbers, since the new company may use new ones.

### Services (each becomes its own page)
Source copy is from the old `/tjenester/`. Expand each into a full page (what it is, who it is for, how we work, what to expect, HELFO info, FAQ, CTA). Fix old typos ("falgfeltet", "Vokal Cord" → "Vocal Cord").

| # | Service (nb) | Suggested slug | Key source facts |
|---|---|---|---|
| 1 | Språkvansker | `/tjenester/sprakvansker` | Children: speech sounds, vocabulary, concept understanding, sentence structure, grammar, language use; play-based approaches by age. Adults: aphasia, dysphasia, dyspraxia, cognitive difficulties after brain injury. Assessment plus patient needs guide the work. |
| 2 | Taleflytvansker (stamming og løpsk tale) | `/tjenester/stamming` | Approach chosen after assessment and conversation. Offers: Lidcombe Programme (3–6 y), PCI (2–7 y), Restart-DCM. |
| 3 | Stemmevansker | `/tjenester/stemmevansker` | Conversations and function exercises map causes; ENT assessment guides; specific exercises plus awareness work for good voice habits. |
| 4 | Spise- og svelgevansker (dysfagi) | `/tjenester/svelgevansker` | VitalStim, biofeedback, Novafon sound-wave device where appropriate; McNeill Dysphagia Theory Program. |
| 5 | Ansiktslammelser (facialisparese) | `/tjenester/ansiktslammelse` | Novafon and VitalStim with function exercises. |
| 6 | Lese- og skrivevansker / dysleksi | `/tjenester/dysleksi` | LOGOS computer-based assessment with other assessments; targeted follow-up; help with spelling-software applications. |
| 7 | VCD / EILO / stridor | `/tjenester/eilo-vcd` | Assessment and follow-up: conversation, relaxation, learning concrete exercises. EILO = effort-induced (inspiratory) laryngeal obstruction (old site text says "anstrengelsesutløste pustevansker"). |
| 8 | Lyttetrening etter CI-operasjon | `/tjenester/lyttetrening-ci` | After referral from competence centre/hospital: speech-language follow-up and listening training after implant activation. |
| 9 | Alternativ og supplerende kommunikasjon (ASK) | `/tjenester/ask` | For severe language and speech difficulties: fitting and trialling by a therapist with specialist competence. |

Only list a service as offered if at least one of the two therapists covers it. Check the bios above: everything in the table is covered by Ingrid and/or Berit except none flagged; Dysleksi and EILO/VCD are Berit; ASK and CI are Ingrid. Show "Hvem tilbyr dette" per service pointing to the right therapist(s).

### HELFO / refusjon (own page: `/refusjon`)
The old site's rules (PPT refusal for under-18s, "refusjonsavtale", "we help with the application") were outdated. Rules verified 2026-11-16 against FOR-2021-12-17-3709 (in force 1 Jan 2022) and Helsedirektoratet's rundskriv; all site wording comes from `src/content/helfo.ts`:
1. Referral from any doctor (GP, hospital doctor, specialist) with a diagnosis (ICPC-2 or ICD-10). No application or pre-approval at HELFO.
2. No avslag from kommune/PPT required for any age, but no stønad if the patient gets the same help from kommune/fylkeskommune.
3. No egenandel, no 25-treatment limit, term is "avtale om direkte oppgjør". Home treatment only covered when health prevents attending.
4. Dysleksi, lese- og skrivevansker and dyskalkuli are NOT covered (service `dysleksi` has `helfoCovered: false`).
The practice follows the Norwegian Association of Speech and Language Therapists (Norsk Logopedforbund, NLF) ethical guidelines and HELFO's rates. The client confirmed on 2026-11-16 that the practice has avtale om direkte oppgjør with HELFO.

### Contact (old, for reference only; new company details are TODO)
Old visit address: Siva Innovasjonssenter, Sykehusvegen 21, 9019 Tromsø. Old postal address: Malmvegen 126, 9022 Krokelvdalen. The new practice keeps both: visit address in schema/maps, postal address only on /kontakt and /personvern (confirmed 2026-11-16). `TODO(client)`: org.nr, general phone, general email, opening hours, whether home/kindergarten/school visits are offered.

## 4. Brand and colour (from the logo)

Logo file: `tromsologopedene_logo.png` (1186×973). Elements: blue face silhouette, sage-green speech bubbles and arc, near-black navy wordmark, tagline "språk • tale • stemme • svelg".

**Known problem:** the PNG has a fake checkerboard "transparency" pattern baked into the pixels, with white-ish edges. It is not a real alpha channel. Before using it:
- Ask the client for a vector (SVG) or true-transparent PNG. Preferred.
- Otherwise, recreate as clean SVG or cut out the background, then export `logo.svg`, `logo-horizontal.svg` (mark plus wordmark in one row for the header), `logo-mark.svg` (icon only for favicon/app icon) and a white version for the dark footer.
- Never ship the checkerboard file.

Palette sampled from the logo (verify visually, then lock as CSS variables / Tailwind theme):

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#000820` ≈ `#0B1530` | Wordmark; headings, footer background |
| `--blue` | `#205078` | Primary brand colour; primary buttons, links, hero accents |
| `--sage` | `#588878` | Secondary; arc/icons, secondary buttons, highlights |
| `--sage-light` | `#A8B8A0` / `#A8C0A0` | Soft backgrounds, cards, dividers |
| `--sage-tint` | ~`#EEF3EF` (derived) | Alternating section backgrounds |
| `--white` | `#FFFFFF` | Page background |

Rules: check WCAG AA contrast (4.5:1 body text, 3:1 large text/UI). White on `#588878` is borderline, so use `--navy`/`--blue` for text, and a darker sage (~`#3F6E5E`) when sage must carry white text. Do not introduce new hues beyond tints/shades of these.

Typography: wordmark looks like a geometric/humanist sans (Poppins/Inter/DM Sans family). Use **one** sans family via `next/font` (e.g. DM Sans or Plus Jakarta Sans) with self-hosting, `display: swap`, subsets `latin` + `latin-ext` (Norwegian æ ø å must render correctly).

## 5. Design reference

**Content and information architecture:** logopedklinikken.com (but expanded, as it is thin).

**Layout and feel:** https://clinics.midwestern.edu/. Note: we could only read its structure, not its CSS (fetch was markdown). Open it in a browser/devtools to confirm exact spacing, type and radii before finalising. Structure to emulate:

- **Header:** logo left; slim utility strip above the main nav (phone, email, "Bestill time" CTA); main nav with a **mega-menu** for *Tjenester* showing cards for each service (small image/icon + title + one-liner); optional search trigger. Skip links at top ("Hopp til innhold", "Hopp til navigasjon"). Sticky on scroll, collapses to hamburger on mobile.
- **Homepage section order:**
  1. Hero: H1 + short intro + two CTAs (Bestill time / Se tjenester); wide image or illustration (~7:4).
  2. Intro/promise block ("Vår tilnærming").
  3. **Services grid**: 3-up cards (2-up tablet, 1-up mobile), icon/image, title, one-liner, "Les mer".
  4. Meet the therapists: 2 cards (photo, name, title, specialties, "Les mer").
  5. **Key facts / stats row** (4-up): e.g. HELFO-refusjon, ages served, home/school visits, areas of expertise. Use only facts the client confirms, no invented numbers.
  6. HELFO/refusjon explainer block.
  7. Latest articles (carousel or 3-up cards) from the admin-managed articles.
  8. **FAQ accordion.**
  9. "Hvordan kan vi hjelpe deg?" contact block (closing CTA before footer, repeated on every page).
- **Service page:** eyebrow, H1, lead, CTA buttons, hero image (~7:4), body sections, "Hvem tilbyr dette", HELFO note, **FAQ accordion**, related services, contact CTA block. Breadcrumbs added (better for SEO than the reference).
- **Om oss:** H1, welcome, hero image, story/values, 2-person bios (media-object rows with photo left), approach, **FAQ**, CTA.
- **Footer:** contact-picker/CTA block, logo, columns (Tjenester, Om oss, Informasjon), contact details, copyright, legal row (Personvern, Refusjon, Cookies), social icons only if accounts exist.
- Image aspect-ratio guide from the reference: hero ~1.75:1, feature cards ~1.37:1, thumbnails 16:9, service cards ~7:6, news thumbs 1:1.

Pixel-perfect means: consistent 4/8px spacing scale, a defined container width (≈1200px), a type scale with fluid `clamp()` sizes, identical radii/shadows across components, no layout shift (explicit image dimensions), verified at 360, 390, 768, 1024, 1280 and 1536px widths.

## 6. Recommended stack (decide once, then stick to it)

- **Next.js (App Router, latest stable) + TypeScript + Tailwind CSS.** Static generation (SSG/ISR) for all public pages for speed and SEO.
- **Hosting:** Vercel. Region close to Norway (e.g. `arn1`/`fra1`).
- **DECIDED: Vercel-only, no third-party CMS (user decision).** Everything lives in one git repo and one Vercel project. Do NOT use Sanity or any external CMS.
  - **Database:** Postgres from Vercel Storage (Marketplace → **Neon**), connected to the project so `DATABASE_URL` is injected. Access with `@neondatabase/serverless` + **Drizzle ORM**; migrations in `/drizzle`.
  - **Image uploads:** **Vercel Blob** (`BLOB_READ_WRITE_TOKEN`), used for article cover images and inline images.
  - **Tables:** `admins` (id, email, password_hash, created_at) and `articles` (id, slug unique, title, excerpt, body, cover_image_url, cover_alt, status `draft|published`, published_at, updated_at, author_id, seo_title, seo_description).
  - **Auth:** simple custom login at `/admin/login`: email + password (bcryptjs hash), session as a signed httpOnly, Secure, SameSite=Lax JWT cookie via `jose`. Next.js `proxy`/middleware plus a server-side check in every admin action. Rate-limit login attempts, no public sign-up. Seed the 2–3 admin accounts via a one-off script that reads emails/passwords from env, never committed.
  - **Dashboard (`/admin`) scope: articles only, nothing else.** List (draft/published, edit, delete with confirm), New/Edit form (title, slug auto-generated and editable, excerpt, cover image upload with alt text, body in a simple rich-text editor, e.g. Tiptap with headings/bold/italic/lists/links/images, SEO title/description optional, Save draft / Publish / Unpublish). Norwegian UI. No media library, roles, or comments.
  - **Public rendering:** `/artikler` and `/artikler/[slug]` are server-rendered from the DB with ISR and `revalidatePath`/`revalidateTag` on publish/edit/delete so new articles appear instantly. Sanitise the body HTML on save and render (e.g. `sanitize-html`), and the sitemap, Article JSON-LD and llms.txt include published articles. `/admin/*` and `/api/*` are `noindex`, disallowed in robots, absent from sitemap.
  - **Git:** repo initialised on `main`. Commit only when the user asks; ask before creating the remote GitHub repo, and before `vercel link`/`vercel deploy`, since they create external resources. Vercel Git integration gives preview deploys per branch.
  - Provisioning the Neon database and Blob store is a click-through in the Vercel dashboard (Storage tab) once the project is linked. Walk the user through it, or use `vercel env pull .env.local` after they've done it.
- **Contact/booking form:** server action or route handler plus Resend (or similar) for email; spam protection (honeypot plus Turnstile); GDPR consent checkbox; do not store health details. Include a warning not to submit sensitive health information through the form.
- **Analytics:** privacy-friendly (Vercel Analytics or Plausible), cookie banner only if non-essential cookies are used.
- Environment variables in Vercel dashboard and `.env.local` (never commit). Provide `.env.example`.

## 7. Site map (all Norwegian URLs, lowercase, no trailing slash, ASCII slugs)

```
/                         Hjem
/om-oss                   Om oss (+ FAQ)
/tjenester                Tjenester (index, grid of all services)
/tjenester/sprakvansker
/tjenester/stamming
/tjenester/stemmevansker
/tjenester/svelgevansker
/tjenester/ansiktslammelse
/tjenester/dysleksi
/tjenester/eilo-vcd
/tjenester/lyttetrening-ci
/tjenester/ask
/logopeder                Our two therapists (index)
/logopeder/ingrid-steineger-dahl
/logopeder/berit-smabakk
/refusjon                 HELFO / refusjon / henvisning
/artikler                 Article index (admin-managed)
/artikler/[slug]          Article
/kontakt                  Kontakt oss + kart + skjema
/personvern               Personvernerklæring (write a proper GDPR one; do NOT reuse WordPress boilerplate)
/studio                   Admin (noindex)
```

Add 301 redirect notes for the client: the old domain is separate and stays with the old practice, so no redirects are needed from it.

## 8. SEO requirements (checklist, all must pass before launch)

**Per page**
- Unique `<title>` (≤ ~60 chars) and meta description (≤ ~155 chars), primary keyword plus "Tromsø" naturally. Pattern: `{Tjeneste} i Tromsø | Tromsølogopedene`.
- One `<h1>`, logical h2/h3 order, descriptive anchor text, breadcrumbs (visible and `BreadcrumbList` JSON-LD).
- Canonical URL, `lang="nb"`, `hreflang` not needed (single language) but set `x-default`/`nb` only if adding other languages.
- Open Graph and Twitter card tags with a real 1200×630 OG image per page (generate with `next/og` or static).
- All images: descriptive Norwegian `alt`, explicit width/height, `next/image`, modern formats, lazy-load below the fold, priority for the LCP image.
- Content: 400+ words of genuinely useful copy per service page; plain language; written for patients and parents; no keyword stuffing.

**Technical**
- `app/robots.ts` → `robots.txt`: allow all, disallow `/studio`, `/api`, reference the sitemap. Allow major AI crawlers explicitly (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) unless the client says otherwise.
- `app/sitemap.ts` → dynamic `sitemap.xml` including services, therapists and every published article with accurate `lastModified`.
- **`public/llms.txt`** (and optionally `llms-full.txt`): Norwegian summary of the practice, location, the 9 services with URLs, the 2 therapists, HELFO info, contact, and links to key pages, in the llms.txt markdown format (H1 title, blockquote summary, H2 sections with link lists). Keep in sync when services change.
- `humans.txt` optional. `security.txt` optional. Custom 404 page (helpful links, `noindex`).
- Favicons set (`favicon.ico`, SVG, 180px apple-touch-icon, `manifest.webmanifest`) generated from the logo mark.
- Security headers via `next.config` (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). HTTPS only; `www` ↔ apex redirect to one canonical host.
- Core Web Vitals targets (mobile): LCP < 2.5s, INP < 200ms, CLS < 0.1. Lighthouse ≥ 95 for Performance, Accessibility, Best Practices, SEO. Self-host fonts, minimal JS, no layout shift from the mega-menu or accordion.
- Accessibility (WCAG 2.2 AA): semantic landmarks, skip links, visible focus, keyboard-operable mega-menu and accordions (`<details>` or proper ARIA), sufficient contrast, `prefers-reduced-motion` respected.

**Structured data (JSON-LD, validated with Google Rich Results Test and validator.schema.org)**
- Site-wide: `Organization` + `MedicalBusiness`/`MedicalClinic` (or `LocalBusiness` subtype) with `name`, `url`, `logo`, `image`, `address` (PostalAddress), `geo`, `telephone`, `email`, `openingHoursSpecification`, `areaServed` (Tromsø), `medicalSpecialty` (`SpeechPathology`), `sameAs`, `priceRange` only if known. `WebSite` (with `inLanguage: nb`).
- Home: `WebPage` + `FAQPage` (+ the above).
- Om oss: `AboutPage` + `FAQPage`.
- Each service: `Service` (or `MedicalTherapy`/`MedicalProcedure` where accurate) with `provider` referencing the organisation `@id`, `areaServed`, plus `FAQPage` and `BreadcrumbList`.
- Therapists: `Person`/`Physician`-style (`Person` with `jobTitle: Logoped MNLF`, `worksFor`, `knowsAbout`, `image`) on each therapist page.
- Articles: `Article`/`BlogPosting` with `headline`, `datePublished`, `dateModified`, `author`, `image`, `publisher`.
- Use stable `@id` anchors (`https://<domain>/#organization`) so entities link together. Schema must mirror visible content (no hidden FAQs, no fake ratings or reviews; do not add `aggregateRating` unless real, verifiable reviews exist).
- FAQ content: 5–8 real questions per page, answered concisely (e.g. "Trenger jeg henvisning?", "Dekker HELFO behandlingen?", "Hva koster det?", "Hvor lang tid tar det å få time?", "Tilbyr dere behandling hjemme eller i barnehage/skole?", "Hvordan foregår første time?"). Never state prices, waiting times or coverage as fact without client confirmation.

**Local SEO**
- Consistent NAP (name, address, phone) across site, schema and Google Business Profile. Tell the client to claim/create a Google Business Profile for the new company, plus Bing Places and Gule Sider/1881 entries. Embed Google Map on `/kontakt` lazily (facade, to protect performance and privacy).
- Submit sitemap in Google Search Console and Bing Webmaster Tools after launch.

## 9. Content and compliance

- Healthcare marketing in Norway: be factual, no guarantees of outcomes, no misleading claims. Use "Logoped MNLF" (Medlem av Norsk Logopedforbund) exactly as the client wrote it.
- GDPR/personvern: proper privacy policy naming the data controller, purposes, legal basis, retention, rights, processors (Vercel, Sanity, email provider). Cookie consent only if needed. Contact form must not invite sensitive health data.
- Cite helfo.no for refusjon details. Refer to Norsk Logopedforbund where relevant.
- Tone: warm, professional, clear. Short paragraphs. Parents and adult patients are the audience.
- **Therapist photos (user decision): reuse Ingrid's and Berit's photos from the old site.** Already downloaded to `public/images/team/ingrid-steineger-dahl.jpg` and `berit-smabakk.jpg`. They are only 207×207px, so never display them larger than ~200px wide (or ~100px on high-DPI-unaware layouts), keep them as small round or square portraits, and flag to the client that higher-resolution originals would be better. Self-host them, never hotlink. Only these two photos; the other two therapists' photos must not be downloaded or committed.
- **Other imagery (user decision): use photos of Norwegian/Nordic-looking people in speech therapy settings, especially children with a therapist, families, and adults in voice/swallowing/aphasia contexts.**
  - Source from licensed stock with commercial use allowed (Unsplash, Pexels, or a paid Norwegian/Nordic stock library). Prefer paid or Nordic-specific libraries, since free libraries have few genuinely Scandinavian speech therapy shots. Record source URL, photographer and licence for every image in `src/content/image-credits.md`.
  - You cannot verify nationality from a photo, so choose Nordic-looking subjects and tell the user the picks need their review before launch. Never present stock people as the actual therapists or as real patients/testimonials.
  - Avoid images that misrepresent care (e.g. a non-clinical setting labelled as the clinic). Prefer warm, natural, uncluttered photos that fit the blue/sage palette.
  - Optimise: WebP/AVIF via `next/image`, explicit sizes, hero ≥ 1600px wide, `alt` text in Norwegian describing the scene.
  - Alternative if good stock is not found: ask the user whether to use AI-generated images, and disclose that they are AI-generated.

## 10. Build and quality process

1. Scaffold Next.js + Tailwind; define design tokens (colours, type scale, spacing, radii, shadows) in one place.
2. Build shared components first: Header/mega-menu, Footer, Button, Card, Accordion (FAQ), Breadcrumbs, ContactBlock, StatRow, SchemaScript.
3. Build the content model once (services, therapists, FAQs as typed data files) so pages, sitemap, llms.txt and JSON-LD all read from the same source and cannot drift.
4. Build pages, then articles + admin, then SEO files.
5. Verify before claiming done: `npm run build` passes with zero type/lint errors; run Lighthouse (mobile and desktop); validate all JSON-LD; check every page at the six breakpoints with browser screenshots (Chrome tools available); test keyboard navigation; check no mention of the other two therapists with a repo-wide grep for their names (take the names from the client brief, which is kept out of the repo); check no checkerboard logo shipped.
6. Deploy to a Vercel **preview** first and share the URL. Attach the production domain only after the client approves. Do not push to production or connect domains without the user's confirmation.

## 11. Conventions

- TypeScript strict. ESLint + Prettier. Components in `src/components`, content data in `src/content`, routes in `src/app`.
- No lorem ipsum in committed pages; use clearly flagged `TODO(client)` strings and keep them out of metadata and schema until resolved.
- No secrets in the repo. Commit only when the user asks.
- Keep this file updated when decisions change.

## 12. Open questions for the client (must be resolved before launch)

1. Vector logo (SVG) or transparent PNG (current file has a baked-in checkerboard).
2. New company details: org.nr, general phone and email, opening hours. (Visit address resolved: Sykehusvegen 21, 9019 Tromsø, set in `src/content/site.ts`.)
3. ~~New email addresses~~ Resolved 2026-11-16: every employee uses `fornavn@tromsologopedene.no` (set in `src/content/team.ts`).
4. ~~HELFO agreement~~ Resolved 2026-11-16: the practice has avtale om direkte oppgjør with HELFO. New therapists must have it too before the site lists them.
5. Domain: `tromsologopedene.no` (email domain). The site launches there once content is ready; `tromsologopedene.vercel.app` is the pre-launch address. Who controls DNS is still open.
6. Higher-resolution photos of Ingrid and Berit (old ones are 207×207px) and of the clinic rooms. Old photos are being reused per the user's decision. Confirm the client is fine with that.
7. Whether home, kindergarten and school visits continue, and any prices or waiting-time information they want published.
8. Admin users' emails (the two therapists plus anyone else). Admin stack is decided: Vercel Postgres (Neon) + Vercel Blob, no external CMS.
9. Google Business Profile and any social accounts for `sameAs`.
10. Anything to add beyond old-site services, such as new certifications or specialties.

## 13. Build status (updated 2026-11-05)

- Built: all pages in section 7, nine service pages, two therapist pages, refusjon, kontakt, personvern, vilkår (`/vilkar`), informasjonskapsler (`/informasjonskapsler`), cookie consent banner (localStorage `tl_consent`, no tracking cookies yet), articles (public pages + `/admin` dashboard), robots, sitemap, llms.txt, JSON-LD, security headers.
- Tailwind 4 runs through `@tailwindcss/postcss` (`postcss.config.mjs`), not the Turbopack plugin.
- Hero uses the old site's header image (client decision); `hero-photo.jpg` is its photo-only crop; `og.jpg` is the 1200x630 share image.
- Logo: checkerboard removed with alpha extraction (works on light backgrounds only). Ask the client for a vector.
- Stock photos and article covers: see `src/content/image-credits.md`. Speech-therapy photos with Nordic-looking people are still wanted (paid library or the client's own).
- Starter articles live in `src/content/articles-seed.ts` (reviewed by the therapists before publishing). Without a database, dev shows them as a preview; `npm run db:seed-articles` inserts them as drafts (`--publish` to publish).
- Credit in the footer: "Nettside utviklet av Fevaag Web Consulting" (fevaag.no), wording as supplied by the user.
- Not yet verified: admin/login, article create/upload and contact form end to end (need Neon, Blob, AUTH_SECRET, Resend), Lighthouse, screen-reader testing.
- Legal pages are drafts: have the client/lawyer review before launch.
