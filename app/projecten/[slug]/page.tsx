import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Calendar, Ruler, Layers, ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'
import type { Metadata } from 'next'

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
    openGraph: { images: [project.hero] },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-paper pt-12">
        <div className="container-x">
          <Link href="/projecten" className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-accent-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Alle projecten
          </Link>

          <div className="mt-8 max-w-3xl reveal">
            <div className="eyebrow">{project.location} · {project.date}</div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-primary-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Project specs strip */}
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-mist py-8">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent-500 mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-primary-500">Locatie</dt>
                <dd className="mt-0.5 font-display text-lg font-semibold">{project.location}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-accent-500 mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-primary-500">Opgeleverd</dt>
                <dd className="mt-0.5 font-display text-lg font-semibold">{project.date}</dd>
              </div>
            </div>
            {project.surface && (
              <div className="flex items-start gap-3">
                <Ruler className="h-5 w-5 text-accent-500 mt-0.5" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-primary-500">Oppervlakte</dt>
                  <dd className="mt-0.5 font-display text-lg font-semibold">{project.surface}</dd>
                </div>
              </div>
            )}
            {project.material && (
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-accent-500 mt-0.5" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-primary-500">Materiaal</dt>
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
                <div key={src} className={`relative overflow-hidden rounded-3xl img-zoom ${span}`}>
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
            <div className="font-display text-6xl text-accent-500 leading-none">&ldquo;</div>
            <blockquote className="mt-6 font-display text-3xl leading-snug text-primary-900 lg:text-4xl">
              {project.quote.text}
            </blockquote>
            <footer className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              {project.quote.author}
            </footer>
          </div>
        </section>
      )}

      {/* MEER PROJECTEN */}
      <section className="bg-paper py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold text-primary-900 mb-12">Andere projecten</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/projecten/${p.slug}`} className="group relative overflow-hidden rounded-3xl img-zoom aspect-[16/10]">
                <Image src={p.hero} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
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
    </>
  )
}
