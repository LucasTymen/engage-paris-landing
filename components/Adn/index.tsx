import Image from "next/image";
import ParallaxCharacter from "../ParallaxCharacter";

export default function Adn() {
  return (
    <section id="adn" className="w-full bg-black text-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE GAUCHE */}
        <div className="relative aspect-video rounded overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/MLxCnVwTtD7pq1UV5JiYj7Vb7w.png?scale-down-to=1024"
            alt="Illustration ADN Engage Paris"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* TEXTE DROIT */}
        <div className="space-y-6">
          <h2 className="text-blue-500 text-3xl font-bold">L’ADN d’Engage Paris</h2>
          <p>
            <strong>Engage Paris 2025</strong>, c’est le rendez-vous des <strong>Heads of CS</strong> qui veulent faire du
            Customer Success un <strong>vrai levier de croissance durable</strong>.
          </p>
          <p>
            🎯 Sessions 100 % décideurs. <br />
            📘 Frameworks testés, playbooks concrets. <br />
            💬 Retours d’expérience de leaders terrain.
          </p>
          <p>
            On y parle <strong>IA appliquée</strong>, <strong>NRR &gt;120 %</strong>, <strong>stratégie Produit–CS</strong> et{" "}
            <strong>advocacy client à impact</strong>.
          </p>
          <p>
            Ce n’est pas un événement. C’est une <strong>expérience stratégique</strong> pour transformer votre département
            CS.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* TEXTE GAUCHE */}
        <div className="space-y-6">
          <h2 className="text-blue-500 text-3xl font-bold">Bénéficiez du réseau</h2>
          <p>
            <strong>Ce que les meilleurs Heads of CS ne partagent qu’entre pairs.</strong>
            <br />
            Découvrez les tactiques de scale-ups en hypercroissance :
            <br />
            🔍 <strong>Upsell prédictif</strong>, <strong>expansion revenue</strong>,{" "}
            <strong>account mapping stratégique</strong>,
            <br />
            📊 et l’orchestration fine via votre <strong>stack CS / CRM existante</strong>.
          </p>
          <p>
            🚀 Challengez vos idées.
            <br />
            🧠 Affinez vos stratégies.
            <br />
            🤝 Connectez-vous à des pairs qui avancent comme vous.
          </p>
          <p>
            Cette communauté façonne, chaque jour,{" "}
            <strong>le futur du Customer Success en entreprise</strong>.
          </p>
        </div>

        {/* IMAGE DROITE */}
        <div className="relative aspect-video rounded overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/stE2tavwnCaVuQaTHkpu5orNFg.png?scale-down-to=1024"
            alt="Illustration réseau"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 👇 Personnage animé */}
      <div className="mt-[-3rem] mb-[4rem]">
        <ParallaxCharacter />
      </div>
    </section>
  );
}
