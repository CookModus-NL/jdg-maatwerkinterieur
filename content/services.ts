/**
 * JDG Maatwerk Interieur — diensten
 *
 * Zes diensten met eigen landingspagina + dynamische stedenpagina's.
 * Copy is bewust natuurlijk geschreven: één vakman (Jonas), geen "wij team".
 * Materialen worden niet als USP genoemd — de focus ligt op wat de klant krijgt.
 */

import type { LucideIcon } from 'lucide-react'
import { ChefHat, Shirt, Tv, DoorOpen, LibraryBig, Bath } from 'lucide-react'
import { business } from './business'

export type Service = {
  slug: string
  title: string
  h1: string
  seoTitle: string
  metaDescription: string
  short: string
  intro: string
  paragraphs: string[]
  benefits: { title: string; body: string }[]
  process: { n: string; title: string; body: string }[]
  faqs: { q: string; a: string }[]
  icon: LucideIcon
  hero: string
  searchTerms: string[]
}

export const services: Service[] = [
  {
    slug: 'keukens-op-maat',
    title: 'Keukens op maat',
    h1: 'Een keuken die past bij hoe jij kookt.',
    seoTitle: 'Keuken op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Keukens op maat door Jonas van JDG in Terheijden. Ontwerp, productie en montage door één maker. Levering door heel Nederland.',
    short: 'Een keuken die je stiekem elke ochtend even bekijkt.',
    intro: 'Een keuken op maat begint bij hoe jouw dag eruitziet. Waar je koffie zet, waar de kinderen ontbijten, waar je vrienden komen zitten als je kookt. Vanuit die dagelijkse routine tekent Jonas het ontwerp uit.',
    paragraphs: [
      'Iedere keuken is anders. Een oude vloer die scheef ligt, een schoorsteen die dwarsligt, een raam op een rare hoogte. Dat is precies waarom maatwerk zin heeft. In een standaardkeuken moet je die dingen negeren. In een keuken op maat maken ze het ontwerp juist beter.',
      'Van de eerste schets tot de laatste knop komt alles uit één hand. Jonas ontwerpt, tekent, maakt en monteert. Zo weet je precies met wie je te maken hebt, en verdwijnen details niet in een keten van onderaannemers.',
    ],
    benefits: [
      { title: 'Millimeterprecies', body: 'Elke lade, elk kastdeurtje en elke plank passen exact. Geen kitranden om schele naden weg te werken.' },
      { title: 'Één aanspreekpunt', body: 'Van eerste gesprek tot oplevering praat je met dezelfde persoon. Vragen worden binnen een dag beantwoord.' },
      { title: 'Vrij in keuze', body: 'Werkbladen, fronten, apparatuur en beslag zijn allemaal vrij te kiezen. Geen verplichte pakketten.' },
      { title: 'Duurzaam gebouwd', body: 'Constructie en scharnieren zijn zo gekozen dat de keuken twintig jaar mee kan. Reserveonderdelen zijn altijd te vervangen.' },
    ],
    process: [
      { n: '01', title: 'Kennismaking', body: 'Jonas komt bij je thuis, kijkt naar de ruimte en luistert naar hoe je erin wil leven. Vrijblijvend en zonder kosten.' },
      { n: '02', title: 'Ontwerp', body: 'Op basis van dat gesprek maakt Jonas een tekening met maten, materialen en een heldere prijsopgave.' },
      { n: '03', title: 'Productie', body: 'In het atelier in Terheijden wordt de keuken op maat gebouwd. Onderdelen zijn genummerd en gecontroleerd voor ze vertrekken.' },
      { n: '04', title: 'Plaatsing', body: 'Jonas monteert de keuken zelf op locatie. Sloop van de oude keuken, controle van leidingwerk en afkitting horen erbij.' },
    ],
    faqs: [
      { q: 'Hoe lang duurt een keuken op maat?', a: 'Van eerste inmeting tot oplevering reken je op zes tot tien weken. Ontwerp neemt één tot twee weken, productie drie tot zes, en plaatsing één werkweek.' },
      { q: 'Mag ik mijn eigen apparatuur meebrengen?', a: 'Ja. Wij werken graag met Bosch, Miele en Quooker, maar je bent vrij om je eigen apparatuur mee te brengen. In het ontwerp wordt rekening gehouden met de exacte specificaties.' },
      { q: 'Wat kost een keuken op maat ongeveer?', a: 'Een indicatie: eenvoudige rechte keukens beginnen rond de 12.000 euro, uitgebreide keukens met eiland en premium apparatuur lopen tot 30.000 of meer. Stuur foto\'s van je huidige keuken via WhatsApp voor een eerste indicatie binnen één werkdag.' },
      { q: 'Komen jullie ook in mijn plaats?', a: 'Jonas werkt vanuit Terheijden door heel Nederland. Voor grotere projecten reist hij overal naartoe. Op korte reisafstand komt hij vrijblijvend langs.' },
    ],
    icon: ChefHat,
    hero: business.photos.keuken1,
    searchTerms: ['keuken op maat', 'keuken op maat laten maken', 'maatwerk keuken', 'keukenmaker'],
  },
  {
    slug: 'kledingkasten-op-maat',
    title: 'Kledingkasten op maat',
    h1: 'Een kast waar alles écht in past.',
    seoTitle: 'Kledingkast op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Kledingkasten op maat door Jonas van JDG. Tot het plafond, precies passend in nissen en schuine daken. Terheijden — heel Nederland.',
    short: 'Een kast op maat maakt van elke ruimte een oplossing.',
    intro: 'Een kledingkast op maat vult precies die ruimte die anders leeg blijft. Nissen, schuine daken, een hoek achter de deur. Jonas tekent de kast zo dat elke centimeter benut wordt.',
    paragraphs: [
      'Bij een standaardkast houd je altijd ruimte over. Vijf centimeter aan de zijkant, tien boven, en er blijft een gat achter waar stof zich verzamelt. Bij een kast op maat zit de laatste plank strak tegen het plafond en sluit de deur precies aan tegen de muur.',
      'Ook binnenin gaat het om detail. Hoeveel hangruimte heb je nodig? Waar wil je een la voor sokken, waar planken voor truien? Jonas denkt met je mee over de indeling voordat hij de kast tekent.',
    ],
    benefits: [
      { title: 'Elke centimeter benut', body: 'Tot het plafond, tot in de hoek. Geen dode ruimte waar spullen verdwijnen.' },
      { title: 'Indeling op maat', body: 'Hangruimte, laden, planken en schoenenrekken worden op jouw manier van opbergen afgestemd.' },
      { title: 'Deuren naar keuze', body: 'Vouwdeuren, schuifdeuren, of open kast met gordijn. Wat past bij de kamer.' },
      { title: 'Rustig in de kamer', body: 'Strak afgewerkt zonder zichtbare naden of lelijke plinten. De kast lijkt onderdeel van de architectuur.' },
    ],
    process: [
      { n: '01', title: 'Inmeting', body: 'Jonas meet de ruimte volledig op, inclusief scheve muren en niveauverschillen. Op basis van jouw wensen ontstaat een eerste schets.' },
      { n: '02', title: 'Ontwerp', body: 'De indeling wordt getekend en met je doorgesproken. Aanpassingen zijn gratis totdat je akkoord bent.' },
      { n: '03', title: 'Bouw', body: 'In het atelier wordt de kast op maat gebouwd, klaar voor montage.' },
      { n: '04', title: 'Plaatsing', body: 'Montage bij jou thuis, inclusief afkitting en schoonmaken. Meestal binnen één werkdag klaar.' },
    ],
    faqs: [
      { q: 'Kan een kast op maat tot het plafond?', a: 'Ja, altijd. Ook bij schuine daken. Dat is juist de kracht van maatwerk — je verspilt geen ruimte tussen kast en plafond.' },
      { q: 'Wat kost een kledingkast op maat?', a: 'Een garderobekast van twee meter breed begint rond de 2.000 euro. Voor een inloopkast met complete inrichting reken je op 4.000 tot 8.000 euro. Exact bedrag hangt af van afwerking en indeling.' },
      { q: 'Hoe lang duurt het?', a: 'Van eerste inmeting tot plaatsing reken je op vier tot zes weken.' },
      { q: 'Werkt Jonas ook met bestaande kastdeuren?', a: 'Ja. Als je een IKEA Pax of ander systeem hebt en de deuren wil hergebruiken, kan Jonas de rest op maat maken en aansluiten.' },
    ],
    icon: Shirt,
    hero: business.photos.kast1,
    searchTerms: ['kledingkast op maat', 'kast op maat', 'inbouwkast', 'garderobekast op maat'],
  },
  {
    slug: 'inloopkasten-op-maat',
    title: 'Inloopkasten op maat',
    h1: 'Een inloopkast die werkt zoals jij aankleedt.',
    seoTitle: 'Inloopkast op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Inloopkasten op maat door JDG. Complete indeling met hangruimte, laden, schoenenrekken en LED. Terheijden en heel Nederland.',
    short: 'Alles zichtbaar en bij de hand — een aankleedruimte in plaats van een prop-kast.',
    intro: 'Een inloopkast is meer dan opbergen. Het is de plek waar je begint met je dag. Jonas tekent de indeling zo dat wat je vaak nodig hebt vooraan zit, en wat je zelden gebruikt netjes uit het zicht.',
    paragraphs: [
      'Meestal begint een inloopkast met een kamer die te groot is voor een slaapkamer maar te klein voor een tweede zit. Perfect voor een aankleedruimte. Jonas ontwerpt de inloopkast zo dat de resterende ruimte comfortabel blijft — met plaats voor een spiegel, een bankje of zelfs een make-up plek.',
      'Verlichting is een onderschat detail. Een LED-strip onder elke plank of achter elke hanglat maakt dat je in de winterochtend precies ziet wat je pakt. Geen zaklamp op je telefoon nodig.',
    ],
    benefits: [
      { title: 'Alles overzichtelijk', body: 'Kleding, schoenen, tassen en accessoires krijgen elk een eigen plek.' },
      { title: 'LED-verlichting', body: 'Verlichting binnenin de kast waardoor je in het donker precies ziet wat je pakt.' },
      { title: 'Slim ingedeeld', body: 'Trektafeltjes voor sieraden, dubbele hanglatten voor korte kleding, laden op ooghoogte.' },
      { title: 'Uitbreidbaar', body: 'De indeling kan later aangepast worden. Wat vandaag een baby-la is, wordt over vijf jaar een schoenen-la.' },
    ],
    process: [
      { n: '01', title: 'Kennismaking', body: 'Jonas kijkt naar de ruimte en luistert naar hoe je je klaarmaakt \'s ochtends.' },
      { n: '02', title: 'Ontwerp', body: 'Op maat getekende plattegrond met indeling, materialen en verlichting.' },
      { n: '03', title: 'Productie', body: 'Kast, planken en laden worden in eigen atelier gebouwd.' },
      { n: '04', title: 'Montage', body: 'Plaatsing en LED-installatie op locatie, meestal binnen twee dagen.' },
    ],
    faqs: [
      { q: 'Kan een kleine slaapkamer een inloopkast worden?', a: 'Ja, vanaf ongeveer zes vierkante meter kunnen we een fijne inloopkast maken. Kleinere ruimtes kunnen ook, maar dan wordt het meer een grote kast dan een aankleedruimte.' },
      { q: 'Wat kost een inloopkast op maat?', a: 'Complete inloopkasten met LED, laden en hanglatten beginnen rond de 4.000 euro. Voor een grotere ruimte met veel opbergsysteem reken je op 6.000 tot 10.000 euro.' },
      { q: 'Zit er een deur voor?', a: 'Kan wel of niet. Sommige klanten willen een open aankleedruimte, andere willen een schuifdeur ervoor. Beide opties zijn mogelijk.' },
      { q: 'Hoe lang duurt de bouw?', a: 'Van ontwerp tot oplevering reken je op zes tot acht weken.' },
    ],
    icon: DoorOpen,
    hero: business.photos.kast1,
    searchTerms: ['inloopkast op maat', 'walk-in closet', 'aankleedkamer op maat'],
  },
  {
    slug: 'tv-meubels-op-maat',
    title: 'Tv-meubels en wandmeubels',
    h1: 'Een tv-meubel dat de woonkamer af maakt.',
    seoTitle: 'Tv-meubel op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Tv-meubels en wandmeubels op maat door Jonas van JDG. Verborgen bekabeling, zwevende lades, verlichte nissen. Terheijden — heel Nederland.',
    short: 'Een tv-meubel dat verdwijnt in de kamer, of juist de kamer maakt.',
    intro: 'Een tv-meubel op maat maakt van je woonkamer een geheel. Zwevend, over de gehele lengte van de wand, met verborgen bekabeling en verlichte nissen. Of juist compact en onopvallend zodat de rest van de kamer de aandacht krijgt.',
    paragraphs: [
      'Kabels zijn altijd een probleem. Een standaard tv-meubel laat ze uit de achterkant vallen alsof het je niks kan schelen. Bij een meubel op maat gaan ze door de wand of via een kanaal in de constructie — zo blijft het beeld strak.',
      'Verlichting maakt het verschil. Een subtiele LED achter de tv voorkomt vermoeide ogen bij het bingewatchen. Verlichte nissen tillen boeken en decoratie naar een hoger niveau.',
    ],
    benefits: [
      { title: 'Verborgen kabels', body: 'Alle bedrading loopt door de constructie of door de wand. Geen wirwar achter de tv.' },
      { title: 'Zwevend', body: 'Optioneel opgehangen zodat de vloer eronder vrij blijft. Ideaal bij vloerverwarming en bij robotstofzuigers.' },
      { title: 'Verlichte nissen', body: 'LED-verlichting brengt boeken en objecten tot leven.' },
      { title: 'Ruimte voor apparatuur', body: 'Receiver, spelconsole, subwoofer en versterker krijgen elk een eigen plek met ventilatie.' },
    ],
    process: [
      { n: '01', title: 'Meetgesprek', body: 'Jonas komt langs, meet de wand op en luistert naar wat je in het meubel wil.' },
      { n: '02', title: 'Ontwerp', body: 'Tekening met verhoudingen, afwerkingen en verlichtingsplan.' },
      { n: '03', title: 'Productie', body: 'Bouw in eigen atelier, inclusief voorbereiding voor bekabeling.' },
      { n: '04', title: 'Montage', body: 'Ophangen aan de wand, aansluiten van elektra en afkitten.' },
    ],
    faqs: [
      { q: 'Kan een tv-meubel over de hele wand?', a: 'Ja, tot zes meter breed is standaard. Grotere breedtes zijn ook mogelijk maar worden in delen gemonteerd.' },
      { q: 'Wat kost een tv-meubel op maat?', a: 'Een compact zwevend meubel begint rond de 1.500 euro. Complete wandmeubels met verlichting en kastjes lopen van 3.000 tot 8.000 euro.' },
      { q: 'Kan de tv verzonken in het meubel?', a: 'Ja. We kunnen een uitsparing maken zodat de tv gelijk komt met het meubelfront. Ook zijn oplossingen mogelijk waarbij de tv achter een schuifpaneel verdwijnt.' },
      { q: 'Hoe lang duurt de levering?', a: 'Vier tot zes weken van ontwerp tot montage.' },
    ],
    icon: Tv,
    hero: business.photos.keuken2,
    searchTerms: ['tv meubel op maat', 'wandmeubel op maat', 'zwevend tv meubel'],
  },
  {
    slug: 'boekenkasten-en-wandmeubels',
    title: 'Boekenkasten en wandmeubels',
    h1: 'Een boekenkast als middelpunt.',
    seoTitle: 'Boekenkast op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Boekenkasten en wandmeubels op maat door Jonas. Tot het plafond, met of zonder deuren, LED-verlichting mogelijk. Terheijden en heel Nederland.',
    short: 'Een boekenkast die iedere kamer karakter geeft.',
    intro: 'Een boekenkast op maat maakt van boeken een decorstuk. Van vloer tot plafond, met of zonder gesloten kastjes onderin voor spullen die niet gezien hoeven worden. Jonas ontwerpt met verhoudingen die kloppen bij de kamer.',
    paragraphs: [
      'Een standaard boekenkast wordt vaak te klein. Je koopt hem, en drie jaar later staan je boeken alweer verspreid door het huis. Een boekenkast op maat groeit mee, is berekend op wat je verzamelt.',
      'Ook technisch belangrijk: boeken zijn zwaar. Planken die te dun zijn buigen door. Wij gebruiken constructies die deze belasting aankunnen zonder dat je een balk achter iedere plank ziet.',
    ],
    benefits: [
      { title: 'Vol tot het plafond', body: 'Met of zonder ladder. Verticaal benutten we tot het laatste stukje.' },
      { title: 'Dragen echte boeken', body: 'Planken zijn berekend op zware series. Geen doorbuiging na een jaar.' },
      { title: 'Verlichting mogelijk', body: 'Verlichte nissen voor decoratie of leeslampen boven de leunstoel.' },
      { title: 'Gemengd open en gesloten', body: 'Open voor boeken, dicht voor de rest. Je bepaalt de verhouding.' },
    ],
    process: [
      { n: '01', title: 'Bezoek', body: 'Jonas kijkt naar de ruimte en het aantal meters boeken dat je hebt.' },
      { n: '02', title: 'Ontwerp', body: 'Voorstel met verhoudingen en materialen, afgestemd op de kamer.' },
      { n: '03', title: 'Bouw', body: 'Kast wordt in delen gebouwd en getest op sterkte.' },
      { n: '04', title: 'Plaatsing', body: 'Montage inclusief verankering en afwerking.' },
    ],
    faqs: [
      { q: 'Kan een boekenkast om een raam of deur heen?', a: 'Ja, dat komt vaak voor. Kast om een radiator, om een raamnis of om een deur zijn allemaal mogelijk.' },
      { q: 'Wat kost een boekenkast op maat?', a: 'Een enkelwandig meubel van drie meter breed en tot het plafond begint rond de 2.500 euro. Grote wandvullende systemen lopen tot 8.000 euro.' },
      { q: 'Hoe zwaar mogen de planken belast worden?', a: 'Onze constructie gaat uit van twintig kilo per strekkende meter — genoeg voor complete boekenseries.' },
    ],
    icon: LibraryBig,
    hero: business.photos.keuken2,
    searchTerms: ['boekenkast op maat', 'wandkast op maat', 'kast rond raam'],
  },
  {
    slug: 'badkamermeubels-op-maat',
    title: 'Badkamermeubels op maat',
    h1: 'Een badkamermeubel dat blijft staan.',
    seoTitle: 'Badkamermeubel op maat laten maken — JDG Maatwerk Interieur',
    metaDescription: 'Badkamermeubels op maat door Jonas van JDG. Bestand tegen vocht, met opgezette waskom of onderbouw. Terheijden en heel Nederland.',
    short: 'Een meubel dat vocht en tijd doorstaat.',
    intro: 'Een badkamermeubel op maat maakt de badkamer af. Precies passend tussen de muren, met ruimte voor spullen die anders op het aanrecht rondslingeren. Bouw en afwerking zijn afgestemd op dagelijkse vochtigheid.',
    paragraphs: [
      'Een badkamer is zwaar voor meubilair. Waterspetters, condens en warmte doen constant hun werk. Standaardmeubels vervormen na een paar jaar. Bij een meubel op maat kiest Jonas materialen en afwerkingen die dit gemakkelijk aankunnen.',
      'Ook op afmeting. Standaardmeubels zijn zestig of tachtig centimeter breed. Als jouw badkamer daar niet toe verleent, blijft er ruimte over of moet er iets weg. Bij maatwerk sluit het meubel precies aan tegen de wand.',
    ],
    benefits: [
      { title: 'Vochtbestendig', body: 'Materialen en afwerkingen die tegen dagelijkse spatwater kunnen.' },
      { title: 'Precies passend', body: 'Van muur tot muur, van vloer tot spiegelkast. Geen kier waar water in zakt.' },
      { title: 'Soft-close lades', body: 'Standaard soft-close geleiders. Zacht sluitende deuren zonder klap.' },
      { title: 'Opgezet of ingebouwd', body: 'Waskom kan opgezet of ingebouwd. Beide zijn mogelijk.' },
    ],
    process: [
      { n: '01', title: 'Inmeting', body: 'Jonas meet op inclusief hoeken, tegels en leidingwerk.' },
      { n: '02', title: 'Ontwerp', body: 'Tekening met keuze voor waskom, kraan en spiegelkast.' },
      { n: '03', title: 'Bouw', body: 'Meubel wordt gebouwd met vochtbestendige materialen.' },
      { n: '04', title: 'Plaatsing', body: 'Montage inclusief aansluiting van sifon en wasbak.' },
    ],
    faqs: [
      { q: 'Werkt maatwerk in kleine badkamers?', a: 'Juist daar. Een standaardmeubel past vaak niet, of laat lelijke gaten. Op maat maakt de kleine badkamer functioneler.' },
      { q: 'Wat kost een badkamermeubel op maat?', a: 'Enkele wastafelmeubels beginnen rond 1.200 euro. Dubbele meubels met spiegelkast lopen tot 3.500 euro.' },
      { q: 'Hoe zit het met de garantie?', a: 'Op constructie geven we vijf jaar garantie. Aan aanwezige tegels of leidingwerk wordt niets veranderd zonder overleg.' },
    ],
    icon: Bath,
    hero: business.photos.keuken1,
    searchTerms: ['badkamermeubel op maat', 'wastafelmeubel op maat', 'badmeubel op maat'],
  },
]

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
)

export function getService(slug: string) {
  return servicesBySlug[slug]
}
