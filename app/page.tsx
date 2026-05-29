import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, MessageCircle, Instagram, MapPin,
} from 'lucide-react'
import { services } from '@/content/services'
import { business } from '@/content/business'
import { projects } from '@/content/projects'

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════  CINEMATIC HERO  ═══════════════════════════════════ */}
      <section className="relative h-screen min-h-[720px] max-h-[1100px] w-full overflow-hidden -mt-[72px]">
        <Image
          src={business.photos.keuken1}
          alt="Maatwerk keuken in deco legno · Breda"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/30 to-ink-950" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/40" />

        {/* Center hero */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-20 lg:pb-32">
          <div className="container-x">
            <div className="max-w-5xl reveal">
              <div className="text-[11px] uppercase tracking-[0.32em] text-jdg-300 mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-jdg-400" />
                <span>Een uniek interieur</span>
              </div>
              <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-normal italic leading-[0.92] tracking-[-0.035em] text-white">
                volledig op<br/>
                <span className="not-italic text-jdg-400">maat gemaakt.</span>
              </h1>
              <div className="mt-12 grid grid-cols-12 gap-6 items-end">
                <div className="col-span-12 lg:col-span-7">
                  <p className="text-base lg:text-lg text-ink-100 leading-[1.6] font-light max-w-lg">
                    Keukens, kledingkasten en tv-meubels — ontworpen en vervaardigd door Jonas, met oog voor detail en perfecte afwerking.
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ink-300 inline-flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-jdg-400" />
                    Vanuit Terheijden voor heel Nederland
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-4">
                  <a
                    href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink-950 transition-all hover:bg-jdg-400 hover:text-white"
                  >
                    Vraag offerte aan
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </a>
                  <Link href="#werk" className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 hover:border-white pb-1 transition-colors">
                    Bekijk werk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 right-6 lg:right-12 z-10 hidden lg:flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink-300">
          <span>Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-ink-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════  WAAR JDG VOOR STAAT  ═══════════════════════════════════ */}
      <section className="relative bg-ink-950 py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            {/* Section label */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-32">
                <div className="text-[11px] uppercase tracking-[0.28em] text-jdg-400 mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-jdg-400" />
                  <span>Waar JDG voor staat</span>
                </div>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] italic font-light leading-[1] tracking-[-0.03em] text-white">
                  Op maat<br/>
                  <span className="not-italic">begint bij u.</span>
                </h2>
              </div>
            </div>

            {/* Editorial body */}
            <div className="col-span-12 lg:col-span-8 reveal">
              <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-light leading-[1.22] tracking-[-0.02em] text-white">
                Geen catalogus. Geen standaardmaten die net niet passen. Bij JDG begint elk meubel bij <span className="italic text-jdg-400">uw ruimte</span> — daarna pas bij wat het wordt.
              </p>
              <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-7">
                  <p className="text-[15px] lg:text-base leading-[1.8] text-ink-100 max-w-xl">
                    Ieder meubel begint bij uw ruimte, uw maatvoering en uw smaak. Geen compromissen op afwerking, geen "bijna passend". Wat u krijgt is op de millimeter gemaakt en strak gemonteerd op locatie.
                  </p>
                  <p className="mt-6 text-[15px] lg:text-base leading-[1.8] text-ink-100 max-w-xl">
                    Korte lijnen via WhatsApp. Eerlijke prijsindicatie binnen één werkdag. Vijf jaar garantie op alle maatwerk.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink-800">
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-jdg-400 font-semibold">Specialismen</div>
                      <div className="mt-2 text-sm text-white">Keukens · Kasten · Tv-meubels</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-jdg-400 font-semibold">Materialen</div>
                      <div className="mt-2 text-sm text-white">Deco legno, eik, lak, keramiek</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-jdg-400 font-semibold">Werkgebied</div>
                      <div className="mt-2 text-sm text-white">Heel Nederland</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-jdg-400 font-semibold">Levertijd</div>
                      <div className="mt-2 text-sm text-white">6 — 10 weken</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════  RECENT WERK  ═══════════════════════════════════ */}
      <section id="werk" className="relative bg-ink-900 border-y border-ink-800 py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-24 lg:mb-32">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-jdg-400 mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-jdg-400" />
                <span>Recent werk</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] italic font-light leading-[1] tracking-[-0.03em] text-white">
                Een paar projecten<br/>
                <span className="not-italic text-jdg-400">die we onlangs opleverden.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end lg:justify-end">
              <Link href="/projecten" className="inline-flex items-center gap-2 text-sm font-medium text-ink-200 hover:text-white transition-colors">
                Volledig portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Project spreads — alternating layouts */}
          <div className="space-y-32 lg:space-y-44">
            {projects.map((p, i) => {
              const isReverse = i % 2 === 1
              return (
                <Link
                  key={p.slug}
                  href={`/projecten/${p.slug}`}
                  className="group block"
                >
                  <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className={`col-span-12 lg:col-span-8 ${isReverse ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[16/11] overflow-hidden bg-ink-800 img-zoom">
                        <Image
                          src={p.hero}
                          alt={p.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={`col-span-12 lg:col-span-4 ${isReverse ? 'lg:order-1' : ''}`}>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-jdg-400 mb-4 font-semibold">
                        {p.category} · {p.location}
                      </div>
                      <h3 className="font-display text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
                        {p.title}
                      </h3>
                      <p className="mt-6 text-[15px] leading-[1.7] text-ink-100">
                        {p.description}
                      </p>
                      <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-4 border-t border-ink-700 pt-8">
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-400 font-semibold">Opgeleverd</dt>
                          <dd className="mt-1.5 text-sm text-white">{p.date}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-400 font-semibold">Locatie</dt>
                          <dd className="mt-1.5 text-sm text-white">{p.location}</dd>
                        </div>
                        {p.material && (
                          <div className="col-span-2">
                            <dt className="text-[10px] uppercase tracking-[0.22em] text-ink-400 font-semibold">Materiaal</dt>
                            <dd className="mt-1.5 text-sm text-white">{p.material}</dd>
                          </div>
                        )}
                      </dl>
                      <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white border-b border-ink-600 pb-1 group-hover:border-jdg-400 group-hover:text-jdg-400 transition-colors">
                        Bekijk dit project
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════  WAT WE MAKEN  ═══════════════════════════════════ */}
      <section className="relative bg-ink-950 py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-jdg-400 mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-jdg-400" />
                <span>Wat we maken</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] italic font-light leading-[1] tracking-[-0.03em] text-white">
                Zes specialismen,<br/>
                <span className="not-italic text-jdg-400">één meubelmaker.</span>
              </h2>
            </div>
          </div>

          {/* Service list */}
          <ol className="border-t border-ink-700">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-4 border-b border-ink-700 py-10 lg:py-12 transition-colors hover:bg-ink-900/50"
                >
                  <div className="col-span-2 lg:col-span-1 text-xs font-semibold tabular-nums text-ink-300 group-hover:text-jdg-400 transition-colors">
                    {String(i+1).padStart(2, '0')}
                  </div>
                  <div className="col-span-7 lg:col-span-5">
                    <h3 className="font-display text-2xl lg:text-[2rem] font-normal tracking-[-0.02em] text-white group-hover:italic group-hover:text-jdg-400 transition-all">
                      {s.title}
                    </h3>
                  </div>
                  <div className="hidden lg:block col-span-5 text-[14px] text-ink-200 max-w-md leading-[1.65]">
                    {s.short}
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex justify-end">
                    <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all duration-500 group-hover:text-jdg-400 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════  OVER JONAS — STUDIO PORTRAIT  ═══════════════════════════════════ */}
      <section className="relative bg-ink-900 border-t border-ink-800 py-0 overflow-hidden">
        <div className="grid grid-cols-12 min-h-[80vh]">
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-[80vh]">
            <Image
              src={business.photos.kast1}
              alt="Inbouwkledingkast tot het plafond — JDG werkplaats"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-900/40" />
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-center bg-ink-900">
            <div className="px-6 sm:px-10 lg:px-16 py-20 lg:py-0 max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.28em] text-jdg-400 mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-jdg-400" />
                <span>Over Jonas</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] italic font-light leading-[1] tracking-[-0.03em] text-white">
                De man<br/>
                <span className="not-italic">achter JDG.</span>
              </h2>
              <div className="mt-12 space-y-6 text-[15px] leading-[1.75] text-ink-100">
                <p>
                  <strong className="text-white font-semibold">Jonas</strong> runt JDG Maatwerk Interieur vanuit Terheijden. Eigen ontwerp, eigen productie en plaatsing op locatie — door heel Nederland.
                </p>
                <p>
                  Ieder meubel begint bij uw ruimte. Wat u krijgt is op de millimeter gemaakt en strak gemonteerd, met materialen die u jaren plezier geven.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6 pt-8 border-t border-ink-700">
                <Link href="/over-ons" className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-ink-600 pb-1 hover:border-jdg-400 hover:text-jdg-400 transition-colors">
                  Lees verder
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" /> @{business.social.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════  CONTACT  ═══════════════════════════════════ */}
      <section className="relative bg-ink-950 py-32 lg:py-48 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 ink-grid opacity-40" />
        <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 h-[600px] w-[900px] rounded-full bg-jdg-800/25 blur-[160px]" />

        <div className="container-tight text-center reveal">
          <div className="text-[11px] uppercase tracking-[0.28em] text-jdg-400 mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-jdg-400" />
            <span>Contact</span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.92] tracking-[-0.04em] text-white">
            Klaar voor uw<br/>
            <span className="italic text-jdg-400">droominterieur?</span>
          </h2>
          <p className="mt-12 mx-auto max-w-xl text-[15px] lg:text-base leading-[1.75] text-ink-100">
            Stuur Jonas een WhatsApp met foto's en globale maten van uw ruimte. Binnen één werkdag ontvangt u een eerste schets en prijsindicatie — vrijblijvend en gratis.
          </p>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-ink-950 transition-all hover:bg-jdg-400 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Jonas
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </a>
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-8 py-4 text-[15px] font-medium text-white transition-all hover:border-white hover:bg-white/5"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
