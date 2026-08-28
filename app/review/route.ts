import { NextResponse } from 'next/server'

/**
 * Korte reviewlink: jdg-maatwerkinterieur.nl/review
 *
 * Stuurt door naar het schrijf-een-review-venster van het Google-bedrijfsprofiel.
 * Drie delen doen het werk:
 *   q=        de merknaam moet het kennispaneel oproepen; zonder treffer geen venster
 *             (getest: met q=maatwerk en wel ludocid komt er geen paneel)
 *   ludocid=  510288199378998363, pint WELK paneel — nodig omdat dezelfde SERP ook
 *             "JD Maatwerk" en een Belgische "JDG interieur" bevat
 *   #lrd=...,3  opent het schrijfvenster in plaats van de reviewlijst
 * Geverifieerd in de browser op 28-08-2026: venster met sterren en tekstveld.
 *
 * Bestaat zodat Jonas iets kort en uitspreekbaars kan delen (kaartje, WhatsApp,
 * mailhandtekening) in plaats van een Google-URL van 120 tekens.
 */
const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?hl=nl-NL&gl=nl&q=JDG+Maatwerk+Interieur+Terheijden&ludocid=510288199378998363#lrd=0x47c69f50e002ad8f:0x714e869e90f145b,3'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.redirect(GOOGLE_REVIEW_URL, 307)
}
