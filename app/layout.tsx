import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFloating } from '@/components/whatsapp-floating'
import { localBusinessSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces'
import './globals.css'

const HOME_TITLE = 'Maatwerk meubels door Jonas | JDG Maatwerk Interieur'
const HOME_DESC =
  'Maatwerk keukens, kledingkasten en tv-meubels — door Jonas ontworpen en vervaardigd vanuit Terheijden, geleverd in heel Nederland. Eigen ontwerp, eigen productie, 5 jaar garantie. Vrijblijvende offerte via WhatsApp.'

export const viewport: Viewport = {
  themeColor: '#08090A',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: HOME_TITLE,
    template: '%s | JDG Maatwerk Interieur',
  },
  description: HOME_DESC,
  keywords: [
    // Core
    'maatwerk interieur', 'maatwerk meubels', 'meubelmaker', 'interieurbouwer',
    // Type
    'keuken op maat', 'kledingkast op maat', 'inbouwkast op maat',
    'tv-meubel op maat', 'trapkast op maat', 'badkamermeubel op maat',
    // Locatie
    'maatwerk meubels Terheijden', 'meubelmaker Terheijden',
    'maatwerk meubels Drimmelen', 'maatwerk meubels Breda',
    'keuken op maat Breda', 'keuken op maat West-Brabant',
    'kledingkast op maat Tilburg', 'meubelmaker Noord-Brabant',
    'meubelmaker Nederland', 'maatwerk meubels heel Nederland',
    // Materiaal
    'deco legno keuken', 'keramieken werkblad', 'eikenhouten meubel op maat',
    'inbouwkast tot plafond', 'schuifdeurkast op maat',
    // Maker
    'Jonas JDG Maatwerk Interieur',
  ],
  authors: [{ name: 'Jonas · JDG Maatwerk Interieur' }],
  creator: business.name,
  publisher: business.name,
  applicationName: business.name,
  category: 'Interieurbouw',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: HOME_TITLE,
    description: HOME_DESC,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'JDG Maatwerk Interieur · maatwerk meubels door Jonas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: 'Maatwerk keukens, kasten en tv-meubels door Jonas — vanuit Terheijden voor heel Nederland.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    'geo.region': 'NL-NB',
    'geo.placename': 'Terheijden',
    'geo.position': '51.6727;4.7475',
    'ICBM': '51.6727, 4.7475',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col antialiased bg-ink-950 text-ink-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
