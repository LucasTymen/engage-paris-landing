import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images configuration
  images: {
    domains: ["framerusercontent.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers pour améliorer les performances et la sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy pour GTM et Analytics
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      // Headers spécifiques pour les scripts GTM
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.googletagmanager.com',
          },
        ],
      },
    ];
  },

  // Rewrites pour les événements GTM (optionnel)
  async rewrites() {
    return [
      // Proxy pour GTM si nécessaire (pour éviter les bloqueurs)
      {
        source: '/gtm/:path*',
        destination: 'https://www.googletagmanager.com/:path*',
      },
    ];
  },

  // Variables d'environnement exposées côté client
  env: {
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },

  // Optimisation du bundle
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },

  // Compression
  compress: true,

  // Configuration pour le build de production
  output: 'standalone',
  
  // Ignore des erreurs de type pendant le build (si nécessaire)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuration des redirections (si nécessaire)
  async redirects() {
    return [
      // Exemple: redirection vers la page principale
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;