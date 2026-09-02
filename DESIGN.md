---
versie: 2
klant: jdg
domein: https://www.jdg-maatwerkinterieur.nl
opgesteld: 2026-09-02
herkomst: >
  Twee bronnen, nooit door elkaar. DESCRIPTIEF (meting): node motor/scripts/designpoort.mjs
  --meten --basis https://www.jdg-maatwerkinterieur.nl, 2 sep 2026, 4 paden x viewports
  1440/390 = 6 renderingen — daaruit komen de letterfamilies, de vlak- en tekstkleuren, de
  afrondingen, het sectieritme en de containerbreedtes. PRESCRIPTIEF (ontwerpbesluit,
  2 sep 2026, Chief Architect Designer-pet binnen dispatcher-20260902-1205): de typeschaal,
  de ondergrens van 12px, de kleurrollen en de do_not_use-lijst. De merk-essentie steunt op
  motor_feiten jdg (12 rijen, o.a. persoon.eigenaar, principe.zonder-tussenlagen,
  proces.werkwijze, dienst.keukens, vindbaarheid.gbp.concurrentie_reviews).
  Wat een meting is die nog geen besluit werd, staat als [AANNAME]. Marktpositie is
  BEWUST LEEG — die kennis bestaat niet en wordt niet verzonnen (sjabloon REGEL 2).

name: JDG — de werkplaats, niet de showroom
description: >
  Warm, licht en ambachtelijk: een cremekleurige grond met een donker hout-zwart als
  tegenwicht, een serif die de kop draagt en een monospace die maten, houtsoorten en
  doorlooptijden als werkplaatsnotities zet. De site leest als het dossier van een
  meubelmaker, niet als de folder van een keukenzaak. Je herkent hem aan drie dingen:
  het beeld bepaalt de vorm van het raster in plaats van andersom, elk project toont
  minstens een detail van een verbinding, en groen brandt alleen waar iets waar is.

# ------------------------------------------------------------------ merk-essentie
merk:
  identiteit: eenmanszaak van Jonas de Graaf die maatwerk interieur tekent, bouwt en monteert vanuit een eigen werkplaats in Terheijden
  belofte: een keuken of kast die past bij hoe jij leeft, gemaakt en gemonteerd door dezelfde hand die hem tekende
  karakter: ambachtelijk, precies, nuchter, warm, zonder tussenlagen
  gewenste_perceptie: dit is geen keukenzaak die doorverkoopt, dit is de maker zelf
  gewenste_emotie: vertrouwen in vakmanschap — geen opwinding, geen luxe-suggestie
  doelgroep: particuliere huiseigenaar in West- en Noord-Brabant die een keuken of kast laat maken en die eerder wil weten wie het maakt dan wat het kost
  marktpositie: "[ONBEKEND] — er is geen vastgelegd prijs- of kwaliteitsbesluit t.o.v. Visker Keukens en Zijlmans. Vraag staat open bij Bart (jonas-bedrijfsprofiel, jdg-eindmarkt-vraag). Niet invullen zonder antwoord."

# Waarom ziet deze site eruit zoals hij eruitziet?
visuele_these: >
  Het onderscheid van JDG is niet de keuken maar de ONGEBROKEN LIJN: wat Jonas tekent bouwt
  hij, wat hij bouwt monteert hij. De directe concurrenten verkopen precies het omgekeerde —
  een showroom waar je iets uitkiest dat elders gemaakt is. Die lijn moet je kunnen ZIEN,
  niet lezen. Daarom is de werkplaats de hoofdlocatie van de beeldtaal en niet de opgeleverde
  keuken: hout in bewerking, een verbinding van dichtbij, gereedschap dat gebruikt is,
  en pas daarna het resultaat in huis. De interface treedt terug tot een warme, papierachtige
  grond met een strakke typografische orde, zodat het materiaal het enige is met textuur.
  Precisie toont zich in de typografie, warmte in de kleur, vakmanschap in het beeld.

grote_idee: van schets tot montage door dezelfde hand — laat de lijn nooit breken

