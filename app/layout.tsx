import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Fonts personnalisées
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ✅ Metadata SEO
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
        {/* ✅ CSS CookieConsent v3 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        {/* ✅ Init dataLayer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`,
          }}
        />

        {/* ✅ CookieConsent JS */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        />

        {/* ✅ Script de consentement RGPD + injection GTM & Google Ads */}
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
                      injectGoogleAds();
                    }
                  },
                  onStatusChange: function (status) {
                    if (status === 'allow') {
                      injectGTM();
                      injectGoogleAds();
                    }
                  }
                });

                function injectGTM() {
                  if (document.getElementById('gtm-script')) return;
                  const s = document.createElement('script');
                  s.id = 'gtm-script';
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PDVKS78C';
                  document.head.appendChild(s);
                }

                function injectGoogleAds() {
                  if (document.getElementById('google-ads-script')) return;

                  const gads = document.createElement('script');
                  gads.id = 'google-ads-script';
                  gads.async = true;
                  gads.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17074652075';
                  document.head.appendChild(gads);

                  gads.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments); }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'AW-17074652075');
                    console.log("✅ Google Ads tag injecté");
                  };
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Noscript fallback GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDVKS78C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Contenu principal */}
        {children}
      </body>
    </html>
  );
}
