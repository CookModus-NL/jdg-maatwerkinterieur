import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, Ruler, Layers, ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'
import { services, getService } from '@/content/services'
import { materialen } from '@/content/materialen'
import { dienstVoorCategorie, categorieToelichting } from '@/content/relaties'
import { business } from '@/content/business'
import { Kruimelpad, ContactBlok } from '@/components/secties'
import { breadcrumbSchema, projectSchema, pageSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * Deze pagina's waren tot 02-09-2026 onbereikbaar: next.config.ts stuurde
 * /projecten/:slug met een 301 naar /projecten, terwijl het overzicht er wél
 * naar linkte. Veertien pagina's met échte foto's en eigen tekst — de enige
 * volledig unieke content van de site — stonden dus buitenspel. De redirect is
 * weg, de canonical staat er nu wel op (die erfde de homepage-canonical uit de
 * root layout, wat neerkomt op "Google, negeer deze pagina") en ze staan in de
 * sitemap.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${business.url}/projecten/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [project.hero],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  // Verwante projecten uit dezelfde categorie eerst: dat is voor de lezer
  // relevanter dan de eerste twee uit de lijst, en het legt interne links tussen
  // pagina's die inhoudelijk bij elkaar horen.
  const zelfdeSoort = projects.filter((p) => p.slug !== slug && p.category === project.category)
  const otherProjects = [...zelfdeSoort, ...projects.filter((p) => p.slug !== slug && p.category !== project.category)].slice(0, 2)
  const dienst = getService(dienstVoorCategorie[project.category] ?? '')
  const toelichting = categorieToelichting[project.category]
  // Materialen die letterlijk in de materiaalregel van dit project genoemd worden.
  const genoemdeMaterialen = materialen.filter((m) =>
    (project.material ?? '').toLowerCase().includes(m.name.split(' ')[0].toLowerCase()),
  )

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Projecten', url: '/projecten' },
    { name: project.title },
  ]
  const ld = pageSchema([
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/projecten/${project.slug}` }))),
    projectSchema(project),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      {/* HERO */}
      <section className="relative bg-paper pt-12">
        <div className="container-x">
          <Kruimelpad items={kruimels} />

          <div className="mt-8 max-w-3xl reveal">
            <div className="eyebrow">{project.location} · {project.date}</div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-ink-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Project specs strip */}
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-ink-900/15 py-8">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-jdg-700 mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-500">Locatie</dt>
                <dd className="mt-0.5 font-display text-lg font-semibold">{project.location}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-jdg-700 mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-500">Opgeleverd</dt>
                <dd className="mt-0.5 font-display text-lg font-semibold">{project.date}</dd>
              </div>
            </div>
            {project.surface && (
              <div className="flex items-start gap-3">
                <Ruler className="h-5 w-5 text-jdg-700 mt-0.5" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-ink-500">Oppervlakte</dt>
                  <dd className="mt-0.5 font-display text-lg font-semibold">{project.surface}</dd>
                </div>
              </div>
            )}
            {project.material && (
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-jdg-700 mt-0.5" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-ink-500">Materiaal</dt>
                  <dd className="mt-0.5 font-display text-lg font-semibold">{project.material}</dd>
                </div>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* GALERIJ */}
      <section className="bg-paper py-16">
        <div className="container-x">
          {/* Magazine grid */}
          <div className="grid gap-4 lg:grid-cols-6 lg:auto-rows-[300px]">
            {project.gallery.map((src, i) => {
              const layouts = ['lg:col-span-6 lg:row-span-2', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-4']
              const span = i === 0 ? layouts[0] : layouts[(i % (layouts.length - 1)) + 1]
              return (
                <div key={src} className={`relative overflow-hidden rounded-xl img-zoom aspect-[4/3] lg:aspect-auto ${span}`}>
                  <Image
                    src={src}
                    alt={`${project.title}, foto ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      {project.quote && (
        <section className="bg-clay py-20">
          <div className="container-tight text-center">
            <div className="font-display text-6xl text-jdg-700 leading-none">&ldquo;</div>
            <blockquote className="mt-6 font-display text-3xl leading-snug text-ink-950 lg:text-4xl">
              {project.quote.text}
            </blockquote>
            <footer className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">
              {project.quote.author}
            </footer>
          </div>
        </section>
      )}

      {/* MEER PROJECTEN */}
      <section className="bg-paper py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-12">Andere projecten</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/projecten/${p.slug}`} className="group relative overflow-hidden rounded-xl img-zoom aspect-[16/10]">
                <Image src={p.hero} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-jdg-300">
                    {p.location} · {p.date}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-paper">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-all group-hover:gap-3">
                    Bekijken <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {toelichting && (
        <section className="py-20 bg-paper-2">
          <div className="container-x">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <span className="eyebrow">Wat dit type werk inhoudt</span>
                <h2 className="mt-6 font-display text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] text-ink-950">
                  {dienst ? dienst.singular : 'Maatwerk'}, in de praktijk.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <p className="text-[16px] leading-[1.8] text-ink-700">{toelichting}</p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                  {dienst && (
                    <Link href={`/diensten/${dienst.slug}`} className="text-ink-900 hover:text-jdg-700 transition-colors">
                      Alles over {dienst.singular.toLowerCase()}
                    </Link>
                  )}
                  {genoemdeMaterialen.map((m) => (
                    <Link key={m.slug} href={`/materialen/${m.slug}`} className="text-ink-700 hover:text-jdg-700 transition-colors">
                      Over {m.name.toLowerCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 border-t border-ink-900/10">
        <div className="container-x">
          <span className="eyebrow">Zelf iets laten maken</span>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink-700">
            {services.map((s2) => (
              <Link key={s2.slug} href={`/diensten/${s2.slug}`} className="hover:text-jdg-700 transition-colors">
                {s2.singular}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBlok
        kop="Zoiets in jouw huis? Stuur een appje."
        waMsg={`Hoi JDG, ik zag het project "${project.title}" op de site. Kunnen we iets soortgelijks bespreken?`}
      />
    </>
  )
}
