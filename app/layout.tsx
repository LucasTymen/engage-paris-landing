// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Configuration GTM avec variable d'environnement
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PDVKS78C';

export const metadata: Metadata = {
  title: "Engage Paris 2025 - Conférence Customer Success",
  description: "L'événement francophone du Customer Success - Conférences, ateliers et networking pour les professionnels du CS",
  keywords: "Customer Success, Conférence, Paris, 2025, CS, Success Manager",
  authors: [{ name: "Engage Paris Team" }],
  openGraph: {
    title: "Engage Paris 2025",
    description: "L'événement francophone du Customer Success",
    url: "https://engage-paris-landing.vercel.app",
    siteName: "Engage Paris",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage Paris 2025",
    description: "L'événement francophone du Customer Success",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Préconnexion pour améliorer les performances */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon et manifest */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        
        {/* Script pour initialiser le tracking des événements */}
        <Script id="gtm-events" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Configuration GA4
            gtag('config', '${GTM_ID}', {
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'secure;samesite=strict'
            });

            // Événement de page vue personnalisé
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Landing Page'
            });
          `}
        </Script>
      </body>
    </html>
  );
}