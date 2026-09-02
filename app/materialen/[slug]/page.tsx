import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { materialen, getMateriaal } from '@/content/materialen'
import { services } from '@/content/services'
import { business } from '@/content/business'
import { Kruimelpad, VragenBlok } from '@/components/secties'
import { breadcrumbSchema, faqPageSchema, pageSchema } from '@/lib/schema'

export const dynamicParams = false

export function generateStaticParams() {
  return materialen.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const m = getMateriaal(slug)
  if (!m) return { title: 'Niet gevonden' }
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    alternates: { canonical: `${business.url}/materialen/${m.slug}` },
    openGraph: {
      title: m.metaTitle,
      description: m.metaDescription,
      url: `${business.url}/materialen/${m.slug}`,
      images: [`${business.url}${m.hero}`],
    },
  }
}

export default async function MateriaalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const m = getMateriaal(slug)
  if (!m) notFound()

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Materialen', url: '/materialen' },
    { name: m.name },
  ]

  // De AggregateOffer die hier stond beloofde een prijs en 'InStock' voor een
  // materiaal dat JDG niet los verkoopt. Structured data die iets anders zegt
  // dan de pagina is een fout, geen extraatje — dus eruit.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: m.name,
    description: m.metaDescription,
    image: `${business.url}${m.hero}`,
    category: m.category,
    material: m.name,
    url: `${business.url}/materialen/${m.slug}`,
    manufacturer: { '@id': `${business.url}/#organization` },
  }

  const ld = pageSchema([
    productSchema,
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/materialen/${m.slug}` }))),
    m.vragen && m.vragen.length > 0 ? faqPageSchema(m.vragen) : null,
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <section className="pt-32 pb-16">
        <div className="container-x">
          <div className="mb-8">
            <Kruimelpad items={kruimels} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow">{m.category} · {m.prijsklasse}</span>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] text-ink-950">{m.name}</h1>
              <p className="mt-6 text-[19px] italic text-jdg-700 leading-snug">{m.short}</p>
              <p className="mt-8 text-[17px] leading-[1.8] text-ink-700">{m.intro}</p>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-ink-700">
                {m.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink-100">
                <Image src={m.hero} alt={m.name} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper-2">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Toepassingen</span>
            <h2 className="mt-4 font-display text-2xl lg:text-3xl text-ink-950">Waar {m.name} werkt.</h2>
            <ul className="mt-6 space-y-3">
              {m.toepassingen.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-ink-800 border-b border-ink-900/10 pb-3">
                  <Check className="h-4 w-4 text-jdg-700 mt-1 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Varianten</span>
            <h2 className="mt-4 font-display text-2xl lg:text-3xl text-ink-950">{m.varianten.length} keuzes binnen {m.name}.</h2>
            <ul className="mt-6 space-y-3">
              {m.varianten.map((v) => (
                <li key={v} className="text-[15px] text-ink-800 border-b border-ink-900/10 pb-3">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-l-2 border-jdg-500 pl-6">
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-jdg-700 mb-2">Duurzaamheid</div>
            <p className="text-[15px] leading-[1.7] text-ink-700">{m.duurzaamheid}</p>
          </div>
          <div className="border-l-2 border-jdg-500 pl-6">
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-jdg-700 mb-2">Onderhoud</div>
            <p className="text-[15px] leading-[1.7] text-ink-700">{m.onderhoud}</p>
          </div>
        </div>
      </section>

      {m.vragen && m.vragen.length > 0 && (
        <VragenBlok vragen={m.vragen} titel={`Vragen over ${m.name}.`} />
      )}

      <section className="py-16 border-t border-ink-100">
        <div className="container-x">
          <span className="eyebrow">Waar dit materiaal in terugkomt</span>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink-700">
            {services.map((s2) => (
              <Link key={s2.slug} href={`/diensten/${s2.slug}`} className="hover:text-jdg-700 transition-colors">
                {s2.singular}
              </Link>
            ))}
            <Link href="/projecten" className="hover:text-jdg-700 transition-colors">Projecten</Link>
            <Link href="/materialen" className="hover:text-jdg-700 transition-colors">Alle materialen</Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-ink-100">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-ink-950">
            {m.name} voor jouw project?
          </h2>
          <p className="mt-6 text-[15px] text-ink-700">
            Vraag een gesprek aan om samen materiaalstalen te bekijken.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-[13px] font-medium hover:bg-jdg-700 transition-colors">
            Neem contact op <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