# -------------------------------------------------------------------- kleuren
# Rollen, geen merknamen. Waarden descriptief gemeten 2 sep 2026 en tot besluit verheven.
colors:
  canvas: "#f2ede2"
  surface: "#e8e1cf"
  canvas-diep: "#100e08"
  surface-diep: "#1a170f"
  ink: "#100e08"
  # BESLUIT 2 sep 2026 (dispatcher-20260902-1305, TAAK-20260902-JDG-A11Y): de gedempte
  # inkt is GRONDGEBONDEN. #74684d haalt 4,70:1 op canvas (#f2ede2) en is daar de mute,
  # maar 4,20:1 op surface (#e8e1cf) en 3,52:1 op canvas-diep (#100e08) — beide onder AA.
  # Daarom drie rollen in plaats van een. Alle drie de waarden stonden al in het palet;
  # er is geen kleur toegevoegd en geen meting weggepoetst (doctrine par. 6, wet art. 9.5).
  ink-mute: "#74684d"            # alleen op canvas #f2ede2 — 4,70:1
  ink-mute-op-surface: "#524730" # op surface #e8e1cf — 6,99:1
  op-diep: "#d6ccae"
  op-diep-mute: "#9b8f6f"        # de mute op canvas-diep #100e08 — 6,02:1
  signaal: "#1c4728"
  signaal-licht: "#7db47a"

# ----------------------------------------------------------------- typografie
typography:
  display:
    fontFamily: "DM Serif Display"
    fontSizeMin: 36
    fontSizeMax: 144
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "DM Serif Display"
    fontSizeMin: 30
    fontSizeMax: 48
  basis:
    fontFamily: "DM Sans Variable"
    fontSize: 16
    rol: alle lopende tekst — een maat
  micro:
    fontFamily: "ui-monospace"
    fontSize: 12
    rol: werkplaatsnotities — maten, houtsoorten, doorlooptijden, plaatsnamen
  regellengte_max: 72 tekens

compositie:
  grid: >
    Brede band van 1376px voor beeld en projectraster, smalle leeskolom van 720px voor lopende
    tekst. Beeld mag uit de leeskolom breken naar de brede band; tekst nooit uit de leeskolom.
  asymmetrie: >
    Het projectraster is opzettelijk ongelijk: de werkelijke beeldverhouding bepaalt de cel
    (een keuken is breed, een kledingkast is hoog). Uniforme kaarten zijn hier verboden.
  ritme_basis: clamp(64px, 8vw, 96px)
  ritme_moment: clamp(112px, 12vw, 160px)
  dichtheid: >
    Gemiddeld. De koper vergelijkt maar een handvol makers en leest dan grondig; lucht rond
    beeld, maar geen leegte die het aanbod dun laat lijken.

vorm:
  radius_basis: 20
  lijnen: >
    Scheiding ontstaat door kleurvlak (creme naast hout-zwart), niet door randen. Hairlines
    alleen in tabellen met maten.
  kaarten: >
    Alleen waar een echt object wordt getoond (project, dienst). Nooit om tekst in te leggen —
    een kaart om een alinea is decoratie.

beeld:
  bron: first-party — eigen foto's uit de werkplaats en van opgeleverd werk
  onderwerp: >
    Verplichte volgorde per project: werkplaats of bewerking, dan minstens een detail van een
    verbinding of afwerking van dichtbij, dan het resultaat in de woning.
  behandeling: warm daglicht, geen koele witbalans, geen zware vignettering, crops die het materiaal raken
  stock: verboden — er is first-party materiaal, en 48 van 48 gemeten beelden hebben al een alt-tekst
  alt_regel: >
    Nooit een alt-tekst schrijven op gezag van de titel die elders aan datzelfde bestand hangt.
    Bekijk het beeld (lering 56cbbaab, 2 sep 2026).

motion:
  micro: 120-200ms
  ui: 180-350ms
  redactioneel: 400-800ms
  easing: entrance cubic-bezier(0.22, 1, 0.36, 1) — exit cubic-bezier(0.4, 0, 1, 1)
  doel_verplicht: [orientatie, hierarchie, feedback, continuiteit, focus]
  verboden: [alles-fade-in, scroll-jacking, intro voor content, parallax op beeld]
  reduced_motion: volwaardige site zonder beweging

