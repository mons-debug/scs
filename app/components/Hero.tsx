'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // List of SVG image paths
  const svgPaths = [ 
    '/backicon/iconbackground-01.svg',
    '/backicon/iconbackground-02.svg',
    '/backicon/iconbackground-03.svg',
    '/backicon/iconbackground-04.svg',
    '/backicon/iconbackground-05.svg',
    '/backicon/iconbackground-06.svg',
  ];
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Set loaded state after a short delay
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    // Initial set of visible icons - show all icons
    setVisibleIcons([0, 1, 2, 3, 4, 5]);
    
    // Setup interval to randomly change icon animations rather than visibility
    const interval = setInterval(() => {
      // We'll keep all icons visible but change their animation patterns
      setVisibleIcons([0, 1, 2, 3, 4, 5]);
    }, 5000);
    
    // Mouse move event handler
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Icon positions - positioned based on viewport size
  const getIconPositions = () => {
    if (isMobile) {
      // Mobile positions - simpler layout with fewer icons and positioned further away from content
      return [
        // Left side - positioned further left
        { top: '15%', left: '2%', zIndex: 5 },
        { top: '40%', left: '3%', zIndex: 5 },
        // Right side - positioned further right
        { top: '15%', right: '2%', zIndex: 5 },
        { top: '40%', right: '3%', zIndex: 5 },
        // Hidden on mobile
        { top: '-100%', left: '-100%', zIndex: 5 },
        { top: '-100%', right: '-100%', zIndex: 5 },
      ];
    } else {
      // Desktop positions
      return [
        // Left arc (top section only)
        { top: '15%', left: '12%', zIndex: 5 },
        { top: '30%', left: '8%', zIndex: 5 },
        { top: '42%', left: '15%', zIndex: 5 },
        // Right arc (top section only)
        { top: '15%', right: '12%', zIndex: 5 },
        { top: '30%', right: '8%', zIndex: 5 },
        { top: '42%', right: '15%', zIndex: 5 },
      ];
    }
  };

  // Icon sizes - varied to create better visual flow
  const getIconSize = (index: number) => {
    // For mobile, all icons are smaller
    if (isMobile) {
      return 80; // reduced size for mobile
    }
    
    // Middle icons (close to content) are smaller
    if (index === 1 || index === 4) {
      return 150;
    }
    // Top icons are medium
    if (index === 0 || index === 3) {
      return 170;
    }
    // Bottom icons are largest (frame the button)
    return 180;
  };

  const iconPositions = getIconPositions();

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Modern Background Pattern with enhanced visual elements */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A1E3C" strokeWidth="0.5" opacity="0.05" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E31E24" opacity="0.07" />
            </pattern>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A1E3C" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#E31E24" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
          <rect width="100%" height="100%" fill="url(#heroGradient)" />
        </svg>
        
        {/* Enhanced Abstract Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0A1E3C]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-[#0A1E3C]/10 to-[#E31E24]/5 rounded-full blur-2xl animate-float" />
        
        {/* Animated SVG Icons from public folder */}
        <div className="absolute inset-0 z-5 pointer-events-none opacity-50 md:opacity-70">
          {svgPaths.map((path, index) => {
            // Skip hidden icons on mobile
            if (isMobile && (index === 4 || index === 5)) return null;
            
            // Calculate magnetic effect based on mouse position
            const getDistance = (elementPosition: { top?: string, bottom?: string, left?: string, right?: string }) => {
              const position = {
                x: elementPosition.left ? parseInt(elementPosition.left) : 100 - parseInt(elementPosition.right || '0'),
                y: elementPosition.top ? parseInt(elementPosition.top) : 100 - parseInt(elementPosition.bottom || '0')
              };
              
              // Convert percentage positions to pixels (approximate)
              const elementX = (containerRef.current?.clientWidth || 1000) * (position.x / 100);
              const elementY = (containerRef.current?.clientHeight || 800) * (position.y / 100);
              
              // Calculate distance
              const dx = mousePosition.x - elementX;
              const dy = mousePosition.y - elementY;
              return Math.sqrt(dx * dx + dy * dy);
            };
            
            // Magnetic effect - stronger when closer
            const distance = getDistance(iconPositions[index % iconPositions.length]);
            const magneticRange = isMobile ? 100 : 200; // pixels
            const maxOffset = isMobile ? 20 : 40; // maximum pixels to move
            const magneticStrength = Math.max(0, 1 - distance / magneticRange);
            const offsetX = magneticStrength * maxOffset * (mousePosition.x - (containerRef.current?.clientWidth || 1000) / 2) / ((containerRef.current?.clientWidth || 1000) / 2);
            const offsetY = magneticStrength * maxOffset * (mousePosition.y - (containerRef.current?.clientHeight || 800) / 2) / ((containerRef.current?.clientHeight || 800) / 2);
            
            const position = iconPositions[index % iconPositions.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isLoaded ? (isMobile ? 0.4 : 0.65) : 0,
                  scale: isLoaded ? 1.0 : 0.6,
                  x: offsetX,
                  y: offsetY
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeInOut", delay: index * 0.15 },
                  scale: { duration: 1.8, ease: [0.19, 1.0, 0.22, 1.0], delay: index * 0.15 },
                  x: { duration: 0.3, ease: "easeOut" },
                  y: { duration: 0.3, ease: "easeOut" }
                }}
                className="absolute flex items-center justify-center"
                style={position as any}
              >
                <motion.img 
                  src={path}
                  alt="Background icon"
                  className={`w-full h-full ${theme === 'dark' ? 'filter invert brightness-100' : 'text-[#0A1E3C] filter drop-shadow-lg'}`}
                  style={{ maxWidth: `${getIconSize(index)}px`, maxHeight: `${getIconSize(index)}px` }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ 
                    y: isLoaded ? [0, isMobile ? -5 : -8, 0] : 0,
                    rotate: isLoaded ? [0, isMobile ? 3 : 4, 0] : 0
                  }}
                  transition={{
                    y: { 
                      duration: 6 + index, 
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: index * 0.2
                    },
                    rotate: {
                      duration: 8 + index,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Hero Content with enhanced styling */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 mt-8 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium rounded-full"
          >
            Société Cafards Services
          </motion.span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A1E3C] to-[#0A1E3C]/80 dark:from-white dark:to-gray-300">
              Solutions Efficaces et
            </span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#E31E24]"
            >
              Personnalisées
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Société Cafards Services offre des solutions de désinfection professionnelles pour particuliers et entreprises. 
            Solutions sûres, efficaces et respectueuses de l'environnement.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(227, 30, 36, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/212666764626?text=Bonjour, je souhaite obtenir un devis gratuit pour vos services de désinsectisation. Pourriez-vous me contacter? Merci."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c91b1f] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Devis Gratuit</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-[#0A1E3C] dark:text-white border-2 border-[#0A1E3C]/10 dark:border-white/10 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0A1E3C]/5 dark:hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Nos Services</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Enhanced Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                title: 'Contrôle des Rongeurs',
                icon: (
                  <svg className="w-12 h-12 mx-auto text-[#E31E24] dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4Z" fill="currentColor"/>
                    <path d="M5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10Z" fill="currentColor"/>
                    <path d="M20.1716 5.34315L16.8284 8.68629C15.2663 10.2484 15.2663 12.7516 16.8284 14.3137L18.7279 16.2132C19.1184 16.6037 19.1184 17.2369 18.7279 17.6274L17.2426 19.1127C16.8521 19.5032 16.219 19.5032 15.8284 19.1127L13.9289 17.2132C12.3669 15.6511 9.86362 15.6511 8.30153 17.2132L4.75736 20.7574C4.36684 21.1479 3.73367 21.1479 3.34315 20.7574L3.22183 20.636C2.8313 20.2455 2.8313 19.6124 3.22183 19.2218L6.40408 16.0396C7.96617 14.4775 7.96617 11.9743 6.40408 10.4122L4.92893 8.93701C4.53841 8.54648 4.53841 7.91332 4.92893 7.52279L6.34315 6.10858C6.73367 5.71805 7.36684 5.71805 7.75736 6.10858L9.51471 7.86592C11.0768 9.42801 13.58 9.42801 15.1421 7.86592L19.0503 3.95771C19.4408 3.56719 20.074 3.56719 20.4645 3.95771L20.5858 4.07903C20.9763 4.46955 20.9763 5.10272 20.5858 5.49324L20.1716 5.34315Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 18L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Désinfection',
                icon: (
                  <svg className="w-12 h-12 mx-auto text-[#0A1E3C] dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 14L16 18C16 19.1046 15.1046 20 14 20L10 20C8.89543 20 8 19.1046 8 18L8 14" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 11L12 4L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M19 14H5M5 14L5 11M19 14L19 11" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 20L10 14.5C10 14.2239 10.2239 14 10.5 14L13.5 14C13.7761 14 14 14.2239 14 14.5L14 20" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                title: 'Contrôle des Insectes',
                icon: (
                  <svg className="w-12 h-12 mx-auto text-[#0A1E3C] dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11V12.5C8 13.3284 8.67157 14 9.5 14C10.3284 14 11 13.3284 11 12.5V11" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M13 11V12.5C13 13.3284 13.6716 14 14.5 14C15.3284 14 16 13.3284 16 12.5V11" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"/>
                    <circle cx="14.5" cy="9.5" r="1.5" fill="currentColor"/>
                    <path d="M5 3L9 7M19 3L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 7L12 14" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M17 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 16L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 19L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 19L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: 'Contrôle des Serpents',
                icon: (
                  <svg className="w-12 h-12 mx-auto text-[#0A1E3C] dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12.268 3.74876C12.7653 3.36861 13.4561 3.47782 13.8363 3.97512C14.2164 4.47243 14.1072 5.16321 13.6099 5.54335L8.70611 9.21593C8.20881 9.59608 7.51803 9.48686 7.13789 8.98956C6.75774 8.49226 6.86695 7.80148 7.36426 7.42133L12.268 3.74876Z" fill="currentColor"/>
                    <path d="M21 16C21 16 16 12.5 12 12.5C8 12.5 3 16 3 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 12C3 12 8 15.5 12 15.5C16 15.5 21 12 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M16.268 18.7488C16.7653 18.3686 17.4561 18.4778 17.8363 18.9751C18.2164 19.4724 18.1072 20.1632 17.6099 20.5434L12.7061 20.5434C12.2088 20.9235 11.518 20.8143 11.1379 20.317C10.7577 19.8197 10.867 19.1289 11.3643 18.7488L16.268 18.7488Z" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#E31E24]/20 dark:hover:border-[#E31E24]/20 transform hover:-translate-y-1"
              >
                <div className="text-[#0A1E3C] dark:text-white mb-4 transform transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-[#0A1E3C] dark:text-white text-base font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-[#0A1E3C] dark:text-white"
          >
            <a href="tel:+212666764626" className="flex items-center gap-2 hover:text-[#E31E24] transition-colors text-base">
              <div className="p-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              +212 6 66 76 46 26
            </a>
            <a href="mailto:Contact@cafardservices.com" className="flex items-center gap-2 hover:text-[#E31E24] transition-colors text-base">
              <div className="p-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E31E24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Contact@cafardservices.com
            </a>
            <a href="https://wa.me/212666764626" className="flex items-center gap-2 hover:text-[#25D366] transition-colors text-base">
              <div className="p-2 rounded-full bg-[#25D366] flex items-center justify-center w-9 h-9">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824z"/>
                </svg>
              </div>
              Chat WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 