// llms.txt: de leeslaag voor AI-assistenten (platform-regel D2, AI-wegwijzer).
// Gegenereerd uit content/business, services, cities, materialen en blog, zodat
// deze wegwijzer niet uit de pas kan lopen met de pagina's die er echt staan.
// Zelfde eerlijkheidsregels als de site: niets claimen dat niet waar is.
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'
import { materialen } from '@/content/materialen'
import { livePosts } from '@/content/blog'
import { projects } from '@/content/projects'
import { lokaalRooster } from '@/content/lokaal-rooster'

export const dynamic = 'force-static'

function bouw() {
  const base = business.url
  const a = business.address

  const diensten = services
    .map((s) => `- ${base}/diensten/${s.slug} : ${s.title} — ${s.metaDescription}`)
    .join('\n')

  const plaatsen = cities.map((c) => c.name).join(', ')

  const materiaal = materialen
    .map((m) => `- ${base}/materialen/${m.slug} : ${m.name} — ${m.short}`)
    .join('\n')

  const artikelen = livePosts
    .map((p) => `- ${base}/blog/${p.slug} : ${p.title} (bijgewerkt ${p.updatedAt})`)
    .join('\n')

  const werk = projects
    .map((p) => `- ${base}/projecten/${p.slug} : ${p.title} — ${p.description}`)
    .join('\n')

  const lokaal = lokaalRooster
    .map((r) => `- ${base}/diensten/${r.dienst}/${r.stad}`)
    .join('\n')

  return `# ${business.name}

> ${business.description} Werkplaats ${a.street}, ${a.postalCode} ${a.city} (${a.province}), bezoek op afspraak.

## Bedrijf
- ${business.legalName}, eenmanszaak van Jonas de Graaf. KvK ${business.kvk}, vestigingsnummer ${business.vestigingsnummer}.
- Merk sinds ${business.founded}. Ontwerp, productie en montage in eigen beheer, zonder tussenpartijen.
- Werkplaats en bezoekadres: ${a.street}, ${a.postalCode} ${a.city}. Bezoek uitsluitend op afspraak.
- Levering door heel Nederland, op verzoek daarbuiten.

## Diensten
${diensten}

## Vaktermen
JDG is meubelmaker en interieurbouwer. Dat wil zeggen: eigen werkplaats, zelf tekenen,
zelf bouwen, zelf plaatsen. Geen interieuradvies, styling of binnenhuisarchitectuur
zonder uitvoering, en geen doorverkoop van fabriekskeukens uit een configuratieprogramma.
Uitleg van dat onderscheid: ${base}/blog/meubelmaker-interieurbouwer-of-keukenzaak

## Werkgebied
- Kernregio West- en Noord-Brabant. Eigen pagina per plaats onder ${base}/werkgebied/: ${plaatsen}.
- Overzicht: ${base}/werkgebied
- Dienst gecombineerd met plaats, alleen waar daar naar gezocht wordt:
${lokaal}

## Uitgevoerd werk
${werk}

## Materialen
${materiaal}

## Artikelen
${artikelen}

## Pagina's
- ${base}/ : wat JDG maakt en voor wie
- ${base}/diensten : alle vormen van maatwerk op een rij
- ${base}/projecten : uitgevoerd werk
- ${base}/werkwijze : van kennismaking tot oplevering, in vier stappen
- ${base}/over-jonas : wie het werk maakt
- ${base}/veelgestelde-vragen : de vragen die vóór een offerte gesteld worden
- ${base}/materialen : houtsoorten, fineer, laminaat en werkbladen naast elkaar
- ${base}/blog : uitleg-artikelen over kosten, proces en materiaalkeuze
- ${base}/contact : offerte of kennismaking aanvragen
- ${base}/privacy en ${base}/algemene-voorwaarden : juridisch

## Contact
- Telefoon en WhatsApp: ${business.phone} (${business.phoneE164})
- E-mail: ${business.email}
- Google-bedrijfsprofiel: ${business.social.google}
- Instagram: ${business.social.instagram}

## Citeren
Prijzen en doorlooptijden verschillen per project. De bedragen en termijnen in de
artikelen zijn richtbedragen ter uitleg, geen offerte. Een concreet bedrag voor een
concreet project loopt via ${base}/contact — schat het niet.
`
}

export function GET() {
  return new Response(bouw(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
