import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { blogPosts, getBlogPost } from '@/content/blog'
import { business } from '@/content/business'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
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
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${business.url}/over-jonas`,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: { '@type': 'ImageObject', url: `${business.url}/logo/jdg-mark.png` },
    },
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(', '),
    mainEntityOfPage: `${business.url}/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="pt-32 pb-4">
        <div className="container-x">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Alle artikelen
          </Link>
        </div>
      </section>

      <section className="pt-8 pb-16">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-jdg-700 mb-6">
            <span>{post.category}</span>
            <span className="text-ink-300">·</span>
            <span>{post.readingMinutes} min lezen</span>
            <span className="text-ink-300">·</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-ink-950">{post.h1}</h1>
          <p className="mt-8 text-[17px] leading-[1.75] text-ink-700">{post.intro}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-xl overflow-hidden bg-ink-100">
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
                    <li key={j} className="flex items-start gap-3 text-[15.5px] text-ink-800">
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
            <div className="font-display text-2xl text-ink-950">Jonas de Graaf</div>
            <div className="text-[14px] text-ink-600 mt-1">Oprichter van JDG Maatwerk Interieur, Terheijden</div>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-[13px] font-medium hover:bg-jdg-700 transition-colors">
              Overleg jouw project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
