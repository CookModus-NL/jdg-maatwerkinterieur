import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projecten · recent maatwerk',
  description: 'Recente keukens, kledingkasten, tv-meubels en trapkasten op maat. Bekijk wat JDG recent heeft opgeleverd in West-Brabant.',
}

export default function ProjectenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper pt-16 pb-16 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Projecten</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Werk dat<br/>
              <span className="italic font-light text-primary-600">voor zichzelf spreekt.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Een selectie van recent opgeleverd maatwerk in West-Brabant. Klik door voor foto’s, gebruikte materialen en afwerking.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12">
            {projects.map((p, i) => {
              // Magazine layout: 1e groot, daarna varieren
              const layouts = [
                'lg:col-span-8 lg:row-span-2',
                'lg:col-span-4',
                'lg:col-span-4',
              ]
              const span = layouts[i % layouts.length]
              return (
                <Link
                  key={p.slug}
                  href={`/projecten/${p.slug}`}
                  className={`group relative overflow-hidden rounded-3xl img-zoom reveal ${span}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative aspect-[4/3] lg:h-full">
                    <Image
                      src={p.hero}
                      alt={p.title}
                      fill
                      sizes={i === 0 ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
                      className="object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                      {p.location} · {p.date}
                    </div>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-paper lg:text-3xl">{p.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-paper/85 max-w-md line-clamp-2">{p.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-all group-hover:gap-3">
                      Bekijk project <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
