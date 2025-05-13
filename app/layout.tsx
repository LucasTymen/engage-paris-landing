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

const GA_ID = "G-NR6L88V61P";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* ✅ Cookie Consent CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        {/* ✅ Cookie Consent Script */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        />

        {/* ✅ Cookie + GA Initializer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function(){
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
                    if (status === 'allow') enableGA();
                  },
                  onStatusChange: function(status) {
                    if (status === 'allow') enableGA();
                  }
                });
              });

              function enableGA() {
                if (window.gtag) return; // évite double init

                const script = document.createElement('script');
                script.setAttribute('async', '');
                script.src = "https://www.googletagmanager.com/gtag/js?id=${GA_ID}";
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
                console.log("✅ Google Analytics activé");
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
