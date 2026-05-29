/**
 * Single source of truth voor JDG Maatwerk Interieur.
 * Bron: jdg-maatwerkinterieur.nl + Instagram @jdg_maatwerk_interieur.
 * Eigenaar: Jonas — werkt vanuit Terheijden door heel Nederland.
 */

export const business = {
  name: 'JDG Maatwerk Interieur',
  legalName: 'JDG Maatwerk Interieur',
  ownerFirstName: 'Jonas',
  tagline: 'Maatwerk met passie en precisie',
  description:
    'Unieke meubels op maat. Keukens, kledingkasten en tv-meubels door Jonas — ontworpen en vervaardigd vanuit Terheijden, geleverd in heel Nederland.',

  kvk: '00000000',
  vestigingsnummer: '',
  btw: 'NL000000000B01',

  founded: '2025',

  address: {
    street: 'Zeggelaan 47',
    postalCode: '4844 SB',
    city: 'Terheijden',
    municipality: 'Drimmelen',
    province: 'Noord-Brabant',
    country: 'NL',
  },

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

  /** Service area: Jonas werkt door heel Nederland, met focus op Noord-Brabant. */
  serviceArea: [
    'Heel Nederland',
    'Noord-Brabant', 'Terheijden', 'Breda', 'Tilburg', 'Den Bosch',
    'Oosterhout', 'Etten-Leur', 'Drimmelen', 'Made',
    'Zuid-Holland', 'Rotterdam', 'Dordrecht',
  ],

  whatsappPrefills: {
    general: 'Hallo Jonas, ik heb een vraag over een maatwerkproject.',
    offerte: 'Hallo Jonas, ik wil graag een offerte voor maatwerk. Ik stuur zo foto’s en maten door.',
    keuken: 'Hallo Jonas, ik wil graag een keuken op maat. Hoor graag van u.',
    kast: 'Hallo Jonas, ik wil graag een kledingkast op maat. Ik stuur zo wat foto’s van de ruimte.',
    tv: 'Hallo Jonas, ik wil graag een tv-meubel op maat. Hoor graag van u.',
    overig: 'Hallo Jonas, ik heb een idee voor een maatwerk meubel. Hoor graag van u.',
  },
} as const

export type Business = typeof business
