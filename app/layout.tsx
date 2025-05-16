// ✅ app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Métadonnées SEO
export const metadata: Metadata = {
  title: "Engage Paris 2025",
  description: "L'événement francophone du Customer Success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* ✅ CSS de la bannière RGPD */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        {/* ✅ Initialisation manuelle du dataLayer pour GA4 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />

        {/* ✅ Script CookieConsent (RGPD) */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        />

        {/* ✅ Script de configuration CookieConsent + injection conditionnelle de GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                if (!window.cookieconsent) return;

                window.cookieconsent.initialise({
                  palette: {
                    popup: { background: "#000" },
                    button: { background: "#0070f3" }
                  },
                  theme: "classic",
                  position: "bottom",
                  content: {
                    message: "Ce site utilise des cookies pour améliorer votre expérience.",
                    dismiss: "Accepter",
                    link: "En savoir plus",
                    href: "/mentions-legales"
                  },
                  onInitialise: function (status) {
                    if (status === 'allow') {
                      injectGTM();
                    }
                  },
                  onStatusChange: function (status) {
                    if (status === 'allow') {
                      injectGTM();
                    }
                  }
                });

                function injectGTM() {
                  if (document.getElementById('gtm-script')) return;

                  var f = document.getElementsByTagName('script')[0];
                  var j = document.createElement('script');
                  j.id = 'gtm-script';
                  j.async = true;
                  j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PDVKS78C';
                  f.parentNode.insertBefore(j, f);
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ GTM noscript fallback (important pour users sans JS) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDVKS78C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Contenu de la landing page */}
        {children}
      </body>
    </html>
  );
}
