import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Phone } from 'lucide-react'
import { LogoMark } from '@/components/logo'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export default function Home() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  return (
    <>
      {/* ══════════════════════════════════════════════════ HERO ══ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden paper-glow">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Links: logo als beeldbepalend element */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
              <div className="reveal relative">
                {/* Grote cirkel achter het logo */}
                <div
                  aria-hidden
                  className="absolute inset-0 -m-8 rounded-full bg-jdg-50 opacity-70 blur-2xl"
                />
                {/* Buitenring — subtle brand ring */}
                <div className="relative rounded-full ring-1 ring-jdg-200 p-3 lg:p-4 bg-paper">
                  <LogoMark
                    size={280}
                    className="lg:!w-[360px] lg:!h-[360px]"
                  />
                </div>
                {/* Kleine badges eromheen — merkelement */}
                <div className="absolute -top-2 -right-2 rounded-full bg-ink-900 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                  Sinds 2025
                </div>
                <div className="absolute -bottom-2 -left-2 rounded-full bg-paper ring-1 ring-ink-900/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-800">
                  Terheijden
                </div>
              </div>
            </div>

            {/* Rechts: kop + intro */}
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="reveal" style={{ animationDelay: '0.1s' }}>
                <span className="eyebrow">Maatwerk interieur door Jonas</span>
              </div>
              <h1
                className="reveal mt-6 font-display text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-ink-900"
                style={{ animationDelay: '0.15s' }}
              >
                Iets moois
                <br />
                voor <span className="text-jdg-600">de plek</span>
                <br />
                waar je woont.
              </h1>
              <p
                className="reveal mt-8 max-w-lg text-[17px] leading-[1.7] text-ink-700"
                style={{ animationDelay: '0.25s' }}
              >
                Ik ben Jonas. Vanuit mijn atelier in Terheijden ontwerp en bouw ik keukens, kasten en meubels op maat. Één vakman van eerste schets tot laatste knop.
              </p>
              <div
                className="reveal mt-10 flex flex-wrap gap-3"
                style={{ animationDelay: '0.35s' }}
              >
                <a
                  href={waHref('Hoi Jonas, ik ben op zoek naar iets op maat. Kunnen we vrijblijvend afspreken?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Overleg vrijblijvend
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link href="/projecten" className="btn btn-outline">
                  Bekijk projecten
                </Link>
              </div>

              {/* Signature values */}
              <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] font-medium text-ink-700" style={{ animationDelay: '0.45s' }}>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-500" /> Eigen ontwerp
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-500" /> Eigen productie
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-500" /> Eigen plaatsing
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-500" /> Vijf jaar garantie
                </span>
              </div>
            </div>
          </div>

          {/* Recent werk teaser — full-width foto met ronde hoeken */}
          <div className="mt-24 relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden rounded-2xl bg-ink-900">
            <Image
              src={business.photos.keuken1}
              alt="Recent maatwerk keuken door JDG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-jdg-700">
                Recent werk
              </span>
              <p className="mt-4 font-display text-2xl lg:text-4xl font-semibold text-paper leading-tight">
                Keuken op maat — volledig door Jonas gemaakt.
              </p>
            </div>
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
              <div className="rounded-full bg-paper/90 backdrop-blur p-3">
                <LogoMark size={44} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ DIENSTEN ══ */}
      <section className="relative py-24 lg:py-32 bg-ink-950 text-paper overflow-hidden">
        {/* Grote logo cirkel als watermark */}
        <div aria-hidden className="absolute -top-40 -right-40 opacity-[0.06]">
          <LogoMark size={640} />
        </div>

        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow !text-jdg-300">Wat ik bouw</span>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-paper">
                Zes disciplines, één handschrift.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[16px] leading-[1.75] text-ink-200 max-w-lg">
                Alles wat ik maak volgt dezelfde manier van werken. Eerst luisteren, dan tekenen, dan bouwen, dan monteren. Zonder onderaannemers en zonder verrassingen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-ink-900/60 backdrop-blur border border-ink-800 p-8 lg:p-10 hover:border-jdg-500 transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center justify-center rounded-full bg-jdg-600 text-paper w-9 h-9 font-mono text-[12px] font-semibold tabular">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 max-w-20 bg-ink-700" />
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-paper group-hover:text-jdg-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300 max-w-md">
                      {s.short}
                    </p>
                  </div>
                  <div className="rounded-full bg-ink-800 p-3 group-hover:bg-jdg-600 transition-colors">
                    <ArrowUpRight
                      className="h-5 w-5 text-paper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ AANPAK ══ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Onze werkwijze</span>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink-900">
                Vier stappen, geen verrassingen.
              </h2>
              <p className="mt-8 text-[16px] leading-[1.75] text-ink-700 max-w-md">
                Wat wij afspreken staat op papier. Wat ik teken bouw ik. Wat ik bouw hang ik zelf op.
              </p>

              {/* Klein logo als accent */}
              <div className="mt-12 hidden lg:block">
                <div className="rounded-full bg-jdg-50 ring-1 ring-jdg-200 p-4 inline-block">
                  <LogoMark size={72} />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-4">
                {[
                  { n: '01', title: 'Kennismaking', body: 'Vrijblijvend gesprek bij jou thuis. Ik kijk naar de ruimte en luister naar hoe je erin wil leven.' },
                  { n: '02', title: 'Ontwerp en offerte', body: 'Op basis daarvan teken ik een voorstel met materialen en een heldere prijsopgave. Aanpassingen zijn onbeperkt.' },
                  { n: '03', title: 'Productie', body: 'In het atelier in Terheijden bouw ik jouw project op maat. Onderdelen zijn genummerd en gecontroleerd.' },
                  { n: '04', title: 'Plaatsing', body: 'Montage bij jou thuis, inclusief afkitting en oplevering. Meestal binnen enkele werkdagen klaar.' },
                ].map((step) => (
                  <div key={step.n} className="grid grid-cols-12 gap-4 rounded-2xl border border-ink-900/10 bg-paper-2 p-6 lg:p-8">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="inline-flex items-center justify-center rounded-full bg-jdg-600 text-paper w-10 h-10 font-mono text-[12px] font-semibold tabular">
                        {step.n}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <h3 className="font-display text-2xl font-semibold text-ink-900">{step.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700 max-w-2xl">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ WERKGEBIED ══ */}
      <section className="py-24 lg:py-28 bg-paper-2">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Werkgebied</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900">
                Vanuit Terheijden, door heel Nederland.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[15.5px] leading-[1.75] text-ink-700">
                Ik werk vanuit Terheijden en kom door heel Nederland. Voor grotere projecten rijd ik overal naartoe. Op korte reisafstand kom ik kosteloos langs voor een eerste gesprek.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/werkgebied/${c.slug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-paper border border-ink-900/12 px-5 py-2.5 text-[13.5px] font-medium text-ink-900 hover:border-jdg-500 hover:bg-jdg-50 transition-all"
              >
                {c.name}
                <ArrowRight className="h-3 w-3 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 transition-all" strokeWidth={2} />
              </Link>
            ))}
          </div>

          <Link
            href="/werkgebied"
            className="mt-10 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-900 link-underline"
          >
            Bekijk volledig werkgebied
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ CTA ══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container-x">
          <div className="relative rounded-2xl lg:rounded-[40px] bg-jdg-800 overflow-hidden p-10 lg:p-20">
            {/* Groot logo als watermerk */}
            <div aria-hidden className="absolute -bottom-20 -right-20 opacity-30 pointer-events-none">
              <LogoMark size={520} />
            </div>

            <div className="relative grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8">
                <span className="eyebrow !text-jdg-200">Één gesprek verder</span>
                <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-paper">
                  Een goede maat begint met een goed gesprek.
                </h2>
                <p className="mt-8 text-[17px] leading-[1.75] text-jdg-100 max-w-xl">
                  Bel of stuur een appje. Ik plan meestal binnen een week een vrijblijvend eerste gesprek in.
                </p>

                <div className="mt-12 flex flex-wrap gap-3">
                  <a
                    href={waHref('Hoi Jonas, ik heb interesse in maatwerk. Kunnen we een gesprek inplannen?')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-paper text-ink-900 hover:bg-jdg-50"
                  >
                    WhatsApp Jonas
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={`tel:${business.phoneE164}`} className="btn border-paper/40 text-paper hover:bg-paper/10">
                    <Phone className="h-4 w-4" />
                    <span className="tabular">{business.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
