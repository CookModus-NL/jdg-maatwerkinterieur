#!/usr/bin/env node
/**
 * telling-projecten-niet-recht.mjs — telt hoeveel projecten op /projecten tegen een
 * vlak staan dat niet recht is.
 *
 * Waarom dit script bestaat. De antwoordeenheid /blog/keuken-op-maat-of-ikea-keuken
 * gebruikt een telling over het eigen portfolio als het gegeven dat alleen JDG kan
 * geven. Zo'n telling is pas een gegeven als de telmethode erbij staat en iemand
 * anders er hetzelfde getal uit haalt. Dit script is die telmethode.
 *
 * DE REGEL. Een project telt mee wanneer de beschrijving die op /projecten zichtbaar
 * is, zelf een vlak noemt dat niet recht of niet rechthoekig is: een schuine wand of
 * een schuin dak, een dakkapel, dakspanten of de punt van het dak, een trapprofiel of
 * een kast die de trap volgt, of een nis. De regel leest dus alleen wat een bezoeker
 * ook leest. Categorie, slug en foto tellen NIET mee: 'trapkast' of 'zolderinbouw' in
 * het label is geen bewijs dat er een schuinte in het werk zat, en een slug met het
 * woord 'schuin' erin evenmin. Die keuze maakt de telling aan de lage kant: een
 * project dat op categorie wel zou meetellen, telt nu niet mee. Het staat onderaan
 * bij 'randgevallen' zodat de grens zichtbaar is.
 *
 * Draaien:  node scripts/telling-projecten-niet-recht.mjs [--json]
 * Bron:     content/projects.ts (dezelfde lijst die /projecten rendert)
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const HIER = dirname(fileURLToPath(import.meta.url))
const BRON = join(HIER, '..', 'content', 'projects.ts')

/** De vlakken die niet recht zijn, met de woorden waarmee ze in de beschrijving staan. */
const VLAKKEN = [
  { vlak: 'schuine wand of schuin dak', patroon: /\bschuine? (wand|dak|zolderwand|muur)\b/i },
  { vlak: 'dakkapel', patroon: /\bdakkapel\b/i },
  { vlak: 'dakspanten of de punt van het dak', patroon: /\b(dakspanten|punt van het dak|dakvorm)\b/i },
  { vlak: 'trapprofiel of een kast die de trap volgt', patroon: /\b(trapprofiel|die de trap volgt)\b/i },
  { vlak: 'nis', patroon: /\bnis\b/i },
]

/** Wat op categorie of slug wel zou meetellen, maar niet in de beschrijving staat. */
const RANDSIGNALEN = [
  { signaal: "categorie 'trapkast' of 'zolderinbouw'", patroon: /^(trapkast|zolderinbouw)$/ },
]

const bron = readFileSync(BRON, 'utf8')

// De projectenlijst begint bij `export const projects`; alles daarvoor is het type.
const lijst = bron.slice(bron.indexOf('export const projects'))
const brokken = lijst.split(/\n  \{\n/).slice(1)

const veld = (brok, naam) => {
  const m = brok.match(new RegExp(`${naam}:\\s*\\n?\\s*'((?:[^'\\\\]|\\\\.)*)'`))
  return m ? m[1].replace(/\\'/g, "'") : ''
}

const projecten = brokken.map((b) => ({
  slug: veld(b, 'slug'),
  title: veld(b, 'title'),
  category: veld(b, 'category'),
  description: veld(b, 'description'),
})).filter((p) => p.slug)

const geteld = projecten.map((p) => {
  const treffers = VLAKKEN.filter((v) => v.patroon.test(p.description))
  const rand = RANDSIGNALEN.filter((r) => r.patroon.test(p.category))
  return {
    slug: p.slug,
    titel: p.title,
    telt_mee: treffers.length > 0,
    vlakken: treffers.map((t) => t.vlak),
    bewijs: treffers.map((t) => (p.description.match(t.patroon) || [])[0]).filter(Boolean),
    randgeval: treffers.length === 0 && rand.length > 0 ? rand.map((r) => r.signaal) : [],
  }
})

const meetellend = geteld.filter((g) => g.telt_mee)
const randgevallen = geteld.filter((g) => g.randgeval.length)

const rapport = {
  telling: 'projecten-tegen-een-vlak-dat-niet-recht-is',
  bron: 'content/projects.ts, de lijst die /projecten rendert',
  geteld_op: new Date().toISOString().slice(0, 10),
  regel:
    'telt mee wanneer de op /projecten zichtbare beschrijving zelf een schuine wand of schuin dak, ' +
    'een dakkapel, dakspanten of de punt van het dak, een trapprofiel of een kast die de trap volgt, ' +
    'of een nis noemt; categorie, slug en foto tellen niet mee',
  projecten_totaal: projecten.length,
  projecten_meetellend: meetellend.length,
  uitkomst: `${meetellend.length} van de ${projecten.length}`,
  meetellend,
  randgevallen,
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(rapport, null, 2))
} else {
  console.log(`${rapport.uitkomst} projecten staan tegen een vlak dat niet recht is.\n`)
  for (const g of meetellend) console.log(`  ✓ ${g.slug.padEnd(38)} ${g.vlakken.join(', ')}  ← "${g.bewijs.join('", "')}"`)
  if (randgevallen.length) {
    console.log(`\nRandgevallen (op categorie wel, in de beschrijving niet — tellen NIET mee):`)
    for (const g of randgevallen) console.log(`  – ${g.slug.padEnd(38)} ${g.randgeval.join(', ')}`)
  }
  console.log(`\nRegel: ${rapport.regel}`)
  console.log(`Geteld op ${rapport.geteld_op} in ${rapport.bron}.`)
}
