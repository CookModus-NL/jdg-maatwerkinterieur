import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { cities } from '@/content/cities'
import { services } from '@/content/services'
import { business } from '@/content/business'

export const metadata = {
  title: 'Werkgebied',
  description: 'Jonas van JDG werkt vanuit Terheijden door heel Nederland. Bekijk hier het volledige werkgebied per plaats.',
  alternates: { canonical: `${business.url}/werkgebied` },
}

export default function Werkgebied() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <span className="eyebrow">Werkgebied</span>
              <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.92] tracking-[-0.03em] text-ink-900">
                Vanuit Terheijden,
                <br />
                <span className="italic font-light text-jdg-600">door heel Nederland</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-ink-700">
                Jonas werkt vanuit Terheijden en komt door heel Nederland — voor grotere projecten reist hij overal. Op korte reisafstand komt hij kosteloos langs voor een eerste gesprek.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16 lg:gap-y-16 border-t border-ink-900/15 pt-14">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/werkgebied/${c.slug}`}
                className="group"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <MapPin className="h-4 w-4 text-jdg-600" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 tabular">
                    {c.distanceKm} km · {c.region}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-normal text-ink-900 group-hover:text-jdg-600 transition-colors">
                  {c.name}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700 max-w-md">
                  {c.intro}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 link-underline">
                  Meer over {c.name}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink-950 text-bone-50">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow !text-jdg-400">Zoeken op dienst</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-bone-50">
                Waar zoek je maatwerk voor?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-800">
                {services.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={`/diensten/${s.slug}`}
                    className="group flex items-center justify-between gap-6 py-6 border-b border-ink-800"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-jdg-400 tabular">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl font-normal text-bone-50 group-hover:text-jdg-400 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-ink-500 group-hover:text-jdg-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      strokeWidth={1}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
