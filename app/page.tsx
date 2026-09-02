import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { LogoMark } from '@/components/logo'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'
import { faqs } from '@/content/faq'
import { projects } from '@/content/projects'
import { VragenBlok, ProjectenStrook } from '@/components/secties'
import { faqPageSchema, pageSchema } from '@/lib/schema'
import type { Metadata } from 'next'

// De canonical stond in de root layout en werd daardoor door élke pagina geërfd.
// Hij hoort op precies één plek: hier.
export const metadata: Metadata = {
  alternates: { canonical: business.url },
}

export default function Home() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  // Keukens = featured service, komt eerst
  const keukens = services[0]
  const restServices = services.slice(1)

  const homeVragen = faqs
    .filter((f) => f.category === 'algemeen' || f.category === 'proces' || f.category === 'garantie')
    .map((f) => ({ q: f.q, a: f.a }))
    .slice(0, 6)
  const ld = pageSchema([faqPageSchema(homeVragen)])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />

      {/* ══════════════════════════════════════════════ HERO ══ */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            <div className="col-span-12 lg:col-span-7">
              <div className="reveal">
                <span className="eyebrow">Maatwerk interieur, sinds 2025</span>
              </div>
              <h1
                className="reveal mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.94] tracking-[-0.025em] text-ink-950"
                style={{ animationDelay: '0.08s' }}
              >
                Keukens en kasten
                <br />
                <span className="text-jdg-700">op maat</span>,
                <br />
                gebouwd door JDG.
              </h1>
              <p
                className="reveal mt-8 max-w-xl text-[17px] leading-[1.7] text-ink-800"
                style={{ animationDelay: '0.15s' }}
              >
                JDG is meubelmaker en interieurbouwer in Terheijden. Keukens, kledingkasten, inloopkasten,
                tv-meubels en badkamermeubels op maat: zelf ontworpen, zelf gebouwd in de eigen werkplaats
                en zelf geplaatst. Geleverd door heel Nederland en op verzoek daarbuiten.
              </p>
              <div
                className="reveal mt-10 flex flex-wrap gap-3"
                style={{ animationDelay: '0.22s' }}
              >
                <a
                  href={waHref('Hoi, ik denk aan iets op maat. Kunnen we vrijblijvend overleggen?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Overleg vrijblijvend
                </a>
                <Link href="/projecten" className="btn btn-outline">
                  Bekijk projecten
                </Link>
              </div>

              <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] font-medium text-ink-700" style={{ animationDelay: '0.3s' }}>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-600" /> Eigen ontwerp
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-600" /> Eigen productie
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-600" /> Eigen plaatsing
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jdg-600" /> Constructie 5 jaar garantie
                </span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
              <div className="reveal relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-900" style={{ animationDelay: '0.12s' }}>
                <Image
                  src={business.photos.keuken1}
                  alt="Maatwerk keuken door JDG"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                {/* Signature ring in de hoek */}
                <div className="absolute top-4 right-4 rounded-full bg-paper/95 backdrop-blur p-2.5 ring-1 ring-ink-900/8">
                  <LogoMark size={36} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal relative aspect-square overflow-hidden rounded-xl bg-ink-900" style={{ animationDelay: '0.2s' }}>
                  <Image src={business.photos.kast1} alt="Maatwerk kast door JDG" fill sizes="20vw" className="object-cover" />
                </div>
                <div className="reveal relative aspect-square overflow-hidden rounded-xl bg-ink-900" style={{ animationDelay: '0.28s' }}>
                  <Image src={business.photos.keuken2} alt="Detail maatwerk keuken door JDG" fill sizes="20vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ FEATURED, KEUKENS ══ */}
      <section className="relative py-24 lg:py-32 bg-ink-950 text-paper overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 grain-strip opacity-30" />
        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow !text-jdg-300">Vak nummer één, keukens</span>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.98] tracking-[-0.02em] text-paper">
                Een keuken die past bij hoe jij kookt.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[16.5px] leading-[1.75] text-ink-300 max-w-lg">
                Keukens zijn het grootste vak, en waar JDG het diepst in duikt. Van eiken massieve fronten tot composieten bladen, alles wordt getekend, gebouwd en gemonteerd door hetzelfde team.
              </p>
              <Link href={`/diensten/${keukens.slug}`} className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-jdg-300 link-underline">
                Alles over keukens op maat
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/10] md:aspect-[16/11] overflow-hidden rounded-xl bg-ink-900">
              <Image src={business.photos.keuken1} alt="Keuken op maat door JDG" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4 lg:gap-6">
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-ink-900 flex-1">
                <Image src={business.photos.keuken2} alt="Keuken detail door JDG" fill sizes="30vw" className="object-cover" />
              </div>
              <div className="rounded-xl bg-jdg-800 text-paper p-6 flex flex-col justify-between flex-1">
                <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-jdg-200">Wat JDG doet</span>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed">
                  <li>Ontwerp op basis van jouw dagelijkse routine</li>
                  <li>Werkbladen in composiet, keramiek of natuursteen</li>
                  <li>Fronten in lak, fineer of massief hout</li>
                  <li>Apparatuur in overleg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ ANDERE DIENSTEN ══ */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Ook door JDG</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em] text-ink-950">
                Van kledingkast tot boekenwand.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[16px] leading-[1.75] text-ink-700 max-w-lg">
                Naast keukens ontwerpt en bouwt JDG kasten, meubels en wandsystemen op maat. Alles komt uit dezelfde werkplaats en volgt dezelfde manier van werken.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="group rounded-xl border border-ink-900/10 bg-paper-2 p-7 hover:border-jdg-500 transition-all"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-jdg-700">
                    0{i + 2}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl leading-tight text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ WERKWIJZE ══ */}
      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Zo werkt JDG</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em] text-ink-950">
                Vier stappen, geen verrassingen.
              </h2>
              <p className="mt-8 text-[16px] leading-[1.75] text-ink-700 max-w-md">
                Wat er wordt afgesproken staat op papier. Wat JDG tekent, bouwt JDG. Wat JDG bouwt, monteert JDG.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-3">
                {[
                  { title: 'Kennismaking', body: 'Vrijblijvend gesprek bij jou thuis. JDG kijkt naar de ruimte en luistert naar hoe je erin wilt leven.' },
                  { title: 'Ontwerp en offerte', body: 'Binnen één à twee weken na het gesprek ligt er een schets met materialen en heldere prijsopgave. Aanpassingen zijn onbeperkt.' },
                  { title: 'Productie in de werkplaats', body: 'In de werkplaats in Terheijden wordt jouw project op maat gebouwd. Onderdelen worden genummerd en gecontroleerd.' },
                  { title: 'Plaatsing bij jou', body: 'Montage door JDG zelf, inclusief afkitting en oplevering. Meestal binnen enkele werkdagen.' },
                ].map((step, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-4 rounded-xl border border-ink-900/10 bg-paper p-6 lg:p-7">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="inline-flex items-center justify-center rounded-full bg-jdg-700 text-paper w-9 h-9 font-mono text-[12px] font-medium tabular">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <h3 className="font-display text-2xl text-ink-950 leading-tight">{step.title}</h3>
                      <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-700 max-w-2xl">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ WERKGEBIED ══ */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Werkgebied</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em] text-ink-950">
                Vanuit Terheijden door heel Nederland.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-[15.5px] leading-[1.75] text-ink-700">
                JDG werkt door heel Nederland, met een focus op West- en Noord-Brabant. Grote projecten in het buitenland? Ook mogelijk in overleg.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/werkgebied/${c.slug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-paper-2 border border-ink-900/12 px-5 py-3 text-[13.5px] font-medium text-ink-900 hover:border-jdg-500 hover:bg-jdg-50 transition-all"
              >
                {c.name}
                <ArrowRight className="h-3 w-3 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 transition-all" strokeWidth={2} />
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

      {/* ═════════════════════════════════════ WERK, ECHT GEMAAKT ══ */}
      <ProjectenStrook
        projecten={projects.slice(0, 3)}
        eyebrow="Gemaakt door JDG"
        titel="Werk uit de werkplaats."
        intro="Geen renders en geen catalogusfoto's: dit staat er echt, gebouwd in Terheijden en geplaatst bij de klant."
      />
      <div className="container-x -mt-12 pb-12">
        <Link href="/projecten" className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-900 hover:text-jdg-700 transition-colors">
          Alle projecten <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ══════════════════════════════════════════ VEELGESTELDE VRAGEN ══ */}
      <VragenBlok vragen={homeVragen} titel="Wat mensen als eerste vragen." />

      {/* ══════════════════════════════════════════════ CTA ══ */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          {/* Was: p-10 met daarin een grid-cols-12 gap-8 voor één kind. Elf gaps
              van 32px leggen een ondergrens van 352px onder dat raster, en met
              40px binnenmarge past dat niet meer op een telefoon van 390px: de
              homepage schoof 22px horizontaal. Het raster deed hier niets (er is
              maar één kolom), dus het is eruit. */}
          <div className="rounded-2xl bg-jdg-800 text-paper p-8 sm:p-10 lg:p-20">
            <div>
              <div className="max-w-3xl">
                <span className="eyebrow !text-jdg-200">Even overleggen</span>
                <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[0.98] tracking-[-0.02em] text-paper">
                  Een goede maat begint bij een goed gesprek.
                </h2>
                <p className="mt-8 max-w-lg text-[16.5px] leading-[1.75] text-jdg-100">
                  Bel of stuur een appje met foto's van de ruimte. Meestal binnen één tot twee weken hoor je van ons met een schets en een prijsindicatie.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={waHref('Hoi, ik heb interesse in maatwerk bij JDG. Kunnen we een gesprek inplannen?')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-paper text-ink-950 hover:bg-jdg-50"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp JDG
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
