import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, MapPin, Phone } from 'lucide-react'
import { services, getService } from '@/content/services'
import { cities, getCity } from '@/content/cities'
import { business } from '@/content/business'

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = []
  for (const s of services) for (const c of cities) params.push({ slug: s.slug, city: c.slug })
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params
  const s = getService(slug)
  const c = getCity(city)
  if (!s || !c) return {}
  const title = `${s.title} in ${c.name} — JDG Maatwerk Interieur`
  const desc = `${s.title} in ${c.name}? Jonas van JDG ontwerpt en bouwt maatwerk voor woningen in ${c.name} en omgeving. Vrijblijvend gesprek binnen een week.`
  return {
    title,
    description: desc,
    alternates: { canonical: `${business.url}/diensten/${s.slug}/${c.slug}` },
    openGraph: { title, description: desc, type: 'article' },
  }
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params
  const s = getService(slug)
  const c = getCity(city)
  if (!s || !c) notFound()

  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  const otherCities = cities.filter((x) => x.slug !== c.slug).slice(0, 8)

  return (
    <>
      <section className="pt-32 pb-4">
        <div className="container-x">
          <div className="flex items-center gap-2 text-[13px] text-ink-500">
            <Link href="/diensten" className="hover:text-ink-900 transition-colors">Diensten</Link>
            <span>/</span>
            <Link href={`/diensten/${s.slug}`} className="hover:text-ink-900 transition-colors">{s.title}</Link>
            <span>/</span>
            <span className="text-ink-900">{c.name}</span>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <span className="eyebrow">{c.region} · {c.postcodePrefix}</span>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.02em] text-ink-900">
                {s.title} in{' '}
                <span className="italic font-light text-jdg-600">{c.name}</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-ink-700">
                {c.intro}
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                <Image
                  src={s.hero}
                  alt={`${s.title} in ${c.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col">
              <div className="border-t border-ink-900/15 pt-6">
                <span className="eyebrow">De afstand</span>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-6xl font-normal text-ink-900 tabular">
                    {c.distanceKm || '±0'}
                  </span>
                  <span className="text-[13px] font-mono uppercase tracking-[0.2em] text-ink-500">km vanuit Terheijden</span>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-700">
                  Jonas komt kosteloos langs voor een eerste gesprek. Rond {c.landmark} werken we vaker aan {s.title.toLowerCase()}.
                </p>
              </div>

              <div className="mt-8 border-t border-ink-900/15 pt-6">
                <span className="eyebrow">Direct contact</span>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={waHref(`Hoi Jonas, ik zoek ${s.title.toLowerCase()} in ${c.name}. Kunnen we vrijblijvend afspreken?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary justify-center"
                  >
                    WhatsApp Jonas
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={`tel:${business.phoneE164}`} className="btn btn-outline justify-center">
                    <Phone className="h-4 w-4" />
                    <span className="tabular">{business.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bone-100">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Onze aanpak in {c.name}</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
                Zo verloopt een project.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.7] text-ink-700 max-w-md">
                Voor {c.name} volgt Jonas dezelfde vier stappen als voor elk ander project. Klaar tot in het detail, zonder verrassingen.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-900/15">
                {s.process.map((step) => (
                  <div key={step.n} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                    <div className="col-span-3 lg:col-span-2">
                      <span className="font-mono text-[13px] text-jdg-600 tabular">{step.n}</span>
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-2xl font-normal text-ink-900">{step.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Andere plaatsen</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-ink-900">
              {s.title} elders in de regio.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherCities.map((oc) => (
              <Link
                key={oc.slug}
                href={`/diensten/${s.slug}/${oc.slug}`}
                className="group flex items-center justify-between border-b border-ink-900/15 py-3 hover:border-jdg-500 transition-colors"
              >
                <span className="flex items-center gap-2 text-[14px] font-medium text-ink-900">
                  <MapPin className="h-3.5 w-3.5 text-jdg-600" />
                  {oc.name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
