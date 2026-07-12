import Link from 'next/link'
import { ArrowLeft, Home, Phone } from 'lucide-react'
import { business } from '@/content/business'

export default function NotFound() {
  return (
    <section className="container-x py-24 lg:py-32 text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-7xl font-bold text-accent-500">404</p>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Deze pagina bestaat niet (meer)</h1>
        <p className="mt-4 text-lg text-primary-700">
          De link is mogelijk verouderd of er staat een typefout in het adres. Geen nood. Alles wat je zoekt vind je via de homepage of door even te WhatsAppen.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home className="h-4 w-4" /> Naar de homepage</Link>
          <a href={`tel:${business.phoneE164}`} className="btn-secondary"><Phone className="h-4 w-4" /> {business.phone}</a>
        </div>
        <Link href="/diensten" className="mt-6 inline-flex items-center gap-1 text-sm text-accent-600 hover:gap-2 transition-all">
          <ArrowLeft className="h-4 w-4" /> Bekijk onze diensten
        </Link>
      </div>
    </section>
  )
}
