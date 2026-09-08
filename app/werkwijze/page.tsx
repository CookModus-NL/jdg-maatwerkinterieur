import Link from 'next/link'
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'

export const metadata = {
  title: 'Werkwijze',
  description: 'Zo werkt JDG Maatwerk Interieur: van eerste gesprek en ontwerp tot productie in eigen werkplaats en plaatsing bij jou thuis.',
  alternates: { canonical: `${business.url}/werkwijze` },
}

export default function Werkwijze() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`
  return (
    <>
      <section className="pt-40 pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="eyebrow">Zo werkt JDG</span>
              <h1 className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.94] tracking-[-0.02em] text-ink-950">
                Ontwerp, bouw, plaats
                <br />
                <span className="text-jdg-700">, één huisstijl</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[16px] leading-[1.75] text-ink-800">
                JDG werkt aan één project tegelijk. Ontwerp, productie en montage gebeuren zonder tussenlagen, één handschrift van eerste schets tot laatste knop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { n: '01', title: 'Kennismaking', body: 'JDG komt vrijblijvend bij je thuis. Kijken naar de ruimte, luisteren naar wat je zoekt. Geen verkoopgesprek, een gesprek.' },
              { n: '02', title: 'Ontwerp en offerte', body: 'Binnen één à twee weken ligt er een schets met materialen en heldere prijsopgave. Aanpassingen zijn onbeperkt tot je akkoord bent.' },
              { n: '03', title: 'Productie in de werkplaats', body: 'In de werkplaats in Terheijden wordt jouw project op maat gebouwd. Onderdelen worden genummerd en gecontroleerd.' },
              { n: '04', title: 'Plaatsing bij jou', body: 'Montage door JDG zelf, inclusief afkitting en oplevering. Bij voorkeur op casco, sloop van bestaande installatie is in overleg mogelijk.' },
            ].map((s, idx) => (
              <div key={idx} className="rounded-xl border border-ink-900/12 bg-paper-2 p-8">
                <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-jdg-700">Stap {String(idx + 1).padStart(2, '0')}</span>
                <h2 className="mt-4 font-display text-3xl text-ink-950 leading-tight">{s.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <span className="eyebrow">Wat je van JDG mag verwachten</span>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Vast contact door het project', body: 'Van eerste appje tot laatste knop, één aanspreekpunt binnen JDG, zonder tussenkanalen.' },
                { title: 'Ontwerp op papier voor productie', body: 'Wat wordt gemaakt is eerst getekend en akkoord bevonden. Geen improviseren op locatie.' },
                { title: 'Productie in eigen werkplaats', body: 'Alle onderdelen worden in Terheijden gebouwd en gecontroleerd voordat ze naar jou vertrekken.' },
                { title: 'Garantie op constructie', body: 'Vijf jaar op de constructie. Fabrieksgarantie op scharnieren en beslag.' },
              ].map((v) => (
                <div key={v.title} className="border-t border-ink-900/15 pt-5">
                  <h3 className="font-display text-2xl text-ink-950">{v.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-700">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl border-t border-ink-900/15 pt-8">
            <h2 className="font-display text-2xl text-ink-950">En als je het wilt splitsen?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
              Maken en monteren zijn bij JDG een opdracht: de offerte, de betaaltermijnen en de garantie zijn er alle drie op gebouwd.
              Wat er verandert als je alleen laat maken en zelf monteert, staat per artikel uitgeschreven.
            </p>
            <Link
              href="/blog/zelf-monteren-of-alleen-laten-maken"
              className="mt-4 inline-flex items-center gap-2 text-[15px] text-ink-900 underline underline-offset-4 decoration-ink-300 hover:text-jdg-700 hover:decoration-jdg-700 transition-colors"
            >
              Alleen laten maken en zelf monteren: kan dat bij maatwerk? <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <a href={waHref('Hoi JDG, ik wil graag overleggen over een project.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp JDG
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn btn-outline">
              <Phone className="h-4 w-4" />
              <span className="tabular">{business.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
