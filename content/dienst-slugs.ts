/**
 * De zes dienst-slugs, los van services.ts.
 *
 * Waarom apart: next.config.ts moet weten welke dienst×stad-combinaties er
 * bestaan om de gesnoeide combinaties te kunnen omleiden, en services.ts
 * importeert lucide-react — dat laadt niet in de configlaag. Dit bestand heeft
 * bewust nul imports. services.ts typt zijn slug hiertegen, dus de twee kunnen
 * niet uit elkaar lopen zonder dat TypeScript klaagt.
 */
export const dienstSlugs = [
  'keukens-op-maat',
  'kledingkasten-op-maat',
  'inloopkasten-op-maat',
  'tv-meubels-op-maat',
  'boekenkasten-en-wandmeubels',
  'badkamermeubels-op-maat',
] as const

export type DienstSlug = (typeof dienstSlugs)[number]
