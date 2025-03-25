'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    role: 'Propriétaire de Maison',
    content: 'Société Cafards Services a fourni un service exceptionnel. Ils étaient professionnels, minutieux et ont complètement éliminé notre problème. Je les recommande vivement !',
  },
  {
    id: 2,
    name: 'Jean-Claude Martin',
    role: 'Restaurateur',
    content: 'En tant que propriétaire de restaurant, la désinfection est cruciale pour notre entreprise. Société Cafards Services est notre partenaire de confiance depuis des années.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Gestionnaire Immobilier',
    content: 'Leur équipe est toujours ponctuelle, professionnelle et efficace. Ils gèrent plusieurs de nos propriétés et fournissent constamment d\'excellents résultats.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez pourquoi nos clients nous font confiance pour leurs besoins en désinfection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center text-[#E31E24] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < 5 ? 'text-[#E31E24]' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-[#0A1E3C] dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E31E24] mb-2">15+</div>
            <div className="text-gray-600">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E31E24] mb-2">1000+</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E31E24] mb-2">24/7</div>
            <div className="text-gray-600">Service d'Urgence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E31E24] mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Garantie</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 