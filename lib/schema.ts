import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'FurnitureStore'],
    '@id': `${business.url}/#business`,
    name: business.name,
    alternateName: 'JDG',
    description: business.description,
    slogan: business.tagline,
    url: business.url,
    logo: `${business.url}/logo/jdg-mark.png`,
    image: `${business.url}/opengraph-image`,
    email: business.email,
    telephone: business.phoneE164,
    foundingDate: business.founded,
    knowsLanguage: ['nl-NL', 'en'],
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
      ...cities.map((c) => ({ '@type': 'City', name: c.name })),
    ],
    geo: { '@type': 'GeoCoordinates', latitude: 51.6653, longitude: 4.7526 },
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
    sameAs: business.social.instagram ? [business.social.instagram] : undefined,
  }
  if (business.kvk) {
    schema.identifier = [{ '@type': 'PropertyValue', name: 'KvK', value: business.kvk }]
  }
  return schema
}
