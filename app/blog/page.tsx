import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { livePosts } from '@/content/blog'
import { itemListSchema, breadcrumbSchema, pageSchema } from '@/lib/schema'
import { Kruimelpad } from '@/components/secties'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Kennis over maatwerk interieur',
  description: 'Uitleg over maatwerk interieur: het verschil tussen een meubelmaker, interieurbouwer en keukenzaak, kast op maat of montage, en hoe een offerte is opgebouwd. Geschreven vanuit de werkplaats.',
  alternates: { canonical: `${business.url}/blog` },
}

export default function BlogPage() {
  const ld = pageSchema([
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Kennis', url: '/blog' }]),
    itemListSchema('Kennis over maatwerk interieur', livePosts.map((p) => ({ name: p.title, url: `/blog/${p.slug}` }))),
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <section className="pt-32 pb-16">
        <div className="container-x">
          <Kruimelpad items={[{ name: 'Home', url: '/' }, { name: 'Kennis' }]} />
        </div>
      </section>
      <section className="pb-16">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Kennis uit de werkplaats</span>
          <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] text-ink-950">
            Kennis uit de<br /><span className="text-jdg-700">werkplaats</span>.
          </h1>
          <p className="mt-8 text-[17px] leading-[1.75] text-ink-700">
            Uitleg over hoe maatwerk werkt, waar het misgaat en waar je op let voor je iets laat maken.
            Geen showroomtaal, gewoon wat er in de werkplaats gebeurt.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {livePosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-ink-100">
                  <Image src={post.hero} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.2em] text-jdg-700 mb-2">
                    <span>{post.category}</span>
                    <span className="text-ink-300">·</span>
                    <span>{post.readingMinutes} min lezen</span>
                  </div>
                  <h2 className="font-display text-xl lg:text-2xl text-ink-950 group-hover:text-jdg-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
