'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="nl">
      <body style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '6rem 2rem', background: '#FAFAF7', color: '#1F2937' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Er ging iets fout</h1>
        <p style={{ marginTop: '1rem', color: '#6B7280' }}>Probeer het opnieuw, of bel 06 18 24 92 49.</p>
        <button onClick={reset} style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', background: '#C2632F', color: 'white', border: 0, borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
          Opnieuw proberen
        </button>
      </body>
    </html>
  )
}
