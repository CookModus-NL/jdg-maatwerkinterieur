#!/usr/bin/env node
/**
 * meting-woningvoorraad-tilburg.mjs — toetst de getallen over de Tilburgse
 * woningvoorraad die op deze site in lopende tekst staan, tegen de bronhouder.
 *
 * WAAROM DIT BESTAAT. De antwoordeenheid op /werkgebied/tilburg beantwoordt de
 * zoekvraag "interieurbouwer tilburg" en doet dat met één gegeven dat op de hele
 * zoekuitslag van die vraag niet voorkomt: hoe de woningvoorraad van de gemeente
 * Tilburg over de bouwjaren verdeeld is, en hoe groot die woningen gemiddeld zijn.
 * Dat gegeven bepaalt namelijk WELK probleem een interieurbouwer er moet oplossen
 * — een muur die niet haaks staat, of een kamer waarin de centimeters niet passen.
 *
 * De site zei tot 3 oktober 2026 dat het in Tilburg "vooral in de oudere panden" om
 * scheve muren gaat. Dat is een plausibele zin zonder bron, en de cijfers zeggen iets
 * anders: nog niet een op de zes Tilburgse woningen is van vóór 1945. Een zin die niet
 * te herhalen is, is geen antwoord. Dit script maakt er wel een antwoord van.
 *
 * WAT HET DOET. Het haalt tabel 82550NED ("Voorraad woningen; gemiddeld oppervlak;
 * woningtype, bouwjaarklasse, regio") op bij CBS Open Data, voor de gemeente Tilburg
 * (GM0855) en de MEEST RECENTE periode die de tabel heeft — geen vaste peildatum, want
 * een geraden jaartal geeft een lege uitslag en dat leest als een onbereikbare bron
 * terwijl de tabel gewoon bestaat. Daarna toetst het elk getal dat op de site staat
 * tegen die uitslag, inclusief de afgeleide percentages en de afgeleide
 * superlatieven ("grootste bouwjaarklasse", "kleinste gemiddelde oppervlakte").
 *
 * Exit 1 zodra één van die toetsen zakt, zodat de meting zelf de rem is. Dat is
 * het verschil met een voetnoot: als CBS zijn cijfer herziet, valt dit script om
 * en niet de lezer.
 *
 * LET OP WAT DIT NIET MEET. De tabel komt uit de Basisregistratie Adressen en
 * Gebouwen en gaat over de woning als geheel: bouwjaar, type en oppervlakte. Er staat
 * niets in over de staat van de muren, de hoogte van het plafond of de haaksheid van
 * een kamer. De pagina mag dus zeggen hoe de voorraad eruitziet en welke vraag daardoor
 * waarschijnlijker is; zij mag niet zeggen dat de muren van een bepaald bouwjaar scheef
 * staan. Dat blijkt bij het inmeten, en zo staat het er ook.
 *
 * Gebruik: node scripts/meting-woningvoorraad-tilburg.mjs [--json]
 */
import { writeFileSync } from 'node:fs'

const BASIS = 'https://opendata.cbs.nl/ODataApi/OData/82550NED'
const REGIO = 'GM0855' // gemeente Tilburg
const TOTAAL_TYPE = 'T001100' // woningtype: totaal
const EENGEZINS = 'ZW10290'
const MEERGEZINS = 'ZW10340'
const TOTAAL_BOUWJAAR = 'T001018'

/** Bouwjaarklassen in chronologische volgorde, met hun leesbare naam. */
const KLASSEN = [
  ['ZW10401', '1000 tot 1850'],
  ['ZW10402', '1850 tot 1905'],
  ['ZW10403', '1905 tot 1925'],
  ['ZW10404', '1925 tot 1945'],
  ['ZW25794', '1945 tot 1955'],
  ['ZW25795', '1955 tot 1965'],
  ['ZW10406', '1965 tot 1975'],
  ['ZW10407', '1975 tot 1985'],
  ['ZW10408', '1985 tot 1995'],
  ['ZW10409', '1995 tot 2005'],
  ['ZW25796', '2005 tot 2015'],
  ['ZW25825', '2015 tot 2025'],
  ['ZW25824', 'Vanaf 2025'],
]

/** Klassen die samen "gebouwd vóór 1945" vormen. */
const VOOR_1945 = ['ZW10401', 'ZW10402', 'ZW10403', 'ZW10404']
/** Klassen die samen "gebouwd vóór 1905" vormen. */
const VOOR_1905 = ['ZW10401', 'ZW10402']
/** Klassen die samen de drie naoorlogse decennia 1945-1975 vormen. */
const NAOORLOGS = ['ZW25794', 'ZW25795', 'ZW10406']

