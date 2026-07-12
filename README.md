# wonderentegelwerken.nl — Next.js scaffold

Productieklare scaffold voor de nieuwe website van Van Wonderen Tegelwerken.
Gebouwd met Next.js 15 (App Router), Tailwind v4, Resend en Vercel Analytics.

## Wat zit erin

- 12 pagina's (homepage, 6 diensten, 3 projecten, contact, werkgebied, over-ons, privacy, AV)
- Volledige LocalBusiness + Service + FAQ + Breadcrumb JSON-LD structured data
- Sitemap.xml + robots.txt automatisch gegenereerd
- Header met sticky navigatie + mobile menu
- Drijvende WhatsApp-button
- Contactformulier met zod-validatie, honeypot anti-spam, Resend-mail
- Vercel Analytics + Speed Insights ingebouwd
- Dynamic OG-image per pagina
- Type-veilige content via TypeScript bestanden in `/content/`
- WCAG-vriendelijke focus rings + ARIA-attributen
- Security headers in `next.config.ts`

## Lokaal draaien

```bash
# Stap 1: installeer dependencies
npm install

# Stap 2: kopieer environment file en vul keys in
cp .env.example .env.local
# Bewerk .env.local: voeg je RESEND_API_KEY toe (gratis op resend.com)

# Stap 3: zet je foto's klaar
mkdir -p public/images/projects
# Pak wonderentegelwerken-photos.zip uit en kopieer naar public/images/projects/
# Hernoem .webp als nodig — bestandsnamen moeten matchen met content/projects.ts en content/services.ts

# Stap 4: start de dev-server
npm run dev
# Open http://localhost:3000
```

## Deploy naar Vercel

```bash
# Optie 1: via Vercel CLI (snelste)
npm i -g vercel
vercel

# Optie 2: via GitHub
# 1. Push de repo naar GitHub
# 2. Ga naar vercel.com/new
# 3. Importeer het GitHub-project
# 4. Voeg RESEND_API_KEY toe in Settings → Environment Variables
# 5. Klik Deploy
```

Vergeet niet om in de Vercel project settings je custom domain te koppelen:

```
Settings → Domains → Add wonderentegelwerken.nl
```

Vercel toont dan welke DNS records je in TransIP moet zetten — meestal:
- A record voor `@` → `76.76.21.21`
- CNAME voor `www` → `cname.vercel-dns.com`

## Folderstructuur

```
scaffold/
├── app/
│   ├── layout.tsx              # Root layout met fonts, header, footer
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Auto-gegenereerde sitemap.xml
│   ├── robots.ts               # Auto-gegenereerde robots.txt
│   ├── globals.css             # Tailwind + custom CSS variabelen
│   ├── api/contact/route.ts    # Contactformulier API endpoint
│   ├── diensten/
│   │   ├── page.tsx            # Dienstenoverzicht
│   │   └── [slug]/page.tsx     # Individuele dienst (dynamic)
│   ├── projecten/
│   │   ├── page.tsx            # Portfolio overzicht
│   │   └── [slug]/page.tsx     # Project detail
│   ├── contact/page.tsx
│   ├── over-ons/page.tsx
│   ├── werkgebied/page.tsx
│   ├── privacy/page.tsx
│   └── algemene-voorwaarden/page.tsx
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── contact-form.tsx
│   └── whatsapp-floating.tsx
├── content/                    # SINGLE SOURCE OF TRUTH
│   ├── business.ts             # KvK, adres, openingstijden, werkgebied
│   ├── services.ts             # 6 diensten met copy + FAQs
│   └── projects.ts             # Portfolio cases
├── lib/
│   ├── schema.ts               # JSON-LD structured data
│   ├── email.ts                # Resend wrapper
│   └── utils.ts                # cn() helper voor Tailwind
├── public/
│   ├── images/projects/        # Hier de foto's neerzetten
│   ├── favicon.ico             # Nog toevoegen
│   └── og-image.jpg            # Open Graph image (1200×630)
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.example
└── .gitignore
```

## Inhoud bewerken

**Bedrijfsgegevens** (telefoon, adres, openingstijden, werkgebied): `content/business.ts`

**Diensten** (toevoegen, prijswijzigen, FAQ uitbreiden): `content/services.ts`

**Projecten** (nieuwe case toevoegen): `content/projects.ts`

Alles is TypeScript-typed, dus je IDE waarschuwt bij fouten.

## Performance-targets

Verwacht na deploy:

- Lighthouse Performance: 95-100
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

Mocht dat lager zijn, check dan `public/images/` — gebruik `next/image` consequent en zorg dat alle foto's zijn omgezet naar .webp of .avif.

## Volgende stappen

1. ✅ Code installeren en lokaal draaien
2. ⬜ Foto's uit `wonderentegelwerken-photos.zip` in `public/images/projects/` plaatsen
3. ⬜ Logo (zelfs een woordmerk volstaat) als `public/og-image.jpg` (1200×630)
4. ⬜ Favicon genereren via favicon.io en in `public/` plaatsen
5. ⬜ Resend-account aanmaken + API-key in `.env.local`
6. ⬜ Push naar GitHub
7. ⬜ Deploy naar Vercel
8. ⬜ Custom domain koppelen
9. ⬜ Google Search Console: sitemap submitten
10. ⬜ Google Business Profile aanmaken (zie `../content/05-google-business-profile.md`)
