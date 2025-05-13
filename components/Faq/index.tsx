"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import FaqCharacter from "@/public/assets/faqCharacter";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "Pourquoi cet événement est fait pour vous ?",
    answer:
      "Il est temps de rencontrer ceux qui, comme vous, façonnent l’avenir. Avec Engage Paris, accédez à une communauté d'exception où décideurs, innovateurs et faiseurs d'impact se connectent pour propulser leurs projets.",
  },
  {
    question: "Comment vous préparer à en profiter au maximum ?",
    answer:
      "Téléchargez le programme, créez votre itinéraire et votre planning network sur mesure. Apprenez, transmettez, testez vos idées.",
  },
  {
    question: "Où et quand a lieu l’événement ?",
    answer: "Le 24 juin 2025 à Maison.A – VERSO Paris.",
  },
  {
    question: "Comment se déroule t-il ?",
    answer:
      "De 8h30 à 19h30 : conférences, ateliers, networking, moments off. Tout est pensé pour le contenu + les connexions.",
  },
  {
    question: "Y aura-t-il une version online de l’événement ?",
    answer: "Oui ! Une version en streaming sera disponible.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Parallax pour le personnage
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "0px", "0px"]);

  return (
    <section
      id="faq"
      className="relative bg-[#777] text-black py-28 px-4 overflow-hidden"
      ref={ref}
    >
      {/* 👤 Personnage animé posé sur la FAQ */}
      <motion.div
        style={{ y }}
        className="w-[140px] mx-auto -mt-32 mb-[-2rem] z-10 relative pointer-events-none"
        aria-hidden
      >
        <FaqCharacter className="w-full h-auto" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] text-white rounded-lg shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none hover:bg-[#2c3e50] transition-colors"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span className="ml-2 text-xl transition-transform duration-300">
                  {openIndex === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key={`faq-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
