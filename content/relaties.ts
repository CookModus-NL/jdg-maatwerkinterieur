/**
 * De verbindingen tussen diensten, projecten, materialen en vragen.
 *
 * Toegevoegd 02-09-2026. Reden: de site had losse eilanden. 14 projectpagina's
 * met échte foto's, 5 materiaalpagina's en 12 uitgewerkte vragen stonden er wel,
 * maar geen enkele dienstpagina of stadpagina verwees ernaar. Daardoor bleef
 * elke dienst×stad-pagina steken op ~168 woorden sjabloon, en had de sterkste
 * content van de site (echt werk, echte foto's) nul interne links.
 *
 * Dit bestand voegt niets nieuws toe aan de waarheid — het koppelt alleen wat
 * er al staat, zodat elke pagina zich kan vullen met inhoud die er écht bij hoort.
 */

import { projects, type Project } from './projects'
import { materialen, type Material } from './materialen'
import { faqs, type FAQ } from './faq'
import { services } from './services'

/** Welke projectcategorieën horen bij welke dienst. */
const projectenPerDienst: Record<string, Project['category'][]> = {
  'keukens-op-maat': ['keuken'],
  'kledingkasten-op-maat': ['kast', 'zolderinbouw'],
  'inloopkasten-op-maat': ['kast', 'zolderinbouw'],
  'tv-meubels-op-maat': ['tv', 'werkkamer'],
  'boekenkasten-en-wandmeubels': ['boekenkast', 'werkkamer', 'trapkast'],
  'badkamermeubels-op-maat': ['kast'],
}

/** Welke materialen zijn relevant voor welke dienst. */
const materialenPerDienst: Record<string, string[]> = {
  'keukens-op-maat': ['composiet-werkblad', 'keramisch-werkblad', 'eiken-fineer', 'hpl-laminaat'],
  'kledingkasten-op-maat': ['eiken-fineer', 'hpl-laminaat', 'walnoot-fineer'],
  'inloopkasten-op-maat': ['eiken-fineer', 'hpl-laminaat', 'walnoot-fineer'],
  'tv-meubels-op-maat': ['walnoot-fineer', 'eiken-fineer', 'hpl-laminaat'],
  'boekenkasten-en-wandmeubels': ['walnoot-fineer', 'eiken-fineer', 'hpl-laminaat'],
  'badkamermeubels-op-maat': ['hpl-laminaat', 'keramisch-werkblad', 'eiken-fineer'],
}

/** Gerealiseerde projecten die bij deze dienst horen. Nooit meer dan er zijn. */
export function projectenVoorDienst(slug: string, max = 3): Project[] {
  const cats = projectenPerDienst[slug] ?? []
  const treffers = projects.filter((p) => cats.includes(p.category))
  return treffers.slice(0, max)
}

export function materialenVoorDienst(slug: string, max = 4): Material[] {
  const wens = materialenPerDienst[slug] ?? []
  return wens
    .map((s) => materialen.find((m) => m.slug === s))
    .filter((m): m is Material => Boolean(m))
    .slice(0, max)
}

/**
 * Vragen die op een dienstpagina thuishoren: eerst de vragen van de dienst zelf,
 * daarna algemene vragen die iedere koper stelt (levering, garantie, kosten).
 */
export function vragenVoorDienst(slug: string, max = 8): { q: string; a: string }[] {
  const dienst = services.find((s) => s.slug === slug)
  const eigen = dienst?.faqs ?? []
  const aanvullend: FAQ['category'][] = ['levering', 'garantie', 'proces']
  const algemeen = faqs
    .filter((f) => aanvullend.includes(f.category))
    .map((f) => ({ q: f.q, a: f.a }))
  const uniek = new Map<string, { q: string; a: string }>()
  for (const v of [...eigen, ...algemeen]) if (!uniek.has(v.q)) uniek.set(v.q, v)
  return [...uniek.values()].slice(0, max)
}

/** Diensten waar deze dienst logisch bij aansluit, voor interne links. */
export function verwanteDiensten(slug: string, max = 3) {
  return services.filter((s) => s.slug !== slug).slice(0, max)
}

