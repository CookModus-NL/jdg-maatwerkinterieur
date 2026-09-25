#!/usr/bin/env node
/**
 * meting-titelbescherming.mjs — toetst het wetscitaat over beschermde beroepstitels
 * dat op deze site in lopende tekst staat, tegen de bronhouder.
 *
 * WAAROM DIT BESTAAT. De antwoordeenheid /blog/binnenhuisarchitect-interieurstylist-of-
 * interieurbouwer draagt één claim die niet over JDG gaat maar over de wet: van de namen
 * interieurstylist, binnenhuisarchitect, interieurontwerper en interieurarchitect is er
 * precies één die in de Wet op de architectentitel als beschermde titel wordt genoemd.
 * Dat is het scherpste stuk van die pagina en tegelijk het stuk dat het snelst kan
 * verouderen: een wetstekst kan wijzigen, en dan staat er een onware zin live. "Gelezen op
 * wetten.overheid.nl" is geen bron zolang niemand het kan overdoen. Dit script maakt er wel
 * een bron van.
 *
 * WAT HET DOET. Het haalt de GELDENDE toestand van BWBR0004189 (Wet op de architectentitel)
 * bij wetten.overheid.nl op — zonder peildatum, want een geraden peildatum geeft HTTP 404 en
 * dat leest als een onbereikbare bron terwijl de regeling gewoon geldt. Uit de omleiding
 * wordt de werkelijke toestandsdatum gelezen. Daarna knipt het artikel 23 uit de HTML en
 * toetst drie dingen:
 *   1. staat het citaat dat op de site staat WOORDELIJK in artikel 23;
 *   2. komen de vier titels die de site als beschermd noemt er alle vier in voor;
 *   3. komen de vier woorden die de site NIET als beschermde titel noemt er inderdaad niet
 *      in voor — dat is de negatieve claim, en die is de reden dat dit script bestaat.
 *
 * Exit 1 zodra één van die drie zakt, zodat de meting zelf de rem is.
 *
 * Gebruik: node scripts/meting-titelbescherming.mjs [--json]
 */
import { writeFileSync } from 'node:fs'

const BASIS = 'https://wetten.overheid.nl'
const REGELING = 'BWBR0004189' // Wet op de architectentitel
const ARTIKEL = 'Artikel23'

/** Het citaat zoals het in lopende tekst op de site staat. */
const CITAAT =
  'Gerechtigd tot het voeren van de titel van architect, stedenbouwkundige, tuin- en landschapsarchitect of interieurarchitect ' +
  'of een afkorting van die titel, hetzij zonder nadere aanduiding, hetzij in woordsamenstellingen waarin de titel of een ' +
  'afkorting daarvan voorkomt, is uitsluitend hij die onder deze titel in het register staat ingeschreven.'

/** Wat de pagina als beschermde titel presenteert. Alle vier moeten in artikel 23 staan. */
const WEL = ['architect', 'stedenbouwkundige', 'tuin- en landschapsarchitect', 'interieurarchitect']

/** Wat de pagina expliciet NIET als beschermde titel presenteert. Geen ervan mag er staan. */
const NIET = ['binnenhuisarchitect', 'interieurstylist', 'interieurontwerper', 'interieuradviseur']

const GEBRUIKT_IN = [
  'content/blog.ts — binnenhuisarchitect-interieurstylist-of-interieurbouwer (blok "Van die namen is er precies een wettelijk beschermd" + FAQ "Is binnenhuisarchitect een beschermde titel?")',
  'content/faq.ts — proces, "Heb ik eerst een interieurstylist of binnenhuisarchitect nodig?"',
]

function strip(html) {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|dd|dt|h1|h2|h3|h4|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t ]+/g, ' ')
    .trim()
}

/** Normaliseren op precies die verschillen die geen betekenisverschil zijn. */
const norm = (s) =>
  s
    .replace(/ /g, ' ')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

const r = await fetch(`${BASIS}/${REGELING}`, { redirect: 'follow' })
if (!r.ok) {
  console.error(`BRON ONBEREIKBAAR: HTTP ${r.status} op ${BASIS}/${REGELING}`)
  process.exit(1)
}
const html = await r.text()
const toestand = r.url.match(/\/(\d{4}-\d{2}-\d{2})(?:$|\?)/)?.[1] ?? 'onbekend'

// De artikelen staan als <div class="artikel" id="...Artikel23">. Een artikelblok loopt tot
// het volgende artikelblok; dezelfde knipmethode als motor/scripts/wettekst.mjs, want een
// HTML-naar-tekst-omzetter levert op deze pagina's anders vooral navigatie op.
const treffers = [...html.matchAll(/<div class="artikel" id="([^"]+)"/g)]
const i = treffers.findIndex((t) => new RegExp(`${ARTIKEL}$`).test(t[1]))
if (i < 0) {
  console.error(`ARTIKEL NIET GEVONDEN: ${ARTIKEL} in ${REGELING} (toestand ${toestand}). ${treffers.length} artikelblokken gelezen.`)
  process.exit(1)
}
const eind = i + 1 < treffers.length ? treffers[i + 1].index : html.length
const tekst = norm(strip(html.slice(treffers[i].index, eind)))
const laag = tekst.toLowerCase()

const citaatOk = tekst.includes(norm(CITAAT))
const welOk = WEL.map((w) => ({ woord: w, gevonden: laag.includes(w.toLowerCase()) }))
const nietOk = NIET.map((w) => ({ woord: w, gevonden: laag.includes(w.toLowerCase()) }))

const uitslag = {
  regeling: REGELING,
  naam: 'Wet op de architectentitel',
  artikel: 23,
  lid: 1,
  bron: r.url,
  toestand,
  gemeten_op: new Date().toISOString().slice(0, 10),
  citaat_woordelijk_gevonden: citaatOk,
  beschermde_titels_aanwezig: welOk,
  niet_genoemde_woorden_afwezig: nietOk.map((x) => ({ woord: x.woord, afwezig: !x.gevonden })),
  gebruikt_in: GEBRUIKT_IN,
}

const jsonModus = process.argv.includes('--json')
if (jsonModus) console.log(JSON.stringify(uitslag, null, 1))
else {
  console.log(`BRON ${r.url} (geldende toestand ${toestand})`)
  console.log(`${citaatOk ? 'OK  ' : 'FOUT'} citaat woordelijk in artikel 23`)
  for (const x of welOk) console.log(`${x.gevonden ? 'OK  ' : 'FOUT'} genoemd als titel: ${x.woord}`)
  for (const x of nietOk) console.log(`${x.gevonden ? 'FOUT' : 'OK  '} niet genoemd als titel: ${x.woord}`)
}

writeFileSync(new URL('./meting-titelbescherming.json', import.meta.url), JSON.stringify(uitslag, null, 1) + '\n')

const gezakt = !citaatOk || welOk.some((x) => !x.gevonden) || nietOk.some((x) => x.gevonden)
if (gezakt) {
  if (!jsonModus) console.error('\nGEZAKT: de wetstekst luidt niet meer zoals de site hem citeert. Pas de pagina aan vóór de volgende uitrol.')
  process.exit(1)
}
if (!jsonModus) console.log(`\nAlles klopt met de bronhouder, toestand ${toestand}.`)
