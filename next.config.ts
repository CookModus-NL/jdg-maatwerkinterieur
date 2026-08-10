import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
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
      // Oude project detail URLs (na photo gallery model) → algemene /projecten
      { source: '/projecten/:slug', destination: '/projecten', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/nieuws/:path*', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
