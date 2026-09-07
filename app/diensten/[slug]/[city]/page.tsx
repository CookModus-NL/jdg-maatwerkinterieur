import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, MapPin, Phone, MessageCircle } from 'lucide-react'
import { services, getService } from '@/content/services'
import { cities, getCity, nearbyCities } from '@/content/cities'
import { business } from '@/content/business'
import { lokaalRooster, heeftLokalePagina, roosterRegel } from '@/content/lokaal-rooster'
import { projectenVoorDienst, vragenVoorDienst, prijsfactorenVoor } from '@/content/relaties'
import {
  Kruimelpad,
  ProjectenStrook,
  PrijsfactorenBlok,
  VragenBlok,
  PlaatsFeiten,
  ContactBlok,
  PlaatsenRooster,
  waHref,
} from '@/components/secties'
import { breadcrumbSchema, faqPageSchema, serviceSchema, pageSchema } from '@/lib/schema'

/**
 * Alleen de combinaties waar aantoonbaar naar gezocht wordt. Zie
 * content/lokaal-rooster.ts voor de zoekopdrachten achter elke regel.
 * Combinaties die er niet in staan sturen hieronder met een 308 door naar de
 * stadpagina, die alle zes diensten voor die plaats behandelt.
 */
// Alles buiten het rooster wordt al door next.config.ts met een 308 omgeleid
// naar de stadpagina; wat hier binnenkomt hoort te bestaan.
export const dynamicParams = false

