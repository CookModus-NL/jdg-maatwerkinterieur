/**
 * Portfolio JDG Maatwerk Interieur.
 * Foto's via jdg-maatwerkinterieur.nl WordPress media — vanzelf in sync.
 */

import { business } from './business'

export type Project = {
  slug: string
  title: string
  location: string
  date: string
  surface?: string
  material?: string
  category: 'keuken' | 'kast' | 'tv' | 'trapkast' | 'overig'
  description: string
  hero: string
  gallery: string[]
  quote?: { text: string; author: string }
}

export const projects: Project[] = [
  {
    slug: 'keuken-deco-legno',
    title: 'Keuken met zichtwerk in deco legno',
    location: 'Breda',
    date: '2025-11',
    material: 'Fronten: deco legno · Werkblad: keramiek',
    category: 'keuken',
    description:
      'Deze schitterende keuken met zichtwerk van deco legno en een keramieken werkblad is tot in detail naar wens van de klant gemaakt.',
    hero: business.photos.keuken1,
    gallery: [
      business.photos.keuken1,
      business.photos.keuken2,
    ],
  },
  {
    slug: 'kledingkast-tot-plafond',
    title: 'Kledingkast tot aan het plafond',
    location: 'West-Brabant',
    date: '2025-11',
    material: 'Melamine eik-fineer · Soft-close beslag',
    category: 'kast',
    description:
      'Op maat ingebouwde kledingkast met indeling voor hangruimte, lades en planken. Tot aan het plafond zodat geen ruimte verloren gaat.',
    hero: business.photos.kast1,
    gallery: [
      business.photos.kast1,
    ],
  },
  {
    slug: 'keuken-modern-wit',
    title: 'Strakke moderne keuken',
    location: 'West-Brabant',
    date: '2025-11',
    material: 'Fronten: matte lak · Werkblad: composiet',
    category: 'keuken',
    description:
      'Moderne keuken in matte witte lak met geïntegreerde apparatuur en strakke afwerking. Op maat gemaakt voor een open keuken-woonruimte.',
    hero: business.photos.keuken2,
    gallery: [
      business.photos.keuken2,
      business.photos.keuken1,
    ],
  },
]
