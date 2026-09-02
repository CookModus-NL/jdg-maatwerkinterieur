# jdg-maatwerkinterieur.nl

De website van JDG Maatwerk Interieur (Jonas de Graaf, Terheijden). Next.js 15
App Router, Tailwind v4, Resend, gehost op Vercel. Canonieke host is **www**;
non-www gaat met 308 naar www, en de Search Console-property staat op
`https://www.jdg-maatwerkinterieur.nl/`.

## Waar de inhoud vandaan komt

Alles is getypeerde TypeScript in `/content/`. Eén bestand wijzigen verandert
overal waar dat gegeven gebruikt wordt.

| Bestand | Wat erin staat |
|---|---|
| `business.ts` | NAP, KvK, openingstijden, telefoon, socials. **Moet letterlijk gelijk zijn aan het Google-bedrijfsprofiel.** |
| `services.ts` | De zes diensten: copy, voordelen, proces, FAQ's, plus `singular` en `synoniemen` (de woorden waarmee gezocht wordt). |
| `cities.ts` | Vijftien plaatsen met gemeente, kernen, afstand en een eigen intro. |
| `lokaal-rooster.ts` | **Welke dienst×stad-pagina's bestaan, en het GSC-bewijs per pagina.** Zie hieronder. |
| `projects.ts` | Zestien uitgevoerde projecten met eigen foto's. |
| `materialen.ts` | Vijf materialen met toepassingen, varianten en vragen. |
| `blog.ts` | Artikelen. Let op het veld `gepubliceerd`. |
| `faq.ts`, `testimonials.ts`, `relaties.ts` | Vragen, reviews (nog leeg), en de koppelingen tussen bovenstaande. |

## Twee regels die je niet mag omzeilen

**1. Geen prijzen op de site zonder akkoord van Jonas.**
Op 10 augustus 2026 heeft Jonas bij zijn review alle zeven prijs-FAQ's laten
verwijderen. Twee blogartikelen (`wat-kost-een-keuken-op-maat-2026` en
`kledingkast-op-maat-vs-kant-en-klaar`) bevatten wél bedragen en staan daarom op
`gepubliceerd: false`. Ze zijn niet verwijderd — ze wachten. Zodra Jonas de
bedragen bevestigt is het één veld omzetten. Wat wél mag en overal staat: de
factoren die de prijs bepalen, zonder getallen (`relaties.ts` → `prijsfactoren`).

**2. Geen claims over werk dat niet aantoonbaar is.**
JDG bestaat sinds 2025 en heeft nog geen publieke reviews. Zinnen als "wij werken
hier vaak aan tv-meubels in Roosendaal" zijn verzonnen bewijs en zijn er in
september 2026 uitgehaald. Wat een plaats onderscheidend maakt is geografie
(gemeente, kernen, woningvoorraad, afstand) — dat is controleerbaar.

## Het lokale rooster

`/diensten/<dienst>/<stad>` bestaat **alleen** waar Search Console vraag laat
zien naar die dienst in die plaats. Elke regel in `content/lokaal-rooster.ts`
draagt de zoekopdrachten en het aantal vertoningen dat hem rechtvaardigt.
Combinaties die er niet in staan krijgen automatisch een 308 naar
`/werkgebied/<stad>` (afgeleid in `next.config.ts`). Voeg nooit een regel toe
"voor de zekerheid": zo is het oude rooster van 96 pagina's ontstaan, met een
mediaan van 168 woorden en nul klikken.

## Geen `app/loading.tsx`

Die stond er tot 2 september 2026 en veroorzaakte een Suspense-grens op elke
route. Gevolg: de geserveerde HTML had een spinner in `<main>` en de echte
inhoud stond ná `</main>` in een template die JavaScript op zijn plek zette.
Googlebot rendert dat wel, maar de AI-crawlers die in `robots.ts` bewust worden
toegelaten (GPTBot, PerplexityBot, ClaudeBot) lezen dan een laadanimatie.
Alle routes zijn statisch, dus er valt niets te laden. **Niet terugzetten.**

## Lokaal draaien

```bash
eval "$(~/.local/bin/fnm env)"
npm install
cp .env.example .env.local   # vul RESEND_API_KEY
npm run dev
```

Controleren vóór "klaar":

```bash
npm run typecheck && npm run build
```

## Deploy

Klantsite: gaat pas live na Barts keuring (DE WET art. 4.2). Deploy via het
Vercel-project van deze repo. Vergeet na een structuurwijziging niet de sitemap
opnieuw in te dienen in Search Console.
