'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/projecten', label: 'Projecten' },
  { href: '/over-ons', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-500',
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-800/50'
          : 'bg-transparent'
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label={business.name}>
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-jdg-400/40 transition-all duration-500 group-hover:ring-jdg-400">
            <Image
              src={business.photos.logo}
              alt=""
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg italic font-normal text-white">JDG</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.28em] text-ink-300 uppercase font-mono">Maatwerk Interieur</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[13px] font-medium text-ink-300 transition-colors hover:text-white group py-2"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-px h-px scale-x-0 origin-left bg-jdg-400 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${business.phoneE164}`}
            className="text-[13px] font-medium text-ink-300 hover:text-white transition-colors tabular-nums mr-3"
          >
            {business.phone}
          </a>
          <a
            href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.general)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-medium text-ink-950 transition-all hover:bg-jdg-400 hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5 -ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 grid h-10 w-10 place-items-center rounded-full text-white hover:bg-ink-800"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden border-t border-ink-800 bg-ink-950 transition-all duration-500 overflow-hidden',
          open ? 'max-h-[520px]' : 'max-h-0'
        )}
      >
        <nav className="container-x py-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-2 py-4 border-b border-ink-800 font-display text-2xl font-medium text-white transition-colors hover:text-jdg-400"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight className="h-5 w-5 text-ink-400" />
            </Link>
          ))}
          <a
            href={`https://wa.me/${business.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-ink-950"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp · {business.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
