'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-9xl font-bold text-[#E31E24] mb-4">404</h1>
              <div className="w-24 h-1 bg-[#0A1E3C] dark:bg-white mx-auto rounded-full"></div>
            </motion.div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Page introuvable
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Découvrez nos services professionnels de lutte antiparasitaire.
            </p>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#c91b1f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:ring-offset-2"
                >
                  Retour à l'accueil
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Découvrir nos services
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="relative w-full max-w-lg mt-16">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full opacity-70"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 rounded-full opacity-70"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/20 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 