/**
 * Blog artikelen voor long-tail SEO en GEO citations.
 * Elk artikel target 1 primaire zoekterm + gerelateerde queries.
 */

export type BlogPost = {
  slug: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  publishedAt: string
  updatedAt: string
  author: 'Jonas de Graaf'
  category: 'kosten' | 'proces' | 'materialen' | 'inspiratie'
  primaryKeyword: string
  relatedKeywords: string[]
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  hero: string
  readingMinutes: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'wat-kost-een-keuken-op-maat-2026',
    title: 'Wat kost een keuken op maat in 2026?',
    h1: 'Wat kost een keuken op maat in 2026? Eerlijke prijzen en wat je krijgt.',
    metaTitle: 'Wat kost een keuken op maat in 2026, JDG',
    metaDescription: 'Eerlijke prijzen voor een maatwerk keuken in 2026: van 12.000 tot 40.000 euro. Wat bepaalt de prijs, waar zitten de verschillen, en welke keuze past bij welk budget.',
    publishedAt: '2026-08-01',
    updatedAt: '2026-08-10',
    author: 'Jonas de Graaf',
    category: 'kosten',
    primaryKeyword: 'wat kost een keuken op maat',
    relatedKeywords: [
      'prijs keuken op maat 2026',
      'kosten maatwerk keuken',
      'goedkope keuken op maat',
      'duurdere keuken op maat',
      'wat is verschil keuken op maat vs ikea',
    ],
    intro: 'De vraag "wat kost een keuken op maat" krijgt in 2026 een breed antwoord: tussen de 12.000 en 40.000 euro exclusief apparatuur. De variatie komt door zes factoren die we hier stap voor stap uitleggen. Aan het einde van dit artikel weet je exact wat elk keuze-element je kost en waarom sommige keuzes hun meerprijs waard zijn.',
    sections: [
      {
        heading: 'Compacte keuken op maat: 12.000 tot 18.000 euro',
        body: 'Een rechte compacte keuken (2-3 meter lang) met melamine fronten, composiet werkblad en standaard apparatuur begint rond 12.000 euro. Dit is een reëele startprijs voor een appartement of kleine woning waar je een strakke moderne keuken wilt zonder poespas.',
        bullets: [
          'Melamine fronten of budget HPL',
          'Composiet werkblad 20mm',
          'Bosch of Siemens basisapparatuur',
          '2-3 meter lang, rechte opstelling',
          'Blum soft-close beslag',
        ],
      },
      {
        heading: 'Middenklasse keuken op maat: 18.000 tot 28.000 euro',
        body: 'De grootste groep JDG projecten valt in deze range. Je krijgt een keuken die 20 jaar meegaat, gebruikt materiaal dat past bij een kwaliteitswoning, en biedt ruimte voor persoonlijke wensen zoals eiland-opstelling of specifieke apparatuur.',
        bullets: [
          'HPL Fenix of eiken fineer fronten',
          'Composiet werkblad Caesarstone of Silestone',
          'Bosch, Siemens of Miele apparatuur',
          '4-6 meter met eventueel eiland',
          'Ingebouwde afzuigkap of downdraft',
        ],
      },
      {
        heading: 'Premium keuken op maat: 28.000 tot 40.000 euro',
        body: 'In deze range zit alles wat aandacht kost: massief hout of luxe fineer, keramisch werkblad, premium apparatuur zoals Miele Master of Gaggenau, custom kleurwerk, verlichte binnenkasten, elektrische lade-openers.',
        bullets: [
          'Massief eiken of walnoot fineer',
          'Keramisch werkblad Dekton of Neolith',
          'Miele Master, Gaggenau of Wolf apparatuur',
          'Eiland met bar-overhang of dining-integratie',
          'Bora afzuigsysteem of design kap',
          'Custom kleurwerk (RAL, NCS specifiek)',
        ],
      },
      {
        heading: 'Wat bepaalt de prijs binnen elke range',
        body: 'Zes factoren bepalen waar in de range jouw keuken uitkomt: fronten materiaal, werkblad materiaal, apparatuur, complexiteit van de opstelling, aantal ladeblokken en scharnierpunten, en of er specialisme nodig is (zoals dakschuinten in zolder of afwerking rond een schoorsteen). JDG geeft altijd een gedetailleerde offerte waarin elk deel apart benoemd staat.',
      },
      {
        heading: 'Hoe krijg ik een concrete prijs voor mijn keuken?',
        body: 'Stuur een appje naar Jonas met foto\'s van je huidige keuken of ruimte, samen met globale maten en wat je in gedachten hebt. Binnen één tot twee weken krijg je een schets met heldere prijsopgave. Aanpassingen zijn onbeperkt totdat het klopt.',
      },
    ],
    hero: '/images/jdg-16.jpg',
    readingMinutes: 5,
  },
  {
    slug: 'zolderinbouw-op-maat-7-dingen-vergeten',
    title: 'Zolderinbouw op maat: 7 dingen die vaak vergeten worden',
    h1: 'Zolderinbouw op maat: 7 dingen die klanten vaak vergeten.',
    metaTitle: 'Zolderinbouw op maat: 7 dingen die vaak vergeten worden, JDG',
    metaDescription: 'Zolderinbouw op maat gaat vaak mis op zeven punten: van verwarming en verlichting tot ventilatie en airco integratie. Wat je vooraf moet regelen voor een geslaagd project.',
    publishedAt: '2026-07-25',
    updatedAt: '2026-08-10',
    author: 'Jonas de Graaf',
    category: 'proces',
    primaryKeyword: 'zolderinbouw op maat',
    relatedKeywords: [
      'zolderkast op maat',
      'kledingkast zolder schuine wand',
      'zolder kastenwand op maat',
      'inbouwkast dakkapel',
      'zolder inrichten opbergruimte',
    ],
    intro: 'Zolderinbouw is een van de meest gevraagde JDG-projecten. Kastenwand van vloer tot dakspant, lades onder schuine wanden, kledingroeden precies op de goede hoogte. Wat vaak wordt vergeten voordat de maatwerk kast er staat? Deze zeven punten komen bij bijna elk zolderproject terug.',
    sections: [
      {
        heading: '1. Verwarming — waar komt de radiator?',
        body: 'Een zolderinbouwkast staat vaak precies op de plek waar je een radiator wilt hebben, of andersom. Bespreek vooraf waar warmte moet komen en of dat via vloerverwarming, radiator of infrarood loopt. JDG kan de kast met een geïntegreerde radiator-omkasting bouwen zodat de warmte niet verloren gaat.',
      },
      {
        heading: '2. Verlichting — binnen én buiten de kast',
        body: 'LED-verlichting in de kast is standaard, maar wat vaak vergeten wordt: hoe verlicht je de ruimte ervoor als de kast een deel van het licht wegvangt? Wij tekenen samen met een elektricien de positie van spots of leidingen zodat je niet op dark spots komt.',
      },
      {
        heading: '3. Ventilatie — vocht en muffe geuren',
        body: 'Zolders krijgen vaak te weinig ventilatie. Als een gesloten kastenwand tegen een buitenmuur staat, kan condens ontstaan. JDG plaatst kasten altijd met minimaal 2 cm ruimte tot buitenmuren, en zorgt voor luchtcirculatie via slots in de plint of achterwand.',
      },
      {
        heading: '4. Airco unit integratie',
        body: 'Steeds meer zolders hebben een airco unit die tegen de muur hangt. In plaats van een kast ernaast, kan JDG een kast rond de unit bouwen met louvre-panelen die de lucht doorlaten en de unit visueel wegwerken.',
      },
      {
        heading: '5. Dakraam als lichtbron',
        body: 'Een Velux dakraam boven een kastenwand betekent extra plafondhoogte en gratis daglicht. Bespreek met JDG of de kast tot aan het raam moet of er onder eindigt met een leuke plank waar planten kunnen staan.',
      },
      {
        heading: '6. Toegang tot leidingen en beveiliging',
        body: 'Onder de kast lopen vaak leidingen (water, ventilatie, kabels van rookmelders). Zorg dat er een demontabel paneel is voor toegang, of dat de kast op 2 cm van de vloer staat met een plint die eraf kan.',
      },
      {
        heading: '7. Toegang van de kast zelf (schuiven vs draaien)',
        body: 'Schuifdeuren nemen geen ruimte in maar geven maar half toegang tegelijk. Draaideuren geven volledig zicht maar hebben zwaaimeter nodig. Voor lage zolders is een combinatie soms de beste keuze: schuifdeuren voor het hoofdvak, draaideuren voor de nauwe schuine kant.',
      },
    ],
    hero: '/images/jdg-28.jpg',
    readingMinutes: 6,
  },
  {
    slug: 'kledingkast-op-maat-vs-kant-en-klaar',
    title: 'Kledingkast op maat vs kant-en-klaar: 5 verschillen die tellen',
    h1: 'Kledingkast op maat of kant-en-klaar? De vijf verschillen die echt tellen.',
    metaTitle: 'Kledingkast op maat vs kant-en-klaar: 5 verschillen, JDG',
    metaDescription: 'IKEA Pax of kledingkast op maat? Vijf concrete verschillen: maatvoering, ruimtebenutting, materiaal kwaliteit, levensduur en investering. Wat past bij welke situatie.',
    publishedAt: '2026-07-15',
    updatedAt: '2026-08-10',
    author: 'Jonas de Graaf',
    category: 'inspiratie',
    primaryKeyword: 'kledingkast op maat vs IKEA',
    relatedKeywords: [
      'inloopkast op maat',
      'kledingkast op maat prijs',
      'IKEA Pax alternatief op maat',
      'kledingkast tot plafond op maat',
      'garderobekast op maat',
    ],
    intro: 'IKEA Pax kost 800 euro, een JDG kledingkast op maat 4.000 euro. Waarom zou je vijf keer meer betalen? Deze vijf verschillen bepalen of maatwerk voor jouw situatie logisch is of niet.',
    sections: [
      {
        heading: '1. Maatvoering: elke centimeter passend',
        body: 'IKEA Pax komt in standaard breedtes (50 en 100cm) en hoogtes (201 en 236cm). Prima als je kamer die exacte afmetingen heeft. In de praktijk heeft bijna geen kamer die maten. Dan zit je met kieren aan de zijkanten die met opvullers gedicht worden, of onbenutte ruimte boven de kast tot aan het plafond.',
        bullets: [
          'Maatwerk vult tot de laatste millimeter',
          'Geen kieren of opvulblokken zichtbaar',
          'Werkt met scheve muren, spiepilaren en dakschuinten',
        ],
      },
      {
        heading: '2. Ruimtebenutting: 30 tot 40 procent meer opberg',
        body: 'Standaardkasten hebben standaard interne indelingen. Maatwerk kast heeft indeling die past bij wat je opbergt: dubbele hangroede voor blouses, hoge hangvak voor jurken, brede lade voor truien, smalle vakken voor schoenen. Dit levert 30-40 procent meer opbergruimte binnen dezelfde buitenmaten op.',
      },
      {
        heading: '3. Materiaal kwaliteit: 20+ jaar vs 5-10 jaar',
        body: 'IKEA gebruikt HDF (High Density Fiberboard) met melamine printfolie. Prima materiaal, maar hoeken en randen slijten sneller bij intensief gebruik. Maatwerk gebruikt volledig gefineerd of gelakt plaatmateriaal, met massief houten randen. Dat verschil zie je na 10 jaar.',
      },
      {
        heading: '4. Beslag: Blum soft-close standaard',
        body: 'IKEA Pax heeft Utrusta soft-close als upgrade (extra kosten). Maatwerk kast heeft Blum Blumotion soft-close standaard, met levenslange fabrieksgarantie op de scharnieren. Bij dagelijks gebruik gaan Blum scharnieren 40 jaar mee zonder verval.',
      },
      {
        heading: '5. Investering: kosten per jaar',
        body: 'IKEA Pax 800 euro / 8 jaar levensduur = 100 euro per jaar. JDG kledingkast 4.000 euro / 25 jaar levensduur = 160 euro per jaar. De maatwerk kast kost dus 60 euro per jaar meer, in ruil voor: perfecte pasvorm, 30 procent meer opbergruimte, betere materialen en 5 jaar garantie. Voor sommigen is dat de moeite waard, voor anderen niet. Beide keuzes zijn valide.',
      },
      {
        heading: 'Wanneer kies je maatwerk?',
        body: 'Kies maatwerk als: (a) je kamer een niet-standaard maat heeft, (b) je een specifieke opbergindeling wilt die niet in standaard kasten past, (c) je van plan bent 20+ jaar in het huis te blijven, (d) de kast in een dagelijkse woonruimte staat waar kwaliteit zichtbaar is. Voor tijdelijke kamers of standaard-formaat wanden is IKEA een prima keuze.',
      },
    ],
    hero: '/images/jdg-13.jpg',
    readingMinutes: 6,
  },
]

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug)
