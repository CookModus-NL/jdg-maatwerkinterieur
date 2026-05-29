/**
 * JDG Maatwerk Interieur — diensten
 * Sluit aan op jdg-maatwerkinterieur.nl: drie hoofddisciplines, formele toon.
 */

import type { LucideIcon } from 'lucide-react'
import { ChefHat, Shirt, Tv, Layers, Sparkles, Hammer } from 'lucide-react'
import { business } from './business'

export type Service = {
  slug: string
  title: string
  tagline: string
  short: string
  long: string
  bullets?: string[]
  icon: LucideIcon
  hero: string
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'keukens-op-maat',
    title: 'Keukens op maat',
    tagline: 'Op maat gemaakte keukens',
    short:
      'Wij ontwerpen en vervaardigen keukens die perfect passen bij uw stijl en ruimte, met oog voor detail en kwaliteit.',
    long: `Een keuken op maat begint bij uw ruimte, uw maatvoering en uw smaak. Wij tekenen elke keuken vanaf de schets — millimeterprecies afgestemd op uw woning. Werkbladen in keramiek, composiet of natuursteen. Fronten in deco legno, gewassen eik, mat lak of een combinatie. Apparatuur naar uw keuze.\n\nVan eerste schets tot oplevering verzorgen wij alles uit één hand: sloop van de bestaande keuken, controle van leidingwerk, productie in eigen werkplaats, montage op locatie en strakke afkitting.`,
    bullets: [
      'Eigen ontwerp en eigen productie',
      'Werkbladen in keramiek, composiet of natuursteen',
      'Fronten: deco legno, lak, fineer of melamine',
      'Apparatuur naar wens (Bosch, Miele, Quooker e.a.)',
      'Sloop oude keuken inbegrepen',
      'Strakke plaatsing en afkitting op locatie',
    ],
    icon: ChefHat,
    hero: business.photos.keuken1,
    faqs: [
      { q: 'Hoe lang duurt een keuken op maat?', a: 'Vanaf eerste inmeting tot oplevering rekent u op 6 tot 10 weken. Inclusief ontwerp, productie en montage.' },
      { q: 'Kan ik mijn eigen apparatuur leveren?', a: 'Ja. Wij werken met vaste leveranciers, maar u bent vrij om eigen apparatuur te kiezen — wij houden in het ontwerp rekening met de exacte specificaties.' },
      { q: 'Wat kost een keuken op maat?', a: 'Sterk afhankelijk van afmeting, materiaal en apparatuur. Stuur foto’s en wensen via WhatsApp, dan ontvangt u binnen één werkdag een eerste indicatie.' },
      { q: 'Werkt JDG door heel Nederland?', a: 'Ja. Jonas werkt vanuit Terheijden door heel Nederland — voor grotere projecten komen wij overal.' },
    ],
  },
  {
    slug: 'kledingkasten',
    title: 'Kledingkasten en garderobes',
    tagline: 'Functionele kledingkasten',
    short:
      'Onze kledingkasten bieden slimme opbergoplossingen die uw garderobe overzichtelijk en toegankelijk maken.',
    long: `Een kast die past — bij de ruimte én bij wat erin moet. Wij tekenen de indeling samen met u: hangruimte, lades, plankjes, schoenenrek. Vouwdeuren, schuifdeuren of open inrichting. Tot het plafond zodat geen centimeter verloren gaat.\n\nMateriaal naar keuze: melamine voor budget, gewassen eik of fineer voor premium uitstraling. Strak ingemonteerd zonder zichtbare naden, alsof de kast er altijd al heeft gezeten.`,
    bullets: [
      'Tot het plafond, geen ruimte verspild',
      'Vouw-, schuif- of open deuren',
      'Op maat ingedeelde planken en lades',
      'LED-verlichting binnenin (optioneel)',
      'Strak ingemonteerd zonder zichtbare naden',
    ],
    icon: Shirt,
    hero: business.photos.kast1,
    faqs: [
      { q: 'Moet ik de kast zelf opmeten?', a: 'Nee — Jonas komt langs voor een vrijblijvende inmeting en advies op locatie. Dan zien wij samen wat past en hoe.' },
      { q: 'Welke deuren werken het beste?', a: 'Voor smallere ruimtes adviseren wij schuifdeuren. Voor brede ruimtes vouwdeuren of een open inrichting voor een ruimer gevoel.' },
    ],
  },
  {
    slug: 'tv-meubels',
    title: 'Stijlvolle tv-meubels',
    tagline: 'Tv-meubels en wandkasten',
    short:
      'Met onze tv-meubels combineert u vakmanschap en design, voor een warme en uitnodigende woonruimte.',
    long: `Een tv-meubel dat exact past bij uw tv-formaat, audio-set en kabelmanagement. Zwevend, op pootjes of als grote wandkast met verborgen opbergruimte. Standaardmeubels passen vrijwel nooit precies — daarom maatwerk.\n\nWij doen kabelmanagement zodat u geen tien snoeren ziet hangen, planken voor receivers en lades voor accessoires. Volledig afgewerkt zonder zichtbare naden, in het materiaal en de kleur die bij uw interieur past.`,
    bullets: [
      'Exact op maat voor uw tv-formaat',
      'Zwevend of staand naar wens',
      'Ingebouwd kabelmanagement',
      'Planken voor audio, console of decoratie',
      'Strakke afwerking in alle gewenste materialen',
    ],
    icon: Tv,
    hero: business.photos.keuken2,
    faqs: [
      { q: 'Kan er ook een wandkast bij de tv?', a: 'Ja — complete tv-wanden met verlichting en zwevende planken zijn een van onze specialiteiten.' },
    ],
  },
  {
    slug: 'trapkasten',
    title: 'Trapkasten en inbouwkasten',
    tagline: 'Slim gebruik van iedere centimeter',
    short:
      'Onder de trap zit meer ruimte dan u denkt. Wij maken inbouwkasten op maat — voor jassen, schoenen, voorraad of stofzuiger.',
    long: `Een trapkast die naadloos opgaat in het ontwerp van uw huis. Lades tot 70 cm diep, plankjes vooraan voor sleutels en post, hangruimte voor jassen. Op de millimeter passend in de schuine hoeken.\n\nIdentieke aanpak voor andere inbouwsituaties: nissen, dakkapellen, alkoofjes. Overal waar standaardmaten net niet werken.`,
    bullets: [
      'Op de millimeter passend in scheve hoeken',
      'Lades tot 70 cm diep',
      'Plankjes en hangruimte combineren',
      'Geïntegreerd in trapdesign',
      'Ook voor nissen en dakkapellen',
    ],
    icon: Layers,
    hero: business.photos.kast1,
    faqs: [
      { q: 'Past dit ook bij een open trap?', a: 'Ja — bij een open trap kunnen wij juist met de open ruimte spelen en een design-element maken in plaats van pure opslag.' },
    ],
  },
  {
    slug: 'overig-maatwerk',
    title: 'Overig maatwerk',
    tagline: 'Tafels, bibliotheekkasten, badkamermeubels',
    short:
      'Heeft u een idee dat niet in een categorie past? Stuur een schets of een Pinterest-bord. Eettafels, kantoorinrichting, badkamermeubels — alles is mogelijk.',
    long: `Soms hebt u een specifiek meubel in gedachten dat nergens te vinden is. Een eettafel in de exacte maat. Een bibliotheekkast van vloer tot plafond. Een badkamermeubel met de juiste indeling voor uw sanitair. Stuur een schets, foto of inspiratiebord, en wij werken het uit tot productieklare tekeningen.\n\nWij werken graag samen met interieurontwerpers en architecten voor grotere projecten en complete interieurconcepten.`,
    bullets: [
      'Eettafels op maat',
      'Bibliotheekkasten en home offices',
      'Badkamermeubels',
      'Inbouwbanken en zitkasten',
      'Samenwerking met ontwerpers en architecten',
    ],
    icon: Sparkles,
    hero: business.photos.keuken2,
    faqs: [
      { q: 'Welk materiaal raadt u aan?', a: 'Dat hangt van het meubel af. Voor eettafels massief eiken of een dik blad met visgraat. Voor kasten bekleed plaatmateriaal of hout-look melamine. Wij adviseren u graag.' },
    ],
  },
  {
    slug: 'plaatsing-montage',
    title: 'Plaatsing en montage',
    tagline: 'Niet alleen ontwerp, ook de installatie',
    short:
      'Heeft u elders een keuken of kast gekocht en zoekt u een vakman voor de plaatsing? Daar kunnen wij u bij helpen.',
    long: `Soms is alles al gekocht en moet het alleen nog gemonteerd worden. Vooral keukens en grote kasten vragen om vakwerk bij de montage: loodrecht zetten, leidingwerk inplannen, strak afwerken, kit aanbrengen op de juiste plekken.\n\nVoor plaatsing van een externe keuken of kast rekenen wij per dagdeel of per project. Stuur een berichtje met wat u hebt, dan laten wij u weten wat het kost.`,
    bullets: [
      'Externe keuken plaatsen (IKEA, Mandemakers, etc.)',
      'Grote kasten monteren',
      'Loodrecht en strak afwerken',
      'Leidingwerk inpassen',
    ],
    icon: Hammer,
    hero: business.photos.keuken1,
    faqs: [
      { q: 'Wat als er onverwacht problemen blijken?', a: 'Bij plaatsing van externe meubels kunnen passingsproblemen optreden. Wij bespreken vooraf wat wij doen als materialen niet passen — heldere afspraken, geen verrassingen.' },
    ],
  },
]

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
