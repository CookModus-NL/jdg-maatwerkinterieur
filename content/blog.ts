/**
 * Blog artikelen voor long-tail SEO en GEO citations.
 * Elk artikel target 1 primaire zoekterm + gerelateerde queries.
 */

export type BlogPost = {
  /**
   * Staat dit artikel live? Toegevoegd 02-09-2026.
   *
   * Op 10 aug 2026 heeft Jonas bij zijn review álle prijs-FAQ's van de site
   * laten verwijderen (commit d421379: "Alle prijs-FAQ's verwijderd per Jonas'
   * verzoek", zeven stuks). Elf dagen later zette de contentmotor twee artikelen
   * neer die precies dat weer terugbrengen: bedragen van 12.000 tot 40.000 euro
   * per keuken, 4.000 euro per kledingkast, en een claim van "30 tot 40 procent
   * meer opbergruimte" zonder bron.
   *
   * Die artikelen zijn niet verwijderd — ze staan klaar. Ze gaan pas live als
   * Jonas de bedragen bevestigt (DE WET art. 1.3: prijzen zijn pas publiek
   * bruikbaar met akkoord van de eigenaar). Eén veld omzetten volstaat.
   */
  gepubliceerd: boolean
  slug: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  publishedAt: string
  updatedAt: string
  author: 'Jonas de Graaf' | 'JDG Maatwerk Interieur'
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
    // WACHT OP JONAS: bedragen 12.000 / 18.000 / 28.000 / 40.000 euro.
    gepubliceerd: false,
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
    gepubliceerd: true,
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
    // WACHT OP JONAS: 800 euro / 4.000 euro, en "30 tot 40 procent meer
    // opbergruimte" heeft geen bron.
    gepubliceerd: false,
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
  /* ------------------------------------------------------------------ *
   * Toegevoegd 02-09-2026. Niet verzonnen onderwerpen: dit zijn de drie
   * clusters waar Search Console tussen 23 en 31 aug 2026 vraag laat zien
   * waarop de site geen enkel antwoord had staan.
   * ------------------------------------------------------------------ */
  {
    gepubliceerd: true,
    slug: 'meubelmaker-interieurbouwer-of-keukenzaak',
    title: 'Meubelmaker, interieurbouwer of keukenzaak: wie doet wat?',
    h1: 'Meubelmaker, interieurbouwer of keukenzaak: wie doet nu eigenlijk wat?',
    metaTitle: 'Meubelmaker of interieurbouwer? Het verschil uitgelegd',
    metaDescription: 'Meubelmaker, interieurbouwer, keukenzaak, interieurstylist: vier partijen die iets heel anders doen. Wie maakt wat, wie tekent alleen, en bij wie moet je zijn voor een kast of keuken op maat.',
    publishedAt: '2026-09-02',
    updatedAt: '2026-09-02',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'verschil meubelmaker interieurbouwer',
    relatedKeywords: [
      'interieurbouwer',
      'interieurbouw',
      'meubelmaker',
      'meubelmakerij',
      'wat doet een interieurbouwer',
      'meubelmaker of keukenzaak',
      'interieurstylist of meubelmaker',
    ],
    intro:
      'Wie zoekt naar iemand die een kast of keuken op maat maakt, komt vier woorden tegen die door elkaar gebruikt worden: meubelmaker, interieurbouwer, keukenzaak en interieurstylist. Ze betekenen niet hetzelfde, en het verschil bepaalt wie er uiteindelijk met een schroevendraaier in jouw huis staat. Hieronder staat per partij wat die wél en niet doet.',
    sections: [
      {
        heading: 'De meubelmaker maakt het zelf',
        body: 'Een meubelmaker heeft een werkplaats met machines en maakt het meubel daar. Tekening, zaagwerk, verlijmen, kanten, beslag monteren en afwerken gebeuren onder één dak, en meestal plaatst dezelfde partij het ook. Dat betekent dat de persoon die je aan de telefoon hebt, ook degene is die de fout maakt of voorkomt. Een meubelmaker werkt per project, niet uit een catalogus: er is geen standaardmaat waar jouw ruimte in moet passen.',
        bullets: [
          'Eigen werkplaats en eigen machines',
          'Werkt op maat, niet uit een programma met vaste maten',
          'Tekent, bouwt en plaatst meestal zelf',
          'Aanspreekpunt blijft dezelfde van eerste gesprek tot oplevering',
        ],
      },
      {
        heading: 'De interieurbouwer is hetzelfde vak, andere schaal',
        body: 'Interieurbouw is in de praktijk hetzelfde ambacht, maar de term wordt vaker gebruikt voor grotere en vaste inbouw: kastenwanden, wandsystemen, balies, winkelinterieurs en projectinrichting. Veel bedrijven noemen zich allebei, en terecht — het onderscheid zit in het soort opdracht, niet in een andere opleiding of andere machines. Zoek je een wandvullende kast of een keuken die vast aan het huis zit, dan zoek je in beide gevallen bij dezelfde soort partij.',
      },
      {
        heading: 'De keukenzaak verkoopt, en laat maken',
        body: 'Een keukenzaak of showroom is in de eerste plaats een verkooporganisatie. Er wordt geadviseerd, getekend in een configuratieprogramma en besteld bij een fabrikant; monteurs plaatsen het daarna. Dat werkt goed en snel zolang je ruimte binnen het maatsysteem van die fabrikant valt. Zit er een schoorsteen in de weg, ligt de vloer scheef of wil je een kastdiepte die niet in het programma zit, dan wordt het passtukwerk — en dat is precies waar het verschil met maatwerk zichtbaar wordt.',
        bullets: [
          'Vaste maatsystemen, kortingsstructuur en showroomprijzen',
          'Productie bij een fabrikant, montage door een derde partij',
          'Sterk in doorlooptijd en in keuze uit apparatuur',
          'Passtukken en vulpanelen waar de ruimte niet in het systeem past',
        ],
      },
      {
        heading: 'De interieurstylist en de binnenhuisarchitect tekenen, maar bouwen niet',
        body: 'Een interieurstylist, interieuradviseur of binnenhuisarchitect denkt na over indeling, licht, kleur, materiaal en sfeer. Dat is een eigen vak met een eigen waarde, maar er komt geen kast uit een werkplaats. Zij leveren een plan; de uitvoering gaat daarna alsnog naar een meubelmaker, een interieurbouwer of een aannemer. Wie zoekt op interieuradvies terwijl hij eigenlijk een kast wil laten maken, zoekt dus één schakel te vroeg in de keten.',
      },
      {
        heading: 'Waar JDG in dit rijtje staat',
        body: 'JDG Maatwerk Interieur is meubelmaker en interieurbouwer: er is een eigen werkplaats in Terheijden, er wordt zelf getekend, zelf gebouwd en zelf geplaatst. Er zit geen fabrikant en geen tussenpartij in. Wat JDG niet doet is losse interieuradvies-opdrachten of stylingtrajecten zonder dat er iets gemaakt wordt.',
        bullets: [
          'Wel: keukens, kledingkasten, inloopkasten, tv-meubels, boekenkasten en badkamermeubels op maat',
          'Wel: het ontwerp dat bij dat meubel hoort, inbegrepen in het traject',
          'Niet: los interieuradvies of styling zonder uitvoering',
          'Niet: doorverkopen van een fabriekskeuken uit een programma',
        ],
      },
      {
        heading: 'Hoe je kiest in drie vragen',
        body: 'Moet het passen in een ruimte die niet recht, niet standaard of niet leeg is? Dan is maatwerk geen luxe maar de enige manier waarop het klopt. Wil je vooral snel en binnen een vast systeem? Dan is een keukenzaak sneller. Weet je nog niet wát je wilt met de ruimte? Dan is een stylist of binnenhuisarchitect de logische eerste stap, en komt de maker daarna.',
      },
    ],
    hero: '/images/jdg-01.jpg',
    readingMinutes: 5,
  },
  {
    gepubliceerd: true,
    slug: 'kledingkast-montage-of-kast-op-maat',
    title: 'Kledingkast laten monteren of een kast op maat: wat is verstandig?',
    h1: 'Kledingkast laten monteren, of meteen een kast op maat?',
    metaTitle: 'Kledingkast montage of kast op maat: wat kies je wanneer?',
    metaDescription: 'Een gekochte kledingkast laten monteren, een bestaande kast laten inbouwen of meteen een kast op maat: drie routes met een ander resultaat. Wanneer welke route logisch is, en waar het bij montage vaak misgaat.',
    publishedAt: '2026-09-02',
    updatedAt: '2026-09-02',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'kledingkast montage',
    relatedKeywords: [
      'kledingkast laten monteren',
      'kast op maat of kant en klaar',
      'bestaande kast inbouwen',
      'kledingkast op maat',
      'kast tot aan het plafond',
    ],
    intro:
      'Veel mensen zoeken eerst iemand die een gekochte kledingkast in elkaar zet en aan de muur hangt. Begrijpelijk, want dat lijkt de goedkoopste route. Alleen lost montage niet op waar het meestal om begon: dat de kast niet past. Hieronder de drie routes en wat ze in de praktijk opleveren.',
    sections: [
      {
        heading: 'Route 1: een gekochte kast laten monteren',
        body: 'Je koopt een kastsysteem in vaste maten en laat het opbouwen en verankeren. Dat gaat prima wanneer de muur recht is, de plint eenvoudig weggewerkt kan worden en er boven de kast een kier mag blijven. De montage zelf is meestal binnen een dag klaar.',
        bullets: [
          'Snelste route en de laagste eenmalige uitgave',
          'Werkt goed bij rechte, moderne muren zonder obstakels',
          'Er blijft doorgaans ruimte boven de kast en langs de zijkant',
          'Bij een scheve muur ontstaat een zichtbare kier of een kitrand',
        ],
      },
      {
        heading: 'Route 2: een bestaande kast laten aanvullen of inbouwen',
        body: 'Staat er al een kastsysteem waar je tevreden over bent, dan hoeft dat er niet uit. De ruimte eromheen kan worden opgevuld met maatwerk: een opzetkast tot aan het plafond, een passtuk tegen de schuine wand, een zijpaneel dat de kier dichtzet en fronten die het geheel één ding maken. JDG doet dit: bestaande kasten, bijvoorbeeld een Pax, kunnen worden aangevuld met onderdelen op maat.',
        bullets: [
          'Behoudt wat er al staat en werkt daaromheen',
          'Wint vooral hoogte, want daar zit de meeste ongebruikte ruimte',
          'Vraagt om inmeten ter plaatse, niet om standaardmaten',
        ],
      },
      {
        heading: 'Route 3: meteen een kast op maat',
        body: 'De kast wordt getekend op de ruimte die er is: van muur tot muur, van vloer tot plafond, langs de schuine wand en om de radiator heen. De binnenindeling volgt wat je opbergt in plaats van wat het systeem toevallig aanbiedt. Dit is de duurste route in aanschaf en de enige waarbij er achteraf niets weggewerkt hoeft te worden.',
        bullets: [
          'Geen kieren, geen vulpanelen, geen kitrand als noodoplossing',
          'De volle hoogte wordt gebruikt, ook onder een schuin dak',
          'Indeling naar wat er in moet: hangen, vouwen, schoenen, koffers',
          'Langere doorlooptijd, want het wordt gemaakt en niet gepakt',
        ],
      },
      {
        heading: 'Waar het bij montage het vaakst misgaat',
        body: 'Drie dingen komen steeds terug. Muren zijn zelden haaks, zeker in oudere woningen — een kast van 240 centimeter past dan niet in een gat van 240 centimeter. Plinten en leidingkokers zorgen ervoor dat een kast niet tegen de muur aan kan. En de ruimte boven de kast blijft ongebruikt, terwijl daar juist de meeste opbergruimte zit die je nooit dagelijks nodig hebt.',
      },
      {
        heading: 'Hoe je kiest',
        body: 'Meet de breedte van de wand op drie hoogtes: vlak boven de vloer, op ooghoogte en vlak onder het plafond. Verschillen die maten meer dan een centimeter, dan is de wand niet recht en ga je bij een kastsysteem sowieso passtukken nodig hebben. Is er meer dan dertig centimeter ruimte boven een standaardkast, dan is dat de goedkoopste opbergruimte die je nooit koopt. Met die twee maten in de hand is de keuze meestal binnen een minuut gemaakt.',
      },
    ],
    hero: '/images/jdg-13.jpg',
    readingMinutes: 5,
  },
  {
    gepubliceerd: true,
    slug: 'hoe-een-offerte-voor-maatwerk-is-opgebouwd',
    title: 'Hoe een offerte voor maatwerk is opgebouwd',
    h1: 'Hoe een offerte voor maatwerk is opgebouwd, en waarom prijzen verschillen.',
    metaTitle: 'Offerte maatwerk interieur: hoe die is opgebouwd',
    metaDescription: 'Waarom twee offertes voor dezelfde kast ver uit elkaar kunnen liggen. De posten waaruit een maatwerkofferte bestaat, wat er vaak buiten valt, en welke vragen je stelt voor je tekent.',
    publishedAt: '2026-09-02',
    updatedAt: '2026-09-02',
    author: 'JDG Maatwerk Interieur',
    category: 'kosten',
    primaryKeyword: 'offerte maatwerk interieur',
    relatedKeywords: [
      'wat kost maatwerk',
      'offerte keuken op maat',
      'offerte kast op maat',
      'prijs maatwerk interieur',
      'offertes vergelijken interieurbouw',
    ],
    intro:
      'Twee offertes voor dezelfde kast kunnen ver uit elkaar liggen zonder dat een van beide te duur is. Meestal zit het verschil niet in de marge maar in wat er wel en niet in staat. Hieronder de posten waaruit een maatwerkofferte is opgebouwd, en de vragen waarmee je twee offertes eerlijk naast elkaar legt.',
    sections: [
      {
        heading: 'Waar de prijs uit bestaat',
        body: 'Een maatwerkofferte valt uiteen in een paar herkenbare blokken. Materiaal is er daar één van, en meestal niet de grootste.',
        bullets: [
          'Plaatmateriaal voor het corpus: de kastdozen zelf',
          'Fronten en zichtdelen: het materiaal dat je ziet en aanraakt',
          'Werkblad, waar dat van toepassing is',
          'Beslag: scharnieren, ladegeleiders, grepen, dempers',
          'Tekenwerk en werkvoorbereiding',
          'Uren in de werkplaats: zagen, kanten, boren, verlijmen, afwerken',
          'Transport en montage-uren op locatie',
          'Eventueel sloop, afvoer en het aanpassen van leidingen of elektra',
        ],
      },
      {
        heading: 'Waarom dezelfde kast twee prijzen heeft',
        body: 'De grootste verschillen ontstaan bij de posten die je niet ziet. Een corpus in dun, licht plaatmateriaal met genietede achterwand kost minder dan een corpus in dik materiaal met een ingefreesde rug. Standaardbeslag kost minder dan beslag met een lange levensduurgarantie. Een kast die op standaardmaat wordt gemaakt en met vulpanelen wordt ingepast, kost minder tekenwerk dan een kast die op de scheve muur is getekend. Alle drie zijn legitieme keuzes; ze horen alleen wel expliciet in de offerte te staan.',
      },
      {
        heading: 'Wat er vaak buiten valt',
        body: 'Let bij het vergelijken vooral op de randen van de opdracht. Dit zijn de posten die achteraf voor verrassingen zorgen.',
        bullets: [
          'Demontage en afvoer van wat er nu staat',
          'Aanpassen of verplaatsen van water, gas, elektra en afzuiging',
          'Aansluiten van apparatuur',
          'Afkitten en het afwerken van plinten en aansluitnaden',
          'Schilder- of stucwerk dat nodig is nadat de oude kast eruit is',
          'Meerwerk bij een vloer die niet waterpas ligt',
        ],
      },
      {
        heading: 'Zes vragen die twee offertes vergelijkbaar maken',
        body: 'Stel bij beide partijen precies dezelfde vragen. Verschillen in het antwoord verklaren het verschil in de prijs vrijwel altijd.',
        bullets: [
          'Welk materiaal en welke dikte gebruikt u voor het corpus?',
          'Welk merk beslag zit erin, en met welke garantie?',
          'Is het ontwerp en het tekenwerk in de prijs inbegrepen?',
          'Wie meet in, en wanneer wordt er definitief gemeten?',
          'Zitten montage, afkitten en afwerken in de prijs?',
          'Wat gebeurt er als de muur scheef blijkt: meerwerk of inbegrepen?',
        ],
      },
      {
        heading: 'Waarom er geen prijslijst op deze site staat',
        body: 'Een prijs per meter zegt bij maatwerk weinig, omdat dezelfde meter met een ander front, ander beslag en een andere situatie ter plaatse een heel ander bedrag oplevert. JDG geeft daarom geen richtprijzen op de site maar een offerte op basis van wat er werkelijk staat. Het eerste gesprek en de offerte zijn gratis en vrijblijvend; een appje met foto\'s en globale maten is genoeg om te beginnen.',
      },
    ],
    hero: '/images/jdg-23.jpg',
    readingMinutes: 6,
  },
]

/** Alleen wat daadwerkelijk gepubliceerd mag worden. Gebruik dit overal. */
export const livePosts = blogPosts.filter((p) => p.gepubliceerd)

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug && p.gepubliceerd)
