import Link from 'next/link'
import { ArrowUpRight, Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { Logo, LogoMark } from './logo'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'

export function Footer() {
  return (
    <footer className="bg-ink-950 text-paper relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 -left-20 opacity-[0.05]">
        <LogoMark size={520} />
      </div>

      <div className="container-x pt-24 pb-12 relative">
        {/* Grote CTA */}
        <div className="pb-20 border-b border-ink-800">
          <Link href="/contact" className="group block">
            <span className="eyebrow !text-jdg-300 mb-6">Een idee, een schets, een gesprek</span>
            <div className="mt-6 font-display text-[clamp(2.75rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-paper">
              Laten we
              <br />
              iets moois
              <br />
              <span className="text-jdg-400">bouwen</span>
              <ArrowUpRight
                className="ml-3 inline-block h-16 w-16 lg:h-24 lg:w-24 align-baseline text-ink-500 group-hover:text-jdg-300 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-500"
                strokeWidth={1}
              />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-y-14 lg:gap-12 pt-16">
          <div className="col-span-12 lg:col-span-4">
            <Logo variant="stacked" tone="paper" />
            <p className="mt-8 max-w-md text-[14.5px] leading-relaxed text-ink-300">
              Jonas ontwerpt en maakt interieur op maat vanuit zijn atelier in Terheijden. Één vakman, één aanspreekpunt, resultaat dat blijft.
            </p>

            <div className="mt-10 flex flex-col gap-3 text-[13.5px]">
              <a href={`tel:${business.phoneE164}`} className="inline-flex items-center gap-2 text-paper hover:text-jdg-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="tabular font-medium">{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 text-ink-300 hover:text-paper transition-colors">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              {business.social.instagram && (
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-300 hover:text-paper transition-colors">
                  <Instagram className="h-4 w-4" />
                  @{business.social.instagramHandle}
                </a>
              )}
              <div className="mt-2 flex items-start gap-2 text-ink-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-jdg-300" />
                <span>{business.address.street}<br />{business.address.postalCode} {business.address.city}</span>
              </div>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h3 className="eyebrow !text-jdg-300">Diensten</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten/${s.slug}`} className="text-ink-200 hover:text-paper transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h3 className="eyebrow !text-jdg-300">Werkgebied</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              {cities.slice(0, 10).map((c) => (
                <li key={c.slug}>
                  <Link href={`/werkgebied/${c.slug}`} className="text-ink-200 hover:text-paper transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/werkgebied"
              className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-jdg-300 hover:text-jdg-200 transition-colors"
            >
              Volledig werkgebied
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <h3 className="eyebrow !text-jdg-300">Site</h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              <li><Link href="/over-jonas" className="text-ink-200 hover:text-paper transition-colors">Over Jonas</Link></li>
              <li><Link href="/projecten" className="text-ink-200 hover:text-paper transition-colors">Projecten</Link></li>
              <li><Link href="/contact" className="text-ink-200 hover:text-paper transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-ink-200 hover:text-paper transition-colors">Privacy</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-ink-200 hover:text-paper transition-colors">Voorwaarden</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800 relative">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-500 font-mono">
          <div>© {new Date().getFullYear()} {business.legalName}</div>
          <div className="flex items-center gap-4">
            <span>KvK {business.kvk}</span>
            <span className="opacity-40">·</span>
            <span>Terheijden — heel Nederland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
