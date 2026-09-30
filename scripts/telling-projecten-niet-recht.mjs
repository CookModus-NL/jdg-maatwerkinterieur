#!/usr/bin/env node
/**
 * TELLING — hoeveel van de projecten op /projecten staan tegen een vlak dat niet
 * recht is, en hoeveel daarvan zijn kasten?
 *
 * WAAROM DIT BESTAAT (en waarom opnieuw). Het feit
 * `portfolio.projecten-tegen-een-vlak-dat-niet-recht-is` (motor_feiten, gemeten
 * 15-09-2026: zeven van de zestien) noemt dit scriptpad als zijn bron, maar het
 * script stond op 30-09-2026 niet meer in de werkmap. Een getal op de site met een
 * bronregel die naar een verdwenen script wijst is niet controleerbaar, en dat is
 * precies wat DE WET art. 1.1 verbiedt. Deze versie telt opnieuw, met dezelfde
 * telmethode, en telt er de deelverzameling bij die op een kledingkastpagina hoort.
 *
 * DE TELMETHODE (letterlijk die van het feit van 15-09-2026). Een project telt mee
 * wanneer de beschrijving die op /projecten ZICHTBAAR is zelf een schuine wand of
 * een schuin dak, een dakkapel, dakspanten of de punt van het dak, een trapprofiel
 * of een kast die de trap volgt, of een nis noemt. Categorie, slug en foto tellen
 * NIET mee: een label als "trapkast" of "zolderinbouw" bewijst niet dat er een
 * schuinte in het werk zat, en `kledingkast-licht-eiken-schuin` heeft het woord
 * schuin alleen in zijn slug. De telling is daarmee bewust aan de lage kant.
 *
 * Gebruik: node scripts/telling-projecten-niet-recht.mjs
 * Uitvoer:  scripts/telling-projecten-niet-recht.json
 */
import { readFileSync, writeFileSync } from 'node:fs'

const bron = new URL('../content/projects.ts', import.meta.url)
const src = readFileSync(bron, 'utf8')

/** Woorden die in de ZICHTBARE beschrijving een niet-recht vlak aanwijzen. */
const NIET_RECHT =
  /(schuin\w*\s+\w+|dakkapel|dakspant\w*|punt van het dak|dakvorm|onder (de|een) \w*trap|de trap volgt|volgt de trap|trapprofiel|trapopgang|nis\b|nissen)/i

/** De categorieën die content/relaties.ts aan een kledingkast- of inloopkastpagina hangt. */
const KASTCATEGORIEEN = ['kast', 'zolderinbouw']

const blokken = src.split(/\n {2}\{\n/).slice(1)
const projecten = []
for (const b of blokken) {
  const slug = b.match(/slug:\s*'([^']+)'/)?.[1]
  const category = b.match(/category:\s*'([^']+)'/)?.[1]
  const title = b.match(/title:\s*'([^']*)'/)?.[1]
  const description = b.match(/description:\s*'((?:[^'\\]|\\.)*)'/)?.[1]
  if (!slug || !category) continue
  // Alleen de tekst die de bezoeker op /projecten ziet: titel en beschrijving.
  const zichtbaar = `${title ?? ''} ${description ?? ''}`
  const treffer = zichtbaar.match(NIET_RECHT)
  projecten.push({ slug, category, niet_recht: Boolean(treffer), aanwijzing: treffer?.[0] ?? null })
}

const kasten = projecten.filter((p) => KASTCATEGORIEEN.includes(p.category))
const uit = {
  geteld_op: new Date().toISOString().slice(0, 10),
  bron: 'content/projects.ts (de lijst die /projecten rendert)',
  telmethode: 'alleen de zichtbare titel en beschrijving; categorie, slug en foto tellen niet mee',
  alle_projecten: { totaal: projecten.length, niet_recht: projecten.filter((p) => p.niet_recht).length },
  kast_en_zolderinbouw: { totaal: kasten.length, niet_recht: kasten.filter((p) => p.niet_recht).length },
  projecten,
}

writeFileSync(new URL('./telling-projecten-niet-recht.json', import.meta.url), JSON.stringify(uit, null, 2) + '\n')
console.log(
  `alle projecten: ${uit.alle_projecten.niet_recht} van de ${uit.alle_projecten.totaal} tegen een vlak dat niet recht is`
)
console.log(
  `kast + zolderinbouw: ${uit.kast_en_zolderinbouw.niet_recht} van de ${uit.kast_en_zolderinbouw.totaal}`
)
for (const p of projecten) console.log(`  ${p.niet_recht ? 'JA ' : 'nee'} ${p.category.padEnd(13)} ${p.slug}${p.aanwijzing ? ` — "${p.aanwijzing}"` : ''}`)
