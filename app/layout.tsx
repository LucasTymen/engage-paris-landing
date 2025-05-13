import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ID = "G-NR6L88V61P";

export const metadata: Metadata = {
  title: "Engage Paris 2025",
  description: "L'événement francophone du Customer Success",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* ✅ Google Analytics: Script visible pour détection automatique par Google */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        ></script>

        {/* ✅ Gtag initialisation bloquée jusqu’au consentement */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // GA tag bloqué par défaut
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              // La ligne ci-dessous est volontairement désactivée :
              // gtag('config', '${GA_ID}');
            `,
          }}
        />

        {/* ✅ CookieConsent CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        {/* ✅ CookieConsent JS */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        ></script>

        {/* ✅ Bannière Cookie + Activation conditionnelle de GA */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function() {
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
                    if (status === 'allow') triggerGA();
                  },
                  onStatusChange: function(status) {
                    if (status === 'allow') triggerGA();
                  }
                });

                function triggerGA() {
                  if (window.gtagInitialized) return;
                  window.gtagInitialized = true;
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                  console.log("✅ GA déclenché après consentement");
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
