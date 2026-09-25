#!/usr/bin/env node
// meting-prijsuitleg.mjs: WAT LEGGEN DE PAGINA'S DIE GOOGLE ZELF GEBRUIKT WERKELIJK UIT
// over de vraag "waarom is maatwerk duurder dan standaard"?
//
// Aanleiding: interventiecontract 5d2d15ad (jdg, vraagdekking 6b5dffbc "Waarom is een kast of
// keuken op maat zo veel duurder dan een standaardkast?"). De vraag heeft in Google Ads GEEN
// meetbaar maandvolume, maar leeft wel: "waarom zijn maatkasten zo duur" is op 25-09-2026 de
// enige Google-zoeksuggestie op de stam "waarom zijn maatkasten", en de vraag staat als
// People-Also-Ask op de commerciele zoekvraag "kledingkast op maat kosten".
//
// HET PANEL is niet door ons gekozen maar door Google: de zes ANTWOORDPAGINA'S die Google op
// 25-09-2026 zelf gebruikt. Vijf daarvan zijn bron van het AI Overview op "waarom zijn
// maatkasten zo duur" (mobiel, Nederland, nl, via DataForSEO); de zesde is het enige organische
// resultaat in de top 12 van diezelfde SERP dat werkelijk over kasten op maat gaat.
// De twee forumdraden uit dezelfde AI-Overview-bronnenlijst (reddit.com, gathering.tweakers.net)
// staan er bewust NIET in: een discussiedraad is geen antwoordpagina.
//
// DRIE DINGEN WORDEN GETELD, elk met de volledige zoeklijst in dit bestand, zodat een lezer de
// telling kan herhalen en kan zien waar de grens ligt:
//   1. VASTE_BASIS   zegt de pagina ergens dat een deel van de kosten PER PROJECT terugkomt en
//                    niet meegroeit met de maat van het meubel?
//   2. WANNEER_NIET  noemt de pagina een situatie waarin maatwerk NIET de verstandige keuze is?
//   3. EXTERNE_LINK  staat er in de lopende tekst een link naar een ander domein, of een norm-,
//                    wets- of datumverwijzing? LET OP: dit is een ruwe waarneming en GEEN
//                    bronoordeel. Een cookieverklaring en een partnerlink tellen hier mee.
//                    Daarom staat dit getal wel in de uitslag maar niet in de antwoordeenheid.
//
// WAT DEZE METING NIET IS. Het is een woordtelling over de gerenderde tekst, geen leesoordeel.
// Hij telt aan de LAGE kant: een pagina die het idee in eigen woorden beschrijft zonder een van
// de gezochte formuleringen te gebruiken, telt hier niet mee. Hij zegt niets over de kwaliteit
// van die pagina's en niets over Google zelf; alleen over wat er op 25-09-2026 op stond.
//
// Draaien: node scripts/meting-prijsuitleg.mjs   (schrijft scripts/meting-prijsuitleg.json)

import { writeFileSync } from 'node:fs'

const PANEL = [
  { host: 'steigerhoutenmeubelshop.nl', url: 'https://www.steigerhoutenmeubelshop.nl/kennisbank/waarom-zijn-op-maat-gemaakte-kasten-zo-duur/', herkomst: 'bron van het AI Overview' },
  { host: 'ericvonk.nl',                url: 'https://www.ericvonk.nl/wat-kost-een-kast-op-maat.html',                                            herkomst: 'bron van het AI Overview' },
  { host: 'hamerstilburg.nl',           url: 'https://hamerstilburg.nl/is-het-laten-maken-van-een-kast-op-maat-duur/',                            herkomst: 'bron van het AI Overview' },
  { host: 'maatkasten.be',              url: 'https://www.maatkasten.be/prijs/',                                                                  herkomst: 'bron van het AI Overview' },
  { host: 'invormboekel.nl',            url: 'https://www.invormboekel.nl/blog/wat-kost-een-inbouwkast-echt-maatwerk-versus-standaard',           herkomst: 'bron van het AI Overview' },
  { host: 'bouwenwonen.net',            url: 'https://www.bouwenwonen.net/artikel/Waarom-een-kledingkasten-op-maat-voelt-als-luxe/52468',          herkomst: 'organisch resultaat 4 op "waarom zijn maatkasten zo duur"' },
]

