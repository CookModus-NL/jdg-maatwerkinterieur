import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description: 'Hoe JDG Maatwerk Interieur omgaat met jouw persoonsgegevens.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <article className="container-tight">
        <div className="eyebrow">Juridisch</div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
          Privacyverklaring
        </h1>
        <p className="mt-4 text-primary-500 text-sm">Laatst bijgewerkt: 29 mei 2026</p>

        <div className="mt-12 space-y-8 text-primary-700 leading-relaxed">
          <p>
            {business.legalName} (KvK {business.kvk}) respecteert je privacy en verwerkt persoonsgegevens alleen volgens de AVG. Op deze pagina lees je welke gegevens we verzamelen, waarom en hoe lang.
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Verwerkingsverantwoordelijke</h2>
            <p className="mt-3">
              {business.legalName}<br/>
              {business.address.street}<br/>
              {business.address.postalCode} {business.address.city}<br/>
              KvK: {business.kvk}<br/>
              E-mail: {business.email}<br/>
              Telefoon: {business.phone}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Welke gegevens verzamel ik?</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong>WhatsApp en telefoon:</strong> als je contact opneemt, sla ik je naam, telefoonnummer en de inhoud van het gesprek op. Alleen om je aanvraag te beantwoorden en het werk goed in te plannen.</li>
              <li><strong>E-mail:</strong> als je mailt, bewaar ik je e-mailadres en bericht voor dezelfde reden.</li>
              <li><strong>Adresgegevens:</strong> zodra je een offerte of opdracht aanvraagt, heb ik het projectadres nodig voor opmeten en plannen.</li>
              <li><strong>Cookies:</strong> ik gebruik alleen technische cookies. Voor bezoekersstatistiek gebruik ik Vercel Analytics. Dat werkt zonder persoonlijke identificatie en zonder tracking-cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Bewaartermijnen</h2>
            <p className="mt-3">
              Contactaanvragen bewaar ik maximaal 12 maanden. Leidt je aanvraag tot een opdracht, dan worden je gegevens opgenomen in mijn klantadministratie. Die bewaar ik 7 jaar conform de wettelijke fiscale bewaarplicht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Jouw rechten</h2>
            <p className="mt-3">
              Je hebt het recht je gegevens in te zien, te corrigeren of te laten verwijderen. Stuur daarvoor een mail naar {business.email}. Ik reageer binnen 30 dagen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Doorgifte aan derden</h2>
            <p className="mt-3">
              Ik verkoop je gegevens niet door. Ik deel ze alleen met derden als dat nodig is voor de uitvoering van de opdracht (bijvoorbeeld een leverancier voor materialen) of als de wet dat verplicht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Klachten</h2>
            <p className="mt-3">
              Komen we er samen niet uit? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens via{' '}
              <a href="https://www.autoriteitpersoonsgegevens.nl" className="text-accent-600 underline" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
            </p>
          </section>
        </div>
      </article>
    </section>
  )
}
