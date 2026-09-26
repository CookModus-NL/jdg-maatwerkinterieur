---
# VISUELE BRIEF — l3art-beacon aansluiten op jdg-maatwerkinterieur.nl
#
# Toetsbaar met: node ~/l3art/motor/scripts/frontendpoort.mjs --voor --klant jdg \
#   --map <worktree> --omschrijving "..." --bestand app/layout.tsx --bestand components/Beacon.tsx \
#   --brief bouw/BRIEF-l3art-beacon.md
#
# Waarom deze brief bestaat terwijl er geen pixel verandert: de poort classificeert de wijziging
# als substantieel omdat een bestand onder components/ wordt geraakt (padheuristiek). Dat is hier
# een bestand dat wordt VERWIJDERD en dat `return null` deed. De brief legt daarom niet een
# compositie vast, maar de reden waarom er geen compositie te ontwerpen is — en wat dat betekent
# voor de toetsen die daardoor niet kunnen draaien.

pagina: alle pagina's (app/layout.tsx, één root-layout voor de hele site)
klant: jdg
contract: DESIGN.md (route ontworpen, GELDIG — grammatica nog onvolledig)
datum: 2026-09-26
door: bouwer-20260926-1405 (werkorder TAAK-20260926-BEACON-JDG)

# ── DE VRAAG EN HET ANTWOORD ───────────────────────────────────────────────────────────────
# Deze wijziging heeft geen bezoekersvraag: er komt geen zichtbare inhoud bij. De vraag is die
# van de eigenaar en van de motor.
primaire_gebruikersvraag: >
  Geen. De bezoeker ziet en merkt niets van deze wijziging (geen DOM-inhoud, geen layout,
  geen tekst, geen cookie). De vraag erachter is die van de motor: "leverde deze pagina een
  contactintentie op, en waar kwam die bezoeker binnen?"
primair_antwoord: >
  Een anonieme rij in motor_conversies per klik op bellen / e-mail / WhatsApp (en per verstuurd
  formulier met e-mail- of telefoonveld), met pagina, entry_pagina, verwijzer en campagne.

business_intent: >
  Zonder meting geen livegang (koersbesluit 25 sep 2026). De noordster voor jdg staat nu op vier
  kliks in 30 dagen en telt geen formulieren; de eigen Beacon.tsx is bovendien per-repo onderhoud
  dat 18-26 sep stil kapot heeft gestaan. De gedeelde b.js is één te onderhouden teller voor elke
  klant, op elk platform.

beslispad: >
  Niet van toepassing: de bezoeker doorloopt geen route die deze wijziging raakt. Het beslispad
  van de bezoeker (footer-CTA bellen/WhatsApp) blijft exact zoals het was; alleen de telling
  eromheen verhuist van een React-component naar een extern script.

# ── HET EERSTE SCHERM ──────────────────────────────────────────────────────────────────────
eerste_scherm:
  wat_is_dit: onveranderd — deze wijziging voegt geen zichtbaar element toe aan enig scherm
  is_dit_voor_mij: onveranderd
  belangrijkste_antwoord: onveranderd
  waarom_geloof_ik_het: onveranderd
  wat_kan_ik_doen: onveranderd
  dominant: >
    Niet van toepassing. Beide kanten van de diff renderen nul pixels: het oude <Beacon /> deed
    `return null`, de nieuwe scriptregel rendert geen DOM. De typografische massa van elk eerste
    scherm is daarmee aantoonbaar identiek vóór en na.
  moet_zichtbaar:
    - "NIETS. Een zichtbaar element zou hier een fout zijn, geen feature."

