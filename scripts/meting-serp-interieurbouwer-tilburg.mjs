#!/usr/bin/env node
/**
 * meting-serp-interieurbouwer-tilburg.mjs — telt na wat de zoekuitslag op
 * "interieurbouwer tilburg" werkelijk bevat.
 *
 * WAAROM DIT BESTAAT. De antwoordeenheid op /werkgebied/tilburg zegt tegen de lezer
 * dat hij op deze zoekopdracht vooral vacatures en bedrijfsprofielen vindt, en niet
 * een antwoord. Dat is een bewering over de zoekuitslag, en zo'n bewering is
 * waardeloos zonder vastgelegde waarneming: wie het nu natrekt ziet een andere
 * uitslag dan wie het in maart natrekt. Daarom staat de uitslag als momentopname in
 * scripts/serp-interieurbouwer-tilburg-20261003.json en telt DIT script eruit wat
 * de pagina beweert, in plaats van dat iemand een getal overtypt.
 *
 * WAT HET DOET. Het leest de momentopname, classificeert elk organisch resultaat op
 * zijn host en telt: hoeveel van de organische resultaten gaan over het BEROEP
 * (vacature, salaris, opleiding, persoonlijk profiel) in plaats van over het laten
 * MAKEN van interieur, hoeveel blokken zijn bedrijfsprofielen uit het lokale pakket,
 * en hoeveel resultaten proberen de vraag van een opdrachtgever te beantwoorden.
 * Daarna toetst het die tellingen tegen wat er in lopende tekst op de site staat.
 *
 * Exit 1 zodra één telling niet klopt met de tekst, zodat de meting de rem is.
 *
 * WAT DIT NIET IS. Het is DataForSEO's waarneming van Google, niet de onze, en het is
 * één momentopname van 3 oktober 2026 op Nederland/nl/desktop. De pagina zegt dat er
 * dan ook zo bij. Een uitslag zonder enginelabel zou van een proxy een feit maken.
 *
 * Gebruik: node scripts/meting-serp-interieurbouwer-tilburg.mjs [--json]
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SNAPSHOT = new URL('./serp-interieurbouwer-tilburg-20261003.json', import.meta.url)

/**
 * Hosts die over het BEROEP interieurbouwer gaan: vacaturebanken, salarispagina's,
 * opleidingsgidsen en persoonlijke profielen. De lijst staat hier expliciet omdat
 * "het is duidelijk een vacature" geen telregel is.
 */
const BEROEPSHOSTS = [
  'werkzoeken.nl',
  'technicus.nl',
  'evokestaffing.com',
  'nationalevacaturebank.nl',
  'indeed.com',
  'linkedin.com',
  'mbokompas.nl',
  'jooble.org',
  'jobleads.com',
  'jobbird.com',
]

const GEBRUIKT_IN = [
  'content/stadseenheden.ts — antwoordeenheid "interieurbouwer tilburg" (alinea 1, vraag "Waarom vind ik vooral vacatures?", bronregel)',
]

const snap = JSON.parse(readFileSync(SNAPSHOT, 'utf8'))
const organisch = snap.blokken.filter((b) => b.soort === 'organic')
const lokaalPakket = snap.blokken.filter((b) => b.soort === 'local_pack')

const beroep = organisch.filter((b) => BEROEPSHOSTS.some((h) => String(b.domein).endsWith(h)))
const overig = organisch.filter((b) => !beroep.includes(b))

const uitslag = {
  zoekopdracht: snap.zoekopdracht,
  motor: snap.motor,
  via: snap.via,
  waarneming: snap.waarneming,
  markt: `${snap.land}/${snap.taal}/${snap.apparaat}`,
  gemeten_op: snap.gemeten_op,
  check_url: snap.check_url,
  momentopname: 'scripts/serp-interieurbouwer-tilburg-20261003.json',
  blokken_totaal: snap.blokken.length,
  organisch_totaal: organisch.length,
  organisch_over_het_beroep: beroep.length,
  organisch_overig: overig.length,
  bedrijfsprofielen_lokaal_pakket: lokaalPakket.length,
  eerste_drie_blokken_zijn_bedrijfsprofielen: snap.blokken
    .slice(0, 3)
    .every((b) => b.soort === 'local_pack'),
  ai_overview_aanwezig: snap.blokken.some((b) => b.soort === 'ai_overview'),
  beroepshosts_gevonden: [...new Set(beroep.map((b) => b.domein))].sort(),
  overige_hosts: overig.map((b) => ({ rang: b.rang, domein: b.domein })),
  gebruikt_in: GEBRUIKT_IN,
}

/** De beweringen zoals ze in lopende tekst op de site staan. */
const TOETSEN = [
  ['19 organische resultaten geteld', uitslag.organisch_totaal === 19],
  ['15 daarvan gaan over het beroep, niet over het laten maken', uitslag.organisch_over_het_beroep === 15],
  ['12 bedrijfsprofielen in het lokale pakket', uitslag.bedrijfsprofielen_lokaal_pakket === 12],
  ['de eerste drie blokken zijn bedrijfsprofielen', uitslag.eerste_drie_blokken_zijn_bedrijfsprofielen === true],
  ['geen AI-samenvatting op deze zoekopdracht', uitslag.ai_overview_aanwezig === false],
]

uitslag.toetsen = TOETSEN.map(([wat, ok]) => ({ bewering: wat, klopt: ok }))
const gezakt = uitslag.toetsen.filter((t) => !t.klopt)

writeFileSync(
  new URL('./meting-serp-interieurbouwer-tilburg.json', import.meta.url),
  JSON.stringify(uitslag, null, 1) + '\n',
)

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(uitslag, null, 1))
} else {
  console.log(`MOMENTOPNAME ${uitslag.momentopname} · ${uitslag.motor} via ${uitslag.via}`)
  console.log(`ZOEKOPDRACHT "${uitslag.zoekopdracht}" · ${uitslag.markt} · ${uitslag.gemeten_op}`)
  for (const t of uitslag.toetsen) console.log(`${t.klopt ? 'OK  ' : 'FOUT'} ${t.bewering}`)
  console.log(`${gezakt.length === 0 ? 'OK' : 'FOUT'} ${uitslag.toetsen.length - gezakt.length}/${uitslag.toetsen.length} beweringen kloppen tegen de momentopname`)
}

process.exit(gezakt.length === 0 ? 0 : 1)
