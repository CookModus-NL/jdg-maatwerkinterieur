import { NextResponse } from 'next/server'

/**
 * Korte reviewlink: jdg-maatwerkinterieur.nl/review
 *
 * Stuurt door naar het schrijf-een-review-venster van het Google-bedrijfsprofiel
 * (cid 510288199378998363 / feature-id 0x47c69f50e002ad8f:0x714e869e90f145b).
 * Het `,3,,,,`-achtervoegsel in de #lrd-fragment opent direct het schrijfvenster
 * in plaats van de reviewlijst — geverifieerd op 27-08-2026.
 *
 * Bestaat zodat Jonas iets kort en uitspreekbaars kan delen (kaartje, WhatsApp,
 * mailhandtekening) in plaats van een Google-URL van 120 tekens.
 */
const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=JDG+Maatwerk+Interieur+Terheijden&hl=nl#lrd=0x47c69f50e002ad8f:0x714e869e90f145b,3,,,,'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.redirect(GOOGLE_REVIEW_URL, 307)
}
