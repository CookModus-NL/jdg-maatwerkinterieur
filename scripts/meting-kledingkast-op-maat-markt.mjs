#!/usr/bin/env node
/**
 * METING — wie meet er op, en wat komt er aan, bij de best gerangschikte
 * Nederlandse aanbieders van een "kledingkast op maat"?
 *
 * WAAROM. De antwoordeenheid op /diensten/kledingkasten-op-maat/tilburg stelt dat
 * de MAAT in deze markt zelden het probleem is — vrijwel iedereen levert op de
 * millimeter — en dat het verschil zit in wie de ruimte opmeet en wat er gebeurt
 * met het verschil tussen de grootste en de kleinste maat in een kamer die niet
 * haaks staat. Dat is een claim over derden, dus hij moet gemeten en woordelijk
 * terug te vinden zijn, niet aangenomen (DE WET art. 1.1).
 *
 * WAT HET MEET. De vier aanbieders hieronder stonden op 30-09-2026 organisch in de
 * top van de Google-zoekopdracht "kledingkast op maat" (Nederland, nl, desktop,
 * waarneming van DataForSEO). Per aanbieder zoekt dit script een aantal
 * WOORDELIJKE fragmenten in de gerenderde tekst van zijn eigen pagina. Geen
 * interpretatie: de uitslag is per fragment gevonden of niet gevonden, met de
 * omliggende zin als bewijs.
 *
 * WAT HET NIET MEET. Geen prijzen (die staan op de pagina's, maar een prijs is een
 * gevoelig feit en mag niet op de klantsite belanden zonder handtekening van de
 * eigenaar; feitbeleid-v1-20260907). Geen IKEA PAX: de IKEA-productpagina's waren
 * op 30-09-2026 vanaf deze machine niet machinaal te lezen (301 op /p/-URL's,
 * 404 op de zoek-API), en een maatreeks die je niet hebt gelezen noem je niet.
 *
 * Gebruik: node scripts/meting-kledingkast-op-maat-markt.mjs
 * Uitvoer:  scripts/meting-kledingkast-op-maat-markt.json (exit 1 als een bron faalt)
 */
import { writeFileSync } from 'node:fs'

const BRONNEN = [
  {
    naam: 'jouwmaatkast.nl',
    url: 'https://www.jouwmaatkast.nl/producten-kledingkasten.php',
    serp_positie_organisch: 1,
    fragmenten: [
      'Afmetingen: tot op de millimeter nauwkeurig',
      'wordt de kledingkast tot aan de trottoirrand geleverd',
      'waarmee je de kast heel eenvoudig zelf in elkaar kunt zetten',
      'Stelvoeten in plaats van een verstelbaar voetstuk',
      'Elementen niet onafhankelijk van elkaar in diepte verstelbaar',
      'Plintuitsparingen en andere uitsparingen mogelijk',
    ],
  },
  {
    naam: 'slaapkamerweb.nl',
    url: 'https://www.slaapkamerweb.nl/all/kledingkast+op+maat',
    serp_positie_organisch: 2,
    fragmenten: [
      'wordt de kast snel en vakkundig voor u gemonteerd',
      'Binnen één uur is uw kledingkast op maat klaar voor gebruik',
    ],
  },
  {
    naam: 'mselectkasten.nl',
    url: 'https://www.mselectkasten.nl/kledingkast-op-maat',
    serp_positie_organisch: 6,
    fragmenten: ['korting op onze inmeetservice', 'Geleverd binnen 6-8 weken'],
  },
  {
    naam: 'kastengigant.nl',
    url: 'https://www.kastengigant.nl/kasten/kasten-op-maat/',
    serp_positie_organisch: 9,
    fragmenten: [
      'Meet de hoogte, breedte en diepte op meerdere punten, want muren en vloeren zijn niet altijd recht',
      'Noteer de kleinste maat',
      'Gebruik bij maatverschillen de kleinste waarde',
      'Bij twijfel kun je een specialist laten inmeten voordat je definitief bestelt',
      'lades zijn standaard 20 centimeter hoog',
    ],
  },
]

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36'

/** Zichtbare tekst uit HTML. Script en style eruit, tags eruit, witruimte normaliseren. */
function zichtbareTekst(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/\s+/g, ' ')
}

const uit = {
  gemeten_op: new Date().toISOString().slice(0, 10),
  zoekopdracht: 'kledingkast op maat',
  uitslag_bron: 'DataForSEO, /v3/serp/google/organic/live/advanced, Nederland/nl/desktop, 30-09-2026',
  bronnen: [],
}

let gefaald = 0
for (const b of BRONNEN) {
  try {
    const r = await fetch(b.url, {
      headers: { 'user-agent': UA, 'accept-language': 'nl-NL,nl;q=0.9' },
      signal: AbortSignal.timeout(30000),
    })
    const tekst = zichtbareTekst(await r.text())
    const treffers = b.fragmenten.map((f) => {
      const i = tekst.toLowerCase().indexOf(f.toLowerCase())
      return {
        fragment: f,
        gevonden: i >= 0,
        omgeving: i >= 0 ? tekst.slice(Math.max(0, i - 120), i + f.length + 120).trim() : null,
      }
    })
    const mis = treffers.filter((t) => !t.gevonden).length
    if (r.status !== 200 || mis) gefaald++
    uit.bronnen.push({ ...b, http: r.status, gevonden: treffers.length - mis, van: treffers.length, treffers })
  } catch (e) {
    gefaald++
    uit.bronnen.push({ ...b, http: null, fout: e.message })
  }
}

uit.samenvatting = {
  bronnen: uit.bronnen.length,
  fragmenten: uit.bronnen.reduce((n, b) => n + (b.van ?? 0), 0),
  woordelijk_teruggevonden: uit.bronnen.reduce((n, b) => n + (b.gevonden ?? 0), 0),
  bronnen_met_een_gat: gefaald,
}

writeFileSync(new URL('./meting-kledingkast-op-maat-markt.json', import.meta.url), JSON.stringify(uit, null, 2) + '\n')
console.log(JSON.stringify(uit.samenvatting, null, 2))
for (const b of uit.bronnen) {
  console.log(`${b.naam} http ${b.http} — ${b.gevonden ?? 0}/${b.van ?? 0}${b.fout ? ` FOUT ${b.fout}` : ''}`)
  for (const t of b.treffers ?? []) if (!t.gevonden) console.log(`   NIET GEVONDEN: ${t.fragment}`)
}
process.exit(gefaald ? 1 : 0)
