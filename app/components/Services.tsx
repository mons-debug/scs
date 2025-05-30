'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Dératisation',
      icon: '🐭',
      shortDescription: 'Élimination efficace des rongeurs avec des méthodes sûres et respectueuses de l\'environnement.',
      fullDescription: 'Service complet de dératisation utilisant des techniques modernes et des produits certifiés pour éliminer les rongeurs de votre domicile ou entreprise.',
      image: '/divh.jpg',
      category: 'Rongeurs'
    },
    {
      id: 2,
      title: 'Désinfection',
      icon: '🧼',
      shortDescription: 'Désinfection complète de vos espaces contre virus, bactéries et autres micro-organismes.',
      fullDescription: 'Désinfection professionnelle utilisant des produits homologués pour assurer un environnement sain et sécurisé.',
      image: '/divh.jpg',
      category: 'Désinfection'
    },
    {
      id: 3,
      title: 'Désinsectisation',
      icon: '🦗',
      shortDescription: 'Traitement professionnel contre tous types d\'insectes nuisibles.',
      fullDescription: 'Élimination ciblée des insectes avec des traitements adaptés à chaque type de nuisible pour une protection durable.',
      image: '/divh.jpg',
      category: 'Insectes'
    },
    {
      id: 4,
      title: 'Traitement Anti-Serpents',
      icon: '🐍',
      shortDescription: 'Protection spécialisée contre les serpents avec des méthodes préventives et curatives.',
      fullDescription: 'Service spécialisé de protection contre les serpents incluant la prévention, l\'élimination sécurisée et les conseils de protection.',
      image: '/divh.jpg',
      category: 'Serpents'
    },
    {
      id: 5,
      title: 'Traitement Punaises de Lit',
      icon: '🛏️',
      shortDescription: 'Élimination complète des punaises de lit avec garantie de résultat.',
      fullDescription: 'Traitement spécialisé contre les punaises de lit utilisant des méthodes éprouvées pour une élimination complète et durable.',
      image: '/divh.jpg',
      category: 'Punaises'
    },
    {
      id: 6,
      title: 'Traitement Anti-Cafards',
      icon: '🪳',
      shortDescription: 'Extermination efficace des cafards avec des solutions durables.',
      fullDescription: 'Service professionnel d\'élimination des cafards avec traitement ciblé et mesures préventives pour éviter les récidives.',
      image: '/divh.jpg',
      category: 'Cafards'
    }
  ];

  const handleWhatsAppClick = (service: any) => {
    const message = `Bonjour, je suis intéressé par votre service: ${service.title}. Pouvez-vous me fournir plus d'informations? Merci.`;
    const whatsappUrl = `https://wa.me/212666764626?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium rounded-full">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-4">
            Solutions <span className="text-[#E31E24]">Professionnelles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services de désinfection et de lutte antiparasitaire 
            pour protéger votre domicile et votre entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#E31E24]/20 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white group-hover:text-[#E31E24] transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick(service)}
                  className="bg-gradient-to-r from-[#E31E24]/80 via-[#C41017]/70 to-[#E31E24]/80 hover:from-[#E31E24]/80 hover:via-[#C41017]/70 hover:to-[#E31E24]/80 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <div className="animate-whatsapp-pulse bg-white/20 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824z"/>
                    </svg>
                  </div>
                  Contactez-nous via WhatsApp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 