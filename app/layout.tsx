import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { localBusinessSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/dm-sans'
import '@fontsource/dm-serif-display'
import './globals.css'

const TITLE = 'JDG Maatwerk Interieur — Keukens, kasten en meubels op maat'
const DESC =
  'JDG Maatwerk Interieur ontwerpt en maakt keukens, kledingkasten, tv-meubels en overig maatwerk op maat. Werkplaats Terheijden — geleverd door heel Nederland en op verzoek daarbuiten.'

export const viewport: Viewport = { themeColor: '#100e08' }

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: TITLE, template: '%s — JDG Maatwerk Interieur' },
  description: DESC,
  keywords: [
    'maatwerk interieur',
    'maatwerk interieur Nederland',
    'keuken op maat',
    'keuken op maat Nederland',
    'kledingkast op maat',
    'inloopkast op maat',
    'tv meubel op maat',
    'boekenkast op maat',
    'badkamermeubel op maat',
    'maatwerk keuken Terheijden',
    'interieurbouwer Breda',
    'meubelmaker West-Brabant',
    'meubelmaker Noord-Brabant',
    'interieurbouwer op maat',
    'JDG', 'JDG Maatwerk', 'JDG Maatwerk Interieur',
  ],
  authors: [{ name: 'JDG Maatwerk Interieur' }],
  creator: business.name,
  publisher: business.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: TITLE,
    description: DESC,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
  alternates: { canonical: business.url },
  category: 'business',
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
