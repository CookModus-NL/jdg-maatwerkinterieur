import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'
import { projects } from '@/content/projects'

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
  // Alleen de dienst×stad-combinaties met gemeten vraag. Het volledige rooster
  // van 6 × 16 stond hier eerder: 96 URL's die onderling voor ~80% gelijk waren,
  // gemiddeld op positie 24 stonden en nul klikken opleverden. De rest leidt nu
  // met een 308 naar de stadpagina. Zie content/lokaal-rooster.ts.
  const { lokaalRooster } = await import('@/content/lokaal-rooster')
  const serviceCityPages: MetadataRoute.Sitemap = lokaalRooster.map((r) => ({
    url: `${base}/diensten/${r.dienst}/${r.stad}`, lastModified: now, priority: 0.7, changeFrequency: 'monthly',
  }))
    const { materialen } = await import('@/content/materialen')
  const { livePosts } = await import('@/content/blog')
  const materialenIndex: MetadataRoute.Sitemap = [
    { url: `${base}/materialen`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/blog`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
  ]
  const materialenPages: MetadataRoute.Sitemap = materialen.map((m) => ({
    url: `${base}/materialen/${m.slug}`, lastModified: now, priority: 0.75, changeFrequency: 'monthly',
  }))
  const blogPostPages: MetadataRoute.Sitemap = livePosts.map((post) => ({
    url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updatedAt), priority: 0.75, changeFrequency: 'monthly',
  }))
  // De veertien projectpagina's ontbraken hier, terwijl ze het enige volledig
  // unieke materiaal van de site bevatten: eigen foto's en eigen tekst.
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projecten/${p.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'yearly',
    images: [`${base}${p.hero}`, ...p.gallery.map((g) => `${base}${g}`)].filter((v, i, a) => a.indexOf(v) === i),
  }))
  return [...staticPages, ...servicePages, ...cityPages, ...serviceCityPages, ...materialenIndex, ...materialenPages, ...blogPostPages, ...projectPages]
}
