/**
 * Steden en werkgebied voor JDG Maatwerk Interieur.
 *
 * Jonas werkt vanuit Terheijden (West-Brabant) door heel Nederland.
 * Deze lijst voedt /werkgebied/[stad] en /diensten/[dienst]/[stad].
 *
 * Herzien 02-09-2026, twee redenen:
 *
 * 1. WAARHEID. De oude intro's claimden werk dat niemand kan aantonen:
 *    "wij werken hier vaak aan tv-meubels", "in Roosendaal komen wij vaak voor
 *    keukens", "Etten-Leur is een vast werkgebied". JDG bestaat sinds 2025 en
 *    heeft nul publieke reviews; zulke zinnen zijn verzonnen bewijs (DE WET art. 1.1).
 *    Ze zijn vervangen door wat wél klopt: waar de plaats ligt, hoe ver het rijden
 *    is, en wat maatwerk daar praktisch betekent.
 *
 * 2. VINDBAARHEID. De pagina's hadden per stad één zin eigen tekst (mediaan 96
 *    woorden op de stadpagina, 168 op dienst×stad, ~80% woordoverlap onderling).
 *    De extra velden hieronder — gemeente, kernen, nabij — geven de sjablonen
 *    échte, controleerbare variatie in plaats van een plaatsnaam-invulling.
 *
 * Oosterhout Zuid is vervallen: dat was dezelfde plaats als Oosterhout met een
 * andere slug, dus zeven duplicaat-URL's. Zie de redirect in next.config.ts.
 */

export type City = {
  slug: string
  name: string
  region: string
  /** Gemeente waar de plaats onder valt. Bron: gemeentelijke indeling NL. */
  gemeente: string
  distanceKm: number
  postcodePrefix: string
  intro: string
  landmark: string
  /** Wijken, kernen of buurtschappen binnen of direct naast de plaats. */
  kernen: string[]
  /** Slugs van plaatsen uit deze lijst die er het dichtst bij liggen. */
  nabij: string[]
}

