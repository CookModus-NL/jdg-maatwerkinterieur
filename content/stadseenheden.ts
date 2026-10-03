import type { Antwoordeenheid } from './lokaal-rooster'

/**
 * Verdiepte antwoordeenheden op een WERKGEBIED-pagina (/werkgebied/<stad>).
 *
 * ── Waarom dit bestand los van content/lokaal-rooster.ts staat ────────────
 * Het rooster hangt een antwoordeenheid aan een dienst×stad-rij: "kledingkast op
 * maat tilburg" hoort bij /diensten/kledingkasten-op-maat/tilburg. Maar niet elke
 * gemeten zoekvraag is een dienst. Search Console laat op /werkgebied/tilburg
 * zoekopdrachten binnenkomen die over het VAK gaan en niet over één meubel:
 * "interieurbouwer tilburg", "interieurbouw tilburg", "meubelmaker tilburg". Die
 * horen bij de stadpagina, want die behandelt alle zes de diensten voor die plaats.
 * Ze aan een dienstpagina hangen zou de vraag verplaatsen naar een URL die hem niet
 * beantwoordt.
 *
 * ── Dezelfde drie regels als in het rooster ───────────────────────────────
 * 1. Eén eenheid hoort bij één plaats en staat er alleen als de vraag GEMETEN is.
 *    Geen eenheid "voor de zekerheid": dat is precies hoe het rooster van 96
 *    dienst×stad-pagina's ontstond dat in september is opgeruimd.
 * 2. Elk getal in de tekst draagt zijn herkomst in de tekst zelf, niet in een
 *    voetnoot, en is machinaal na te rekenen tegen de bron. De twee metingen die
 *    deze eenheid dragen staan in scripts/ en geven exit 1 zodra een getal niet
 *    meer klopt: scripts/meting-woningvoorraad-tilburg.mjs (CBS 82550NED) en
 *    scripts/meting-serp-interieurbouwer-tilburg.mjs (de zoekuitslag).
 * 3. Geen claim over eerder werk in die plaats. JDG bestaat sinds 2025 en kan geen
 *    projecten aan Tilburg koppelen; de pagina zegt daarom wat de woningvoorraad is
 *    en wat dat voor het werk betekent, niet wat er al gedaan zou zijn
 *    (DE WET art. 1.1).
 *
 * De tekst mag anker-markup dragen (zie lib/tekst.tsx): alleen interne paden, en de
 * pagina rendert React-elementen, geen HTML-injectie.
 */
export type Stadseenheid = {
  stad: string
  /** De gemeten zoekopdrachten die deze eenheid rechtvaardigen, met vertoningen. */
  bewijs: string[]
  eenheid: Antwoordeenheid
}

