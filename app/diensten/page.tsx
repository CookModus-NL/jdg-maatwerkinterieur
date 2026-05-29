import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/content/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten · Keuken, kast, trapkast en tv-meubel op maat',
  description: 'Maatwerk keukens, kledingkasten, trapkasten, tv-meubels en overig interieurwerk uit Terheijden. Eigen ontwerp, eigen productie.',
}

export default function DienstenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-12 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Diensten</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Maatwerk voor<br/>
              <span className="italic font-light text-primary-600">elk interieur.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Zes specialismen. Van complete keuken op maat tot een strakke trapkast. Alles met eigen ontwerp en eigen productie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-clay p-8 transition-all duration-500 hover:bg-primary-900 hover:-translate-y-1 hover:shadow-2xl reveal"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div aria-hidden className="absolute -right-8 -top-8 grid grid-cols-3 gap-1 opacity-10 transition-all duration-500 group-hover:opacity-30">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className="h-6 w-6 rounded bg-current" />
                    ))}
                  </div>
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-paper text-accent-600 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-paper">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-semibold text-primary-900 transition-colors group-hover:text-paper">
                      {s.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-300">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-primary-600 transition-colors group-hover:text-primary-300">
                      {s.short}
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-700 transition-colors group-hover:text-paper">
                        Lees meer
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-900 text-paper transition-all duration-300 group-hover:bg-accent-500 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
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
