/**
 * Herbruikbare paginasecties.
 *
 * Toegevoegd 02-09-2026 bij de vindbaarheidsronde. Ze bestaan om één reden:
 * de stad- en dienst×stad-pagina's waren sjablonen van 96 tot 168 woorden met
 * ~80% woordoverlap onderling. Met deze secties vullen dezelfde pagina's zich
 * met inhoud die er al is en die per dienst écht verschilt: gerealiseerde
 * projecten mét foto, materialen, de vragen van dat vak en de factoren die de
 * prijs bepalen.
 *
 * De klassen zijn letterlijk overgenomen uit de bestaande dienstpagina, zodat
 * er geen enkele waarde buiten DESIGN.md bij komt.
 */

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import type { Project } from '@/content/projects'
import type { Material } from '@/content/materialen'
import type { City } from '@/content/cities'
import { vertrouwensregels } from '@/content/vertrouwen'

export const waHref = (msg: string) =>
  `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

/* ---------------------------------------------------------------- */

export function Kruimelpad({ items }: { items: { name: string; url?: string }[] }) {
  return (
    <nav aria-label="Kruimelpad" className="flex flex-wrap items-center gap-2 text-[14px] text-ink-500">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.url ? (
            <Link href={it.url} className="hover:text-ink-900 transition-colors">{it.name}</Link>
          ) : (
            <span className="text-ink-900">{it.name}</span>
          )}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  )
}

/* ---------------------------------------------------------------- */

export function ProjectenStrook({
  projecten,
  eyebrow = 'Gemaakt door JDG',
  titel,
  intro,
}: {
  projecten: Project[]
  eyebrow?: string
  titel: string
  intro?: string
}) {
  if (projecten.length === 0) return null
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
            {titel}
          </h2>
          {intro && <p className="mt-6 text-[16px] leading-[1.7] text-ink-700">{intro}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projecten.map((p) => (
            <Link key={p.slug} href={`/projecten/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-900">
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl leading-tight text-ink-950 group-hover:text-jdg-700 transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
              </div>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-600">{p.description}</p>
              {p.material && (
                <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-500">{p.material}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

export function MaterialenStrook({
  materialen,
  titel,
  intro,
}: {
  materialen: Material[]
  titel: string
  intro?: string
}) {
  if (materialen.length === 0) return null
  return (
    <section className="py-24 bg-paper-2">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Materiaalkeuze</span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
            {titel}
          </h2>
          {intro && <p className="mt-6 text-[16px] leading-[1.7] text-ink-700">{intro}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {materialen.map((m) => (
            <Link key={m.slug} href={`/materialen/${m.slug}`} className="group border-t border-ink-900/20 pt-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight text-ink-950 group-hover:text-jdg-700 transition-colors">
                  {m.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{m.short}</p>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-600">{m.prijsklasse}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

export function PrijsfactorenBlok({
  factoren,
  titel,
  intro,
}: {
  factoren: { titel: string; body: string }[]
  titel: string
  intro: string
}) {
  if (factoren.length === 0) return null
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">Wat bepaalt de prijs</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              {titel}
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-700 max-w-md">{intro}</p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="border-t border-ink-900/15">
              {factoren.map((f, i) => (
                <div key={i} className="grid grid-cols-12 gap-6 py-8 border-b border-ink-900/15">
                  <div className="col-span-3 lg:col-span-2">
                    <span className="font-mono text-[12px] text-jdg-700 tabular">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="col-span-9 lg:col-span-10">
                    <h3 className="font-display text-2xl text-ink-950 leading-tight">{f.titel}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

export function VragenBlok({
  vragen,
  titel,
  eyebrow = 'Veelgestelde vragen',
}: {
  vragen: { q: string; a: string }[]
  titel: string
  eyebrow?: string
}) {
  if (vragen.length === 0) return null
  return (
    <section className="py-24 bg-ink-950 text-paper">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow !text-jdg-300">{eyebrow}</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
              {titel}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="border-t border-ink-800">
              {vragen.map((f, i) => (
                <details key={i} className="border-b border-ink-800 py-6 group" open={i === 0}>
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
  )
}

/* ---------------------------------------------------------------- */

/**
 * Harde, controleerbare feiten over de plaats en de rit ernaartoe.
 * Geen claims over eerder werk: JDG bestaat sinds 2025 en heeft nog geen
 * publiek portfolio per plaats (DE WET art. 1.1).
 */
export function PlaatsFeiten({ city, dienst }: { city: City; dienst?: string }) {
  const rijen: { label: string; waarde: string }[] = [
    { label: 'Gemeente', waarde: city.gemeente },
    { label: 'Regio', waarde: city.region },
    { label: 'Postcodegebied', waarde: city.postcodePrefix },
    { label: 'Vanaf de werkplaats', waarde: `${city.distanceKm} km` },
  ]
  return (
    <section className="py-24 bg-paper-2">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">{city.name} in het kort</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              Van de werkplaats naar {city.name}.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-700 max-w-md">
              De werkplaats staat aan de {business.address.street} in {business.address.city}, gemeente{' '}
              {business.address.municipality}. Inmeten gebeurt bij jou thuis, bouwen gebeurt hier, plaatsen
              weer bij jou{dienst ? ` — ook voor ${dienst.toLowerCase()}` : ''}. Bezoek aan de werkplaats kan
              op afspraak.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <dl className="border-t border-ink-900/15">
              {rijen.map((r) => (
                <div key={r.label} className="grid grid-cols-12 gap-6 py-5 border-b border-ink-900/15">
                  <dt className="col-span-5 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-600">{r.label}</dt>
                  <dd className="col-span-7 text-[16px] text-ink-900">{r.waarde}</dd>
                </div>
              ))}
              <div className="grid grid-cols-12 gap-6 py-5 border-b border-ink-900/15">
                <dt className="col-span-5 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-600">
                  Ook in de buurt
                </dt>
                <dd className="col-span-7 text-[16px] text-ink-900">{city.kernen.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

export function ContactBlok({ kop, waMsg }: { kop: string; waMsg: string }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow">Klaar om te beginnen?</span>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[0.98] tracking-[-0.02em] text-ink-950">
              {kop}
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-ink-700">
              Het eerste gesprek en de offerte zijn gratis en vrijblijvend. Stuur een appje met een foto en
              de globale maten, dan weet je snel waar je aan toe bent.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={waHref(waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle className="h-4 w-4" />
                WhatsApp JDG
              </a>
              <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
                <Phone className="h-4 w-4" />
                <span className="tabular">{business.phone}</span>
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contactformulier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

export function PlaatsenRooster({
  titel,
  intro,
  links,
}: {
  titel: string
  intro?: string
  links: { name: string; href: string }[]
}) {
  if (links.length === 0) return null
  return (
    <section className="py-24 lg:py-32 bg-paper-2">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Werkgebied</span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
            {titel}
          </h2>
          {intro && <p className="mt-6 text-[16px] leading-[1.7] text-ink-700">{intro}</p>}
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between border-b border-ink-900/15 py-3 hover:border-jdg-500 transition-colors"
            >
              <span className="flex items-center gap-2 text-[14px] font-medium text-ink-900">
                <MapPin className="h-3.5 w-3.5 text-jdg-700" />
                {l.name}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-500 group-hover:text-jdg-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */

/**
 * De vertrouwensstrook. Toegevoegd 09-09-2026, interventiecontract e3ee8441.
 *
 * Eén vorm op elke pagina die hem draagt — alleen het onderwerp in de eerste zin
 * wisselt mee met de dienst. Dat is bewust: vertrouwen komt uit herkenning, niet
 * uit keurmerken (lering 24ffb894), en een strook die per pagina van vorm
 * verandert leest als reclame in plaats van als een gegeven.
 *
 * Elke regel komt uit `content/vertrouwen.ts` en daar staat per regel het feit
 * waar hij vandaan komt. Er staat hier bewust geen garantietermijn, geen review
 * en geen prijs: die feiten wachten op de handtekening van de ondernemer
 * (DE WET art. 1.3).
 *
 * Alle klassen zijn letterlijk overgenomen uit PlaatsFeiten hierboven, zodat er
 * geen waarde buiten DESIGN.md bij komt.
 */
export function Vertrouwensstrook({ dienst }: { dienst?: string }) {
  const opening = dienst
    ? `Een ${dienst.toLowerCase()} van JDG wordt getekend, gebouwd en gemonteerd door dezelfde persoon.`
    : 'Al het maatwerk van JDG wordt getekend, gebouwd en gemonteerd door dezelfde persoon.'
  return (
    <section className="py-24 bg-paper-2">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">Wie er achter staat</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
              Geen bedrijfsnaam, een naam.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-ink-700 max-w-md">
              {opening} Dat is te controleren, en daarom staat het hier en niet alleen in de
              voettekst. Hoe Jonas de Graaf in het vak kwam en waarom hij zonder tussenlagen werkt
              lees je op{' '}
              <Link href="/over-jonas" className="link-underline text-ink-900">
                de pagina over de maker
              </Link>
              ; wat er tussen kennismaking en montage gebeurt staat stap voor stap in{' '}
              <Link href="/werkwijze" className="link-underline text-ink-900">
                de werkwijze van JDG
              </Link>
              .
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <dl className="border-t border-ink-900/15">
              {vertrouwensregels.map((r) => (
                <div key={r.label} className="grid grid-cols-12 gap-6 py-5 border-b border-ink-900/15">
                  <dt className="col-span-5 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-600">
                    {r.label}
                  </dt>
                  <dd className="col-span-7 text-[16px] text-ink-900">{r.waarde}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-600">
              JDG bestaat sinds {business.founded}. De ervaring erachter is ouder dan het bedrijf, en
              dat verschil staat er liever eerlijk dan mooi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