export const stadseenheden: Stadseenheid[] = [
  {
    stad: 'tilburg',
    // Google Search Console, property https://www.jdg-maatwerkinterieur.nl/,
    // dimensies zoekopdracht × pagina, 2 sep t/m 29 sep 2026, op precies de URL
    // /werkgebied/tilburg: 858 vertoningen over 30 zoekopdrachten, 0 klikken.
    bewijs: [
      'interieurbouwer tilburg (237, positie 13,5)',
      'interieurbouw tilburg (119, positie 20,1)',
      'interieuwbouw tilburg (23, positie 23,7)',
      'meubelmaker tilburg (53, positie 12,9)',
      'meubelmakerij tilburg (14, positie 17,4)',
      'interieur inrichten tilburg (55, positie 21,1)',
    ],
    eenheid: {
      vraag: 'interieurbouwer tilburg',
      kop: 'Een interieurbouwer in Tilburg: het bouwjaar bepaalt welk probleem je laat oplossen',
      kern:
        'Een interieurbouwer tekent, bouwt en monteert het vaste interieur van een ruimte die er al staat: keukens, kasten, wandmeubels. In Tilburg bepaalt het bouwjaar van de woning welk probleem dat werk moet oplossen. Van de 107.966 woningen in de gemeente is 16,8 procent van vóór 1945 — daar gaat het om vlakken die niet recht zijn. En 38,3 procent is een appartement van gemiddeld 73 vierkante meter — daar gaat het om centimeters, en is hoogte de enige maat die nog vrij is.',
      alineas: [
        'Eerst waarom je op deze zoekopdracht moeilijk een antwoord vindt: interieurbouwer is ook een beroep, en Google leest het woord vooral zo. In de Nederlandse zoekuitslag op "interieurbouwer tilburg" van 3 oktober 2026 (Nederland, Nederlands, desktop; waarneming via DataForSEO) staan negentien organische resultaten, en vijftien daarvan zijn vacatures, salarispagina\'s, een opleidingsgids of een persoonlijk profiel. De eerste drie blokken zijn bedrijfsprofielen uit het lokale pakket — een naam, een afstand en een cijfer, en in totaal staan er twaalf van die profielen. Zoek je iemand die iets komt maken, dan krijg je dus grotendeels een arbeidsmarkt te zien. Zet daarom het meubel erbij: "keuken laten maken tilburg" of "kast op maat laten maken tilburg" geeft een heel andere uitslag dan het beroep alleen.',
        'Wat op die hele uitslag niet voorkomt, is het gegeven waar het hier om gaat: hoe de Tilburgse woningvoorraad over de bouwjaren verdeeld is. Op 1 januari 2026 telde de gemeente Tilburg 107.966 woningen (CBS, tabel 82550NED, cijfers uit de Basisregistratie Adressen en Gebouwen). Daarvan zijn er 18.126 van vóór 1945 — 16,8 procent — en 926 van vóór 1905, nog niet één op de honderd. De negentiende-eeuwse arbeiderswoningen rond de oude textielbuurten zijn dus het verhaal van een kleine minderheid van de stad. De grootste groep is een andere: 17.518 woningen, 16,2 procent, komen uit de jaren 1965 tot 1975, en de drie naoorlogse decennia 1945 tot 1975 vormen samen 31.929 woningen, 29,6 procent. Bijna drie op de tien Tilburgse woningen is naoorlogs.',
        'Dat verschuift de vraag. In een pand van vóór 1945 is de kans groot dat het vlak waar de kast tegenaan komt niet recht is, en dan gaat het werk over de aansluiting: het verschil tussen de breedste en de smalste plek verdwijnt in het paneel tegen de muur, of het blijft als kier ernaast staan. In de naoorlogse voorraad staan de muren doorgaans wel recht, maar is er minder ruimte. De woningen uit 1945 tot 1955 zijn met gemiddeld 97 vierkante meter de kleinste van alle bouwperioden in de stad, en 41.321 Tilburgse woningen — 38,3 procent — zijn appartementen met gemiddeld 73 vierkante meter, tegen 133 voor een eengezinswoning; van de grootste bouwjaarklasse, 1965 tot 1975, zijn er 9.060 appartementen. Daar zit de winst zelden in de breedte maar in de hoogte: de strook tussen een systeemkast en het plafond is vaak het enige wat nog vrij is. Welke van de twee het bij jou is, staat niet in een postcode en niet in een bouwjaar — dat blijkt bij het inmeten, en dat gebeurt bij jou thuis en is gratis en vrijblijvend. Hoe het daarna verder gaat staat stap voor stap op <a href="/werkwijze">de werkwijze van JDG</a>.',
        'Bij een keuken laten maken is die grens zelfs een getal. Het maatraster van het IKEA METOD-systeem, op 15 september 2026 uitgelezen op de eigen productpagina\'s van IKEA, werkt met onderkasten van 20, 30, 40, 60 en 80 centimeter breed, een romp van 80 centimeter hoog die op een poot van 8 centimeter staat, en hoge kasten van 200 of 220 centimeter — met die poot eindigen die op 208 of 228 centimeter boven de vloer. Naast de koelkast hoort altijd een passtuk van minimaal 5 centimeter. Past jouw keuken binnen dat raster, dan lost maatwerk een probleem op dat je niet hebt en koop je beter een systeemkeuken. Valt de ruimte ertussen, loopt de vloer af, staat er een schoorsteen in de wand of zit het plafond hoger dan 228, dan begint het werk van een interieurbouwer. Wat dat voor een keuken betekent staat op <a href="/diensten/keukens-op-maat">de pagina over keukens op maat</a>; hoe vaak zo\'n onregelmatig vlak in de praktijk voorkomt is te zien op <a href="/projecten">de projectenpagina</a>, waar van de zestien projecten er zeven tegen een vlak staan dat niet recht is, en van de zes kast- en zolderinbouwprojecten vier.',
        'Tot slot wat JDG in Tilburg wel en niet is, want "interieurbouwer" dekt in de praktijk heel verschillende bedrijven. JDG Maatwerk Interieur is de eenmanszaak van Jonas de Graaf, met een eigen werkplaats aan de Bredaseweg in Terheijden, 25 kilometer van Tilburg; hij zit sinds 2008 in de interieurbouw en heeft er zeventien jaar ervaring in. Wat JDG maakt: keukens, kledingkasten, inloopkasten, tv-meubels, boekenkasten en wandmeubels en badkamermeubels op maat, elk project vanaf schets. Wat JDG tekent bouwt JDG, en wat JDG bouwt monteert JDG zelf, inclusief het afkitten bij de oplevering. Wat JDG niet doet: los interieuradvies, styling of een inrichtingsplan zonder dat er iets gemaakt wordt, en geen doorverkoop van een fabriekskeuken uit een maatprogramma. Zoek je iemand die je huis komt inrichten of een kleurplan maakt zonder dat er een meubel uit voortkomt, dan ben je bij een stylist of een ontwerper beter af. Welk verschil er precies zit tussen een meubelmaker, een interieurbouwer en een keukenzaak staat uitgewerkt in <a href="/blog/meubelmaker-interieurbouwer-of-keukenzaak">meubelmaker, interieurbouwer of keukenzaak: wie doet wat</a>.',
      ],
      vragen: [
        {
          q: 'Wat doet een interieurbouwer precies, en wat niet?',
          a: 'Een interieurbouwer maakt het vaste interieur van een ruimte: keukens, kasten, wandmeubels en andere onderdelen die aan de muur, de vloer of het plafond vastzitten en die op de ruimte worden getekend in plaats van uit een serie komen. Wat er niet automatisch bij hoort is advies: een interieurbouwer is geen stylist, geen binnenhuisarchitect en geen interieurontwerper. Bij JDG hoort het ontwerp van het meubel bij de bouwopdracht, maar een adviestraject, een stylingopdracht of een inrichtingsplan zonder dat er iets gemaakt wordt, hoort niet tot het aanbod. Het volledige onderscheid tussen de makers onderling staat in <a href="/blog/meubelmaker-interieurbouwer-of-keukenzaak">meubelmaker, interieurbouwer of keukenzaak</a>.',
        },
        {
          q: 'Waarom vind ik op "interieurbouwer tilburg" vooral vacatures?',
          a: 'Omdat interieurbouwer ook een beroep is, en de zoekopdracht dus twee heel verschillende bedoelingen heeft: iemand die werk zoekt, en iemand die werk uitbesteedt. In de Nederlandse zoekuitslag van 3 oktober 2026 waren vijftien van de negentien organische resultaten vacature-, salaris-, opleidings- of profielpagina\'s, en waren de eerste drie blokken bedrijfsprofielen uit het lokale pakket. Zoek je iemand die iets komt maken, dan helpt het om het meubel erbij te zetten: "keuken laten maken tilburg", "kast op maat laten maken tilburg" of "meubelmaker tilburg" leveren een andere uitslag op dan het beroep alleen.',
        },
        {
          q: 'Welk bouwjaar heeft mijn Tilburgse huis, en wat betekent dat voor maatwerk?',
          a: 'Het bouwjaar van een woning staat in de Basisregistratie Adressen en Gebouwen en is per adres gratis op te vragen; voor de hele gemeente zijn de cijfers openbaar. Van de 107.966 Tilburgse woningen op 1 januari 2026 is 16,8 procent van vóór 1945, en 29,6 procent komt uit 1945 tot 1975. Grofweg: bij een vooroorlogs pand is de vraag of de vlakken recht zijn, bij een naoorlogse woning of appartement of de centimeters passen — en die zijn daar het schaarst, met gemiddeld 97 vierkante meter voor de bouwjaren 1945 tot 1955 en 73 voor een appartement. Dat is een waarschijnlijkheid en geen uitspraak over jouw huis: of de muur haaks staat en of de vloer wegloopt, blijkt bij de inmeting en niet uit een bouwjaar.',
        },
        {
          q: 'Wanneer heb ik géén interieurbouwer nodig?',
          a: 'Als wat je wilt binnen het raster van een systeemkast past. Bij het IKEA METOD-keukensysteem is dat concreet: onderkasten van 20 tot 80 centimeter breed, een romp van 80 centimeter op een poot van 8, en hoge kasten die op 208 of 228 centimeter boven de vloer eindigen (uitgelezen op de productpagina\'s van IKEA op 15 september 2026). Is de wand recht en vrij, past de maat in die stappen en blijft het plafond binnen bereik, dan koop je sneller en goedkoper iets wat past. Het wordt pas interessant zodra de ruimte de maat dicteert: een aflopende vloer, een plint die blijft zitten, een schoorsteen in de wand, een schuin dak, of een plafond waar geen systeemkast bij komt.',
        },
        {
          q: 'Werkt een interieurbouwer uit Terheijden ook in Tilburg?',
          a: 'Ja. De werkplaats staat aan de Bredaseweg in Terheijden, 25 kilometer van Tilburg, en Tilburg valt binnen het kerngebied West- en Noord-Brabant; levering gaat door heel Nederland. Praktisch betekent dat: kennismaking en inmeten bij jou thuis in Tilburg, gratis en vrijblijvend, daarna tekenen en een prijsopgave, productie in Terheijden, en montage in Tilburg door JDG zelf. De rit hoort bij de kennismaking. Ook de kernen en wijken rond de stad vallen eronder; <a href="/werkgebied">het volledige werkgebied</a> staat op een eigen pagina.',
        },
      ],
      bronregel:
        'Bronnen bij dit antwoord, alle drie na te rekenen. De woningcijfers komen uit CBS-tabel 82550NED ("Voorraad woningen; gemiddeld oppervlak; woningtype, bouwjaarklasse, regio"), gemeente Tilburg, peildatum 1 januari 2026, cijfers uit de Basisregistratie Adressen en Gebouwen; opgehaald op 3 oktober 2026 met scripts/meting-woningvoorraad-tilburg.mjs, dat elk getal op deze pagina tegen de tabel natelt. De zoekuitslag is de Nederlandse Google-uitslag op "interieurbouwer tilburg" van 3 oktober 2026 (Nederland, Nederlands, desktop), een waarneming van DataForSEO en niet van ons; de momentopname en de telling staan in scripts/meting-serp-interieurbouwer-tilburg.mjs. Het maatraster van IKEA METOD is op 15 september 2026 van de eigen productpagina\'s van IKEA gelezen, met een schermafdruk per maat. Bedragen staan hier niet: een prijsopgave volgt na het inmeten.',
      verwijzing:
        'Welk probleem een interieurbouwer in een Tilburgse woning moet oplossen, en waarom het bouwjaar dat bepaalt, staat uitgewerkt in <a href="/werkgebied/tilburg">het antwoord over een interieurbouwer in Tilburg</a>.',
    },
  },
]

/** De verdiepte antwoordeenheid van deze stadpagina, of null. */
export const stadseenheidVoor = (stad: string) =>
  stadseenheden.find((s) => s.stad === stad)?.eenheid ?? null
