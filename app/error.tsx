'use client'

import { useEffect } from 'react'
import { RefreshCw, Phone, Home } from 'lucide-react'
import Link from 'next/link'
import { business } from '@/content/business'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Logging — Vercel pakt console errors automatisch op via Vercel Logs
    console.error('Page error:', error)
  }, [error])

  return (
    <section className="container-x py-24 lg:py-32 text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-7xl font-bold text-accent-500">!</p>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Er ging iets mis</h1>
        <p className="mt-4 text-lg text-primary-700">
          Excuses. De pagina kon niet worden geladen. Probeer het opnieuw of WhatsApp me direct.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-primary-400">Foutcode: {error.digest}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn-primary"><RefreshCw className="h-4 w-4" /> Probeer opnieuw</button>
          <Link href="/" className="btn-secondary"><Home className="h-4 w-4" /> Homepage</Link>
          <a href={`tel:${business.phoneE164}`} className="btn-secondary"><Phone className="h-4 w-4" /> {business.phone}</a>
        </div>
      </div>
    </section>
  )
}
