/**
 * Portfolio JDG Maatwerk Interieur.
 * Echte foto's uit Jonas' eigen werkplaats en gerealiseerde projecten.
 * Alle beelden lokaal gehost in /public/images/ (jdg-01 t/m jdg-35).
 */

export type Project = {
  slug: string
  title: string
  location: string
  date: string
  surface?: string
  material?: string
  category: 'keuken' | 'kast' | 'tv' | 'trapkast' | 'werkkamer' | 'zolderinbouw' | 'boekenkast'
  description: string
  hero: string
  gallery: string[]
  quote?: { text: string; author: string }
}

export const projects: Project[] = [
  {
    slug: 'wandsysteem-boekenkast-bureau-walnoot',
    title: 'Wandsysteem met boekenkast en bureau in walnoot',
    location: 'West-Brabant',
    date: '2025',
    material: 'Walnoot fineer · sluitwerk lades',
    category: 'boekenkast',
    description:
      'Een integraal wandsysteem: boekenkast bovenin met vakverdeling, werkblad op maat tussen twee sokkels, en linksonder een dichte kast met deur, rechts een ladeblok. Alles in warme walnoot fineer, tot op de millimeter aangepast aan de nis in de wand.',
    hero: '/images/jdg-01.jpg',
    gallery: ['/images/jdg-01.jpg', '/images/jdg-12.jpg'],
  },
  {
    slug: 'slaapkamer-commodes-dakkapel-eik',
    title: 'Slaapkamer commodes in dakkapel',
    location: 'West-Brabant',
    date: '2025',
    material: 'Licht eiken · softclose lades',
    category: 'zolderinbouw',
    description:
      'Twee ladekasten strak ingepast onder de schuine wand van de dakkapel, met een doorlopend blad dat het geheel visueel bindt. Precies gemaakt tot aan de dakspanten, in licht eiken zodat de ruimte licht en rustig blijft.',
    hero: '/images/jdg-02.jpg',
    gallery: ['/images/jdg-02.jpg', '/images/jdg-03.jpg'],
  },
  {
    slug: 'trapkast-samenstelling-blauw-hout',
    title: 'Trapkast met kleuraccenten',
    location: 'West-Brabant',
    date: '2025',
    material: 'Eiken fineer · wit gelakte deuren',
    category: 'trapkast',
    description:
      'Onder een moderne bordestrap: een compositie van open vakken, dichte kastjes met witte fronten en eiken omkasting die de trap volgt. Speelse asymmetrie, functioneel opgevouwen in de kleine ruimte.',
    hero: '/images/jdg-04.jpg',
    gallery: ['/images/jdg-04.jpg'],
  },
  {
    slug: 'zwevend-bureau-imac-eiken',
    title: 'Zwevend bureau voor iMac',
    location: 'West-Brabant',
    date: '2025',
    material: 'Warm eiken · geïntegreerde kabeldoorvoer',
    category: 'werkkamer',
    description:
      'Wandhangend bureau met geïntegreerd kabelmanagement en drie kleine lades. Boven is er ruimte voor de iMac met stopcontact-tulpen op de juiste plek. Toetsenbord verdwijnt onder het blad wanneer niet in gebruik.',
    hero: '/images/jdg-05.jpg',
    gallery: ['/images/jdg-05.jpg'],
  },
  {
    slug: 'werkkamer-antraciet-wandsysteem',
    title: 'Werk- en slaapkamer wandsysteem',
    location: 'West-Brabant',
    date: '2025',
    material: 'Antraciet melamine · beton-look werkblad',
    category: 'werkkamer',
    description:
      'Bureau op ware breedte, open vakken bovenin, ladeblok in het midden en twee hoge dichte kasten aan de rechterkant. Antraciet met beton-look blad, ideaal voor een multifunctionele kamer.',
    hero: '/images/jdg-06.jpg',
    gallery: ['/images/jdg-06.jpg'],
  },
  {
    slug: 'trapkast-mahonie-uitschuiftrap',
    title: 'Hoekkast met verrijdbare traptreden',
    location: 'West-Brabant',
    date: '2024',
    material: 'Mahonie · LED-inbouwspots · uitschuifbare treden',
    category: 'trapkast',
    description:
      'Hoekopstelling in warm mahonie met LED-verlichting bovenin de kroonlijst. Op maat gemaakte uitschuifbare treden geven toegang tot de hoogste plateaus — vakwerk waarbij vorm en functie samenkomen.',
    hero: '/images/jdg-07.jpg',
    gallery: ['/images/jdg-07.jpg'],
  },
  {
    slug: 'tv-wand-akoestisch-latten',
    title: 'TV-wand met akoestische lattenwand',
    location: 'West-Brabant',
    date: '2025',
    material: 'Eiken latten met vilt · zwevende tv-lade unit',
    category: 'tv',
    description:
      'Volledige tv-wand met verticale eiken latten voor akoestiek en textuur, zwevende tv-meubel met drie lades in licht eiken. Soundbar volledig geïntegreerd, geen zichtbare kabels.',
    hero: '/images/jdg-08.jpg',
    gallery: ['/images/jdg-08.jpg'],
  },
  {
    slug: 'trap-onderkast-wit-modulair',
    title: 'Kastenwand onder de trap',
    location: 'West-Brabant',
    date: '2024',
    material: 'Wit gelakt MDF · greeploos push-to-open',
    category: 'trapkast',
    description:
      'Alle ruimte onder de trap functioneel maken: drie greeploze deuren die het trapprofiel volgen, met opbergruimte voor stofzuiger, jassen en klein huisraad. Achter de scheidingswand extra open ruimte voor uitgeschoven items.',
    hero: '/images/jdg-09.jpg',
    gallery: ['/images/jdg-09.jpg', '/images/jdg-10.jpg', '/images/jdg-11.jpg'],
  },
  {
    slug: 'wandkast-walnoot-solitair',
    title: 'Wandkast in walnoot met open vakken',
    location: 'West-Brabant',
    date: '2024',
    material: 'Walnoot massief · staande achterwand',
    category: 'boekenkast',
    description:
      'Vrijstaande wandkast met drie kolommen en zeven horizontale niveaus. Puur meubel in massief walnoot met zichtbare houtnerf — een blijver in de kamer.',
    hero: '/images/jdg-12.jpg',
    gallery: ['/images/jdg-12.jpg'],
  },
  {
    slug: 'kledingkast-licht-eiken-schuin',
    title: 'Kledingkast in eiken',
    location: 'West-Brabant',
    date: '2025',
    material: 'Licht eiken fineer · push-to-open',
    category: 'kast',
    description:
      'Grote kledingkast in licht eiken fineer, greeploos uitgevoerd. Binnenwerk met vakverdeling, hangroede en soft-close broeklade — alles in Jonas eigen werkplaats gemaakt en ingebouwd.',
    hero: '/images/jdg-13.jpg',
    gallery: ['/images/jdg-13.jpg', '/images/jdg-14.jpg'],
  },
  {
    slug: 'losse-kast-eiken-keuken',
    title: 'Losse voorraadkast in open keuken',
    location: 'West-Brabant',
    date: '2025',
    material: 'Eiken fineer · zonder greep',
    category: 'kast',
    description:
      'Vrijstaande voorraadkast als scheiding tussen keuken en woongedeelte. Bovenaan één grote deur met inloopbaar volume, onderin een aparte compartiment. Precies op maat gemaakt voor deze ruimte.',
    hero: '/images/jdg-15.jpg',
    gallery: ['/images/jdg-15.jpg'],
  },
  {
    slug: 'keuken-betonlook-eiken-najaar',
    title: 'Keuken beton met eiken accenten',
    location: 'West-Brabant',
    date: '2025',
    material: 'Beton-look fronten · eiken bovenkasten · beton-look blad',
    category: 'keuken',
    description:
      'L-vormige keuken met greeploze beton-look fronten en warm eiken bovenkasten. Beton-look werkblad, sfeerverlichting onder de bovenkasten. Warm en modern tegelijk.',
    hero: '/images/jdg-16.jpg',
    gallery: ['/images/jdg-16.jpg', '/images/jdg-17.jpg', '/images/jdg-18.jpg', '/images/jdg-19.jpg', '/images/jdg-20.jpg'],
  },
  {
    slug: 'kookeiland-donker-eiken',
    title: 'Kookeiland en kastenwand in donker eiken',
    location: 'West-Brabant',
    date: '2024',
    material: 'Donker eiken · composiet blad · geïntegreerde apparatuur',
    category: 'keuken',
    description:
      'Ruim kookeiland met wit composieten blad, vlakke inductiekookplaat en spoelbak. Achterwand van kolomkasten met inbouw oven en combi in donker eiken. Zicht op de tuin via de openslaande deuren.',
    hero: '/images/jdg-23.jpg',
    gallery: ['/images/jdg-23.jpg', '/images/jdg-24.jpg', '/images/jdg-27.jpg', '/images/jdg-33.jpg'],
  },
  {
    slug: 'zolderinbouw-hangkast-lades',
    title: 'Zolderinbouwkast met lades onder de schuine wand',
    location: 'West-Brabant',
    date: '2025',
    material: 'Wit gelakt MDF · Panasonic-airco inbouwbaar naast',
    category: 'zolderinbouw',
    description:
      'Volledige benutting van de schuine zolderwand: hangvak, open vakken en drie lades die tot in de punt van het dak zijn gepast. Airco-unit ernaast blijft toegankelijk.',
    hero: '/images/jdg-28.jpg',
    gallery: ['/images/jdg-28.jpg', '/images/jdg-29.jpg', '/images/jdg-30.jpg', '/images/jdg-34.jpg'],
  },
  {
    slug: 'kinderkamer-blush-roze-wandkast',
    title: 'Kinderkamerkast in blush roze',
    location: 'West-Brabant',
    date: '2025',
    material: 'Blush roze gelakt MDF · messing greeplijsten',
    category: 'kast',
    description:
      'Kastenwand van vloer tot plafond in zachtroze mat, met de messing greeplijsten die de compositie ritme geven. Rechts loopt de kast door onder de schuine wand van de dakkapel. Binnen: spiegel, hangroede, planken en lades.',
    hero: '/images/jdg-25.jpg',
    gallery: ['/images/jdg-25.jpg', '/images/jdg-26.jpg', '/images/jdg-31.jpg', '/images/jdg-32.jpg'],
  },
  {
    slug: 'zolderinbouw-wit-hoekopstelling',
    title: 'Zolder inbouwkast met open kolom',
    location: 'West-Brabant',
    date: '2025',
    material: 'Wit gelakt MDF · zwarte hangroede · softclose lades',
    category: 'zolderinbouw',
    description:
      'Zolderinbouw met links hangroede in dakvorm, rechts open plankvakken met drie lades onderin. Volledig wit voor maximale lichtreflectie en visuele rust in een kleine slaapruimte.',
    hero: '/images/jdg-35.jpg',
    gallery: ['/images/jdg-35.jpg'],
  },
]

export const featuredProjects = projects.slice(0, 6)

export const projectsByCategory = {
  keuken: projects.filter((p) => p.category === 'keuken'),
  kast: projects.filter((p) => p.category === 'kast'),
  tv: projects.filter((p) => p.category === 'tv'),
  trapkast: projects.filter((p) => p.category === 'trapkast'),
  werkkamer: projects.filter((p) => p.category === 'werkkamer'),
  zolderinbouw: projects.filter((p) => p.category === 'zolderinbouw'),
  boekenkast: projects.filter((p) => p.category === 'boekenkast'),
}
