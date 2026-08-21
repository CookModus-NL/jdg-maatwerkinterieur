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
    metaTitle: 'HPL laminaat voor keukens en kasten op maat, JDG',
    metaDescription: 'HPL fronten van Fenix, Formica en Kronospan voor JDG maatwerk. Krasvast, vlekvrij, duizenden decors. Ideaal voor drukke gezinnen en keukens.',
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
