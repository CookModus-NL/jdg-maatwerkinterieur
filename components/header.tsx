'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { business } from '@/content/business'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { href: '/diensten', label: 'Diensten' },
    { href: '/projecten', label: 'Projecten' },
    { href: '/over-jonas', label: 'Over Jonas' },
    { href: '/werkgebied', label: 'Werkgebied' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-ink-900/8'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="JDG Maatwerk Interieur — home">
            <Logo variant="lockup" tone="ink" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-ink-800 hover:text-jdg-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hoi Jonas, ik heb een vraag over maatwerk interieur.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp Jonas
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink-900"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-ink-900/10">
          <div className="container-x py-8 flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hoi Jonas, ik heb een vraag over maatwerk interieur.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary justify-center mt-4"
            >
              WhatsApp Jonas
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