export async function generateStaticParams() {
  return lokaalRooster.map((r) => ({ slug: r.dienst, city: r.stad }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params
  const s = getService(slug)
  const c = getCity(city)
  if (!s || !c || !heeftLokalePagina(slug, city)) return {}
  // Enkelvoud, want zo wordt er gezocht: "kledingkast op maat breda", niet
  // "kledingkasten op maat breda" (GSC 23-31 aug 2026).
  const title = `${s.singular} in ${c.name} laten maken`
  // De afstand stond hier als tweede zin en dat is precies wat een lokale
  // zoeker als eerste las: dertien query-paginaparen op positie 6 tot 10 met
  // nul klikken (GSC 30 aug - 6 sep 2026). Het feit blijft op de pagina staan
  // (zie de alinea hieronder met {c.distanceKm} kilometer); alleen de etalage
  // gaat nu over wat de koper krijgt. TAAK-20260906-JDG-SNIPPET-DISKWALIFICEERT.
  const desc = `${s.singular} in ${c.name}, van eerste schets tot plaatsing. JDG ontwerpt, bouwt in de eigen werkplaats en plaatst zelf. Bekijk het werk.`
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
  if (!s || !c || !heeftLokalePagina(slug, city)) notFound()

  const regel = roosterRegel(slug, city)
  const projecten = projectenVoorDienst(s.slug, 3)
  const vragen = vragenVoorDienst(s.slug, 5)
  const factoren = prijsfactorenVoor(s.slug)
  const buren = nearbyCities(c.slug, 4)
  const andereDiensten = services.filter((x) => x.slug !== s.slug)

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Diensten', url: '/diensten' },
    { name: s.title, url: `/diensten/${s.slug}` },
    { name: c.name },
  ]

  const ld = pageSchema([
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/diensten/${s.slug}/${c.slug}` }))),
    serviceSchema(s.slug, c.slug),
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
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink-950">
            {s.singular} in <span className="text-jdg-700">{c.name}</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.75] text-ink-700">{c.intro}</p>
          {regel && (
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-ink-700">{regel.lokaleTekst}</p>
          )}
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-ink-700">
            JDG is meubelmaker en interieurbouwer in {business.address.city}, op {c.distanceKm} kilometer van{' '}
            {c.name}. {s.short} Ontwerp, productie en montage komen uit één werkplaats, dus er zit geen
            tussenpartij tussen de tekening en wat er uiteindelijk in je huis staat.
          </p>

          <div className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-900">
                <Image
                  src={s.hero}
                  alt={`${s.singular} gemaakt door JDG Maatwerk Interieur, werkgebied ${c.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col">
              <div className="rounded-xl border border-ink-900/12 bg-paper-2 p-6">
                <span className="eyebrow">De afstand</span>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-6xl text-ink-950 tabular">{c.distanceKm || '±0'}</span>
                  <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-ink-600">
                    km vanuit {business.address.city}
                  </span>
                </div>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-700">
                  Inmeten in {c.name} gebeurt bij jou thuis en is gratis. Ook {c.kernen.slice(0, 3).join(', ')}{' '}
                  vallen binnen dezelfde rit.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-ink-900/12 p-6">
                <span className="eyebrow">Direct contact</span>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={waHref(`Hoi JDG, ik zoek een ${s.singular.toLowerCase()} in ${c.name}. Kunnen we vrijblijvend afspreken?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp JDG
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

      {/* Het blok 'Wat je krijgt' en de materialenstrook stonden hier ook. Ze
          zijn identiek voor elke stad én staan al op /diensten/<dienst>, dus ze
          maakten deze pagina's alleen maar meer op elkaar lijkend. Weg hier;
          de link naar de dienstpagina onderaan brengt de lezer erheen. */}

      <section className="py-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Aanpak in {c.name}</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
                Zo verloopt een project.
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-ink-700 max-w-md">
                Voor {c.name} volgt JDG dezelfde vier stappen als voor elk ander project, zonder verrassingen.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-900/15">
                {s.process.map((step, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                    <div className="col-span-3 lg:col-span-2">
                      <span className="font-mono text-[12px] text-jdg-700 tabular">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-2xl text-ink-950 leading-tight">{step.title}</h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectenStrook
        projecten={projecten}
        titel={`Eerder gemaakt: ${s.title.toLowerCase()}.`}
        intro="Werk uit de eigen werkplaats. Dezelfde manier van bouwen, dezelfde afwerking."
      />

      <PrijsfactorenBlok
        factoren={factoren}
        titel={`Wat kost een ${s.singular.toLowerCase()}?`}
        intro={`Maatwerk heeft geen kant-en-klare prijs, maar wel een vaste set knoppen. Dit zijn de factoren die de offerte voor ${c.name} bepalen. Een indicatie krijg je na een appje met foto's en globale maten.`}
      />

      <PlaatsFeiten city={c} dienst={s.singular} />

      <VragenBlok vragen={vragen} titel={`Vragen over ${s.singular.toLowerCase()}.`} />

      <ContactBlok
        kop={`${s.singular} in ${c.name}? Stuur een appje.`}
        waMsg={`Hoi JDG, ik zoek een ${s.singular.toLowerCase()} in ${c.name}. Kunnen we vrijblijvend overleggen?`}
      />

      <PlaatsenRooster
        titel={`${s.singular} elders in de buurt.`}
        intro="Alleen plaatsen waar hier een eigen pagina voor is; voor de overige plaatsen staat alles bij elkaar op de stadpagina."
        links={buren.map((b) => ({
          name: b.name,
          href: heeftLokalePagina(s.slug, b.slug) ? `/diensten/${s.slug}/${b.slug}` : `/werkgebied/${b.slug}`,
        }))}
      />

      <section className="py-16 border-t border-ink-900/10">
        <div className="container-x">
          <span className="eyebrow">Ook maatwerk in {c.name}</span>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {andereDiensten.slice(0, 3).map((o) => (
              <Link
                key={o.slug}
                href={heeftLokalePagina(o.slug, c.slug) ? `/diensten/${o.slug}/${c.slug}` : `/diensten/${o.slug}`}
                className="group border-t border-ink-900/15 pt-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-ink-950 group-hover:text-jdg-700 transition-colors">
                    {o.singular} in {c.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-600">{o.short}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-600">
            <Link href={`/werkgebied/${c.slug}`} className="inline-flex items-center gap-1.5 hover:text-jdg-700 transition-colors">
              <MapPin className="h-3.5 w-3.5" /> Alles wat JDG maakt in {c.name}
            </Link>
            <Link href={`/diensten/${s.slug}`} className="hover:text-jdg-700 transition-colors">
              {s.title} in heel Nederland
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
