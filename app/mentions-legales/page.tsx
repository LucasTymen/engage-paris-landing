// ✅ app/mentions-legales/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - Engage Paris 2025",
  description: "Consultez les mentions légales de l'événement Engage Paris 2025.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Engage Paris est édité par [Nom de l'entreprise ou de l'association], situé à [adresse], immatriculée sous le numéro [SIREN/SIRET].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont la propriété exclusive de leurs auteurs ou partenaires, sauf mention contraire.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée sans votre consentement. Vous pouvez consulter notre politique de confidentialité ou nous contacter pour toute demande relative à vos données.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          Pour toute question, vous pouvez nous contacter à l’adresse suivante :{" "}
          <a href="mailto:contact@engageparis.com" className="text-blue-600 underline">
            contact@engageparis.com
          </a>
        </p>
      </section>
    </main>
  );
}
