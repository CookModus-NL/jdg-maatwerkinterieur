#!/usr/bin/env node
/**
 * meting-ikea-metod.mjs — leest de maten van het IKEA METOD-keukensysteem uit op
 * de eigen pagina's van IKEA en legt ze vast als controleerbare bron.
 *
 * Waarom dit script bestaat. De antwoordeenheid /blog/keuken-op-maat-of-ikea-keuken
 * drukt het verschil tussen een standaardkeuken en een keuken op maat uit in
 * centimeters. Die centimeters komen van de tegenpartij (IKEA), niet van JDG. Een
 * zin als "uitgelezen op ikea.com" is geen bron: er staat geen pagina bij, geen
 * datum en niemand kan hem overdoen. Dit script maakt er wel een bron van. Het
 * opent elke pagina waar een getal vandaan komt, zoekt het getal letterlijk in de
 * gerenderde tekst, maakt een schermafdruk en schrijft een JSON met per claim:
 * gevonden of niet gevonden, de URL, de datum en het pad naar de afdruk.
 *
 * Een claim die hier op "niet gevonden" staat, hoort niet zonder [AANNAME] op de
 * site. Dat is de hele afspraak.
 *
 * Draaien:  node scripts/meting-ikea-metod.mjs [--uit <map>]
 * Uitvoer:  <map>/meting-ikea-metod.json  +  <map>/*.png
 * Exit 0 als elke claim is teruggevonden, 1 als er een ontbreekt.
 */

import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const argv = process.argv.slice(2)
const UIT = argv.includes('--uit') ? argv[argv.indexOf('--uit') + 1] : '/tmp/meting-ikea-metod'

/**
 * Elke regel is een claim die in de antwoordeenheid staat, met de pagina waar hij
 * vandaan komt en de tekst die daar letterlijk moet staan. `zoek` is een lijst van
 * varianten: IKEA schrijft decimalen soms met punt en soms met komma, en dat mag
 * geen valse rode vlag opleveren. Een claim slaagt als minstens één variant wordt
 * teruggevonden in de zichtbare tekst van de pagina.
 */
