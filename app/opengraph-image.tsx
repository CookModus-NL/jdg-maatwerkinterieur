import { ImageResponse } from 'next/og'
import { business } from '@/content/business'

export const runtime = 'edge'
export const alt = 'JDG Maatwerk Interieur · meubels op maat door Jonas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#08090A',
          padding: '88px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3FB272 0%, #1D6539 100%)',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            J
          </div>
          <div style={{ display: 'flex', color: '#FFFFFF', fontSize: '20px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            JDG&nbsp;<span style={{ display: 'flex', color: '#9CA0A6', fontWeight: 400 }}>Maatwerk Interieur</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', color: '#FFFFFF', fontSize: '92px', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
            <div style={{ display: 'flex' }}>een uniek interieur,</div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#3FB272', fontStyle: 'italic', fontWeight: 400 }}>volledig op maat</span>
              <span>&nbsp;gemaakt.</span>
            </div>
          </div>
          <div style={{ display: 'flex', color: '#9CA0A6', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.01em' }}>
            Keukens · Kledingkasten · TV-meubels · Door Jonas, vanuit Terheijden voor heel Nederland
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2A2D32', paddingTop: '32px' }}>
          <div style={{ display: 'flex', color: '#FFFFFF', fontSize: '22px', fontWeight: 500 }}>
            jdg-maatwerkinterieur.nl
          </div>
          <div style={{ display: 'flex', color: '#3FB272', fontSize: '22px', fontWeight: 500, letterSpacing: '0.04em' }}>
            {business.phone}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