/**
 * Waar de prijs van afhangt. Geen bedragen: die zijn niet vrijgegeven door de
 * eigenaar (DE WET art. 1.3). Wel de factoren, want dat is exact wat iemand
 * zoekt die "wat kost een keuken op maat" intikt, en het is controleerbaar waar.
 */
export const prijsfactoren: Record<string, { titel: string; body: string }[]> = {
  'keukens-op-maat': [
    { titel: 'Lopende meter en indeling', body: 'Een rechte keuken van vier meter is een ander verhaal dan een hoekopstelling met kookeiland. De hoeveelheid kastruimte bepaalt het grootste deel van de prijs.' },
    { titel: 'Werkblad', body: 'Het werkblad is vaak de grootste losse post. Composiet, keramiek en natuursteen verschillen fors, en de dikte en de afwerking van de rand tellen mee.' },
    { titel: 'Fronten en afwerking', body: 'Melamine, HPL, lak, fineer of massief: dezelfde kast krijgt met een ander front een andere prijs. Greeploos werken vraagt extra techniek in het corpus.' },
    { titel: 'Apparatuur', body: 'Apparatuur wordt apart begroot. Eigen apparatuur meenemen kan, als het in het ontwerp past.' },
    { titel: 'Situatie ter plaatse', body: 'Casco opgeleverd werkt het snelst. Sloop, afvoer en het verleggen van leidingen of elektra zijn extra werk en dus extra kosten.' },
  ],
  'kledingkasten-op-maat': [
    { titel: 'Breedte en hoogte', body: 'Tot aan het plafond doorbouwen kost meer materiaal, maar levert de meeste bergruimte per euro.' },
    { titel: 'Deuren of open', body: 'Draaideuren, schuifdeuren of open vakken: schuifdeuren vragen het meeste beslag en zijn daarmee de duurste variant.' },
    { titel: 'Binnenindeling', body: 'Lades met soft-close, uittrekbare broekhouders en verlichting in de kast tellen per stuk mee.' },
    { titel: 'Schuine wanden', body: 'Een kast onder een schuin dak is meer tekenwerk en meer passtukken dan een rechte wand.' },
    { titel: 'Materiaal van de fronten', body: 'Gelakt MDF, HPL of fineer verschillen in prijs; het corpus blijft in alle gevallen hetzelfde stabiele plaatmateriaal.' },
  ],
  'inloopkasten-op-maat': [
    { titel: 'Oppervlak en wandlengte', body: 'Een inloopkast wordt per strekkende meter wand opgebouwd. Hoeveel wand je vult, bepaalt de prijs.' },
    { titel: 'Open of gesloten', body: 'Open hangvakken zijn de voordeligste opzet. Deuren, glas en verlichting maken het duurder.' },
    { titel: 'Indeling', body: 'Lades, schoenenschappen, spiegels en een zitje zijn losse keuzes die per stuk meetellen.' },
    { titel: 'Verlichting', body: 'Ledverlichting in de kast vraagt bekabeling en een driver, en dus voorbereiding in het corpus.' },
  ],
  'tv-meubels-op-maat': [
    { titel: 'Zwevend of staand', body: 'Een zwevend meubel vraagt een dragende constructie in de wand. Dat is meer werk dan een meubel op poten of een sokkel.' },
    { titel: 'Breedte van de wand', body: 'Een losstaand meubel van twee meter is iets anders dan een wandvullend systeem van vier.' },
    { titel: 'Kabelbeheer', body: 'Doorvoeren, ventilatie voor apparatuur en een wegwerkbare bekabeling zijn detailwerk dat tijd kost.' },
    { titel: 'Materiaal', body: 'Fineer en akoestische latten kosten meer dan een gelakt of gefolied front.' },
  ],
  'boekenkasten-en-wandmeubels': [
    { titel: 'Aantal strekkende meters', body: 'Een wandvullende kast rekent per meter. Hoogte tot het plafond geeft de meeste opslag per meter.' },
    { titel: 'Vakverdeling', body: 'Vaste vakken zijn goedkoper dan verstelbare legborden met beslag.' },
    { titel: 'Obstakels', body: 'Een kast om een raam, radiator of schoorsteen heen is tekenwerk plus passtukken.' },
    { titel: 'Deuren of open', body: 'Een open kast is de voordeligste vorm; deuren of kleppen komen erbovenop.' },
  ],
  'badkamermeubels-op-maat': [
    { titel: 'Breedte en aantal wastafels', body: 'Eén of twee wasbakken maakt verschil in blad, in afvoer en in de indeling van de lades.' },
    { titel: 'Bladmateriaal', body: 'Keramiek, composiet of massief: een badkamerblad moet vochtbestendig zijn, en die keuze bepaalt de prijs.' },
    { titel: 'Vochtbestendig corpus', body: 'In een badkamer wordt met vochtwerend plaatmateriaal en aangepaste kantafwerking gewerkt.' },
    { titel: 'Aansluitingen', body: 'Bestaande aansluitingen gebruiken is het voordeligst. Verplaatsen betekent loodgieterswerk.' },
  ],
}

