import { dienstSlugs, type DienstSlug } from './dienst-slugs'
import { cities } from './cities'

/**
 * Welke dienst×stad-pagina's er bestaan, en waarom precies die.
 *
 * ── Waarom dit bestand er is ──────────────────────────────────────────────
 * Er stonden 96 pagina's van het type /diensten/<dienst>/<stad>: zes diensten
 * maal zestien plaatsen. Gemeten op 02-09-2026:
 *
 *   - mediaan 168 woorden eigen tekst per pagina
 *   - ~80% woordoverlap tussen twee willekeurige steden
 *   - gemiddelde positie 23,6 (pagina 3) en nul klikken over 23-31 aug
 *   - 23 van de 27 niet-geïndexeerde URL's staan op "gevonden, momenteel niet
 *     geïndexeerd": Google heeft ze gezien en besloten ze niet op te nemen
 *
 * Meer tekst erop plakken loste dat niet op. Na het verdiepen ging de onderlinge
 * gelijkenis juist omhóóg (naar ~90%), omdat alle toegevoegde inhoud voor elke
 * stad hetzelfde is. Een plaatsnaam invullen in een sjabloon maakt een pagina
 * niet lokaal, en Google leest het ook niet zo.
 *
 * ── Wat er nu gebeurt ─────────────────────────────────────────────────────
 * Een dienst×stad-pagina bestaat alleen waar Search Console aantoonbare vraag
 * laat zien naar díe dienst in díe plaats. Alle overige combinaties leiden met
 * een 301 naar /werkgebied/<stad>, een pagina die alle zes diensten voor die
 * plaats behandelt en zelf ruim 900 woorden telt.
 *
 * ── De bron ───────────────────────────────────────────────────────────────
 * Google Search Console, property https://www.jdg-maatwerkinterieur.nl/,
 * 23 t/m 31 augustus 2026: 953 vertoningen over 110 zoekopdrachten, 3 klikken.
 * Achter elke regel hieronder staat de zoekopdracht met het aantal vertoningen
 * dat hem rechtvaardigt. Geen enkele regel is een aanname.
 *
 * ── Hoe dit meegroeit ─────────────────────────────────────────────────────
 * Bij elke GSC-uitlezing: komt er een combinatie bovendrijven met vraag, dan
 * gaat de regel hier erbij (en verdwijnt de redirect vanzelf, want beide worden
 * uit dit bestand afgeleid). Zakt een combinatie maanden weg zonder vertoningen,
 * dan mag hij eruit. Nooit een regel toevoegen "voor de zekerheid" — dat is
 * precies hoe het rooster van 96 is ontstaan.
 */

/**
 * Een verdiepte antwoordeenheid: het volledige antwoord op één gemeten zoekvraag,
 * op precies één dienst-in-plaats-pagina.
 *
 * Waarom dit per rij staat en niet in de sjabloon. Het rooster hierboven is ontstaan
 * omdat dezelfde tekst op zestien plaatsen de pagina's juist meer op elkaar liet
 * lijken. Een antwoordeenheid die op elke stad zou verschijnen herhaalt die fout in
 * een duurdere vorm. Hij hoort dus bij één rij, staat er alleen als de vraag gemeten
 * is, en de pagina's zonder eenheid veranderen niet.
 *
 * Elke tekst mag anker-markup dragen (zie lib/tekst.tsx): alleen interne paden, en
 * de pagina rendert React-elementen, geen HTML-injectie.
 */
export type Antwoordeenheid = {
  /** De gemeten zoekvraag waarop deze eenheid het beste Nederlandse antwoord wil zijn. */
  vraag: string
  kop: string
  /** Het antwoord in één zin, bovenaan, zodat het los van de pagina leesbaar blijft. */
  kern: string
  alineas: string[]
  /** Zichtbare vraag-en-antwoordblokken. Ze staan letterlijk zo ook in het FAQ-schema. */
  vragen: { q: string; a: string }[]
  /** Waar de getallen vandaan komen. Zichtbaar op de pagina, niet in een voetnoot. */
  bronregel: string
  /** De zin waarmee /werkgebied/<stad> naar deze eenheid verwijst. */
  verwijzing: string
}

