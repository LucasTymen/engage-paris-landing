"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FaqCharacter from "@/public/assets/faqCharacter";

export default function FaqCharacterParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "-8px", "0px"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-[140px] mx-auto -mt-32 mb-[-2rem] z-10 relative pointer-events-none"
      aria-hidden
    >
      <FaqCharacter className="w-full h-auto" />
    </motion.div>
  );
}
