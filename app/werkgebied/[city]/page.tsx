import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, MapPin, Phone } from 'lucide-react'
import { cities, getCity } from '@/content/cities'
import { services } from '@/content/services'
import { business } from '@/content/business'

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const c = getCity(city)
  if (!c) return {}
  return {
    title: `Maatwerk interieur in ${c.name} — JDG`,
    description: `Op zoek naar maatwerk interieur in ${c.name}? Jonas van JDG ontwerpt en bouwt keukens, kasten en meubels op maat voor woningen in ${c.name} en omgeving.`,
    alternates: { canonical: `${business.url}/werkgebied/${c.slug}` },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const c = getCity(city)
  if (!c) notFound()

  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  return (
    <>
      <section className="pt-32 pb-4">
        <div className="container-x">
          <Link href="/werkgebied" className="inline-flex items-center gap-2 text-[13px] text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Volledig werkgebied
          </Link>
        </div>
      </section>

      <section className="pt-8 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">{c.region} · {c.postcodePrefix}</span>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-ink-900">
                Maatwerk interieur in{' '}
                <span className="italic font-light text-jdg-600">{c.name}</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-ink-700">
                {c.intro}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-600">
            <div><span className="text-jdg-600">Afstand</span> — <span className="tabular">{c.distanceKm} km</span></div>
            <div><span className="text-jdg-600">Regio</span> — {c.region}</div>
            <div><span className="text-jdg-600">Postcode</span> — {c.postcodePrefix}</div>
            <div><span className="text-jdg-600">Bekend om</span> — {c.landmark}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-2">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Diensten in {c.name}</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
                Zes vormen van maatwerk.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.7] text-ink-700 max-w-lg">
                Wat je ook zoekt — een keuken, een kast of een tv-meubel — Jonas ontwerpt en bouwt het op maat voor jouw woning in {c.name}.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}/${c.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4 border-b border-ink-900/15 hover:border-jdg-500 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-jdg-600 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-normal text-ink-900 group-hover:text-jdg-600 transition-colors">
                    {s.title} in {c.name}
                  </h3>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Klaar om te beginnen?</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal italic leading-[1] tracking-[-0.02em] text-ink-900">
              Overleggen over maatwerk in {c.name}?
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={waHref(`Hoi Jonas, ik zoek maatwerk interieur in ${c.name}. Kunnen we een gesprek inplannen?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                WhatsApp Jonas
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
                <Phone className="h-4 w-4" />
                <span className="tabular">{business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
