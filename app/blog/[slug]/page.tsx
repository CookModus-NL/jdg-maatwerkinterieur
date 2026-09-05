import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { livePosts, getBlogPost } from '@/content/blog'
import { services } from '@/content/services'
import { breadcrumbSchema, pageSchema } from '@/lib/schema'
import { Kruimelpad, ContactBlok } from '@/components/secties'
import { business } from '@/content/business'

export const dynamicParams = false

export function generateStaticParams() {
  return livePosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Niet gevonden' }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${business.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${business.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [`${business.url}${post.hero}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `${business.url}${post.hero}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author:
      post.author === 'Jonas de Graaf'
        ? { '@type': 'Person', name: post.author, url: `${business.url}/over-jonas` }
        : { '@id': `${business.url}/#organization` },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: { '@type': 'ImageObject', url: `${business.url}/logo/jdg-mark.png` },
    },
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(', '),
    mainEntityOfPage: `${business.url}/blog/${post.slug}`,
  }

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Kennis', url: '/blog' },
    { name: post.title },
  ]
  const ld = pageSchema([
    articleSchema,
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/blog/${post.slug}` }))),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <section className="pt-32 pb-4">
        <div className="container-x">
          <Kruimelpad items={kruimels} />
        </div>
      </section>

      <section className="pt-8 pb-16">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-jdg-700 mb-6">
            <span>{post.category}</span>
            <span aria-hidden="true" className="text-ink-300">·</span>
            <span>{post.readingMinutes} min lezen</span>
            <span aria-hidden="true" className="text-ink-300">·</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-ink-950">{post.h1}</h1>
          <p className="mt-8 text-[16px] leading-[1.75] text-ink-700">{post.intro}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-xl overflow-hidden bg-paper-2">
            <Image src={post.hero} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 80vw" className="object-cover" />
          </div>
        </div>
      </section>

      <article className="pb-16">
        <div className="container-x max-w-3xl">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-display text-2xl lg:text-3xl text-ink-950 leading-tight mb-4">{section.heading}</h2>
              <p className="text-[16px] leading-[1.8] text-ink-700">{section.body}</p>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[16px] text-ink-800">
                      <span className="text-jdg-700 mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </article>

      <section className="py-16 border-t border-ink-100">
        <div className="container-x max-w-3xl">
          <div className="p-8 rounded-xl bg-paper-2 border border-ink-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-jdg-700">Geschreven door</span>
            </div>
            <div className="font-display text-2xl text-ink-950">{post.author}</div>
            <div className="text-[14px] text-ink-600 mt-1">
              {post.author === 'Jonas de Graaf'
                ? 'Oprichter van JDG Maatwerk Interieur, Terheijden'
                : 'Uit de werkplaats van JDG Maatwerk Interieur in Terheijden'}
            </div>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-[14px] font-medium hover:bg-jdg-700 transition-colors">
              Overleg jouw project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <span className="eyebrow">Verder lezen</span>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink-700">
              {services.map((s2) => (
                <Link key={s2.slug} href={`/diensten/${s2.slug}`} className="hover:text-jdg-700 transition-colors">
                  {s2.singular}
                </Link>
              ))}
              <Link href="/materialen" className="hover:text-jdg-700 transition-colors">Materialen</Link>
              <Link href="/projecten" className="hover:text-jdg-700 transition-colors">Projecten</Link>
            </div>
          </div>

          {livePosts.filter((p) => p.slug !== post.slug).length > 0 && (
            <div className="mt-12 border-t border-ink-900/10 pt-8">
              <span className="eyebrow">Andere artikelen</span>
              <ul className="mt-5 space-y-3">
                {livePosts.filter((p) => p.slug !== post.slug).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-[16px] text-ink-900 hover:text-jdg-700 transition-colors">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ContactBlok
        kop="Iets laten maken? Stuur een appje."
        waMsg="Hoi JDG, ik las een artikel op jullie site en heb een vraag over maatwerk."
      />
    </>
  )
}
