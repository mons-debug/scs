'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

// Simplified animation styles - reduced complexity to prevent glitching
const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes smoothFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-slide-in {
    animation: slideIn 0.4s ease-out forwards;
  }
  
  .animate-float {
    animation: smoothFloat 3s ease-in-out infinite;
  }
  
  .smooth-scroll {
    scroll-behavior: smooth;
  }
  
  .tab-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

// Home services from Services.tsx - matching screenshot 2
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
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* Apply custom styles */}
        <style jsx global>
          {customStyles}
        </style>
      
        {/* Hero Section - Simplified animations */}
        <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent dark:from-black/70 dark:via-black/60 dark:to-transparent z-10" />
            <Image
              src="/divh.jpg"
              alt="Services professionnels de désinsectisation - Équipe en action"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={85}
            />
            
            {/* Simplified decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E31E24]/20 blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#0A1E3C]/20 blur-3xl" aria-hidden="true"></div>
          </div>
          
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-900/20 p-8 md:p-10 rounded-3xl shadow-xl border border-white/10 animate-fade-in-up">
              <div className="mb-6 md:mb-8 inline-block">
                <span className="inline-block px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-[#E31E24]/40 text-white font-medium mb-4 md:mb-6 backdrop-blur-md text-sm md:text-base shadow-xl">
                  Services Professionnels
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-tight">
                Solutions <span className="relative inline-block text-[#E31E24]">
                  Anti-Nuisibles
                  <div className="absolute -bottom-2 md:-bottom-3 left-0 h-1.5 md:h-2 bg-white/60 rounded-full w-full"></div>
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Éliminez efficacement tous types de nuisibles avec nos services spécialisés
              </p>
              
              <div className="mt-8 md:mt-10">
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
              </div>
            </div>
          </div>
          
          {/* Simplified scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-float" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-float"></div>
            </div>
          </div>
        </section>

        {/* Home Services Section - Fixed glitching */}
        <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0A1E3C]/5 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="inline-block px-6 py-2 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full text-[#E31E24] text-sm font-medium mb-4 shadow-sm">
                Nos Solutions Par Type de Client
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-6 relative">
                <span className="relative inline-block">
                  Secteurs d'Activité
                  <div className="absolute -bottom-2 left-0 h-1 bg-[#E31E24]/40 rounded-full w-full"></div>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Des solutions adaptées à chaque type d'établissement et aux besoins spécifiques 
                de votre secteur d'activité
              </p>
            </div>

            {/* Fixed Tabbed Interface */}
            <div className="mb-16">
              <ClientSolutionsTabs />
            </div>

            <div className="mt-12 text-center">
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
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#0A1E3C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Besoin d'un Service Personnalisé?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis gratuit
              </p>
              <a
                href="https://wa.me/212666764626?text=Bonjour, j'ai besoin d'un service personnalisé de désinsectisation. Pourriez-vous me contacter pour discuter de mes besoins spécifiques? Merci."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#0A1E3C] transition-colors shadow-lg"
              >
                Contactez-nous
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
};

// Optimized ClientSolutionsTabs component - Fixed glitching issues
const ClientSolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Extract categories from homeServices
  const categories = homeServices.map(service => ({
    id: service.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'et'),
    label: service.title
  }));

  const handleTabChange = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveTab(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Tab Navigation - Simplified */}
      <div className="relative w-full mb-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
          {categories.map((tab, index) => (
            <button
              key={tab.id}
              className={`relative py-3 px-4 md:px-6 text-sm md:text-base font-medium rounded-lg tab-transition whitespace-nowrap
                ${activeTab === index 
                  ? 'text-white bg-[#E31E24] shadow-lg' 
                  : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 hover:text-[#E31E24] hover:shadow-md'
                }`}
              onClick={() => handleTabChange(index)}
              disabled={isTransitioning}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Optimized transitions */}
      <div className="w-full">
        {activeTab >= 0 && activeTab < homeServices.length && (
          <div className="w-full animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E3C]/70 to-transparent z-10" />
                  <Image
                    src={homeServices[activeTab].image}
                    alt={homeServices[activeTab].title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                      <h3 className="text-lg font-bold text-[#0A1E3C] dark:text-white">
                        {homeServices[activeTab].title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="bg-[#E31E24] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                      Service Professionnel
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/30 rounded-full mr-4 text-[#0A1E3C] dark:text-white font-bold">
                      {activeTab + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E3C] dark:text-white">
                      {homeServices[activeTab].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {homeServices[activeTab].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#0A1E3C] dark:text-white mb-4">
                      Nos Services Inclus:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Inspection complète des lieux',
                        'Traitement adapté avec garantie',
                        'Solutions préventives personnalisées',
                        'Suivi post-intervention'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start animate-slide-in" style={{animationDelay: `${idx * 100}ms`}}>
                          <svg className="w-5 h-5 text-[#E31E24] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href={`https://wa.me/212666764626?text=Bonjour, je suis intéressé(e) par votre service: ${homeServices[activeTab].title}. Pouvez-vous me fournir plus d'informations et un devis? Merci.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-[#E31E24] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#c91b1f] transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      Demander un Devis
                    </a>
                    
                    <a
                      href="/contact"
                      className="flex items-center justify-center bg-[#0A1E3C] dark:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-[#152e54] dark:hover:bg-gray-600 transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="lg:hidden flex justify-center mt-6 space-x-2">
              {homeServices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabChange(idx)}
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
              <button
                onClick={() => handleTabChange(activeTab === 0 ? homeServices.length - 1 : activeTab - 1)}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#0A1E3C] dark:text-white hover:bg-[#0A1E3C] hover:text-white dark:hover:bg-[#E31E24] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => handleTabChange(activeTab === homeServices.length - 1 ? 0 : activeTab + 1)}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#0A1E3C] dark:text-white hover:bg-[#0A1E3C] hover:text-white dark:hover:bg-[#E31E24] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage; 