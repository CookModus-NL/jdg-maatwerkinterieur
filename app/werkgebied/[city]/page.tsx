import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { cities, getCity, nearbyCities } from '@/content/cities'
import { services } from '@/content/services'
import { materialen } from '@/content/materialen'
import { projects } from '@/content/projects'
import { faqs } from '@/content/faq'
import { business } from '@/content/business'
import { heeftLokalePagina } from '@/content/lokaal-rooster'
import {
  Kruimelpad,
  ProjectenStrook,
  MaterialenStrook,
  VragenBlok,
  PlaatsFeiten,
  ContactBlok,
  PlaatsenRooster,
} from '@/components/secties'
import {
  breadcrumbSchema,
  faqPageSchema,
  itemListSchema,
  localBusinessInCitySchema,
  pageSchema,
} from '@/lib/schema'

export const dynamicParams = false

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const c = getCity(city)
  if (!c) return {}
  // "meubelmaker" en "interieurbouwer" stonden nergens op de site, terwijl er in
  // 23-31 aug 2026 161 vertoningen op precies die woorden binnenkwamen.
  const title = `Meubelmaker en interieurbouwer in ${c.name}`
  const description = `Maatwerk keukens, kledingkasten, inloopkasten en tv-meubels voor ${c.name} en omgeving. JDG ontwerpt, bouwt en plaatst zelf, vanuit de werkplaats in ${business.address.city} op ${c.distanceKm} km. Gratis inmeten en offerte.`
  return {
    title,
    description,
    alternates: { canonical: `${business.url}/werkgebied/${c.slug}` },
    openGraph: { title, description, type: 'article' },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const c = getCity(city)
  if (!c) notFound()

  const index = cities.findIndex((x) => x.slug === c.slug)
  // Elke plaats krijgt een ander drietal uit het portfolio, zodat de pagina's
  // niet alleen in de plaatsnaam verschillen.
  const projecten = [0, 1, 2].map((k) => projects[(index * 3 + k) % projects.length])
  const buren = nearbyCities(c.slug, 4)
  const vragen = faqs
    .filter((f) => f.category === 'algemeen' || f.category === 'proces' || f.category === 'levering')
    .map((f) => ({ q: f.q, a: f.a }))
    .slice(0, 6)

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Werkgebied', url: '/werkgebied' },
    { name: c.name },
  ]

  const ld = pageSchema([
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/werkgebied/${c.slug}` }))),
    localBusinessInCitySchema(c),
    itemListSchema(
      `Maatwerk interieur in ${c.name}`,
      services.map((s) => ({
        name: `${s.singular} in ${c.name}`,
        url: heeftLokalePagina(s.slug, c.slug) ? `/diensten/${s.slug}/${c.slug}` : `/diensten/${s.slug}`,
      })),
    ),
    faqPageSchema(vragen),
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
        <div className="container-x">
          <span className="eyebrow">{c.gemeente} · {c.region} · {c.postcodePrefix}</span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink-950">
            Meubelmaker en interieurbouwer in <span className="text-jdg-700">{c.name}</span>.
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[17px] leading-[1.75] text-ink-900">{c.intro}</p>
              <p className="mt-5 text-[16px] leading-[1.75] text-ink-700">
                JDG Maatwerk Interieur werkt vanuit de eigen werkplaats aan de {business.address.street} in{' '}
                {business.address.city}, {c.distanceKm} kilometer van {c.name}. Ontwerp, productie en montage
                gebeuren onder één dak: er is geen inkoopketen, geen onderaannemer en geen showroomprijs.
                Wat op de tekening staat, komt uit dezelfde werkplaats naar {c.name} toe.
              </p>
              <p className="mt-5 text-[16px] leading-[1.75] text-ink-700">
                In de praktijk betekent maatwerk in {c.name} vooral: meten wat er is in plaats van uitgaan van
                standaardmaten. Een schuine wand, een schoorsteen, een raam op een rare hoogte of een vloer
                die niet waterpas ligt — dat zijn geen problemen maar uitgangspunten. Ook {c.kernen.slice(0, 3).join(', ')}{' '}
                en de rest van gemeente {c.gemeente} vallen binnen hetzelfde werkgebied.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-xl border border-ink-900/12 bg-paper-2 p-6">
                <span className="eyebrow">De afstand</span>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-6xl text-ink-950 tabular">{c.distanceKm || '±0'}</span>
                  <span className="text-[13px] font-mono uppercase tracking-[0.2em] text-ink-600">
                    km vanuit {business.address.city}
                  </span>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-700">
                  Het eerste gesprek en het inmeten bij jou thuis zijn gratis en vrijblijvend.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/contact" className="btn btn-primary justify-center">Vraag een offerte</Link>
                  <a href={`tel:${business.phoneE164}`} className="btn btn-outline justify-center">
                    <span className="tabular">{business.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-2">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow">Diensten in {c.name}</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              Wat wil je op maat laten maken?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={heeftLokalePagina(s.slug, c.slug) ? `/diensten/${s.slug}/${c.slug}` : `/diensten/${s.slug}`}
                className="group flex items-start justify-between gap-4 py-5 border-b border-ink-900/15 hover:border-jdg-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-[12px] uppercase tracking-[0.22em] text-jdg-700 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-ink-950 group-hover:text-jdg-700 transition-colors">
                      {s.singular} in {c.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{s.short}</p>
                    <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-600">
                      {s.synoniemen.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectenStrook
        projecten={projecten}
        titel="Werk uit de werkplaats."
        intro={`Gerealiseerde projecten van JDG. Dezelfde manier van bouwen als voor een opdracht in ${c.name}.`}
      />

      <PlaatsFeiten city={c} />

      <MaterialenStrook
        materialen={materialen}
        titel="Waar je uit kunt kiezen."
        intro="Fronten, werkbladen en plaatmateriaal verschillen in prijs, uitstraling en onderhoud. Per materiaal staat uitgelegd waar het wel en niet voor bedoeld is."
      />

      <VragenBlok vragen={vragen} titel={`Vragen over maatwerk in ${c.name}.`} />

      <ContactBlok
        kop={`Maatwerk in ${c.name}? Stuur een appje.`}
        waMsg={`Hoi JDG, ik zoek maatwerk interieur in ${c.name}. Kunnen we vrijblijvend afspreken?`}
      />

      <PlaatsenRooster
        titel="Ook in de buurt van JDG."
        intro={`Plaatsen die dicht bij ${c.name} liggen en binnen hetzelfde werkgebied vallen.`}
        links={[
          ...buren.map((b) => ({ name: b.name, href: `/werkgebied/${b.slug}` })),
          { name: 'Volledig werkgebied', href: '/werkgebied' },
        ]}
      />

      <section className="py-16 border-t border-ink-900/10">
        <div className="container-x">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-ink-600">
            <Link href="/projecten" className="inline-flex items-center gap-1.5 hover:text-jdg-700 transition-colors">
              <MapPin className="h-3.5 w-3.5" /> Alle projecten
            </Link>
            <Link href="/werkwijze" className="hover:text-jdg-700 transition-colors">Zo werkt JDG</Link>
            <Link href="/materialen" className="hover:text-jdg-700 transition-colors">Materialen</Link>
            <Link href="/veelgestelde-vragen" className="hover:text-jdg-700 transition-colors">Veelgestelde vragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