const VASTE_BASIS = [
  /ongeacht de (afmeting|maat|grootte|omvang)/i,
  /onafhankelijk van de (maat|grootte|afmeting|omvang)/i,
  /vaste kosten/i,
  /vast bedrag per (project|opdracht|meubel)/i,
  /(even ?veel|net zo ?veel|dezelfde hoeveelheid) tijd/i,
  /(hetzelfde|gelijk) aantal uren/i,
  /schaalt niet/i,
  /groeit niet mee/i,
  /opstartkosten/i,
  /omsteltijd/i,
  /instelkosten/i,
  /per (project|opdracht) (hetzelfde|gelijk|dezelfde)/i,
]
const WANNEER_NIET = [
  /wanneer (is )?maatwerk niet/i,
  /(geen|niet altijd) maatwerk nodig/i,
  /beter af met een standaard/i,
  /dan is een standaard(kast|keuken|oplossing|meubel)/i,
  /kies dan (voor )?(een )?standaard/i,
  /(raden|raad) (wij |we |ik )?(het )?af/i,
  /niet verstandig/i,
  /overbodig/i,
  /heeft (dan )?geen zin/i,
]
const BRONWOORD = /\bNEN[- ]?EN[- ]?\d|\bNEN \d|artikel \d+|\bwetsartikel\b|\bbron:\s|\bgemeten op \d|\bgelezen op \d/i

const EIGEN_OF_NEUTRAAL = /(facebook|instagram|linkedin|twitter|x\.com|pinterest|youtube|whatsapp|googletagmanager|google-analytics|gstatic|googleapis|cookiebot|cdn|jsdelivr|schema\.org|w3\.org|gmpg\.org|wp\.me|wordpress\.org)/i

const registreerbaar = (h) => h.replace(/^www\./, '').split('.').slice(-2).join('.')

function tekstUit(html) {
  let s = html
  s = s.replace(/<(script|style|noscript|svg|nav|footer|header|aside)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
  const m = s.match(/<main\b[\s\S]*?<\/main>|<article\b[\s\S]*?<\/article>/i)
  if (m) s = m[0]
  s = s.replace(/<[^>]+>/g, ' ')
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#?\w+;/g, ' ')
  return s.replace(/\s+/g, ' ').trim()
}

// Alleen links BINNEN de lopende tekst tellen. Scant deze functie de hele pagina, dan telt een
// cookiebanner of een partnerlink in de voet mee als "bron", en dat is hij niet.
function externeLinks(html, eigenHost) {
  const m = html.match(/<main\b[\s\S]*?<\/main>|<article\b[\s\S]*?<\/article>/i)
  if (m) html = m[0]
  html = html.replace(/<(script|style|noscript|svg|nav|footer|header|aside)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
  const eigen = registreerbaar(eigenHost)
  const uit = new Set()
  for (const m of html.matchAll(/href\s*=\s*["'](https?:\/\/[^"']+)["']/gi)) {
    let h
    try { h = new URL(m[1]).hostname } catch { continue }
    if (registreerbaar(h) === eigen) continue
    if (EIGEN_OF_NEUTRAAL.test(h)) continue
    uit.add(registreerbaar(h))
  }
  return [...uit]
}

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36'

const uitslag = []
for (const p of PANEL) {
  const rij = { ...p, http: null, tekens: 0, vaste_basis: null, wanneer_niet: null, externe_link: null, treffers: {}, externe_domeinen: [] }
  try {
    const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 25000)
    const r = await fetch(p.url, { headers: { 'user-agent': UA, 'accept-language': 'nl-NL,nl;q=0.9' }, signal: ctrl.signal, redirect: 'follow' })
    clearTimeout(t)
    rij.http = r.status
    if (r.ok) {
      const html = await r.text()
      const tekst = tekstUit(html)
      rij.tekens = tekst.length
      const raak = (lijst) => lijst.map((re) => (re.test(tekst) ? String(re) : null)).filter(Boolean)
      const a = raak(VASTE_BASIS), b = raak(WANNEER_NIET)
      rij.treffers = { vaste_basis: a, wanneer_niet: b, bronwoord: BRONWOORD.test(tekst) ? String(tekst.match(BRONWOORD)?.[0]) : null }
      rij.externe_domeinen = externeLinks(html, new URL(p.url).hostname)
      rij.vaste_basis = a.length > 0
      rij.wanneer_niet = b.length > 0
      rij.externe_link = Boolean(rij.treffers.bronwoord) || rij.externe_domeinen.length > 0
    }
  } catch (e) {
    rij.http = `fout: ${e.name}`
  }
  uitslag.push(rij)
}

const gelezen = uitslag.filter((r) => r.http === 200)
const telling = {
  gemeten_op: new Date().toISOString().slice(0, 10),
  panel: PANEL.length,
  gelezen: gelezen.length,
  vaste_basis: gelezen.filter((r) => r.vaste_basis).length,
  wanneer_niet: gelezen.filter((r) => r.wanneer_niet).length,
  externe_link_in_tekst: gelezen.filter((r) => r.externe_link).length,
}
writeFileSync(new URL('./meting-prijsuitleg.json', import.meta.url), JSON.stringify({ telling, uitslag }, null, 1) + '\n')
console.log(JSON.stringify(telling, null, 1))
for (const r of uitslag) console.log(String(r.http).padEnd(6), r.host.padEnd(30), 'vaste_basis', String(r.vaste_basis).padEnd(5), 'wanneer_niet', String(r.wanneer_niet).padEnd(5), 'externe_link', String(r.externe_link).padEnd(5), r.externe_domeinen.slice(0, 4).join(','))
