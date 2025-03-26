'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Processus', href: '/processus' },
    { name: 'Contact', href: '/contact' }
  ];

  // Only render theme toggle buttons if mounted to prevent hydration mismatch
  const renderThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' 
          : 'bg-transparent dark:bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-4 md:py-5">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-12 md:h-14 flex items-center justify-center overflow-visible">
                <Logo 
                  className="w-auto h-full" 
                  width={120}
                  height={40}
                  showText={!isScrolled}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      active 
                        ? 'text-[#E31E24] font-semibold' 
                        : isScrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
                          : 'text-gray-900 dark:text-white hover:text-[#E31E24] dark:hover:text-[#E31E24]'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#E31E24] rounded-t-md"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              className="flex items-center ml-4 pl-4 border-l border-gray-200 dark:border-gray-700"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    isScrolled
                      ? 'bg-[#E31E24] text-white hover:bg-[#0A1E3C]'
                      : 'bg-[#E31E24] text-white hover:bg-[#0A1E3C]'
                  } px-6 py-2 rounded-full text-sm font-medium transition-all duration-300`}
                >
                  Obtenir un Devis
                </motion.button>
              </Link>
              <div className="ml-4">
                {renderThemeToggle()}
              </div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            {renderThemeToggle()}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white'
              } hover:text-[#E31E24] dark:hover:text-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]`}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 pt-4 pb-5 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                        active 
                          ? 'text-[#E31E24] bg-gray-50 dark:bg-gray-800/50 font-medium' 
                          : 'text-gray-700 dark:text-gray-300'
                      } hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-[#E31E24] dark:hover:text-[#E31E24] transition-colors duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <span className="w-1 h-4 rounded-full bg-[#E31E24]"></span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-3 mt-2 border-t border-gray-100 dark:border-gray-800"
              >
                <Link href="/contact" className="block px-2 py-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#E31E24] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#0A1E3C] transition-colors duration-300 shadow-md flex items-center justify-center"
                  >
                    <span>Obtenir un Devis</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 