import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { localBusinessSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces'
import './globals.css'

const HOME_TITLE = 'JDG Maatwerk Interieur — Keukens, kasten en meubels op maat'
const HOME_DESC =
  'Maatwerk interieur door Jonas van JDG. Keukens, kledingkasten, inloopkasten, tv-meubels, boekenkasten en badkamermeubels op maat. Terheijden, werkgebied door heel Nederland.'

export const viewport: Viewport = {
  themeColor: '#0f0e0b',
}

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: HOME_TITLE,
    template: '%s — JDG Maatwerk Interieur',
  },
  description: HOME_DESC,
  keywords: [
    'maatwerk interieur',
    'keuken op maat',
    'kledingkast op maat',
    'inloopkast op maat',
    'tv meubel op maat',
    'boekenkast op maat',
    'badkamermeubel op maat',
    'maatwerk Terheijden',
    'interieurbouwer Breda',
    'meubelmaker West-Brabant',
    'JDG',
    'JDG maatwerk',
    'Jonas maatwerk',
  ],
  authors: [{ name: 'Jonas — JDG Maatwerk Interieur' }],
  creator: business.name,
  publisher: business.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: HOME_TITLE,
    description: HOME_DESC,
  },
  twitter: { card: 'summary_large_image', title: HOME_TITLE, description: HOME_DESC },
  alternates: { canonical: business.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-NL">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
