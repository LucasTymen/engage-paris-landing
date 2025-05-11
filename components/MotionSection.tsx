// components/MotionSection.tsx
"use client";

import { motion } from "framer-motion";

export default function MotionSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string; // ✅ Ajouté pour éviter l'erreur
}) {
  return (
    <motion.section
      id={id} // ✅ Passé à l'élément HTML
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
