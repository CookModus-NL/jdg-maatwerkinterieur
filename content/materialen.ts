/**
 * Materialen die JDG gebruikt in maatwerk projecten.
 * Elk materiaal = eigen zoekterm cluster + Product schema.
 */

export type Material = {
  slug: string
  name: string
  category: 'hout' | 'plaatmateriaal' | 'werkblad' | 'beslag'
  short: string
  intro: string
  paragraphs: string[]
  toepassingen: string[]
  varianten: string[]
  duurzaamheid: string
  onderhoud: string
  prijsklasse: 'budget' | 'middenklasse' | 'premium' | 'topklasse'
  hero: string
  metaTitle: string
  metaDescription: string
  /**
   * Vragen die mensen letterlijk intikken over dit materiaal.
   * Toegevoegd 02-09-2026: /materialen/hpl-laminaat leverde de énige klik op die
   * de site tussen 23 en 31 aug 2026 binnenhaalde, op 66 vertoningen voor twaalf
   * HPL-zoekopdrachten ("wat is hpl laminaat", "hpl keukenfronten", "hpl fronten",
   * "hpl keukendeurtjes"). De pagina had 272 woorden en beantwoordde die vragen
   * niet. Dit veld doet dat wel.
   */
  vragen?: { q: string; a: string }[]
}

