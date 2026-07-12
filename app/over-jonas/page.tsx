import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { business } from '@/content/business'

export const metadata = {
  title: 'Over Jonas',
  description: 'Achter JDG staat één vakman: Jonas. Vanuit zijn atelier in Terheijden ontwerpt en bouwt hij interieur op maat.',
  alternates: { canonical: `${business.url}/over-jonas` },
}

export default function OverJonas() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`
  return (
    <>
      <section className="pt-40 pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">De maker</span>
              <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.92] tracking-[-0.03em] text-ink-900">
                Jonas.
                <br />
                <span className="italic font-light text-jdg-600">Eén vakman achter alles</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                <Image
                  src={business.photos.kast1}
                  alt="Werk van Jonas — JDG"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-[18px] leading-[1.75] text-ink-800">
                Ik ben Jonas. Sinds ik JDG oprichtte werk ik vanuit mijn atelier in Terheijden aan maatwerk interieur voor mensen die verder willen kijken dan een standaardkeuken of standaardkast.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-ink-700">
                Wat mij drijft is simpel. Als je een keuken of kast laat maken, wil je één iemand die van begin tot eind verantwoordelijk is. Iemand die weet wat de leverancier van je fronten kan, weet hoe je scharnier vast te draaien, weet hoe je een scheve muur mooi wegwerkt.
              </p>
              <p className="mt-6 text-[16px] leading-[1.75] text-ink-700">
                Dat probeer ik te zijn. Ontwerp, productie, plaatsing komen bij mij onder één dak. Je hebt daardoor niet met een verkoper, een fabriek en een montageploeg te maken, maar met dezelfde persoon door het hele traject.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={waHref('Hoi Jonas, ik zou graag met je in gesprek. Kunnen we een afspraak inplannen?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  App Jonas direct
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

      <section className="py-24 bg-bone-100">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Werkwijze</span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-ink-900">
              Wat je van mij mag verwachten.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: 'Persoonlijk contact', body: 'Van eerste appje tot laatste knop houd ik zelf de lijnen. Vragen worden binnen een dag beantwoord.' },
              { title: 'Ontwerp op papier', body: 'Voordat er iets wordt gemaakt, ligt het ontwerp met maten, materialen en prijs op papier.' },
              { title: 'Eigen productie', body: 'Alles wordt in mijn atelier gebouwd. Onderdelen zijn gecontroleerd voordat ze richting jouw huis gaan.' },
              { title: 'Vijf jaar garantie', body: 'Constructie, scharnieren en beslag zijn zo gekozen dat ze twintig jaar meegaan. Op de constructie geldt vijf jaar garantie.' },
            ].map((v) => (
              <div key={v.title} className="border-t border-ink-900/20 pt-6">
                <h3 className="font-display text-2xl font-normal text-ink-900">{v.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
