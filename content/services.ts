/**
 * JDG Maatwerk Interieur, diensten.
 *
 * Toon: JDG als merk/collectief (niet "één man"). Realistische termijnen.
 * Casco als voorkeur, sloop optioneel. Keukens krijgen extra ruimte (grootste
 * vak, hoogste conversie potentie).
 */

import type { LucideIcon } from 'lucide-react'
import { ChefHat, Shirt, Tv, DoorOpen, LibraryBig, Bath } from 'lucide-react'
import { business } from './business'
import type { DienstSlug } from './dienst-slugs'

export type Service = {
  slug: DienstSlug
  title: string
  h1: string
  seoTitle: string
  metaDescription: string
  short: string
  intro: string
  paragraphs: string[]
  benefits: { title: string; body: string }[]
  process: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  icon: LucideIcon
  hero: string
  searchTerms: string[]
  featured?: boolean
  /**
   * Enkelvoud zoals een zoeker het intikt. Toegevoegd 02-09-2026: de titels
   * stonden in het meervoud ("Kledingkasten op maat in Breda") terwijl Search
   * Console laat zien dat er in het enkelvoud gezocht wordt ("kledingkast op
   * maat breda", "kast op maat breda", "inloopkast op maat breda").
   */
  singular: string
  /** Woorden waarmee dezelfde dienst óók gezocht wordt, uit GSC 23-31 aug 2026. */
  synoniemen: string[]
}

