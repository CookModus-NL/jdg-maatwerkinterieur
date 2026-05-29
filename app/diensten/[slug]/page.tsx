import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Phone, MessageCircle, ChevronRight, Check } from 'lucide-react'
import { services, servicesBySlug } from '@/content/services'
import { business } from '@/content/business'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesBySlug[slug]
  if (!service) return {}
  return {
    title: `${service.title} uit Terheijden`,
    description: service.short,
    alternates: { canonical: `/diensten/${slug}` },
    openGraph: {
      title: `${service.title} uit Terheijden | JDG Maatwerk Interieur`,
      description: service.short,
      images: [service.hero],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesBySlug[slug]
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(slug)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: business.url },
        { name: 'Diensten', url: `${business.url}/diensten` },
        { name: service.title, url: `${business.url}/diensten/${slug}` },
      ])) }} />

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper pt-8 pb-20 lg:pb-32">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />

        <div className="container-x">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-primary-500 pt-8">
            <Link href="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten" className="hover:text-accent-600">Diensten</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-700">{service.title}</span>
          </nav>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="reveal">
              <div className="eyebrow">{service.tagline}</div>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-primary-900">
                {service.title}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-600">{service.long}</p>

              {service.bullets && (
                <ul className="mt-10 grid gap-2 sm:grid-cols-2 max-w-xl">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-primary-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" strokeWidth={3} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hi, ik heb een vraag over ' + service.title.toLowerCase() + '.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-lg active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp JDG
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn-secondary">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
              </div>
            </div>

            <div className="relative h-[480px] lg:h-[600px] reveal reveal-delay-2">
              <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl img-zoom">
                <Image src={service.hero} alt={service.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div aria-hidden className="absolute -bottom-6 -left-6 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`h-8 w-8 rounded ${i % 2 ? 'bg-accent-500' : 'bg-primary-900'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT KRIJG JE? ─────────────────────────── */}
      <section className="bg-primary-900 text-paper py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Dit krijg je altijd
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Eigen ontwerp', body: 'Je meubel wordt voor jouw ruimte getekend. Niks uit catalogus.' },
              { title: 'Heldere offerte', body: 'Gespecificeerd, geen kleine lettertjes, binnen 1 werkdag.' },
              { title: 'Eigen productie', body: 'Vervaardigd in eigen werkplaats. Korte lijnen, vaste kwaliteit.' },
              { title: '5 jaar garantie', body: 'Op de constructie en de plaatsing van al het maatwerk.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Check className="h-6 w-6 text-accent-400 shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <div className="font-display text-lg font-semibold text-paper">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-primary-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Veelgestelde vragen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat klanten<br />
            <span className="italic font-light text-primary-600">vaak vragen.</span>
          </h2>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {service.faqs.map((f) => (
              <details key={f.q} className="group py-6 cursor-pointer">
                <summary className="flex items-start justify-between gap-4 list-none">
                  <dt className="font-display text-lg font-semibold text-primary-900 group-hover:text-accent-600">
                    {f.q}
                  </dt>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-clay text-primary-700 transition-all duration-300 group-open:rotate-45 group-open:bg-accent-500 group-open:text-paper shrink-0">
                    <span className="h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </summary>
                <dd className="mt-4 text-base leading-relaxed text-primary-600 pr-12">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── ANDERE DIENSTEN ─────────────────────── */}
      <section className="bg-clay py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-primary-900 sm:text-4xl mb-12">
            Ook interessant
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.slug} href={`/diensten/${s.slug}`} className="group rounded-2xl bg-paper p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                  <Icon className="h-8 w-8 text-accent-600" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-600 line-clamp-2">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 group-hover:gap-2 transition-all">
                    Bekijken <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 lg:p-16 text-center text-paper relative overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 -bottom-12 left-1/2 -translate-x-1/2 grid grid-cols-12 gap-1 opacity-5">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="h-8 w-8 rounded bg-paper" />
            ))}
          </div>
          <h2 className="relative font-display text-3xl font-bold text-paper sm:text-4xl">
            Klaar voor je {service.title.toLowerCase()}?
          </h2>
          <p className="relative mt-4 text-primary-300 max-w-md mx-auto">
            Stuur foto’s en maten via WhatsApp voor een eerste schets en prijsindicatie binnen 1 werkdag.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent"><Phone className="h-4 w-4" /> {business.phone}</a>
            <a href={`https://wa.me/${business.whatsapp.replace('+', '')}`} className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-primary-900" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
