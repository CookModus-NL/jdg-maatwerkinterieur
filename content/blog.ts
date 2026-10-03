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
  /**
   * Intro, sectietekst en bullets mogen sinds 10-09-2026 anker-markup dragen voor een
   * verwijzing IN de lopende tekst: `<a href="/algemene-voorwaarden">artikel 3</a>`.
   * Alleen interne paden; de parser staat in lib/tekst.tsx en injecteert geen HTML.
   * Teksten zonder die markup veranderen niet. FAQ-antwoorden blijven bewust plat:
   * die gaan als tekst in de FAQPage-structured data.
   */
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  hero: string
  /** Alt-tekst van de hero. Beschrijft wat er werkelijk op de foto staat (beeldwaarheid). */
  heroAlt?: string
  readingMinutes: number
  /**
   * Losse vraag-en-antwoordblokken onder het artikel. Toegevoegd 08-09-2026.
   * Reden: een antwoordeenheid wordt niet als pagina overgenomen maar als passage.
   * Staat dit gevuld, dan rendert de artikelpagina de blokken en voegt hij FAQPage-
   * structured data toe; staat het leeg, dan verandert er niets aan bestaande artikelen.
   */
  faq?: { q: string; a: string }[]
  /** Contextuele verwijzingen binnen deze site, in de lopende leesvolgorde van het artikel. */
  verwijzingen?: { label: string; href: string }[]
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
    verwijzingen: [
      { label: 'Kan een kast onder een schuin dak of tegen een schuine wand?', href: '/blog/kast-onder-schuin-dak-of-schuine-wand' },
      { label: 'Zolderinbouw met lades tot in de punt van het dak', href: '/projecten/zolderinbouw-hangkast-lades' },
      { label: 'Inloopkasten op maat, ook achter de knieschotten op zolder', href: '/diensten/inloopkasten-op-maat' },
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
        body: 'Een interieurstylist, interieuradviseur of binnenhuisarchitect denkt na over indeling, licht, kleur, materiaal en sfeer. Dat is een eigen vak met een eigen waarde, maar er komt geen kast uit een werkplaats. Zij leveren een plan; de uitvoering gaat daarna alsnog naar een meubelmaker, een interieurbouwer of een aannemer. Wie zoekt op interieuradvies terwijl hij eigenlijk een kast wil laten maken, zoekt dus één schakel te vroeg in de keten. Welke van de twee jij nodig hebt, wat die beroepsnamen wettelijk wel en niet zeggen en wie er inmeet als je ze allebei inschakelt, staat uitgewerkt in <a href="/blog/binnenhuisarchitect-interieurstylist-of-interieurbouwer">heb ik een interieurstylist of binnenhuisarchitect nodig, of een interieurbouwer</a>.',
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
      {
        heading: 'Welk van de twee problemen in jouw huis speelt',
        body: 'Of maatwerk bij jou over scheve vlakken of over krappe centimeters gaat, hangt af van het bouwjaar van je woning, en dat verschilt sterk per stad en per wijk. Voor Tilburg staat die verdeling uitgerekend op de woningvoorraad van de hele gemeente: welk probleem een interieurbouwer in een Tilburgse woning moet oplossen, en waarom het bouwjaar dat bepaalt, staat uitgewerkt in <a href="/werkgebied/tilburg">het antwoord over een interieurbouwer in Tilburg</a>.',
      },
    ],
    verwijzingen: [
      { label: 'Heb ik een interieurstylist of binnenhuisarchitect nodig, of een interieurbouwer?', href: '/blog/binnenhuisarchitect-interieurstylist-of-interieurbouwer' },
      { label: 'Een interieurbouwer in Tilburg: wat het bouwjaar van de woning bepaalt', href: '/werkgebied/tilburg' },
      { label: 'Keukens op maat: wat JDG maakt en hoe het loopt', href: '/diensten/keukens-op-maat' },
      { label: 'De werkwijze: van inmeten en tekening tot montage en oplevering', href: '/werkwijze' },
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
    verwijzingen: [
      { label: 'Moet ik aanbetalen, en wanneer betaal ik de rest?', href: '/blog/aanbetaling-en-betaaltermijnen-maatwerk' },
      { label: 'De algemene voorwaarden, met de artikelen over meerwerk en oplevering', href: '/algemene-voorwaarden' },
      { label: 'De werkwijze: van kennismaking tot plaatsing', href: '/werkwijze' },
    ],
    hero: '/images/jdg-23.jpg',
    readingMinutes: 6,
  },
  {
    // Antwoordeenheid op de vraag "Kan ik alleen laten maken en zelf monteren,
    // of alleen laten monteren?" (motor_vraagdekking jdg, open sinds 01-09-2026).
    // Alles wat hier over rechten en plichten staat komt uit de eigen algemene
    // voorwaarden versie 5 augustus 2026, die integraal op deze site staan.
    // Wat NIET geclaimd wordt: of JDG een opdracht zonder montage aanneemt.
    // Daarover is geen beleid vastgelegd en er staat dus geen ja of nee op de pagina.
    gepubliceerd: true,
    slug: 'zelf-monteren-of-alleen-laten-maken',
    title: 'Kan ik het maatwerk alleen laten maken en zelf monteren?',
    h1: 'Alleen laten maken en zelf monteren: kan dat bij maatwerk?',
    metaTitle: 'Maatwerk zelf monteren of alleen laten maken',
    metaDescription:
      'Bij maatwerk zitten maken en monteren aan elkaar vast. Wat er verandert als je zelf monteert: wie de maten draagt, wat de garantie wel en niet dekt, en van wie het meubel is tot de laatste factuur.',
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'maatwerk zelf monteren',
    relatedKeywords: [
      'kast op maat zelf monteren',
      'keuken op maat zelf monteren',
      'alleen laten maken zelf monteren',
      'kast op maat zelf in elkaar zetten',
      'keuken laten monteren kosten',
      'zelf keuken plaatsen',
    ],
    intro:
      'Bij JDG zijn maken en monteren een opdracht. De offerte, de betaaltermijnen en de garantie zijn er alle drie op gebouwd: de garantie geldt op de deugdelijke constructie en montage van het maatwerk dat JDG zelf heeft vervaardigd. Alleen laten maken en zelf monteren is daarom geen standaardroute, en montage van een kast die je ergens anders kocht staat niet als losse dienst in het aanbod. Hieronder staat wat er verandert als je toch wilt splitsen, en welk risico daarbij naar jou verschuift.',
    sections: [
      {
        heading: 'Het korte antwoord, per variant',
        body: 'Deze vraag wordt op drie manieren gesteld en heeft drie verschillende antwoorden. Ze staan bij JDG niet in een verkoopfolder maar in de algemene voorwaarden, versie 5 augustus 2026, die je hieronder op deze site kunt nalezen.',
        bullets: [
          'Alleen laten maken en zelf monteren: geen standaardroute. Leg het voor de offerte voor, want vanaf dat moment liggen de maatvoering en het montageresultaat bij jou.',
          'Alleen laten monteren, van een kast die je ergens anders hebt gekocht: montage staat niet als losse dienst in het aanbod van JDG. Elk project begint bij een schets en een inmeting.',
          'Wat wel kan: een bestaande kast, bijvoorbeeld een IKEA Pax, laten aanvullen met onderdelen op maat tot het geheel een meubel is.',
          'Het ontwerp van JDG door een andere partij laten uitvoeren: niet zonder schriftelijke toestemming. Tekeningen, renders en technische oplossingen blijven eigendom van JDG (artikel 3).',
        ],
      },
      {
        heading: 'Waarom maken en monteren bij maatwerk aan elkaar vastzitten',
        body: 'Een kant-en-klare kast is af zodra hij de fabriek verlaat. Een maatwerkkast is dat niet. Die wordt getekend op de wand die er staat, inclusief plint, radiator en scheefstand, en een deel van de maten wordt pas op locatie definitief. Bij een keuken wordt het werkblad daarom pas ingemeten nadat de onderkasten geplaatst en gesteld zijn, zodat het de werkelijke wandlijn volgt in plaats van de tekening. Wie het maken en het monteren uit elkaar haalt, knipt precies op de plek waar de meting nog niet klaar is.',
      },
      {
        heading: 'Wat er verandert als jij zelf monteert',
        body: 'Vier dingen, en ze staan alle vier zwart op wit in de algemene voorwaarden. Lees ze voordat je vraagt om een prijs zonder montage; ze bepalen samen wie er straks verantwoordelijk is als iets niet past.',
        bullets: [
          'De maten worden jouw verantwoordelijkheid. Lever jij zelf maten, tekeningen of technische gegevens aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan, en komen de gevolgen van onjuiste of onvolledige informatie voor jouw rekening (artikel 3).',
          'De garantie volgt de montage. JDG verleent garantie op de deugdelijke constructie en montage van het door JDG vervaardigde maatwerk, en die garantie geldt niet voor gebreken die zijn veroorzaakt door aanpassingen of werkzaamheden door derden (artikel 12). Wettelijke rechten van een consument worden daardoor niet beperkt.',
          'Losse onderdelen blijven eigendom van JDG. Materialen en meubels die nog niet duurzaam gemonteerd zijn, blijven van JDG totdat de facturen volledig zijn betaald (artikel 15).',
          'De betaalregeling gaat uit van montage. De tweede termijn valt bij levering van de voornaamste maatwerkonderdelen op locatie en aanvang van de montage; zonder montage bestaat dat moment niet en moet er dus iets anders worden afgesproken (artikel 4).',
        ],
      },
      {
        heading: 'Wat montage bij maatwerk werkelijk inhoudt',
        body: 'De montage-uren op een maatwerkofferte zijn geen opbouwuren. Ze gaan grotendeels op aan het verschil tussen de tekening en het huis. Dat verschil is precies wat een strak ingepast meubel onderscheidt van een meubel met een kier en een kitrand.',
        bullets: [
          'Stellen en waterpas zetten voordat er iets definitief vast zit',
          'Passtukken en zijpanelen aftekenen op de werkelijke wandlijn en bijzagen',
          'Verankeren in een constructie die het gewicht daadwerkelijk draagt',
          'Aansluitpunten voor elektra, water, afvoer en ventilatie op hun plek laten uitkomen',
          'Afkitten en het afwerken van plinten en aansluitnaden',
        ],
      },
      {
        heading: 'Wanneer zelf monteren logisch is, en wanneer het risico erin zit',
        body: 'Eerlijk is eerlijk: niet elke montage is even risicovol. Bij een losstaand meubel tegen een rechte wand is het werk kort en overzichtelijk. Het risico zit in precies die situaties waar maatwerk voor bedoeld is.',
        bullets: [
          'Overzichtelijk: een losstaand meubel, een rechte wand, geen aansluitingen en geen doorlopend blad.',
          'Risicovol: een keuken met gas, water, elektra en afzuiging, waar achter elke fout een aansluiting hangt.',
          'Risicovol: een kast tot aan het plafond of onder een schuin dak, waarbij elk paneel op de werkelijke hoek is gezaagd.',
          'Risicovol: een doorlopend werkblad over meerdere kasten, dat pas na het stellen definitief wordt ingemeten.',
        ],
      },
      {
        heading: 'Waarom de besparing van een keukenketen hier niet opgaat',
        body: 'De grote keukenketens rekenen zelfmontage voor als besparing. KeukenConcurrent noemt op zijn zelfmontagepagina "Bespaar tot 1000 euro bij zelfmontage" en legt uit dat de kasten al in elkaar zitten en het werkblad al op maat is (gelezen 8 september 2026). Dat klopt voor dat product: een systeem in vaste maten dat de fabriek af verlaat, waarbij het inmeten al achter de rug is voordat jij begint. Bij maatwerk is de montage geen losse handeling aan het eind maar de laatste stap van het inmeten. Wat je erop bespaart, verdwijnt dus niet, het verschuift naar jou, samen met de vier gevolgen die hierboven staan.',
      },
      {
        heading: 'Wat mensen hierover intypen',
        body: 'De formuleringen waarmee mensen deze vraag stellen verraden waar het echt om gaat: niet om de handeling, maar om de rekening. Gemeten op 8 september 2026 in de Nederlandse zoeksuggesties: "zelf keuken plaatsen", "zelf keuken plaatsen moeilijk", "keuken kopen zelf plaatsen", "keuken monteren kosten", "kast op maat zelf in elkaar zetten", "kast op maat zelf samenstellen" en "zelf kast op maat maken schuine wand". Twee dingen vallen op. Een groot deel van de aanvullingen gaat over kant-en-klare systemen van IKEA, Kvik of Bruynzeel, waar zelfmontage een normale optie is en de maten al vaststaan. En op "zelf monteren garantie" komt in diezelfde meting geen enkele aanvulling. Dat betekent niet dat niemand het wil weten; het betekent dat het niet de woorden zijn waarin mensen het intypen. Daarom staat het antwoord erop hierboven, zonder dat je ernaar hoeft te zoeken.',
      },
      {
        heading: 'Zes vragen voordat je een opdracht splitst',
        body: 'Bij welke maatwerkpartij je ook uitkomt: met deze zes vragen weet je binnen een gesprek of splitsen bij hen verstandig is. Een partij die ze alle zes concreet beantwoordt, heeft erover nagedacht.',
        bullets: [
          'Wie meet in, en op welk moment wordt er definitief gemeten?',
          'Wie draagt het risico als een maat niet klopt, de maker of ik?',
          'Geldt de garantie ook op onderdelen die ik zelf monteer?',
          'Welke betaaltermijnen gelden er als er geen montagemoment is?',
          'Van wie is het meubel tussen levering en de laatste factuur?',
          'Mag ik jullie tekening door een andere partij laten uitvoeren?',
        ],
      },
      {
        heading: 'Waar dit antwoord vandaan komt',
        body: 'Alles wat hierboven over rechten en verplichtingen staat, komt uit de algemene voorwaarden van JDG, versie 5 augustus 2026, die integraal op deze site staan; de artikelnummers staan er telkens bij. De montagestappen komen van de werkwijze- en dienstenpagina’s. Een ding staat er bewust niet bij: of JDG in jouw specifieke situatie een opdracht zonder montage aanneemt. Daarover is geen beleid gepubliceerd, en er komt hier geen ja of nee te staan die Jonas niet zelf heeft gegeven. Vraag het in het kennismakingsgesprek: dat is gratis en vrijblijvend.',
      },
    ],
    faq: [
      {
        q: 'Kan JDG een kast monteren die ik ergens anders heb gekocht?',
        a: 'Montage staat niet als losse dienst in het aanbod van JDG: elk project begint bij een schets en een inmeting. Wat wel kan, is een bestaande kast, bijvoorbeeld een IKEA Pax, laten aanvullen met onderdelen op maat, zoals een opzetkast tot aan het plafond, een passtuk tegen een schuine wand of fronten die het geheel een meubel maken.',
      },
      {
        q: 'Vervalt de garantie als ik zelf monteer?',
        a: 'De garantie van JDG geldt op de deugdelijke constructie en montage van het door JDG vervaardigde maatwerk, en niet voor schade of gebreken die zijn veroorzaakt door aanpassingen of werkzaamheden door derden (algemene voorwaarden, artikel 12). Montage die jij zelf doet, valt daar dus buiten. De fabrieksgarantie op ingekochte onderdelen zoals scharnieren, lades en apparatuur blijft gewoon gelden, en de wettelijke rechten van een consument worden er nooit door beperkt.',
      },
      {
        q: 'Wie is aansprakelijk als het meubel niet blijkt te passen?',
        a: 'Dat hangt af van wie de maat heeft genomen. Meet JDG in, dan is de maatvoering het werk van JDG en ontslaat jouw goedkeuring van de tekening JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten. Lever jij de maten of tekeningen aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan en komen de gevolgen van onjuiste of onvolledige informatie voor jouw rekening (artikel 3).',
      },
      {
        q: 'Mag ik het ontwerp van JDG door een goedkopere partij laten maken?',
        a: 'Niet zonder schriftelijke toestemming. Ontwerpen, tekeningen, renders en technische oplossingen blijven intellectueel eigendom van JDG en mogen zonder die toestemming niet door derden worden uitgevoerd of gekopieerd (artikel 3).',
      },
      {
        q: 'Levert JDG een bouwpakket dat ik zelf in elkaar zet?',
        a: 'Een bouwpakket is geen product dat op de site wordt aangeboden. In de werkplaats in Terheijden worden de onderdelen genummerd en gecontroleerd voordat ze vertrekken, maar ze vertrekken naar een montage door JDG zelf. Wil je toch alleen levering, leg dat dan voor de offerte voor.',
      },
      {
        q: 'Wat kost het om de montage over te slaan?',
        a: 'Daar staat op deze site geen bedrag bij. JDG publiceert geen prijslijst, omdat dezelfde meter met een ander front, ander beslag en een andere situatie ter plaatse een heel ander bedrag oplevert. Wat er in jouw project wel en niet in de prijs zit, staat in de offerte: alleen de werkzaamheden, materialen en leveringen die daarin staan zijn inbegrepen (artikel 2). Het eerste gesprek en de offerte zijn gratis en vrijblijvend.',
      },
    ],
    verwijzingen: [
      { label: 'De algemene voorwaarden, met de artikelen 2, 3, 4, 12 en 15', href: '/algemene-voorwaarden' },
      { label: 'De werkwijze: van inmeten tot plaatsing', href: '/werkwijze' },
      { label: 'Kledingkast laten monteren of meteen een kast op maat', href: '/blog/kledingkast-montage-of-kast-op-maat' },
      { label: 'Hoe een offerte voor maatwerk is opgebouwd', href: '/blog/hoe-een-offerte-voor-maatwerk-is-opgebouwd' },
      { label: 'Moet ik aanbetalen, en wanneer betaal ik de rest?', href: '/blog/aanbetaling-en-betaaltermijnen-maatwerk' },
      { label: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?', href: '/blog/keuken-of-kast-past-niet-verkeerd-ingemeten' },
      { label: 'Keukens op maat', href: '/diensten/keukens-op-maat' },
    ],
    hero: '/images/jdg-29.jpg',
    heroAlt: 'Keukeneiland van JDG halverwege de montage: het werkblad ligt, de vloer is nog afgedekt en de plinten en afwerking volgen nog.',
    readingMinutes: 6,
  },
  {
    // Antwoordeenheid op de vraag "Moet ik aanbetalen, en wanneer betaal ik de rest?"
    // (motor_vraagdekking jdg, open sinds 01-09-2026; contract c4ba5d85).
    // Alles wat hier over termijnen, rechten en plichten staat komt uit de eigen algemene
    // voorwaarden versie 5 augustus 2026, die integraal op deze site staan; het artikelnummer
    // staat er telkens bij. De wettelijke onderlaag komt uit de geldende tekst van Boek 7 BW
    // op wetten.overheid.nl (BWBR0005290, geldend van 01-07-2026, uitgelezen 10-09-2026).
    // Wat NIET op de pagina staat: bedragen, richtprijzen en welk percentage in een concrete
    // offerte terechtkomt. Daarover beslist Jonas per project, en dat staat in de offerte.
    gepubliceerd: true,
    slug: 'aanbetaling-en-betaaltermijnen-maatwerk',
    title: 'Moet ik aanbetalen, en wanneer betaal ik de rest?',
    h1: 'Moet ik aanbetalen, en wanneer betaal ik de rest?',
    metaTitle: 'Aanbetaling maatwerk: wanneer betaal je wat',
    metaDescription:
      'De betaaltermijnen bij JDG, met het artikel uit de eigen voorwaarden erbij: wat je bij akkoord betaalt, wat bij levering en montage, en wat pas na oplevering. Plus de wettelijke bovengrens en waar die vandaan komt.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'aanbetaling maatwerk keuken',
    relatedKeywords: [
      'aanbetaling keuken hoeveel',
      'aanbetaling keuken verplicht',
      'keuken betalen voor levering',
      'betaaltermijnen keuken op maat',
      'hoeveel aanbetaling mag een aannemer vragen',
      'aanbetaling kast op maat',
    ],
    intro:
      'Ja, bij JDG betaal je aan. Voor particuliere opdrachtgevers geldt, tenzij in de offerte iets anders is afgesproken, een verdeling in drie: 50 procent na akkoord op de offerte, 40 procent bij levering van de voornaamste maatwerkonderdelen op locatie en aanvang van de montage, en 10 procent na oplevering. Dat staat in artikel 4 van de algemene voorwaarden van JDG, versie 5 augustus 2026, die je hieronder op deze site kunt nalezen. Hieronder staat waarom die verdeling zo loopt, waar de wettelijke bovengrens ligt en welk artikel die grens stelt, en wat er precies gebeurt op het moment dat de laatste factuur komt.',
    sections: [
      {
        heading: 'Het korte antwoord, in vier regels',
        body: 'Deze vier regels zijn de volledige betaalafspraak zoals die in de voorwaarden staat. Wat in jouw offerte staat gaat er altijd voor: de termijnregeling geldt uitdrukkelijk tenzij in de offerte iets anders is overeengekomen.',
        bullets: [
          '50 procent na akkoord op de offerte (artikel 4, lid 1).',
          '40 procent bij levering van de voornaamste maatwerkonderdelen op locatie en aanvang van de montage (artikel 4, lid 1).',
          '10 procent na oplevering (artikel 4, lid 1).',
          'Elke factuur wordt binnen zeven dagen na factuurdatum betaald, tenzij schriftelijk een andere termijn is afgesproken (artikel 4, lid 3).',
        ],
      },
      {
        heading: 'Waarom er bij maatwerk vooraf betaald wordt',
        body: 'Bij een kant-en-klare kast koopt de winkel in op voorraad en verkoopt hij wat er al ligt. Bij maatwerk bestaat het product nog niet en is het na productie ook aan niemand anders te verkopen: het is getekend op jouw wand, in jouw kleur, op jouw maat. De eerste termijn dekt de inkoop van plaatmateriaal, fronten, beslag en werkblad die speciaal voor jouw project worden besteld. Daarom staat in de voorwaarden ook dat JDG materialen niet hoeft te bestellen en de productie niet hoeft te starten voordat de eerste termijn is ontvangen (artikel 4, lid 4), en dat de productie pas begint nadat de aanbetaling is ontvangen, de definitieve maatvoering is vastgesteld en de tekeningen en materiaalkeuzes zijn goedgekeurd (artikel 2, lid 4). De planning is mede afhankelijk van tijdige betaling (artikel 5, lid 3). Betalen is bij maatwerk dus geen formaliteit achteraf maar een startsein.',
      },
      {
        heading: 'De wettelijke bovengrens, met het artikelnummer erbij',
        body: 'Vrijwel elke pagina over dit onderwerp zegt dat een verkoper wettelijk niet meer dan de helft vooruit mag vragen, en laat vervolgens weg waar dat staat. Het staat in artikel 26 lid 2 van Boek 7 van het Burgerlijk Wetboek, en de zin luidt letterlijk: "Bij een consumentenkoop kan de koper tot vooruitbetaling van ten hoogste de helft van de koopprijs worden verplicht." (Geldende tekst van 1 juli 2026, uitgelezen op wetten.overheid.nl op 10 september 2026.) Dat is precies de reden dat de eerste termijn van JDG op 50 procent staat en niet hoger.',
        bullets: [
          'Waarom dit ook voor maatwerk geldt: een overeenkomst om een roerende zaak te maken die er nog niet is, gesloten tussen een vakbedrijf en een particulier, wordt volgens artikel 5 lid 4 van Boek 7 mede als consumentenkoop aangemerkt. De regels voor koop en de regels voor aanneming van werk gelden daarbij naast elkaar, en bij strijd gaan de koopregels voor.',
          'Wat aanneming van werk is: de overeenkomst waarbij de aannemer zich verbindt om buiten dienstbetrekking een werk van stoffelijke aard tot stand te brengen en op te leveren, tegen een door de opdrachtgever te betalen prijs in geld (artikel 750 lid 1 van Boek 7). Een keuken of kastenwand op maat valt daaronder.',
          'De nuance die bijna nergens staat: van artikel 26 mag in theorie worden afgeweken, maar volgens artikel 6 lid 2 van Boek 7 wordt een beding in de algemene voorwaarden dat ten nadele van de koper van artikel 26 afwijkt, als onredelijk bezwarend aangemerkt. Een bedrijf dat in zijn algemene voorwaarden meer dan de helft vooruit eist, heeft dus een beding staan dat de rechter kan vernietigen.',
          'Wat dat voor jou betekent bij welke maatwerkpartij dan ook: staat er in de algemene voorwaarden een aanbetaling boven de helft, dan is dat een rode vlag met een concrete juridische naam, en geen kwestie van smaak.',
        ],
      },
      {
        heading: 'Waarom 50 procent en niet de 15 procent van een keukenwinkel',
        body: 'Wie deze vraag googelt komt vaak uit bij een lager percentage, en dat klopt ook, alleen geldt het voor een ander soort bedrijf. De Centrale Branchevereniging Wonen hanteert in haar erkende voorwaarden voor woonwinkels een maximum van 25 procent aanbetaling in het algemeen en 15 procent voor keukens, badkamers en sanitair. KeukenConcurrent noemt datzelfde maximum van 15 procent in artikel 5 van zijn CBW-erkende voorwaarden (gelezen 10 september 2026). Die regeling geldt voor woonwinkels die bij die vereniging zijn aangesloten en die voorwaarden voeren. JDG voert eigen algemene voorwaarden: die zijn van toepassing op alle offertes, opdrachten en werkzaamheden, en afwijkingen gelden alleen als ze schriftelijk of digitaal zijn overeengekomen (artikel 1). Het verschil in percentage is dus geen verschil in netheid maar een verschil in bedrijfsmodel: een woonwinkel verkoopt een systeem in vaste maten dat de fabriek af verlaat, een maatwerkbedrijf koopt per project in en bouwt iets dat verder aan niemand te leveren is.',
      },
      {
        heading: 'Wanneer de tweede termijn precies valt',
        body: 'Dit is het punt waar de meeste onduidelijkheid ontstaat, want de tweede termijn hangt niet aan een datum maar aan twee gebeurtenissen die samenvallen: levering van de voornaamste maatwerkonderdelen op locatie, en aanvang van de montage. Dat betekent dat je die 40 procent niet betaalt terwijl het maatwerk nog in de werkplaats in Terheijden staat, maar op het moment dat het bij jou binnen is en er begonnen wordt. Schuift de planning op, dan schuift dat moment mee. Opgegeven productie-, leverings- en montagedata zijn in de voorwaarden zorgvuldige planningen en geen fatale termijnen, tenzij schriftelijk uitdrukkelijk anders is afgesproken (artikel 5, lid 2). Praktisch gevolg: je hebt op geen enkel moment meer dan de helft betaald zonder dat er iets in huis staat.',
      },
      {
        heading: 'De laatste 10 procent, en wat je mag inhouden',
        body: 'De slottermijn valt na oplevering. Na afronding bekijken JDG en opdrachtgever het werk zo mogelijk samen, en openstaande punten worden vastgelegd en binnen een redelijke termijn afgehandeld (artikel 10, leden 1 en 2). Voor wat er dan met de slotfactuur gebeurt, staan er twee regels naast elkaar, en juist die combinatie is wat een oplevering rustig maakt.',
        bullets: [
          'Een klein opleverpunt geeft je niet het recht om de volledige slotfactuur in te houden (artikel 10, lid 4).',
          'Je mag wel een redelijk bedrag inhouden dat in verhouding staat tot dat opleverpunt en de verwachte herstelkosten (artikel 10, lid 5).',
          'Een klein of ondergeschikt punt verhindert de oplevering niet, mits het werk veilig te gebruiken is, de hoofdfunctionaliteit niet wordt aangetast en het punt eenvoudig en binnen redelijke tijd te herstellen is (artikel 10, lid 3).',
          'Ingebruikname kan gelden als aanvaarding van duidelijk zichtbare punten, maar doet geen afbreuk aan je rechten bij verborgen gebreken (artikel 10, lid 7).',
        ],
      },
      {
        heading: 'Van wie is de kast tussen levering en de laatste factuur',
        body: 'Een vraag die zelden gesteld wordt en die er wel toe doet zodra er iets misgaat. Losse en nog niet duurzaam gemonteerde materialen en meubels blijven eigendom van JDG totdat de facturen die daarop betrekking hebben volledig zijn betaald (artikel 15, lid 1). Zodra onderdelen door montage juridisch onderdeel van de woning zijn geworden, vervalt dat eigendomsvoorbehoud, maar behoudt JDG zijn betalingsvordering en de wettelijke incassorechten (artikel 15, lid 2). Het eigendomsvoorbehoud is er dus voor de maker, niet voor jou. Wat aan jouw kant staat is de volgorde van de termijnen zelf: er is geen moment waarop je vooruitbetaalt voor iets dat nog niet is geleverd of gemonteerd, behalve die eerste helft die de wet uitdrukkelijk toestaat.',
      },
      {
        heading: 'Wat er gebeurt als je niet op tijd betaalt',
        body: 'Ook dit staat in dezelfde vier artikelen, en het is nuttig om te weten voordat het speelt. Bij niet-tijdige betaling mag JDG de werkzaamheden na waarschuwing opschorten, en de planning kan daardoor worden verschoven (artikel 4, lid 5). Voor een consument geldt daarna de wettelijke volgorde: je bent pas incassokosten verschuldigd nadat je een correcte schriftelijke betalingsherinnering hebt gehad en vervolgens minimaal veertien dagen niet hebt betaald (artikel 4, lid 6); daarna zijn de wettelijke rente en de wettelijk toegestane incassokosten verschuldigd (artikel 4, lid 7). Een zakelijke opdrachtgever is na het verstrijken van de betalingstermijn de wettelijke handelsrente en redelijke incassokosten verschuldigd (artikel 4, lid 8). Het verschil tussen consument en bedrijf zit hem dus niet in de termijnen zelf maar in wat er na de vervaldatum gebeurt.',
      },
      {
        heading: 'Wat mensen hierover intypen',
        body: 'De woorden waarin deze vraag wordt gesteld verraden waar de onrust zit. Gemeten op 10 september 2026 in de Nederlandse zoeksuggesties (hl=nl, gl=nl) verschijnen onder meer: "aanbetaling keuken verplicht", "aanbetaling keuken hoeveel", "aanbetaling keuken faillissement", "keuken betalen voor levering", "keuken volledig betalen voor levering", "keuken vooraf betalen", "voorschot keuken betalen", "hoeveel aanbetaling mag een aannemer vragen" en "hoeveel aanbetaling is normaal". Twee dingen vallen op. De helft van die vragen gaat niet over de hoogte maar over het moment: mensen willen weten of ze alles moeten overmaken voordat er iets in huis staat. En op "aanbetaling kast op maat" komt in diezelfde meting geen enkele aanvulling terug, terwijl precies daar hetzelfde bedrag en hetzelfde risico spelen als bij een keuken. Dat is de reden dat deze pagina het antwoord voor beide geeft en niet alleen voor de keuken.',
      },
      {
        heading: 'Wat hier bewust niet staat',
        body: 'Er staan op deze pagina geen bedragen en geen richtprijzen. Wat een project kost hangt af van het materiaal, het beslag en de situatie ter plaatse, en dat komt in de offerte te staan, niet in een tabel op een website; hoe zo\'n offerte is opgebouwd staat apart uitgeschreven. Wat er ook niet staat, is welk percentage in jouw offerte terechtkomt: de termijnregeling uit artikel 4 geldt tenzij in de offerte anders is overeengekomen, en voor zakelijke opdrachtgevers kan in de offerte een andere regeling worden opgenomen (artikel 4, lid 2). En er staat geen aanbetalingsgarantie of waarborgregeling in de voorwaarden van JDG, omdat die er niet is; dat soort regelingen hoort bij de brancheverenigingen waar JDG niet bij is aangesloten. Wat je wel zelf kunt controleren voordat je de eerste termijn overmaakt: JDG Maatwerk Interieur is de eenmanszaak van Jonas de Graaf, ingeschreven in het Handelsregister onder KvK-nummer 93463332, met de werkplaats in Terheijden. Bij een eenmanszaak staat de ondernemer met zijn privévermogen achter de verplichtingen van het bedrijf. Dat is geen garantie en geen waarborgfonds; het is wel een ander risicoprofiel dan een besloten vennootschap, en het is in vijf minuten na te kijken.',
      },
      {
        heading: 'Waar dit antwoord vandaan komt',
        body: 'Alles wat hierboven over termijnen, rechten en verplichtingen van JDG staat, komt uit de algemene voorwaarden van JDG, versie 5 augustus 2026, die integraal op deze site staan; het artikelnummer staat er telkens bij, zodat je elke regel zelf kunt nalezen. De wetsartikelen komen uit de geldende tekst van Boek 7 van het Burgerlijk Wetboek op wetten.overheid.nl, versie van 1 juli 2026, uitgelezen op 10 september 2026. Het percentage van de brancheregeling komt uit de CBW-erkende voorwaarden zoals KeukenConcurrent die publiceert, gelezen op 10 september 2026. Twijfel je over een termijn in jouw situatie, vraag het dan vóór je tekent: het eerste gesprek en de offerte zijn gratis en vrijblijvend, en de afspraak die in de offerte staat gaat boven de standaardregeling.',
      },
    ],
    faq: [
      {
        q: 'Is een aanbetaling verplicht?',
        a: 'Een aanbetaling is verschuldigd als dat is afgesproken of als het in de algemene voorwaarden staat. Bij JDG staat het in artikel 4: voor particuliere opdrachtgevers geldt 50 procent na akkoord op de offerte, 40 procent bij levering op locatie en aanvang van de montage, en 10 procent na oplevering, tenzij in de offerte iets anders is overeengekomen. Zonder ontvangen eerste termijn hoeft JDG geen materialen te bestellen en de productie niet te starten (artikel 4, lid 4).',
      },
      {
        q: 'Hoeveel mag een bedrijf maximaal als aanbetaling vragen?',
        a: 'Bij een consumentenkoop kan de koper tot vooruitbetaling van ten hoogste de helft van de koopprijs worden verplicht; dat is artikel 26 lid 2 van Boek 7 van het Burgerlijk Wetboek. Voor maatwerk dat nog gemaakt moet worden geldt dat ook, omdat zo\'n overeenkomst volgens artikel 5 lid 4 van Boek 7 mede als consumentenkoop wordt aangemerkt. Staat er in algemene voorwaarden een hoger percentage, dan wordt dat beding volgens artikel 6 lid 2 van Boek 7 als onredelijk bezwarend aangemerkt.',
      },
      {
        q: 'Wat gebeurt er met mijn aanbetaling als de maker failliet gaat?',
        a: 'Daar bestaat geen algemeen vangnet voor. Bij woonwinkels die zijn aangesloten bij de brancheorganisatie valt een aanbetaling onder de garantieregeling van die organisatie; JDG voert eigen algemene voorwaarden en er staat geen aanbetalingsgarantie of waarborgregeling in. Wat er in de opzet van de termijnen wel tegenover staat: je betaalt nooit meer dan de eerste helft voordat er maatwerk bij je op locatie is geleverd en de montage begint. En JDG Maatwerk Interieur is een eenmanszaak, geen rechtspersoon, wat betekent dat de ondernemer persoonlijk achter de verplichtingen van het bedrijf staat. Dat is geen garantie, maar het is wel iets anders dan een lege vennootschap.',
      },
      {
        q: 'Kan ik de termijnen vanuit een bouwdepot betalen?',
        a: 'Dat loopt tussen jou en je geldverstrekker, niet tussen jou en JDG. JDG factureert per termijn zoals in artikel 4, en die factuur is wat je bij je bank indient. Welke eisen jouw geldverstrekker aan een factuur en aan het moment van uitbetalen stelt, verschilt per bank en per depot; vraag dat na voordat je een montagedatum vastlegt, want de planning is mede afhankelijk van tijdige betaling (artikel 5, lid 3).',
      },
      {
        q: 'Mag ik de laatste factuur inhouden als er nog een puntje open staat?',
        a: 'Niet de hele factuur. Een klein opleverpunt geeft geen recht om de volledige slotfactuur in te houden (artikel 10, lid 4), maar je mag wel een redelijk bedrag inhouden dat in verhouding staat tot dat punt en de verwachte herstelkosten (artikel 10, lid 5). Openstaande punten worden bij de oplevering vastgelegd en binnen een redelijke termijn afgehandeld.',
      },
      {
        q: 'Geldt dezelfde regeling voor een zakelijke opdracht?',
        a: 'Niet automatisch. De verdeling 50, 40, 10 staat in de voorwaarden als regeling voor particuliere opdrachtgevers; voor zakelijke opdrachtgevers kan in de offerte een andere termijnregeling worden opgenomen (artikel 4, lid 2). Ook het vervolg verschilt: een zakelijke opdrachtgever is na het verstrijken van de betalingstermijn de wettelijke handelsrente en redelijke incassokosten verschuldigd (artikel 4, lid 8), terwijl bij een consument eerst een correcte herinnering en een termijn van veertien dagen moeten zijn verstreken (artikel 4, lid 6).',
      },
      {
        q: 'Wanneer begint de productie precies?',
        a: 'Pas als drie dingen rond zijn: de overeengekomen aanbetaling is ontvangen, de definitieve maatvoering is vastgesteld, en de relevante tekeningen en materiaalkeuzes zijn goedgekeurd (artikel 2, lid 4). Dat is ook waarom een offerte tekenen en dan wachten met betalen de levertijd verlengt in plaats van de opdracht te vervroegen.',
      },
    ],
    verwijzingen: [
      { label: 'De algemene voorwaarden van JDG, met de artikelen 1, 2, 4, 5, 10 en 15', href: '/algemene-voorwaarden' },
      { label: 'De werkwijze: van kennismaking en offerte tot oplevering', href: '/werkwijze' },
      { label: 'Hoe een offerte voor maatwerk is opgebouwd', href: '/blog/hoe-een-offerte-voor-maatwerk-is-opgebouwd' },
      { label: 'Alleen laten maken en zelf monteren: kan dat bij maatwerk?', href: '/blog/zelf-monteren-of-alleen-laten-maken' },
      { label: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?', href: '/blog/keuken-of-kast-past-niet-verkeerd-ingemeten' },
      { label: 'Kennismaken of een offerte aanvragen', href: '/contact' },
    ],
    hero: '/images/jdg-31.jpg',
    heroAlt: 'Opgeleverde kastenwand in zachtroze gelakt MDF met smalle messing greeplijsten, doorlopend tot tegen de schuine wand; de kamer eromheen is leeg.',
    readingMinutes: 7,
  },
  {
    // Antwoordeenheid op de vraag "Wat gebeurt er als de maat niet klopt of iets niet past bij
    // de montage?" (motor_vraagdekking jdg, rij c33f3b61, open sinds 01-09-2026; contract
    // 689edd57). Alles wat hier over de rechten, plichten en gevolgen bij JDG staat, komt uit
    // de eigen algemene voorwaarden versie 5 augustus 2026, die integraal op deze site staan;
    // het artikelnummer staat er telkens bij. De wettelijke onderlaag komt uit de geldende
    // tekst van Boek 7 van het Burgerlijk Wetboek op wetten.overheid.nl (BWBR0005290, geldend
    // van 01-07-2026, uitgelezen 10-09-2026): titel 1 (koop) en titel 12 (aanneming van werk)
    // gelden bij maatwerk naast elkaar.
    // Wat hier NIET staat: projectprijzen, herstelkosten, hersteltermijnen in dagen, en een
    // uitspraak over of een vast gemonteerde keuken een "bouwwerk" is in de zin van artikel
    // 7:758 lid 4 BW. Dat laatste is geen vastgestelde waarheid en wordt hier niet beslist.
    gepubliceerd: true,
    slug: 'keuken-of-kast-past-niet-verkeerd-ingemeten',
    title: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?',
    h1: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?',
    metaTitle: 'Keuken of kast past niet: wie draait ervoor op',
    metaDescription:
      'Vier situaties, vier uitkomsten: JDG heeft ingemeten, jij leverde de maten, de muur is niet recht, of de montage kan niet doorgaan. Per geval het artikel uit de eigen voorwaarden van JDG en het wetsartikel erbij.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'keuken verkeerd ingemeten',
    relatedKeywords: [
      'keuken past niet',
      'kast op maat past niet',
      'keuken verkeerd geplaatst',
      'wie is aansprakelijk bij verkeerd opmeten',
      'maatwerk maat klopt niet',
      'keuken sluit niet aan op de muur',
      'keuken niet goed gemonteerd',
    ],
    intro:
      'Wie de maat heeft genomen, bepaalt het antwoord. Heeft JDG ingemeten en klopt de maat niet, dan is dat een eigen meetfout van JDG en verandert jouw goedkeuring van de tekening daar niets aan: goedkeuring door de opdrachtgever ontslaat JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten, en dat staat met zoveel woorden in <a href="/algemene-voorwaarden">artikel 3 van de algemene voorwaarden van JDG</a>, versie 5 augustus 2026. Heb jij de maten of de tekening aangeleverd, dan mag JDG in beginsel uitgaan van de juistheid daarvan en komen de gevolgen voor jouw rekening, tenzij JDG de fout kende of als vakman had moeten herkennen. En dan is er nog een derde geval dat vaker voorkomt dan de eerste twee samen: het maatwerk is precies goed, maar de muur, de vloer of het plafond is niet recht. Hieronder staan de vier situaties naast elkaar, met per situatie het artikel uit de voorwaarden, het wetsartikel eronder, en wat je concreet doet.',
    sections: [
      {
        heading: 'Het korte antwoord: vier situaties, vier uitkomsten',
        body: 'Bijna elk "het past niet" valt in een van deze vier hokjes, en het hokje bepaalt wie herstelt en wie betaalt. Wat in jouw offerte staat gaat altijd voor; de voorwaarden zijn de terugvalregeling.',
        bullets: [
          'JDG heeft ingemeten en de maat klopt niet. Eigen meetfout van JDG. Herstel is kosteloos, ook als jij de tekening had goedgekeurd (artikel 3, leden 1 en 6, en artikel 11, lid 4).',
          'Jij hebt de maten of de tekening aangeleverd en die waren onjuist. De gevolgen zijn voor jouw rekening, tenzij JDG de fout kende of als vakman redelijkerwijs had moeten herkennen (artikel 3, leden 3 en 4).',
          'Het maatwerk is goed, maar de muur, vloer of het plafond is niet recht. Een klein noodzakelijk aansluit- of maatverschil is geen gebrek zolang functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (artikel 9, lid 6).',
          'Het past wel, maar de montage kan niet doorgaan omdat de ruimte niet gereed is. Dat heet verlet en heeft een vaste vergoeding, die niet verschuldigd is wanneer het aan JDG te wijten is (artikel 6, leden 4, 5 en 10).',
        ],
      },
      {
        heading: 'Situatie 1: JDG heeft ingemeten en de maat klopt niet',
        body: 'Wanneer JDG de maatvoering verzorgt, wordt die zorgvuldig opgenomen op basis van de op dat moment aanwezige situatie (artikel 3, lid 1). Blijkt er daarna een maat mis, dan is dat werk van JDG. Het punt waar bij andere partijen de discussie begint, is bij JDG in de voorwaarden dichtgezet: door goedkeuring van een tekening bevestig je de zichtbare indeling, maatvoering, draairichtingen, kleuren en materialen (artikel 3, lid 5), maar die goedkeuring ontslaat JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten (artikel 3, lid 6). Je handtekening op een tekening is dus geen overdracht van het meetrisico. Praktisch betekent dit: JDG krijgt eerst een redelijke mogelijkheid om het gebrek te onderzoeken en, wanneer JDG daarvoor verantwoordelijk is, kosteloos te herstellen (artikel 11, lid 4), en op de deugdelijke constructie en montage van het door JDG vervaardigde maatwerk geldt vijf jaar aanvullende garantie vanaf de opleverdatum (artikel 12, leden 1 en 2).',
        bullets: [
          'Wie tekent, meet: bij JDG lopen ontwerp, productie en montage door dezelfde hand, en dat is precies de reden dat het meetrisico niet ergens tussen twee partijen kan blijven hangen. Hoe dat traject loopt staat in <a href="/werkwijze">de werkwijze van kennismaking tot oplevering</a>.',
          'De kosten van herstel of vervanging mogen niet aan je in rekening worden gebracht; dat is geen coulance maar wet (artikel 7:21 lid 2 BW).',
          'Doet JDG de montage ook, dan is een montagefout wettelijk hetzelfde als een verkeerd geleverd product: elk gebrek dat het gevolg is van een verkeerde installatie die deel uitmaakt van de koop en onder verantwoordelijkheid van de verkoper is uitgevoerd, wordt beschouwd als het niet beantwoorden van het afgeleverde aan de overeenkomst (artikel 7:18a lid 1 onder a BW).',
        ],
      },
      {
        heading: 'Situatie 2: jij hebt de maten of de tekening aangeleverd',
        body: 'Lever je zelf maten, tekeningen of technische gegevens aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan (artikel 3, lid 3), en komen de gevolgen van onjuiste of onvolledige informatie voor jouw rekening, tenzij JDG de fout kende of deze als vakman redelijkerwijs had moeten herkennen (artikel 3, lid 4). Diezelfde uitzondering staat ook in de wet, en dat is de helft van dit onderwerp die op vrijwel geen enkele pagina wordt genoemd. De aannemer is bij het aangaan of het uitvoeren van de overeenkomst verplicht de opdrachtgever te waarschuwen voor onjuistheden in de opdracht voor zover hij deze kende of redelijkerwijs behoorde te kennen, en dat geldt uitdrukkelijk ook voor fouten of gebreken in door de opdrachtgever verstrekte plannen, tekeningen, berekeningen, bestekken of uitvoeringsvoorschriften (artikel 7:754 lid 1 BW). Een verkeerde maat van jou is dus niet automatisch jouw probleem: als de maker had moeten zien dat het niet kon, had hij het moeten zeggen. JDG legt die plicht ook zelf vast: JDG waarschuwt wanneer een gewenste uitvoering naar professioneel inzicht ondeugdelijk, onveilig of technisch onverantwoord is (artikel 9, lid 7).',
        bullets: [
          'De wettelijke risicoverdeling staat in artikel 7:760 BW: is de ondeugdelijke uitvoering te wijten aan zaken of gegevens die van jou afkomstig zijn, dan komen de gevolgen voor jouw rekening, maar alleen "voor zover de aannemer niet zijn in artikel 754 bedoelde waarschuwingsplicht heeft geschonden of anderszins met betrekking tot deze gebreken in deskundigheid of zorgvuldigheid tekort is geschoten" (lid 2, en lid 3 voor tekeningen en berekeningen).',
          'Aan de koopkant staat hetzelfde: je kunt je niet beroepen op non-conformiteit als het te wijten is aan gebreken of ongeschiktheid van grondstoffen die van jou afkomstig zijn, "tenzij de verkoper hem voor deze gebreken of ongeschiktheid had moeten waarschuwen" (artikel 7:17 lid 5 BW).',
          'Eén nuance die je elders niet leest: de zwaardere eis dat een waarschuwing schriftelijk en ondubbelzinnig moet zijn, geldt volgens artikel 7:754 lid 2 BW alleen bij aanneming van een bouwwerk. Bij een meubel of keuken is de waarschuwingsplicht er dus wel, maar de vormeis niet. Zet een mondelinge waarschuwing daarom zelf in een appje of mail terug, aan welke kant van de tafel je ook zit.',
          'Verandert er na het inmeten iets aan muren, vloeren, plafonds, leidingen of aansluitpunten, dan hoort dat gemeld te worden (artikel 3, lid 2). Dat is de meest voorkomende bron van een maat die niet meer klopt: er is niets verkeerd gemeten, er is daarna gestuukt, getegeld of een leiding verlegd.',
          'Wil je maken en monteren splitsen, dan verschuift deze verdeling. Wat er dan verandert staat apart uitgeschreven in <a href="/blog/zelf-monteren-of-alleen-laten-maken">alleen laten maken en zelf monteren: kan dat bij maatwerk</a>.',
        ],
      },
      {
        heading: 'Situatie 3: de muur is niet recht, en dat is geen fout',
        body: 'Een scheve muur wordt vaker voor een maatfout aangezien dan wat ook, en wordt het minst vaak eerlijk uitgelegd, ook niet door maatwerkbedrijven zelf. Bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak. Kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek wanneer de functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (artikel 9, lid 6). Datzelfde geldt voor kleine verschillen in kleur, glans, maat, nerf, structuur of tekening van hout, fineer, plaatmateriaal en natuursteen: die kunnen binnen normale professionele toleranties vallen (artikel 9, lid 3), en hout kan onder invloed van licht, luchtvochtigheid en temperatuur beperkt verkleuren, krimpen, uitzetten of vervormen zonder dat er iets mis is (artikel 9, leden 4 en 5). Wat dit in de praktijk betekent: een passtrook, een schaduwnaad of een millimeter kit waar de kast de scheve wand raakt, is vakwerk en geen gebrek. Een spleet waar je een hand in kwijt kunt, is dat niet.',
        bullets: [
          'De grens is niet "recht of niet recht" maar "wordt de functionaliteit, de duurzaamheid of de overeengekomen uitstraling wezenlijk aangetast". Dat is een oordeel over dit werk in deze ruimte, en daarom hoort het bij de oplevering samen bekeken te worden (artikel 10, lid 1).',
          'Waar het wringt is precies waar het maatwerk het gebouw raakt: de aansluiting op vloer, wand en plafond. Een voorbeeld van hoe dat er opgelost uitziet staat bij <a href="/projecten/zolderinbouw-hangkast-lades">de zolderinbouw met lades onder de schuine wand</a>, waar de lades tot in de punt van het dak zijn gepast.',
          'JDG is niet aansprakelijk voor schade die uitsluitend ontstaat door verborgen gebreken in muren, vloeren, plafonds, leidingen of constructies die JDG redelijkerwijs niet kon kennen, of door omstandigheden waartegen JDG vooraf aantoonbaar heeft gewaarschuwd (artikel 13, lid 5). Ook dit is dus een reden om een waarschuwing schriftelijk te hebben.',
        ],
      },
      {
        heading: 'Situatie 4: het past wel, maar de montage kan niet doorgaan',
        body: 'Er is een variant van "het past niet" die niet over het meubel gaat maar over de ruimte. Voor iedere opdracht reserveert JDG specifieke productie- en montagetijd (artikel 5, lid 1), en op de afgesproken datum hoort de projectlocatie volledig gereed, veilig en toegankelijk te zijn: voldoende leeg en bezemschoon, met een vrije aanvoerroute, met muren, vloeren en plafonds die gereed en voldoende droog en uitgehard zijn, met de aansluitpunten voor elektra, water, afvoer en ventilatie op de overeengekomen plaats, en met constructies die voldoende draagkrachtig zijn (artikel 6, leden 1 en 2). Kan JDG daardoor niet beginnen of niet normaal doorwerken, dan heet dat verlet (artikel 6, lid 4). De voorwaarden noemen daar zelf de voorbeelden bij, en de eerste is de meest voorkomende: muren die kort daarvoor zijn gestukadoord en nog onvoldoende droog of uitgehard zijn. Ook genoemd: schilder-, vloer- of tegelwerk dat niet gereed is, ontbrekende of verkeerd geplaatste aansluitpunten, andere vakmensen die de werkruimte nog gebruiken, en een feitelijke situatie die sinds het inmeten zonder overleg is gewijzigd.',
        bullets: [
          'Bij verlet geldt een vaste vergoeding van 350 euro exclusief btw per ingeplande vakman per verloren volledige werkdag, bij het huidige btw-tarief van 21 procent 423,50 euro inclusief btw per vakman per dag (artikel 6, lid 5). Gaat maar een deel van de dag verloren, dan wordt naar verhouding gerekend met een minimum van een halve werkdag per vakman (artikel 6, lid 6).',
          'Er zitten drie remmen op die vergoeding, en die staan in dezelfde voorwaarden: hij wordt alleen berekend voor zover JDG de gereserveerde capaciteit niet redelijkerwijs elders heeft kunnen inzetten (artikel 6, lid 9), hij is niet verschuldigd wanneer het niet kunnen uitvoeren aan JDG is toe te rekenen (artikel 6, lid 10), en de oorzaak wordt zo veel mogelijk schriftelijk en met foto’s vastgelegd (artikel 6, lid 8).',
          'Zo voorkom je het helemaal: meld uiterlijk vijf werkdagen vóór de geplande plaatsing dat de locatie mogelijk niet tijdig gereed zal zijn (artikel 6, lid 3). Dan wordt er opnieuw ingepland in plaats van afgerekend.',
          'Verschuiven kan ook geld kosten als het maatwerk zelf al klaar is: verplaats je tussen vijf en twee werkdagen vóór aanvang, dan mag 50 procent van de gereserveerde arbeidscapaciteit worden berekend, en binnen 48 uur vóór aanvang 350 euro exclusief btw per ingeplande vakman per gereserveerde werkdag, in beide gevallen alleen voor zover de vrijgekomen capaciteit niet met ander betaald werk kon worden ingevuld (artikel 7, leden 2 en 3).',
        ],
      },
      {
        heading: 'De wettelijke onderlaag, met het artikelnummer erbij',
        body: 'Van de pagina’s die vandaag beantwoorden wat er gebeurt als maatwerk niet past, noemt geen enkele een wetsartikel. Dat is jammer, want de wet is hier ongewoon concreet, en bij maatwerk gelden twee sets regels naast elkaar: de regels voor aanneming van werk én de regels voor consumentenkoop. Dat laatste komt doordat een overeenkomst om een nog niet bestaande roerende zaak te maken, gesloten tussen een vakbedrijf en een particulier, volgens artikel 7:5 lid 4 BW mede als consumentenkoop wordt aangemerkt. De teksten hieronder komen uit de geldende versie van Boek 7 van het Burgerlijk Wetboek van 1 juli 2026, uitgelezen op wetten.overheid.nl op 10 september 2026.',
        bullets: [
          'Een maat die afwijkt ís non-conformiteit. Artikel 7:17 BW zegt in lid 1 dat het afgeleverde aan de overeenkomst moet beantwoorden, en in lid 3 letterlijk: "Hetzelfde geldt indien het afgeleverde in getal, maat of gewicht van het overeengekomene afwijkt."',
          'Een montagefout van de maker is non-conformiteit. Artikel 7:18a lid 1 onder a BW rekent elk gebrek als gevolg van een verkeerde installatie tot het niet beantwoorden aan de overeenkomst, wanneer de installatie deel uitmaakt van de koop en is uitgevoerd door de verkoper of onder diens verantwoordelijkheid.',
          'Het eerste jaar hoef jij niets te bewijzen. Bij een consumentenkoop wordt vermoed dat de zaak bij aflevering niet aan de overeenkomst beantwoordde als de afwijking zich binnen één jaar na aflevering openbaart, tenzij de verkoper anders aantoont of de aard van de zaak of van de afwijking zich daartegen verzet (artikel 7:18a lid 2 BW). Op meerdere pagina’s over dit onderwerp staat nog "zes maanden"; dat is een oudere stand van de wet.',
          'Herstel is jouw recht en het kost je niets. Je kunt aflevering van het ontbrekende, herstel of vervanging eisen (artikel 7:21 lid 1 BW), en de kosten daarvan mogen niet aan je in rekening worden gebracht (lid 2). Bij een consumentenkoop vervalt dat recht alleen als herstel of vervanging onmogelijk is of niet van de verkoper kan worden gevergd (lid 4).',
          'De maker mag het eerst zelf oplossen. Bij aanneming van werk moet je de aannemer de gelegenheid geven gebreken binnen een redelijke termijn weg te nemen, tenzij dat in verband met de omstandigheden niet van je kan worden gevergd, en je kunt vorderen dat hij dat doet tenzij de herstelkosten in geen verhouding staan tot jouw belang bij herstel in plaats van schadevergoeding (artikel 7:759 leden 1 en 2 BW).',
          'Gebeurt er niets, dan mag je het laten doen. Voldoet de verkoper bij een consumentenkoop niet binnen een redelijke tijd nadat hij daartoe schriftelijk is aangemaand, dan mag je het herstel door een derde laten uitvoeren en de kosten op hem verhalen (artikel 7:21 lid 6 BW). Lukt herstel of vervanging niet, dan komen ontbinding en prijsvermindering in beeld (artikel 7:22 BW).',
          'Kijk bij de oplevering goed. De aannemer is ontslagen van aansprakelijkheid voor gebreken die je op het tijdstip van oplevering redelijkerwijs had moeten ontdekken (artikel 7:758 lid 3 BW). In de voorwaarden van JDG staat daar de tegenhanger bij: ingebruikname kan gelden als aanvaarding van duidelijk zichtbare punten, maar doet geen afbreuk aan je rechten bij verborgen gebreken (artikel 10, lid 7), en de aanvullende garantie beperkt nooit de wettelijke rechten van een consument (artikel 12, lid 6).',
        ],
      },
      {
        heading: 'Wat je concreet doet, in de juiste volgorde',
        body: 'Bij een maat die niet klopt of iets dat niet past is de volgorde niet alleen netjes, hij is ook wat je rechten bewaart. Wie meteen een andere partij laat repareren, verliest een deel van zijn aanspraak; wie te lang wacht met melden, ook. Dit is de route zoals de voorwaarden van JDG en de wet hem samen aangeven.',
        bullets: [
          'Meld het zodra je het ziet, bij voorkeur schriftelijk, met een duidelijke omschrijving en foto’s (artikel 11, leden 1 en 3). Een klacht van een consument die binnen twee maanden na ontdekking wordt gemeld, geldt in ieder geval als tijdig (artikel 11, lid 2).',
          'Laat JDG eerst kijken. JDG krijgt een redelijke mogelijkheid om het vermeende gebrek te onderzoeken en, wanneer JDG daarvoor verantwoordelijk is, kosteloos te herstellen (artikel 11, lid 4); jij geeft daarvoor binnen redelijke grenzen toegang (lid 5).',
          'Schakel niet zonder overleg een derde in. Dat mag wel bij een acute noodsituatie, of wanneer JDG na een redelijke schriftelijke termijn geen herstel uitvoert (artikel 11, lid 6). Doe je het zonder noodzaak, dan hoeft JDG die kosten niet te vergoeden voor zover JDG het gebrek zelf deugdelijk had kunnen herstellen (lid 7).',
          'Houd niet de hele slotfactuur in. Een klein opleverpunt geeft dat recht niet (artikel 10, lid 4); wel mag je een redelijk bedrag inhouden dat in verhouding staat tot dat punt en de verwachte herstelkosten (artikel 10, lid 5). De volgorde van de termijnen zelf staat in <a href="/blog/aanbetaling-en-betaaltermijnen-maatwerk">moet ik aanbetalen, en wanneer betaal ik de rest</a>.',
          'Leg vast wat er is afgesproken. Mondelinge aanvullende afspraken worden zo veel mogelijk schriftelijk bevestigd (artikel 2, lid 5), en meerwerk kan schriftelijk, per e-mail of via WhatsApp worden overeengekomen (artikel 8, lid 3). Een appje is een schriftelijke afspraak.',
          'Komt er geen oplossing, dan zeggen de voorwaarden wat de route is: partijen proberen een geschil eerst door redelijk onderling overleg op te lossen, en biedt dat geen oplossing, dan wordt het geschil voorgelegd aan de rechter die volgens de Nederlandse wet bevoegd is (artikel 15, leden 8 en 9).',
        ],
      },
      {
        heading: 'Wat mensen hierover intypen',
        body: 'De woorden waarin mensen vragen wat er gebeurt als maatwerk niet past, zeggen iets over waarom de antwoorden zo dun zijn. Gemeten op 10 september 2026 in de Nederlandse zoeksuggesties (hl=nl, gl=nl) levert "keuken verkeerd" drie aanvullingen op: "keuken verkeerd ingemeten", "keuken verkeerd geplaatst" en "keuken verkeerd geleverd". Op "keuken past niet" komt "ikea keuken past niet" terug. Maar type je alleen "verkeerd ingemeten", dan gaan alle tien de aanvullingen over kozijnen, schuifpuien, tuindeuren, ramen en trappen: geen enkele over een keuken, kast of meubel. En op "kast op maat past", "keuken opgemeten" en "keukenmontage fout" komt in diezelfde meting helemaal niets terug. De vraag wordt dus wel gesteld, maar er is nauwelijks een vaste formulering voor, en waar geen vaste formulering is, komt ook geen goed antwoord bovendrijven. Dat is de reden dat deze pagina de vier situaties uitschrijft in plaats van één zoekterm te bedienen.',
      },
      {
        heading: 'Wat hier bewust niet staat',
        body: 'Er staan op deze pagina geen projectprijzen en geen herstelkosten. Wat een oplossing kost hangt af van wat er precies mis is en wat de situatie ter plaatse toelaat, en dat hoort in een gesprek en op een factuur, niet in een tabel op een website. Er staat ook geen termijn in dagen waarbinnen herstel gebeurt: de voorwaarden en de wet spreken van een redelijke termijn, en wat redelijk is verschilt tussen een scharnier bijstellen en een front opnieuw laten spuiten. Er staat geen geschillencommissie op deze pagina, omdat de voorwaarden van JDG er geen aanwijzen: artikel 15 stuurt een geschil naar onderling overleg en daarna naar de bevoegde rechter. En er staat geen uitspraak over de vraag of een vast gemonteerde keuken een "bouwwerk" is in de zin van artikel 7:758 lid 4 BW, want dat is niet vastgesteld; wel is duidelijk dat de voorwaarden van JDG je rechten bij verborgen gebreken uitdrukkelijk in stand laten (artikel 10, lid 7). Twijfel je over een specifieke situatie, leg hem dan voor voordat er iets gedemonteerd of hersteld wordt. Dat is het moment waarop de meeste opties nog open staan.',
      },
      {
        heading: 'Waar dit antwoord vandaan komt',
        body: 'Alles wat hierboven over de rechten, plichten en gevolgen bij JDG staat, komt uit de algemene voorwaarden van JDG, versie 5 augustus 2026, die integraal op deze site staan; het artikelnummer staat er telkens bij, zodat je elke regel zelf kunt nalezen in <a href="/algemene-voorwaarden">de volledige voorwaarden, met de artikelen 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13 en 15</a>. De wetsartikelen komen uit de geldende tekst van Boek 7 van het Burgerlijk Wetboek op wetten.overheid.nl, versie van 1 juli 2026, uitgelezen op 10 september 2026. De zoeksuggesties zijn op 10 september 2026 opgevraagd met hl=nl en gl=nl. JDG Maatwerk Interieur is de eenmanszaak van Jonas de Graaf, ingeschreven in het Handelsregister onder KvK-nummer 93463332, met de werkplaats in Terheijden; ontwerp, productie en montage lopen door dezelfde hand, en dat is de reden dat deze pagina de vraag "wie draait ervoor op" niet hoeft door te schuiven.',
      },
    ],
    faq: [
      {
        q: 'Wie is aansprakelijk als de maat niet klopt?',
        a: 'Dat hangt af van wie de maat heeft genomen. Heeft JDG ingemeten, dan is de maatvoering het werk van JDG en ontslaat jouw goedkeuring van de tekening JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten (algemene voorwaarden, artikel 3, lid 6). Heb jij de maten of tekeningen aangeleverd, dan mag JDG in beginsel uitgaan van de juistheid daarvan en komen de gevolgen voor jouw rekening, tenzij JDG de fout kende of als vakman redelijkerwijs had moeten herkennen (artikel 3, leden 3 en 4).',
      },
      {
        q: 'Ik heb de tekening goedgekeurd. Ben ik dan van mijn rechten af?',
        a: 'Nee. Met je goedkeuring bevestig je de zichtbare indeling, maatvoering, draairichtingen, kleuren en materialen (algemene voorwaarden, artikel 3, lid 5), maar diezelfde goedkeuring ontslaat JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten (artikel 3, lid 6). Je handtekening op een tekening is dus geen overdracht van het meetrisico.',
      },
      {
        q: 'De kast sluit niet naadloos aan op de muur. Is dat een gebrek?',
        a: 'Niet per definitie. Bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak, en kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek wanneer de functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (algemene voorwaarden, artikel 9, lid 6). De grens is dus niet "recht of niet recht" maar of een van die drie dingen wezenlijk wordt aangetast. Daarom hoort het werk bij de oplevering samen bekeken te worden (artikel 10, lid 1).',
      },
      {
        q: 'Mag ik het zelf laten repareren en de rekening doorsturen?',
        a: 'Niet zonder overleg. Volgens de voorwaarden laat je een gebrek niet zonder voorafgaand overleg door een derde herstellen, behalve bij een acute noodsituatie of wanneer JDG na een redelijke schriftelijke termijn geen herstel uitvoert (artikel 11, lid 6); doe je het zonder noodzaak, dan hoeft JDG die kosten niet te vergoeden voor zover JDG het zelf deugdelijk had kunnen herstellen (lid 7). De wet loopt daarmee gelijk: bij een consumentenkoop mag je het herstel door een derde laten doen en de kosten verhalen als de verkoper niet binnen een redelijke tijd reageert nadat hij daartoe schriftelijk is aangemaand (artikel 7:21 lid 6 BW).',
      },
      {
        q: 'Hoe lang na de oplevering kan ik nog klagen?',
        a: 'Een klacht van een consument die binnen twee maanden na ontdekking wordt gemeld, geldt volgens de voorwaarden in ieder geval als tijdig (artikel 11, lid 2). Daarnaast geldt vijf jaar aanvullende garantie op de deugdelijke constructie en montage van het door JDG vervaardigde maatwerk, gerekend vanaf de opleverdatum (artikel 12, leden 1 en 2), en die garantie beperkt nooit je wettelijke rechten (lid 6). Bij een consumentenkoop wordt bovendien vermoed dat een afwijking die zich binnen één jaar na aflevering openbaart al bij aflevering aanwezig was, tenzij de verkoper anders aantoont (artikel 7:18a lid 2 BW).',
      },
      {
        q: 'Wat kost het als de montage niet door kan gaan omdat mijn ruimte niet klaar is?',
        a: 'Dat heet verlet en de voorwaarden noemen daar een vast bedrag bij: 350 euro exclusief btw per ingeplande vakman per verloren volledige werkdag, bij het huidige btw-tarief van 21 procent 423,50 euro inclusief btw (artikel 6, lid 5); bij een deel van de dag naar verhouding, met een minimum van een halve werkdag (lid 6). De vergoeding wordt alleen berekend voor zover de gereserveerde capaciteit niet redelijkerwijs elders is ingezet (lid 9) en is niet verschuldigd wanneer het niet kunnen uitvoeren aan JDG is toe te rekenen (lid 10). Meld uiterlijk vijf werkdagen vóór de plaatsing dat de locatie mogelijk niet gereed is (lid 3), dan wordt er opnieuw ingepland.',
      },
      {
        q: 'Ik heb na het inmeten laten stuken en tegelen. Verandert dat iets?',
        a: 'Ja, op twee manieren. Wijzigingen aan muren, vloeren, plafonds, leidingen of aansluitpunten na het inmeten horen gemeld te worden (artikel 3, lid 2), omdat de maatvoering is opgenomen op basis van de situatie zoals die op dat moment was (lid 1). En zijn muren kort voor de montage gestukadoord en nog onvoldoende droog of uitgehard, dan noemen de voorwaarden dat uitdrukkelijk als verlet (artikel 6, lid 4). Stuc-, schilder-, tegel- en vloerwerk moet voldoende lang hebben kunnen drogen en uitharden voordat er gemonteerd wordt (artikel 6, lid 2).',
      },
      {
        q: 'Kan ik de opdracht ontbinden als het niet past?',
        a: 'Dat is de laatste stap, niet de eerste. Bij een consumentenkoop ontstaan ontbinding en prijsvermindering pas wanneer herstel en vervanging onmogelijk zijn of niet van de verkoper kunnen worden gevergd, of wanneer hij tekortschiet in zijn verplichting om binnen een redelijke termijn en zonder ernstige overlast te herstellen (artikel 7:22 leden 1 en 2 BW); onmiddellijk ontbinden of de prijs verminderen kan onder meer wanneer herstel niet is voltooid, is geweigerd, of de afwijking zo ernstig is dat het gerechtvaardigd is (lid 5). Ontbinden is bij maatwerk zelden de gunstigste route, omdat het gemaakte werk niet aan iemand anders te leveren is; herstel levert vaker een bruikbaar resultaat op.',
      },
    ],
    verwijzingen: [
      { label: 'De algemene voorwaarden van JDG, met de artikelen 3, 6, 9, 10, 11, 12 en 13', href: '/algemene-voorwaarden' },
      { label: 'De werkwijze: van inmeten en tekening tot montage en oplevering', href: '/werkwijze' },
      { label: 'Alleen laten maken en zelf monteren: kan dat bij maatwerk?', href: '/blog/zelf-monteren-of-alleen-laten-maken' },
      { label: 'Moet ik aanbetalen, en wanneer betaal ik de rest?', href: '/blog/aanbetaling-en-betaaltermijnen-maatwerk' },
      { label: 'Zolderinbouw met lades tot in de punt van het dak', href: '/projecten/zolderinbouw-hangkast-lades' },
      { label: 'Kan een kast onder een schuin dak of tegen een schuine wand?', href: '/blog/kast-onder-schuin-dak-of-schuine-wand' },
      { label: 'Kennismaken of een situatie voorleggen', href: '/contact' },
    ],
    hero: '/images/jdg-33.jpg',
    heroAlt: 'Zachtroze gelakte kastenwand met één deur open: witte binnenkant met planken en drie uitgetrokken lades, messing greeplijsten op de fronten; rechts loopt de kast schuin mee met de dakhelling, met een donkerpaarse wand en grijze houtlook-vloer ernaast.',
    readingMinutes: 9,
  },
  {
    gepubliceerd: true,
    slug: 'kast-onder-schuin-dak-of-schuine-wand',
    title: 'Kan een kast onder een schuin dak of tegen een schuine wand?',
    h1: 'Kan een kast onder een schuin dak of tegen een schuine wand?',
    metaTitle: 'Kast onder een schuin dak: kan dat, en wat bepaalt het',
    metaDescription:
      'Ja, het kan. Wat beslist is niet de schuinte maar de bruikbare hoogte. Met de drie maten waarmee elke schuine wand te tekenen is, waar hangen en lades horen, en wat er geldt als de wand niet recht blijkt.',
    publishedAt: '2026-09-14',
    updatedAt: '2026-09-14',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'kast onder schuin dak',
    relatedKeywords: [
      'kledingkast schuine wand',
      'inbouwkast op maat schuin dak',
      'kast tegen schuine wand',
      'knieschot kast op maat',
      'zolderkast op maat',
      'kast onder dakkapel',
      'kledingkast schuine wand links',
    ],
    intro:
      'Ja. Een kast kan onder een schuin dak, tegen een schuine wand, achter een knieschot en onder een dakkapel. Dit is ook precies het geval waarin maatwerk een gekochte kast verslaat: een standaardkast heeft over de hele breedte één hoogte, en onder een schuinte verandert de hoogte met elke centimeter die je naar voren komt. De vraag die het besluit maakt is daarom niet of het kan, maar hoeveel bruikbare hoogte je overhoudt op de diepte die je kiest. Dat volgt uit drie maten die je zelf met een rolmaat opneemt. In het portfolio van JDG Maatwerk Interieur staan vier projecten onder een schuinte, alle vier uit 2025 in West-Brabant; de foto bovenaan is er een van.',
    sections: [
      {
        heading: 'Het korte antwoord, en de vraag die eronder zit',
        body: 'Een kast onder een schuin dak of tegen een schuine wand kan, in alle vormen waarin die vraag gesteld wordt: tegen een dakschuinte in een slaapkamer, achter een knieschot op zolder, onder de schuine wang van een dakkapel, en in de hoek waar een schuinte op een rechte wand uitkomt. Wat de uitkomst bepaalt is niet de hellingshoek maar de bruikbare hoogte, oftewel de hoogte die overblijft op de diepte die de kast krijgt. Hangen vraagt de meeste hoogte, een legbord minder en een lade het minst, en daarom volgt de indeling onder een schuinte bijna altijd dezelfde volgorde.',
        bullets: [
          'Hangen aan de hoge kant, legborden en lades onder de schuinte. Zo staat het ook in het werk van JDG: in <a href="/projecten/zolderinbouw-hangkast-lades">de zolderinbouw met lades onder de schuine wand</a> hangt de roede in het hoge vak en zijn de drie lades tot in de punt van het dak gepast.',
          'De diepte van de kast is de knop waar je aan draait. Elke centimeter diepte levert aan de voorkant hoogte op, en hoeveel dat precies is volgt uit drie maten die je zelf kunt opnemen.',
          'Een gekochte kast heeft één hoogte over de hele breedte. Onder een schuinte past die alleen op de plek waar het dak het hoogst is, en dat is meestal de plek waar je wilt kunnen lopen.',
          'Een schuinte is zelden overal gelijk. Een dakkapel, een spant of een knieschot dat niet overal even hoog staat verandert de maat over de breedte. Daarom wordt er ter plaatse ingemeten en niet op een bouwtekening.',
        ],
      },
      {
        heading: 'De drie maten waarmee elke schuinte te tekenen is',
        body: 'Een schuine wand ligt met drie maten volledig vast, en die drie neem je zelf op met een rolmaat voordat er iemand langskomt. Eén: de hoogte aan de lage kant, van de vloer tot het punt waar het dakvlak begint. Bij een knieschot is dat de hoogte van dat schot. Twee: de hoogte aan de hoge kant, tot het punt waar het dakvlak overgaat in het plafond. Drie: de horizontale afstand tussen die twee punten, over de vloer gemeten. Tussen de lage en de hoge kant loopt de hoogte gelijkmatig op, dus uit die drie maten volgt de hoogte op elke diepte. Staat het dakvlak bijvoorbeeld op 120 centimeter aan de lage kant en op 240 aan de hoge kant, met 150 centimeter vloer ertussen, dan wint elke 10 centimeter diepte ongeveer 8 centimeter hoogte aan de voorkant van de kast. Die getallen zijn een rekenvoorbeeld en geen maat van jouw zolder.',
        bullets: [
          'Meet op drie plekken over de breedte, niet op één. Een dakvlak is zelden over de hele lengte gelijk, en juist de plek waar het afwijkt bepaalt hoe de kast getekend wordt.',
          'Noteer ook wat er in de weg zit: een spant, een dakraam, een radiator, een stopcontact, de dikte van de plint. Die punten bepalen de indeling net zo hard als de schuinte zelf.',
          'Een foto van de hoek met de rolmaat erin zegt meer dan de drie getallen los. <a href="/contact">Stuur hem mee als je een situatie voorlegt</a>, dan is meteen duidelijk waar de kast begint en waar hij ophoudt.',
        ],
      },
      {
        heading: 'Hoeveel hoogte je nodig hebt staat in je eigen kast, niet in een tabel',
        body: 'De maat die beslist of er onder een schuinte gehangen kan worden is de lengte van wat er moet hangen, en die verschilt per huishouden. Meet hem zelf: hang het langste kledingstuk dat je hebt aan een hanger en meet van de bovenkant van de roede tot de onderkant van dat kledingstuk. Tel daar de ruimte bij op die je nodig hebt om de hanger er schuin uit te tillen. Dat getal bepaalt op welke diepte het hangvak onder de schuinte kan beginnen, en niet een algemene norm. Voor de rest van de indeling werkt het net zo: een lade vraagt de hoogte van de lade plus het front, een legbord vraagt de hoogte van wat erop staat. Onder een schuinte is dat geen detail, want elke centimeter hoogte die je niet nodig hebt kun je teruggeven aan diepte of aan bergruimte.',
        bullets: [
          'Jassen en lange jurken zijn de bepalende maat. Overhemden, broeken op een klemhanger en truien vragen minder, dus een vak voor korte hang past vaak nog waar een lang vak niet meer kan.',
          'Waar de hoogte het snelst wegloopt doen lades en uittrekbare elementen het werk: je haalt ze naar je toe in plaats van dat je erin moet kijken. In <a href="/projecten/zolderinbouw-hangkast-lades">dezelfde zolderinbouw in West-Brabant</a> zit onder de plankenkolom een reeks lades die precies dat doet.',
          'Wat er in de kast komt hoort bij het gesprek voordat er getekend wordt. Hoe dat traject loopt, van kennismaking tot montage, staat in <a href="/werkwijze">de werkwijze van JDG</a>.',
        ],
      },
      {
        heading: 'Links of rechts is bij een schuine wand een echte vraag',
        body: 'Aan welke kant de schuinte zit bepaalt hoe een kast onder een schuin dak opengaat, en daar wordt ook letterlijk op gezocht: in de Nederlandse zoeksuggesties (hl=nl, gl=nl, gemeten op 14 september 2026) staan zowel "kledingkast schuine wand links" als "kledingkast schuine wand rechts". Bij een kast uit een configurator is de zijde een harde beperking. Pickawood, op 14 september 2026 de nummer één in de index van DuckDuckGo op "kledingkast op maat schuin dak", schrijft het zelf op zijn productpagina: bij een schuin dak aan de linkerkant van de kast kan alleen een deur op kniehoogte worden gepland die naar rechts opent, en bij een schuinte aan de rechterkant precies andersom. De reden daarvoor is meetkundig. Een deur onder een schuinte is aan de ene kant hoger dan aan de andere, en dat hoge deel moet bij het opendraaien wegdraaien van het lage dakvlak. Het scharnier hoort dus aan de hoge kant. Bij maatwerk is dat geen beperking maar een keuze op de tekening: de deur wordt op de werkelijke schuinte gezaagd, of het lage deel krijgt lades in plaats van een deur.',
        bullets: [
          'Schuifdeuren hebben dit probleem niet, omdat ze in hun eigen vlak blijven. Ze geven wel maar de helft van de kast tegelijk vrij, en dat weegt onder een lage schuinte zwaarder dan in een gewone kamer.',
          'Een open vak of een uittrekelement heeft helemaal geen deurrichting, en is onder het laagste punt vaak de rustigste oplossing.',
          'Welke deur bij welke situatie past en wat er verder bij een zolder komt kijken staat in <a href="/blog/zolderinbouw-op-maat-7-dingen-vergeten">zolderinbouw op maat: zeven dingen die vaak vergeten worden</a>, van verwarming en verlichting tot ventilatie en de toegang tot leidingen.',
        ],
      },
      {
        heading: 'Onder een schuin dak is vrijwel niets haaks',
        body: 'Een schuine wand is bijna nooit een zuivere hoek: de dakhelling, de aansluiting op het knieschot en de vloer eronder lopen elk een paar millimeter anders dan de bouwtekening zegt. Elk paneel wordt daarom op de werkelijke hoek gezaagd, en de kast wordt getekend op de wand die er staat, inclusief plint, radiator en scheefstand. Dat is ook de reden dat de maatvoering bij JDG ter plaatse wordt opgenomen op basis van de situatie zoals die op dat moment is, en dat wijzigingen aan muren, vloeren, plafonds, leidingen of aansluitpunten ná het inmeten gemeld horen te worden. Dat staat in <a href="/algemene-voorwaarden">artikel 3 van de algemene voorwaarden van JDG</a>, versie 5 augustus 2026.',
        bullets: [
          'Wat dat betekent voor de aansluiting staat in dezelfde voorwaarden: bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak, en kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek zolang functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (artikel 9, lid 6). Een passtrook of een schaduwnaad langs een scheve dakschuinte is dus vakwerk en geen fout.',
          'Wat er gebeurt als de maat wél mis is, staat apart uitgeschreven in <a href="/blog/keuken-of-kast-past-niet-verkeerd-ingemeten">wat er gebeurt als de maat niet klopt of iets niet past bij de montage</a>.',
          'Ontwerp, productie en montage lopen bij JDG door dezelfde hand, vanuit de eigen werkplaats in Terheijden. Onder een schuinte telt dat zwaarder dan bij een rechte wand, omdat de hoek op de tekening dezelfde hoek moet zijn als die op de zaagtafel en die op zolder.',
        ],
      },
      {
        heading: 'Wanneer een kast onder een schuinte niet het goede antwoord is',
        body: 'Niet elke schuine hoek moet een kast worden, en dat hoor je liever vóór de tekening dan erna. JDG waarschuwt wanneer een gewenste uitvoering naar professioneel inzicht ondeugdelijk, onveilig of technisch onverantwoord is; die verplichting staat in <a href="/algemene-voorwaarden">artikel 9, lid 7 van de voorwaarden</a>. In de praktijk komen er een paar situaties terug waarin een andere oplossing beter werkt dan een kast.',
        bullets: [
          'De bruikbare hoogte zakt onder wat erin moet. Past er op de gekozen diepte geen hangvak meer, dan is een lage ladekast of een uittrekelement het antwoord, en niet een hangkast die je niet gebruikt.',
          'Achter het knieschot zit de enige toegang tot leidingen, bekabeling of de ruimte eronder. Dan hoort er een demontabel paneel in het ontwerp, en bepaalt die toegang de indeling.',
          'De ruimte is nog niet af. Wordt er na het inmeten nog geïsoleerd, betimmerd, gestukadoord of een vloer gelegd, dan verandert de maat. Meld dat dus voordat de productie begint.',
          'Het dakvlak zelf is het probleem. Vocht, een lekkende dakkapel of een constructie die nog aangepast moet worden is werk voor een aannemer of dakdekker. Een kast ervoor zetten verbergt dat en lost het niet op.',
        ],
      },
      {
        heading: 'Wat de bestaande antwoorden over schuine wanden niet zeggen',
        body: 'Op 14 september 2026 zijn vier zoekopdrachten over dit onderwerp gemeten in de index van DuckDuckGo: "kast onder schuin dak", "kledingkast op maat schuin dak", "kledingkast op maat schuine wand" en "inbouwkast op maat schuine wand". Die veertig posities zijn verdeeld over onder meer pickawood.com, kastenstudio.eu, maatkastenonline.nl, demaatfabriek.nl, kasten-op-maat.nl en doe-hetzelf.nl. Van de pagina’s die op die dag zijn gelezen noemt er geen enkele een bruikbare hoogte, legt er geen enkele uit hoe je een schuinte opmeet zodat er een kast van te tekenen is, en zegt er geen enkele wanneer een kast onder een schuinte niet de beste keuze is. Een assistent die dezelfde vraag krijgt antwoordt in dezelfde termen: gevraagd op 14 september 2026 komt daar "ja, maatwerk is de oplossing" uit, met een uitleg over standaardkasten die niet passen en zonder één maat. Deze meting is gedaan in de index van DuckDuckGo en niet in die van Google, en zegt dus iets over wie dit antwoord vandaag bezit, niet over de Nederlandse marktverhouding.',
        bullets: [
          'Er is ook geen vaste formulering voor de vraag. In dezelfde meting geven "kast schuin dak hoogte" en "kast op maat schuin dak kosten" nul zoeksuggesties, terwijl "kast onder schuin dak" er tien geeft, waarvan zes naar zelf maken of naar een bouwmarkt wijzen.',
          'Wat die pagina’s goed doen is laten zien dát het kan. Wat ze niet doen is je in staat stellen zelf te bepalen of het bij jou kan, en daar zijn de drie maten hierboven voor.',
        ],
      },
      {
        heading: 'Wat hier bewust niet staat',
        body: 'Op deze pagina staan geen bedragen. Wat een kast onder een schuinte kost hangt af van de breedte, de indeling, de deuren en het materiaal; die factoren staan per dienst op de site, bij <a href="/diensten/kledingkasten-op-maat">kledingkasten op maat</a> en bij <a href="/diensten/inloopkasten-op-maat">inloopkasten op maat</a>. De bedragen zelf zijn niet vrijgegeven en worden daarom niet geraden. Er staat ook geen minimale hoogte in centimeters als algemene regel, want die bestaat niet: de maat volgt uit wat erin moet, en dat verschilt per huishouden. Om dezelfde reden staat er geen hellingshoek waarboven of waaronder iets wel of niet zou kunnen. En er staat niets over dakconstructie, isolatie of het vervangen van een dakkapel, want dat is werk van een aannemer en niet van een interieurbouwer. Hoe lang een project duurt en wat er verder vaak gevraagd wordt staat op <a href="/veelgestelde-vragen">de veelgestelde vragen</a>.',
      },
      {
        heading: 'Waar dit antwoord vandaan komt',
        body: 'De projecten in deze tekst staan in het portfolio van JDG Maatwerk Interieur: vier opdrachten onder een schuinte, alle vier uit 2025 in West-Brabant, waaronder de zolderinbouw met hangvak, plankenkolom en drie lades op de foto bovenaan. De artikelen over maatvoering, tolerantie en de waarschuwingsplicht komen uit de algemene voorwaarden van JDG, versie 5 augustus 2026, die integraal op deze site staan; het artikelnummer staat er telkens bij zodat je elke regel zelf kunt nalezen in <a href="/algemene-voorwaarden">de volledige voorwaarden, met de artikelen 3 en 9</a>. De posities en de zoeksuggesties zijn op 14 september 2026 gemeten met hl=nl en gl=nl: de suggesties komen van Google, de posities uit de index van DuckDuckGo. De regel over de deurrichting bij een configurator is op diezelfde dag gelezen op de productpagina van Pickawood zelf. JDG Maatwerk Interieur is de eenmanszaak van Jonas de Graaf, ingeschreven in het Handelsregister onder KvK-nummer 93463332, met de werkplaats in Terheijden; ontwerp, productie en montage lopen door dezelfde hand.',
      },
    ],
    faq: [
      {
        q: 'Kan een kast onder een schuin dak?',
        a: 'Ja. Een kast op maat kan onder een dakschuinte, achter een knieschot, onder de schuine wang van een dakkapel en in de hoek waar een schuinte op een rechte wand uitkomt. Wat de uitkomst bepaalt is niet de hellingshoek maar de bruikbare hoogte: de hoogte die overblijft op de diepte die de kast krijgt. In het portfolio van JDG Maatwerk Interieur staan vier van zulke projecten, alle vier uit 2025 in West-Brabant.',
      },
      {
        q: 'Hoeveel hoogte heb ik nodig voor een kast onder een schuin dak?',
        a: 'Er bestaat geen algemene minimumhoogte, want de maat volgt uit wat erin moet. Hangen vraagt de meeste hoogte, een legbord minder en een lade het minst. De maat die beslist is de lengte van je langste kledingstuk aan een hanger, gemeten van de bovenkant van de roede tot de onderkant van het kledingstuk, plus de ruimte om de hanger er schuin uit te tillen. Dat getal bepaalt op welke diepte een hangvak onder de schuinte kan beginnen.',
      },
      {
        q: 'Hoe meet ik een schuine wand op?',
        a: 'Met drie maten ligt een schuine wand volledig vast. Eén: de hoogte aan de lage kant, van de vloer tot het punt waar het dakvlak begint, oftewel de hoogte van het knieschot. Twee: de hoogte aan de hoge kant, tot waar het dakvlak overgaat in het plafond. Drie: de horizontale afstand tussen die twee punten, over de vloer gemeten. Tussen die twee punten loopt de hoogte gelijkmatig op, dus uit die drie maten volgt de hoogte op elke diepte. Meet op drie plekken over de breedte, want een dakvlak is zelden over de hele lengte gelijk.',
      },
      {
        q: 'Kan er een draaideur onder de schuinte?',
        a: 'Dat kan, maar de zijde bepaalt de richting. Een deur onder een schuinte is aan de ene kant hoger dan aan de andere, en dat hoge deel moet bij het opendraaien wegdraaien van het lage dakvlak. Het scharnier hoort dus aan de hoge kant. Pickawood publiceert dezelfde regel voor zijn configurator: bij een schuin dak links kan alleen een deur op kniehoogte die naar rechts opent, en bij een schuinte rechts precies andersom (gelezen op 14 september 2026). Bij maatwerk is het een keuze op de tekening: de deur wordt op de werkelijke schuinte gezaagd, of het lage deel krijgt lades in plaats van een deur.',
      },
      {
        q: 'Kan een kast onder een dakkapel?',
        a: 'Ja. Een dakkapel geeft twee schuine wangen en een recht stuk ertussen, en die drie delen krijgen elk hun eigen maat. In het portfolio van JDG staan twee voorbeelden: twee ladekasten met een doorlopend blad onder de schuine wand van een dakkapel, en een kastenwand in een kinderkamer die rechts doorloopt onder de schuinte van de dakkapel. Beide zijn uit 2025, in West-Brabant.',
      },
      {
        q: 'Wat is een knieschotkast?',
        a: 'Een knieschot is de lage rechte wand waar het dakvlak op zolder op uitkomt. Een knieschotkast benut de ruimte tegen of achter dat schot, meestal met lades of uittrekbare elementen, omdat je daar niet rechtop in kunt kijken. Let er wel op wat er achter het schot zit: loopt daar de enige toegang tot leidingen, bekabeling of de ruimte eronder, dan hoort er een demontabel paneel in het ontwerp en bepaalt die toegang de indeling.',
      },
      {
        q: 'Sluit een kast wel netjes aan als de schuine wand niet recht is?',
        a: 'Onder een schuin dak is vrijwel niets haaks, en daarom wordt elk paneel op de werkelijke hoek gezaagd en de kast getekend op de wand die er staat. In de algemene voorwaarden van JDG, versie 5 augustus 2026, staat wat dat betekent voor de aansluiting: bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak, en kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek zolang functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (artikel 9, lid 6). Een passtrook of een schaduwnaad langs een scheve dakschuinte is dus vakwerk, geen fout.',
      },
      {
        q: 'Wanneer is een kast onder een schuin dak niet de beste oplossing?',
        a: 'In vier gevallen. Als de bruikbare hoogte op de gekozen diepte onder zakt wat erin moet, want dan is een lage ladekast of een uittrekelement beter dan een hangkast die je niet gebruikt. Als achter het knieschot de enige toegang tot leidingen of de ruimte eronder zit. Als de ruimte nog niet af is en er na het inmeten nog geïsoleerd, betimmerd, gestukadoord of een vloer gelegd wordt, want dan verandert de maat. En als het dakvlak zelf het probleem is: vocht of een lekkende dakkapel is werk voor een aannemer of dakdekker, en een kast ervoor verbergt het alleen. JDG waarschuwt wanneer een gewenste uitvoering naar professioneel inzicht ondeugdelijk, onveilig of technisch onverantwoord is (algemene voorwaarden, artikel 9, lid 7).',
      },
    ],
    verwijzingen: [
      { label: 'Kledingkasten op maat: nissen, schuine daken en tot aan het plafond', href: '/diensten/kledingkasten-op-maat' },
      { label: 'Inloopkasten op maat, ook achter de knieschotten op zolder', href: '/diensten/inloopkasten-op-maat' },
      { label: 'Zolderinbouw op maat: zeven dingen die vaak vergeten worden', href: '/blog/zolderinbouw-op-maat-7-dingen-vergeten' },
      { label: 'Zolderinbouw met lades tot in de punt van het dak', href: '/projecten/zolderinbouw-hangkast-lades' },
      { label: 'De algemene voorwaarden van JDG, met de artikelen 3 en 9', href: '/algemene-voorwaarden' },
      { label: 'De werkwijze: van inmeten en tekening tot montage en oplevering', href: '/werkwijze' },
      { label: 'Een situatie voorleggen met drie maten en een foto', href: '/contact' },
    ],
    hero: '/images/jdg-34.jpg',
    heroAlt: 'Open inbouwkast onder een schuin dak: links een leeg hangvak met zwarte roede waarvan de bovenkant schuin meeloopt met de dakhelling, rechts een kolom met vier witte plankvakken waarvan het bovenste schuin is afgezaagd, met daaronder drie lades en een uitgeschoven lade. Alles wit, eikenhouten vloer, rechts zicht op een slaapkamer.',
    readingMinutes: 8,
  },
  {
    gepubliceerd: true,
    slug: 'binnenhuisarchitect-interieurstylist-of-interieurbouwer',
    title: 'Heb ik een interieurstylist of binnenhuisarchitect nodig, of een interieurbouwer?',
    h1: 'Heb ik een interieurstylist of binnenhuisarchitect nodig, of een interieurbouwer?',
    metaTitle: 'Binnenhuisarchitect of interieurbouwer?',
    metaDescription:
      'Een ontwerper bedenkt hoe de ruimte wordt, een interieurbouwer maakt het meubel. Welke van de twee je nodig hebt, wat de drie beroepsnamen wettelijk wel en niet zeggen, en wie er inmeet als je ze allebei inschakelt.',
    publishedAt: '2026-09-25',
    updatedAt: '2026-09-25',
    author: 'JDG Maatwerk Interieur',
    category: 'proces',
    primaryKeyword: 'wat doet een binnenhuisarchitect',
    relatedKeywords: [
      'wat doet een interieurstylist',
      'verschil interieurstylist en binnenhuisarchitect',
      'verschil binnenhuisarchitect en interieurarchitect',
      'binnenhuisarchitect of interieurbouwer',
      'interieurstylist of interieurbouwer',
      'keuken laten ontwerpen',
      'binnenhuisarchitect keuken',
      'heb ik een binnenhuisarchitect nodig',
    ],
    intro:
      'Kort antwoord: een interieurstylist of binnenhuisarchitect bedenkt hoe een ruimte moet worden, een interieurbouwer maakt het meubel dat erin komt. Weet je al wat er moet komen en is de vraag alleen nog of het past en hoe het gemaakt wordt, dan heb je de maker nodig en de ontwerper niet. Verandert er iets aan de ruimte zelf, of weet je nog niet hoe die moet werken, dan is de ontwerper de eerste stap en de maker de tweede. Hieronder staat per geval wie je nodig hebt, wat die drie beroepsnamen wettelijk wel en niet over iemand zeggen, en wat er verandert in de verantwoordelijkheid als je ze allebei inschakelt.',
    sections: [
      {
        heading: 'Van die namen is er precies één wettelijk beschermd',
        body: 'Interieurstylist, binnenhuisarchitect, interieurontwerper, interieuradviseur: die woorden mag iedereen op zijn bus zetten. Eén woord uit dat rijtje niet. De Wet op de architectentitel zegt in artikel 23, lid 1 woordelijk: "Gerechtigd tot het voeren van de titel van architect, stedenbouwkundige, tuin- en landschapsarchitect of interieurarchitect of een afkorting van die titel, hetzij zonder nadere aanduiding, hetzij in woordsamenstellingen waarin de titel of een afkorting daarvan voorkomt, is uitsluitend hij die onder deze titel in het register staat ingeschreven." (Geldende tekst op wetten.overheid.nl, toestand 26 augustus 2021, gelezen 25 september 2026.) De wet noemt dus vier titels, en interieurarchitect is er één van. Binnenhuisarchitect, interieurstylist, interieurontwerper en interieuradviseur staan niet in dat rijtje. Eerlijk erbij: dezelfde zin verbiedt ook woordsamenstellingen waarin een beschermde titel zit, en of "binnenhuisarchitect" daaronder valt is een vraag voor een jurist, niet voor een meubelmaker. Voor jou verandert dat de praktijk niet, want de controle is dezelfde: het architectenregister is openbaar en doorzoekbaar op naam, dus je kunt in één handeling nakijken of iemand er echt in staat.',
        bullets: [
          'Beschermd volgens de wet: architect, stedenbouwkundige, tuin- en landschapsarchitect, interieurarchitect',
          'Niet in die opsomming genoemd: binnenhuisarchitect, interieurstylist, interieurontwerper, interieuradviseur',
          'Ook niet in die wet genoemd, en dat geldt net zo goed voor ons: meubelmaker, interieurbouwer, timmerman',
          'Een titel zegt iets over een inschrijving, niet over of iemand goed werk levert — vraag dus altijd ook om werk dat af is',
        ],
      },
      {
        heading: 'Wat een ontwerper doet dat een interieurbouwer niet doet',
        body: 'Een ontwerper kijkt naar de ruimte; een interieurbouwer kijkt naar het meubel dat erin moet. Dat verschil is groter dan het klinkt. Een binnenhuisarchitect of interieurontwerper werkt aan de plattegrond, de looproutes, het daglicht en het kunstlicht, en aan de samenhang tussen kamers die je los van elkaar nooit ziet. Hij of zij werkt bovendien vóórdat er een maker gekozen is, en heeft geen eigen belang bij wie het uiteindelijk bouwt. Dat laatste is een echt voordeel, en het is een voordeel dat wij niet kunnen bieden: wij verkopen ons eigen werk.',
        bullets: [
          'Indeling, doorbraken, wanden verplaatsen en waar de leidingen en aansluitpunten komen',
          'Een licht-, kleur- en materiaalplan dat over meerdere ruimtes klopt in plaats van over één meubel',
          'Afwegen tussen partijen zonder eigen belang bij de uitvoering',
          'Coördineren tussen aannemer, installateur, stukadoor en maker',
        ],
      },
      {
        heading: 'Wat een interieurbouwer doet dat een ontwerper niet doet',
        body: 'Inmeten op de situatie zoals die er werkelijk bij staat, de constructie bedenken, het maken en het monteren. Bij JDG is dat één lijn zonder tussenlagen: wat JDG tekent, bouwt JDG, en wat JDG bouwt, monteert JDG ook zelf, vanuit de eigen werkplaats in Terheijden. Het ontwerp van het meubel zit dus al in het traject. Na een vrijblijvend gesprek bij je thuis ligt er binnen één à twee weken een schets met materialen en een prijsopgave, en aanpassingen zijn onbeperkt tot je akkoord bent; dat staat stap voor stap in <a href="/werkwijze">de werkwijze</a>. Voor een kast, een keuken of een wandmeubel hoeft daar geen aparte ontwerper aan te pas te komen. Waar het werk van een maker het duidelijkst zichtbaar wordt, is tegen een vlak dat niet recht is: van de zestien projecten op <a href="/projecten">de projectenpagina</a> staan er zeven tegen zo\'n vlak — een schuine wand, een schuin dak, een dakkapel, een trapprofiel of een nis.',
        bullets: [
          'Definitief inmeten van de werkelijke ruimte, inclusief scheve muren en niveauverschillen',
          'De constructie: hoe het meubel draagt, hoe het scharniert en schuift en hoe het aan wand of vloer vastzit',
          'Produceren in de eigen werkplaats en op locatie monteren en afwerken',
          'Het ontwerp van het meubel zelf, als onderdeel van dezelfde opdracht',
        ],
      },
      {
        heading: 'De keuze, in drie vragen',
        body: 'Je hoeft hier geen vak voor te kennen. Loop deze drie langs, in deze volgorde, en je weet bij wie je begint.',
        bullets: [
          'Verandert er iets aan de ruimte zelf — een wand, een raam, een doorbraak, leidingen? Dan begin je bij een ontwerper of een architect, en komt de maker daarna.',
          'Weet je wat er moet komen, en is de vraag alleen of het past en hoe het gemaakt wordt? Dan heb je de maker nodig en de ontwerper niet.',
          'Gaat het om kleur, sfeer, losse meubels en accessoires, zonder dat er iets gebouwd of ingebouwd wordt? Dan is een stylist de juiste, en zijn wij het niet.',
          'Twijfel je tussen de laatste twee? Leg de situatie voor met drie maten en een foto. Blijkt daaruit dat de ruimte eerst een plan nodig heeft, dan hoor je dat — en dan is dat plan de eerste uitgave, niet het meubel.',
        ],
      },
      {
        heading: 'Schakel je ze allebei in: wie meet er dan in?',
        body: 'Een ontwerptekening is geen productietekening. Een plan van een ontwerper zegt waar de kast komt, hoe hoog hij is en in welke kleur; het zegt niet hoe de romp is opgebouwd, hoeveel speling er tegen een scheve muur nodig is of waar de kabeldoorvoer zit. De maker meet daarom altijd zelf opnieuw in vóór productie. Dat is geen wantrouwen naar de ontwerper, het is het punt waar de verantwoordelijkheid overgaat — en dat punt is bij JDG zwart op wit vastgelegd. Levert de opdrachtgever zelf maten, tekeningen of technische gegevens aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan (<a href="/algemene-voorwaarden">algemene voorwaarden, artikel 3, lid 3</a>), en komen de gevolgen van onjuiste of onvolledige aangeleverde informatie voor rekening van de opdrachtgever, tenzij JDG de fout kende of die als vakman redelijkerwijs had moeten herkennen (lid 4). Meet JDG zelf in, dan ligt dat risico bij JDG. Wat er dan precies gebeurt als de maat toch niet blijkt te kloppen, staat per artikel uitgeschreven in <a href="/blog/keuken-of-kast-past-niet-verkeerd-ingemeten">wat er gebeurt als de maat niet klopt of iets niet past bij de montage</a>. En het werkt ook de andere kant op: ontwerpen, tekeningen, renders en technische oplossingen die JDG maakt blijven eigendom van JDG en mogen zonder schriftelijke toestemming niet door derden worden uitgevoerd (artikel 3, lid 7). Vraag dat dus vooraf na bij iedereen die iets voor je tekent: van wie is de tekening straks, en mag een ander hem uitvoeren?',
        bullets: [
          'Laat de maker altijd zelf definitief inmeten, ook als er al een ontwerptekening ligt',
          'Spreek vooraf af wie welke maten aanlevert — dat bepaalt bij wie het meetrisico ligt',
          'Vraag van wie de tekening is na afloop, en of een andere partij hem mag uitvoeren',
        ],
      },
      {
        heading: 'Wanneer je geen van de drie nodig hebt',
        body: 'Staat de muur recht, is de ruimte leeg, zit er geen schoorsteen, nis of schuinte in de weg en past je opstelling toevallig in een standaardmaat, dan levert maatwerk je weinig op en een ontwerper nog minder. Koop dan kant-en-klaar. Voor de schuine gevallen staat het uitgewerkt in <a href="/blog/kast-onder-schuin-dak-of-schuine-wand">kan een kast onder een schuin dak of tegen een schuine wand</a>.',
      },
      {
        heading: 'Waar JDG in dit rijtje staat',
        body: 'JDG Maatwerk Interieur is meubelmaker en interieurbouwer. Eigen werkplaats in Terheijden, zelf tekenen, zelf bouwen, zelf plaatsen, en geen fabrikant of tussenpartij ertussen. Los interieuradvies of een stylingtraject zonder dat er iets gemaakt wordt, doet JDG niet — daar is een stylist of een ontwerper voor, en die vind je niet bij ons. Welk verschil er zit tussen een meubelmaker, een interieurbouwer en een keukenzaak, dus tussen de makers onderling, staat uitgewerkt in <a href="/blog/meubelmaker-interieurbouwer-of-keukenzaak">meubelmaker, interieurbouwer of keukenzaak: wie doet wat</a>.',
        bullets: [
          'Wel: keukens, kledingkasten, inloopkasten, tv-meubels, boekenkasten en badkamermeubels op maat, elk project vanaf schets',
          'Wel: het ontwerp van dat meubel, inbegrepen in hetzelfde traject',
          'Niet: los interieuradvies, styling of een inrichtingsplan zonder uitvoering',
          'Niet: doorverkopen van een fabriekskeuken uit een maatprogramma',
        ],
      },
    ],
    faq: [
      {
        q: 'Is binnenhuisarchitect een beschermde titel?',
        a: 'De wet noemt vier beschermde titels: architect, stedenbouwkundige, tuin- en landschapsarchitect en interieurarchitect (Wet op de architectentitel, artikel 23, lid 1). Het woord binnenhuisarchitect staat niet in die opsomming; interieurarchitect wel. Dezelfde bepaling gaat ook over woordsamenstellingen waarin een beschermde titel voorkomt, dus of binnenhuisarchitect daar juridisch onder valt, is niet aan ons om te beslissen. Wat je zelf kunt doen is de naam opzoeken in het architectenregister: dat is openbaar.',
      },
      {
        q: 'Moet ik eerst een ontwerper inschakelen voordat ik een keuken of kast op maat laat maken?',
        a: 'Nee. Het ontwerp van het meubel hoort bij de opdracht: na het eerste gesprek volgt binnen één à twee weken een schets met materialen en een prijsopgave, en aanpassingen zijn onbeperkt tot je akkoord geeft. Een ontwerper heb je nodig als de vraag groter is dan het meubel — een andere indeling, een wand die weg moet, of meerdere ruimtes die op elkaar moeten aansluiten.',
      },
      {
        q: 'Kan ik de tekening van mijn interieurontwerper meenemen naar een meubelmaker?',
        a: 'Dat kan, maar vraag de ontwerper eerst of dat mag: ook zijn of haar tekening kan intellectueel eigendom zijn. En houd er rekening mee dat de maker hoe dan ook zelf opnieuw komt inmeten. Lever je de maten of de tekening zelf aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan, en komen de gevolgen van onjuiste of onvolledige gegevens voor jouw rekening, tenzij JDG de fout kende of als vakman redelijkerwijs had moeten herkennen (algemene voorwaarden, artikel 3, leden 3 en 4).',
      },
      {
        q: 'Van wie is de tekening die JDG maakt?',
        a: 'Van JDG. Ontwerpen, tekeningen, renders en technische oplossingen blijven intellectueel eigendom van JDG en mogen zonder schriftelijke toestemming niet door derden worden uitgevoerd of gekopieerd (algemene voorwaarden, artikel 3, lid 7).',
      },
      {
        q: 'Doet JDG ook alleen advies, zonder dat er iets gemaakt wordt?',
        a: 'Nee. JDG tekent, bouwt en monteert; een los adviestraject of stylingopdracht zonder uitvoering hoort daar niet bij. Zoek je dat wel, dan is een interieurstylist, interieurontwerper of interieurarchitect de juiste partij.',
      },
      {
        q: 'Wat kost een binnenhuisarchitect?',
        a: 'Dat verschilt per bureau en daar doen wij geen uitspraak over — het is niet ons vak en niet onze prijslijst. Wat je wel altijd kunt vragen voordat je ergens aan tafel gaat: is het een uurtarief, een vast bedrag of een percentage van de uitvoeringssom, wat valt er precies onder, hoeveel aanpassingsrondes zitten erbij, en van wie is de tekening na afloop. Met die vier antwoorden kun je twee offertes echt vergelijken.',
      },
    ],
    verwijzingen: [
      { label: 'Meubelmaker, interieurbouwer of keukenzaak: wie doet wat?', href: '/blog/meubelmaker-interieurbouwer-of-keukenzaak' },
      { label: 'De werkwijze: van kennismaking en schets tot montage en oplevering', href: '/werkwijze' },
      { label: 'De algemene voorwaarden van JDG: artikel 3 over ontwerp, maatvoering en goedkeuring', href: '/algemene-voorwaarden' },
      { label: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?', href: '/blog/keuken-of-kast-past-niet-verkeerd-ingemeten' },
      { label: 'De projecten, met zeven van de zestien tegen een schuinte, een trapprofiel of een nis', href: '/projecten' },
      { label: 'Een situatie voorleggen met drie maten en een foto', href: '/contact' },
    ],
    hero: '/images/jdg-08.jpg',
    heroAlt: 'Zwevend bureau op maat tegen een witte wand: een eikenkleurig blad met een opstaande achterwand waarin twee ronde kabeldoorvoeren zitten, met een iMac erop. Onder het blad drie lades en daartussen een open vak met een toetsenbord en muis. Links een lamellenwand, rechts op de muur een thermostaat en een schakelaar, onderaan een stopcontact met snoer en een houten vloer.',
    readingMinutes: 6,
  },
]

/** Alleen wat daadwerkelijk gepubliceerd mag worden. Gebruik dit overal. */
export const livePosts = blogPosts.filter((p) => p.gepubliceerd)

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug && p.gepubliceerd)
