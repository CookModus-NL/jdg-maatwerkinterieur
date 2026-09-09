import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, MapPin, Phone, MessageCircle } from 'lucide-react'
import { services, getService } from '@/content/services'
import { cities, getCity } from '@/content/cities'
import { stedenVoorDienst } from '@/content/lokaal-rooster'
import { business } from '@/content/business'
import { projectenVoorDienst, materialenVoorDienst, prijsfactorenVoor } from '@/content/relaties'
import { Kruimelpad, ProjectenStrook, MaterialenStrook, PrijsfactorenBlok, Vertrouwensstrook } from '@/components/secties'
import { heeftVertrouwensstrook } from '@/content/vertrouwen'
import { breadcrumbSchema, faqPageSchema, serviceSchema, pageSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    // Enkelvoud vooraan: zo wordt er gezocht (GSC 23-31 aug 2026).
    title: `${s.singular} laten maken`,
    description: s.metaDescription,
    alternates: { canonical: `${business.url}/diensten/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.metaDescription, type: 'article' },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3)
  const projecten = projectenVoorDienst(s.slug, 3)
  const stoffen = materialenVoorDienst(s.slug, 4)
  const factoren = prijsfactorenVoor(s.slug)

  const kruimels = [
    { name: 'Home', url: '/' },
    { name: 'Diensten', url: '/diensten' },
    { name: s.title },
  ]

  // Stond hier tot 02-09-2026 niet: Service, FAQPage en kruimelpad ontbraken op
  // álle dienstpagina's, terwijl de FAQ's er zichtbaar op staan.
  const ld = pageSchema([
    breadcrumbSchema(kruimels.map((k) => ({ name: k.name, url: k.url ?? `/diensten/${s.slug}` }))),
    serviceSchema(s.slug),
    faqPageSchema(s.faqs),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />

      <section className="pt-32 pb-4">
        <div className="container-x">
          <Kruimelpad items={kruimels} />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <span className="eyebrow">{s.title}</span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.98] tracking-[-0.02em] text-ink-950">
            {s.h1}
          </h1>

          <div className="mt-16 relative aspect-[16/9] overflow-hidden rounded-xl bg-ink-900">
            <Image src={s.hero} alt={s.title} fill priority sizes="100vw" className="object-cover" />
          </div>

          <div className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-display text-2xl text-jdg-700 leading-snug">
                {s.short}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-[16px] leading-[1.75] text-ink-900 mb-6">{s.intro}</p>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.75] text-ink-700 mt-5">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Wat je krijgt</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              Vier redenen om maatwerk te kiezen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {s.benefits.map((b, i) => (
              <div key={i} className="border-t border-ink-900/20 pt-6">
                <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-jdg-700 tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ink-950">{b.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Zo werkt JDG</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
                Vier stappen naar oplevering.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-900/15">
                {s.process.map((step, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                    <div className="col-span-3 lg:col-span-2">
                      <span className="font-mono text-[12px] text-jdg-700 tabular">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-2xl text-ink-950 leading-tight">{step.title}</h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertrouwensstrook: alleen op de vier clusterpagina's van contract e3ee8441.
          /diensten/keukens-op-maat en /diensten/badkamermeubels-op-maat blijven in
          het meetvenster ongewijzigd en zijn de referentie. */}
      {heeftVertrouwensstrook(s.slug) && <Vertrouwensstrook dienst={s.singular} />}

      <ProjectenStrook
        projecten={projecten}
        titel={`Eerder gemaakt: ${s.title.toLowerCase()}.`}
        intro="Werk uit de eigen werkplaats in Terheijden, met de materialen en het beslag die hieronder staan."
      />

      <PrijsfactorenBlok
        factoren={factoren}
        titel={`Wat kost ${s.singular.toLowerCase()}?`}
        intro="Maatwerk heeft geen kant-en-klare prijs. Wel een vaste set knoppen die de offerte bepalen. Stuur een foto en globale maten, dan volgt er een indicatie."
      />

      <MaterialenStrook
        materialen={stoffen}
        titel={`Materialen voor ${s.singular.toLowerCase()}.`}
        intro="Per materiaal staat wat het kost, hoe het slijt en waar het wel en niet voor bedoeld is."
      />

      <section className="py-24 bg-ink-950 text-paper">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow !text-jdg-300">Veelgestelde vragen</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
                Vragen die vaak terugkomen.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-800">
                {s.faqs.map((f, i) => (
                  <details key={i} className="border-b border-ink-800 py-6 group">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                      <h3 className="font-display text-xl lg:text-2xl text-paper pr-6">{f.q}</h3>
                      <span className="text-jdg-300 text-2xl mt-1 group-open:rotate-45 transition-transform inline-block">+</span>
                    </summary>
                    <p className="mt-4 text-[16px] leading-relaxed text-ink-300 max-w-2xl">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Werkgebied</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              {s.title} in jouw plaats.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-700">
              JDG rijdt vanuit {business.address.city} door heel Nederland. Voor deze plaatsen staat er een
              aparte pagina over {s.singular.toLowerCase()}, met de afstand en wat de woningen daar praktisch
              vragen. Staat jouw plaats er niet bij, kijk dan bij het werkgebied.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {stedenVoorDienst(s.slug).map((slugStad) => getCity(slugStad)).filter(Boolean).map((c) => (
              <Link
                key={c!.slug}
                href={`/diensten/${s.slug}/${c!.slug}`}
                className="group flex items-center justify-between border-b border-ink-900/15 py-3 hover:border-jdg-500 transition-colors"
              >
                <span className="flex items-center gap-2 text-[14px] font-medium text-ink-900">
                  <MapPin className="h-3.5 w-3.5 text-jdg-700" />
                  {c!.name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/werkgebied" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-900 hover:text-jdg-700 transition-colors">
              Volledig werkgebied ({cities.length} plaatsen) <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">Klaar om te beginnen?</span>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[0.98] tracking-[-0.02em] text-ink-950">
                Stuur een appje. Wij horen graag van je.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={waHref(`Hoi JDG, ik zou graag ${s.title.toLowerCase()} laten maken. Kunnen we vrijblijvend overleggen?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp JDG
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
                  <Phone className="h-4 w-4" />
                  <span className="tabular">{business.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-ink-900/10">
        <div className="container-x">
          <span className="eyebrow">Andere diensten</span>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} href={`/diensten/${o.slug}`} className="group border-t border-ink-900/15 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-ink-950 group-hover:text-jdg-700 transition-colors">
                    {o.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-600">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
