import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqs, type FAQ } from '@/content/faq'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen, JDG Maatwerk Interieur',
  description: 'Antwoorden op vragen over maatwerk keukens, kasten en meubels bij JDG. Prijzen, doorlooptijd, materialen, garantie en werkwijze.',
  alternates: { canonical: `${business.url}/veelgestelde-vragen` },
  openGraph: {
    title: 'Veelgestelde vragen',
    description: 'Alles wat je wilt weten voor je aan een maatwerk project begint.',
    url: `${business.url}/veelgestelde-vragen`,
    images: [`${business.url}/opengraph-image`],
  },
}

const categoryOrder: FAQ['category'][] = ['algemeen', 'proces', 'materialen', 'levering', 'garantie']
const categoryLabels: Record<FAQ['category'], string> = {
  algemeen: 'Algemeen',
  proces: 'Proces en werkwijze',
  materialen: 'Materialen en afwerking',
  levering: 'Levering en montage',
  garantie: 'Garantie en onderhoud',
}

export default function Page() {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Veelgestelde vragen', url: '/veelgestelde-vragen' }]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqPageSchema(faqs), breadcrumbSchema(breadcrumbs)]),
        }}
      />
      <section className="pt-40 pb-16">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Veelgestelde vragen</span>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ink-950">
            Alles wat je wilt weten<br /><span className="text-jdg-700">voordat we beginnen</span>.
          </h1>
          <p className="mt-8 text-[16px] leading-[1.75] text-ink-700">
            Staat je vraag er niet tussen? Bel Jonas of stuur een berichtje.
          </p>
        </div>
      </section>
      {categoryOrder.map((cat) => {
        const items = faqs.filter((f) => f.category === cat)
        if (items.length === 0) return null
        return (
          <section key={cat} className="pb-16">
            <div className="container-x">
              <h2 className="font-display text-3xl lg:text-4xl text-ink-950 mb-6">{categoryLabels[cat]}</h2>
              <div className="divide-y divide-ink-100 border-y border-ink-100">
                {items.map((f, i) => (
                  <details key={i} className="group py-6">
                    <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                      <h3 className="font-display text-[20px] lg:text-[24px] leading-snug text-ink-950 group-open:text-jdg-700 transition-colors">
                        {f.q}
                      </h3>
                      <span className="font-mono text-jdg-700 text-2xl leading-none mt-0.5 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-[16px] leading-[1.8] text-ink-700 max-w-[68ch]">{f.a}</p>
                    {f.meer && (
                      <Link
                        href={f.meer.href}
                        className="mt-3 inline-flex items-center gap-2 text-[15px] text-ink-900 underline underline-offset-4 decoration-ink-300 hover:text-jdg-700 hover:decoration-jdg-700 transition-colors"
                      >
                        {f.meer.label} <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </details>
                ))}
              </div>
            </div>
          </section>
        )
      })}
      <section className="py-24 border-t border-ink-100">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-ink-950">
            Vraag niet<br /><span className="text-jdg-700">gevonden</span>?
          </h2>
          <p className="mt-6 text-[16px] text-ink-700 max-w-xl mx-auto">
            Stuur een berichtje met jouw specifieke vraag. Jonas denkt vrijblijvend mee.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-[14px] font-medium hover:bg-jdg-700 transition-colors">
            Even overleggen <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
