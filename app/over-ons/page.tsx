import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Instagram, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over JDG Maatwerk Interieur · maker Jonas',
  description: 'Jonas van JDG Maatwerk Interieur — maatwerk meubelmaker uit Terheijden. Eigen ontwerp, eigen productie, voor heel Nederland.',
}

export default function OverOnsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div aria-hidden className="absolute inset-0 -z-10 ink-grid opacity-50" />
        <div aria-hidden className="absolute -top-32 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-jdg-700/15 blur-[120px]" />

        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7 reveal">
              <div className="eyebrow">Over Jonas</div>
              <h1 className="mt-8 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.04em] text-white">
                Maatwerk met<br/>
                <span className="italic text-jdg-400">passie en precisie.</span>
              </h1>
              <div className="mt-12 space-y-6 text-[17px] leading-relaxed text-ink-300 max-w-xl">
                <p>
                  Jonas runt <strong className="text-white font-medium">JDG Maatwerk Interieur</strong> vanuit Terheijden. Eigen ontwerp, eigen productie en plaatsing op locatie — door heel Nederland.
                </p>
                <p>
                  Geen catalogus, geen standaardmaten die net niet passen. Elk meubel begint bij uw ruimte, uw maatvoering en uw smaak. Wat u krijgt is op de millimeter gemaakt en strak gemonteerd.
                </p>
                <p>
                  Korte lijnen via WhatsApp, eerlijke prijsindicatie binnen één werkdag en 5 jaar garantie op alle maatwerk.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Maak kennis
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 reveal reveal-delay-2">
              <div className="relative aspect-[4/5] photo-card img-zoom">
                <Image
                  src={business.photos.keuken1}
                  alt="Recent werk van JDG"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIJLERS */}
      <section className="bg-ink-900 border-y border-ink-800 py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-20 reveal">
            <div className="eyebrow">Hoe Jonas werkt</div>
            <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-white">
              Drie principes,<br/>
              <span className="italic text-jdg-400">elk project.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-px lg:bg-ink-800 lg:rounded-2xl lg:overflow-hidden lg:border lg:border-ink-800">
            {[
              {
                num: '01',
                title: 'Eigen ontwerp',
                body: 'Jonas tekent elk meubel zelf uit. Materiaalkeuze, indeling, afwerking — alles besproken voor we beginnen.',
              },
              {
                num: '02',
                title: 'Op de millimeter',
                body: 'Inmeten op locatie, productie in eigen werkplaats. Naden strak, sluiting soepel, alles in lijn.',
              },
              {
                num: '03',
                title: '5 jaar garantie',
                body: 'Niet één jaar, maar vijf. Op de constructie en op de plaatsing. U weet wat u krijgt.',
              },
            ].map((p) => (
              <div key={p.num} className="reveal lg:bg-ink-900 p-8 lg:p-10">
                <div className="num-display font-medium text-[clamp(3.5rem,6vw,5rem)] leading-none text-ink-700">{p.num}</div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.02em] text-white">{p.title}</h3>
                <p className="mt-4 text-[15px] text-ink-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink-950 py-24">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <div>
              <div className="num-display font-display font-medium text-[clamp(2.5rem,4vw,4rem)] leading-none text-jdg-400">{business.founded}</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">Actief sinds</div>
            </div>
            <div>
              <div className="num-display font-display font-medium text-[clamp(2.5rem,4vw,4rem)] leading-none text-jdg-400">NL</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">Werkgebied (heel)</div>
            </div>
            <div>
              <div className="num-display font-display font-medium text-[clamp(2.5rem,4vw,4rem)] leading-none text-jdg-400">5 JR</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">Garantie op maatwerk</div>
            </div>
            <div>
              <div className="num-display font-display font-medium text-[clamp(2.5rem,4vw,4rem)] leading-none text-jdg-400">100%</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">Eigen ontwerp en productie</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-ink-900 border-t border-ink-800 py-24">
        <div className="container-tight text-center reveal">
          <MapPin className="mx-auto h-6 w-6 text-jdg-400" />
          <h3 className="mt-8 font-display text-3xl lg:text-4xl font-medium tracking-[-0.03em] text-white">
            Werkplaats in Terheijden, projecten door heel Nederland.
          </h3>
          <p className="mt-6 text-ink-400 max-w-lg mx-auto">
            Stuur een berichtje, ook als u verderop woont — voor grotere projecten komen we overal.
          </p>
          <div className="mt-12">
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Jonas
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
