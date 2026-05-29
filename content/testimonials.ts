/**
 * Testimonials voor JDG Maatwerk Interieur.
 * Leeg totdat er echte Google reviews zijn — we tonen liever niets dan iets verzonnens.
 *
 * Voeg een testimonial toe nadat je een review hebt ontvangen:
 *   - Vraag toestemming aan klant
 *   - Plak hier de tekst + naam + plaats + project
 *   - Site is automatisch geüpdatet bij volgende deploy
 */

export type Testimonial = {
  text: string
  author: string
  location: string
  project: string
  rating: 5
}

export const testimonials: Testimonial[] = []
