import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Inline verwijzingen in lopende tekst. Toegevoegd 10-09-2026.
 *
 * De artikelteksten in content/blog.ts zijn platte strings. Een verwijzing naar een andere
 * pagina van deze site kon daardoor alleen ONDER het artikel staan, als losse lijst. Voor
 * een antwoordeenheid is dat te laat: zo'n stuk wordt niet als pagina overgenomen maar als
 * passage, en een passage die uit zijn pagina wordt geknipt neemt de lijst eronder niet mee.
 * De vindplaats moet dus in de zin zelf staan.
 *
 * Daarom mag een body-string, een bullet of een intro sinds vandaag anker-markup dragen:
 *
 *   'Dat staat in <a href="/algemene-voorwaarden">artikel 3 van de voorwaarden</a>.'
 *
 * Voorwaarden aan die markup, bewust streng:
 *   - alleen interne paden (het pad begint met /), geen externe links, geen protocol;
 *   - er wordt geen HTML geïnjecteerd: de parser levert React-elementen en gebruikt
 *     nadrukkelijk GEEN dangerouslySetInnerHTML;
 *   - een tekst zonder anker-markup gaat onveranderd door, dus bestaande artikelen,
 *     projecten en materiaalpagina's veranderen niet.
 *
 * De linkstijl is dezelfde die de site al gebruikt voor verwijzingen in leestekst
 * (/werkwijze, /veelgestelde-vragen, de verwijzingenlijst onder een artikel): onderstreept
 * in ink-300, tekst in ink-900, hover in het merkgroen. Geen nieuwe waarde, geen nieuw token.
 */
const ANKER = '<a href="(\\/[^"]*)">([^<]+)<\\/a>'

const KLASSE =
  'text-ink-900 underline underline-offset-4 decoration-ink-300 hover:text-jdg-700 hover:decoration-jdg-700 transition-colors'

/** Tekst met anker-markup als React-inhoud, veilig te gebruiken binnen een <p> of <li>. */
export function tekstMetLinks(tekst: string): ReactNode {
  if (!tekst.includes('<a href="/')) return tekst
  const delen: ReactNode[] = []
  let rest = 0
  for (const m of tekst.matchAll(new RegExp(ANKER, 'g'))) {
    const i = m.index ?? 0
    if (i > rest) delen.push(tekst.slice(rest, i))
    delen.push(
      <Link key={`${m[1]}-${i}`} href={m[1]} className={KLASSE}>
        {m[2]}
      </Link>,
    )
    rest = i + m[0].length
  }
  if (rest < tekst.length) delen.push(tekst.slice(rest))
  return delen
}

/**
 * Dezelfde tekst zonder markup, alleen de linktekst. Voor plekken waar geen opmaak hoort:
 * JSON-LD, meta-omschrijvingen, alt-teksten en llms.txt.
 */
export function tekstZonderLinks(tekst: string): string {
  return tekst.replace(new RegExp(ANKER, 'g'), '$2')
}
