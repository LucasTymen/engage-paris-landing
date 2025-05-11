// components/ArticleCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ArticleCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export default function ArticleCard({
  title,
  description,
  imageUrl,
  imageAlt,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-start gap-4"
    >
      {/* Image en haut */}
      <div className="w-full aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Texte en bas */}
      <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
