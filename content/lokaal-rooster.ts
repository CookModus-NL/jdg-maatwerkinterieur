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
  /**
   * Optioneel: de zin waarmee /werkgebied/<stad> naar DEZE dienst×stad-pagina wijst,
   * ook als er (nog) geen verdiepte antwoordeenheid onder ligt.
   *
   * Waarom dit los van `antwoordeenheid.verwijzing` bestaat. Op twee van de gemeten
   * zoekopdrachten verschijnen twee EIGEN pagina's naast elkaar in de zoekuitslag: de
   * dienst×stad-pagina en de stadpagina. Zolang beide op dezelfde vraag meedingen
   * verdeelt de site haar eigen signaal over twee URL's, en wint geen van de twee.
   * De remedie is niet samenvoegen (dat vraagt eerst onderzoek naar de bedoeling achter
   * de vraag) maar AANWIJZEN: de zwakkere pagina zegt in lopende tekst, met een
   * beschrijvende linktekst, welke pagina het volledige antwoord draagt. Een
   * antwoordeenheid schrijven is daarvoor niet nodig en zou een andere ingreep zijn.
   *
   * Vul hem dus alleen waar Search Console twee eigen URL's op dezelfde vraag laat zien.
   * Rijen zonder dit veld veranderen niet. Anker-markup mag (zie lib/tekst.tsx): alleen
   * interne paden, en het volledige pad staat er letterlijk, zodat een controle die op
   * het pad zoekt de verwijzing ook in de bron kan vinden.
   */
  verwijzing?: string
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
      'Voor een kledingkast levert dat twee heel verschillende opgaven op. Waar de muren niet haaks staan is de bruikbare breedte geen getal maar een reeks: bij de vloer een andere dan tegen het plafond, en dat verschil bepaalt of de kast aansluit of met een kier komt te staan. Waar de muren wel recht zijn maar de kamer krap is, verschuift de winst naar boven: de ruimte tussen een systeemkast en het plafond is dan vaak het enige wat nog vrij is. Welke van de twee het bij jou is, blijkt bij het inmeten en niet uit de bouwperiode van de straat.',
    bewijs: ['kledingkast montage tilburg (20)', 'kledingkast op maat tilburg (20)', 'kast op maat tilburg (1)'],
    antwoordeenheid: {
      vraag: 'kledingkast op maat tilburg',
      kop: 'Een kledingkast op maat in Tilburg: de maat is het probleem niet, het opmeten wel',
      kern:
        'Bij een kledingkast op maat is de buitenmaat zelden de vraag: de aanbieders die bovenaan de Nederlandse zoekuitslag staan maken hem op de millimeter. Wat per aanbieder verschilt is wie jouw slaapkamer opmeet, wat er bij je thuis wordt afgeleverd en of de kast mag afwijken van een rechthoek. Die drie dingen bepalen of hij past in een kamer waarvan de muren niet haaks staan.',
      alineas: [
        '"Op maat" is bij een kledingkast geen marketingwoord meer, in ieder geval niet als het over de buitenmaat gaat. jouwmaatkast.nl, op 30 september 2026 het hoogste organische resultaat in de Nederlandse zoekuitslag op "kledingkast op maat", zet bij de constructie van zijn kasten letterlijk "Afmetingen: tot op de millimeter nauwkeurig". De vraag is dus niet of een kast van 268,4 centimeter te maken is. De vraag is wie dat getal bepaalt, en wat ermee gebeurt als de kamer op de ene hoogte 268,4 en op de andere 271 meet.',
        'Kastengigant.nl, ook in die uitslag, legt dat eerlijker uit dan de meeste: "Meet de hoogte, breedte en diepte op meerdere punten, want muren en vloeren zijn niet altijd recht. Noteer de kleinste maat." Dat is goed advies, en het vertelt tegelijk wat je inlevert. De kleinste maat opgeven betekent dat het verschil tussen de breedste en de smalste plek van de kamer als kier naast de kast overblijft. Bij een kast die op de ruimte wordt getekend verdwijnt datzelfde verschil in het paneel dat tegen de muur aan komt, en niet ernaast. Wat dat in de praktijk vraagt staat op <a href="/diensten/kledingkasten-op-maat">de pagina over kledingkasten op maat</a>.',
        'Achter dezelfde twee woorden zitten heel verschillende afspraken, alle vier gelezen op 30 september 2026. Bij kastengigant.nl meet je zelf en geldt: "Bij twijfel kun je een specialist laten inmeten voordat je definitief bestelt." Bij mselectkasten.nl is inmeten een aparte, betaalde service, bij een levertijd van zes tot acht weken. Bij jouwmaatkast.nl wordt de kast "tot aan de trottoirrand geleverd", met een montagehandleiding "waarmee je de kast heel eenvoudig zelf in elkaar kunt zetten"; een monteur is een losse optie. Slaapkamerweb.nl monteert wel en belooft dat de kast "binnen één uur klaar voor gebruik" is. Bij JDG is er op die vragen één antwoord: inmeten bij jou thuis, bouwen in de eigen werkplaats in Terheijden, monteren door JDG zelf. Wie tekent bouwt, en wie bouwt monteert; dat traject staat stap voor stap op <a href="/werkwijze">de werkwijze</a>.',
        'Waar het uiteindelijk op vastloopt is niet de breedte maar de aansluiting, en één aanbieder publiceert die grens per uitvoering. jouwmaatkast.nl geeft zijn instapuitvoering "Stelvoeten in plaats van een verstelbaar voetstuk" en meldt dat de elementen "niet onafhankelijk van elkaar in diepte verstelbaar" en niet onafhankelijk in hoogte verstelbaar zijn; uitsparingen komen pas bij de duurdere uitvoeringen terug, als "Plintuitsparingen en andere uitsparingen mogelijk". Dat is precies het rijtje dat je nodig hebt bij een aflopende vloer, een plint die blijft zitten of een muur die naar boven toe wegloopt. Hoe vaak zo\'n vlak voorkomt is te zien op <a href="/projecten">de projectenpagina</a>: van de zestien projecten staan er zeven tegen een vlak dat niet recht is, en van de zes kast- en zolderinbouwprojecten zijn dat er vier. Die telling is van 30 september 2026 en aan de lage kant, want alleen projecten waarvan de zichtbare beschrijving zelf een schuinte, een dakkapel, een trapprofiel of een nis noemt tellen mee.',
      ],
      vragen: [
        {
          q: 'Wat betekent "op maat" bij een kledingkast eigenlijk?',
          a: 'Bij de aanbieders die bovenaan de Nederlandse zoekuitslag staan betekent het dat de buitenmaat op de millimeter wordt gemaakt; jouwmaatkast.nl schrijft dat op 30 september 2026 letterlijk zo op. Wat het niet automatisch betekent: dat iemand anders je kamer opmeet, dat de kast in elkaar aankomt, of dat hij mag afwijken van een rechthoek. Die drie punten staan per aanbieder anders geregeld en bepalen samen of de kast past. Vraag ze dus los uit voordat je bestelt: wie meet, wat komt er aan, en wat gebeurt er met een muur die niet recht is.',
        },
        {
          q: 'Moet ik mijn slaapkamer zelf opmeten?',
          a: 'Bij JDG niet: het inmeten hoort bij het eerste, vrijblijvende bezoek bij jou thuis, en de kast wordt daarna getekend op wat er werkelijk staat. Bij de webshops in dezelfde zoekuitslag is het vaak andersom. Kastengigant.nl laat je zelf meten en voegt toe: "Bij twijfel kun je een specialist laten inmeten voordat je definitief bestelt." Bij mselectkasten.nl is inmeten een aparte, betaalde service. Meet je zelf, meet dan op meerdere punten en op meerdere hoogtes, en weet dat het verschil tussen de grootste en de kleinste maat erbij inschiet: het advies is om de kleinste op te geven.',
        },
        {
          q: 'Komt een kledingkast op maat in elkaar aan, of moet ik hem zelf opbouwen?',
          a: 'Dat verschilt per aanbieder, en in de zoekuitslag op "kledingkast op maat" van 30 september 2026 is het alle kanten op te vinden. jouwmaatkast.nl levert "tot aan de trottoirrand", met een montagehandleiding erbij "waarmee je de kast heel eenvoudig zelf in elkaar kunt zetten"; een monteur van diezelfde partij kan erbij gevraagd worden. Slaapkamerweb.nl monteert de kast en belooft dat hij "binnen één uur klaar voor gebruik" is. JDG monteert altijd zelf, inclusief afkitten en schoonmaken. Vraag het na voordat je bestelt, want bij een kast tot het plafond zit het werk in het stellen en opbouwen, niet in de kast.',
        },
        {
          q: 'Wat is er anders aan een kledingkast in een ouder Tilburgs huis?',
          a: 'Niet de kast maar het huis, en dat verschilt per woning in plaats van per stad. Bij het inmeten komt steeds hetzelfde rijtje naar boven: een vloer die over de breedte van de kamer wegloopt, een plint die blijft zitten, een muur die naar boven toe wijkt, en soms een plafond dat hoger zit dan een systeemkast reikt. Elk van die vier verandert de kast zelf, niet alleen het getal op de bon. Welke ervan bij jou meespelen staat niet in een postcode; dat blijkt bij de inmeting. De werkplaats in Terheijden ligt op 25 kilometer van Tilburg, en die rit hoort bij de kennismaking.',
        },
        {
          q: 'Wanneer is een kledingkast op maat niet de beste keuze?',
          a: 'Als de wand recht en vrij is, de kamer niet krap, het plafond binnen het bereik van een systeemkast blijft, er geen plint, radiator, schuine wand of meterkast in de weg zit, en je het opbouwen zelf wilt doen. Dan koop je bij een configurator sneller iets wat past, en lost maatwerk een probleem op dat je niet hebt. Het wordt pas interessant zodra de kamer de maat dicteert, de kast tot het plafond moet, of de aansluiting tegen een vlak komt dat niet recht is. Eén grens hoort er los bij: JDG ontwerpt het meubel als onderdeel van de bouwopdracht. Los interieuradvies, styling of een inrichtingsplan zonder dat er iets gemaakt wordt, hoort niet tot het aanbod.',
        },
      ],
      bronregel:
        'Gemeten op 30 september 2026: de zoekopdrachten "kledingkast op maat tilburg" en "kledingkast op maat" in Google Nederland (waarneming via DataForSEO), en de eigen pagina\'s van vier aanbieders uit die tweede uitslag, met elk citaat woordelijk teruggevonden (vijftien van de vijftien): jouwmaatkast.nl/producten-kledingkasten.php, slaapkamerweb.nl/all/kledingkast+op+maat, mselectkasten.nl/kledingkast-op-maat en kastengigant.nl/kasten/kasten-op-maat. De projecttelling is van dezelfde dag. Bedragen staan hier niet: de prijsopgave volgt na het inmeten.',
      verwijzing:
        'Waarom bij een kledingkast op maat de buitenmaat zelden het probleem is en het opmeten wel, en wat vier aanbieders daar op 30 september 2026 zelf over publiceerden, staat uitgewerkt op de pagina over <a href="/diensten/kledingkasten-op-maat/tilburg">een kledingkast op maat in Tilburg</a>.',
    } },
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
        'Die vuistregel is geen bouwkundige norm maar een keuzehulp, en dat verklaart waarom hij overal precies hetzelfde luidt. De samenvatting die Google op 30 september 2026 boven de vraag "hoeveel groter moet je tv-meubel zijn dan je tv" zette, noemt 15 tot 20 centimeter aan weerszijden, een hoogte van 40 tot 55 centimeter en een diepte van 35 tot 45 centimeter. De pagina’s waar die samenvatting naar verwijst zeggen hetzelfde. Zinnig advies, zolang je uit een reeks kiest.',
        'En dat is wat eronder zit. De twee Nederlandse aanbieders die op 30 september 2026 bovenaan stonden op de zoekopdracht "tv-meubel op maat" verkopen hun maatwerk in een raster: breedtes van 120 tot 400 centimeter met de kleinste stap van 10 centimeter, en dieptes van 30, 35, 40 of 45 centimeter. De een biedt dertien breedtes aan, de ander drieëntwintig. Een regel die zegt "neem twintig centimeter extra" is dan handig, want je hoeft alleen de eerstvolgende stap te pakken. Alleen komt een woonkamerwand zelden op een veelvoud van tien centimeter uit, en wat overblijft is een kier of een strook wand die niets doet. Wat er dan wél gebeurt staat op <a href="/diensten/tv-meubels-op-maat">de pagina over tv-meubels op maat</a>: de maat komt van de wand.',
        'Welke opgave het bij jou is, hangt af van de kamer, en de twee lopen ver uiteen. Begrenzen een erker, een schouw of de deur naar de gang de vrije wand, dan is de breedte de restmaat ertussen: die ligt vast voordat er iets getekend is, en de vraag is wat er binnen die maat nog past. Is de wand juist lang en leeg, dan is de vraag omgekeerd: hoe voorkom je dat het meubel erin verdwijnt. In het eerste geval bepaalt de maat het ontwerp, in het tweede de verhouding. Wat welke kamer is, blijkt bij het inmeten; het is niet iets wat je aan een postcode afleest.',
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
          a: 'Niet zonder meer. Een zwevend meubel hangt met zijn eigen gewicht én dat van de apparatuur aan de wand, dus wat er achter het stucwerk zit, bepaalt hoe de ophangconstructie eruitziet: metselwerk, een voorzetwand of een dichtgezet schouwkanaal vragen elk iets anders. Dat is zelden een reden om het niet te doen, maar het is wel iets wat je vóór het ontwerp wilt weten en niet tijdens de montage. Het wordt bij het inmeten vastgesteld.',
        },
        {
          q: 'Wanneer is een tv-wandmeubel op maat niet de beste keuze?',
          a: 'Als je wand recht en vrij is, de breedte dicht bij een standaardmaat ligt, er geen erker, schouw, radiator of meterkast in de weg zit en je vooral een plek zoekt voor een televisie en een soundbar. Dan lost maatwerk een probleem op dat je niet hebt. Het wordt pas interessant zodra de wand de maat dicteert, de bekabeling door de wand moet, of het meubel tegelijk boekenkast of haardwand is. JDG ontwerpt dat meubel als onderdeel van de bouwopdracht; los interieuradvies of een inrichtingsplan zonder dat er iets gemaakt wordt hoort niet tot het aanbod.',
        },
      ],
      bronregel:
        'Gemeten op 30 september 2026: de zoekopdrachten "tv wandmeubel roosendaal" en "tv-meubel op maat" in Google Nederland (waarneming via DataForSEO), de samenvatting die Google boven "hoeveel groter moet je tv-meubel zijn dan je tv" toont, en de gepubliceerde maatreeksen op tv-kasten.nl/collections/tv-meubel-op-maat en puuur-interiors.nl/wandmeubelen/tv-meubelen/op-maat, de nummers 1 en 2 in die uitslag. De projecttelling is van 15 september 2026.',
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
    bewijs: ['badkamermeubel dongen (9)', 'badkamermeubels dongen (7)'],
    // Twee eigen URL's dongen op dezelfde twee zoekopdrachten mee: deze pagina en
    // /werkgebied/dongen. Gemeten in motor_gsc (dimensies query,page, 23-08 t/m 19-09-2026):
    // "badkamermeubel dongen" 35 vertoningen op gemiddelde positie 8,9 voor /diensten/
    // badkamermeubels-op-maat/dongen tegen 5 vertoningen op positie 13,8 voor
    // /werkgebied/dongen; "badkamermeubels dongen" 14 vertoningen op positie 7,0, alleen
    // voor de dienstpagina. Nul klikken op beide. De dienstpagina is dus de sterkste en
    // wordt aangewezen; de stadpagina verwijst hier in lopende tekst naartoe.
    verwijzing:
      'Eén van de zes dingen die JDG maakt heeft voor Dongen een eigen pagina, en dat is het badkamermeubel. Zoek je <a href="/diensten/badkamermeubels-op-maat/dongen">een badkamermeubel op maat in Dongen</a>, dan staat het volledige antwoord daar en niet hier: wat een badkamer in de Dongense buitengebieden praktisch vraagt, de afstand vanaf de werkplaats in Terheijden en de vier stappen van inmeten tot montage. Deze pagina blijft het overzicht van alles wat JDG voor Dongen maakt. Hoe een wastafelmeubel wordt opgebouwd, los van één plaats, staat op <a href="/diensten/badkamermeubels-op-maat">de pagina over badkamermeubels op maat</a>.' },

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
 * Alle verwijzingen die /werkgebied/<stad> in lopende tekst hoort te zetten, sterkste
 * vraag eerst: die van een verdiepte antwoordeenheid én die van een rij die alleen
 * aangewezen wordt (zie `RoosterRegel.verwijzing`). Een rij levert hoogstens één zin,
 * dus een pagina met beide krijgt geen dubbele alinea.
 *
 * Verving `antwoordeenhedenVoorStad` op 01-10-2026: die functie kon alleen naar een
 * verdiepte eenheid wijzen, en een pagina aanwijzen vraagt geen verdieping. Een pagina
 * waar niemand naartoe wijst wordt niet gevonden; twee pagina's die naar dezelfde vraag
 * wijzen verdelen hun signaal.
 */
export function verwijzingenVoorStad(stad: string) {
  return lokaalRooster
    .filter((r) => r.stad === stad && (r.antwoordeenheid?.verwijzing || r.verwijzing))
    .sort((a, b) => b.vertoningen - a.vertoningen)
    .map((r) => ({ dienst: r.dienst, tekst: r.antwoordeenheid?.verwijzing ?? r.verwijzing! }))
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
