import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { materialen, materialenByCategory } from '@/content/materialen'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Materialen voor maatwerk keukens en kasten, JDG',
  description: 'Elk maatwerk project van JDG begint bij de juiste materiaalkeuze. Eiken, walnoot, HPL, composiet, keramiek. Zie welke materialen bij welke ruimte passen.',
  alternates: { canonical: `${business.url}/materialen` },
  openGraph: {
    title: 'Materialen voor maatwerk interieur, JDG',
    description: 'Van eiken fineer tot keramisch werkblad. Alle materialen die JDG gebruikt, met toepassingen en advies.',
    url: `${business.url}/materialen`,
    images: [`${business.url}/opengraph-image`],
  },
}

const categoryLabels = {
  hout: 'Hout en fineer',
  plaatmateriaal: 'Plaatmateriaal',
  werkblad: 'Werkbladen',
  beslag: 'Beslag',
} as const

export default function MaterialenPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Materialen</span>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-ink-950">
              De juiste materialen<br /><span className="text-jdg-700">maken het verschil</span>.
            </h1>
            <p className="mt-8 text-[17px] leading-[1.75] text-ink-700">
              Elk maatwerk project start bij de vraag: welk materiaal past bij deze ruimte en deze gebruiker? Van warm eiken fineer voor een klassieke woonkamer tot onverwoestbaar keramiek voor een druk kookeiland, hier vind je alle opties met eerlijke voor- en nadelen.
            </p>
          </div>
        </div>
      </section>

      {(['hout', 'plaatmateriaal', 'werkblad'] as const).map((cat) => {
        const items = materialenByCategory[cat]
        if (!items.length) return null
        return (
          <section key={cat} className="pb-16">
            <div className="container-x">
              <h2 className="font-display text-3xl lg:text-4xl text-ink-950 mb-8">{categoryLabels[cat]}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((m) => (
                  <Link key={m.slug} href={`/materialen/${m.slug}`}
                    className="group block rounded-xl overflow-hidden border border-ink-100 bg-paper hover:border-jdg-500 transition-colors">
                    <div className="relative aspect-[4/3] bg-ink-100">
                      <Image src={m.hero} alt={m.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-jdg-700">{m.prijsklasse}</span>
                        <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-jdg-700 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="font-display text-xl text-ink-950 group-hover:text-jdg-700 transition-colors">{m.name}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{m.short}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-24 border-t border-ink-100">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl text-ink-950">
            Twijfel over de materiaalkeuze?
          </h2>
          <p className="mt-6 text-[16px] text-ink-700">
            Bij het ontwerpgesprek nemen we materiaalstalen mee die passen bij jouw ruimte, gebruik en budget. Zo zie je vooraf hoe de kleur werkt in jouw licht.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-[13px] font-medium hover:bg-jdg-700 transition-colors">
            Plan een gesprek <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
