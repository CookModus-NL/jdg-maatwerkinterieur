import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = business.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, priority: 1, changeFrequency: 'monthly' },
    { url: `${base}/diensten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/werkgebied`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/projecten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/over-jonas`, lastModified: now, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/contact`, lastModified: now, priority: 0.8, changeFrequency: 'yearly' },
    { url: `${base}/privacy`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/algemene-voorwaarden`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/diensten/${s.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: 'monthly',
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/werkgebied/${c.slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  // De grote SEO uitbreiding: elk dienst × elke stad combinatie
  const serviceCityPages: MetadataRoute.Sitemap = []
  for (const s of services) {
    for (const c of cities) {
      serviceCityPages.push({
        url: `${base}/diensten/${s.slug}/${c.slug}`,
        lastModified: now,
        priority: 0.6,
        changeFrequency: 'monthly',
      })
    }
  }

  return [...staticPages, ...servicePages, ...cityPages, ...serviceCityPages]
}
