import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'Algemene voorwaarden van JDG Maatwerk Interieur, gevestigd te Terheijden.',
}

export default function AVPage() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <article className="container-tight">
        <div className="eyebrow">Juridisch</div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
          Algemene voorwaarden
        </h1>
        <p className="mt-4 text-primary-600">
          {business.legalName} · KvK {business.kvk} · Vestigingsadres: {business.address.street}, {business.address.postalCode} {business.address.city}
        </p>

        <div className="mt-12 space-y-10 text-primary-700 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 1 – Definities</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li><strong>JDG Maatwerk Interieur</strong>: de onderneming gevestigd te Terheijden, ingeschreven bij de Kamer van Koophandel onder nummer {business.kvk}.</li>
              <li><strong>Opdrachtgever</strong>: iedere natuurlijke persoon of rechtspersoon die werkzaamheden laat uitvoeren door JDG Maatwerk Interieur.</li>
              <li><strong>Werkzaamheden</strong>: alle overeengekomen ontwerp-, productie-, montage- en plaatsingswerkzaamheden voor maatwerk meubels, keukens, kasten, trapkasten, tv-meubels en aanverwant interieurwerk.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 2 – Toepasselijkheid</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten, werkzaamheden, leveringen en diensten van JDG Maatwerk Interieur.</li>
              <li>Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk overeengekomen.</li>
              <li>Eventuele algemene voorwaarden van opdrachtgever worden uitdrukkelijk van de hand gewezen.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 3 – Offertes en overeenkomsten</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Alle offertes zijn vrijblijvend tenzij schriftelijk anders vermeld.</li>
              <li>Offertes zijn gebaseerd op de op dat moment bekende informatie, opgegeven maten, materiaalkeuze en omstandigheden.</li>
              <li>Een overeenkomst komt tot stand zodra opdrachtgever mondeling, schriftelijk, digitaal of via WhatsApp akkoord geeft op een offerte of opdrachtbevestiging.</li>
              <li>Maatvoering en materiaalkeuze zijn pas definitief na het inmeten op locatie en schriftelijke bevestiging.</li>
              <li>Kennelijke fouten of vergissingen in offertes binden JDG Maatwerk Interieur niet.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 4 – Aanbetaling en productie</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur is gerechtigd een aanbetaling te verlangen van maximaal 50% van de overeengekomen prijs voor het bestellen van materialen en het starten van de productie.</li>
              <li>Productie start pas na ontvangst van de aanbetaling en schriftelijk akkoord op de definitieve maatvoering.</li>
              <li>Door de aard van maatwerk is annulering of wijziging na start van de productie niet mogelijk zonder vergoeding van de reeds gemaakte kosten.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 5 – Planning en annulering</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur reserveert tijd, capaciteit en productieruimte specifiek voor opdrachtgever.</li>
              <li>Opdrachtgever dient ervoor zorg te dragen dat de plaatsing op de afgesproken datum direct kan worden uitgevoerd.</li>
              <li>Annulering of verplaatsing van de plaatsing dient minimaal 5 werkdagen voor aanvang schriftelijk gemeld te worden.</li>
              <li>
                Bij annulering binnen:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>5 tot 2 werkdagen voor aanvang: maximaal 50% van de gereserveerde dagvergoeding;</li>
                  <li>48 uur voor aanvang of minder: maximaal € 400 inclusief btw per ingeplande vakman per dag.</li>
                </ul>
              </li>
              <li>Deze vergoeding geldt uitsluitend indien de vrijgevallen planning redelijkerwijs niet meer kan worden opgevuld.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 6 – Verplichtingen opdrachtgever</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>
                Opdrachtgever zorgt ervoor dat:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>de werkplek goed bereikbaar is voor het aanvoeren van meubels en materialen;</li>
                  <li>de ruimte voldoende leeg en werkbaar is;</li>
                  <li>water en stroom beschikbaar zijn voor de werkzaamheden;</li>
                  <li>muren, vloeren en ondergronden waar het maatwerk aan bevestigd wordt geschikt en draagkrachtig zijn;</li>
                  <li>aansluitpunten voor sanitair, elektra en apparatuur op de afgesproken plek aanwezig zijn.</li>
                </ul>
              </li>
              <li>Vertraging ontstaan door derden komt volledig voor rekening en risico van opdrachtgever.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 7 – Uitvoering werkzaamheden</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur voert werkzaamheden uit naar beste inzicht, vakmanschap en professionele normen.</li>
              <li>Kleine kleur-, maat-, nerf- of structuurverschillen in hout, fineer of plaatmateriaal vallen binnen normale toleranties en vormen geen grond voor afkeuring.</li>
              <li>Werking van massief hout (krimpen, uitzetten, kleuren) is een eigenschap van het materiaal en geen gebrek.</li>
              <li>JDG Maatwerk Interieur heeft het recht werkzaamheden geheel of gedeeltelijk door derden te laten uitvoeren.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 8 – Meerwerk</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Werkzaamheden buiten de oorspronkelijke opdracht worden beschouwd als meerwerk.</li>
              <li>Meerwerk wordt afzonderlijk gefactureerd tegen het geldende tarief.</li>
              <li>Mondeling of digitaal overeengekomen meerwerk is bindend.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 9 – Betaling</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Facturen dienen binnen 7 dagen na factuurdatum te worden voldaan tenzij schriftelijk anders overeengekomen.</li>
              <li>Bij niet tijdige betaling is opdrachtgever van rechtswege in verzuim.</li>
              <li>Wettelijke rente, incassokosten en gerechtelijke kosten komen volledig voor rekening van opdrachtgever.</li>
              <li>JDG Maatwerk Interieur heeft het recht werkzaamheden op te schorten totdat volledige betaling heeft plaatsgevonden.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 10 – Oplevering en klachten</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Werkzaamheden gelden als opgeleverd zodra opdrachtgever het werk in gebruik neemt, akkoord geeft of JDG Maatwerk Interieur redelijkerwijs heeft aangegeven dat het werk gereed is.</li>
              <li>Klachten dienen binnen 5 werkdagen na oplevering schriftelijk gemeld te worden.</li>
              <li>Klachten geven opdrachtgever geen recht betalingsverplichtingen op te schorten.</li>
              <li>Kleine esthetische afwijkingen of normale eigenschappen van materialen vormen geen reden voor afkeuring.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 11 – Aansprakelijkheid</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur is uitsluitend aansprakelijk voor directe schade veroorzaakt door aantoonbare opzet of grove nalatigheid.</li>
              <li>Aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende werkzaamheden.</li>
              <li>
                JDG Maatwerk Interieur is niet aansprakelijk voor:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>gevolgschade en indirecte schade;</li>
                  <li>vertragingen door derden;</li>
                  <li>werking van massief hout en plaatmateriaal;</li>
                  <li>schade door vocht, temperatuur of zonlicht;</li>
                  <li>schade veroorzaakt door materialen die door opdrachtgever zijn aangeleverd.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 12 – Overmacht</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur is niet aansprakelijk voor vertragingen of tekortkomingen als gevolg van overmacht.</li>
              <li>
                Onder overmacht wordt onder andere verstaan: ziekte, weersomstandigheden, verkeersproblemen, materiaaltekorten, storingen, uitval van leveranciers, overheidsmaatregelen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 13 – Garantie</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>JDG Maatwerk Interieur verleent 5 jaar garantie op de constructie en plaatsing van het geleverde maatwerk, mits correct gebruikt en onderhouden.</li>
              <li>Op beslag (scharnieren, geleiders, sluitwerk) geldt de fabrieksgarantie van de leverancier.</li>
              <li>
                Garantie vervalt indien:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>derden werkzaamheden uitvoeren aan het geleverde werk;</li>
                  <li>schade ontstaat door onjuist gebruik of overbelasting;</li>
                  <li>sprake is van vocht, temperatuurwisselingen of werking van materialen buiten normaal gebruik;</li>
                  <li>onderhoudsinstructies niet worden opgevolgd.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 14 – Eigendomsvoorbehoud</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Alle geleverde meubels, materialen en gemonteerde elementen blijven eigendom van JDG Maatwerk Interieur totdat volledige betaling heeft plaatsgevonden.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 15 – Toepasselijk recht en geschillen</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.</li>
              <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waarin JDG Maatwerk Interieur gevestigd is.</li>
            </ol>
          </section>
        </div>
      </article>
    </section>
  )
}
