import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, MapPin, Phone } from 'lucide-react'
import { services, getService } from '@/content/services'
import { cities } from '@/content/cities'
import { business } from '@/content/business'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    alternates: { canonical: `${business.url}/diensten/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.metaDescription,
      type: 'article',
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb + terug */}
      <section className="pt-32 pb-4">
        <div className="container-x">
          <Link href="/diensten" className="inline-flex items-center gap-2 text-[13px] text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Alle diensten
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <span className="eyebrow">{s.title}</span>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,7rem)] font-normal leading-[0.95] tracking-[-0.02em] text-ink-900">
                {s.h1}
              </h1>
            </div>
          </div>

          <div className="mt-16 relative aspect-[16/9] overflow-hidden bg-ink-900">
            <Image
              src={s.hero}
              alt={s.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-display text-2xl italic text-jdg-600 leading-snug">
                {s.short}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-[17px] leading-[1.75] text-ink-800 mb-6">{s.intro}</p>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.75] text-ink-700 mt-5">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Wat je krijgt</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
                Vier redenen om maatwerk te kiezen.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {s.benefits.map((b, i) => (
              <div key={i} className="border-t border-ink-900/20 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-jdg-600 tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-ink-900">{b.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Zo werken wij</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
                Vier stappen naar oplevering.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-900/15">
                {s.process.map((step) => (
                  <div key={step.n} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                    <div className="col-span-3 lg:col-span-2">
                      <span className="font-mono text-[13px] text-jdg-600 tabular">{step.n}</span>
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-2xl font-normal text-ink-900">{step.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-ink-950 text-paper">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow !text-jdg-400">Veelgestelde vragen</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em]">
                Vragen die vaak terugkomen.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border-t border-ink-800">
                {s.faqs.map((f, i) => (
                  <details key={i} className="border-b border-ink-800 py-6 group">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                      <h3 className="font-display text-xl lg:text-2xl font-normal text-paper pr-6">{f.q}</h3>
                      <span className="text-jdg-400 text-2xl mt-1 group-open:rotate-45 transition-transform inline-block">+</span>
                    </summary>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink-300 max-w-2xl">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkgebied cross-sell */}
      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Werkgebied</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
              {s.title} in jouw plaats.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.7] text-ink-700">
              Jonas rijdt vanuit Terheijden door heel Nederland. Op deze plekken werkt hij regelmatig aan {s.title.toLowerCase()}.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/diensten/${s.slug}/${c.slug}`}
                className="group flex items-center justify-between border-b border-ink-900/15 py-3 hover:border-jdg-500 transition-colors"
              >
                <span className="flex items-center gap-2 text-[14px] font-medium text-ink-900">
                  <MapPin className="h-3.5 w-3.5 text-jdg-600" />
                  {c.name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">Klaar om te beginnen?</span>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl font-normal italic leading-[0.98] tracking-[-0.02em] text-ink-900">
                Stuur een appje. Jonas belt terug binnen een dag.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={waHref(`Hoi Jonas, ik zou graag ${s.title.toLowerCase()} laten maken. Kunnen we vrijblijvend overleggen?`)}
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
          </div>
        </div>
      </section>

      {/* Andere diensten */}
      <section className="py-16 border-t border-ink-900/10">
        <div className="container-x">
          <span className="eyebrow">Andere diensten</span>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} href={`/diensten/${o.slug}`} className="group border-t border-ink-900/15 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-normal text-ink-900 group-hover:text-jdg-600 transition-colors">
                    {o.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-600">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