export const services: Service[] = [
  {
    slug: 'keukens-op-maat',
    singular: 'Keuken op maat',
    synoniemen: ['keuken op maat laten maken', 'maatwerkkeuken', 'keukenmaker', 'nieuwe keuken op maat'],
    title: 'Keukens op maat',
    h1: 'Een keuken die past bij hoe jij kookt.',
    seoTitle: 'Keuken op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Keukens op maat van JDG uit Terheijden. Eigen ontwerp, productie en montage, geleverd door heel Nederland en op verzoek daarbuiten.',
    short: 'Elk detail past, elke centimeter klopt.',
    intro: 'Een keuken op maat begint bij hoe je dag eruitziet. Waar je koffie zet, waar de kinderen ontbijten, waar je vrienden komen zitten als er gekookt wordt. Vanuit die dagelijkse routine tekent JDG het ontwerp uit.',
    paragraphs: [
      'Iedere keuken is anders. Een oude vloer die scheef ligt, een schoorsteen die dwarsligt, een raam op een rare hoogte. In een standaardkeuken moet je die dingen negeren. In een keuken op maat maken ze het ontwerp juist beter.',
      'JDG werkt vanaf schets tot montage aan hetzelfde project. Ontwerp, productie in eigen werkplaats en plaatsing komen samen uit één huis, waardoor er niets tussen wal en schip valt en de kwaliteit strak in de hand blijft.',
    ],
    benefits: [
      { title: 'Millimeterprecies', body: 'Elke lade, elk kastdeurtje en elke plank passen exact. Afkitten langs de muur hoort bij de oplevering; een kitrand of vulpaneel om een scheve naad te verbergen niet.' },
      { title: 'Eén huisstijl door het hele project', body: 'Ontwerp, productie en montage komen samen. Geen tussenlagen, geen ruis in de vertaling.' },
      { title: 'Vrij in keuze materialen en fronten', body: 'Werkbladen in composiet, keramiek of natuursteen. Fronten in lak, fineer, deco legno of melamine. Combineren mag.' },
      { title: 'Gemaakt om te blijven', body: 'Materialen worden met zorg gekozen, om kwaliteit en een lange levensduur te kunnen garanderen.' },
    ],
    process: [
      { title: 'Kennismaking', body: 'JDG komt bij je thuis, kijkt naar de ruimte en luistert naar hoe je er in wilt leven. Vrijblijvend en zonder kosten.' },
      { title: 'Offerte en ontwerp', body: 'Op basis van dat gesprek komt er een offerte op maat, waarna een tekening volgt. Aanpassingen zijn onbeperkt.' },
      { title: 'Productie in de werkplaats', body: 'In de werkplaats in Terheijden wordt de keuken op maat gebouwd. Onderdelen zijn genummerd en gecontroleerd voor ze vertrekken.' },
      { title: 'Plaatsing bij jou', body: 'Montage op locatie, aansluiting van apparatuur in overleg, afkitten en oplevering.' },
    ],
    faqs: [
      { q: 'Hoe lang duurt een keuken op maat?', a: 'Van eerste inmeting tot oplevering reken je op zes tot tien weken, afhankelijk van drukte en materiaalkeuze. Ontwerp neemt één tot twee weken, productie drie tot zes, plaatsing één werkweek.' },
      { q: 'Hoe snel krijg ik een eerste indicatie?', a: 'Na een appje met foto\'s en maten geeft JDG binnen één à twee weken een schets en prijsindicatie.' },
      { q: 'Werkt JDG bij voorkeur op casco?', a: 'Ja. Een oplevering op casco (leeg en klaar) laat de keuken het beste tot zijn recht komen. Sloop van de oude keuken en afvoer kunnen in overleg wel worden geregeld.' },
      { q: 'Mag ik mijn eigen apparatuur meebrengen?', a: 'In overleg. JDG werkt graag met vaste merken zoals Bosch, Siemens, Miele en Quooker, maar eigen apparatuur is mogelijk als dat past in het ontwerp.' },
      { q: 'Komt JDG ook in mijn plaats?', a: 'JDG werkt vanuit Terheijden door heel Nederland. Op verzoek zelfs internationaal. Op korte reisafstand komt JDG kosteloos langs voor een eerste gesprek.' },
      { q: 'Hoe zit het met garantie?', a: 'Op de constructie geldt vijf jaar garantie. Onderdelen zoals scharnieren en lade-geleiders vallen onder fabrieksgarantie.' },
    ],
    icon: ChefHat,
    hero: '/images/jdg-16.jpg',
    searchTerms: ['keuken op maat', 'keuken op maat laten maken', 'maatwerk keuken', 'keukenmaker', 'maatwerk keuken Nederland'],
    featured: true,
  },
  {
    slug: 'kledingkasten-op-maat',
    singular: 'Kledingkast op maat',
    synoniemen: ['kast op maat', 'kasten op maat', 'garderobekast op maat', 'inbouwkast op maat', 'kledingkast montage'],
    title: 'Kledingkasten op maat',
    h1: 'Een kast waar alles écht in past.',
    seoTitle: 'Kledingkast op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Kledingkasten op maat van JDG. Tot het plafond, precies passend in nissen en schuine daken. Werkplaats Terheijden, heel Nederland.',
    short: 'Elke centimeter benut, niets verspild.',
    intro: 'Een kledingkast op maat vult precies die ruimte die anders leeg blijft. Nissen, schuine daken, een hoek achter de deur. JDG tekent de kast zo dat elke centimeter benut wordt.',
    paragraphs: [
      'Bij een standaardkast houd je altijd ruimte over. Vijf centimeter aan de zijkant, tien boven, en er blijft een gat achter waar stof zich verzamelt. Bij een kast op maat zit de laatste plank strak tegen het plafond en sluit de deur precies aan tegen de muur.',
      'Ook binnenin gaat het om detail. Hoeveel hangruimte heb je nodig? Waar wil je een lade voor sokken, waar planken voor truien? De indeling wordt vooraf uitgewerkt zodat de kast past bij hoe je je aankleedt.',
    ],
    benefits: [
      { title: 'Elke centimeter benut', body: 'Tot het plafond, tot in de hoek. Geen dode ruimte waar spullen verdwijnen.' },
      { title: 'Indeling op maat', body: 'Hangruimte, lades, planken en schoenenrekken worden op jouw manier van opbergen afgestemd.' },
      { title: 'Deuren naar keuze', body: 'Vouwdeuren of schuifdeuren. Wat past bij de kamer.' },
      { title: 'Rustig in de kamer', body: 'Strak afgewerkt zonder zichtbare naden of lelijke plinten. De kast lijkt onderdeel van de architectuur.' },
    ],
    process: [
      { title: 'Inmeting', body: 'De ruimte wordt volledig opgemeten, inclusief scheve muren en niveauverschillen. Op basis van jouw wensen ontstaat een eerste schets.' },
      { title: 'Ontwerp', body: 'De indeling wordt getekend en met je doorgesproken. Pas als de tekening na aanpassingen volledig naar wens is, begint de productie.' },
      { title: 'Bouw', body: 'In de werkplaats wordt de kast op maat gebouwd, klaar voor montage.' },
      { title: 'Plaatsing', body: 'Montage bij jou thuis, inclusief afkitting en schoonmaken. Meestal binnen één werkdag klaar.' },
    ],
    faqs: [
      { q: 'Kan een kast op maat tot het plafond?', a: 'Ja, altijd. Ook bij schuine daken. Dat is juist de kracht van maatwerk, geen ruimte verspild tussen kast en plafond.' },
      { q: 'Hoe snel krijg ik een offerte?', a: 'Na inmeting reken je op één à twee weken voor het ontwerp en de heldere prijsopgave.' },
      { q: 'Hoe lang duurt de complete kast?', a: 'Van eerste inmeting tot plaatsing reken je op vier tot zes weken.' },
      { q: 'Werkt JDG ook met bestaande kasten?', a: 'Ja, waar dit mogelijk is kunnen we bestaande onderdelen voorzien van maatwerk oplossingen.' },
    ],
    icon: Shirt,
    hero: '/images/jdg-13.jpg',
    searchTerms: ['kledingkast op maat', 'kast op maat', 'inbouwkast', 'garderobekast op maat'],
  },
  {
    slug: 'inloopkasten-op-maat',
    singular: 'Inloopkast op maat',
    synoniemen: ['walk-in closet', 'aankleedkamer op maat', 'inloopkast laten maken'],
    title: 'Inloopkasten op maat',
    h1: 'Een inloopkast die werkt zoals jij aankleedt.',
    seoTitle: 'Inloopkast op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Inloopkasten op maat door JDG. Complete indeling met hangruimte, lades, schoenenrekken en LED. Terheijden en heel Nederland.',
    short: 'Alles zichtbaar, alles bij de hand.',
    intro: 'Een inloopkast is meer dan opbergen. Het is de plek waar je begint met je dag. JDG tekent de indeling zo dat wat je vaak nodig hebt vooraan zit, en wat je zelden gebruikt netjes uit het zicht.',
    paragraphs: [
      'Meestal begint een inloopkast met een kamer die te groot is voor een slaapkamer maar te klein voor een tweede zit. Perfect voor een aankleedruimte. De inloopkast wordt zo ontworpen dat de resterende ruimte comfortabel blijft, met plek voor een spiegel, een bankje of zelfs een make-up plek.',
      'Verlichting is een onderschat detail. Een LED-strip onder elke plank of achter elke hanglat maakt dat je in de winterochtend precies ziet wat je pakt. Geen zaklamp op je telefoon nodig.',
    ],
    benefits: [
      { title: 'Alles overzichtelijk', body: 'Kleding, schoenen, tassen en accessoires krijgen elk een eigen plek.' },
      { title: 'LED-verlichting', body: 'Verlichting binnenin de kast waardoor je in het donker precies ziet wat je pakt.' },
      { title: 'Slim ingedeeld', body: 'Trektafeltjes voor sieraden, dubbele hanglatten voor korte kleding, lades op ooghoogte.' },
      { title: 'Uitbreidbaar', body: 'De indeling kan later aangepast worden. Wat vandaag een baby-la is, wordt over vijf jaar een schoenenla.' },
    ],
    process: [
      { title: 'Kennismaking', body: 'JDG kijkt naar de ruimte en luistert naar hoe je je klaarmaakt \'s ochtends.' },
      { title: 'Ontwerp', body: 'Op maat getekende plattegrond met indeling, materialen en verlichting.' },
      { title: 'Productie', body: 'Kast, planken en lades worden in eigen werkplaats gebouwd.' },
      { title: 'Montage', body: 'Plaatsing en LED-installatie op locatie, meestal binnen twee dagen.' },
    ],
    faqs: [
      { q: 'Kan een kleine slaapkamer een inloopkast worden?', a: 'Ja, vanaf ongeveer zes vierkante meter is een fijne inloopkast mogelijk. Kleinere ruimtes kunnen ook, maar dan wordt het meer een grote kast dan een aankleedruimte.' },
      { q: 'Zit er een deur voor?', a: 'Kan wel of niet. Sommige klanten willen een open aankleedruimte, anderen een schuifdeur ervoor. Beide zijn mogelijk.' },
      { q: 'Hoe lang duurt de bouw?', a: 'Van ontwerp tot oplevering reken je op zes tot acht weken.' },
    ],
    icon: DoorOpen,
    hero: '/images/jdg-28.jpg',
    searchTerms: ['inloopkast op maat', 'walk-in closet', 'aankleedkamer op maat'],
  },
  {
    slug: 'tv-meubels-op-maat',
    singular: 'Tv-meubel op maat',
    synoniemen: ['tv wandmeubel', 'wandmeubel op maat', 'zwevend tv-meubel', 'tv-wand op maat'],
    title: 'Tv-meubels op maat',
    h1: 'Een tv-meubel dat de woonkamer af maakt.',
    seoTitle: 'Tv-meubel op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Tv-meubels op maat door JDG. Verborgen bekabeling, zwevende lades, verlichte nissen. Terheijden, heel Nederland.',
    short: 'Verdwijnt in de kamer, of maakt de kamer.',
    intro: 'Een tv-meubel op maat maakt van je woonkamer een geheel. Zwevend, over de hele lengte van de wand, met verborgen bekabeling en verlichte nissen. Of juist compact en onopvallend zodat de rest van de kamer de aandacht krijgt.',
    paragraphs: [
      'Kabels zijn altijd een probleem. Een standaard tv-meubel laat ze uit de achterkant vallen alsof het je niks kan schelen. Bij een meubel op maat gaan ze door de wand of via een kanaal in de constructie, zo blijft het beeld strak.',
      'Verlichting maakt het verschil. Een subtiele LED achter de tv voorkomt vermoeide ogen bij het bingewatchen. Verlichte nissen tillen boeken en decoratie naar een hoger niveau.',
    ],
    benefits: [
      { title: 'Verborgen kabels', body: 'Alle bedrading loopt door de constructie of door de wand. Geen wirwar achter de tv.' },
      { title: 'Zwevend', body: 'Optioneel opgehangen zodat de vloer eronder vrij blijft. Ideaal bij vloerverwarming of robotstofzuiger.' },
      { title: 'Verlichte nissen', body: 'LED-verlichting brengt boeken en objecten tot leven.' },
      { title: 'Ruimte voor apparatuur', body: 'Receiver, spelconsole, subwoofer en versterker krijgen elk een eigen plek met ventilatie.' },
    ],
    process: [
      { title: 'Meetgesprek', body: 'JDG komt langs, meet de wand op en luistert naar wat je in het meubel wilt.' },
      { title: 'Ontwerp', body: 'Tekening met verhoudingen, afwerkingen en verlichtingsplan.' },
      { title: 'Productie', body: 'Bouw in eigen werkplaats, inclusief voorbereiding voor bekabeling.' },
      { title: 'Montage', body: 'Ophangen aan de wand, aansluiten van elektra en afkitten.' },
    ],
    faqs: [
      { q: 'Kan een tv-meubel over de hele wand?', a: 'Ja, geen lengte is standaard. Elk meubel wordt passend aan de wand gemaakt.' },
      { q: 'Kan de tv verzonken in het meubel?', a: 'Ja. Een uitsparing zodat de tv gelijk komt met het meubelfront is mogelijk. Ook oplossingen waarbij de tv achter een schuifpaneel verdwijnt zijn haalbaar.' },
      { q: 'Hoe lang duurt de levering?', a: 'Vier tot zes weken van ontwerp tot montage.' },
    ],
    icon: Tv,
    hero: '/images/jdg-08.jpg',
    searchTerms: ['tv meubel op maat', 'wandmeubel op maat', 'zwevend tv meubel'],
  },
  {
    slug: 'boekenkasten-en-wandmeubels',
    singular: 'Boekenkast op maat',
    synoniemen: ['wandkast op maat', 'wandmeubel op maat', 'kast rond het raam', 'kastenwand op maat'],
    title: 'Boekenkasten op maat',
    h1: 'Een boekenkast als middelpunt.',
    seoTitle: 'Boekenkast op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Boekenkasten en wandmeubels op maat door JDG. Tot het plafond, met of zonder deuren, LED-verlichting mogelijk. Heel Nederland.',
    short: 'Een boekenkast die iedere kamer karakter geeft.',
    intro: 'Een boekenkast op maat maakt van boeken een decorstuk. Van vloer tot plafond, met of zonder gesloten kastjes onderin voor spullen die niet gezien hoeven worden. JDG ontwerpt met verhoudingen die kloppen bij de kamer.',
    paragraphs: [
      'Een standaard boekenkast wordt vaak te klein. Je koopt hem, en drie jaar later staan je boeken alweer verspreid door het huis. Een boekenkast op maat groeit mee, berekend op wat je verzamelt.',
      'Ook technisch belangrijk: boeken zijn zwaar. Planken die te dun zijn buigen door. JDG gebruikt constructies die deze belasting aankunnen zonder dat je een balk achter iedere plank ziet.',
    ],
    benefits: [
      { title: 'Vol tot het plafond', body: 'Met of zonder ladder. Verticaal wordt benut tot het laatste stukje.' },
      { title: 'Draagt echte boeken', body: 'Planken zijn berekend op zware series. Geen doorbuiging na een jaar.' },
      { title: 'Verlichting mogelijk', body: 'Verlichte nissen voor decoratie of leeslampen boven de leunstoel.' },
      { title: 'Gemengd open en gesloten', body: 'Open voor boeken, dicht voor de rest. Verhouding kies je zelf.' },
    ],
    process: [
      { title: 'Bezoek', body: 'JDG kijkt naar de ruimte en het aantal meters boeken dat je hebt.' },
      { title: 'Ontwerp', body: 'Voorstel met verhoudingen en materialen, afgestemd op de kamer.' },
      { title: 'Bouw', body: 'Kast wordt in delen gebouwd en getest op sterkte.' },
      { title: 'Plaatsing', body: 'Montage inclusief verankering en afwerking.' },
    ],
    faqs: [
      { q: 'Kan een boekenkast om een raam of deur heen?', a: 'Ja, dat komt vaak voor. Kast om een radiator, om een raamnis of om een deur zijn allemaal mogelijk.' },
    ],
    icon: LibraryBig,
    hero: '/images/jdg-01.jpg',
    searchTerms: ['boekenkast op maat', 'wandkast op maat', 'kast rond raam'],
  },
  {
    slug: 'badkamermeubels-op-maat',
    singular: 'Badkamermeubel op maat',
    synoniemen: ['wastafelmeubel op maat', 'badmeubel op maat', 'badkamermeubels op maat'],
    title: 'Badkamermeubels op maat',
    h1: 'Een badkamermeubel dat blijft staan.',
    seoTitle: 'Badkamermeubel op maat laten maken, JDG Maatwerk Interieur',
    metaDescription: 'Badkamermeubels op maat door JDG. Bestand tegen vocht, met opgezette waskom of onderbouw. Terheijden, heel Nederland.',
    short: 'Meubel dat vocht en tijd doorstaat.',
    intro: 'Een badkamermeubel op maat maakt de badkamer af. Precies passend tussen de muren, met ruimte voor spullen die anders op het aanrecht rondslingeren. Bouw en afwerking zijn afgestemd op dagelijkse vochtigheid.',
    paragraphs: [
      'Een badkamer is zwaar voor meubilair. Waterspetters, condens en warmte doen constant hun werk. Standaardmeubels vervormen na een paar jaar. Bij een meubel op maat kiest JDG materialen en afwerkingen die dit gemakkelijk aankunnen.',
      'Ook op afmeting. Standaardmeubels zijn zestig of tachtig centimeter breed. Als jouw badkamer daar niet toe verleent, blijft er ruimte over of moet er iets weg. Bij maatwerk sluit het meubel precies aan tegen de wand.',
    ],
    benefits: [
      { title: 'Vochtbestendig', body: 'Materialen en afwerkingen die tegen dagelijkse spatwater kunnen.' },
      { title: 'Precies passend', body: 'Van muur tot muur, van vloer tot spiegelkast. Geen kier waar water in zakt.' },
      { title: 'Soft-close lades', body: 'Standaard soft-close geleiders. Zacht sluitende deuren zonder klap.' },
      { title: 'Opgezet of ingebouwd', body: 'Waskom kan opgezet of ingebouwd. Beide zijn mogelijk.' },
    ],
    process: [
      { title: 'Inmeting', body: 'JDG meet op inclusief hoeken, tegels en leidingwerk.' },
      { title: 'Ontwerp', body: 'Tekening met keuze voor waskom, kraan en spiegelkast.' },
      { title: 'Bouw', body: 'Meubel wordt gebouwd met vochtbestendige materialen.' },
      { title: 'Plaatsing', body: 'Montage inclusief aansluiting van sifon en wasbak.' },
    ],
    faqs: [
      { q: 'Werkt maatwerk in kleine badkamers?', a: 'Juist daar. Een standaardmeubel past vaak niet, of laat lelijke gaten. Op maat maakt de kleine badkamer functioneler.' },
      { q: 'Hoe zit het met de garantie?', a: 'Op constructie geldt vijf jaar garantie. Aan aanwezige tegels of leidingwerk wordt niets veranderd zonder overleg.' },
    ],
    icon: Bath,
    hero: '/images/jdg-15.jpg',
    searchTerms: ['badkamermeubel op maat', 'wastafelmeubel op maat', 'badmeubel op maat'],
  },
]

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
)

export function getService(slug: string) {
  return servicesBySlug[slug]
}
