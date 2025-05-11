"use client";

import { useEffect, useRef } from "react";
import MotionSection from "../MotionSection";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Questionnaire() {
  // 🔁 Scroll progress tracking pour l'animation du personnage
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Démarre quand l'élément entre dans le viewport
  });

  // 🎯 Animation subtile de "flottement"
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "-10px", "0px"]);

  // 💡 Injecte le script Tally uniquement côté client
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <MotionSection
      id="questionnaire"
      className="relative bg-[#0f172a] text-white px-4 py-20"
    >
      {/* 👤 Personnage animé dans le coin haut gauche */}
      <motion.div
        ref={ref}
        style={{ y }}
        className="absolute -top-16 -left-6 w-[120px] z-20 pointer-events-none"
        aria-hidden
      >
        {/* ✅ Ton SVG ici */}
        <svg
          height="100%"
          width="100%"
          viewBox="0 -25 380 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tu peux coller ici l'intégralité du personnage assis (Afro/Hoodie) */}
          <g id="head" transform="translate(82.000000, 0.000000)">
            <g
              id="Head/Front/Afro"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M61,77.7068588 C72.4289379,77.7068588 76.5854974,64.0240838 83.0786187,56.5153483 C87.7243138,51.143002 95.6530795,52.7449442 98,45.2237762 C103.901542,26.3111237 88.1061086,13 67.5,13 C46.8938914,13 33,24.6742524 30,42.2237762 C27,59.7733 40.3938914,77.7068588 61,77.7068588 Z"
                id="Hair-Back"
                fill="rgb(25, 24, 71)"
              />
              <g transform="translate(54.000000, 31.000000)" fill="rgb(178, 139, 103)">
                <path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z"></path>
              </g>
              <path
                d="M72.379769,51.7233675 C71.5077737,51.2620302 70.5086201,51 69.4466684,51 C66.0464589,51 63.2900445,53.6862915 63.2900445,57 C63.2900445,58.3524891 63.749225,59.6004592 64.5239446,60.6039231 C63.0651901,63.0083834 62.0695832,65.5346814 61.7432388,68.1317726 C56.6870351,68.1317726 38.2335803,49 56.6167901,31 C75,13 101.566014,38.6959598 93.5831606,40.1945268 C88.9934286,41.0561261 79.7498479,45.4379083 72.3797716,51.7233656 Z"
                id="Hair"
                fill="rgb(25, 24, 71)"
              />
            </g>
          </g>
        </svg>
      </motion.div>

      {/* 📝 Contenu principal du questionnaire */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Soyez <span className="text-yellow-400">acteur</span> de la{" "}
          <span className="text-yellow-300">communauté</span>
          <br />
          en répondant à notre questionnaire
        </h2>

        <p className="mb-2 text-lg">🗣️ Pourquoi ce questionnaire ?</p>
        <p className="mb-2 text-lg">
          Engage Paris se construit <strong>avec</strong> la communauté, pas au-dessus d’elle.
        </p>
        <p className="mb-6 text-lg">
          🎯 L’objectif ? Un événement <strong>utile</strong>,{" "}
          <strong>actionnable</strong> et aligné sur vos enjeux terrain.
        </p>
        <p className="mb-10 text-lg font-semibold">
          Prenez 2 minutes pour influencer l’agenda 2026.
          <br />
          Votre voix compte.
        </p>

        {/* 📋 Intégration Tally */}
        <iframe
          data-tally-src="https://tally.so/embed/wA04Po?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="344"
          className="w-full max-w-3xl mx-auto"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Questionnaire Engage Paris"
        ></iframe>
      </div>
    </MotionSection>
  );
}
