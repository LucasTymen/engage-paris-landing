// app/layout.tsx

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
        {/* ✅ CookieConsent CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        {/* ✅ CookieConsent Script */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        />

        {/* ✅ RGPD Consent config + GTM injection conditionnelle */}
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
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),
                        dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PDVKS78C');
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ GTM noscript fallback – doit toujours être là */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDVKS78C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
