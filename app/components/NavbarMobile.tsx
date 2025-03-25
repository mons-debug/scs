'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/services', label: 'Services' },
    { href: '/processus', label: 'Processus' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="lg:hidden flex items-center mobile-nav-container">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-toggle focus:outline-none touch-feedback nav-toggle-button"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <div className="relative w-6 h-4">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute h-0.5 w-6 bg-gray-900 dark:bg-white rounded-full"
            style={{ top: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-0.5 w-6 bg-gray-900 dark:bg-white rounded-full"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute h-0.5 w-6 bg-gray-900 dark:bg-white rounded-full"
            style={{ bottom: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 z-50 shadow-xl flex flex-col p-5"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="w-28">
                <Image 
                  src="/logos/logo.svg"
                  alt="Société Cafards Services"
                  width={100}
                  height={40}
                  className="w-full h-auto dark:invert"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none touch-feedback"
                aria-label="Fermer le menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col">
              <nav className="flex-1 mb-6">
                <ul className="space-y-3">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                    >
                      <Link
                        href={link.href}
                        className={`block py-2.5 px-4 rounded-lg text-base font-medium ${
                          isActive(link.href)
                            ? 'bg-[#E31E24]/10 text-[#E31E24] font-bold'
                            : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
                <motion.div
                  custom={navLinks.length + 1}
                  variants={linkVariants}
                >
                  <a 
                    href="tel:+212666764626"
                    className="flex items-center py-2.5 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 touch-feedback"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#E31E24]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06.66.76.46.26
                  </a>
                </motion.div>

                <motion.div
                  custom={navLinks.length + 2}
                  variants={linkVariants}
                >
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#E31E24] text-white font-medium shadow-md hover:bg-[#c91b1f] touch-feedback"
                  >
                    Obtenir un Devis
                  </Link>
                </motion.div>

                <motion.div
                  custom={navLinks.length + 3}
                  variants={linkVariants}
                  className="flex justify-center mt-4"
                >
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none touch-feedback"
                    aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
                  >
                    {theme === 'dark' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile; 