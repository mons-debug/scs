import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: 'Société Cafards Services - Services Anti-Nuisibles Professionnels',
    template: '%s | Société Cafards Services'
  },
  description: 'Services professionnels de dératisation, désinsectisation et désinfection au Maroc. Solutions efficaces contre tous types de nuisibles pour particuliers et entreprises.',
  keywords: 'dératisation, désinsectisation, désinfection, cafards, rongeurs, nuisibles, Maroc, Casablanca, services professionnels',
  authors: [{ name: 'Société Cafards Services' }],
  creator: 'Société Cafards Services',
  publisher: 'Société Cafards Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cafardservices.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-MA': '/',
      'ar-MA': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://cafardservices.com',
    title: 'Société Cafards Services - Services Anti-Nuisibles Professionnels',
    description: 'Solutions professionnelles contre tous types de nuisibles. Dératisation, désinsectisation et désinfection au Maroc.',
    siteName: 'Société Cafards Services',
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Société Cafards Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Société Cafards Services - Services Anti-Nuisibles Professionnels',
    description: 'Solutions professionnelles contre tous types de nuisibles. Dératisation, désinsectisation et désinfection au Maroc.',
    images: ['/favicon-512x512.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E31E24' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1E3C' },
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png?v=3',
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Primary favicon for maximum compatibility */}
        <link rel="icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SCS" />
        <meta name="application-name" content="SCS" />
        <meta name="msapplication-TileColor" content="#E31E24" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Favicon Links - Explicit and comprehensive */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png?v=3" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Société Cafards Services",
              "image": "https://cafardservices.com/favicon-512x512.png",
              "description": "Services professionnels de dératisation, désinsectisation et désinfection au Maroc",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressLocality": "Casablanca"
              },
              "telephone": "+212666764626",
              "email": "Contact@cafardservices.com",
              "url": "https://cafardservices.com",
              "sameAs": [
                "https://wa.me/212666764626"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Morocco"
              },
              "areaServed": "Morocco",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Anti-Nuisibles",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dératisation",
                      "description": "Élimination efficace des rongeurs"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Désinsectisation",
                      "description": "Traitement professionnel contre tous types d'insectes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Désinfection",
                      "description": "Désinfection complète contre virus et bactéries"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (err) {
                  console.log('Failed to apply theme:', err);
                }
              })();
            `
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 antialiased">
        <ThemeProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toaster-bg, white)',
                color: 'var(--toaster-color, black)',
              }
            }} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}