driedimensionaal:
  status: niet in gebruik
  voorwaarde: >
    Alleen als een bezoeker een maatwerkstuk echt moet kunnen begrijpen in de ruimte
    (bijv. een inloopkast in een schuine kap). Sfeer-3D is verboden: een foto van het
    echte stuk is altijd geloofwaardiger dan een render van een stuk dat niet bestaat.

# De anti-sloplijst van dit project.
do_not_use:
  - showroom-taal en showroom-beeld — dat is precies de belofte van Visker Keukens en Zijlmans, en het ondermijnt het enige echte onderscheid van JDG
  - leus-met-vinkjes in titels en meta ("Zichtbaar Mooi", checkmarks en pijlen) — gemeten bij beide directe concurrenten en het maakt de site inwisselbaar
  - 3D-keukenrenders en AI-interieurbeeld — commodity, en ze weerspreken de belofte dat dit echt gemaakt is
  - de vakman-met-duim-omhoog en de gestileerde handdruk
  - de donkere instrumentlook van l3art.nl zelf (canvas #080706, goud signaal, IBM Plex Mono) — diversiteitseis, zie diversiteitscheck onderaan
  - uniforme kaartenrasters waarin elk project dezelfde beeldverhouding krijgt
  - "wij"-stem zolang niet vaststaat wie het werk doet (TAAK-20260901-11)

# ---------------------------------------------------------------------------
# CONTRACT — machinaal gehandhaafd door motor/scripts/designpoort.mjs.
# ---------------------------------------------------------------------------
contract:
  paden: [/, /diensten/keukens-op-maat, /projecten, /over-jonas]
  viewports: [1440, 390]
  fontfamilies: [DM Serif Display, DM Sans Variable, ui-monospace]
  fontschaal: [12, 14, 16, 20, 24, 30, 36, 48, 60]
  fontschaal_vloeiend: [96-144]
  min_font_px: 12
  vlakken: ["#f2ede2", "#e8e1cf", "#100e08", "#1a170f", "#262218", "#1c4728"]
  tekstkleuren: ["#100e08", "#382f21", "#74684d", "#524730", "#d6ccae", "#beb597", "#9b8f6f", "#f2ede2", "#1c4728", "#245c34", "#7db47a"]
  kleur_tolerantie: 2
  radii: [6, 20]
  contrast_min: 4.5
  ritme_metronoom_max: 0.5
  raakvlak_hard: false
  reduced_motion: true
  min_beelden_per_pagina: 1
---

# DESIGN.md — JDG Maatwerk Interieur

## Wat deze site anders maakt

**1. De werkplaats is de hoofdrolspeler, niet het eindresultaat.** Iedere concurrent toont
opgeleverde keukens. JDG is de enige die kan laten zien waar ze gemaakt worden, want hij maakt
ze zelf (`motor_feiten` jdg `principe.zonder-tussenlagen`). Haal het logo weg en je moet nog
steeds zien dat dit de site van een maker is en niet van een verkoper.

**2. Het beeld bepaalt het raster.** Een keuken is breed, een kledingkast is hoog, een detail
van een verbinding is vierkant. Wie die drie in dezelfde kaart perst, vertelt dat de vorm van
het werk er niet toe doet — bij een maatwerkbedrijf is dat de verkeerde boodschap.

**3. De monospace is geen stijl maar een maateenheid.** Houtsoort, afmeting, doorlooptijd,
plaats: gegevens die de koper echt gebruikt, gezet als werkplaatsnotitie. Waar de concurrent
een vinkje zet ("✓30+ jaar zichtbaar mooi"), zet JDG een getal.

## Referentieonderzoek

Vier bronnen uit `brand/referenties/design-md/`, elk voor precies één principe. Geen van de
vier levert een layout; ze leveren een mechanisme.

**WIRED** — *editorial*
- REFERENTIE: een strikt duet van display-serif voor koppen en sans voor metadata; "layout reads like a printed magazine ported to the web with very little marketing chrome".
- PRINCIPE: hiërarchie ontstaat uit type-contrast, niet uit dozen, kaarten en schaduwen. Dat maakt lange tekst leesbaar zonder chrome.
- VERTALING: JDG heeft de ingrediënten al (DM Serif Display 112x, DM Sans 301x, mono 130x gemeten). Projectpagina's worden artikelen met een kop en een dossier, geen productkaarten.
- ORIGINALISERING: Wired is zwart-op-wit, nieuws-tempo en byline-metadata. JDG is warm creme, traag, en zijn metadata is werkplaatsdata — hout, maat, dagen. Geen Wired-raster en geen Wired-zwart.

**PINTEREST** — *raster*
- REFERENTIE: "Pin imagery is the system's load-bearing visual element — square, portrait, and landscape pins tile in a column-based masonry grid."
- PRINCIPE: laat de eigen verhouding van het beeld de cel bepalen in plaats van elk beeld in één maat te dwingen; de compositie gaat dan over de inhoud.
- VERTALING: het projectraster van JDG draagt de echte verhouding van het werk. Dit is de directe reden dat "uniforme kaartenrasters" op de `do_not_use` staat.
- ORIGINALISERING: geen oneindige ontdek-feed, geen pill-CTA, geen rood, geen 8px-gutters. JDG toont een eindige, geredigeerde selectie met de werkplaatsregel eronder — een portfolio, geen ontdekmachine.

**BMW M** — *beeldstrategie*
- REFERENTIE: "energy comes from full-bleed photography (cars on tracks, driver-cockpit shots, carbon-fiber detail)"; het merk "carries no decorative voltage".
- PRINCIPE: geloofwaardigheid van engineering komt uit detail-crops — de naad, het scharnier, de verbinding — niet uit het mooie overzicht. Het detail is het bewijs.
- VERTALING: harde regel in `beeld.onderwerp`: elk project toont minstens één verbinding of afwerking van dichtbij. Dat is wat een meubelmaker van een doorverkoper onderscheidt, en het is precies wat op een foto te zien is.
- ORIGINALISERING: BMW is bijna-zwart, uppercase, motorsport-streep. JDG is licht, warm en onderkast, en het detail is hout en een hand, geen carbon.

**LINEAR** — *discipline*
- REFERENTIE: een klein, streng gehandhaafd tokenset; het accent verschijnt "on the brand mark, focus rings, and a few intentional CTAs — never decoratively".
- PRINCIPE: beperking leest als precisie. Eén accent dat zeldzaam is, betekent iets; een accent dat overal staat, betekent niets.
- VERTALING: het groen brandt alleen op de werkplaatsregel en één handeling per scherm. En: de gemeten 25 lettergroottes gaan terug naar de negen stappen in `contract.fontschaal` — bij een maatwerkbedrijf is typografische slordigheid een inhoudelijke tegenspraak.
- ORIGINALISERING: Linear is donkere SaaS met lavendel en een custom sans. Hier wordt alleen de DISCIPLINE overgenomen, op een warm licht vlak met een serif — het tegenovergestelde oppervlak.

## Category codes vs. clichés

**Codes die blijven** (ze scheppen vertrouwen en weghalen kost geloofwaardigheid): echte
projectfoto's van eigen werk · zichtbare maten en materialen · een adres met een werkplaats
en "bezoek op afspraak" · een gezicht en een naam bij het bedrijf · een expliciete garantie ·
een helder stappenproces van kennismaking tot montage.

**Clichés die weg moeten** (ze maken generiek): de showroom-uitnodiging · "zichtbaar mooi"-
achtige leuzen en vinkjes in titels en meta — bij beide Visker-sites gemeten op 2 sep 2026 ·
sfeerbeeld dat van elke keukenfabrikant kan zijn · gestileerde vakman-iconografie ·
"al 30+ jaar"-autoriteit die JDG feitelijk niet kan claimen (merk voert "sinds 2025").

Let op de val: JDG mist in het lokale pakket zowel reviews als een jaren-actief-label
(`motor_feiten` `gbp.concurrentie_reviews`, 27 aug 2026). De verleiding is dat te compenseren
met autoriteitstaal. Dat is precies de verkeerde richting — het gat wordt gedicht met bewijs
(projecten, reviews, de 17 jaar ervaring van Jonas zelf), niet met een grotere claim.

## Signature moment

**De ononderbroken lijn, in één beeld per project.** Bovenaan elke projectpagina staat het werk
tweemaal in hetzelfde kader: links de staat in de werkplaats, rechts hetzelfde stuk gemonteerd
in huis, uitgelijnd op hetzelfde punt in het object. Eén sleepbare scheiding, geen automatische
animatie, volwaardig zonder beweging. Het is de visuele vorm van `grote_idee` — dezelfde hand,
van schets tot montage — en geen concurrent kan het namaken, want geen van hen heeft de
werkplaatshelft van het beeld.

## Diversiteitscheck (doctrine par. 18)

Bouwen we hetzelfde als bij een andere klant? Nee, en dat is toetsbaar. Het enige andere
`DESIGN.md` in de motor is dat van l3art zelf: canvas `#080706`, goud signaal, IBM Plex Mono,
grote idee "het bewijs is de decoratie" — donker, instrumentaal, B2B. JDG is licht warm creme,
groen signaal, DM Serif Display, grote idee "van schets tot montage door dezelfde hand" —
ambachtelijk, redactioneel, B2C. Tegenovergestelde grond, andere accentfamilie, andere
displayklasse. Van Wonderen (`TAAK-20260901-DES-WONDEREN`) heeft nog geen contract; wie dat
schrijft moet deze check opnieuw doen en zich er rekenschap van geven dat wonderen en jdg
allebei Brabantse vakbedrijven met projectfotografie zijn — daar ligt het echte kopieerrisico,
niet bij l3art.

## Openstaande ontwerpbesluiten

1. **`merk.marktpositie` is leeg.** Er is geen vastgelegd prijs- of kwaliteitsbesluit ten
   opzichte van Visker Keukens en Zijlmans. Niet invullen zonder Jonas; vragen staan open als
   `jonas-bedrijfsprofiel` en `jdg-eindmarkt-vraag`.
2. **De stem: "ik" of "wij".** Gemeten: 261x "wij" tegenover 16x "ik", plus "hetzelfde team" en
   "de monteurs" — terwijl het bedrijf een eenmanszaak is (`TAAK-20260901-11`). Dit is een
   feitenvraag aan Jonas, geen redactiekeuze, en het raakt de merk-essentie hierboven direct.
   Zolang die open staat blijft "wij"-stem op de `do_not_use`.
3. **De garantie.** `motor_feiten` `voorwaarde.garantie` registreert een tegenspraak: 5 jaar op
   constructie tegenover "constructie voor twintig jaar" als kwaliteitsclaim
   (`TAAK-20260901-10`). De homepage voert op 2 sep 2026 "Constructie 5 jaar garantie". Zolang
   dit niet is uitgezocht mag geen enkele nieuwe pagina een garantietermijn noemen.
4. **De typeschaal is prescriptief en de site voldoet er nog niet aan.** Gemeten 2 sep 2026:
   25 verschillende lettergroottes over vier pagina's, waarvan 9,5 / 10 / 10,5 / 11px onder de
   ondergrens van 12px. De poort zal hierop een harde afwijking melden. Dat is de bedoeling —
   het contract legt het doel vast, niet de huidige staat (doctrine par. 6, wet art. 9.5).
   **Stand 2 sep 2026 na `TAAK-20260902-JDG-A11Y`:** de ondergrens is gehaald — alle lopende
   tekst staat op minimaal 12px en de teller ging van 25 naar 17 maten. De resterende acht
   maten (13,5 / 14,5 / 13 / 17 / 15 / 44 / 16,5 / 15,5px) zijn merkverwatering, geen
   leesfout, en horen bij `TAAK-20260902-JDG-TYPESCHAAL`.
5. **Het logo-lockup is geen uitzondering op de ondergrens.** De onderregel "Maatwerk
   Interieur" stond op 9,5px (lockup) en 10px (stacked). WCAG zou een logotype vrijstellen,
   maar dit is gezet als tekst en wordt door bezoekers ook zo gelezen. Besluit 2 sep 2026
   (dispatcher-20260902-1305): beide naar 12px, de spatiëring van 0,24em naar 0,14em zodat
   het lockup niet breder wordt dan de kop, en het woordmerk van 22/26px naar de
   contractstap 24px. Geverifieerd op een echte render bij 390px: geen omloop, geen
   botsing met de menuknop.