const CLAIMS = [
  { id: 'onderkast-20', claim: 'METOD onderkast basiselement 20 cm breed, 60 cm diep, 80 cm hoog',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-basiselement-wit-30212562/', zoek: [['20x60x80 cm']] },
  { id: 'onderkast-30', claim: 'METOD onderkast basiselement 30 cm breed',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-basiselement-wit-50417195/', zoek: [['30x60x80 cm']] },
  { id: 'onderkast-40', claim: 'METOD onderkast basiselement 40 cm breed',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-basiselement-wit-80213432/', zoek: [['40x60x80 cm']] },
  { id: 'onderkast-60', claim: 'METOD onderkast basiselement 60 cm breed',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-wit-50205626/', zoek: [['60x60x80 cm']] },
  { id: 'onderkast-80', claim: 'METOD onderkast basiselement 80 cm breed',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-wit-10205633/', zoek: [['80x60x80 cm']] },
  { id: 'onderkast-diep-37', claim: 'METOD onderkast ook in een diepte van 37 cm',
    url: 'https://www.ikea.com/nl/nl/p/metod-onderkast-basiselement-wit-10205628/', zoek: [['80x37x80 cm']] },
  { id: 'poot-8', claim: 'METOD poot voor kast is 8 cm',
    url: 'https://www.ikea.com/nl/nl/p/metod-poot-voor-kast-70556067/', zoek: [['8 cm']] },
  { id: 'romp-80-op-poot-8', claim: 'een onderkast van 80 cm hoog staat op METOD poten van 8 cm',
    url: 'https://www.ikea.com/nl/nl/customer-service/knowledge/articles/0d5d657f-6d3g-4bd0-g7db-997c72590e3b.html',
    zoek: [['onderkast van 80 cm hoog met METOD poten van 8 cm']] },
  { id: 'bovenkast-40-60-80', claim: 'METOD bovenkasten in 40, 60 en 80 cm hoog',
    url: 'https://www.ikea.com/nl/nl/cat/bovenkasten-23608/',
    zoek: [['20x37x40 cm'], ['20x37x60 cm'], ['20x37x80 cm']] },
  { id: 'bovenkast-100', claim: 'METOD bovenkast ook in 100 cm hoog',
    url: 'https://www.ikea.com/nl/nl/p/metod-bovenkastelement-wit-20205538/', zoek: [['60x37x100 cm']] },
  { id: 'hoge-kast-200', claim: 'METOD hoge kast 200 cm hoog',
    url: 'https://www.ikea.com/nl/nl/p/metod-hoog-kastelement-wit-60212565/', zoek: [['60x60x200 cm']] },
  { id: 'hoge-kast-220', claim: 'METOD hoge kast 220 cm hoog',
    url: 'https://www.ikea.com/nl/nl/p/metod-hoge-kast-wit-90212564/', zoek: [['60x60x220 cm']] },
  { id: 'passtuk-koelkast-5', claim: 'tussen muur en koelkastkast altijd een passtuk van minimaal 5 cm',
    url: 'https://www.ikea.com/nl/nl/customer-service/knowledge/articles/51ee3539-133e-4b48-880c-bc83d953363e.html',
    zoek: [['passtuk van minimaal 5 cm']] },
  { id: 'passtuk-hoek-75', claim: 'passtuk bij een METOD onderhoekkast op 7,5 cm of breder gezaagd',
    url: 'https://www.ikea.com/nl/nl/customer-service/knowledge/articles/51ee3539-133e-4b48-880c-bc83d953363e.html',
    zoek: [['7.5 cm of breder', '7,5 cm of breder']] },
  { id: 'passtuk-is-bedekkingspaneel', claim: 'een passtuk is een bedekkingspaneel dat je zelf op maat zaagt',
    url: 'https://www.ikea.com/nl/nl/customer-service/knowledge/articles/51ee3539-133e-4b48-880c-bc83d953363e.html',
    zoek: [['bedekkingspaneel dat je zelf op maat zaagt']] },
  { id: 'prijs-metod-bereik', claim: 'IKEA noemt voor een METOD-keuken een bereik van 4.469 tot 9.775 euro',
    url: 'https://www.ikea.com/be/nl/rooms/kitchen/wat-is-de-prijs-van-een-ikea-keuken-pub811bafe0/',
    zoek: [['4.469'], ['9.775']] },
]

const vandaag = new Date().toISOString().slice(0, 10)

mkdirSync(UIT, { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({
  locale: 'nl-NL',
  viewport: { width: 1440, height: 1200 },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
})
const page = await ctx.newPage()

const resultaten = []
for (const c of CLAIMS) {
  const r = { id: c.id, claim: c.claim, url: c.url, gelezen_op: vandaag }
  try {
    const resp = await page.goto(c.url, { waitUntil: 'domcontentloaded', timeout: 45_000 })
    r.status = resp?.status() ?? null
    // Cookiebanner wegklikken als hij er is; anders dekt hij de tekst af op de afdruk.
    for (const sel of ['#onetrust-accept-btn-handler', 'button:has-text("Alles accepteren")']) {
      const knop = page.locator(sel).first()
      if (await knop.count().then((n) => n > 0).catch(() => false)) {
        await knop.click({ timeout: 3000 }).catch(() => {})
        break
      }
    }
    await page.waitForTimeout(1500)
    const tekst = (await page.locator('body').innerText()).replace(/\s+/g, ' ')
    r.gevonden = c.zoek.map((varianten) => {
      const hit = varianten.find((v) => tekst.includes(v))
      return { varianten, gevonden: Boolean(hit), letterlijk: hit ?? null }
    })
    r.geslaagd = r.gevonden.every((g) => g.gevonden) && r.status === 200
    const afdruk = join(UIT, `${c.id}.png`)
    await page.screenshot({ path: afdruk, fullPage: false })
    r.afdruk = afdruk
  } catch (e) {
    r.geslaagd = false
    r.fout = String(e.message || e).slice(0, 300)
  }
  resultaten.push(r)
  console.log(`${r.geslaagd ? 'OK  ' : 'MIS '} ${c.id.padEnd(26)} ${c.claim}`)
}

await browser.close()

const gemist = resultaten.filter((r) => !r.geslaagd)
const rapport = {
  meting: 'ikea-metod-maten',
  doel: 'de maten in /blog/keuken-op-maat-of-ikea-keuken herleidbaar maken naar de pagina van IKEA zelf',
  gemeten_op: vandaag,
  instrument: 'playwright chromium, locale nl-NL, viewport 1440x1200',
  claims: resultaten.length,
  geslaagd: resultaten.length - gemist.length,
  gemist: gemist.map((r) => r.id),
  resultaten,
}
const uitpad = join(UIT, 'meting-ikea-metod.json')
writeFileSync(uitpad, JSON.stringify(rapport, null, 2))
console.log(`\n${rapport.geslaagd}/${rapport.claims} claims teruggevonden op de bron. ${uitpad}`)
process.exit(gemist.length ? 1 : 0)
