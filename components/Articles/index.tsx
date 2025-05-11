"use client";
import { motion } from "framer-motion";
import ArticleCard from "../ArticleCard";

const articles = [
  {
    title: "Comment faire passer votre NRR à 125% en 2025",
    description:
      "Stratégies opérationnelles déployées par les Head of CS des scale-ups. Découvrez les leviers activés par les directions CS les plus performantes : expansion revenue, upsell prédictif, mapping des comptes à haut potentiel…",
    imageUrl: "https://framerusercontent.com/images/VWpkGVtG39HxtkTrnFO4KU3u1rQ.png",
    imageAlt: "NRR 125%",
  },
  {
    title: "Réduire le churn client avant qu’il ne commence",
    description:
      "Passer d’une posture réactive à une approche proactive du churn. Scoring prédictif, alignement produit & données clients, plans d’actions dès l’onboarding.",
    imageUrl: "https://framerusercontent.com/images/ay9ZwYeI6ldqKByQHexAphjyMc.png",
    imageAlt: "Réduire le churn",
  },
  {
    title:
      "IA & Customer Success : comment automatiser sans dégrader l'expérience client ?",
    description:
      "Cas d'usages concrets pour intégrer IA et no-code dans vos opérations CS sans perdre la touche humaine.",
    imageUrl: "https://framerusercontent.com/images/ork3Bodif7s72R7Y5uZw6jAYQ.png",
    imageAlt: "IA et CS",
  },
  {
    title: "Customer-Led Growth : Mettre le CS au cœur de la stratégie",
    description:
      "Et si vos clients devenaient vos meilleurs accélérateurs de croissance ? Découvrez comment passer d’un CS réactif à un CS moteur, capable d’influencer la stratégie produit, le marketing… et les résultats.",
    imageUrl: "https://framerusercontent.com/images/GcEhs3IAkSAV8wYPn75AL6lZ0mk.png",
    imageAlt: "Customer-led growth",
  },
];

export default function Articles() {
  return (
    <section className="w-full bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {articles.map((props, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ArticleCard {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
