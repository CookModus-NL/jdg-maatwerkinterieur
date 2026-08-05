import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { business } from '@/content/business'

export const metadata = {
  title: 'Over Jonas',
  description: 'Achter JDG Maatwerk Interieur staat Jonas de Graaf. Op zijn achttiende begon hij aan de BBL interieurbouw, ruim vijftien jaar later runt hij zijn eigen werkplaats in Terheijden.',
  alternates: { canonical: `${business.url}/over-jonas` },
}

export default function OverJonas() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">De maker</span>
              <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em] text-ink-950">
                Jonas de Graaf.
                <br />
                <span className="text-jdg-700">Zeventien jaar tussen het zaagsel</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-12 lg:gap-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-900">
                <Image
                  src={business.photos.keuken1}
                  alt="Werk uit de werkplaats van Jonas"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8 rounded-xl border border-ink-900/12 bg-paper-2 p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-jdg-700">In het kort</span>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex justify-between border-b border-ink-900/10 pb-3">
                    <dt className="text-ink-500">Begonnen</dt>
                    <dd className="text-ink-950 font-medium tabular">2008 (18 jaar)</dd>
                  </div>
                  <div className="flex justify-between border-b border-ink-900/10 pb-3">
                    <dt className="text-ink-500">Opleiding</dt>
                    <dd className="text-ink-950 font-medium">BBL Interieurbouw</dd>
                  </div>
                  <div className="flex justify-between border-b border-ink-900/10 pb-3">
                    <dt className="text-ink-500">Ervaring</dt>
                    <dd className="text-ink-950 font-medium tabular">17 jaar in het vak</dd>
                  </div>
                  <div className="flex justify-between border-b border-ink-900/10 pb-3">
                    <dt className="text-ink-500">Werkplaats</dt>
                    <dd className="text-ink-950 font-medium">Terheijden</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-500">Favoriet</dt>
                    <dd className="text-ink-950 font-medium">Keukens</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-6 text-[17px] leading-[1.8] text-ink-900">
                <p>
                  Op zijn achttiende begon Jonas aan de BBL opleiding interieurbouw. Niet omdat het handig was of omdat de school ver weg was, maar omdat hij wist wat hij wilde. Iets maken met zijn handen, elke dag anders.
                </p>
                <p>
                  Zeventien jaar later. Jonas heeft in die tijd voor grote en kleinere bedrijven gewerkt, veel keukens gebouwd, nog meer kasten. Wat elk jaar duidelijker werd: hij wilde het op zijn eigen manier doen. Zonder tussenlagen tussen wat er getekend wordt en wat er in de kamer komt te staan.
                </p>
                <p>
                  Sinds JDG staat hij in zijn eigen werkplaats. Ontwerpt, tekent, zaagt, monteert. Wat wordt afgesproken, komt er ook zo te staan. Geen overdrachten, geen verhalen die tussen partijen door glijden.
                </p>
                <p>
                  Wat hij het leukst vindt: keukens. Omdat er zoveel bij komt kijken. Werkbladen, apparatuur, hoogtes, verlichting, hoe iemand écht kookt en waar de kruiden staan. Elke keuken is nieuw uit te tekenen. Als de klant na een paar weken zegt "dit is precies wat ik wilde", is de dag goed.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Zonder tussenlagen', body: 'Wat er wordt afgesproken staat op papier. Wat op papier staat, wordt gebouwd. Wat wordt gebouwd, monteert Jonas zelf.' },
                  { title: 'Elk project vanaf schets', body: 'Geen standaard modules. Elke keuken en elke kast begint als leeg vel, en eindigt precies passend in jouw ruimte.' },
                  { title: 'Werkplaats in Terheijden', body: 'Alle onderdelen komen uit één werkplaats. Vanuit daar rijden ze naar jou, klaar om binnen enkele werkdagen te staan.' },
                  { title: 'Werk waar je op terugkomt', body: 'Constructie voor twintig jaar, scharnieren die je nooit meer hoort, planken die niet gaan zakken. Simpel gezegd: goed werk.' },
                ].map((b) => (
                  <div key={b.title} className="border-t border-ink-900/15 pt-5">
                    <h3 className="font-display text-2xl text-ink-950 leading-tight">{b.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">{b.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 flex flex-wrap gap-3">
                <a
                  href={waHref('Hoi Jonas, ik wil graag eens sparren over een project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Stuur Jonas een appje
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

      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <span className="eyebrow">Waarom keukens</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-ink-950">
                Het vak dat nooit hetzelfde is.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:pt-4">
              <p className="text-[16px] leading-[1.75] text-ink-800">
                Elke keuken heeft zijn eigen puzzel. Een schuine muur, een raam op een onhandige hoogte, een schoorsteen die dwarsligt. Voor Jonas is dat juist de reden waarom het vak boeit. Geen twee keukens zijn hetzelfde, dus je bent nooit klaar met leren.
              </p>
              <Link href="/diensten/keukens-op-maat" className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-950 link-underline">
                Meer over keukens op maat
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
