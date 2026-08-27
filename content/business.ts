/**
 * Single source of truth voor JDG Maatwerk Interieur.
 * Oprichter: Jonas. Werkplaats in Terheijden, werkgebied heel Nederland
 * en op verzoek daarbuiten.
 */

export const business = {
  name: 'JDG Maatwerk Interieur',
  legalName: 'JDG Maatwerk Interieur',
  ownerFirstName: 'Jonas',
  tagline: 'Maatwerk interieur uit één handschrift',
  description:
    'Keukens, kledingkasten, tv-meubels en overig maatwerk. Ontworpen en gemaakt in de werkplaats van JDG in Terheijden, geleverd door heel Nederland en op verzoek daarbuiten.',

  // KvK en BTW volgen zodra registratie voltooid is
  kvk: '93463332',
  vestigingsnummer: '',
  btw: '',

  founded: '2025',

  address: {
    street: 'Zeggelaan 47',
    postalCode: '4844 SB',
    city: 'Terheijden',
    municipality: 'Drimmelen',
    province: 'Noord-Brabant',
    country: 'NL',
  },
  visitByAppointmentOnly: true,

  phone: '06-19831621',
  phoneE164: '+31619831621',
  whatsapp: '+31619831621',
  email: 'info@jdg-maatwerkinterieur.nl',

  // Canonieke host = www: productie redirect non-www met 308 naar www en de
  // Search Console-property staat op https://www.jdg-maatwerkinterieur.nl/
  url: 'https://www.jdg-maatwerkinterieur.nl',

  openingHours: [
    { day: 'Monday', opens: '08:00', closes: '18:00' },
    { day: 'Tuesday', opens: '08:00', closes: '18:00' },
    { day: 'Wednesday', opens: '08:00', closes: '18:00' },
    { day: 'Thursday', opens: '08:00', closes: '18:00' },
    { day: 'Friday', opens: '08:00', closes: '18:00' },
  ],

  social: {
    facebook: '',
    instagram: 'https://www.instagram.com/jdg_maatwerk_interieur/',
    instagramHandle: 'jdg_maatwerk_interieur',
    // Google-bedrijfsprofiel (geverifieerd aanwezig, lokaal pakket Terheijden 27-08-2026)
    google: 'https://maps.google.com/?cid=510288199378998363',
  },

  /** Echte foto's vanaf jdg-maatwerkinterieur.nl (publieke WordPress URLs) */
  photos: {
    logo:    '/logo/jdg-mark.png',
    keuken1: '/images/jdg-16.jpg',
    kast1:   '/images/jdg-13.jpg',
    keuken2: '/images/jdg-23.jpg',
  },

  serviceArea: 'nl-and-abroad-on-request',
} as const

export type Business = typeof business
