import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Beacon from '@/components/Beacon'
import { localBusinessSchema, organizationSchema, websiteSchema, founderPersonSchema, siteNavigationSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/dm-sans'
import '@fontsource/dm-serif-display'
import './globals.css'

const TITLE = 'Meubelmaker en interieurbouwer Terheijden, JDG Maatwerk Interieur'
const DESC =
  'JDG is meubelmaker en interieurbouwer in Terheijden. Keukens, kledingkasten, inloopkasten, tv-meubels en badkamermeubels op maat: ontworpen, gebouwd in de eigen werkplaats en zelf geplaatst. Werkgebied heel Nederland.'

export const viewport: Viewport = { themeColor: '#100e08' }

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: TITLE, template: '%s, JDG Maatwerk Interieur' },
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: TITLE,
    description: DESC,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
  // GEEN alternates.canonical hier. Stond hier tot 02-09-2026 en werd door Next
  // geërfd door iedere pagina zonder eigen canonical: /projecten/<slug> en /privacy
  // wezen daardoor naar de homepage en vroegen Google zichzelf te negeren.
  // De homepage zet zijn eigen canonical in app/page.tsx.
  category: 'business',
  other: {
    'geo.region': 'NL-NB',
    'geo.placename': 'Terheijden',
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,
    'DC.language': 'nl',
    'DC.publisher': business.name,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-NL">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema(), organizationSchema(), websiteSchema(), founderPersonSchema(), ...siteNavigationSchema()]) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Beacon />
        <SpeedInsights />
      </body>
    </html>
  )
}
