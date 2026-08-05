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
  kvk: '',
  vestigingsnummer: '',
  btw: '',

  founded: '2025',

  address: {
    street: 'Bredaseweg 47',
    postalCode: '4844 CK',
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
    logo:    'https://jdg-maatwerkinterieur.nl/wp-content/uploads/2025/11/INSTAGRAM_JDG_RGB_WitGroen.png',
    keuken1: 'https://jdg-maatwerkinterieur.nl/wp-content/uploads/2025/11/IMG_1068-2-1024x768.jpeg',
    kast1:   'https://jdg-maatwerkinterieur.nl/wp-content/uploads/2025/11/IMG_1004-1-768x1024.jpeg',
    keuken2: 'https://jdg-maatwerkinterieur.nl/wp-content/uploads/2025/11/IMG_1062-2-1024x768.jpeg',
  },

  serviceArea: 'nl-and-abroad-on-request',
} as const

export type Business = typeof business
