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
      {/* ╔═══════════════════════════════════════════════════ HERO ╗ */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Grid lines op de achtergrond — Dutch signature */}
        <div aria-hidden className="absolute inset-0 -z-10 jdg-grid-lines opacity-60" />

        <div className="container-x">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="reveal">
                <span className="eyebrow">Terheijden — heel Nederland</span>
              </div>

              <h1
                className="reveal mt-8 font-display text-[clamp(3rem,10vw,10rem)] font-normal leading-[0.9] tracking-[-0.03em] text-ink-900"
                style={{ animationDelay: '0.05s' }}
              >
                Maatwerk
                <br />
                <span className="italic font-light text-jdg-600">
                  waarin geen enkel <br />
                  detail
                </span>{' '}
                per ongeluk is.
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pt-24 flex flex-col justify-end">
              <p
                className="reveal text-[17px] leading-[1.7] text-ink-700 max-w-md"
                style={{ animationDelay: '0.15s' }}
              >
                Jonas ontwerpt en bouwt keukens, kasten en meubels op maat. Vanaf de eerste schets tot de laatste knop — één vakman, één aanspreekpunt.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.25s' }}>
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
            </div>
          </div>

          {/* Groot beeld — dat vult de restpagina met warmte */}
          <div
            className="reveal mt-20 lg:mt-28 relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden"
            style={{ animationDelay: '0.35s' }}
          >
            <Image
              src={business.photos.keuken1}
              alt="Recent maatwerk keuken door JDG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Signature monogram in de hoek */}
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 mix-blend-difference">
              <LogoMark className="h-10 lg:h-14 w-auto text-bone-50" color="var(--color-bone-50)" />
            </div>
          </div>

          {/* Signature meting bar onder de hero */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-600">
            <div className="flex items-baseline gap-2">
              <span className="text-jdg-600">01</span>
              <span>Eigen ontwerp</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-jdg-600">02</span>
              <span>Eigen productie</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-jdg-600">03</span>
              <span>Eigen plaatsing</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-jdg-600">04</span>
              <span>Vijf jaar garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════ DIENSTEN ╗ */}
      <section className="relative py-24 lg:py-36 bg-ink-950 text-bone-50">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow !text-jdg-400">Wat wij bouwen</span>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl font-normal leading-[1.02] tracking-[-0.02em] text-bone-50">
                Zes soorten maatwerk, één maker.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[16px] leading-[1.75] text-ink-300 max-w-lg">
                Alle diensten volgen dezelfde manier van werken. Eerst luisteren, dan tekenen, dan bouwen, dan monteren. Zonder onderaannemers en zonder verrassingen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0 border-t border-ink-800">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className={`group flex items-start justify-between gap-6 py-10 border-b border-ink-800 ${
                  i % 2 === 0 ? 'lg:pr-6' : 'lg:pl-6'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-jdg-400 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 max-w-16 bg-ink-700" />
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-normal leading-tight text-bone-50 group-hover:text-jdg-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300 max-w-md">
                    {s.short}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-ink-500 group-hover:text-jdg-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                  strokeWidth={1}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════ AANPAK ╗ */}
      <section className="py-24 lg:py-36">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Onze werkwijze</span>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl font-normal leading-[1.02] tracking-[-0.02em] text-ink-900">
                Vier stappen, geen verrassingen.
              </h2>
              <p className="mt-8 text-[16px] leading-[1.75] text-ink-700 max-w-md">
                Wat wij afspreken, staat op papier. Wat wij tekenen, bouwen wij. Wat wij bouwen, hangt Jonas zelf op.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-900/15">
                {[
                  { n: '01', title: 'Kennismaking', body: 'Vrijblijvend gesprek bij jou thuis. Jonas kijkt naar de ruimte en luistert naar hoe je erin wil leven.' },
                  { n: '02', title: 'Ontwerp en offerte', body: 'Op basis daarvan tekent Jonas een voorstel met materialen en een heldere prijsopgave. Aanpassingen zijn onbeperkt.' },
                  { n: '03', title: 'Productie', body: 'In het atelier in Terheijden wordt jouw project op maat gebouwd. Onderdelen zijn genummerd en gecontroleerd.' },
                  { n: '04', title: 'Plaatsing', body: 'Montage bij jou thuis door Jonas zelf, inclusief afkitting en oplevering. Meestal binnen enkele werkdagen klaar.' },
                ].map((step) => (
                  <div key={step.n} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                    <div className="col-span-3 lg:col-span-2">
                      <span className="font-mono text-[13px] text-jdg-600 tabular">{step.n}</span>
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-2xl font-normal text-ink-900">{step.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700 max-w-lg">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════ WERKGEBIED PREVIEW ╗ */}
      <section className="py-24 lg:py-32 bg-bone-100">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Werkgebied</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
                Vanuit Terheijden door heel Nederland.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[15.5px] leading-[1.75] text-ink-700">
                Jonas werkt vanuit Terheijden en komt door heel Nederland — voor grotere projecten reist hij overal naartoe. Op korte reisafstand komt hij kosteloos langs voor een eerste gesprek.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-6">
            {cities.slice(0, 12).map((c) => (
              <Link
                key={c.slug}
                href={`/werkgebied/${c.slug}`}
                className="group flex items-center justify-between border-b border-ink-900/15 py-3 hover:border-jdg-500 transition-colors"
              >
                <span className="text-[14.5px] font-medium text-ink-900">{c.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
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

      {/* ╔══════════════════════════════════════════ CTA ╗ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 jdg-grid-lines opacity-40" />

        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">Één gesprek verder</span>
              <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] font-normal italic leading-[0.95] tracking-[-0.02em] text-ink-900">
                Een goede maat begint met een goed gesprek.
              </h2>
              <p className="mt-10 text-[17px] leading-[1.75] text-ink-700 max-w-xl">
                Bel Jonas of stuur een appje. Hij plant meestal binnen een week een vrijblijvend eerste gesprek in.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href={waHref('Hoi Jonas, ik heb interesse in maatwerk. Kunnen we een gesprek inplannen?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  WhatsApp Jonas
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
                  <Phone className="h-4 w-4" />
                  <span className="tabular">{business.phone}</span>
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
              <div className="border-l-2 border-jdg-500 pl-6 lg:mt-24">
                <p className="font-display text-2xl italic text-ink-900 leading-snug">
                  &ldquo;Een keuken die er over twintig jaar nog steeds bij hoort. Dat is het doel.&rdquo;
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Jonas — JDG
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
