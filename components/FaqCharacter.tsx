"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Transforme tous les attributs SVG en camelCase compatibles React.
 */
function sanitizeSVG(svg: string) {
  return svg
    .replace(/stroke-width=/gi, "strokeWidth=")
    .replace(/fill-rule=/gi, "fillRule=")
    .replace(/clip-rule=/gi, "clipRule=")
    .replace(/stroke-linecap=/gi, "strokeLinecap=")
    .replace(/stroke-linejoin=/gi, "strokeLinejoin=")
    .replace(/([a-z\-]+)=/gi, (match) => {
      return match.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    });
}

export default function ParallaxCharacter() {
  const ref = useRef(null);
  const [svgHtml, setSvgHtml] = useState("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "-8px", "0px"]);

  useEffect(() => {
    async function loadSVG() {
      try {
        const response = await fetch(
          "https://enthusiastic-share-607007.framer.app/lp_lucas_engageparis"
        );
        let text = await response.text();
        text = sanitizeSVG(text);
        setSvgHtml(text);
      } catch (err) {
        console.error("Erreur chargement SVG :", err);
      }
    }

    loadSVG();
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-[160px] mx-auto -mt-28 mb-[-2rem] z-10 relative"
      aria-hidden
    >
      <div
        dangerouslySetInnerHTML={{ __html: svgHtml }}
        className="w-full h-auto"
      />
    </motion.div>
  );
}
