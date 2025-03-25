'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { usePathname } from 'next/navigation';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  
  return (
    <header className="site-header bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logos/logo.svg"
              alt="Société Cafards Services"
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto dark:invert"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') 
                  ? 'text-[#E31E24] border-b-2 border-[#E31E24]' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/about') 
                  ? 'text-[#E31E24] border-b-2 border-[#E31E24]' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
              }`}
            >
              À Propos
            </Link>
            <Link 
              href="/services" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/services') 
                  ? 'text-[#E31E24] border-b-2 border-[#E31E24]' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/processus" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/processus') 
                  ? 'text-[#E31E24] border-b-2 border-[#E31E24]' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
              }`}
            >
              Processus
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact') 
                  ? 'text-[#E31E24] border-b-2 border-[#E31E24]' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#E31E24] dark:hover:text-[#E31E24]'
              }`}
            >
              Contact
            </Link>
            
            <a
              href="https://wa.me/212666764626?text=Bonjour, je souhaite obtenir un devis pour vos services de désinsectisation. Pourriez-vous me contacter? Merci."
              className="ml-4 px-4 py-2 bg-[#E31E24] text-white rounded-lg font-medium hover:bg-[#c91b1f] transition-colors shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Obtenir un Devis
            </a>
            
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </nav>
          
          {/* Mobile Menu */}
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar; 