export const materialen: Material[] = [
  {
    slug: 'eiken-fineer',
    name: 'Eiken fineer',
    category: 'hout',
    short: 'Warm en tijdloos, met de nerf van massief eiken en de stabiliteit van fineer.',
    intro: 'Eiken fineer is een dun laagje echt eikenhout op een stabiele draagplaat. Je krijgt de warme uitstraling en unieke nerf van massief eiken, maar zonder werken, krimpen of scheuren van massief hout. In JDG projecten is eiken fineer een van de meest gevraagde materialen voor keukens en kastenwanden.',
    paragraphs: [
      'Eiken heeft een lichte, warme kleur die met de tijd verdiept. Wij werken zowel met licht eiken (Europese herkomst, blonde tot goudkleurige tinten) als rustiek eiken (met kwasten en meer structuur). Beide fineersoorten laten zich beitsen tot bijna elke kleur, maar de meeste klanten kiezen voor blank of licht gewitte afwerking om de natuurlijke uitstraling te behouden.',
      'Fineer is minder gevoelig voor werken dan massief hout, wat ideaal is voor grote fronten en kastenwanden die anders zouden trekken bij temperatuur- of vochtwisselingen. Onder een goede lak of olie gaat eiken fineer decennia mee zonder aan uitstraling in te boeten.',
    ],
    toepassingen: [
      'Kastenwanden tot aan het plafond',
      'Keukenfronten in landelijke of modern-klassieke stijl',
      'TV-wanden met verticale of horizontale nerfrichting',
      'Boekenkasten en wandmeubels op maat',
      'Zolderinbouw met dakschuinten',
    ],
    varianten: [
      'Licht Europees eiken (recht van draad, blank afgewerkt)',
      'Rustiek eiken (met kwasten, gerookte tint mogelijk)',
      'Gerookt eiken (donker gebruind door ammoniak behandeling)',
      'Wit gewit eiken (kalk-effect, populair voor Scandinavische stijl)',
    ],
    duurzaamheid: 'JDG werkt uitsluitend met FSC- of PEFC-gecertificeerd eiken uit Europese bossen. Fineer verbruikt tot 40 keer minder hout dan massief voor hetzelfde oppervlak.',
    onderhoud: 'Stofvrij houden met droge doek. Eenmaal per jaar bijhouden met milde zeep en zachte doek. Bij gelakte fineer geen agressieve middelen. Bij geoliede fineer eenmaal per twee jaar bijoliëmoment.',
    prijsklasse: 'middenklasse',
    hero: '/images/jdg-01.jpg',
    vragen: [
      { q: 'Wat is het verschil tussen eiken fineer en massief eiken?',
        a: 'Fineer is een dun laagje echt eikenhout op een stabiele draagplaat; massief is door en door hout. Op een front is het verschil nauwelijks te zien, constructief wel: massief werkt met vocht en temperatuur mee en kan bij grote vlakken kromtrekken of scheuren. Voor deuren van twee meter hoog is fineer daarom vaak de betere keuze, niet de goedkopere.' },
      { q: 'Kun je eiken fineer in elke kleur laten beitsen?',
        a: 'Het laat zich beitsen tot bijna elke tint, van gewit tot vrijwel zwart. Wel blijft de nerf zichtbaar meelopen: beitsen is geen verven. Wie een volledig egaal vlak wil, komt uit bij lak of HPL.' },
      { q: 'Kun je een beschadiging in fineer repareren?',
        a: 'Oppervlakkige krassen in de lak of olie zijn meestal bij te werken. Gaat de beschadiging door het fineer heen, dan is plaatselijk herstel zichtbaar en is een front vervangen doorgaans de nettere oplossing.' },
      { q: 'Is eiken fineer geschikt voor een keuken?',
        a: 'Ja, mits goed afgewerkt. Rond de spoelbak en boven de vaatwasser is de randafwerking bepalend: daar komt stoom en water, en daar begint schade als de kant niet dicht is.' },
    ],
    metaTitle: 'Eiken fineer voor maatwerk keukens en kasten, JDG',
    metaDescription: 'Eiken fineer met de nerf van massief eiken en stabiliteit voor grote fronten. Licht, rustiek, gerookt of gewit. Gebruikt in JDG maatwerk keukens en kastenwanden.',
  },
  {
    slug: 'walnoot-fineer',
    name: 'Walnoot fineer',
    category: 'hout',
    short: 'Diep bruin met chocoladetinten, geeft je interieur direct karakter en luxe.',
    intro: 'Walnoot (noten) is de premium keuze voor wie een chique, warme uitstraling wil. De donkerbruine kleur met paarse en chocolade ondertonen valt onmiddellijk op tegen witte muren en past bij zowel modern strak als klassiek statig.',
    paragraphs: [
      'Amerikaans walnoot (juglans nigra) heeft de meest gewaardeerde nerf: rechte draad met af en toe een golvend patroon. Europees walnoot is iets lichter en heeft meer variatie. In JDG projecten kiezen we het fineer altijd samen met de klant zodat de uiteindelijke tint bij het interieur past.',
      'Walnoot is vaker gevraagd voor woonkamer meubels (wandsystemen, TV-wanden, dressoirs) dan voor keukens, omdat de donkere kleur meer aanwezig is. Maar in een keuken met veel wit werkblad en glazen fronten kan walnoot juist een prachtig accent zijn.',
    ],
    toepassingen: [
      'Wandsystemen en boekenkasten met chique uitstraling',
      'TV-meubels als centraal element in de woonkamer',
      'Bureau en werkkast in modern-klassieke werkkamer',
      'Slaapkamer kledingkasten met warme uitstraling',
      'Kookeiland-panelen als accent in lichte keukens',
    ],
    varianten: [
      'Amerikaans walnoot (donkerder, rechter nerf)',
      'Europees walnoot (lichter, meer variatie)',
      'Walnoot met olie-afwerking (matte, natuurlijke look)',
      'Walnoot gelakt hoogglans (spiegelend, luxe)',
    ],
    duurzaamheid: 'Walnoot uit gecertificeerde bossen in Amerika en Europa. Fineer is duurzaam alternatief voor massief walnoot dat schaars is.',
    onderhoud: 'Zeer stabiel en krasbestendig als correct afgewerkt. Bij olie-afwerking eens per jaar bijoliëmoment. Bij lakwerk gewone reiniging met vochtige doek.',
    prijsklasse: 'premium',
    hero: '/images/jdg-12.jpg',
    vragen: [
      { q: 'Wordt walnoot lichter of donkerder met de jaren?',
        a: 'Walnoot verkleurt onder invloed van licht en wordt met de jaren juist iets lichter en warmer, waar veel andere houtsoorten donkerder worden. Dat gebeurt geleidelijk en gelijkmatig, mits er niet jarenlang iets op één plek blijft staan.' },
      { q: 'Waarom is walnoot duurder dan eiken?',
        a: 'Walnoot groeit langzamer, de bomen zijn kleiner en het bruikbare deel van de stam is beperkter. De prijs volgt de beschikbaarheid, niet de bewerking.' },
      { q: 'Past walnoot in een kleine ruimte?',
        a: 'Een donkere houtsoort maakt een kleine ruimte optisch krapper wanneer je hele wanden vult. In kleinere ruimtes werkt walnoot meestal beter als accent — een fronten-partij, een bureaublad, een tv-wand — dan als volledige kastenwand.' },
    ],
    metaTitle: 'Walnoot fineer voor maatwerk meubels en kasten, JDG',
    metaDescription: 'Walnoot fineer geeft je interieur diepte en karakter. Amerikaans of Europees walnoot voor wandsystemen, TV-meubels en boekenkasten op maat.',
  },
  {
    slug: 'hpl-laminaat',
    name: 'HPL laminaat',
    category: 'plaatmateriaal',
    short: 'Krasvast, vlekvrij en oneindig veel decors. De praktische alles-kunner voor druk gebruik.',
    intro: 'HPL (High Pressure Laminate) is het meest praktische fronten materiaal voor keukens en kasten die veel gebruik zien. Onder hoge druk gefabriceerd, bestand tegen krassen, vlekken, hitte en vocht. Beschikbaar in duizenden decors: houtlook, betonlook, uni-kleuren, marmer effecten.',
    paragraphs: [
      'JDG werkt met HPL van Fenix, Formica en Kronospan. Fenix NTM heeft een nano-technologisch matte finish die vingerafdrukken tegengaat en zichzelf herstelt bij lichte krassen. Populair voor keukens met kinderen. Formica biedt de breedste range aan decors, van hout tot beton. Kronospan is de budget-vriendelijke optie met nog steeds hoge kwaliteit.',
      'HPL wordt op een plaat spaanplaat of MDF geperst. De rand kan afgewerkt worden met ABS kantenband in dezelfde kleur (naadloos), met een houten kader (visueel accent) of met een postformat rand (afgeronde overgang voor keukenwerkbladen).',
      'De naam zorgt voor verwarring, omdat vloerlaminaat ook laminaat heet. Dat is doorgaans DPL: één slijtlaag, direct op een drager geperst, gemaakt om op te lopen. HPL heeft veel meer papierlagen onder hogere druk en is gemaakt om aangeraakt te worden: fronten, deurtjes, werkbladen, tafelbladen en wandpanelen. Wie zoekt op HPL klikvloer zoekt dus in de praktijk naar een vloer, niet naar dit materiaal.',
      'De zwakke plek van HPL zit nooit in het vlak, maar in de rand. Een kantenband die door stoom of staand water loslaat is de meest voorkomende schade in een keuken. Daarom is het van belang dat de rand strak verlijmd is en dat een front boven een vaatwasser of naast een kookplaat de juiste afwerking krijgt. Op het vlak zelf is het materiaal krasvast en kleurvast; op de naad valt of staat de levensduur.',
      'Fronten vervangen op bestaande kasten is met HPL goed te doen, zolang de corpussen recht en heel zijn. Dat is een reële tussenweg tussen niets doen en een volledig nieuwe keuken: nieuwe deurtjes en een nieuw werkblad, op de kasten die er al staan.',
    ],
    toepassingen: [
      'Keukenfronten in druk gezinshuishouden',
      'Kinderkamerkasten die vlekken en krassen moeten weerstaan',
      'Werkbladen in laminaat variant (budget alternatief voor composiet)',
      'Kantoorkasten en werkplekken',
      'Verhuur-woningen waar kwaliteit belangrijk is maar prijs meetelt',
    ],
    varianten: [
      'Fenix NTM (matte, anti-vingerafdruk, herstellend)',
      'Formica (traditioneel, breedste decor-range)',
      'Kronospan (budget-vriendelijk, hoge kwaliteit)',
      'Postformat (afgerond rand voor werkbladen)',
    ],
    duurzaamheid: 'Gemaakt van gerecycleerd papier onder hoge druk gelaagd. Bevat geen zware metalen. Onderplaat spaanplaat of MDF met FSC certificering.',
    onderhoud: 'Zeer weinig onderhoud. Vochtige doek en mild reinigingsmiddel volstaan. Geen schuurmiddelen. Fenix NTM herstelt lichte krassen door verwarming met warme doek.',
    prijsklasse: 'middenklasse',
    hero: '/images/jdg-17.jpg',
    metaTitle: 'Wat is HPL laminaat? Fronten, keukendeurtjes en toepassingen',
    metaDescription: 'HPL laminaat uitgelegd: wat het is, het verschil met vloerlaminaat, waarom het veel gebruikt wordt voor keukenfronten en keukendeurtjes, en waar je bij de randafwerking op moet letten.',
    vragen: [
      { q: 'Wat is HPL laminaat precies?',
        a: 'HPL staat voor High Pressure Laminate. Het zijn lagen papier die met kunsthars zijn doordrenkt en onder hoge druk en temperatuur tot één harde plaat zijn samengeperst. Die plaat is enkele tienden van een millimeter tot een paar millimeter dik en wordt op een dragende plaat gelijmd, meestal spaanplaat of MDF. De bovenste laag is bedrukt met een decor: houtnerf, betonlook, marmer of een egale kleur.' },
      { q: 'Wat is het verschil tussen HPL en gewoon laminaat?',
        a: 'Verwarrend, want beide heten laminaat. Vloerlaminaat is doorgaans DPL (Direct Pressure Laminate): één slijtlaag direct op een drager geperst, bedoeld voor vloeren. HPL bestaat uit veel meer papierlagen onder hogere druk, is daardoor harder en slagvaster, en wordt gebruikt voor fronten, werkbladen, tafelbladen en wandpanelen. Zoek je een vloer, dan zoek je geen HPL.' },
      { q: 'Is HPL geschikt voor keukenfronten?',
        a: 'Ja, en het is er een van de meest gebruikte materialen voor. HPL is krasvast, kleurvast, bestand tegen vet en schoonmaakmiddelen en verdraagt vocht beter dan gelakt MDF. Voor een keuken die dagelijks intensief gebruikt wordt door een gezin is het vaak de verstandigste keuze.' },
      { q: 'Kun je HPL keukendeurtjes op maat laten maken?',
        a: 'Dat is precies hoe het werkt. HPL komt op grote platen binnen en wordt op maat gezaagd, waarna de zichtranden worden afgewerkt met ABS-kantenband in dezelfde kleur. Daardoor kan een front elke maat krijgen die het ontwerp vraagt, in plaats van de standaardmaten van een keukenmerk.' },
      { q: 'Kan HPL over een bestaande keuken heen?',
        a: 'Fronten vervangen kan bijna altijd, mits de corpussen (de kastkasten) nog recht en heel zijn. Nieuwe HPL-fronten en een nieuw werkblad op bestaande kasten is een reële tussenweg tussen niets doen en een complete keuken.' },
      { q: 'Gaan er vingerafdrukken op HPL zitten?',
        a: 'Bij hoogglans HPL wel, net als bij elk hoogglans oppervlak. Bij matte varianten met een gesloten toplaag, zoals Fenix NTM, vallen vingerafdrukken juist nauwelijks op. Bij donkere, egale kleuren zie je afdrukken sneller dan bij een decor met structuur.' },
      { q: 'Hoe lang gaat HPL mee?',
        a: 'De toplaag zelf slijt in normaal huishoudelijk gebruik niet noemenswaardig. Waar het meestal misgaat is de rand: een kantenband die loslaat door stoom of door water dat langdurig in een naad staat. Een goed verlijmde ABS-rand en het vermijden van staand vocht zijn dus belangrijker dan het decor dat je kiest.' },
      { q: 'Waar koop je HPL?',
        a: 'HPL wordt per plaat geleverd door plaatmateriaalgroothandels en door fabrikanten als Fenix, Formica en Kronospan. Voor een particulier is losse platen kopen zelden zinvol: zagen, kanten en monteren vraagt machines en ervaring. In maatwerkprojecten wordt het materiaal ingekocht en verwerkt door de meubelmaker.' },
    ],
  },
  {
    slug: 'composiet-werkblad',
    name: 'Composiet werkblad',
    category: 'werkblad',
    short: 'Krasvast, hittebestendig, hygiënisch. Het meest gekozen werkblad in moderne keukens.',
    intro: 'Composiet werkbladen bestaan voor 90-95% uit gemalen kwarts, gebonden met polymeerhars en gepigmenteerd. Het resultaat is een werkblad dat sterker is dan natuursteen, niet-poreus (dus geen vlekken) en verkrijgbaar in honderden kleuren en patronen.',
    paragraphs: [
      'JDG werkt met Caesarstone, Silestone en Compac composieten. Deze fabrikanten leveren consistente kleur en dikte, iets waar natuursteen soms in tekort schiet. Voor grote kookeilanden met slanke overhang zijn 20mm platen mogelijk zonder onzichtbare verstevigingen.',
      'Populaire keuzes: witte marmer-imitaties (Calacatta, Statuario patronen), effen kleuren (wit, antraciet, zwart), of natuursteen-look zonder de kwetsbaarheid van echt marmer of graniet.',
    ],
    toepassingen: [
      'Kookeilanden met grote oppervlaktes en overhang',
      'Werkbladen in keuken met veel gebruik',
      'Badkamermeubels met wasbladen',
      'Bar-toppen en dining tafels op maat',
      'Vensterbanken en trap-treden voor consistente look',
    ],
    varianten: [
      'Caesarstone (Israëlisch, breedste range marmer-imitaties)',
      'Silestone (Spaans, anti-bacterieel behandeld, ideaal keuken)',
      'Compac (Spaans, hoogwaardig, groot formaat platen)',
      'Dekton (Cosentino, ultra dun, ook geschikt voor gevel)',
    ],
    duurzaamheid: 'Bestand tegen hitte tot 150°C, krasvast, niet-poreus (geen vlekken). Levensduur 30+ jaar. Sommige merken (Silestone) hebben carbon-neutrale productie.',
    onderhoud: 'Nauwelijks onderhoud. Dagelijks schoonmaken met vochtige doek en mild reinigingsmiddel. Geen coating nodig zoals bij marmer of graniet. Geen ophopingen mogelijk.',
    prijsklasse: 'premium',
    hero: '/images/jdg-23.jpg',
    vragen: [
      { q: 'Is composiet hittebestendig?',
        a: 'Composiet verdraagt warmte, maar niet onbeperkt: de hars tussen de kwartskorrels kan bij een gloeiend hete pan verkleuren of haarscheuren geven. Een onderzetter is bij composiet geen overdreven voorzichtigheid.' },
      { q: 'Kun je een composiet werkblad krassen?',
        a: 'Het is harder dan de meeste natuursteen, maar niet onkwetsbaar. Snijden doe je op een plank, niet op het blad — al is het maar omdat je er anders je messen op verpest.' },
      { q: 'Waar komt de naad bij een lang werkblad?',
        a: 'Platen komen in vaste maximale afmetingen. Bij een langer blad komt er dus een naad, en waar die valt is een ontwerpkeuze: meestal in een hoek of bij de spoelbak, waar hij het minst opvalt.' },
    ],
    metaTitle: 'Composiet werkbladen (Caesarstone, Silestone), JDG',
    metaDescription: 'Composiet werkbladen van Caesarstone, Silestone en Compac voor JDG maatwerk keukens. Krasvast, vlekvrij, honderden kleuren en marmer-imitaties.',
  },
  {
    slug: 'keramisch-werkblad',
    name: 'Keramisch werkblad',
    category: 'werkblad',
    short: 'Het sterkste werkblad. Onverwoestbaar, ultra dun, past ook buiten.',
    intro: 'Keramisch werkblad (ook wel sinterstone genoemd) is de nieuwste generatie werkbladen: gemaakt van kwarts, mineralen en klei die onder extreme druk en hoge temperaturen worden gesinterd tot één massieve plaat. Sterker dan graniet, hittebestendig tot 300°C, en dun (12mm mogelijk) voor moderne slanke uitstraling.',
    paragraphs: [
      'JDG werkt vooral met Dekton (Cosentino) en Neolith. Deze werkbladen zijn 100% niet-poreus, kunnen zelfs UV licht van buiten weerstaan (dus geschikt voor tuinkeukens), en zien er identiek uit binnen en buiten wanneer je een keuken door de gevelpui door wilt trekken.',
      'Voor grote kookeilanden is 12mm keramiek mogelijk zonder verstevigingen, wat een super-strakke moderne look geeft. Voor traditionele keukens is 20mm gebruikelijk. De rand kan met een profiel (recht, afgerond, schuin) afgewerkt worden.',
    ],
    toepassingen: [
      'Ultra-slanke kookeilanden en werkbladen (12mm)',
      'Doorlopende keukens van binnen naar tuinkeuken (UV bestendig)',
      'Wasbladen in badkamer met heldere kleuren',
      'Gevel bekleding (Dekton facade)',
      'Poolside en buitenkeukens',
    ],
    varianten: [
      'Dekton by Cosentino (ultra dun, breed formaat)',
      'Neolith (Spaans, marmer imitaties met echte diepgang)',
      'Lapitec (Italiaans, één-plaat productie)',
      'Laminam (Italiaans, ultra grote formaten)',
    ],
    duurzaamheid: 'Levensduur 50+ jaar. Bestand tegen hitte, UV, vorst, vlekken, krassen. Kan worden hergebruikt of gerecycleerd. Sommige merken zijn carbon-negatief.',
    onderhoud: 'Nauwelijks onderhoud. Vochtige doek volstaat. Kan zelfs met sterke chemicaliën gereinigd worden zonder aantasting. Geen coating of impregnatie nodig.',
    prijsklasse: 'topklasse',
    hero: '/images/jdg-23.jpg',
    vragen: [
      { q: 'Wat maakt keramiek anders dan composiet?',
        a: 'Keramiek wordt bij zeer hoge temperatuur gebakken en bevat geen hars. Daardoor is het beter bestand tegen hitte en tegen uv-licht. Het is harder dan composiet, en tegelijk gevoeliger voor een harde klap op een rand of hoek.' },
      { q: 'Kan keramiek breken?',
        a: 'Bij een harde klap op een hoek of rand kan een schilfer afspringen; het vlak zelf is uitzonderlijk sterk. Verwerking en transport zijn daarom precies werk, en dunne platen worden bij montage ondersteund.' },
      { q: 'Kun je keramiek in een dunne dikte krijgen?',
        a: 'Ja, keramiek wordt vaak in dunne platen geleverd en op een drager verlijmd. Zo ontstaat een strak blad met enkele millimeters zichtdikte, of juist een dikke rand door de plaat om te zetten.' },
    ],
    metaTitle: 'Keramisch werkblad (Dekton, Neolith) voor JDG keukens',
    metaDescription: 'Keramisch werkbladen zoals Dekton en Neolith voor JDG maatwerk. Onverwoestbaar, ultra dun, UV bestendig. Geschikt voor moderne keukens en buitenkeukens.',
  },
]

export const getMateriaal = (slug: string) => materialen.find((m) => m.slug === slug)
export const materialenByCategory = {
  hout: materialen.filter((m) => m.category === 'hout'),
  plaatmateriaal: materialen.filter((m) => m.category === 'plaatmateriaal'),
  werkblad: materialen.filter((m) => m.category === 'werkblad'),
  beslag: materialen.filter((m) => m.category === 'beslag'),
}