export const cities: City[] = [
  {
    slug: 'terheijden',
    name: 'Terheijden',
    region: 'West-Brabant',
    gemeente: 'Drimmelen',
    distanceKm: 0,
    postcodePrefix: '4844',
    intro:
      'Terheijden is de thuisbasis: aan de Bredaseweg staat de werkplaats waar elk JDG-project wordt getekend, gezaagd en in elkaar gezet. Wie hier woont, kan het meubel zien staan voordat het de deur uit gaat.',
    landmark: 'de werkplaats aan de Bredaseweg',
    kernen: ['Wagenberg', 'Made', 'Drimmelen'],
    nabij: ['made', 'raamsdonksveer', 'geertruidenberg', 'breda'],
  },
  {
    slug: 'breda',
    name: 'Breda',
    region: 'Noord-Brabant',
    gemeente: 'Breda',
    distanceKm: 10,
    postcodePrefix: '48',
    intro:
      'Breda ligt op tien kilometer van de werkplaats. De woningvoorraad loopt uiteen van de herenhuizen in het Ginneken en Princenhage tot de nieuwbouw in Teteringen en de Haagse Beemden. Een herenhuis vraagt om plinten, kroonlijsten en scheve muren; een nieuwbouwwoning om centimeters winnen. Dat is precies het verschil tussen maatwerk en een kastdeur uit de doos.',
    landmark: 'het Ginneken',
    kernen: ['Ginneken', 'Princenhage', 'Teteringen', 'Haagse Beemden', 'Belcrum', 'Bavel'],
    nabij: ['terheijden', 'oosterhout', 'etten-leur', 'made'],
  },
  {
    slug: 'made',
    name: 'Made',
    region: 'West-Brabant',
    gemeente: 'Drimmelen',
    distanceKm: 6,
    postcodePrefix: '4921',
    intro:
      'Made ligt in dezelfde gemeente als de werkplaats, zes kilometer verderop. Kort bij betekent hier iets praktisch: inmeten, tussentijds iets laten zien en plaatsen kosten geen reisdag.',
    landmark: 'het centrum van Made',
    kernen: ['Drimmelen', 'Wagenberg', 'Lage Zwaluwe', 'Hooge Zwaluwe'],
    nabij: ['terheijden', 'geertruidenberg', 'raamsdonksveer', 'zevenbergen'],
  },
  {
    slug: 'oosterhout',
    name: 'Oosterhout',
    region: 'Noord-Brabant',
    gemeente: 'Oosterhout',
    distanceKm: 15,
    postcodePrefix: '49',
    intro:
      'Oosterhout is een stad met veel naoorlogse wijken en een oude kern rond de Heuvel. In de wijken uit de jaren zeventig en tachtig zit vaak dezelfde vraag: de indeling klopt niet meer, maar de woning slopen is zonde. Maatwerk vult dan precies de gaten die een standaardkast laat vallen.',
    landmark: 'de Heuvel',
    kernen: ['Slotjes', 'Dommelbergen', 'Vrachelen', 'Den Hout', 'Oosteind'],
    nabij: ['breda', 'geertruidenberg', 'dongen', 'raamsdonksveer'],
  },
  {
    slug: 'etten-leur',
    name: 'Etten-Leur',
    region: 'West-Brabant',
    gemeente: 'Etten-Leur',
    distanceKm: 20,
    postcodePrefix: '48',
    intro:
      'Etten-Leur is in enkele decennia flink gegroeid, met als gevolg een woningvoorraad die van vooroorlogs tot pas opgeleverd loopt. Voor maatwerk maakt dat weinig uit: er wordt hoe dan ook op locatie ingemeten voordat er iets gezaagd wordt.',
    landmark: 'het centrum van Etten-Leur',
    kernen: ['Sander', 'Grauwe Polder', 'Schoenmakershoek', 'Hoge Haansberg'],
    nabij: ['breda', 'roosendaal', 'zevenbergen', 'terheijden'],
  },
  {
    slug: 'zevenbergen',
    name: 'Zevenbergen',
    region: 'West-Brabant',
    gemeente: 'Moerdijk',
    distanceKm: 12,
    postcodePrefix: '4761',
    intro:
      'Zevenbergen is de grootste kern van de gemeente Moerdijk: een oude haven- en suikerkern met daaromheen nieuwbouw. Lintbebouwing betekent doorgaans diepe, smalle huizen — en daar wint een kast op maat het altijd van een kast uit de winkel.',
    landmark: 'de oude haven',
    kernen: ['Klundert', 'Fijnaart', 'Standdaarbuiten', 'Moerdijk'],
    nabij: ['made', 'etten-leur', 'roosendaal', 'terheijden'],
  },
  {
    slug: 'tilburg',
    name: 'Tilburg',
    region: 'Midden-Brabant',
    gemeente: 'Tilburg',
    distanceKm: 25,
    postcodePrefix: '50',
    intro:
      'Tilburg heeft van alles wat: negentiende-eeuwse arbeiderswoningen rond de oude textielfabrieken, appartementen aan de Piushaven en ruime nieuwbouw aan de randen. Vooral in de oudere panden lopen muren zelden zuiver — precies de situatie waarin een kast op maat het verschil maakt met een kast uit de doos.',
    landmark: 'de Piushaven',
    kernen: ['Piushaven', 'Oud-Noord', 'Berkel-Enschot', 'Udenhout', 'Reeshof'],
    nabij: ['gilze', 'rijen', 'dongen', 'waalwijk'],
  },
  {
    slug: 'dongen',
    name: 'Dongen',
    region: 'Midden-Brabant',
    gemeente: 'Dongen',
    distanceKm: 18,
    postcodePrefix: '5104',
    intro:
      'Dongen ligt tussen Tilburg en Oosterhout en heeft naast de dorpskern een aantal buitengebieden met langgevelboerderijen. Oude balken, dikke muren en schuine wanden vragen om inmeten, niet om standaardmaten.',
    landmark: 'het centrum van Dongen',
    kernen: ['s Gravenmoer', 'Klein Dongen', 'Vaart'],
    nabij: ['oosterhout', 'rijen', 'tilburg', 'waalwijk'],
  },
  {
    slug: 'rijen',
    name: 'Rijen',
    region: 'Midden-Brabant',
    gemeente: 'Gilze en Rijen',
    distanceKm: 20,
    postcodePrefix: '5121',
    intro:
      'Rijen ligt aan de spoorlijn Breda–Tilburg en groeide de laatste jaren stevig door met nieuwbouw. Nieuwbouw betekent rechte muren maar krappe maten: elke centimeter tot aan het plafond telt.',
    landmark: 'het centrum van Rijen',
    kernen: ['Gilze', 'Hulten', 'Molenschot'],
    nabij: ['gilze', 'tilburg', 'dongen', 'breda'],
  },
  {
    slug: 'waalwijk',
    name: 'Waalwijk',
    region: 'Midden-Brabant',
    gemeente: 'Waalwijk',
    distanceKm: 30,
    postcodePrefix: '5141',
    intro:
      'Waalwijk ligt aan de Bergsche Maas, met Sprang-Capelle en Waspik als kernen ernaast. De verste plaats uit dit werkgebied, en nog altijd binnen een half uur rijden vanaf de werkplaats.',
    landmark: 'het centrum van Waalwijk',
    kernen: ['Sprang-Capelle', 'Waspik', 'Baardwijk', 'Besoyen'],
    nabij: ['dongen', 'tilburg', 'geertruidenberg', 'raamsdonksveer'],
  },
  {
    slug: 'roosendaal',
    name: 'Roosendaal',
    region: 'West-Brabant',
    gemeente: 'Roosendaal',
    distanceKm: 28,
    postcodePrefix: '4701',
    intro:
      'Roosendaal heeft een binnenstad met vooroorlogse woningen en daaromheen ruime naoorlogse wijken. In de oudere panden zijn nissen, schoorstenen en trapkasten eerder regel dan uitzondering, en dat is werk dat je niet met een kant-en-klare kast oplost.',
    landmark: 'de binnenstad',
    kernen: ['Wouw', 'Nispen', 'Heerle', 'Kalsdonk', 'Langdonk'],
    nabij: ['bergen-op-zoom', 'etten-leur', 'zevenbergen', 'breda'],
  },
  {
    slug: 'bergen-op-zoom',
    name: 'Bergen op Zoom',
    region: 'West-Brabant',
    gemeente: 'Bergen op Zoom',
    distanceKm: 35,
    postcodePrefix: '4611',
    intro:
      'Bergen op Zoom heeft een beschermd stadsgezicht met honderden monumenten rond de Grote Markt. In een monumentaal pand zijn scheve vloeren en niet-haakse hoeken de norm; maatwerk sluit daarop aan in plaats van ertegen.',
    landmark: 'de Grote Markt',
    kernen: ['Halsteren', 'Lepelstraat', 'Gageldonk', 'Fort-Zeekant'],
    nabij: ['roosendaal', 'etten-leur', 'zevenbergen', 'breda'],
  },
  {
    slug: 'geertruidenberg',
    name: 'Geertruidenberg',
    region: 'West-Brabant',
    gemeente: 'Geertruidenberg',
    distanceKm: 8,
    postcodePrefix: '4931',
    intro:
      'Geertruidenberg is een van de oudste steden van Brabant, met een historische vestingkern rond de Markt. Acht kilometer van de werkplaats, dus inmeten en plaatsen zijn hier een kwestie van even rijden.',
    landmark: 'de Markt',
    kernen: ['Raamsdonksveer', 'Raamsdonk'],
    nabij: ['raamsdonksveer', 'terheijden', 'made', 'oosterhout'],
  },
  {
    slug: 'raamsdonksveer',
    name: 'Raamsdonksveer',
    region: 'West-Brabant',
    gemeente: 'Geertruidenberg',
    distanceKm: 5,
    postcodePrefix: '4941',
    intro:
      'Raamsdonksveer is de dichtstbijzijnde grotere plaats bij de werkplaats: vijf kilometer. Veel jaren-zestig en -zeventig woningen met vaste indelingen, waar de winst meestal in de hoogte zit — doorbouwen tot aan het plafond.',
    landmark: 'het centrum van Raamsdonksveer',
    kernen: ['Geertruidenberg', 'Raamsdonk'],
    nabij: ['geertruidenberg', 'terheijden', 'made', 'waalwijk'],
  },
  {
    slug: 'gilze',
    name: 'Gilze',
    region: 'Midden-Brabant',
    gemeente: 'Gilze en Rijen',
    distanceKm: 22,
    postcodePrefix: '5126',
    intro:
      'Gilze vormt met Rijen één gemeente tussen Breda en Tilburg. Een dorpskern met veel gezinswoningen, waar de vraag meestal begint bij te weinig bergruimte en eindigt bij een kast die van muur tot muur doorloopt.',
    landmark: 'het centrum van Gilze',
    kernen: ['Rijen', 'Hulten', 'Molenschot'],
    nabij: ['rijen', 'tilburg', 'breda', 'dongen'],
  },
]

export const citiesBySlug: Record<string, City> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
)

export function getCity(slug: string) {
  return citiesBySlug[slug]
}

/** Plaatsen die het dichtst bij `slug` liggen, voor interne links. */
export function nearbyCities(slug: string, max = 4): City[] {
  const c = getCity(slug)
  if (!c) return []
  const uit = c.nabij.map((s) => getCity(s)).filter(Boolean)
  if (uit.length >= max) return uit.slice(0, max)
  const rest = cities
    .filter((x) => x.slug !== slug && !c.nabij.includes(x.slug))
    .sort((a, b) => Math.abs(a.distanceKm - c.distanceKm) - Math.abs(b.distanceKm - c.distanceKm))
  return [...uit, ...rest].slice(0, max)
}