# ── ACTIES ─────────────────────────────────────────────────────────────────────────────────
primaire_cta:
  tekst: onveranderd (de bestaande bel- en WhatsApp-CTA's in de footer, href="tel:+31619831621")
  bestemming: onveranderd
  vorm: onveranderd — deze wijziging raakt geen actiehiërarchie
secundaire_cta:
  tekst: geen
  vorm: onveranderd

# ── BEWIJS ─────────────────────────────────────────────────────────────────────────────────
# Er komt geen bewijsblok op de site. Het bewijs dat hier telt is technisch en staat in het
# rapport en de leerlog, niet op de pagina.
bewijs_vroeg:
  - wat: geen bewijsblok op de site — deze wijziging publiceert geen claim en geen cijfer
    bron: https://l3art.nl/b.js (HTTP 200, sha1 61118aa5…, byte-identiek aan l3art/public/b.js)
    peildatum: 2026-09-26
    waar: rapport en leerlog van deze run, niet in de DOM

# ── MOBIEL ─────────────────────────────────────────────────────────────────────────────────
mobiele_prioriteit:
  eerste_scherm: onveranderd op 390px — er komt geen element bij en er verdwijnt geen element
  scanvolgorde: onveranderd
  verdwijnt: []
  verschijnt: []
  verandert_van_volgorde: []
  cta_verandering: geen
  zwevende_elementen: >
    Onveranderd: de bestaande WhatsApp-widget (components/whatsapp-floating.tsx) blijft staan en
    blijft getéld worden — b.js herkent wa.me en api.whatsapp.com, net als de oude Beacon.

# ── VORM EN INHOUD ─────────────────────────────────────────────────────────────────────────
contentdichtheid: onveranderd — deze wijziging voegt geen content toe

informatiearchitectuur:
  - sectie: geen
    doel: geen — de wijziging zit volledig in de meetlaag, niet in de informatielaag
    vorm: niet van toepassing

kerncomponenten:
  - >
    geen enkel component uit de componentgrammatica. Er wordt één component VERWIJDERD
    (components/Beacon.tsx, rendert null) en één regel <script defer> toegevoegd vlak voor
    </body> in de root-layout.

# ── RISICO'S EN LAT ────────────────────────────────────────────────────────────────────────
ontwerprisicos:
  - >
    DUBBEL TELLEN: blijft Beacon.tsx naast b.js staan, dan levert één klik twee rijen en liegt de
    noordster. Daarom wordt het component in dezelfde wijziging verwijderd, niet alleen ontkoppeld.
  - >
    ONZICHTBAAR STUK: een externe teller faalt stil (dat is 18-26 sep precies gebeurd). Het risico
    verhuist van de klantrepo naar l3art.nl; dat is bewust (één plek repareren) maar vraagt een
    sensor op l3art-niveau, niet per klant.
  - >
    SCRIPT OP DE VERKEERDE PLEK: React hoist alleen `async` scripts. Deze regel is `defer` en
    blijft dus staan waar hij staat, vlak voor </body>; `document.currentScript` — waar b.js
    data-bedrijf uit leest — werkt bij een klassiek defer-script.
  - >
    TOESTEMMING: b.js gebruikt sessionStorage, geen cookie, en legt geen identificatie vast. De
    cookiebanner en de privacytekst veranderen dus niet. Dit is geen juridische wijziging en er
    wordt in deze run geen juridische tekst aangeraakt.

anti_generic_hier:
  - >
    Niets uit do_not_use is hier van toepassing: er wordt geen patroon, kleur, kaart of sectie
    toegevoegd. Een "aankondiging" van de meting op de site zou dat wel zijn en komt er niet.

benchmark:
  - url: https://l3art.nl/b.js
    wat_wint_daar: >
      één teller voor elk platform, met herkomst (entry_pagina/verwijzer/campagne) en een rem van
      30 seconden tegen dubbelklikken — de dingen die een standaard analytics-snippet niet
      koppelt aan de motor.
    hoe_winnen_wij: >
      wij nemen dat script letterlijk over in plaats van een eigen variant te onderhouden; de
      verbetering landt daarmee bij elke klant tegelijk in plaats van per repo.

visuele_claims:
  - wat: geen
    waarnemingen: 0
    bron: niet van toepassing
    vorm: er komt geen visualisatie en geen cijfer op de site
---

# Visuele brief — l3art-beacon op jdg-maatwerkinterieur.nl

## De compositie in één alinea

Er is geen compositie. De diff verandert de meetlaag van de site en niets anders: één component
dat `null` rendert verdwijnt, één regel `<script src="https://l3art.nl/b.js" data-bedrijf="jdg"
defer></script>` komt vlak voor `</body>` in de enige root-layout, waardoor hij op elke pagina
staat. Voor en na is de gerenderde inhoud van elke pagina op elke breedte identiek.

## Wat deze wijziging NIET wordt

Geen zichtbare melding, geen banner, geen extra widget, geen tweede teller naast de eerste, en
geen aanpassing van de privacy- of cookietekst (dat is geen bouwerswerk — wet art. 3 en de harde
grenzen van deze werkorder). Ook geen `next/script`-wrapper of eigen variant van b.js: dan
onderhoudt de klantrepo weer eigen meetcode, en dat is precies wat hier wordt opgeruimd.

## Openstaande vragen

Niets blokkeert de bouw. Wat ná de bouw nog van een mens moet komen:

1. **Livegang** loopt via de uitvoerpoort van deze klant (wet art. 4.2) — deze run deployt niet.
2. **De 201-controle op de live site** moet zónder echte conversie: een testklik op de
   gepubliceerde site schrijft een écht bedrijfsgegeven in `motor_conversies` en vervuilt precies
   de noordster die deze ingreep betrouwbaar moet maken (wet art. 6.4: een muterende aanroep is
   nooit een test). Doe die controle daarom op de Vercel-preview-URL van de merge, of markeer de
   ene rij die de controle oplevert expliciet als controlerij.