export type RoosterRegel = {
  dienst: DienstSlug
  stad: string
  /** De gemeten zoekopdrachten die deze pagina rechtvaardigen. */
  bewijs: string[]
  /** Totaal aantal vertoningen 23-31 aug 2026 voor die zoekopdrachten. */
  vertoningen: number
  /**
   * Eigen alinea voor precies deze dienst in precies deze plaats.
   *
   * Dit is het verschil tussen een lokale pagina en een sjabloon met een
   * plaatsnaam erin. Elke alinea gaat over de woningvoorraad ter plaatse en wat
   * die betekent voor dít meubel — controleerbare geografie, geen claims over
   * eerder werk (DE WET art. 1.1). Zodra Jonas projecten aan een plaats kan
   * koppelen, komen die er hier bovenop en wordt het pas echt onvervangbaar.
   */
  lokaleTekst: string
  /**
   * Optioneel: het uitgewerkte antwoord op de gemeten zoekvraag van deze rij.
   * Alleen invullen waar de vraag gemeten is en er eigen materiaal onder ligt.
   */
  antwoordeenheid?: Antwoordeenheid
}

export const lokaalRooster: RoosterRegel[] = [
  // ── Breda: veruit de sterkste vraag, en met 10 km ook de dichtstbijzijnde stad
  { dienst: 'kledingkasten-op-maat', stad: 'breda', vertoningen: 97,
    lokaleTekst:
      'In het Ginneken en Princenhage staan veel herenhuizen met plafonds van drie meter of hoger. Een kastsysteem uit de winkel stopt op tweeënhalf, en die halve meter erboven is precies waar je koffers, dekbedden en seizoenskleding kwijt wilt. In de nieuwbouw van Teteringen en de Haagse Beemden is het omgekeerde het geval: rechte muren, maar krappe slaapkamers waar elke centimeter diepte telt. Beide vragen om tekenen op de ruimte die er is.',
    bewijs: ['kasten op maat breda (22)', 'kledingkast montage breda (19)', 'kledingkast op maat breda (16)', 'garderobekast op maat breda (14)', 'kast op maat breda (13)', 'kast op maat laten maken breda (13)'] },
  { dienst: 'keukens-op-maat', stad: 'breda', vertoningen: 18,
    lokaleTekst:
      'Een keuken in een Bredaas herenhuis loopt bijna altijd tegen hetzelfde aan: een schoorsteenkanaal in de zijmuur, een vloer die naar de tuin toe afloopt en een oude erker die je niet wilt dichtzetten. In de nieuwbouwwijken speelt iets anders, namelijk een vaste plek voor de aansluitingen waar de indeling zich naar moet voegen. Bij een keuken op maat wordt er ingemeten voordat er iets besteld is, dus die dingen zijn uitgangspunt in plaats van tegenvaller.',
    bewijs: ['keuken op maat laten maken breda (18)'] },
  { dienst: 'inloopkasten-op-maat', stad: 'breda', vertoningen: 17,
    lokaleTekst:
      'Een inloopkast ontstaat in Breda meestal op een van twee plekken: de kleinste slaapkamer van een gezinswoning die niemand meer gebruikt, of de ruimte achter de knieschotten op een zolder. Het eerste is een kwestie van drie wanden vullen en een deur verplaatsen; het tweede is precisiewerk onder een schuin dak. In allebei de gevallen bepaalt de wandlengte de prijs, niet de vierkante meters.',
    bewijs: ['inloopkast op maat breda (17)'] },
  { dienst: 'boekenkasten-en-wandmeubels', stad: 'breda', vertoningen: 15,
    lokaleTekst:
      'De woonkamers in de oudere Bredase wijken hebben vaak nissen naast de schouw, en dat is de klassieke plek voor een boekenkast: twee ongelijke gaten die je met standaardkasten nooit netjes vult. In een moderner huis gaat het eerder om één lange wand waar boeken, tv en opbergruimte in hetzelfde meubel moeten samenkomen. Om een raam, een radiator of een meterkast heen tekenen is bij maatwerk gewoon onderdeel van het ontwerp.',
    bewijs: ['boekenkasten op maat breda (15)'] },

  // ── Tilburg
  { dienst: 'kledingkasten-op-maat', stad: 'tilburg', vertoningen: 41,
    lokaleTekst:
      'Tilburg heeft veel negentiende-eeuwse arbeiderswoningen rond de oude textielbuurten. Smalle slaapkamers, muren die zelden haaks staan en plinten die je niet zomaar weghaalt. Een kast van 240 centimeter past daar niet in een gat van 240 centimeter, en dat merk je pas als hij er staat. In de appartementen aan de Piushaven en de nieuwbouw in de Reeshof zijn de muren wel recht, maar is de ruimte krap: daar wordt hoogte het antwoord.',
    bewijs: ['kledingkast montage tilburg (20)', 'kledingkast op maat tilburg (20)', 'kast op maat tilburg (1)'] },
  { dienst: 'tv-meubels-op-maat', stad: 'tilburg', vertoningen: 9,
    lokaleTekst:
      'Een zwevend tv-meubel vraagt om een muur die het gewicht draagt, en in de oudere Tilburgse woningen is dat lang niet altijd metselwerk. Dat is geen blokkade, maar het bepaalt wel hoe de ophanging wordt uitgevoerd. In appartementen speelt iets anders: de plek van de aansluitingen en de wens om alle bekabeling en apparatuur uit het zicht te houden, inclusief ventilatie voor de kastjes die dicht blijven.',
    bewijs: ['tv wandmeubel tilburg (9)'] },
  { dienst: 'inloopkasten-op-maat', stad: 'tilburg', vertoningen: 7,
    lokaleTekst:
      'In de rijtjeshuizen van Tilburg-Noord en de Reeshof is de kleinste slaapkamer meestal de kandidaat voor een inloopkast. Drie wanden, één deur en een raam dat je vrij wilt houden. In de bovenwoningen en zolderkamers rond het centrum is het de schuine kap die de indeling bepaalt: hangruimte aan de hoge kant, lades en schoenen onder de schuinte.',
    bewijs: ['inloopkast op maat tilburg (7)'] },
  { dienst: 'keukens-op-maat', stad: 'tilburg', vertoningen: 6,
    lokaleTekst:
      'Een keuken in een Tilburgs pand uit de textielperiode betekent bijna altijd rekening houden met een bestaande achteraanbouw, een niveauverschil naar de tuin of een schoorsteen die middenin de wand staat. In Berkel-Enschot en de nieuwere wijken is het speelveld ruimer, maar liggen de aansluitingen vast. In beide gevallen wordt er eerst ingemeten en daarna pas getekend.',
    bewijs: ['keuken op maat tilburg (4)', 'keuken op maat laten maken tilburg (1)', 'keuken laten maken tilburg (1)'] },

  // ── Bergen op Zoom: de verste plaats, maar met de hoogste losse keukenvraag
  { dienst: 'keukens-op-maat', stad: 'bergen-op-zoom', vertoningen: 26,
    lokaleTekst:
      'Bergen op Zoom heeft een beschermd stadsgezicht met honderden monumenten rond de Grote Markt. In zo\'n pand zijn scheve vloeren, niet-haakse hoeken en dikke, onregelmatige muren geen uitzondering maar de norm. Een fabriekskeuken vult dat op met panelen en kitranden; een keuken op maat wordt op die maten getekend, inclusief een werkblad dat de wandlijn volgt in plaats van hem tegenspreekt. In Halsteren en de naoorlogse wijken is de opgave rechter maar de ruimte krapper.',
    bewijs: ['keuken op maat bergen op zoom (26)'] },
  { dienst: 'tv-meubels-op-maat', stad: 'bergen-op-zoom', vertoningen: 10,
    lokaleTekst:
      'In de oudere panden van Bergen op Zoom zit de tv-wand vaak tussen twee bestaande elementen in: een schouw, een deur naar de gang, een raam dat tot laag doorloopt. Dat maakt de breedte niet vrij te kiezen. Een meubel op maat kan die restmaat juist gebruiken, waar een gekocht meubel er altijd net naast valt.',
    bewijs: ['tv wandmeubel bergen op zoom (10)'] },
  { dienst: 'kledingkasten-op-maat', stad: 'bergen-op-zoom', vertoningen: 3,
    lokaleTekst:
      'Slaapkamers in monumentale panden hebben hoge plafonds en vaak een raam of een deur op een plek die je niet kunt verplaatsen. Een kast tot aan het plafond wint daar het meeste, mits hij precies om die obstakels heen wordt getekend. In Gageldonk en Fort-Zeekant gaat het eerder om standaard-slaapkamermaten waar de diepte de beperking is.',
    bewijs: ['kledingkast op maat bergen op zoom (3)'] },
  { dienst: 'inloopkasten-op-maat', stad: 'bergen-op-zoom', vertoningen: 2,
    lokaleTekst:
      'Een inloopkast in een oud pand betekent meestal werken met een bestaande kamer die niet vierkant is. Dat is geen probleem zolang er per wand wordt getekend in plaats van met een systeem in vaste modules. Bergen op Zoom ligt op 35 kilometer van de werkplaats, de verste plaats in dit werkgebied, en dat verandert niets aan de werkwijze: inmeten gebeurt ter plaatse.',
    bewijs: ['inloopkast op maat bergen op zoom (2)'] },

  // ── Waalwijk
  { dienst: 'keukens-op-maat', stad: 'waalwijk', vertoningen: 13,
    lokaleTekst:
      'Waalwijk, Sprang-Capelle en Waspik hebben naast reguliere woonwijken veel lintbebouwing en voormalige boerderijen. Diepe, smalle plattegronden en aanbouwen die in stappen zijn aangegroeid, met als gevolg een keukenruimte die zelden een net rechthoek is. Een keuken op maat kan die vorm volgen; een fabriekskeuken laat er panelen in achter.',
    bewijs: ['keuken op maat waalwijk (13)'] },
  { dienst: 'kledingkasten-op-maat', stad: 'waalwijk', vertoningen: 9,
    lokaleTekst:
      'In de naoorlogse wijken van Waalwijk zijn de slaapkamers ruim genoeg maar de kastdiepte krap, en zit er boven een standaardkast al gauw veertig centimeter ongebruikte hoogte. Dat is de goedkoopste opbergruimte die er is, want de wand staat er toch al. Doorbouwen tot het plafond kost materiaal, geen extra vierkante meters.',
    bewijs: ['kledingkast op maat waalwijk (8)', 'kasten op maat waalwijk (1)'] },
  { dienst: 'tv-meubels-op-maat', stad: 'waalwijk', vertoningen: 8,
    lokaleTekst:
      'Een tv-wand in een doorzonwoning moet meestal tussen een deur en een raam passen, en dat is precies de maat die geen enkel gekocht meubel heeft. Op maat betekent hier vooral: de restmaat volledig gebruiken, en de apparatuur en bekabeling wegwerken zonder de ventilatie te vergeten.',
    bewijs: ['tv wandmeubel waalwijk (8)'] },
  { dienst: 'inloopkasten-op-maat', stad: 'waalwijk', vertoningen: 6,
    lokaleTekst:
      'Waalwijk ligt op dertig kilometer van de werkplaats en heeft veel woningen met een ruime overloop of een vierde kamer die niet als slaapkamer wordt gebruikt. Dat zijn de plekken waar een inloopkast het meest oplevert: bestaande vierkante meters die niets doen, omgezet in hangruimte, lades en schoenenschappen.',
    bewijs: ['inloopkast op maat waalwijk (6)'] },
  { dienst: 'badkamermeubels-op-maat', stad: 'waalwijk', vertoningen: 1,
    lokaleTekst:
      'Badkamers in de oudere Waalwijkse woningen zijn vaak smal en hebben de aansluitingen op een vaste plek. Een meubel op maat kan de volle breedte tussen twee muren pakken, inclusief de nis of de schuine hoek, waar een standaardmeubel altijd een kier laat waar het vocht in trekt.',
    bewijs: ['badkamermeubels waalwijk (1)'] },

  // ── Roosendaal
  { dienst: 'tv-meubels-op-maat', stad: 'roosendaal', vertoningen: 13,
    lokaleTekst:
      'In de vooroorlogse Roosendaalse woningen staat de tv meestal in de voorkamer, met een erker of een schouw die de vrije wand beperkt. In de ruimere naoorlogse wijken is de wand juist lang en leeg, en gaat het erom dat het meubel niet verdrinkt. Twee heel verschillende opgaven, waar in beide gevallen de maat van de wand het ontwerp bepaalt.',
    bewijs: ['tv wandmeubel roosendaal (13)'],
    antwoordeenheid: {
      vraag: 'tv wandmeubel roosendaal',
      kop: 'Een tv-wandmeubel in Roosendaal: eerst de wand, dan de televisie',
      kern:
        'Bij een tv-wandmeubel op maat bepaalt de wand de breedte en de televisie alleen de indeling. De vuistregel dat het meubel 15 tot 20 centimeter aan weerszijden breder moet zijn dan het scherm helpt je kiezen uit een bestaande maatreeks; hij helpt je niet bij een wand met een erker, een schouw of een radiator erin.',
      alineas: [
        'Die vuistregel is geen bouwkundige norm maar een keuzehulp, en dat verklaart waarom hij overal precies hetzelfde luidt. De samenvatting die Google op 30 september 2026 boven de vraag "hoeveel groter moet je tv-meubel zijn dan je tv" zette, noemt 15 tot 20 centimeter aan weerszijden, een hoogte van 40 tot 55 centimeter en een diepte van 35 tot 45 centimeter. De pagina’s waar die samenvatting naar verwijst zeggen hetzelfde. Zinnig advies — zolang je uit een reeks kiest.',
        'En dat is wat eronder zit. De twee Nederlandse aanbieders die op 30 september 2026 bovenaan stonden op de zoekopdracht "tv-meubel op maat" verkopen hun maatwerk in een raster: breedtes van 120 tot 400 centimeter met de kleinste stap van 10 centimeter, en dieptes van 30, 35, 40 of 45 centimeter. De een biedt dertien breedtes aan, de ander drieëntwintig. Een regel die zegt "neem twintig centimeter extra" is dan handig, want je hoeft alleen de eerstvolgende stap te pakken. Alleen komt een woonkamerwand zelden op een veelvoud van tien centimeter uit, en wat overblijft is een kier of een strook wand die niets doet. Wat er dan wél gebeurt staat op <a href="/diensten/tv-meubels-op-maat">de pagina over tv-meubels op maat</a>: de maat komt van de wand.',
        'In Roosendaal levert dat twee verschillende opgaven op, en het is niet hetzelfde probleem. In de vooroorlogse woningen rond de binnenstad en in Kalsdonk staat de televisie meestal in de voorkamer, waar de vrije wand de restmaat is tussen een erker, een schouw of de deur naar de gang: de breedte ligt vast voordat er iets getekend is, en de vraag is wat er binnen die maat nog past. In de ruimere naoorlogse wijken is de wand juist lang en leeg, en is de vraag omgekeerd — hoe voorkom je dat het meubel erin verdwijnt. In het eerste geval bepaalt de maat het ontwerp, in het tweede de verhouding.',
        'Een vlak dat niet recht is, is in dit werk eerder regel dan uitzondering. Van de zestien projecten op <a href="/projecten">de projectenpagina</a> zijn er zeven gemaakt tegen een vlak dat niet recht is: een nis, een schuine wand, een dakkapel of een trapprofiel. Die telling is van 15 september 2026 en aan de lage kant, want alleen projecten waarvan de beschrijving zelf zo’n vlak noemt tellen mee. Bij het inmeten thuis wordt daarom niet één breedte opgenomen, maar de werkelijke wandlijn, inclusief plint, radiator en scheefstand.',
      ],
      vragen: [
        {
          q: 'Hoeveel groter moet een tv-meubel zijn dan de tv?',
          a: 'De gangbare regel is 15 tot 20 centimeter extra aan weerszijden van het scherm, en voor een rustiger beeld anderhalf tot twee keer de schermbreedte; zo stond het op 30 september 2026 ook in de samenvatting die Google boven deze vraag toont. Bij een meubel dat je koopt is dat de juiste vraag, want je kiest uit vaste maten. Bij een wandvullend meubel op maat is het de verkeerde vraag: daar ligt de breedte al vast door de wand, en gaat het erom hoeveel van die breedte gesloten wordt, hoeveel open blijft, en waar het scherm binnen dat vlak zijn plek krijgt.',
        },
        {
          q: 'Waarom zijn tv-meubels zo laag, en hoeveel ruimte hoort er tussen het meubel en de tv?',
          a: 'De gangbare hoogte is 40 tot 55 centimeter (dezelfde samenvatting, 30 september 2026), en de reden erachter is de enige die telt: het midden van het scherm hoort op ooghoogte als je op de bank zit. Dat is geen vaste maat maar een gevolg van jouw zithoogte en kijkafstand. Bij maatwerk wordt die hoogte daarom bij het inmeten bepaald, met de bank die er staat, in plaats van uit een tabel overgenomen.',
        },
        {
          q: 'Past een standaardmaat op mijn wand?',
          a: 'Alleen als je wand toevallig op een veelvoud van tien centimeter uitkomt. De twee best gerangschikte Nederlandse aanbieders van een tv-meubel op maat leverden op 30 september 2026 in breedtes van 120 tot 400 centimeter met de kleinste stap van 10 centimeter, en in dieptes van 30, 35, 40 en 45 centimeter. Is je wand 268 centimeter, dan houd je bij de dichtstbijzijnde maat acht centimeter over: aan één kant, of twee keer vier. Bij een losstaand meubel valt dat niet op; bij een wandvullend meubel is die kier het eerste wat je ziet.',
        },
        {
          q: 'Kan een zwevend tv-wandmeubel aan elke muur?',
          a: 'Niet zonder meer. Een zwevend meubel hangt met zijn eigen gewicht én dat van de apparatuur aan de wand, dus wat er achter het stucwerk zit — metselwerk, een voorzetwand of een dichtgezet schouwkanaal — bepaalt hoe de ophangconstructie eruitziet. Dat is zelden een reden om het niet te doen, maar het is wel iets wat je vóór het ontwerp wilt weten en niet tijdens de montage. Het wordt bij het inmeten vastgesteld.',
        },
        {
          q: 'Wanneer is een tv-wandmeubel op maat niet de beste keuze?',
          a: 'Als je wand recht en vrij is, de breedte dicht bij een standaardmaat ligt, er geen erker, schouw, radiator of meterkast in de weg zit en je vooral een plek zoekt voor een televisie en een soundbar. Dan lost maatwerk een probleem op dat je niet hebt. Het wordt pas interessant zodra de wand de maat dicteert, de bekabeling door de wand moet, of het meubel tegelijk boekenkast of haardwand is. JDG ontwerpt dat meubel als onderdeel van de bouwopdracht; los interieuradvies of een inrichtingsplan zonder dat er iets gemaakt wordt hoort niet tot het aanbod.',
        },
      ],
      bronregel:
        'Gemeten op 30 september 2026: de zoekopdrachten "tv wandmeubel roosendaal" en "tv-meubel op maat" in Google Nederland (waarneming via DataForSEO), de samenvatting die Google boven "hoeveel groter moet je tv-meubel zijn dan je tv" toont, en de gepubliceerde maatreeksen van de twee best gerangschikte Nederlandse aanbieders van een tv-meubel op maat. De projecttelling is van 15 september 2026.',
      verwijzing:
        'Waarom in een Roosendaalse voorkamer met een erker of een schouw de wand de breedte bepaalt en niet de televisie, staat uitgewerkt op de pagina over <a href="/diensten/tv-meubels-op-maat/roosendaal">een tv-wandmeubel op maat in Roosendaal</a>.',
    } },
  { dienst: 'kledingkasten-op-maat', stad: 'roosendaal', vertoningen: 5,
    lokaleTekst:
      'De arbeiderswoningen in Kalsdonk en rond de binnenstad hebben smalle slaapkamers waar een kast van standaarddiepte de deur blokkeert. Ondiepere kasten met een andere binnenindeling lossen dat op, iets wat je alleen kunt doen als de kast op de kamer wordt getekend in plaats van andersom.',
    bewijs: ['kledingkast op maat roosendaal (5)'] },

  // ── Etten-Leur
  { dienst: 'keukens-op-maat', stad: 'etten-leur', vertoningen: 8,
    lokaleTekst:
      'Etten-Leur is in enkele decennia sterk gegroeid, waardoor de woningvoorraad van vooroorlogs tot pas opgeleverd loopt. In Schoenmakershoek en de nieuwere wijken liggen de aansluitingen vast en is de vorm recht; in de oudere kern is dat precies andersom. Wat hetzelfde blijft: er wordt eerst gemeten en daarna getekend.',
    bewijs: ['keukens op maat etten leur (8)'] },
  { dienst: 'kledingkasten-op-maat', stad: 'etten-leur', vertoningen: 6,
    lokaleTekst:
      'Inbouwkasten zijn in Etten-Leur een veelgestelde vraag, en dat is logisch: veel woningen hebben een nis naast de schoorsteen of een ruimte boven de trap die met een losse kast nooit netjes te vullen is. Een inbouwkast gebruikt die restruimte volledig en loopt visueel door met de wand.',
    bewijs: ['inbouwkasten etten leur (5)', 'kasten op maat etten leur (1)'] },

  // ── Dongen: de enige plaats met echte badkamermeubelvraag
  { dienst: 'badkamermeubels-op-maat', stad: 'dongen', vertoningen: 16,
    lokaleTekst:
      'Dongen heeft naast de dorpskern buitengebieden met langgevelboerderijen, en daarin zijn badkamers vaak later ingebouwd in een ruimte die daar niet voor bedoeld was: een schuine wand, een balk op ooghoogte, een raam op een rare plek. Een wastafelmeubel op maat past zich daaraan aan, met een vochtbestendig corpus en een blad dat de wandlijn volgt.',
    bewijs: ['badkamermeubel dongen (9)', 'badkamermeubels dongen (7)'] },

  // ── Oosterhout
  { dienst: 'badkamermeubels-op-maat', stad: 'oosterhout', vertoningen: 4,
    lokaleTekst:
      'In de Oosterhoutse wijken uit de jaren zeventig en tachtig zijn de badkamers klein en de indelingen vast. De winst zit daar in de breedte volledig gebruiken en in lades in plaats van deurtjes, zodat je bij de achterkant van de kast kunt zonder op je knieën te gaan.',
    bewijs: ['badkamermeubels oosterhout (4)'] },
  { dienst: 'keukens-op-maat', stad: 'oosterhout', vertoningen: 2,
    lokaleTekst:
      'De naoorlogse wijken rond Slotjes en Dommelbergen hebben keukens die voor een ander huishouden zijn ontworpen: apart, klein en met de wasmachine erin. De vraag is er meestal niet één van een nieuwe keuken op dezelfde plek, maar van een andere indeling — en dat is precies waar maatwerk begint.',
    bewijs: ['keuken op maat oosterhout (2)'] },

  // ── Terheijden: de vestigingsplaats. Vraag is er, maar op vaktermen
  //    ('meubelmaker terheijden', 'interieurbouwer terheijden') en niet per
  //    dienst — die woorden staan nu op /werkgebied/terheijden. De twee
  //    hoofddiensten houden hier wel een eigen pagina, omdat de werkplaats hier
  //    letterlijk staat en de afstand nul is.
  { dienst: 'keukens-op-maat', stad: 'terheijden', vertoningen: 26,
    lokaleTekst:
      'Terheijden is de plaats waar de werkplaats staat, aan de Bredaseweg. Voor een keuken hier is de afstand nul: inmeten, tussentijds langskomen om iets te zien en plaatsen kosten geen reisdag. Het dorp heeft naast lintbebouwing langs de Hoofdstraat en de dijk ook nieuwere wijken, dus de opgaven lopen uiteen van een oude aanbouw tot een strakke nieuwbouwplattegrond.',
    bewijs: ['interieur op maat terheijden (14)', 'interieurs op maat terheijden (12)'] },
  { dienst: 'kledingkasten-op-maat', stad: 'terheijden', vertoningen: 26,
    lokaleTekst:
      'Voor een kast op maat in Terheijden staat de werkplaats letterlijk in het dorp. Dat betekent dat je de kast kunt komen bekijken voordat hij de deur uit gaat, en dat een aanpassing tijdens de bouw geen logistieke operatie is. In de oudere woningen langs de dijk zijn schuine kappen en ongelijke muren de regel; in de nieuwere wijken is hoogte de winst.',
    bewijs: ['interieur op maat terheijden (14)', 'interieurs op maat terheijden (12)'] },

  // ── Zevenbergen en Raamsdonksveer: kleine maar echte keukenvraag
  { dienst: 'keukens-op-maat', stad: 'zevenbergen', vertoningen: 2,
    lokaleTekst:
      'Zevenbergen is de grootste kern van gemeente Moerdijk, met een oude haven- en suikerkern en daaromheen nieuwbouw. In de lintbebouwing zijn de huizen diep en smal, waardoor een keuken vaak een doorloopruimte is in plaats van een kamer. Een opstelling op maat kan die doorloop vrijhouden en toch de volle wand benutten.',
    bewijs: ['keuken zevenbergen (1)', 'keuken kopen zevenbergen (1)'] },
  { dienst: 'keukens-op-maat', stad: 'raamsdonksveer', vertoningen: 1,
    lokaleTekst:
      'Raamsdonksveer ligt op vijf kilometer van de werkplaats en is daarmee de dichtstbijzijnde grotere plaats. Veel woningen uit de jaren zestig en zeventig met een vaste keukenindeling en een aparte, kleine keuken. De grootste winst zit hier meestal in het doorbreken naar de woonkamer, waarna de keuken pas echt op maat getekend kan worden.',
    bewijs: ['keukens raamsdonksveer (1)'] },
  { dienst: 'keukens-op-maat', stad: 'gilze', vertoningen: 1,
    lokaleTekst:
      'Gilze is een dorpskern tussen Breda en Tilburg met veel gezinswoningen uit dezelfde bouwperiodes. Dat betekent herhaalde plattegronden, maar niet dezelfde wensen: de een wil een eiland en meer werkblad, de ander vooral bergruimte tot aan het plafond. De maat van de ruimte ligt vast, de indeling niet.',
    bewijs: ['keuken gilze (1)'] },
]

