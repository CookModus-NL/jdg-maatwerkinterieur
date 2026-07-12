import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'FurnitureStore'],
    '@id': `${business.url}/#business`,
    name: business.name,
    alternateName: 'JDG',
    description: business.description,
    slogan: business.tagline,
    url: business.url,
    image: `${business.url}/opengraph-image`,
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: business.founded,
    knowsLanguage: ['nl-NL'],
    founder: {
      '@type': 'Person',
      name: 'Jonas',
      jobTitle: 'Maatwerk interieurbouwer',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })),
    geo: { '@type': 'GeoCoordinates', latitude: 51.665, longitude: 4.755 },
    identifier: [{ '@type': 'PropertyValue', name: 'KvK', value: business.kvk }],
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: '€€€',
    paymentAccepted: 'Bank transfer',
    currenciesAccepted: 'EUR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Maatwerk interieur',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.metaDescription,
          url: `${business.url}/diensten/${s.slug}`,
        },
      })),
    },
    sameAs: business.social.instagram ? [business.social.instagram] : [],
  }
}
