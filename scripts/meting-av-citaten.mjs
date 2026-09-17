#!/usr/bin/env node
/**
 * meting-av-citaten.mjs — toetst elk woordelijk citaat uit de algemene voorwaarden
 * dat op deze site in lopende tekst staat, tegen twee onafhankelijke vindplaatsen:
 *   (1) de bron in deze repo: app/algemene-voorwaarden/page.tsx
 *   (2) de gerenderde productiepagina https://www.jdg-maatwerkinterieur.nl/algemene-voorwaarden
 *
 * Getoetst wordt niet alleen de LETTERLIJKE TEKST maar ook het ARTIKEL- en LIDNUMMER:
 * het script telt de <li>-elementen per artikel en eist dat het citaat op precies
 * het genoemde lid staat. Een parafrase met het juiste nummer zakt hier dus ook.
 *
 * Exit 1 zodra één citaat niet woordelijk op het genoemde artikel+lid wordt
 * teruggevonden, zodat de meting zelf de rem is.
 *
 * Aanleiding: criticus-REJECT op contract dag:2026-09-11:jdg:antwoordeenheid-nieuw:9109122e
 * (16-09-2026) — "geen enkel citaat, artikelnummer of lidnummer is terug te vinden in
 * het aangeleverde register". Dit script maakt die controle herhaalbaar.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const LIVE = 'https://www.jdg-maatwerkinterieur.nl/algemene-voorwaarden'
const BRON = 'app/algemene-voorwaarden/page.tsx'

/** De citaten zoals ze in lopende tekst op de site staan, met de plek waar ze staan. */
const CITATEN = [
  {
    artikel: 2, lid: 7,
    tekst: 'Alleen de werkzaamheden, materialen en leveringen die in de offerte of opdrachtbevestiging staan, zijn in de prijs inbegrepen.',
    gebruikt_in: 'content/blog.ts — keuken-op-maat-of-ikea-keuken (blok "wat kost het", FAQ "waarom staat er geen prijs")',
  },
  {
    artikel: 3, lid: 1,
    tekst: 'Wanneer JDG de maatvoering verzorgt, wordt deze zorgvuldig opgenomen op basis van de op dat moment aanwezige situatie.',
    gebruikt_in: 'content/blog.ts — keuken-op-maat-of-ikea-keuken (blok "een keuken zonder raster")',
  },
  {
    artikel: 3, lid: 2,
    tekst: 'Opdrachtgever meldt iedere wijziging aan muren, vloeren, plafonds, leidingen, aansluitpunten of andere relevante onderdelen die na het inmeten plaatsvindt.',
    gebruikt_in: 'content/blog.ts — keuken-op-maat-of-ikea-keuken (blok "wat maatwerk niet oplost")',
  },
  {
    artikel: 9, lid: 6,
    tekst: 'Bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak. Kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek wanneer de functionaliteit, duurzaamheid en overeengekomen uitstraling niet wezenlijk worden aangetast.',
    gebruikt_in: 'content/blog.ts — keuken-op-maat-of-ikea-keuken (twee blokken + FAQ) en kast-onder-schuin-dak',
  },
  {
    artikel: 9, lid: 7,
    tekst: 'JDG waarschuwt opdrachtgever wanneer een gewenste uitvoering naar professioneel inzicht ondeugdelijk, onveilig of technisch onverantwoord is.',
    gebruikt_in: 'content/blog.ts — kast-onder-schuin-dak (blok "wanneer een kast niet het antwoord is" + FAQ)',
  },
]

