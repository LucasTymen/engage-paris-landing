"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Character2 from "@/public/assets/character2";

/**
 * Composant ParallaxCharacter : SVG animé selon le scroll
 * Positionné via motion.div, et animé en x/y avec Framer Motion
 */
export default function ParallaxCharacter() {
  const ref = useRef(null);

  // Hook Framer Motion pour détecter le scroll relatif à l'élément
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // début et fin d’apparition dans le viewport
  });

  // Mouvement horizontal (de 0 à 20%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Oscillation verticale subtile
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "-5px", "0px"]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="w-[180px] mx-auto"
      aria-hidden
    >
      {/* ✅ SVG corrigé avec attributs camelCase pour React */}
      <Character2 className="w-full h-auto" />    
      </motion.div>
  );
}
