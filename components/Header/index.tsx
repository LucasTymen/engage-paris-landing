"use client";
import Image from "next/image";
import Countdown from "../Countdown";

export default function Header() {
  return (
    <header className="bg-[#020612] text-white py-12 px-4 flex flex-col items-center text-center">
      
      {/* ✅ Logo principal */}
      <div className="w-[90%] max-w-4xl mx-auto mb-4">
        <Image
          src="https://framerusercontent.com/images/Dj7SQwIf0sKYqUSoLj7FPeyoHOA.png"
          alt="Logo Engage Paris"
          width={1800}
          height={900}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* ✅ Slogan */}
      <p className="text-white text-sm uppercase tracking-wider mb-2">
        ENGAGER · INSPIRER · RÉUSSIR
      </p>

      {/* ✅ CTA vers section #adn */}
      <a
        href="#adn"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded transition mb-6"
      >
        Découvrez Engage Paris
      </a>

      {/* ✅ Titre principal */}
      <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-1">
        Journées Engage Paris
      </h1>

      {/* ✅ Séparateur */}
      <hr className="w-24 border-t-2 border-white mb-6" />

      {/* ✅ Vidéo embed */}
      <div className="w-full max-w-3xl aspect-video rounded overflow-hidden shadow-lg mb-4">
        <iframe
          src="https://www.youtube.com/embed/diwYZizLwgA?autoplay=1&mute=1&loop=1&playlist=diwYZizLwgA&rel=0&modestbranding=1&controls=0"
          title="Vidéo Engage Paris"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* ✅ Sous-texte */}
      <p className="text-sm text-white mb-2">
        1er et unique événement francophone
      </p>

      {/* ✅ Tagline */}
      <p className="text-blue-600 text-xl font-light leading-tight tracking-tight mb-8 max-w-xl">
        Partageons ensemble les meilleures pratiques et outils.
      </p>

      {/* ✅ Compte à rebours */}
      <div className="mt-4">

        <Countdown targetDate="2025-09-18T08:00:00" />
      </div>

      {/* ✅ CTA secondaire */}

    </header>
  );
}
