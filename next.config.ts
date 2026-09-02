import type { NextConfig } from 'next'
import { gesnoeideCombinaties } from './content/lokaal-rooster'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.jdg-maatwerkinterieur.nl' },
      { protocol: 'https', hostname: 'jdg-maatwerkinterieur.nl' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Oude WordPress-paden blokkeren (anti-spam, anti-scan)
      { source: '/wp-admin/:path*', destination: '/', permanent: false },
      { source: '/wp-login.php', destination: '/', permanent: false },
      { source: '/xmlrpc.php', destination: '/', permanent: false },
      // 02-09-2026: de twee regels hieronder stonden hier en sloopten stilletjes de
      // twee sterkste contentlagen van de site.
      //   - /projecten/:slug -> /projecten  gooide 14 projectpagina's met échte foto's weg,
      //     terwijl /projecten er wel naar linkte (14 interne links naar een 301).
      //   - /blog/:path*     -> /           gooide de hele kennislaag weg, inclusief
      //     "Wat kost een keuken op maat", terwijl die 4 URL's wél in sitemap.xml stonden.
      // Gemeten: de enige klik van de site in 23-31 aug kwam van een informatieve pagina
      // (/materialen/hpl-laminaat). Informatie werkt hier; die laag moet dus juist open.
      { source: '/nieuws/:path*', destination: '/blog', permanent: true },
      // 'Oosterhout Zuid' was dezelfde plaats als Oosterhout met een eigen slug:
      // zeven duplicaat-URL's (1 stadpagina + 6 dienst×stad) die alleen met
      // zichzelf konden concurreren. Samengevoegd.
      { source: '/werkgebied/oosterhout-zuid', destination: '/werkgebied/oosterhout', permanent: true },
      { source: '/diensten/:slug/oosterhout-zuid', destination: '/werkgebied/oosterhout', permanent: true },
      // Gesnoeide dienst×stad-combinaties: een echte 308 naar de stadpagina.
      // Afgeleid uit content/lokaal-rooster.ts, dus de lijst loopt automatisch
      // mee als er een combinatie bij komt of afvalt.
      ...gesnoeideCombinaties().map(({ van, naar }) => ({
        source: van,
        destination: naar,
        permanent: true,
      })),
      // Reviewlink: alles wat iemand redelijkerwijs intypt of voorleest komt uit bij /review
      { source: '/reviews', destination: '/review', permanent: true },
      { source: '/Review', destination: '/review', permanent: true },
      { source: '/Reviews', destination: '/review', permanent: true },
      { source: '/REVIEW', destination: '/review', permanent: true },
      { source: '/beoordeling', destination: '/review', permanent: true },
      { source: '/beoordelingen', destination: '/review', permanent: true },
    ]
  },
}

export default nextConfig
