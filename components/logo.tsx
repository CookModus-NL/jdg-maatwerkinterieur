/**
 * JDG monogram — visueel systeem.
 *
 * Geometrische opbouw waar J, D en G binnen één modulair raster passen.
 * De letters delen dezelfde strokewidth en radiuslogica.
 *
 * Varianten:
 *  - mark:    alleen het monogram (voor favicons, buttons, watermark)
 *  - lockup:  monogram + wordmark op één regel (header)
 *  - stacked: monogram boven wordmark (footer, print)
 *  - text:    alleen de wordmark (voor kleine ruimtes)
 */

type Variant = 'mark' | 'lockup' | 'stacked' | 'text'
type Tone = 'ink' | 'bone' | 'jdg'

type LogoProps = {
  className?: string
  variant?: Variant
  tone?: Tone
}

const tones: Record<Tone, { mark: string; word: string; sub: string }> = {
  ink:  { mark: 'var(--color-ink-900)', word: 'var(--color-ink-900)', sub: 'var(--color-ink-500)' },
  bone: { mark: 'var(--color-bone-50)', word: 'var(--color-bone-50)', sub: 'var(--color-bone-300)' },
  jdg:  { mark: 'var(--color-jdg-500)', word: 'var(--color-ink-900)', sub: 'var(--color-jdg-500)' },
}

/**
 * Het monogram zelf — J D G geïntegreerd in één geometrische mark.
 *
 * Raster: 60 breed × 40 hoog met 4-eenheden strokewidth.
 * J heeft een curve rechtsonder. D is een gesloten hangende halve cirkel.
 * G eindigt in een horizontale tong die visueel de basislijn maakt.
 */
export function LogoMark({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="JDG"
      fill={color}
    >
      {/* J — verticale balk met curve onder */}
      <path d="M0 0 h4 v28 a8 8 0 0 1 -8 8 h-4 v-4 h4 a4 4 0 0 0 4 -4 z" transform="translate(4,0)" />

      {/* D — verticale balk + halve cirkel */}
      <path d="M20 0 h4 v40 h-4 z" />
      <path d="M24 0 h4 a12 20 0 0 1 0 40 h-4 v-4 h4 a8 16 0 0 0 0 -32 h-4 z" />

      {/* G — cirkelvorm met horizontale tong */}
      <path d="M56 20 v16 h-4 v-12 h-8 v-4 z" />
      <path d="M56 0 a20 20 0 0 0 0 40 v-4 a16 16 0 1 1 0 -32 v-4 z" transform="translate(-8,0)" />
    </svg>
  )
}

/**
 * Compacte wordmark — jdg lowercase in Fraunces, met bewuste tracking.
 * Onderdeel van elke lockup.
 */
function Wordmark({ color }: { color: string }) {
  return (
    <span
      className="font-display font-medium tracking-[-0.03em] leading-none"
      style={{ color, fontSize: '22px' }}
    >
      jdg
    </span>
  )
}

export function Logo({ className = '', variant = 'lockup', tone = 'ink' }: LogoProps) {
  const t = tones[tone]

  if (variant === 'mark') {
    return (
      <span className={`inline-flex ${className}`} aria-label="JDG">
        <LogoMark className="h-6 w-auto" color={t.mark} />
      </span>
    )
  }

  if (variant === 'text') {
    return (
      <span
        className={`inline-flex items-baseline gap-1 font-display font-medium tracking-[-0.03em] leading-none ${className}`}
        style={{ color: t.word, fontSize: '20px' }}
      >
        jdg
      </span>
    )
  }

  if (variant === 'stacked') {
    return (
      <span className={`inline-flex flex-col items-start gap-3 ${className}`}>
        <LogoMark className="h-10 w-auto" color={t.mark} />
        <span
          className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]"
          style={{ color: t.sub }}
        >
          Maatwerk interieur
        </span>
      </span>
    )
  }

  // lockup — default header
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-7 w-auto" color={t.mark} />
      <span className="inline-flex flex-col leading-none gap-1">
        <Wordmark color={t.word} />
        <span
          className="font-sans text-[9.5px] font-medium uppercase tracking-[0.28em]"
          style={{ color: t.sub }}
        >
          Maatwerk interieur
        </span>
      </span>
    </span>
  )
}
