import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const base = business.url

  const heroImages = [
    `${base}/opengraph-image`, `${base}/logo/jdg-mark.png`,
    `${base}${business.photos.keuken1}`, `${base}${business.photos.kast1}`, `${base}${business.photos.keuken2}`,
  ]

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, priority: 1, changeFrequency: 'weekly', images: heroImages },
    { url: `${base}/diensten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/werkgebied`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/projecten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/werkwijze`, lastModified: now, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/over-jonas`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/veelgestelde-vragen`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/contact`, lastModified: now, priority: 0.8, changeFrequency: 'yearly' },
    { url: `${base}/privacy`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/algemene-voorwaarden`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/diensten/${s.slug}`, lastModified: now, priority: 0.85, changeFrequency: 'monthly',
  }))
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/werkgebied/${c.slug}`, lastModified: now, priority: 0.75, changeFrequency: 'monthly',
  }))
  const serviceCityPages: MetadataRoute.Sitemap = []
  for (const s of services) {
    for (const c of cities) {
      serviceCityPages.push({
        url: `${base}/diensten/${s.slug}/${c.slug}`, lastModified: now, priority: 0.65, changeFrequency: 'monthly',
      })
    }
  }
    const { materialen } = await import('@/content/materialen')
  const { blogPosts } = await import('@/content/blog')
  const materialenIndex: MetadataRoute.Sitemap = [
    { url: `${base}/materialen`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/blog`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
  ]
  const materialenPages: MetadataRoute.Sitemap = materialen.map((m) => ({
    url: `${base}/materialen/${m.slug}`, lastModified: now, priority: 0.75, changeFrequency: 'monthly',
  }))
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updatedAt), priority: 0.75, changeFrequency: 'monthly',
  }))
  return [...staticPages, ...servicePages, ...cityPages, ...serviceCityPages, ...materialenIndex, ...materialenPages, ...blogPostPages]
}
