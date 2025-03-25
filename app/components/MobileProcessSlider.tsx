'use client';

import { motion, useAnimation, PanInfo, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

interface MobileProcessSliderProps {
  processSteps: ProcessStep[];
}

const MobileProcessSlider: React.FC<MobileProcessSliderProps> = ({ processSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Animation for slider
  useEffect(() => {
    if (sliderRef.current) {
      controls.start({
        x: `-${currentStep * 100}%`,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  }, [currentStep, controls]);

  const handlePrevStep = () => {
    setCurrentStep(prev => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      handlePrevStep();
    } else if (info.offset.x < -threshold) {
      handleNextStep();
    } else {
      // Reset to current position if drag wasn't enough
      controls.start({
        x: `-${currentStep * 100}%`,
        transition: { type: "spring", stiffness: 500, damping: 50 }
      });
    }
  };

  return (
    <div id="mobile-process-slider" className="lg:hidden mb-8">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="text-sm font-medium text-[#0A1E3C] dark:text-white">
          Étape {currentStep + 1}/{processSteps.length}
        </div>
        <div className="w-2/3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#E31E24] to-[#0A1E3C] rounded-full" 
            initial={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
            animate={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Swiper area */}
      <div className="relative overflow-hidden rounded-2xl">
        <motion.div 
          ref={sliderRef}
          animate={controls}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          onDragEnd={handleDragEnd}
          className="flex w-full touch-pan-y"
          style={{ x }}
        >
          {processSteps.map((step, index) => (
            <div key={step.number} className="min-w-full px-2">
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className="relative h-[250px] sm:h-[300px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3C]/90 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <motion.span 
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium inline-flex items-center"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Étape {index + 1}
                    </motion.span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-10">
                    <motion.div 
                      className="flex items-center justify-center w-16 h-16 bg-[#E31E24] rounded-full text-white text-2xl font-bold border-2 border-white/20"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(227, 30, 36, 0.5)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-[#0A1E3C] dark:text-white">{step.title}</h2>
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 text-[#0A1E3C] dark:text-white"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                  </div>
                  
                  <motion.div
                    initial={{ height: isExpanded ? "auto" : "4.5rem" }}
                    animate={{ height: isExpanded ? "auto" : "4.5rem" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}>
                      {step.description}
                    </p>
                  </motion.div>
                  
                  <div className="mt-5 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-inner">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-semibold text-[#0A1E3C] dark:text-white">Avantages</h4>
                      <div className="text-xs text-[#E31E24] font-medium">{step.benefits.length} points</div>
                    </div>
                    <ul className="space-y-2.5">
                      {step.benefits.map((benefit, idx) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300"
                        >
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-[#E31E24]/20 dark:bg-[#E31E24]/30 flex items-center justify-center">
                              <svg className="h-3 w-3 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <motion.button 
                      onClick={handlePrevStep}
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#0A1E3C] dark:text-white"
                      whileHover={{ backgroundColor: "rgba(227, 30, 36, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    
                    <div className="flex space-x-2">
                      {processSteps.map((_, idx) => (
                        <motion.button 
                          key={idx} 
                          onClick={() => setCurrentStep(idx)}
                          className={`w-3 h-3 rounded-full ${idx === currentStep ? 'bg-[#E31E24]' : 'bg-gray-300 dark:bg-gray-700'}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                    
                    <motion.button 
                      onClick={handleNextStep}
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#0A1E3C] dark:text-white"
                      whileHover={{ backgroundColor: "rgba(227, 30, 36, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Swipe indicator */}
      <div className="flex justify-center mt-6">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5], x: [-10, 0, 10, 0, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center text-sm text-gray-500 dark:text-gray-400"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Glissez pour naviguer
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileProcessSlider; 