'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';
import MobileProcessSlider from '../components/MobileProcessSlider';

// Custom styles for hiding scrollbars
const hideScrollbarStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .smooth-scroll {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .custom-snap {
    scroll-snap-type: x mandatory;
    scroll-padding: 0 1rem;
  }
  .snap-card {
    scroll-snap-align: center;
  }
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const processImages = [
  "/process/inspection.jpg",
  "/process/planning.jpg",
  "/process/execution.jpg",
  "/process/followup.jpg",
];

const processSteps = [
  {
    number: "01",
    title: "Inspection & Évaluation",
    description: "Nous commençons par une inspection approfondie de vos locaux pour identifier les problèmes existants, les points d'entrée potentiels et les facteurs de risque. Cette étape cruciale nous permet de comprendre l'étendue de la situation et de recueillir toutes les informations nécessaires pour élaborer une solution adaptée.",
    benefits: [
      "Identification précise des espèces nuisibles",
      "Détection des points d'entrée et zones à risque",
      "Évaluation des dommages existants",
      "Analyse des facteurs environnementaux"
    ],
    image: processImages[0]
  },
  {
    number: "02",
    title: "Plan de Traitement Personnalisé",
    description: "Sur la base de notre inspection, nous élaborons un plan de traitement sur mesure qui répond à vos besoins spécifiques. Notre approche prend en compte non seulement l'élimination des nuisibles actuels, mais aussi la prévention des infestations futures, avec un souci constant pour la sécurité des occupants et le respect de l'environnement.",
    benefits: [
      "Solutions adaptées à votre situation unique",
      "Méthodes respectueuses de l'environnement",
      "Stratégies préventives intégrées",
      "Calendrier d'intervention optimisé"
    ],
    image: processImages[1]
  },
  {
    number: "03",
    title: "Exécution & Application",
    description: "Nos techniciens qualifiés mettent en œuvre le plan de traitement avec précision et professionnalisme. Équipés des outils et produits les plus avancés du secteur, ils appliquent les solutions définies dans le respect des normes de sécurité et des protocoles établis, en minimisant les perturbations pour votre quotidien.",
    benefits: [
      "Interventions par des professionnels certifiés",
      "Utilisation d'équipements et produits de pointe",
      "Application méthodique des traitements",
      "Respect strict des protocoles de sécurité"
    ],
    image: processImages[2]
  },
  {
    number: "04",
    title: "Suivi & Prévention",
    description: "Notre engagement ne s'arrête pas à l'intervention initiale. Nous effectuons des visites de suivi pour évaluer l'efficacité des traitements et apporter des ajustements si nécessaire. Nous vous fournissons également des recommandations et des conseils pour prévenir les problèmes futurs et maintenir un environnement sain à long terme.",
    benefits: [
      "Visites de contrôle planifiées",
      "Évaluation continue de l'efficacité",
      "Ajustements des traitements si nécessaire",
      "Conseils personnalisés pour la prévention"
    ],
    image: processImages[3]
  }
];

export default function ProcessPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const pullThreshold = 80;
  
  useEffect(() => {
    // Handle loading state
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    // Setup pull-to-refresh on mobile
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        touchStartY = e.touches[0].clientY;
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        const currentY = e.touches[0].clientY;
        const distance = currentY - touchStartY;
        
        if (distance > 0) {
          setIsPulling(true);
          setPullDistance(Math.min(distance * 0.5, pullThreshold));
          e.preventDefault();
        }
      }
    };
    
    const handleTouchEnd = () => {
      if (isPulling) {
        if (pullDistance >= pullThreshold) {
          // Refresh the page
          setIsLoading(true);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
        
        // Reset pull states
        setIsPulling(false);
        setPullDistance(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPulling, pullDistance]);

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <style jsx global>
        {hideScrollbarStyles}
      </style>
      
      <Navbar />
      
      {/* Pull-to-refresh indicator - Mobile only */}
      {isPulling && (
        <motion.div 
          className="lg:hidden fixed top-0 left-0 right-0 z-50 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: pullDistance / pullThreshold,
            y: pullDistance - 20
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center">
            <motion.div 
              className="mr-2"
              animate={{ 
                rotate: isPulling ? [0, 180, 360] : 0
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-5 h-5 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.div>
            <span className="text-xs font-medium">
              {pullDistance >= pullThreshold ? "Relâchez pour actualiser" : "Tirez pour actualiser"}
            </span>
          </div>
        </motion.div>
      )}
      
      {/* Loading overlay for smoother mobile experience */}
      {isLoading && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border-4 border-[#E31E24] border-t-transparent rounded-full"
          />
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent dark:from-black/70 dark:via-black/60 dark:to-transparent z-10" />
          <Image
            src="/bgimgproccess.jpeg"
            alt="Notre Processus"
            fill
            className="object-cover object-center brightness-105 contrast-105 saturate-110 scale-105 transform transition-transform duration-15000 ease-in-out animate-slow-zoom"
            priority
            sizes="100vw"
            quality={100}
          />
          
          {/* Background Patterns */}
          <div className="absolute inset-0 z-20 opacity-50">
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
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E31E24]/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#0A1E3C]/20 blur-3xl"></div>
        </div>
        
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
                Notre Méthodologie
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 text-shadow-sm leading-tight">
              Notre <span className="relative inline-block text-[#E31E24]">
                Processus
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 md:-bottom-3 left-0 h-1.5 md:h-2 bg-white/60 rounded-full"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-sm font-medium">
              Une approche méthodique et efficace pour résoudre vos problèmes
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 md:mt-10"
            >
              <a href="#process-steps" className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-[#0A1E3C] dark:text-white rounded-full font-medium hover:bg-[#E31E24] hover:text-white dark:hover:bg-[#E31E24] transition-all duration-300 shadow-lg group">
                Découvrir notre processus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <span className="text-white text-xs mt-2">Défiler</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-6 md:mb-8 tracking-tight">
              Une Approche <span className="text-[#E31E24] relative">
                Systématique
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-1 left-0 h-1 bg-[#E31E24]/30 rounded-full"
                />
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Chez Société Cafards Services, nous avons développé un processus rigoureux qui garantit des résultats optimaux pour chaque intervention. 
              Notre méthode en quatre étapes nous permet d'aborder chaque situation avec précision et efficacité, en adaptant nos solutions à vos besoins spécifiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section id="process-steps" className="py-16 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#E31E24]/5 dark:bg-[#E31E24]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0A1E3C]/5 dark:bg-[#0A1E3C]/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Title - Mobile Only */}
          <div className="lg:hidden mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E3C] dark:text-white text-center tracking-tight">
              Découvrez en détail notre <span className="text-[#E31E24] relative inline-block">
                processus
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#E31E24]/30 rounded-full"
                />
              </span>
            </h2>
          </div>
          
          {/* Mobile Slider - Hidden on desktop */}
          <MobileProcessSlider processSteps={processSteps} />
          
          {/* Desktop Version - Hidden on mobile */}
          <div className="hidden lg:block space-y-32 md:space-y-40">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="absolute -inset-6 bg-gradient-to-tr from-[#E31E24]/20 to-[#0A1E3C]/20 rounded-2xl blur-lg -z-10"></div>
                    <div className="relative h-[300px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3C]/80 to-transparent"></div>
                      
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#E31E24] rounded-full text-white text-xl md:text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`space-y-8 md:space-y-10 order-2 mt-8 md:mt-0 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="inline-block px-5 py-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium mb-4 md:mb-6">
                      Étape {step.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-5 md:mb-7 tracking-tight">{step.title}</h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-7 md:mb-9 leading-relaxed">{step.description}</p>
                    
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                      <h4 className="text-lg md:text-xl font-semibold text-[#0A1E3C] dark:text-white mb-5 md:mb-6 tracking-tight">Avantages</h4>
                      <ul className="space-y-4 md:space-y-5">
                        {step.benefits.map((benefit, idx) => (
                          <motion.li
                            key={benefit}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-5 h-5 rounded-full bg-[#E31E24]/20 dark:bg-[#E31E24]/30 flex items-center justify-center">
                                <svg className="h-3 w-3 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-sm md:text-base">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#0A1E3C] dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E24]/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E31E24]/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Prêt à Bénéficier de Notre Expertise?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour une évaluation gratuite et découvrez comment notre processus éprouvé peut résoudre vos problèmes de nuisibles.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E31E24] text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white hover:text-[#0A1E3C] transition-colors shadow-xl group"
              >
                Demander une Consultation
                <svg className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <FloatingActionButton />
      
      {/* Scroll to top button - Mobile only */}
      <motion.button
        className="lg:hidden fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full bg-[#E31E24] text-white shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Retour en haut"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </main>
  );
} 