"use client";
import { useEffect } from "react";

// Anonieme conversie-teller: registreert alleen dat er op een actieknop is
// geklikt (soort + pagina), nooit wie. Insert-only, publieke sleutel by design.
const REST = "https://igxiazraitpysendghds.supabase.co/rest/v1/motor_conversies";
const KEY = "sb_publishable_kGqGJeVlJpczYeF-ha-Bbg_zsTNlOjw";

export default function Beacon() {
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let soort: string | null = null;
      if (href.startsWith("tel:")) soort = "bellen";
      else if (href.startsWith("mailto:")) soort = "email";
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) soort = "whatsapp";
      if (!soort) return;
      try {
        fetch(REST, {
          method: "POST",
          keepalive: true,
          headers: { "Content-Type": "application/json", apikey: KEY, Authorization: "Bearer " + KEY, Prefer: "return=minimal" },
          body: JSON.stringify({ bedrijf_id: "jdg", soort, pagina: location.pathname }),
        }).catch(() => {});
      } catch {}
    };
    document.addEventListener("click", h, { capture: true });
    return () => document.removeEventListener("click", h, { capture: true });
  }, []);
  return null;
}
