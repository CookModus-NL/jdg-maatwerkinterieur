import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, MapPin, Phone, MessageCircle } from 'lucide-react'
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
    title: `Maatwerk interieur in ${c.name}`,
    description: `Maatwerk keukens, kasten en meubels voor ${c.name} en omgeving. JDG Maatwerk Interieur werkt vanuit Terheijden door heel Nederland.`,
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
          <span className="eyebrow">{c.region} · {c.postcodePrefix}</span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink-950">
            Maatwerk interieur in <span className="text-jdg-700">{c.name}</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-ink-700">{c.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={waHref(`Hoi JDG, ik zoek maatwerk interieur in ${c.name}. Kunnen we afspreken?`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp JDG
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
              <Phone className="h-4 w-4" /> <span className="tabular">{business.phone}</span>
            </a>
          </div>

          <div className="mt-8 inline-flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
            <span className="text-jdg-700">Afstand</span>, <span className="tabular">{c.distanceKm} km vanuit Terheijden</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper-2">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow">Diensten in {c.name}</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl leading-tight text-ink-950">
              Wat wil je op maat laten maken?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}/${c.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4 border-b border-ink-900/15 hover:border-jdg-500 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-jdg-700 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl leading-tight text-ink-950 group-hover:text-jdg-700 transition-colors">
                    {s.title} in {c.name}
                  </h3>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
