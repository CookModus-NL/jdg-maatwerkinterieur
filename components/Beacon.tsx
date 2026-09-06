"use client";
import { useEffect } from "react";

// Anonieme conversieteller. Registreert dat er op een actiekanaal is geklikt, en
// sinds 6 sep 2026 óók waar die bezoeker binnenkwam. Nooit wie.
//
// Waarom die herkomst erbij moet: tot vandaag legde de beacon alleen vast op WELKE
// pagina geklikt werd. Van de zes conversies in het register is dat in vijf gevallen
// /contact of /, en dat is de pagina waar iedereen eindigt — niet de pagina die de
// bezoeker binnenbracht. Zonder entry_pagina is geen enkele gepubliceerde pagina toe
// te rekenen aan een aanvraag, en is elke uitspraak over rendement een schatting.
//
// sessionStorage, geen cookie: eerstepartij, verdwijnt als het tabblad sluit, bevat
// geen identificatie en wordt met niemand gedeeld. Daarmee valt dit buiten de
// toestemmingsplicht en verandert er niets aan de cookiebanner. De prijs is dat een
// bezoeker die morgen terugkomt als nieuw binnenkomen telt; dat is de eerlijke uitruil.
const REST = "https://igxiazraitpysendghds.supabase.co/rest/v1/motor_conversies";
const KEY = "sb_publishable_kGqGJeVlJpczYeF-ha-Bbg_zsTNlOjw";
const BEDRIJF = "jdg";
const HOK = "l3_herkomst";

type Herkomst = { entry_pagina: string; verwijzer: string; campagne: string | null };

function herkomst(): Herkomst {
  const leeg = { entry_pagina: location.pathname, verwijzer: "onbekend", campagne: null };
  try {
    const bestaand = sessionStorage.getItem(HOK);
    if (bestaand) return JSON.parse(bestaand) as Herkomst;

    // Alleen de host van de verwijzer, nooit de volledige URL: die kan zoektermen of
    // persoonsgegevens van een andere site bevatten.
    let verwijzer = "direct";
    if (document.referrer) {
      try {
        const h = new URL(document.referrer).hostname;
        verwijzer = h === location.hostname ? "direct" : h.replace(/^www\./, "");
      } catch { verwijzer = "onbekend"; }
    }
    const q = new URLSearchParams(location.search);
    const bron = q.get("utm_source");
    const camp = q.get("utm_campaign");
    const campagne = bron || camp ? [bron, camp].filter(Boolean).join(" / ").slice(0, 200) : null;

    const verse: Herkomst = { entry_pagina: location.pathname.slice(0, 300), verwijzer: verwijzer.slice(0, 120), campagne };
    sessionStorage.setItem(HOK, JSON.stringify(verse));
    return verse;
  } catch {
    return leeg; // privémodus of storage geweigerd: de conversie telt gewoon, zonder herkomst
  }
}

export default function Beacon() {
  useEffect(() => {
    herkomst(); // vastleggen bij binnenkomst, niet pas bij de klik

    const h = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let soort: string | null = null;
      if (href.startsWith("tel:")) soort = "bellen";
      else if (href.startsWith("mailto:")) soort = "email";
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) soort = "whatsapp";
      if (!soort) return;

      // Eén bezoeker die twee keer op dezelfde knop tikt is één contactintentie.
      // Zonder deze rem telt een dubbelklik als twee aanvragen en liegt het rendement.
      const merk = `l3_klik:${soort}:${location.pathname}`;
      try {
        const vorige = Number(sessionStorage.getItem(merk) || 0);
        if (Date.now() - vorige < 30000) return;
        sessionStorage.setItem(merk, String(Date.now()));
      } catch {}

      const hk = herkomst();
      try {
        fetch(REST, {
          method: "POST",
          keepalive: true,
          headers: { "Content-Type": "application/json", apikey: KEY, Authorization: "Bearer " + KEY, Prefer: "return=minimal" },
          body: JSON.stringify({
            bedrijf_id: BEDRIJF,
            soort,
            pagina: location.pathname.slice(0, 300),
            entry_pagina: hk.entry_pagina,
            verwijzer: hk.verwijzer,
            campagne: hk.campagne,
          }),
        }).catch(() => {});
      } catch {}
    };
    document.addEventListener("click", h, { capture: true });
    return () => document.removeEventListener("click", h, { capture: true });
  }, []);
  return null;
}