const sleutel = (dienst: string, stad: string) => `${dienst}::${stad}`
const set = new Set(lokaalRooster.map((r) => sleutel(r.dienst, r.stad)))

/** Bestaat er een eigen pagina voor deze combinatie? */
export function heeftLokalePagina(dienst: string, stad: string) {
  return set.has(sleutel(dienst, stad))
}

/** Het bewijs achter één pagina, zodat de reden vindbaar blijft. */
export function roosterRegel(dienst: string, stad: string) {
  return lokaalRooster.find((r) => r.dienst === dienst && r.stad === stad)
}

/** Steden met een eigen pagina voor deze dienst, sterkste vraag eerst. */
export function stedenVoorDienst(dienst: string) {
  return lokaalRooster
    .filter((r) => r.dienst === dienst)
    .sort((a, b) => b.vertoningen - a.vertoningen)
    .map((r) => r.stad)
}

/**
 * De verdiepte antwoordeenheden voor deze plaats, sterkste vraag eerst.
 * De stadpagina verwijst er in lopende tekst naar; een pagina waar niemand
 * naartoe wijst wordt niet gevonden.
 */
export function antwoordeenhedenVoorStad(stad: string) {
  return lokaalRooster
    .filter((r) => r.stad === stad && r.antwoordeenheid)
    .sort((a, b) => b.vertoningen - a.vertoningen)
    .map((r) => ({ dienst: r.dienst, eenheid: r.antwoordeenheid! }))
}

/** Diensten met een eigen pagina in deze plaats, sterkste vraag eerst. */
export function dienstenVoorStad(stad: string) {
  return lokaalRooster
    .filter((r) => r.stad === stad)
    .sort((a, b) => b.vertoningen - a.vertoningen)
    .map((r) => r.dienst)
}

/**
 * Alle combinaties die géén eigen pagina (meer) hebben, met hun bestemming.
 * next.config.ts maakt hier permanente redirects van, zodat een gesnoeide URL
 * echt een 308 teruggeeft in plaats van stilletjes iets anders te renderen.
 */
export function gesnoeideCombinaties(): { van: string; naar: string }[] {
  const uit: { van: string; naar: string }[] = []
  for (const d of dienstSlugs) {
    for (const c of cities) {
      if (!heeftLokalePagina(d, c.slug)) {
        uit.push({ van: `/diensten/${d}/${c.slug}`, naar: `/werkgebied/${c.slug}` })
      }
    }
  }
  return uit
}
