import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'

export const metadata = {
  title: 'Contact',
  description: 'Neem contact op met Jonas van JDG Maatwerk Interieur. WhatsApp gaat het snelst.',
  alternates: { canonical: `${business.url}/contact` },
}

export default function Contact() {
  const waHref = (msg: string) =>
    `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`
  return (
    <section className="pt-40 pb-32">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-6">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.92] tracking-[-0.03em] text-ink-900">
              Even <span className="italic font-light text-jdg-600">overleggen?</span>
            </h1>
            <p className="mt-8 text-[17px] leading-[1.75] text-ink-700 max-w-md">
              WhatsApp is het snelst. Bellen mag ook. Ik neem serieuze projecten aan en kom graag vrijblijvend bij je langs voor een eerste gesprek.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="border-t border-ink-900/15 pt-6">
              <span className="eyebrow">Direct</span>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={waHref('Hoi Jonas, ik heb interesse in maatwerk. Kunnen we een gesprek inplannen?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary justify-between"
                >
                  <span>WhatsApp Jonas</span>
                  <span className="tabular opacity-70">{business.phone}</span>
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn btn-outline justify-between">
                  <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Bellen</span>
                  <span className="tabular">{business.phone}</span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-[13.5px] text-ink-700 hover:text-jdg-600 transition-colors pt-3">
                  <Mail className="h-4 w-4" /> {business.email}
                </a>
                {business.social.instagram && (
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13.5px] text-ink-700 hover:text-jdg-600 transition-colors">
                    <Instagram className="h-4 w-4" /> @{business.social.instagramHandle}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-10 border-t border-ink-900/15 pt-6">
              <span className="eyebrow">Atelier</span>
              <div className="mt-4 flex items-start gap-3 text-[14.5px] text-ink-800">
                <MapPin className="h-4 w-4 mt-0.5 text-jdg-600 shrink-0" />
                <div>
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-ink-900/15 pt-6 space-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
              <div>KvK {business.kvk}</div>
              <div>BTW {business.btw}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
