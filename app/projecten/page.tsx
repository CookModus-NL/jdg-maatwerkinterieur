import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projecten',
  description: 'Recent maatwerk van JDG — keukens, kledingkasten, tv-meubels en overig maatwerk. Alles vanuit de werkplaats in Terheijden, geleverd door heel Nederland.',
  alternates: { canonical: `${business.url}/projecten` },
}

export default function ProjectenPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Projecten</span>
            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em] text-ink-950">
              Werk dat voor
              <br />
              <span className="text-jdg-700">zichzelf spreekt</span>.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.75] text-ink-700">
              Recente projecten van JDG Maatwerk Interieur. Klik door voor foto's, gebruikte materialen en context.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projecten/${p.slug}`}
                className={`group relative overflow-hidden rounded-xl bg-ink-900 ${
                  i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  sizes={i === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay-verloop van BENEDEN naar boven — voorkomt tekstoverlap bovenaan */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-jdg-300">
                    {p.location}
                  </span>
                  <h2 className="mt-2 font-display text-3xl lg:text-4xl leading-tight text-paper">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/80">
                    {p.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-paper transition-all group-hover:gap-3">
                    Bekijk project
                    <ArrowUpRight className="h-4 w-4" />
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
