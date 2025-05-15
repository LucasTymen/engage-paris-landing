// ✅ app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Engage Paris 2025",
  description: "Informations légales du site Engage Paris 2025, incluant éditeur, hébergeur, droits et protection des données.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Engage Paris est édité par [Votre société / association], immatriculée au RCS sous le numéro [123 456 789], dont le siège est situé à [adresse postale].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, USA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur le site (textes, images, vidéos, logos, etc.) sont protégés par le droit d’auteur et appartiennent à Engage Paris ou ses partenaires.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée sans votre consentement. Vous disposez d’un droit d’accès, de rectification et de suppression. Contactez-nous à :{" "}
          <a href="mailto:contact@engageparis.com" className="text-blue-600 underline">
            contact@engageparis.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p>
          Ce site utilise des cookies à des fins de mesure d’audience. Vous pouvez à tout moment modifier votre consentement via le gestionnaire de cookies.
        </p>
      </section>
    </main>
  );
}
