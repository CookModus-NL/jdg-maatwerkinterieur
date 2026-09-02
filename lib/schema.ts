/**
 * JSON-LD schema factory voor JDG Maatwerk Interieur.
 * Comprehensive: LocalBusiness + Organization + Person + WebSite +
 * BreadcrumbList + FAQPage + Service + HowTo + ImageObject + SiteNavigation.
 */

import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'
import { faqs } from '@/content/faq'

const BASE = business.url

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'FurnitureStore', 'GeneralContractor'],
    '@id': `${BASE}/#business`,
    name: business.name,
    alternateName: 'JDG',
    legalName: business.legalName,
    description: business.description,
    slogan: business.tagline,
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE}/#logo`,
      url: `${BASE}/logo/jdg-mark.png`,
      contentUrl: `${BASE}/logo/jdg-mark.png`,
      caption: 'JDG Maatwerk Interieur logo',
    },
    image: [`${BASE}/opengraph-image`, `${BASE}${business.photos.keuken1}`, `${BASE}${business.photos.kast1}`],
    email: business.email,
    telephone: business.phoneE164,
    foundingDate: business.founded,
    knowsLanguage: ['nl-NL', 'nl', 'en'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    areaServed: [
      { '@type': 'Country', name: 'Nederland' },
      { '@type': 'State', name: 'Noord-Brabant' },
      ...cities.map((c) => ({ '@type': 'City', name: c.name, containedInPlace: { '@type': 'State', name: 'Noord-Brabant' } })),
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: business.geo.latitude, longitude: business.geo.longitude },
      geoRadius: '150000',
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.latitude, longitude: business.geo.longitude },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name} ${business.address.street} ${business.address.city}`)}`,
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: '€€€',
    paymentAccepted: 'Bank transfer, Bank overschrijving',
    currenciesAccepted: 'EUR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Maatwerk interieur, diensten',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE}/diensten/${s.slug}#service`,
          name: s.title,
          description: s.metaDescription,
          url: `${BASE}/diensten/${s.slug}`,
          provider: { '@id': `${BASE}/#business` },
          areaServed: cities.map((c) => c.name),
        },
      })),
    },
    founder: { '@id': `${BASE}/#founder` },
    employee: { '@id': `${BASE}/#founder` },
    parentOrganization: { '@id': `${BASE}/#organization` },
    sameAs: [business.social.instagram, business.social.facebook, business.social.google].filter(Boolean),
    keywords: 'maatwerk interieur, keuken op maat, kledingkast op maat, tv-meubel op maat, boekenkast op maat, meubelmaker Terheijden, meubelmaker Noord-Brabant',
  }
  if (business.kvk) {
    schema.identifier = [{ '@type': 'PropertyValue', propertyID: 'KvK', name: 'KvK', value: business.kvk }]
  }
  return schema
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: BASE,
    logo: `${BASE}/logo/jdg-mark.png`,
    foundingDate: business.founded,
    founder: { '@id': `${BASE}/#founder` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: business.phoneE164,
      email: business.email,
      areaServed: 'NL',
      availableLanguage: ['nl-NL', 'en'],
    }],
    sameAs: [business.social.instagram, business.social.facebook, business.social.google].filter(Boolean),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    url: BASE,
    name: business.name,
    description: business.description,
    inLanguage: 'nl-NL',
    publisher: { '@id': `${BASE}/#organization` },
    // Geen SearchAction: die wees naar /zoek?q=, en die pagina bestaat niet.
    // Schema dat iets belooft wat de site niet heeft is een fout, geen extraatje.
  }
}

export function founderPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE}/#founder`,
    name: 'Jonas de Graaf',
    alternateName: business.ownerFirstName,
    jobTitle: 'Ontwerper en meubelmaker',
    description: 'Oprichter van JDG Maatwerk Interieur. Ontwerpt en bouwt maatwerk keukens, kledingkasten en meubels vanuit de eigen werkplaats in Terheijden.',
    worksFor: { '@id': `${BASE}/#organization` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    url: `${BASE}/over-jonas`,
    knowsAbout: ['Maatwerk interieur', 'Meubelmakerij', 'Keuken op maat', 'Kledingkast op maat', 'Zolderinbouw', 'Interieurontwerp'],
  }
}

export function faqPageSchema(items?: { q: string; a: string }[]) {
  const list = items ?? faqs
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceSchema(slug: string, city?: string) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return null
  const cityObj = city ? cities.find((c) => c.slug === city) : null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': cityObj ? `${BASE}/diensten/${slug}/${city}#service` : `${BASE}/diensten/${slug}#service`,
    name: cityObj ? `${service.title} in ${cityObj.name}` : service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: { '@id': `${BASE}/#business` },
    areaServed: cityObj ? { '@type': 'City', name: cityObj.name } : cities.map((c) => c.name),
    url: cityObj ? `${BASE}/diensten/${slug}/${city}` : `${BASE}/diensten/${slug}`,
    category: 'Meubelmakerij en interieurbouw',
  }
}