const norm = (s) => s.replace(/ /g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim()

/**
 * Haalt de leden van EEN artikel op: alleen de li's op het eerste niveau van de
 * genummerde lijst. De opsommingen binnen een lid (artikel 2 lid 4, artikel 6 lid 2)
 * zijn geen zelfstandige leden en mogen de nummering dus niet opschuiven — dat is
 * precies waar een naieve li-telling de mist in gaat.
 */
function ledenOpEersteNiveau(blok) {
  const leden = []
  const re = /<li\b[^>]*>|<\/li>/gi
  let diepte = 0, start = -1, m
  while ((m = re.exec(blok))) {
    if (m[0][1] !== '/') {
      diepte++
      if (diepte === 1) start = m.index + m[0].length
    } else {
      if (diepte === 1 && start >= 0) {
        leden.push(norm(blok.slice(start, m.index).replace(/<[^>]+>/g, ' ')))
        start = -1
      }
      diepte = Math.max(0, diepte - 1)
    }
  }
  return leden.filter((t) => t.length > 0)
}

/** Leest artikel -> [lid1, lid2, ...] uit de JSX-bron (<Article n={N}>). */
function ledenUitBron(src) {
  const out = new Map()
  const stukken = src.split(/<Article n=\{(\d+)\}/)
  for (let i = 1; i < stukken.length; i += 2) {
    const n = Number(stukken[i])
    if (!out.has(n)) out.set(n, ledenOpEersteNiveau(stukken[i + 1] || ''))
  }
  return out
}

/** Leest artikel -> [lid1, ...] uit de gerenderde HTML van productie. */
function ledenUitLive(html) {
  const romp = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
  const out = new Map()
  const secties = romp.split(/<section\b/i).slice(1)
  for (const sec of secties) {
    const kop = sec.match(/Artikel[\s\S]{0,160}?>(\d+)</)
    if (!kop) continue
    const n = Number(kop[1])
    const leden = ledenOpEersteNiveau(sec)
    if (!out.has(n) && leden.length) out.set(n, leden)
  }
  return out
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&eacute;/g, 'é').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

const res = await fetch(LIVE, { headers: { 'user-agent': 'l3art-motor/meting-av-citaten' } })
const html = decode(await res.text())
const live = ledenUitLive(html)
const bron = ledenUitBron(readFileSync(BRON, 'utf8'))

const uitkomst = []
let mis = 0
for (const c of CITATEN) {
  const gezocht = norm(c.tekst)
  const bronLeden = bron.get(c.artikel) || []
  const liveLeden = live.get(c.artikel) || []
  const bronLid = bronLeden[c.lid - 1]
  const liveLid = liveLeden[c.lid - 1]
  const bron_ok = bronLid === gezocht
  const live_ok = liveLid === gezocht
  // Staat het elders in hetzelfde artikel? Dan is het lidnummer fout, niet de tekst.
  const bron_elders = bronLeden.indexOf(gezocht) + 1
  const live_elders = liveLeden.indexOf(gezocht) + 1
  if (!bron_ok || !live_ok) mis++
  uitkomst.push({
    verwijzing: `artikel ${c.artikel}, lid ${c.lid}`,
    gebruikt_in: c.gebruikt_in,
    citaat: c.tekst,
    bron_ok, live_ok,
    bron_leden_in_artikel: bronLeden.length,
    live_leden_in_artikel: liveLeden.length,
    bron_staat_op_lid: bron_elders || null,
    live_staat_op_lid: live_elders || null,
    live_tekst_op_dat_lid: live_ok ? null : (liveLid ?? '(lid bestaat niet)'),
    bron_tekst_op_dat_lid: bron_ok ? null : (bronLid ?? '(lid bestaat niet)'),
  })
}

const rapport = {
  script: 'scripts/meting-av-citaten.mjs',
  gemeten_op: new Date().toISOString(),
  live_url: LIVE, live_status: res.status,
  bron_bestand: BRON,
  av_versie_op_pagina: (html.match(/Versie[\s\S]{0,200}?(\d{1,2} \w+ 20\d\d)/) || [])[1] || null,
  citaten: uitkomst,
  gevonden: uitkomst.filter((u) => u.bron_ok && u.live_ok).length,
  totaal: uitkomst.length,
}
writeFileSync('scripts/meting-av-citaten.json', JSON.stringify(rapport, null, 2))
for (const u of uitkomst) {
  console.log(`${u.bron_ok && u.live_ok ? 'OK  ' : 'MIS '} ${u.verwijzing}  bron=${u.bron_ok} live=${u.live_ok}` +
    (u.bron_ok && u.live_ok ? '' : `\n     live op dat lid: ${String(u.live_tekst_op_dat_lid).slice(0, 160)}\n     bron op dat lid: ${String(u.bron_tekst_op_dat_lid).slice(0, 160)}`))
}
console.log(`\n${rapport.gevonden}/${rapport.totaal} citaten woordelijk teruggevonden op het genoemde artikel+lid (AV-versie ${rapport.av_versie_op_pagina}).`)
process.exit(mis === 0 ? 0 : 1)
