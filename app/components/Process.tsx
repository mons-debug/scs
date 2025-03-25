'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const processImages = [
  "/process/inspection.jpg",
  "/process/planning.jpg",
  "/process/execution.jpg",
  "/process/followup.jpg",
];

const steps = [
  {
    number: '1',
    title: 'Inspection & Évaluation',
    description: 'Nos experts effectuent une inspection approfondie de vos locaux pour identifier les problèmes et évaluer leur gravité.',
    benefits: [
      'Identification précise des espèces nuisibles',
      'Détection des points d\'entrée',
      'Évaluation des risques sanitaires'
    ],
    image: processImages[0],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Plan de Traitement Personnalisé',
    description: 'Nous élaborons un plan de traitement sur mesure basé sur les résultats de l\'inspection et vos besoins spécifiques.',
    benefits: [
      'Solutions adaptées à votre situation',
      'Méthodes respectueuses de l\'environnement',
      'Stratégies préventives intégrées'
    ],
    image: processImages[1],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Exécution & Application',
    description: 'Nos techniciens qualifiés mettent en œuvre le plan de traitement en utilisant des méthodes sûres et efficaces.',
    benefits: [
      'Interventions par des experts certifiés',
      'Utilisation d\'équipements de pointe',
      'Application méthodique des traitements'
    ],
    image: processImages[2],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Suivi & Prévention',
    description: 'Nous effectuons des visites de suivi et fournissons des mesures préventives pour assurer un contrôle durable.',
    benefits: [
      'Visites de contrôle programmées',
      'Évaluation continue de l\'efficacité',
      'Conseils personnalisés de prévention'
    ],
    image: processImages[3],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Add this custom style for touch effects and mobile scrolling
const hideScrollbarStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .mobile-step-scroll {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .mobile-step {
    scroll-snap-align: center;
  }
`;

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

  useEffect(() => {
    // Auto scroll to current step in mobile
    if (isMobile && mobileScrollRef.current) {
      const scrollContainer = mobileScrollRef.current;
      const stepElements = scrollContainer.querySelectorAll('.mobile-step');
      if (stepElements[activeStep]) {
        stepElements[activeStep].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeStep, isMobile]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (isMobile && stepsRef.current[index]) {
      stepsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
          </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-medium mb-4"
          >
            Notre Processus
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Comment Nous <span className="text-red-600">Travaillons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Une approche professionnelle en 5 étapes pour garantir un traitement efficace et durable
          </motion.p>
          </div>
          
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                index === 0 
                  ? 'bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <motion.div
                animate={{
                  scale: hoveredStep === index ? 1.02 : 1,
                  y: hoveredStep === index ? -5 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{
                      rotate: hoveredStep === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                      index === 0
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
          </div>
        </div>
              </motion.div>
              
              {/* Decorative background elements */}
              <motion.div
                animate={{
                  opacity: hoveredStep === index ? 1 : 0,
                  scale: hoveredStep === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-red-50/50 dark:from-red-900/20 to-transparent rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/processus"
            className="inline-flex items-center px-8 py-3 bg-[#E31E24] text-white hover:bg-[#E31E24]/90 rounded-full font-medium transition-colors duration-300"
          >
            En Savoir Plus sur Notre Processus
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Content Component - Enhanced for mobile
const AnimatedContent = ({ step, isActive, isMobile = false }: { step: any, isActive: boolean, isMobile?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        display: isActive ? 'block' : 'none'
      }}
      transition={{ duration: 0.5 }}
      className="relative h-full w-full"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 h-full shadow-xl overflow-hidden">
        {/* Decorative elements - reduced for mobile */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E31E24]/5 rounded-full hidden sm:block"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0A1E3C]/5 dark:bg-gray-700/10 rounded-full hidden sm:block"></div>
        
        <div className="relative z-10 h-full">
          <div className="flex items-start mb-4 md:mb-6">
            <div className="flex-shrink-0 mr-4 hidden sm:block">
              <div className="w-16 h-16 text-[#E31E24] animate-pulse">
                {step.icon}
              </div>
            </div>
            
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-[#E31E24]/10 rounded-full text-[#E31E24] text-sm font-medium mb-2">
                Étape {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#0A1E3C] dark:text-white mb-4">{step.title}</h3>
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
              {step.description}
            </p>
            
            {step.details && (
              <div className="space-y-3 md:space-y-4 mt-4">
                {step.details.map((detail: string, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">{detail}</p>
                  </div>
                ))}
              </div>
            )}
            
            {step.image && !isMobile && (
              <div className="mt-6 relative h-48 sm:h-64 rounded-xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Step Card Component
const AnimatedStepCard = ({ step, index, isActive, onClick }: { step: any, index: number, isActive: boolean, onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group mobile-step flex flex-col relative p-5 md:p-6 border-2 rounded-2xl shadow-md cursor-pointer transition-all duration-300 overflow-hidden
        ${isActive 
          ? 'border-[#E31E24] dark:border-[#E31E24] bg-[#E31E24]/5 dark:bg-[#E31E24]/10' 
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#E31E24]/70 dark:hover:border-[#E31E24]/70'}
      `}
    >
      <div className="flex items-center mb-3">
        <div className={`
          flex items-center justify-center w-10 h-10 rounded-full mr-3 transition-colors duration-300
          ${isActive 
            ? 'bg-[#E31E24] text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-[#E31E24]/30 group-hover:text-[#E31E24]'}
        `}>
          <span className="font-bold text-lg">{index + 1}</span>
        </div>
        <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-[#E31E24]' : 'text-[#0A1E3C] dark:text-white'}`}>
          {step.title}
        </h3>
      </div>
      
      {/* Mobile: just display icon without animation for better performance */}
      <div className="block md:hidden mt-2 mb-4">
        <div className="w-12 h-12 text-[#E31E24] opacity-90">
          {step.icon}
        </div>
      </div>

      {/* Desktop: animated icon */}
      <div className="hidden md:block absolute -right-6 -top-6 w-24 h-24 text-black/5 dark:text-white/5 z-0 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {step.icon}
      </div>
      
      <div className="relative z-10">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Process; 