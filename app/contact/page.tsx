import { MessageCircle, Phone, Mail, MapPin, Clock, Camera, Zap, Shield, Instagram, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact · offerte via WhatsApp',
  description: `Stuur Jonas van JDG Maatwerk Interieur een WhatsApp met foto's en maten van uw ruimte. Binnen 1 werkdag een eerste prijsindicatie. Of bel direct ${business.phone}.`,
}

const waNumber = business.whatsapp.replace('+', '')
const waText = encodeURIComponent(business.whatsappPrefills.offerte)

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 pt-20 pb-16 lg:pt-32">
        <div aria-hidden className="absolute inset-0 -z-10 ink-grid opacity-50" />
        <div aria-hidden className="absolute -top-40 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-jdg-700/20 blur-[120px]" />

        <div className="container-x">
          <div className="max-w-4xl reveal">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.04em] text-white">
              Stuur Jonas een<br/>
              <span className="italic text-jdg-400">WhatsAppje.</span>
            </h1>
            <p className="mt-10 text-lg text-ink-300 max-w-xl leading-relaxed">
              Snelste route: foto’s en globale maten van uw ruimte via WhatsApp. Binnen één werkdag ontvangt u een eerste schets en prijsindicatie of plannen we een vrijblijvend inmeetmoment.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section className="bg-ink-950 pb-20">
        <div className="container-x">
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-jdg-500 to-jdg-700 p-10 lg:p-16 transition-all hover:shadow-[0_24px_80px_-12px_rgba(63,178,114,0.35)] reveal"
          >
            <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-jdg-400/30 blur-[80px]" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
              <div className="lg:col-span-8 text-white">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
                  <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
                  Voorkeurskanaal · snelste reactie
                </div>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.02] tracking-[-0.03em]">
                  WhatsApp Jonas
                </h2>
                <p className="mt-5 text-xl text-white/90 font-medium">
                  {business.phone}
                </p>
                <ul className="mt-10 grid gap-3 text-base text-white/90 sm:grid-cols-2">
                  <li className="flex items-start gap-2"><Camera className="h-5 w-5 mt-0.5 shrink-0" /> Stuur foto’s en globale maten</li>
                  <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 shrink-0" /> Reactie binnen 1 werkdag</li>
                  <li className="flex items-start gap-2"><Shield className="h-5 w-5 mt-0.5 shrink-0" /> Vrijblijvend en gratis</li>
                  <li className="flex items-start gap-2"><Clock className="h-5 w-5 mt-0.5 shrink-0" /> Geen verplichtingen</li>
                </ul>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-medium text-ink-950 transition-transform group-hover:scale-105">
                  <MessageCircle className="h-6 w-6 text-jdg-500" />
                  Start chat
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </a>

          {/* Secondaire kanalen */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={`tel:${business.phoneE164}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-6 transition-all hover:border-jdg-400/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-ink-800 text-jdg-400 transition-all group-hover:bg-jdg-400 group-hover:text-ink-950">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">Bel direct</div>
                <div className="font-display text-lg font-medium text-white">{business.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-6 transition-all hover:border-jdg-400/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-ink-800 text-jdg-400 transition-all group-hover:bg-jdg-400 group-hover:text-ink-950">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">E-mail</div>
                <div className="font-display text-sm font-medium text-white truncate">{business.email}</div>
              </div>
            </a>

            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-6 transition-all hover:border-jdg-400/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-ink-800 text-jdg-400 transition-all group-hover:bg-jdg-400 group-hover:text-ink-950">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">Instagram</div>
                <div className="font-display text-lg font-medium text-white">@{business.social.instagramHandle}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* HOE WERKT HET */}
      <section className="bg-ink-900 border-y border-ink-800 py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-16 reveal">
            <div className="eyebrow">Hoe het werkt</div>
            <h2 className="mt-8 font-display text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white">
              Geen formulieren,<br/>
              <span className="italic text-jdg-400">geen wachten.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Foto\'s + maten',
                body: 'Een paar telefoonfoto\'s van de ruimte en de globale maten zijn vaak al genoeg voor een eerste schets.',
              },
              {
                num: '02',
                title: 'Reactie dezelfde dag',
                body: 'Doordeweeks meestal binnen een paar uur. Uiterlijk de volgende werkdag krijgt u een indicatie.',
              },
              {
                num: '03',
                title: 'Vrijblijvend inmeten',
                body: 'Bij interesse plannen wij een afspraak om op te meten, materialen te bespreken en de offerte uit te werken.',
              },
            ].map((s) => (
              <div key={s.num} className="reveal">
                <div className="num-display font-medium text-[clamp(3rem,5vw,4.5rem)] leading-none text-ink-700">{s.num}</div>
                <h3 className="mt-8 font-display text-xl font-medium text-white">{s.title}</h3>
                <p className="mt-4 text-[15px] text-ink-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEGEVENS */}
      <section className="bg-ink-950 py-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow">Bedrijfsgegevens</div>
              <h2 className="mt-8 font-display text-3xl lg:text-4xl font-medium tracking-[-0.03em] text-white">
                JDG Maatwerk Interieur
              </h2>
              <p className="mt-6 text-ink-400 leading-relaxed max-w-md">
                Meubelmakerij uit Terheijden. Eigen ontwerp, eigen productie. Inmeten en plaatsing op locatie, door heel Nederland.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 rounded-3xl border border-ink-800 bg-ink-900 p-10">
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">Adres</dt>
                  <dd className="mt-2 flex items-start gap-2 text-white">
                    <MapPin className="h-4 w-4 mt-1 text-jdg-400" />
                    <span>{business.address.street}<br/>{business.address.postalCode} {business.address.city}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">KvK</dt>
                  <dd className="mt-2 font-display text-lg font-medium text-white">{business.kvk}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">Telefoon / WhatsApp</dt>
                  <dd className="mt-2 font-display text-lg font-medium text-white">{business.phone}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-400">E-mail</dt>
                  <dd className="mt-2 break-words text-white">{business.email}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
