import { business } from '@/content/business'

export const metadata = {
  title: 'Algemene voorwaarden',
  description: 'Algemene voorwaarden van JDG Maatwerk Interieur — eenmanszaak van Jonas de Graaf, Terheijden. Versie 5 augustus 2026.',
  alternates: { canonical: `${business.url}/algemene-voorwaarden` },
  robots: { index: true, follow: true },
}

const VERSIE = '5 augustus 2026'

function Article({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl text-ink-950 leading-tight">
        Artikel {n}. {title}
      </h2>
      <div className="mt-6 text-[15.5px] leading-[1.75] text-ink-800 space-y-3">
        {children}
      </div>
    </section>
  )
}

export default function AlgemeneVoorwaarden() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <span className="eyebrow">Algemene voorwaarden</span>
              <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.94] tracking-[-0.02em] text-ink-950">
                Duidelijke afspraken
                <br />
                voor goed <span className="text-jdg-700">maatwerk</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-ink-700">
                Maatwerk vraagt om vakmanschap, precisie en duidelijke afspraken. Deze algemene voorwaarden beschrijven wat opdrachtgever en JDG Maatwerk Interieur van elkaar mogen verwachten. Daarbij staat een goede samenwerking voorop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-12">
            <aside className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-28 rounded-xl border border-ink-900/12 bg-paper-2 p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-jdg-700">Bedrijfsgegevens</span>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div>
                    <dt className="text-ink-500">Bedrijf</dt>
                    <dd className="mt-0.5 text-ink-950 font-medium">JDG Maatwerk Interieur</dd>
                  </div>
                  <div>
                    <dt className="text-ink-500">Eenmanszaak van</dt>
                    <dd className="mt-0.5 text-ink-950 font-medium">Jonas de Graaf</dd>
                  </div>
                  <div>
                    <dt className="text-ink-500">Adres</dt>
                    <dd className="mt-0.5 text-ink-950">
                      Zeggelaan 47<br />
                      4844 SB Terheijden
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-500">KvK-nummer</dt>
                    <dd className="mt-0.5 text-ink-950 tabular">93463332</dd>
                  </div>
                  <div>
                    <dt className="text-ink-500">Versie</dt>
                    <dd className="mt-0.5 text-ink-950">{VERSIE}</dd>
                  </div>
                </dl>
              </div>
            </aside>

            <article className="col-span-12 lg:col-span-8 max-w-3xl">

              <Article n={1} title="Definities en toepasselijkheid">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG Maatwerk Interieur, hierna: JDG, is de eenmanszaak van Jonas de Graaf, gevestigd aan de Zeggelaan 47, 4844 SB Terheijden en ingeschreven bij de Kamer van Koophandel onder nummer 93463332.</li>
                  <li>Opdrachtgever is iedere natuurlijke persoon of rechtspersoon die aan JDG een opdracht verstrekt.</li>
                  <li>Consument is een opdrachtgever die niet handelt voor zakelijke of beroepsmatige doeleinden.</li>
                  <li>Werkzaamheden zijn alle overeengekomen ontwerp-, advies-, inmeet-, productie-, leverings-, montage- en plaatsingswerkzaamheden voor maatwerkinterieur.</li>
                  <li>Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten, overeenkomsten, leveringen en werkzaamheden van JDG.</li>
                  <li>Afwijkingen zijn alleen geldig wanneer deze schriftelijk of digitaal zijn overeengekomen.</li>
                  <li>Algemene voorwaarden van een zakelijke opdrachtgever worden uitdrukkelijk van de hand gewezen.</li>
                  <li>Dwingendrechtelijke wettelijke rechten van consumenten blijven altijd van toepassing.</li>
                </ol>
              </Article>

              <Article n={2} title="Offertes en totstandkoming van de overeenkomst">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Offertes van JDG zijn vrijblijvend en dertig dagen geldig, tenzij in de offerte anders staat.</li>
                  <li>De offerte is gebaseerd op de informatie, wensen, maten, tekeningen, materiaalkeuzes en omstandigheden die op dat moment bekend zijn.</li>
                  <li>De overeenkomst komt tot stand zodra opdrachtgever schriftelijk, digitaal, per e-mail of via WhatsApp akkoord geeft op de offerte of opdrachtbevestiging.</li>
                  <li>Productie begint pas nadat:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>de overeengekomen aanbetaling is ontvangen;</li>
                      <li>de definitieve maatvoering is vastgesteld;</li>
                      <li>de relevante tekeningen en materiaalkeuzes zijn goedgekeurd.</li>
                    </ul>
                  </li>
                  <li>Mondeling gemaakte aanvullende afspraken worden zo veel mogelijk schriftelijk bevestigd.</li>
                  <li>Kennelijke rekenfouten, verschrijvingen of vergissingen binden JDG niet wanneer opdrachtgever redelijkerwijs kon begrijpen dat sprake was van een fout.</li>
                  <li>Alleen de werkzaamheden, materialen en leveringen die in de offerte of opdrachtbevestiging staan, zijn in de prijs inbegrepen.</li>
                </ol>
              </Article>

              <Article n={3} title="Ontwerp, maatvoering en goedkeuring">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Wanneer JDG de maatvoering verzorgt, wordt deze zorgvuldig opgenomen op basis van de op dat moment aanwezige situatie.</li>
                  <li>Opdrachtgever meldt iedere wijziging aan muren, vloeren, plafonds, leidingen, aansluitpunten of andere relevante onderdelen die na het inmeten plaatsvindt.</li>
                  <li>Wanneer opdrachtgever zelf maten, tekeningen of technische gegevens aanlevert, mag JDG in beginsel uitgaan van de juistheid daarvan.</li>
                  <li>Gevolgen van onjuiste of onvolledige door opdrachtgever aangeleverde informatie komen voor rekening van opdrachtgever, tenzij JDG de fout kende of deze als vakman redelijkerwijs had moeten herkennen.</li>
                  <li>Door goedkeuring van een tekening bevestigt opdrachtgever de zichtbare indeling, maatvoering, draairichtingen, kleuren, materialen en overige keuzes.</li>
                  <li>Goedkeuring door opdrachtgever ontslaat JDG niet van verantwoordelijkheid voor eigen meet-, productie- of montagefouten.</li>
                  <li>Ontwerpen, tekeningen, renders en technische oplossingen blijven intellectueel eigendom van JDG en mogen zonder schriftelijke toestemming niet door derden worden uitgevoerd of gekopieerd.</li>
                </ol>
              </Article>

              <Article n={4} title="Aanbetaling en betalingstermijnen">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Voor particuliere opdrachtgevers geldt, tenzij in de offerte anders is overeengekomen, de volgende termijnregeling:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>50% na akkoord op de offerte;</li>
                      <li>40% bij levering van de voornaamste maatwerkonderdelen op locatie en aanvang van de montage;</li>
                      <li>10% na oplevering.</li>
                    </ul>
                  </li>
                  <li>Voor zakelijke opdrachtgevers kan in de offerte een andere termijnregeling worden opgenomen.</li>
                  <li>Facturen moeten binnen zeven dagen na factuurdatum worden betaald, tenzij schriftelijk een andere termijn is afgesproken.</li>
                  <li>JDG hoeft materialen niet te bestellen en de productie niet te starten voordat de eerste termijn is ontvangen.</li>
                  <li>Bij niet-tijdige betaling mag JDG de werkzaamheden na waarschuwing opschorten. De planning kan daardoor worden verschoven.</li>
                  <li>Een consument is pas incassokosten verschuldigd nadat hij een correcte schriftelijke betalingsherinnering heeft ontvangen en vervolgens gedurende minimaal veertien dagen niet heeft betaald.</li>
                  <li>Daarna zijn de wettelijke rente en de wettelijk toegestane incassokosten verschuldigd.</li>
                  <li>Een zakelijke opdrachtgever is na het verstrijken van de betalingstermijn de wettelijke handelsrente en redelijke incassokosten verschuldigd.</li>
                </ol>
              </Article>

              <Article n={5} title="Planning en levertijden">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG reserveert voor iedere opdracht specifieke productie- en montagetijd.</li>
                  <li>Opgegeven productie-, leverings- en montagedata zijn zorgvuldige planningen, maar geen fatale termijnen, tenzij schriftelijk uitdrukkelijk anders is overeengekomen.</li>
                  <li>De planning is mede afhankelijk van:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>tijdige betaling;</li>
                      <li>definitieve goedkeuring van tekeningen en materialen;</li>
                      <li>beschikbaarheid van materialen;</li>
                      <li>voortgang van andere vakmensen;</li>
                      <li>bereikbaarheid en gereedheid van de projectlocatie.</li>
                    </ul>
                  </li>
                  <li>JDG informeert opdrachtgever zo spoedig mogelijk wanneer de planning door onvoorziene omstandigheden wijzigt.</li>
                  <li>Vertraging die wordt veroorzaakt door opdrachtgever of door derden die door opdrachtgever zijn ingeschakeld, geeft JDG recht de werkzaamheden opnieuw in te plannen.</li>
                  <li>De verloren tijd en redelijke aanvullende kosten mogen aan opdrachtgever worden doorberekend.</li>
                </ol>
              </Article>

              <Article n={6} title="Gereedheid van de projectlocatie en verlet">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Opdrachtgever zorgt ervoor dat de projectlocatie op de afgesproken montage- of leveringsdatum volledig gereed, veilig en toegankelijk is.</li>
                  <li>Dit betekent onder meer dat:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>de ruimte voldoende leeg en bezemschoon is;</li>
                      <li>een vrije en veilige aanvoerroute beschikbaar is;</li>
                      <li>muren, vloeren en plafonds gereed, voldoende droog en uitgehard zijn;</li>
                      <li>stuc-, schilder-, tegel- en vloerwerk voldoende lang heeft kunnen drogen en uitharden;</li>
                      <li>de ruimte wind- en waterdicht is;</li>
                      <li>aansluitpunten voor elektra, water, afvoer, ventilatie en apparatuur op de overeengekomen plaats aanwezig zijn;</li>
                      <li>constructies waaraan het maatwerk wordt bevestigd voldoende draagkrachtig zijn;</li>
                      <li>elektriciteit en, indien nodig, water kosteloos beschikbaar zijn.</li>
                    </ul>
                  </li>
                  <li>Opdrachtgever meldt uiterlijk vijf werkdagen vóór de geplande plaatsing wanneer de locatie mogelijk niet tijdig gereed zal zijn.</li>
                  <li>Van verlet is sprake wanneer JDG of een door JDG ingeplande vakman op de afgesproken datum niet kan beginnen of niet normaal kan doorwerken door een omstandigheid aan de zijde van opdrachtgever. Daarvan is bijvoorbeeld sprake wanneer:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>muren kort daarvoor zijn gestukadoord en nog onvoldoende droog of uitgehard zijn;</li>
                      <li>schilder-, vloer- of tegelwerk niet gereed is;</li>
                      <li>aansluitpunten ontbreken of verkeerd zijn geplaatst;</li>
                      <li>andere vakmensen de werkruimte nog gebruiken;</li>
                      <li>de ruimte onvoldoende leeg of bereikbaar is;</li>
                      <li>opdrachtgever geen toegang kan verlenen;</li>
                      <li>de feitelijke situatie sinds het inmeten zonder overleg is gewijzigd.</li>
                    </ul>
                  </li>
                  <li>Bij verlet is opdrachtgever een vaste vergoeding verschuldigd van <strong className="text-ink-950">€ 350 exclusief btw per ingeplande vakman per verloren volledige werkdag</strong>. Bij het huidige btw-tarief van 21% is dit € 423,50 inclusief btw per vakman per dag.</li>
                  <li>Wanneer slechts een gedeelte van de dag verloren gaat, wordt de vergoeding naar verhouding berekend, met een minimum van een halve werkdag per ingeplande vakman.</li>
                  <li>Naast de verletvergoeding mogen aantoonbare en redelijke aanvullende kosten worden berekend, zoals extra transport-, opslag-, huur- of herplanningskosten.</li>
                  <li>JDG legt de oorzaak van het verlet zo veel mogelijk schriftelijk en met foto&apos;s vast.</li>
                  <li>De vergoeding wordt alleen berekend voor zover JDG de gereserveerde capaciteit niet redelijkerwijs elders heeft kunnen inzetten.</li>
                  <li>De verletvergoeding is niet verschuldigd wanneer het niet kunnen uitvoeren van de werkzaamheden aan JDG is toe te rekenen.</li>
                </ol>
              </Article>

              <Article n={7} title="Verplaatsen of annuleren van montage">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Verplaatsing van een reeds ingeplande montage wordt zo spoedig mogelijk schriftelijk gemeld.</li>
                  <li>Wanneer opdrachtgever de montage verplaatst:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>tussen vijf en twee werkdagen vóór aanvang, mag JDG 50% van de gereserveerde arbeidscapaciteit berekenen;</li>
                      <li>minder dan 48 uur vóór aanvang, mag JDG € 350 exclusief btw per ingeplande vakman per gereserveerde werkdag berekenen.</li>
                    </ul>
                  </li>
                  <li>Deze vergoeding geldt alleen voor zover de vrijgekomen capaciteit niet redelijkerwijs met ander betaald werk kon worden ingevuld.</li>
                  <li>Bij volledige beëindiging van de opdracht betaalt opdrachtgever het reeds verrichte werk, de speciaal bestelde of vervaardigde materialen, niet-annuleerbare leverancierskosten en overige redelijke projectkosten.</li>
                  <li>Voor zover sprake is van aanneming van werk, wordt bij opzegging afgerekend overeenkomstig de wettelijke regeling: de overeengekomen prijs verminderd met de kosten die JDG door de beëindiging daadwerkelijk bespaart.</li>
                  <li>JDG verstrekt op verzoek een redelijke toelichting op de afrekening.</li>
                </ol>
              </Article>

              <Article n={8} title="Wijzigingen en meerwerk">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Werkzaamheden en leveringen die niet in de oorspronkelijke offerte staan, gelden als meerwerk.</li>
                  <li>JDG informeert opdrachtgever vóór uitvoering zo duidelijk mogelijk over de kosten en gevolgen voor de planning.</li>
                  <li>Meerwerk kan schriftelijk, per e-mail, digitaal of via WhatsApp worden overeengekomen.</li>
                  <li>Wanneer nog geen vaste meerprijs kan worden bepaald, wordt het meerwerk uitgevoerd tegen het vooraf bekendgemaakte uurtarief en de werkelijk gebruikte materialen.</li>
                  <li>Opdrachtgever begrijpt dat wijzigingen na de start van de productie kunnen leiden tot:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>extra arbeids- en materiaalkosten;</li>
                      <li>onbruikbaar geworden onderdelen;</li>
                      <li>vertraging van de oplevering.</li>
                    </ul>
                  </li>
                  <li>Deze gevolgen komen voor rekening van opdrachtgever wanneer de wijziging door opdrachtgever is verzocht.</li>
                </ol>
              </Article>

              <Article n={9} title="Uitvoering en materialen">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG voert de werkzaamheden uit volgens goed vakmanschap en de gemaakte afspraken.</li>
                  <li>JDG mag gespecialiseerde werkzaamheden laten uitvoeren door geschikte derden.</li>
                  <li>Kleine verschillen in kleur, glans, maat, nerf, structuur of tekening van hout, fineer, plaatmateriaal, natuursteen en vergelijkbare materialen kunnen binnen normale professionele toleranties vallen.</li>
                  <li>Hout en houtachtige materialen kunnen onder invloed van licht, luchtvochtigheid en temperatuur beperkt verkleuren, krimpen, uitzetten of vervormen.</li>
                  <li>Dergelijke natuurlijke materiaaleigenschappen vormen geen gebrek voor zover zij binnen normale en professionele toleranties blijven.</li>
                  <li>Bestaande muren, vloeren en plafonds zijn niet altijd volledig recht of vlak. Kleine noodzakelijke aansluit- of maatverschillen vormen geen gebrek wanneer de functionaliteit, duurzaamheid en overeengekomen uitstraling niet wezenlijk worden aangetast.</li>
                  <li>JDG waarschuwt opdrachtgever wanneer een gewenste uitvoering naar professioneel inzicht ondeugdelijk, onveilig of technisch onverantwoord is.</li>
                </ol>
              </Article>

              <Article n={10} title="Oplevering en openstaande punten">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Na afronding bekijken JDG en opdrachtgever het werk zo mogelijk gezamenlijk.</li>
                  <li>Eventuele openstaande punten worden vastgelegd en binnen een redelijke termijn afgehandeld.</li>
                  <li>Een klein of ondergeschikt opleverpunt verhindert de oplevering niet wanneer:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>het werk veilig kan worden gebruikt;</li>
                      <li>de hoofdfunctionaliteit niet wordt aangetast;</li>
                      <li>het punt eenvoudig en binnen redelijke tijd kan worden hersteld.</li>
                    </ul>
                  </li>
                  <li>Een klein opleverpunt geeft opdrachtgever niet het recht om de volledige slotfactuur in te houden.</li>
                  <li>Opdrachtgever mag uitsluitend een redelijk bedrag inhouden dat in verhouding staat tot het betreffende opleverpunt en de verwachte herstelkosten.</li>
                  <li>Wanneer opdrachtgever niet aan een opleverafspraak meewerkt, mag JDG schriftelijk melden dat het werk gereed is en een redelijke termijn geven om het werk alsnog te controleren.</li>
                  <li>Ingebruikname van het werk kan als aanvaarding gelden voor duidelijk zichtbare punten, maar doet geen afbreuk aan rechten ten aanzien van verborgen gebreken.</li>
                </ol>
              </Article>

              <Article n={11} title="Klachten en herstel">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Opdrachtgever controleert het werk na oplevering en meldt gebreken zo spoedig mogelijk nadat deze zijn ontdekt.</li>
                  <li>Een klacht van een consument die binnen twee maanden na ontdekking wordt gemeld, geldt in ieder geval als tijdig.</li>
                  <li>Een klacht wordt bij voorkeur schriftelijk gemeld en voorzien van een duidelijke omschrijving en foto&apos;s.</li>
                  <li>JDG krijgt eerst een redelijke mogelijkheid om het vermeende gebrek te onderzoeken en, wanneer JDG daarvoor verantwoordelijk is, kosteloos te herstellen.</li>
                  <li>Opdrachtgever verleent daarvoor binnen redelijke grenzen toegang tot de projectlocatie.</li>
                  <li>Opdrachtgever laat het gebrek niet zonder voorafgaand overleg door een derde herstellen, behalve bij een acute noodsituatie of wanneer JDG na een redelijke schriftelijke termijn geen herstel uitvoert.</li>
                  <li>Wanneer opdrachtgever zonder noodzaak direct een derde inschakelt, hoeft JDG de daarmee gemoeide kosten niet te vergoeden voor zover JDG het gebrek zelf deugdelijk had kunnen herstellen.</li>
                </ol>
              </Article>

              <Article n={12} title="Garantie">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG verleent vijf jaar aanvullende garantie op de deugdelijke constructie en montage van het door JDG vervaardigde maatwerk.</li>
                  <li>De garantietermijn begint op de datum van oplevering.</li>
                  <li>De garantie geldt niet voor schade of gebreken die aantoonbaar zijn veroorzaakt door:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>normale slijtage;</li>
                      <li>onjuist gebruik of overbelasting;</li>
                      <li>gebrekkig onderhoud;</li>
                      <li>lekkage, bouwvocht of extreme vocht- en temperatuuromstandigheden;</li>
                      <li>beweging, verzakking of gebreken van het gebouw;</li>
                      <li>aanpassingen of werkzaamheden door derden;</li>
                      <li>materialen of apparatuur die door opdrachtgever zijn aangeleverd.</li>
                    </ul>
                  </li>
                  <li>Voor beslag, apparatuur, verlichting en andere ingekochte onderdelen geldt ten minste de fabrieksgarantie van de leverancier.</li>
                  <li>Voor consumenten blijft JDG het wettelijke aanspreekpunt voor onderdelen die JDG heeft geleverd.</li>
                  <li>Deze aanvullende garantie beperkt nooit de wettelijke garantie en overige wettelijke rechten van een consument.</li>
                </ol>
              </Article>

              <Article n={13} title="Aansprakelijkheid">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG is aansprakelijk voor directe schade die het gevolg is van een aan JDG toerekenbare tekortkoming.</li>
                  <li>JDG krijgt eerst een redelijke mogelijkheid om een tekortkoming te onderzoeken en te herstellen.</li>
                  <li>Voor zover wettelijk toegestaan, is de aansprakelijkheid beperkt tot het bedrag dat de aansprakelijkheidsverzekering in het betreffende geval uitkeert, vermeerderd met het toepasselijke eigen risico.</li>
                  <li>Wanneer de verzekering niet uitkeert, is de aansprakelijkheid beperkt tot het factuurbedrag van het gedeelte van de opdracht waarop de schade betrekking heeft.</li>
                  <li>JDG is niet aansprakelijk voor schade die uitsluitend ontstaat door:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>onjuiste of onvolledige informatie van opdrachtgever;</li>
                      <li>gebreken in door opdrachtgever aangeleverde materialen;</li>
                      <li>werkzaamheden van derden die niet door JDG zijn ingeschakeld;</li>
                      <li>verborgen gebreken in muren, vloeren, plafonds, leidingen of constructies die JDG redelijkerwijs niet kon kennen;</li>
                      <li>omstandigheden waartegen JDG vooraf aantoonbaar heeft gewaarschuwd.</li>
                    </ul>
                  </li>
                  <li>Tegenover zakelijke opdrachtgevers is JDG niet aansprakelijk voor indirecte schade, waaronder omzetverlies, winstderving en bedrijfsschade.</li>
                  <li>Aansprakelijkheid wordt niet beperkt bij opzet of bewuste roekeloosheid van JDG, overlijden of lichamelijk letsel en in andere gevallen waarin aansprakelijkheid wettelijk niet mag worden beperkt.</li>
                  <li>Dwingendrechtelijke consumentenrechten blijven onverminderd van toepassing.</li>
                </ol>
              </Article>

              <Article n={14} title="Overmacht">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>JDG is niet aansprakelijk voor vertraging of tekortkoming die wordt veroorzaakt door een omstandigheid buiten de redelijke invloedssfeer van JDG.</li>
                  <li>Onder overmacht kunnen, afhankelijk van de situatie, vallen:
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>onverwachte ernstige ziekte of letsel;</li>
                      <li>brand, storm, overstroming of andere calamiteiten;</li>
                      <li>ernstige verkeers- of vervoersstoringen;</li>
                      <li>stakingen;</li>
                      <li>uitval van essentiële machines of nutsvoorzieningen;</li>
                      <li>onverwachte materiaaltekorten of leveranciersuitval;</li>
                      <li>overheidsmaatregelen.</li>
                    </ul>
                  </li>
                  <li>JDG informeert opdrachtgever zo spoedig mogelijk en stelt waar mogelijk een nieuwe planning voor.</li>
                  <li>Tijdens overmacht worden de getroffen verplichtingen tijdelijk opgeschort.</li>
                  <li>Duurt de overmacht langer dan zestig dagen en is voortzetting redelijkerwijs niet meer mogelijk, dan mogen beide partijen het nog niet uitgevoerde gedeelte beëindigen.</li>
                  <li>Reeds deugdelijk uitgevoerd werk en specifiek voor het project ingekochte of vervaardigde materialen worden in dat geval afgerekend.</li>
                </ol>
              </Article>

              <Article n={15} title="Eigendom, persoonsgegevens en geschillen">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Losse en nog niet duurzaam gemonteerde materialen en meubels blijven eigendom van JDG totdat de daarop betrekking hebbende facturen volledig zijn betaald.</li>
                  <li>Voor onderdelen die door montage juridisch onderdeel van de woning zijn geworden, behoudt JDG zijn betalingsvordering en wettelijke incassorechten.</li>
                  <li>JDG verwerkt persoonsgegevens voor offertes, projectuitvoering, communicatie, facturatie, garantie en andere in de privacyverklaring beschreven doelen.</li>
                  <li>De volledige privacyverklaring staat afzonderlijk op de website van JDG.</li>
                  <li>Herkenbare personen, adressen of andere herleidbare privégegevens worden niet voor marketing gepubliceerd zonder een daarvoor geschikte wettelijke grondslag.</li>
                  <li>Toestemming voor herkenbare projectfoto&apos;s wordt afzonderlijk gevraagd en staat los van de opdracht.</li>
                  <li>Op alle overeenkomsten is Nederlands recht van toepassing.</li>
                  <li>Partijen proberen een geschil eerst door redelijk onderling overleg op te lossen.</li>
                  <li>Wanneer overleg geen oplossing biedt, wordt het geschil voorgelegd aan de rechter die volgens de Nederlandse wet bevoegd is.</li>
                  <li>Wanneer één bepaling ongeldig blijkt, blijven de overige bepalingen van toepassing.</li>
                </ol>
              </Article>

              <div className="mt-16 pt-8 border-t border-ink-900/15 text-[13.5px] text-ink-500 font-mono">
                <div>JDG Maatwerk Interieur</div>
                <div>Jonas de Graaf</div>
                <div>Zeggelaan 47, 4844 SB Terheijden</div>
                <div>KvK-nummer 93463332</div>
                <div className="mt-2">Versie: {VERSIE}</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
