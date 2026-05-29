/**
 * JSON-LD structured data — kritisch voor lokale SEO + rich results.
 * Geverifieerd tegen schema.org/LocalBusiness + Google's rich result guidelines.
 */

import { business } from '@/content/business'
import { services } from '@/content/services'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FurnitureStore', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    alternateName: ['JDG', 'JDG Maatwerk', 'Jonas Maatwerk Interieur'],
    description: business.description,
    slogan: business.tagline,
    url: business.url,
    logo: {
      '@type': 'ImageObject',
      url: business.photos.logo,
      width: 651,
      height: 651,
    },
    image: [
      business.photos.keuken1,
      business.photos.kast1,
      business.photos.keuken2,
      `${business.url}/opengraph-image`,
    ],
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: business.founded,
    founder: {
      '@type': 'Person',
      name: 'Jonas',
      jobTitle: 'Meubelmaker en eigenaar',
      worksFor: { '@id': `${business.url}/#business` },
    },
    knowsLanguage: ['nl-NL'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6727,
      longitude: 4.7475,
    },
    areaServed: [
      { '@type': 'Country', name: 'Nederland' },
      ...business.serviceArea.map((city) => ({
        '@type': 'City',
        name: city,
      })),
    ],
    identifier: [
      { '@type': 'PropertyValue', name: 'KvK', value: business.kvk },
    ],
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: '€€€',
    paymentAccepted: ['Cash', 'Bank transfer', 'Tikkie', 'Pin'],
    currenciesAccepted: 'EUR',
    sameAs: [
      business.social.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phoneE164,
        contactType: 'customer service',
        areaServed: 'NL',
        availableLanguage: ['Dutch', 'English'],
        contactOption: 'TollFree',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Maatwerk diensten',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          provider: { '@id': `${business.url}/#business` },
          areaServed: 'NL',
          url: `${business.url}/diensten/${s.slug}`,
        },
      })),
    },
  }
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.long,
    serviceType: service.title,
    provider: { '@id': `${business.url}/#business` },
    areaServed: [
      { '@type': 'Country', name: 'Nederland' },
      ...business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
    ],
    url: `${business.url}/diensten/${slug}`,
    image: service.hero,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${business.url}/#organization`,
    name: business.name,
    url: business.url,
    logo: business.photos.logo,
    sameAs: [business.social.instagram].filter(Boolean),
  }
}
