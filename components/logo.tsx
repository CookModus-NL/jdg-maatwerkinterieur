/**
 * JDG logo — cirkel-mark blijft leidend, wordmark in DM Serif Display.
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
  ink:   { word: 'var(--color-ink-950)', word2: 'var(--color-ink-500)', sub: 'var(--color-ink-500)' } as any,
  paper: { word: 'var(--color-paper)',   sub: 'var(--color-ink-300)' } as any,
}

export function LogoMark({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-label="JDG Maatwerk Interieur mark"
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

  if (variant === 'mark') return <LogoMark size={size ?? 44} className={className} />

  if (variant === 'text') {
    return (
      <span
        className={`font-display leading-none ${className}`}
        style={{ color: c.word, fontSize: (size ?? 24) + 'px' }}
      >
        JDG
      </span>
    )
  }

  if (variant === 'stacked') {
    return (
      <span className={`inline-flex flex-col items-start gap-3 ${className}`}>
        <LogoMark size={size ?? 60} />
        <span className="inline-flex flex-col leading-none gap-1.5">
          <span
            className="font-display leading-none"
            style={{ color: c.word, fontSize: '26px' }}
          >
            JDG
          </span>
          <span
            className="font-mono uppercase tracking-[0.24em]"
            style={{ color: c.sub, fontSize: '10px' }}
          >
            Maatwerk Interieur
          </span>
        </span>
      </span>
    )
  }

  // lockup — header default
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={size ?? 42} />
      <span className="inline-flex flex-col leading-none">
        <span
          className="font-display"
          style={{ color: c.word, fontSize: '22px', lineHeight: 1 }}
        >
          JDG
        </span>
        <span
          className="font-mono uppercase tracking-[0.24em] mt-1.5"
          style={{ color: c.sub, fontSize: '9.5px' }}
        >
          Maatwerk Interieur
        </span>
      </span>
    </span>
  )
}
