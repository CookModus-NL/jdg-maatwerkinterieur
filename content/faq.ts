export type FAQ = {
  q: string
  a: string
  category: 'algemeen' | 'proces' | 'materialen' | 'levering' | 'garantie'
  /** Optionele verdieping: een pagina die deze vraag volledig uitwerkt. */
  meer?: { label: string; href: string }
}

export const faqs: FAQ[] = [
  { category: 'algemeen', q: 'Wat maakt JDG Maatwerk Interieur?',
    a: 'JDG maakt keukens op maat, kledingkasten, inloopkasten, TV-meubels, boekenkasten en badkamermeubels. Alles wordt ontworpen, geproduceerd in de eigen werkplaats in Terheijden en op locatie gemonteerd, door heel Nederland en op verzoek daarbuiten.' },
  { category: 'algemeen', q: 'Waar is JDG gevestigd?',
    a: 'De werkplaats staat aan de Bredaseweg 47 in Terheijden (Noord-Brabant), gemeente Drimmelen. Bezoek is uitsluitend op afspraak.' },
  { category: 'algemeen', q: 'Werkt JDG in heel Nederland?',
    a: 'Ja. Vanuit Terheijden komen we bij projecten in heel Nederland. West-Brabant en Noord-Brabant zijn de primaire werkgebieden, maar we werken structureel in de Randstad, Zeeland, Utrecht en Gelderland. Ook kleine projecten in het buitenland zijn welkom.' },
  { category: 'proces', q: 'Hoe werkt het traject van eerste gesprek tot oplevering?',
    a: 'Vier stappen: vrijblijvend kennismakingsgesprek, offerte en ontwerp, productie in de werkplaats, plaatsing bij jou. Totaal doorlooptijd is meestal zes tot tien weken, afhankelijk van omvang.' },
  { category: 'proces', q: 'Hoeveel kost het eerste gesprek en de offerte?',
    a: 'Een eerste gesprek en offerte zijn altijd gratis en vrijblijvend. Pas als je akkoord geeft op het definitieve ontwerp en de offerte begint de productie.' },
  { category: 'proces', q: 'Moet ik aanbetalen, en wanneer betaal ik de rest?',
    a: 'Voor particuliere opdrachtgevers geldt, tenzij in de offerte anders is overeengekomen, een verdeling in drie: 50 procent na akkoord op de offerte, 40 procent bij levering van de voornaamste maatwerkonderdelen op locatie en aanvang van de montage, en 10 procent na oplevering (algemene voorwaarden, artikel 4). Facturen worden binnen zeven dagen betaald, tenzij schriftelijk iets anders is afgesproken.',
    meer: { label: 'Moet ik aanbetalen, en wanneer betaal ik de rest?', href: '/blog/aanbetaling-en-betaaltermijnen-maatwerk' } },
  { category: 'algemeen', q: 'Wat is het verschil tussen een keuken op maat en een standaard- of IKEA-keuken?',
    a: 'Het verschil is een maatraster. Een standaardkeuken wordt gebouwd uit kasten in vaste breedtes, bij het METOD-systeem van IKEA 20, 30, 40, 60 en 80 cm, dus is de som van je kasten altijd een veelvoud van tien centimeter. Jouw muur is dat zelden. Wat overblijft wordt een passtuk, een open strook of een kast die je laat vallen. Een keuken op maat heeft dat raster niet. Of dat verschil de moeite waard is, hangt af van hoe groot de rest op jouw muur is en of de muur recht staat.',
    meer: { label: 'Keuken op maat of een standaard- of IKEA-keuken: het verschil in centimeters', href: '/blog/keuken-op-maat-of-ikea-keuken' } },
  { category: 'proces', q: 'Kan JDG bestaand meubilair verbouwen of aanvullen?',
    a: 'Ja, waar dit mogelijk is kunnen we bestaande onderdelen voorzien van maatwerk oplossingen. Ook bestaande kasten (bijv. IKEA Pax) kunnen aangevuld worden met maatwerk delen.' },
  { category: 'materialen', q: 'Welke materialen gebruikt JDG voor keukens en kasten?',
    a: 'Corpussen in stabiel plaatmateriaal, fronten in lak, fineer, deco legno, HPL of massief hout. Werkbladen in composiet, keramiek, natuursteen of hout. Beslag van Blum of gelijkwaardig, altijd soft-close.' },
  { category: 'materialen', q: 'Kan ik mijn eigen kleur of frontmateriaal kiezen?',
    a: 'Ja. RAL-kleuren, NCS, of specifieke leveranciers-decors zijn allemaal mogelijk. Bij het ontwerpgesprek nemen we materiaalstalen en kleurkaarten door.' },
  { category: 'levering', q: 'Hoe lang duurt het van opdracht tot montage?',
    a: 'Reken op zes tot tien weken doorlooptijd voor een gemiddeld project. Grote keukens of complexe zolderinbouw kunnen twaalf weken duren. Kleine projecten soms binnen vier weken.' },
  { category: 'levering', q: 'Wie zorgt voor de montage?',
    a: 'JDG regelt de montage volledig. De monteurs zijn vaste vakmensen die op de werkplaats en op locatie werken. Aansluitingen van gas, water, elektra en afzuiging worden in overleg geregeld.',
    meer: { label: 'Alleen laten maken en zelf monteren: kan dat bij maatwerk?', href: '/blog/zelf-monteren-of-alleen-laten-maken' } },
  { category: 'garantie', q: 'Wat is de garantie op maatwerk van JDG?',
    a: 'Op de constructie geeft JDG vijf jaar garantie. Op ingekochte onderdelen (scharnieren, lades, apparatuur) geldt de fabrieksgarantie, meestal twee tot tien jaar. Bij correct gebruik gaat een JDG kast of keuken twintig tot dertig jaar mee.' },
  { category: 'garantie', q: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?',
    a: 'Dat hangt af van wie de maat heeft genomen. Heeft JDG ingemeten, dan is de maatvoering het werk van JDG, en jouw goedkeuring van de tekening ontslaat JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten (algemene voorwaarden, artikel 3, lid 6). Lever jij de maten of tekeningen aan, dan mag JDG in beginsel uitgaan van de juistheid daarvan (artikel 3, leden 3 en 4). En is het maatwerk goed maar de muur niet recht, dan is een klein noodzakelijk aansluitverschil geen gebrek zolang functionaliteit, duurzaamheid en de overeengekomen uitstraling niet wezenlijk worden aangetast (artikel 9, lid 6).',
    meer: { label: 'Wat gebeurt er als de maat niet klopt of iets niet past bij de montage?', href: '/blog/keuken-of-kast-past-niet-verkeerd-ingemeten' } },
  { category: 'garantie', q: 'Wat als er iets kapot gaat na oplevering?',
    a: 'Bel of mail direct. Kleine gebreken worden binnen twee weken opgelost. Voor onderdelen die vervangen moeten worden hebben we contact met dezelfde leveranciers, zodat kleuren en materialen exact matchen.' },
]

export const faqsForSchema = faqs.slice(0, 20)
