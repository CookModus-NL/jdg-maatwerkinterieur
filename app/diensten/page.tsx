import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/content/services'
import { business } from '@/content/business'

export const metadata = {
  title: 'Diensten',
  description: 'Zes soorten maatwerk door Jonas van JDG: keukens, kledingkasten, inloopkasten, tv-meubels, boekenkasten en badkamermeubels op maat.',
  alternates: { canonical: `${business.url}/diensten` },
}

export default function DienstenIndex() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <span className="eyebrow">Wat wij maken</span>
              <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.92] tracking-[-0.03em] text-ink-900">
                Zes disciplines,
                <br />
                <span className="italic font-light text-jdg-600">één handschrift</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-24">
            {services.map((s, i) => (
              <article key={s.slug} className="group">
                <Link href={`/diensten/${s.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-ink-900">
                    <Image
                      src={s.hero}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-jdg-600 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 max-w-20 bg-ink-900/20" />
                  </div>
                  <h2 className="font-display text-4xl font-normal leading-[1.05] text-ink-900 group-hover:text-jdg-600 transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-700 max-w-md">
                    {s.short}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-900 link-underline">
                    Lees over {s.title.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
