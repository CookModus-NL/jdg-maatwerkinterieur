import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'

export const metadata = {
  title: 'Contact',
  description: 'Neem contact op met JDG Maatwerk Interieur. WhatsApp gaat het snelst — binnen één à twee weken hoor je een eerste schets en indicatie.',
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
            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.94] tracking-[-0.02em] text-ink-950">
              Even <span className="text-jdg-700">overleggen?</span>
            </h1>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-ink-700">
              WhatsApp is het snelst. Bellen mag ook. Na een appje met foto's van de ruimte hoor je binnen één à twee weken een eerste schets en prijsindicatie.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-xl border border-ink-900/12 bg-paper-2 p-8">
              <span className="eyebrow">Direct</span>
              <div className="mt-6 space-y-3">
                <a
                  href={waHref('Hoi, ik heb interesse in maatwerk bij JDG. Kunnen we een gesprek inplannen?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp JDG</span>
                  <span className="tabular opacity-80">{business.phone}</span>
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn btn-outline w-full justify-between">
                  <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Bellen</span>
                  <span className="tabular">{business.phone}</span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 pt-3 text-[13.5px] text-ink-700 hover:text-jdg-700 transition-colors">
                  <Mail className="h-4 w-4" /> {business.email}
                </a>
                {business.social.instagram && (
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13.5px] text-ink-700 hover:text-jdg-700 transition-colors">
                    <Instagram className="h-4 w-4" /> @{business.social.instagramHandle}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-ink-900/12 p-6">
              <span className="eyebrow">Werkplaats</span>
              <div className="mt-4 flex items-start gap-3 text-[14.5px] text-ink-900">
                <MapPin className="h-4 w-4 mt-0.5 text-jdg-700 shrink-0" />
                <div>
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                  <div className="text-ink-500 mt-2 text-[12.5px]">Bezoek uitsluitend op afspraak.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
              <div>Werkgebied — heel Nederland, op verzoek daarbuiten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
