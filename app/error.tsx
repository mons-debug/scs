'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-20 h-20 mx-auto mb-6 bg-[#E31E24]/10 rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-10 h-10 text-[#E31E24]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </motion.div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Oups ! Quelque chose s'est mal passé
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Une erreur inattendue s'est produite. Nos équipes ont été notifiées et travaillent pour résoudre le problème.
        </p>
        
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="w-full bg-[#E31E24] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c91b1f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:ring-offset-2"
          >
            Réessayer
          </motion.button>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Retour à l'accueil
          </motion.a>
        </div>
        
        {error.digest && (
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            ID d'erreur: {error.digest}
          </p>
        )}
      </motion.div>
    </div>
  )
} 