/**
 * De getallen zoals ze in lopende tekst op de site staan. Elke regel is een bewering
 * die een lezer kan natrekken; `verwacht` is wat er staat, en het script rekent na.
 */
const GEBRUIKT_IN = [
  'content/cities.ts — Tilburg, intro',
  'content/stadseenheden.ts — antwoordeenheid "interieurbouwer tilburg" (kern, alineas, vragen, bronregel)',
]

async function haal(woningtype) {
  const url =
    `${BASIS}/TypedDataSet?$filter=RegioS eq '${REGIO}' and Woningtype eq '${woningtype}'`.replace(/ /g, '%20')
  const r = await fetch(url)
  if (!r.ok) throw new Error(`HTTP ${r.status} op ${url}`)
  const d = await r.json()
  if (!d.value?.length) throw new Error(`lege uitslag voor woningtype ${woningtype} in ${REGIO}`)
  return d.value
}

/** De meest recente periode die de tabel voor deze regio heeft. */
function laatstePeriode(rijen) {
  return rijen
    .map((x) => String(x.Perioden).trim())
    .sort()
    .at(-1)
}

function index(rijen, periode) {
  const uit = new Map()
  for (const x of rijen) {
    if (String(x.Perioden).trim() !== periode) continue
    uit.set(String(x.Bouwjaarklasse).trim(), {
      aantal: x.BeginstandWoningvoorraad_1,
      oppervlakte: x.GemiddeldeOppervlakte_2,
    })
  }
  return uit
}

const som = (kaart, keys) => keys.reduce((a, k) => a + (kaart.get(k)?.aantal ?? 0), 0)
const pct = (deel, geheel) => Math.round((deel / geheel) * 1000) / 10

const rijenTotaal = await haal(TOTAAL_TYPE)
const periode = laatstePeriode(rijenTotaal)
const jaar = Number(periode.slice(0, 4))
const totaal = index(rijenTotaal, periode)
const een = index(await haal(EENGEZINS), periode)
const meer = index(await haal(MEERGEZINS), periode)

const voorraad = totaal.get(TOTAAL_BOUWJAAR).aantal
const voorraadMeer = meer.get(TOTAAL_BOUWJAAR).aantal
const voorraadEen = een.get(TOTAAL_BOUWJAAR).aantal

// De grootste bouwjaarklasse, en de kleinste gemiddelde oppervlakte. Allebei afgeleid
// uit de uitslag en niet overgetypt, zodat de pagina geen superlatief kan dragen die
// na een CBS-herziening niet meer klopt. "Vanaf 2025" doet niet mee in de oppervlakte-
// vergelijking: die klasse is nog in opbouw (722 woningen) en vertekent de uitslag.
const metAantal = KLASSEN.map(([k, naam]) => ({ k, naam, ...totaal.get(k) }))
const grootste = metAantal.reduce((a, b) => (b.aantal > a.aantal ? b : a))
const kleinsteOpp = metAantal
  .filter((x) => x.k !== 'ZW25824' && x.oppervlakte != null)
  .reduce((a, b) => (b.oppervlakte < a.oppervlakte ? b : a))

