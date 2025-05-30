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
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Société Cafards Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Société Cafards Services - Services Anti-Nuisibles Professionnels',
    description: 'Solutions professionnelles contre tous types de nuisibles. Dératisation, désinsectisation et désinfection au Maroc.',
    images: ['/logos/logo.png'],
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
      { url: '/logos/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logos/logo.png',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Société Cafards Services",
              "image": "https://cafardservices.com/logos/logo.png",
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