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
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/zoek?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
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