const uitslag = {
  tabel: '82550NED',
  naam: 'Voorraad woningen; gemiddeld oppervlak; woningtype, bouwjaarklasse, regio',
  bronhouder: 'CBS Open Data (StatLine), cijfers uit de Basisregistratie Adressen en Gebouwen',
  bron: `${BASIS}/TypedDataSet?$filter=RegioS eq '${REGIO}' and Perioden eq '${periode}'`,
  regio: { code: REGIO, naam: 'Tilburg (gemeente)' },
  peildatum: `1 januari ${jaar}`,
  periode,
  gemeten_op: new Date().toISOString().slice(0, 10),
  voorraad: {
    totaal: voorraad,
    eengezins: voorraadEen,
    meergezins: voorraadMeer,
    meergezins_aandeel_pct: pct(voorraadMeer, voorraad),
    gemiddelde_oppervlakte_eengezins_m2: een.get(TOTAAL_BOUWJAAR).oppervlakte,
    gemiddelde_oppervlakte_meergezins_m2: meer.get(TOTAAL_BOUWJAAR).oppervlakte,
  },
  bouwjaar: {
    voor_1945: { aantal: som(totaal, VOOR_1945), aandeel_pct: pct(som(totaal, VOOR_1945), voorraad) },
    voor_1905: { aantal: som(totaal, VOOR_1905), aandeel_pct: pct(som(totaal, VOOR_1905), voorraad) },
    naoorlogs_1945_1975: { aantal: som(totaal, NAOORLOGS), aandeel_pct: pct(som(totaal, NAOORLOGS), voorraad) },
    grootste_klasse: {
      klasse: grootste.naam,
      aantal: grootste.aantal,
      aandeel_pct: pct(grootste.aantal, voorraad),
      waarvan_meergezins: meer.get(grootste.k)?.aantal ?? null,
    },
    kleinste_gemiddelde_oppervlakte: { klasse: kleinsteOpp.naam, m2: kleinsteOpp.oppervlakte },
  },
  per_klasse: metAantal.map((x) => ({
    klasse: x.naam,
    aantal: x.aantal,
    gemiddelde_oppervlakte_m2: x.oppervlakte,
    eengezins: een.get(x.k)?.aantal ?? null,
    meergezins: meer.get(x.k)?.aantal ?? null,
  })),
  gebruikt_in: GEBRUIKT_IN,
}

/**
 * De beweringen zoals ze op de site staan. Zodra CBS herziet en een van deze
 * getallen verschuift, zakt de toets en moet de tekst mee — niet andersom.
 */
const TOETSEN = [
  ['woningvoorraad Tilburg 107.966', uitslag.voorraad.totaal === 107966],
  ['aandeel appartementen 38,3%', uitslag.voorraad.meergezins_aandeel_pct === 38.3],
  ['gemiddelde oppervlakte appartement 73 m2', uitslag.voorraad.gemiddelde_oppervlakte_meergezins_m2 === 73],
  ['gemiddelde oppervlakte eengezinswoning 133 m2', uitslag.voorraad.gemiddelde_oppervlakte_eengezins_m2 === 133],
  ['voor 1945 gebouwd 18.126 (16,8%)', uitslag.bouwjaar.voor_1945.aantal === 18126 && uitslag.bouwjaar.voor_1945.aandeel_pct === 16.8],
  ['voor 1905 gebouwd 926 (0,9%)', uitslag.bouwjaar.voor_1905.aantal === 926 && uitslag.bouwjaar.voor_1905.aandeel_pct === 0.9],
  ['1945-1975 samen 31.929 (29,6%)', uitslag.bouwjaar.naoorlogs_1945_1975.aantal === 31929 && uitslag.bouwjaar.naoorlogs_1945_1975.aandeel_pct === 29.6],
  ['grootste klasse is 1965 tot 1975', uitslag.bouwjaar.grootste_klasse.klasse === '1965 tot 1975'],
  ['die klasse telt 17.518 woningen', uitslag.bouwjaar.grootste_klasse.aantal === 17518],
  ['waarvan 9.060 appartementen', uitslag.bouwjaar.grootste_klasse.waarvan_meergezins === 9060],
  ['kleinste gemiddelde oppervlakte is 1945 tot 1955', uitslag.bouwjaar.kleinste_gemiddelde_oppervlakte.klasse === '1945 tot 1955'],
  ['en die is 97 m2', uitslag.bouwjaar.kleinste_gemiddelde_oppervlakte.m2 === 97],
]

uitslag.toetsen = TOETSEN.map(([wat, ok]) => ({ bewering: wat, klopt: ok }))
const gezakt = uitslag.toetsen.filter((t) => !t.klopt)

writeFileSync(
  new URL('./meting-woningvoorraad-tilburg.json', import.meta.url),
  JSON.stringify(uitslag, null, 1) + '\n',
)

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(uitslag, null, 1))
} else {
  console.log(`BRON ${uitslag.bron}`)
  console.log(`REGIO ${uitslag.regio.naam} · peildatum ${uitslag.peildatum} · gemeten ${uitslag.gemeten_op}`)
  for (const t of uitslag.toetsen) console.log(`${t.klopt ? 'OK  ' : 'FOUT'} ${t.bewering}`)
  console.log(`${gezakt.length === 0 ? 'OK' : 'FOUT'} ${uitslag.toetsen.length - gezakt.length}/${uitslag.toetsen.length} beweringen kloppen tegen de bron`)
}

process.exit(gezakt.length === 0 ? 0 : 1)
