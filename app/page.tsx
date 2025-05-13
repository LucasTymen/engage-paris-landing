// ✅ Import de tous les composants depuis le dossier /components
import Header from "@/components/Header";
import Adn from "@/components/Adn";
import Articles from "@/components/Articles";
import Intervenants from "@/components/Intervenants";
import Questionnaire from "@/components/Questionnaire";
import GalleryCarousel from "@/components/GalleryCarousel";
import Faq from "@/components/Faq";
import CalendlyCTA from "@/components/CalendlyCTA"; // 🆕 Calendly
import SponsorsCarousel from "@/components/SponsorsCarousel"; // 🆕 Sponsors

// ✅ App Router → le nom de la fonction doit être "Page", pas "Home"
export default function Page() {
  return (
    <>
      {/* 🧠 Structure logique de la landing page */}
      <Header />
      <Adn />
      <Articles />
      <GalleryCarousel />
      <Intervenants />
      <Questionnaire />
      <Faq />
      <CalendlyCTA />          {/* 🆕 Calendly embed */}
      <SponsorsCarousel />     {/* 🆕 Carousel sponsors */}
    </>
  );
  
}
