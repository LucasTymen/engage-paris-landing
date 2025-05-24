// app/page.tsx

"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Adn from "@/components/Adn";
import Articles from "@/components/Articles";
import Intervenants from "@/components/Intervenants";
import Questionnaire from "@/components/Questionnaire";
import GalleryCarousel from "@/components/GalleryCarousel";
import Faq from "@/components/Faq";
import CalendlyCTA from "@/components/CalendlyCTA";
import SponsorsCarousel from "@/components/SponsorsCarousel";

// 🔁 Import du hook GTM pour événements personnalisés
import { useGTM } from "@/lib/gtm";
// 🔁 Import du tracking de scroll (si activé sur ton projet)
import { useScrollTracking } from "@/hooks/useScrollTracking";

export default function Page() {
  // 🎯 On récupère les méthodes depuis le hook GTM
  const { events, trackEvent } = useGTM();

  // 🎯 Active le scroll tracking (si tu l'utilises)
  useScrollTracking({
    thresholds: [25, 50, 75, 90, 100],
    enabled: true,
  });

  // 📊 Tracking automatique de la vue de page (GA / GTM)
  useEffect(() => {
    events.pageView("Homepage");

    // 🕒 Tracking du temps passé sur la page
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      // ⏱️ Envoie l’événement seulement si l'utilisateur est resté > 10 sec
      if (timeSpent > 10) {
        trackEvent({
          event: "time_on_page",
          event_category: "Engagement",
          event_action: "Time Spent",
          event_label: "Homepage",
          value: timeSpent,
        });
      }
    };

    // 📌 Ajoute l’event avant fermeture de page
    window.addEventListener("beforeunload", handleBeforeUnload);

    // ✅ Nettoyage à la sortie
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [events, trackEvent]);

  return (
    <>
      {/* Structure de la landing page avec sections trackées */}
      <section data-section="header">
        <Header />
      </section>

      <section data-section="adn">
        <Adn />
      </section>

      <section data-section="articles">
        <Articles />
      </section>

      <section data-section="gallery">
        <GalleryCarousel />
      </section>

      <section data-section="intervenants">
        <Intervenants />
      </section>

      <section data-section="questionnaire">
        <Questionnaire />
      </section>

      <section data-section="faq">
        <Faq />
      </section>

      <section data-section="calendly">
        <CalendlyCTA />
      </section>

      <section data-section="sponsors">
        <SponsorsCarousel />
      </section>
    </>
  );
}
