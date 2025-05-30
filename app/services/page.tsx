'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

// Custom animation styles
const customStyles = `
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.05);
    }
  }
  
  @keyframes spin-slow {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  @keyframes spin-slow-reverse {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 60s linear infinite;
  }
  
  .animate-spin-slow-reverse {
    animation: spin-slow-reverse 45s linear infinite;
  }
  
  .animate-shimmer {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 10s infinite linear;
  }
  
  .shadow-glow {
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
  }
  
  .text-shadow-sm {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const services = [
  {
    id: 'disinfection',
    title: 'Désinfection & Assainissement',
    description: 'Services de désinfection professionnels utilisant des produits écologiques pour garantir la sécurité de votre espace.',
    fullDescription: 'Notre service de désinfection utilise des produits de haute qualité et respectueux de l\'environnement. Nous suivons un protocole strict pour éliminer les agents pathogènes tout en assurant la sécurité des occupants.',
    features: [
      'Désinfection complète des surfaces',
      'Produits écologiques certifiés',
      'Protocole adapté à chaque espace',
      'Rapport détaillé post-intervention'
    ],
    image: '/services/disinfection.jpg',
    icon: '🧼'
  },
  {
    id: 'rodent',
    title: 'Contrôle des Rongeurs',
    description: 'Solutions efficaces de contrôle des rongeurs utilisant des techniques avancées de piégeage.',
    fullDescription: 'Notre approche du contrôle des rongeurs combine des méthodes préventives et curatives. Nous identifions les points d\'entrée et mettons en place des solutions durables.',
    features: [
      'Inspection approfondie des lieux',
      'Techniques de piégeage humaines',
      'Prévention des récidives',
      'Suivi régulier'
    ],
    image: '/services/rodent.jpg',
    icon: '🐀'
  },
  {
    id: 'insect',
    title: 'Extermination des Insectes',
    description: 'Contrôle complet des insectes pour tous types de nuisibles.',
    fullDescription: 'Nos experts sont formés pour traiter tous types d\'infestations d\'insectes. Nous utilisons des méthodes ciblées pour une efficacité maximale.',
    features: [
      'Identification précise des espèces',
      'Traitements sur mesure',
      'Solutions préventives',
      'Garantie d\'intervention'
    ],
    image: '/services/insect.jpg',
    icon: '🐜'
  },
  {
    id: 'reptile',
    title: 'Contrôle des Reptiles',
    description: 'Services de contrôle des reptiles sûrs et humains.',
    fullDescription: 'Notre équipe spécialisée intervient de manière sécurisée pour la capture et la relocalisation des reptiles, dans le respect de la réglementation.',
    features: [
      'Intervention d\'urgence 24/7',
      'Équipe spécialement formée',
      'Méthodes non létales',
      'Conseils de prévention'
    ],
    image: '/services/reptile.jpg',
    icon: '🐍'
  }
];

// Home services from Services.tsx
const homeServices = [
  {
    id: 1,
    title: 'Villas & Mini-villas',
    description: 'Protégez votre maison contre l\'invasion des cafards avec un traitement professionnel longue durée.',
    image: '/images/home/Flux_Dev_enerate_a_highquality_realistic_image_of_a_luxurious__3.jpeg'
  },
  {
    id: 2,
    title: 'Écoles & Instituts',
    description: 'Assurez un environnement sain et protégé pour les élèves et enseignants.',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_modern_school_buildin_1.jpeg'
  },
  {
    id: 3,
    title: 'Restaurants & Snacks',
    description: 'Respectez les normes sanitaires et protégez votre établissement contre les infestations !',
    image: '/images/home/Flux_Dev_Create_a_highquality_realistic_image_of_a_modern_rest_0.jpeg'
  },
  {
    id: 4,
    title: 'Entreprises & Bureaux',
    description: 'Offrez un espace de travail sans nuisibles pour vos employés !',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_sleek_modern_office_b_0.jpeg'
  },
  {
    id: 5,
    title: 'Appartements & Résidences',
    description: 'Dites adieu aux cafards avec une solution efficace et durable !',
    image: '/images/home/Flux_Dev_Create_a_highquality_realistic_image_of_a_wellmaintai_1.jpeg'
  },
  {
    id: 6,
    title: 'Usines & Entrepôts',
    description: 'Protégez vos stocks et vos locaux contre les nuisibles!',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_large_modern_industri_1.jpeg'
  }
];

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#E31E24] text-white px-4 py-2 rounded-md z-[9999] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Passer au contenu principal
      </a>
      
      <Navbar />
      <main className="min-h-screen">
        {/* Apply custom styles */}
        <style jsx global>
          {customStyles}
        </style>
      
      {/* Hero Section - Clean, Modern and Taller */}
        <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent dark:from-black/70 dark:via-black/60 dark:to-transparent z-10" />
            <Image
              src="/divh.jpg"
              alt="Services professionnels de désinsectisation - Équipe en action"
              fill
              className="object-cover object-center brightness-105 contrast-105 saturate-110 scale-105 transform transition-transform duration-15000 ease-in-out animate-slow-zoom"
              priority
              sizes="100vw"
              quality={85}
            />
            
            {/* Background Patterns */}
            <div className="absolute inset-0 z-20 opacity-50" aria-hidden="true">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#E31E24" strokeWidth="0.6" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E31E24]/20 blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#0A1E3C]/20 blur-3xl" aria-hidden="true"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-md bg-white/10 dark:bg-gray-900/20 p-8 md:p-10 rounded-3xl shadow-xl border border-white/10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 md:mb-8 inline-block"
              >
                <span className="inline-block px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-[#E31E24]/40 text-white font-medium mb-4 md:mb-6 backdrop-blur-md text-sm md:text-base shadow-xl">
                  Services Professionnels
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 text-shadow-sm leading-tight">
                Solutions <span className="relative inline-block text-[#E31E24]">
                  Anti-Nuisibles
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 md:-bottom-3 left-0 h-1.5 md:h-2 bg-white/60 rounded-full"
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-sm font-medium">
                Éliminez efficacement tous types de nuisibles avec nos services spécialisés
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 md:mt-10"
              >
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-[#0A1E3C] dark:text-white rounded-full font-medium hover:bg-[#E31E24] hover:text-white dark:hover:bg-[#E31E24] transition-all duration-300 shadow-lg group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E31E24]"
                  aria-label="Découvrir nos services - Aller à la section services"
                >
                  Découvrir nos services
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Home Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E31E24]/5 sm:bg-[#E31E24]/10 dark:bg-[#E31E24]/5 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-[#0A1E3C]/5 dark:via-gray-700/10 to-transparent opacity-20 sm:opacity-30 z-0" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0A1E3C]/5 sm:bg-[#0A1E3C]/10 dark:bg-gray-700/10 rounded-full blur-3xl animate-pulse z-0" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full text-[#E31E24] text-sm font-medium mb-4 shadow-sm"
              >
                Nos Solutions Par Type de Client
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-6 relative">
                <span className="relative inline-block">
                  Secteurs d'Activité
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#E31E24]/40 rounded-full"
                  />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Des solutions adaptées à chaque type d'établissement et aux besoins spécifiques 
                de votre secteur d'activité
              </p>
            </motion.div>

            {/* New Tabbed Interface for Client Solutions */}
            <div className="mb-16">
              {/* Tabs Navigation */}
              <ClientSolutionsTabs />
            </div>

            <div className="mt-12 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="https://wa.me/212666764626?text=Bonjour, je souhaite obtenir un devis personnalisé pour vos services de désinsectisation. Pourriez-vous me contacter? Merci." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-[#0A1E3C] hover:bg-[#E31E24] text-white rounded-full font-medium transition-colors duration-300 shadow-lg"
                >
                  Obtenir un Devis Personnalisé
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#0A1E3C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Besoin d'un Service Personnalisé?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis gratuit
              </p>
              <motion.a
                href="https://wa.me/212666764626?text=Bonjour, j'ai besoin d'un service personnalisé de désinsectisation. Pourriez-vous me contacter pour discuter de mes besoins spécifiques? Merci."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#0A1E3C] transition-colors"
              >
                Contactez-nous
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
          </motion.div>
        </div>
      </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(10, 30, 60, 0.1)" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#small-grid)"></rect>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 rounded-full text-[#0A1E3C] dark:text-white text-sm font-medium mb-4">
                Nos Avantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-6 relative">
                <span className="relative inline-block">
                  Pourquoi Nous Choisir?
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#E31E24]/40 rounded-full"
                  />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Société Cafards Services s'engage à offrir des services de qualité supérieure avec une approche 
                axée sur la satisfaction client et le respect de l'environnement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Expertise Certifiée
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Notre équipe est composée de techniciens certifiés avec une expérience approfondie 
                  dans tous les aspects du contrôle des nuisibles et de la désinfection.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formation continue et perfectionnement
                  </span>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Solutions Écologiques
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nous utilisons des produits respectueux de l'environnement et des méthodes durables pour 
                  résoudre vos problèmes de nuisibles tout en protégeant votre famille et la planète.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Produits certifiés écologiques
                  </span>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Service Rapide 24/7
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nous comprenons l'urgence des problèmes de nuisibles. Notre équipe est disponible 
                  24h/24 et 7j/7 pour répondre rapidement à vos besoins les plus pressants.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intervention d'urgence garantie
                  </span>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Garantie d'Efficacité
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nous offrons une garantie sur nos services pour vous assurer une tranquillité d'esprit. 
                  Si les nuisibles reviennent pendant la période de garantie, nous revenons gratuitement.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Satisfaction client garantie à 100%
                  </span>
                </div>
              </motion.div>

              {/* Feature 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Approche Personnalisée
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Chaque situation est unique. Nous développons des plans sur mesure adaptés 
                  à vos besoins spécifiques plutôt que d'appliquer des solutions génériques.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Évaluation détaillée préalable
                  </span>
                </div>
              </motion.div>

              {/* Feature 6 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#E31E24]/10 to-transparent h-24 w-24 rounded-bl-3xl" />
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                  Service Professionnel
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Notre engagement envers l'excellence se traduit par un service transparent et de qualité supérieure. 
                  Nous vous proposons des solutions adaptées à vos besoins sans compromis sur la qualité.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Devis gratuits et sans engagement
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Overview Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Background decorative elements */}
            <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] transform translate-x-1/3 translate-y-1/3 text-[#0A1E3C]/5 dark:text-white/5" fill="currentColor" viewBox="0 0 200 200">
              <path d="M37.5,-64.7C47.9,-56.3,55.3,-43.9,62.2,-30.7C69.1,-17.5,75.5,-3.7,74.5,9.8C73.5,23.3,65.1,36.4,54.4,46.6C43.8,56.8,30.9,64.2,16.8,69.5C2.7,74.9,-12.6,78.3,-26.1,74.6C-39.6,71,-51.3,60.2,-60.7,47.4C-70.1,34.6,-77.2,19.8,-78.2,4.6C-79.2,-10.7,-74.2,-26.3,-65.2,-39C-56.2,-51.7,-43.3,-61.4,-29.7,-68.2C-16.1,-74.9,-1.9,-78.7,11.2,-76.2C24.3,-73.8,27.1,-73.1,37.5,-64.7Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 rounded-full text-[#0A1E3C] dark:text-white text-sm font-medium mb-4">
                Notre Méthodologie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-6 relative">
                <span className="relative inline-block">
                  Comment Nous Travaillons
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#E31E24]/40 rounded-full"
                  />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Notre processus éprouvé en 4 étapes assure des résultats efficaces et durables 
                pour tous vos problèmes de nuisibles
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-1/2 w-1 h-[calc(100%-7rem)] bg-gradient-to-b from-[#0A1E3C] to-[#E31E24] rounded-full hidden md:block transform -translate-x-1/2"></div>
              
              <div className="space-y-16 md:space-y-0">
                {/* Step 1 */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:flex items-center"
                  >
                    <div className="md:w-1/2 md:pr-12 lg:pr-16 mb-6 md:mb-0 md:text-right">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white mb-4 md:hidden">
                          <span className="text-lg font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-4">Inspection & Évaluation</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Nos techniciens effectuent une inspection approfondie de votre propriété pour identifier 
                          les nuisibles présents, leur source et l'étendue de l'infestation.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Identification précise des nuisibles</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Détection des points d'entrée</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Évaluation des facteurs de risque</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#0A1E3C] dark:bg-[#E31E24] text-white flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xl font-bold">1</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 lg:pl-16 md:opacity-30">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 md:border-dashed">
                        <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    className="md:flex items-center"
                  >
                    <div className="md:w-1/2 md:pr-12 lg:pr-16 mb-6 md:mb-0 md:opacity-30">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 md:border-dashed">
                        <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#0A1E3C] dark:bg-[#E31E24] text-white flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xl font-bold">2</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 lg:pl-16">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white mb-4 md:hidden">
                          <span className="text-lg font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-4">Plan de Traitement</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Nous développons un plan d'action personnalisé basé sur les résultats de notre inspection, 
                          en tenant compte de vos préoccupations spécifiques et des contraintes de votre environnement.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Solutions sur mesure</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Devis transparent et détaillé</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                            <span>Méthodes respectueuses de l'environnement</span>
                          </li>
                  </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:flex items-center"
                  >
                    <div className="md:w-1/2 md:pr-12 lg:pr-16 mb-6 md:mb-0 md:text-right">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white mb-4 md:hidden">
                          <span className="text-lg font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-4">Traitement & Implementation</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Nos techniciens expérimentés mettent en œuvre le plan de traitement en utilisant 
                          des méthodes professionnelles et des produits de qualité.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Procédures de sécurité strictes</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Équipement professionnel spécialisé</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                          <li className="flex items-start md:justify-end">
                            <span className="md:order-2 md:ml-2 mr-2 md:mr-0">Application précise et maîtrisée</span>
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 md:order-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#0A1E3C] dark:bg-[#E31E24] text-white flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xl font-bold">3</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 lg:pl-16 md:opacity-30">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 md:border-dashed">
                        <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:flex items-center"
                  >
                    <div className="md:w-1/2 md:pr-12 lg:pr-16 mb-6 md:mb-0 md:opacity-30">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 md:border-dashed">
                        <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#0A1E3C] dark:bg-[#E31E24] text-white flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xl font-bold">4</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 lg:pl-16">
                      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 text-[#0A1E3C] dark:text-white mb-4 md:hidden">
                          <span className="text-lg font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-4">Suivi & Prévention</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Nous programmons des visites de suivi pour s'assurer que le traitement est efficace et 
                          fournissons des recommandations pour prévenir les futures infestations.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Contrôles réguliers</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Conseils de prévention personnalisés</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-[#E31E24] mt-0.5 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Plans de maintenance disponibles</span>
                          </li>
                        </ul>
                      </div>
                </div>
              </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <motion.a
                href="/processus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border border-[#0A1E3C] dark:border-white text-[#0A1E3C] dark:text-white hover:bg-[#0A1E3C] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-full font-medium transition-colors duration-300"
              >
                En Savoir Plus sur Notre Processus
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0A1E3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Besoin d'un Service Personnalisé?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis gratuit
            </p>
              <motion.a
                href="https://wa.me/212666764626?text=Bonjour, j'ai besoin d'un service personnalisé de désinsectisation. Pourriez-vous me contacter pour discuter de mes besoins spécifiques? Merci."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#0A1E3C] transition-colors"
              >
                Contactez-nous
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
};

// Add this component above the ServicesPage component
const ClientSolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = [0, 1, 2, 3, 4, 5].map(() => useRef<HTMLButtonElement>(null));
  
  const scrollToTab = (index: number) => {
    if (tabRefs[index]?.current && typeof window !== 'undefined') {
      const tabElement = tabRefs[index].current;
      const container = tabsContainerRef.current;
      
      if (tabElement && container) {
        // For mobile screens, center the tab
        if (window.innerWidth < 768) {
          const tabRect = tabElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          const scrollLeft = tabElement.offsetLeft - (containerRect.width / 2) + (tabRect.width / 2);
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    scrollToTab(activeTab);
  }, [activeTab]);

  // Extract categories from homeServices
  const categories = homeServices.map(service => ({
    id: service.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'et'),
    label: service.title
  }));

  return (
    <div className="flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="relative w-full mb-10">
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div 
          ref={tabsContainerRef}
          className="overflow-x-auto pb-1 scrollbar-hide"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="flex space-x-2 px-2 md:justify-center min-w-max">
            {categories.map((tab, index) => (
              <motion.button
                key={tab.id}
                ref={tabRefs[index]}
                className={`relative py-2 sm:py-3 px-3 sm:px-5 md:px-6 text-sm md:text-base font-medium rounded-t-lg transition-all whitespace-nowrap
                  ${activeTab === index 
                    ? 'text-[#E31E24] bg-white dark:bg-gray-800 shadow-md border-b-2 border-[#E31E24]' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#0A1E3C] dark:hover:text-white'
                  }`}
                onClick={() => setActiveTab(index)}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
                {activeTab === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31E24]"
                    layoutId="activeTabIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Left and Right Shadow Indicators for scrolling */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none md:hidden"></div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            {activeTab >= 0 && activeTab < homeServices.length && (
              <div className="w-full">
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                  initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Side */}
                    <div className="relative w-full lg:w-1/2 h-56 sm:h-64 lg:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E3C]/70 to-transparent z-10" />
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={homeServices[activeTab].image}
                          alt={homeServices[activeTab].title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                      
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg"
                        >
                          <h3 className="text-base sm:text-lg font-bold text-[#0A1E3C] dark:text-white">
                            {homeServices[activeTab].title}
                          </h3>
                        </motion.div>
                      </div>
                      
                      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="bg-[#E31E24] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold shadow-lg text-sm sm:text-base"
                        >
                          Service Professionnel
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-center mb-6">
                          <span className="flex items-center justify-center w-10 h-10 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/30 rounded-full mr-4 text-[#0A1E3C] dark:text-white">
                            {activeTab + 1}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E3C] dark:text-white">
                            {homeServices[activeTab].title}
                          </h2>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                          {homeServices[activeTab].description}
                        </p>
                        
                        <div className="mb-6 sm:mb-8">
                          <h4 className="text-base sm:text-lg font-semibold text-[#0A1E3C] dark:text-white mb-3 sm:mb-4">
                            Nos Services Inclus:
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {[
                              'Inspection complète des lieux',
                              'Traitement adapté avec garantie',
                              'Solutions préventives personnalisées',
                              'Suivi post-intervention'
                            ].map((feature, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.3 }}
                                className="flex items-start"
                              >
                                <svg className="w-5 h-5 text-[#E31E24] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                          <motion.a
                            href={`https://wa.me/212666764626?text=Bonjour, je suis intéressé(e) par votre service: ${homeServices[activeTab].title}. Pouvez-vous me fournir plus d'informations et un devis? Merci.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center bg-[#E31E24] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-[#c91b1f] transition-colors shadow-lg"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                            </svg>
                            <span>Demander un Devis</span>
                          </motion.a>
                          
                          <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center bg-[#0A1E3C] dark:bg-gray-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-[#152e54] dark:hover:bg-gray-600 transition-colors shadow-lg"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Contactez-nous</span>
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Mobile Pagination/Navigation Dots */}
                <div className="lg:hidden flex justify-center mt-6 space-x-2">
                  {homeServices.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        activeTab === idx 
                          ? 'bg-[#E31E24]' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                {/* Desktop Navigation Arrows */}
                <div className="hidden lg:flex justify-between mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveTab((prev) => (prev === 0 ? homeServices.length - 1 : prev - 1))}
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#0A1E3C] dark:text-white hover:bg-[#0A1E3C] hover:text-white dark:hover:bg-[#E31E24] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveTab((prev) => (prev === homeServices.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#0A1E3C] dark:text-white hover:bg-[#0A1E3C] hover:text-white dark:hover:bg-[#E31E24] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesPage; 