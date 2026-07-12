/**
 * Steden en werkgebied voor JDG Maatwerk Interieur.
 *
 * Jonas werkt vanuit Terheijden (West-Brabant) door heel Nederland.
 * Deze lijst voedt de dynamische landing pages voor lokale SEO:
 * /diensten/[service]/[stad] — bijvoorbeeld /diensten/keukens-op-maat/breda.
 */

export type City = {
  slug: string
  name: string
  region: string
  distanceKm: number
  postcodePrefix: string
  intro: string
  landmark: string
}

export const cities: City[] = [
  {
    slug: 'terheijden',
    name: 'Terheijden',
    region: 'West-Brabant',
    distanceKm: 0,
    postcodePrefix: '4844',
    intro: 'Vanuit ons atelier in Terheijden bouwen wij dagelijks nieuwe interieurs. Jonas kent iedere wijk in het dorp en werkt hier vaker aan huis dan hij gedacht had.',
    landmark: 'ons atelier aan de Zeggelaan',
  },
  {
    slug: 'breda',
    name: 'Breda',
    region: 'Noord-Brabant',
    distanceKm: 10,
    postcodePrefix: '48',
    intro: 'Breda is voor JDG bijna huiswerk. Van monumentale herenhuizen in het Ginneken tot nieuwbouw in Teteringen, ieder project vraagt om andere maatvoering en een andere aanpak.',
    landmark: 'de wijk Ginneken',
  },
  {
    slug: 'made',
    name: 'Made',
    region: 'West-Brabant',
    distanceKm: 6,
    postcodePrefix: '4921',
    intro: 'Made ligt op tien minuten van ons atelier. Wij komen hier regelmatig voor keukens, kasten en tv-meubels op maat in zowel bestaande bouw als nieuwbouw.',
    landmark: 'centrum Made',
  },
  {
    slug: 'oosterhout',
    name: 'Oosterhout',
    region: 'Noord-Brabant',
    distanceKm: 15,
    postcodePrefix: '49',
    intro: 'Oosterhout heeft een groeiende vraag naar maatwerk interieur. Wij bouwen er keukens, garderobekasten en zolderopbergingen in vrijstaande huizen en herenhuizen.',
    landmark: 'de Heuvel',
  },
  {
    slug: 'etten-leur',
    name: 'Etten-Leur',
    region: 'West-Brabant',
    distanceKm: 20,
    postcodePrefix: '48',
    intro: 'Etten-Leur is een vast werkgebied voor JDG. Van compacte appartementen tot grote gezinshuizen bouwen wij hier interieur op maat.',
    landmark: 'centrum Etten-Leur',
  },
  {
    slug: 'zevenbergen',
    name: 'Zevenbergen',
    region: 'West-Brabant',
    distanceKm: 12,
    postcodePrefix: '4761',
    intro: 'In Zevenbergen bouwen wij keukens en kasten op maat voor nieuwbouwwijken en klassieke lintbebouwing.',
    landmark: 'centrum Zevenbergen',
  },
  {
    slug: 'tilburg',
    name: 'Tilburg',
    region: 'Midden-Brabant',
    distanceKm: 25,
    postcodePrefix: '50',
    intro: 'Tilburg is een van onze grotere werkgebieden. Van monumentale panden in het centrum tot moderne appartementen in de Piushaven — wij tekenen ieder ontwerp opnieuw uit.',
    landmark: 'de Piushaven',
  },
  {
    slug: 'dongen',
    name: 'Dongen',
    region: 'Midden-Brabant',
    distanceKm: 18,
    postcodePrefix: '5104',
    intro: 'Dongen kent veel karakteristieke boerderijen en rijtjeshuizen. Wij bouwen er keukens en kasten op maat die passen bij het karakter van de woning.',
    landmark: 'centrum Dongen',
  },
  {
    slug: 'rijen',
    name: 'Rijen',
    region: 'Midden-Brabant',
    distanceKm: 20,
    postcodePrefix: '5121',
    intro: 'Rijen is bereikbaar binnen een half uur vanuit ons atelier. Wij werken hier vaak aan tv-meubels en boekenkasten op maat in nieuwbouwwoningen.',
    landmark: 'centrum Rijen',
  },
  {
    slug: 'waalwijk',
    name: 'Waalwijk',
    region: 'Midden-Brabant',
    distanceKm: 30,
    postcodePrefix: '5141',
    intro: 'Waalwijk heeft een sterke bouw- en woningmarkt. Wij leveren hier maatwerk keukens, garderobes en tv-meubels voor bestaande bouw en nieuwbouw.',
    landmark: 'centrum Waalwijk',
  },
  {
    slug: 'roosendaal',
    name: 'Roosendaal',
    region: 'West-Brabant',
    distanceKm: 28,
    postcodePrefix: '4701',
    intro: 'In Roosendaal komen wij vaak voor keukens en garderobes op maat. Van vooroorlogse arbeiderswoningen tot nieuwbouwappartementen.',
    landmark: 'de binnenstad',
  },
  {
    slug: 'bergen-op-zoom',
    name: 'Bergen op Zoom',
    region: 'West-Brabant',
    distanceKm: 35,
    postcodePrefix: '4611',
    intro: 'Bergen op Zoom heeft veel monumentale panden. Wij passen ons maatwerk aan zodat het naadloos aansluit bij bestaande architectuur.',
    landmark: 'de Grote Markt',
  },
  {
    slug: 'geertruidenberg',
    name: 'Geertruidenberg',
    region: 'West-Brabant',
    distanceKm: 8,
    postcodePrefix: '4931',
    intro: 'Geertruidenberg ligt vlakbij Terheijden. Wij komen hier regelmatig voor kleinere kasten en boekenwanden tot en met complete keukens.',
    landmark: 'de Markt',
  },
  {
    slug: 'raamsdonksveer',
    name: 'Raamsdonksveer',
    region: 'West-Brabant',
    distanceKm: 5,
    postcodePrefix: '4941',
    intro: 'Raamsdonksveer is voor ons de dichtstbijzijnde grotere plaats. Wij werken hier vaak aan garderobekasten en tv-wanden op maat.',
    landmark: 'centrum Raamsdonksveer',
  },
  {
    slug: 'gilze',
    name: 'Gilze',
    region: 'Midden-Brabant',
    distanceKm: 22,
    postcodePrefix: '5126',
    intro: 'Gilze en Rijen kennen veel jonge gezinnen die maatwerk zoeken. Wij ontwerpen en bouwen er kasten en keukens die passen bij een druk gezinsleven.',
    landmark: 'centrum Gilze',
  },
  {
    slug: 'oosterhout-zuid',
    name: 'Oosterhout Zuid',
    region: 'Noord-Brabant',
    distanceKm: 12,
    postcodePrefix: '4906',
    intro: 'De zuidkant van Oosterhout kent veel jaren-70 en 80 wijken. Wij vernieuwen er keukens en kasten en brengen ze in balans met de rest van de woning.',
    landmark: 'de wijk Slotjes',
  },
]

export const citiesBySlug: Record<string, City> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
)

export function getCity(slug: string) {
  return citiesBySlug[slug]
}