export function prijsfactorenVoor(slug: string) {
  return prijsfactoren[slug] ?? []
}

/** Van projectcategorie terug naar de dienst waar het onder valt. */
export const dienstVoorCategorie: Record<string, string> = {
  keuken: 'keukens-op-maat',
  kast: 'kledingkasten-op-maat',
  zolderinbouw: 'inloopkasten-op-maat',
  tv: 'tv-meubels-op-maat',
  boekenkast: 'boekenkasten-en-wandmeubels',
  werkkamer: 'boekenkasten-en-wandmeubels',
  trapkast: 'boekenkasten-en-wandmeubels',
}

/**
 * Wat een project van dit type technisch inhoudt. Vakinhoud, geen claims over
 * deze specifieke opdracht — die kent alleen Jonas.
 */
export const categorieToelichting: Record<string, string> = {
  keuken:
    'Bij een keuken bepaalt de opstelling het grootste deel van het werk: de lengte aan kastruimte, de plek van de aansluitingen en het werkblad. Corpussen worden op maat gezaagd en genummerd, het werkblad wordt pas na het plaatsen van de onderkasten definitief ingemeten, zodat het de werkelijke wandlijn volgt in plaats van de tekening.',
  kast:
    'Een kast op maat wordt getekend op de wand die er staat, inclusief plint, radiator en scheefstand. De binnenindeling volgt wat erin moet: hangruimte, legborden, lades of een combinatie. Doorbouwen tot aan het plafond levert de meeste opbergruimte per strekkende meter op.',
  zolderinbouw:
    'Onder een schuin dak is vrijwel niets haaks. Elk paneel wordt op de werkelijke hoek gezaagd, en de indeling volgt de hoogte: hangen aan de hoge kant, lades en schappen onder de schuinte. Knieschotten en dakkapellen worden meegenomen in plaats van dichtgezet.',
  tv:
    'Bij een tv-meubel of tv-wand gaat het naast de vorm vooral om wat je niet ziet: doorvoeren voor bekabeling, ventilatie voor apparatuur achter dichte deurtjes en een ophangconstructie die het gewicht van een zwevend meubel echt draagt.',
  boekenkast:
    'Een boekenkast of wandmeubel wordt per strekkende meter opgebouwd. Legborden krijgen een dikte en een steunafstand die bij de belasting past, want boeken zijn zwaarder dan de meeste mensen inschatten. Om een raam, radiator of schoorsteen heen tekenen hoort bij het ontwerp.',
  werkkamer:
    'Een werkplek in een wandsysteem vraagt om een bladhoogte die klopt, ruimte voor kabels en apparatuur, en een verhouding tussen open en gesloten vakken die de kamer niet dichtzet. Alles wordt in hetzelfde materiaal doorgezet zodat het één meubel blijft en geen verzameling losse delen.',
  trapkast:
    'De ruimte onder een trap is een reeks steeds lagere driehoeken. Elk vak krijgt daarom een eigen maat, en de toegang bepaalt de indeling: draaideuren vooraan, uittrekbare elementen daar waar je anders niet bij komt.',
}
