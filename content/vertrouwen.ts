/**
 * De vertrouwensstrook: wie het maakt, waar, sinds wanneer, en onder welk
 * KvK-nummer. Toegevoegd 09-09-2026 (interventiecontract e3ee8441).
 *
 * WAAROM DIT BESTAND BESTAAT.
 * Gemeten op 09-09-2026 door de crawl van de motor: op 8 van de 40 pagina's van
 * deze site staat een vertrouwenselement in de HOOFDINHOUD; op 30 commerciële
 * pagina's niet. Het KvK-nummer stond tot vandaag alleen in de voettekst, op
 * /privacy en in de algemene voorwaarden — nergens op de pagina waar een zoeker
 * binnenkomt en besluit of hij deze meubelmaker een appje stuurt.
 *
 * WAT ER BEWUST NIET IN STAAT.
 * Geen garantietermijn: het feit `jdg-garantie` wacht op een handtekening van
 * Jonas (DE WET art. 1.3, ACTIE-20260907-JDG-GARANTIE-VRAAG). Geen reviews of
 * sterren: er is nog geen publiceerbare klantervaring. Geen prijs. Elke zin
 * hieronder komt letterlijk uit een bruikbaar feit in motor_feiten en niets
 * anders.
 *
 * WAAROM NIET OP ALLE ZES DE DIENSTPAGINA'S.
 * Dit is een proef met een referentiegroep. De strook komt op /diensten en op de
 * vier dienstpagina's hieronder; /diensten/keukens-op-maat en
 * /diensten/badkamermeubels-op-maat blijven in het meetvenster ONGEWIJZIGD en
 * zijn de referentie. Wie hier een slug bijzet vóór het oordeel op t+28,
 * vernietigt de meting.
 */

import { business } from './business'
import type { DienstSlug } from './dienst-slugs'

/** Dienstpagina's die de strook krijgen. De twee andere zijn de referentie. */
export const vertrouwenClusterSlugs: DienstSlug[] = [
  'kledingkasten-op-maat',
  'inloopkasten-op-maat',
  'tv-meubels-op-maat',
  'boekenkasten-en-wandmeubels',
]

/** Dienstpagina's die in het meetvenster met opzet niets krijgen. */
export const vertrouwenReferentieSlugs: DienstSlug[] = [
  'keukens-op-maat',
  'badkamermeubels-op-maat',
]

export function heeftVertrouwensstrook(slug: string): boolean {
  return (vertrouwenClusterSlugs as readonly string[]).includes(slug)
}

/**
 * De vier regels van de strook. `bron` verwijst naar de sleutel in
 * motor_feiten; wie een regel wijzigt, wijzigt eerst dat feit.
 */
export type Vertrouwensregel = { label: string; waarde: string; bron: string }

export const vertrouwensregels: Vertrouwensregel[] = [
  {
    label: 'Wie het maakt',
    waarde: 'Jonas de Graaf. Wat hij tekent, bouwt hij; wat hij bouwt, monteert hij zelf.',
    bron: 'jdg-persoon-jonas + jdg-principe-tussenlagen',
  },
  {
    label: 'Waar het gemaakt wordt',
    waarde: `Eigen werkplaats, ${business.address.street}, ${business.address.postalCode} ${business.address.city}. Bezoek op afspraak.`,
    bron: 'jdg-gbp-adresconflict (getekend door Bart namens Jonas, 27-08-2026)',
  },
  {
    label: 'In het vak sinds',
    waarde: `2008, begonnen aan de BBL interieurbouw. JDG zelf bestaat sinds ${business.founded}.`,
    bron: 'jdg-persoon-jonas + jdg-kvk',
  },
  {
    label: 'Ingeschreven als',
    waarde: `${business.legalName}, KvK ${business.kvk}, vestigingsnummer ${business.vestigingsnummer}.`,
    bron: 'jdg-kvk + jdg-gbp-adresconflict',
  },
]
