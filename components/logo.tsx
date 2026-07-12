/**
 * JDG Logo — het originele cirkel-mark blijft leidend.
 * De vormentaal van dit mark (cirkel, witte silhouetten van meubels op groen)
 * wordt door het hele design doorvertaald: ronde radii, pill-buttons, ronde
 * badges. Geen andere monogram varianten meer.
 */

import Image from 'next/image'

type Variant = 'lockup' | 'mark' | 'stacked' | 'text'
type Tone = 'ink' | 'paper'

type LogoProps = {
  className?: string
  variant?: Variant
  tone?: Tone
  size?: number
}

const wordColors: Record<Tone, { word: string; sub: string }> = {
  ink:   { word: 'var(--color-ink-900)', sub: 'var(--color-ink-500)' },
  paper: { word: 'var(--color-paper)',   sub: 'var(--color-ink-300)' },
}

/** Alleen het cirkel-mark. */
export function LogoMark({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-label="JDG mark"
    >
      <Image
        src="/logo/jdg-mark.png"
        alt="JDG Maatwerk Interieur"
        width={size}
        height={size}
        priority
        className="w-full h-full object-contain"
      />
    </span>
  )
}

export function Logo({ className = '', variant = 'lockup', tone = 'ink', size }: LogoProps) {
  const c = wordColors[tone]

  if (variant === 'mark') {
    return <LogoMark size={size ?? 44} className={className} />
  }

  if (variant === 'text') {
    return (
      <span
        className={`inline-flex font-display font-semibold tracking-[-0.02em] ${className}`}
        style={{ color: c.word, fontSize: (size ?? 22) + 'px' }}
      >
        JDG
      </span>
    )
  }

  if (variant === 'stacked') {
    return (
      <span className={`inline-flex flex-col items-start gap-4 ${className}`}>
        <LogoMark size={size ?? 68} />
        <span className="inline-flex flex-col leading-tight gap-1">
          <span
            className="font-display font-semibold tracking-[-0.02em]"
            style={{ color: c.word, fontSize: '20px' }}
          >
            JDG
          </span>
          <span
            className="font-sans text-[10.5px] font-medium uppercase tracking-[0.3em]"
            style={{ color: c.sub }}
          >
            Maatwerk interieur
          </span>
        </span>
      </span>
    )
  }

  // lockup — default header
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <LogoMark size={size ?? 46} />
      <span className="inline-flex flex-col leading-tight">
        <span
          className="font-display font-semibold tracking-[-0.02em]"
          style={{ color: c.word, fontSize: '19px' }}
        >
          JDG
        </span>
        <span
          className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] mt-0.5"
          style={{ color: c.sub }}
        >
          Maatwerk interieur
        </span>
      </span>
    </span>
  )
}