export type BreadcrumbItem = { name: string; url: string }
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE}${item.url}`,
    })),
  }
}

export function siteNavigationSchema() {
  const items = [
    { name: 'Diensten', url: '/diensten' },
    { name: 'Keukens op maat', url: '/diensten/keukens-op-maat' },
    { name: 'Kledingkasten op maat', url: '/diensten/kledingkasten-op-maat' },
    { name: 'Tv-meubels op maat', url: '/diensten/tv-meubels-op-maat' },
    { name: 'Projecten', url: '/projecten' },
    { name: 'Werkwijze', url: '/werkwijze' },
    { name: 'Over Jonas', url: '/over-jonas' },
    { name: 'Werkgebied', url: '/werkgebied' },
    { name: 'Veelgestelde vragen', url: '/veelgestelde-vragen' },
    { name: 'Contact', url: '/contact' },
  ]
  return items.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: item.name,
    url: `${BASE}${item.url}`,
  }))
}

/* ------------------------------------------------------------------ *
 * Toegevoegd 02-09-2026 bij de vindbaarheidsronde.
 *
 * Aanleiding: serviceSchema() en breadcrumbSchema() stonden hier al maanden,
 * maar werden nergens aangeroepen. 134 van de 138 pagina's gingen live met
 * uitsluitend de sitewide LocalBusiness-blok uit layout.tsx — geen Service,
 * geen FAQPage, geen kruimelpad, terwijl de FAQ's per dienst al in
 * content/services.ts klaarstonden.
 * ------------------------------------------------------------------ */

/** Eén <script type="application/ld+json"> met alle blokken van deze pagina. */
export function pageSchema(blocks: (object | null | undefined)[]) {
  return JSON.stringify(blocks.filter(Boolean))
}

/** Een gerealiseerd project: echte foto, echte omschrijving, eigen URL. */
export function projectSchema(p: {
  slug: string; title: string; description: string; hero: string
  gallery: string[]; location: string; date: string; material?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${BASE}/projecten/${p.slug}#project`,
    name: p.title,
    headline: p.title,
    description: p.description,
    url: `${BASE}/projecten/${p.slug}`,
    dateCreated: p.date,
    creator: { '@id': `${BASE}/#business` },
    contentLocation: { '@type': 'Place', name: p.location },
    material: p.material,
    image: p.gallery.map((g) => `${BASE}${g}`),
    primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE}${p.hero}`, caption: p.title },
    isPartOf: { '@id': `${BASE}/#website` },
  }
}

/** Een lijst van pagina's (projectoverzicht, dienstenoverzicht, werkgebied). */
export function itemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url.startsWith('http') ? it.url : `${BASE}${it.url}`,
    })),
  }
}

/**
 * Het vak zoals de zoeker het noemt. GSC 23-31 aug 2026: 161 vertoningen op
 * 'interieurbouwer', 'interieurbouw', 'meubelmaker', 'meubelmakerij' en
 * 'projectinrichting' — woorden die op de site zelf nergens stonden.
 * Dit zijn geen nieuwe claims: het is hetzelfde vak, in de woorden van de klant.
 */
export const vakTermen = [
  'meubelmaker',
  'meubelmakerij',
  'interieurbouwer',
  'interieurbouw',
  'maatwerk interieur',
  'meubelmaker op maat',
] as const

/** LocalBusiness-variant voor één plaats: dezelfde zaak, expliciet gekoppeld aan de stad. */
export function localBusinessInCitySchema(city: { name: string; slug: string; region: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE}/werkgebied/${city.slug}#service`,
    name: `Meubelmaker en interieurbouwer in ${city.name}`,
    serviceType: 'Maatwerk interieur, meubelmakerij en interieurbouw',
    description: `JDG Maatwerk Interieur ontwerpt, bouwt en plaatst maatwerk keukens, kasten en meubels voor woningen in ${city.name} en omgeving, vanuit de eigen werkplaats in ${business.address.city}.`,
    provider: { '@id': `${BASE}/#business` },
    areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.region } },
    url: `${BASE}/werkgebied/${city.slug}`,
    category: 'Meubelmakerij en interieurbouw',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Maatwerk in ${city.name}`,
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${s.title} in ${city.name}`,
          url: `${BASE}/diensten/${s.slug}/${city.slug}`,
        },
      })),
    },
  }
}
