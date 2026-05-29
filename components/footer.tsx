import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight, Instagram } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 ink-grid opacity-30" />

      <div className="container-x pt-24 pb-12">
        {/* Big wordmark — editorial signature */}
        <div className="border-b border-ink-800 pb-16">
          <Link href="/contact" className="group block">
            <div className="text-[10px] uppercase tracking-[0.3em] text-jdg-400 mb-6">
              Klaar voor uw maatwerk?
            </div>
            <div className="font-display text-[clamp(2.5rem,9vw,8rem)] font-normal italic leading-[0.95] tracking-[-0.04em] text-white">
              een uniek<br/>
              <span className="text-jdg-400">interieur</span>
              <ArrowUpRight className="ml-2 inline-block h-12 w-12 lg:h-20 lg:w-20 align-baseline text-ink-400 group-hover:text-jdg-400 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-500" strokeWidth={1.25} />
            </div>
          </Link>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-12 pt-20">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-jdg-400/30">
                <Image src={business.photos.logo} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <span className="text-[14px] uppercase tracking-[0.12em] text-white font-medium">
                JDG <span className="text-ink-300 font-normal tracking-[0.10em]">Maatwerk Interieur</span>
              </span>
            </Link>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-400">
              Maatwerk met passie en precisie. Keukens, kledingkasten en tv-meubels — door Jonas ontworpen en vervaardigd vanuit Terheijden, geleverd in heel Nederland.
            </p>

            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a href={`tel:${business.phoneE164}`} className="group inline-flex items-center gap-2 text-white hover:text-jdg-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="tabular-nums font-medium">{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="group inline-flex items-center gap-2 text-ink-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-ink-300 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                @{business.social.instagramHandle}
              </a>
              <div className="inline-flex items-start gap-2 text-ink-400 mt-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-jdg-400" />
                <span>{business.address.street}<br/>{business.address.postalCode} {business.address.city}</span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-jdg-400">Diensten</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten/${s.slug}`} className="text-ink-300 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-jdg-400">Site</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              {[
                ['/projecten', 'Projecten'],
                ['/over-ons', 'Over Jonas'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-ink-300 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Juridisch */}
          <div className="col-span-12 lg:col-span-2">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-jdg-400">Juridisch</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              <li><Link href="/privacy" className="text-ink-300 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-ink-300 hover:text-white transition-colors">Algemene voorwaarden</Link></li>
            </ul>
            <div className="mt-8 space-y-1 text-[11px] text-ink-500">
              <div>KvK {business.kvk}</div>
              <div>SBI 1623 / 4332</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-ink-800">
        <div className="container-x py-7 flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-500 md:flex-row md:justify-between md:items-center">
          <div>© {new Date().getFullYear()} {business.legalName} · Alle rechten voorbehouden</div>
          <div className="flex items-center gap-3">
            <span>Vakwerk vanuit Terheijden</span>
            <span className="h-1 w-1 rounded-full bg-jdg-400" />
            <span>Maatwerk voor heel Nederland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
