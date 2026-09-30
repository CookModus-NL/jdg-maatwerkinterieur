#!/usr/bin/env node
/**
 * METING — welke maten verkopen de best gerangschikte aanbieders van een
 * "tv-meubel op maat" werkelijk?
 *
 * WAAROM. De antwoordeenheid op /diensten/tv-meubels-op-maat/roosendaal stelt dat
 * de standaardmaten in de markt een raster zijn en een woonkamerwand niet. Dat is
 * een claim over derden, dus hij moet gemeten en terug te vinden zijn, niet
 * aangenomen (DE WET art. 1.1, en de les van 15-09-2026: een externe meting telt
 * alleen als er een controleerbare bronregistratie onder ligt).
 *
 * WAT HET MEET. De twee aanbieders die op 30-09-2026 als nummer 1 en 2 organisch
 * stonden op de Google-zoekopdracht "tv-meubel op maat" (Nederland, nl, desktop,
 * waarneming van DataForSEO) publiceren hun breedte- en dieptefilters als
 * navigatielinks. Dit script haalt die pagina's op en leest de maten uit de
 * linkteksten. Geen interpretatie: alleen de getallen die er staan.
 *
 * Gebruik: node scripts/meting-tv-meubel-maatraster.mjs
 * Uitvoer:  scripts/meting-tv-meubel-maatraster.json
 */
import { writeFileSync } from 'node:fs'

const BRONNEN = [
  { naam: 'tv-kasten.nl', url: 'https://tv-kasten.nl/collections/tv-meubel-op-maat', serp_positie: 1 },
  { naam: 'puuur-interiors.nl', url: 'https://puuur-interiors.nl/wandmeubelen/tv-meubelen/op-maat', serp_positie: 2 },
]

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36'
const getallen = (tekst, regex) => [...new Set([...tekst.matchAll(regex)].map((m) => Number(m[1])))].sort((a, b) => a - b)

const uit = { gemeten_op: new Date().toISOString().slice(0, 10), zoekopdracht: 'tv-meubel op maat', bronnen: [] }

for (const b of BRONNEN) {
  try {
    const r = await fetch(b.url, { headers: { 'user-agent': UA, 'accept-language': 'nl-NL,nl;q=0.9' }, signal: AbortSignal.timeout(30000) })
    const html = await r.text()
    const tekst = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
    uit.bronnen.push({
      ...b,
      http: r.status,
      breedtes_cm: getallen(tekst, /TV-meubels\s+(\d{2,3})\s*cm(?!\s*diep)/gi),
      dieptes_cm: getallen(tekst, /TV-meubels\s+(\d{2,3})\s*cm\s*diep/gi),
    })
  } catch (e) {
    uit.bronnen.push({ ...b, http: null, fout: e.message })
  }
}

for (const b of uit.bronnen) {
  if (!b.breedtes_cm?.length) continue
  const stappen = b.breedtes_cm.slice(1).map((x, i) => x - b.breedtes_cm[i])
  b.kleinste_stap_cm = Math.min(...stappen)
  b.bereik_cm = [b.breedtes_cm[0], b.breedtes_cm[b.breedtes_cm.length - 1]]
}

writeFileSync(new URL('./meting-tv-meubel-maatraster.json', import.meta.url), JSON.stringify(uit, null, 2) + '\n')
console.log(JSON.stringify(uit, null, 2))
