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

  url: 'https://jdg-maatwerkinterieur.nl',

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
    google: '',
  },

  /** Echte foto's vanaf jdg-maatwerkinterieur.nl (publieke WordPress URLs) */
  photos: {
    logo:    '/logo/jdg-mark.png',
    keuken1: '/images/jdg-01.jpg',
    kast1:   '/images/jdg-04.jpg',
    keuken2: '/images/jdg-25.jpg',
  },

  serviceArea: 'nl-and-abroad-on-request',
} as const

export type Business = typeof business
