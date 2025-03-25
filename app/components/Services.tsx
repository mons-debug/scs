'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import '../styles/swiper.css';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    title: 'Villas & Mini-villas',
    description: 'Protégez votre maison contre l\'invasion des cafards avec un traitement professionnel longue durée.',
    price: '1200DH',
    image: '/images/home/Flux_Dev_enerate_a_highquality_realistic_image_of_a_luxurious__3.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9V9.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 12V12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 15V15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Écoles & Instituts',
    description: 'Assurez un environnement sain et protégé pour les élèves et enseignants.',
    price: '1400DH',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_modern_school_buildin_1.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14L8 18M12 14L16 18M12 14V20M6 12L2 8M6 12L2 16M6 12H10M18 12L22 8M18 12L22 16M18 12H14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 6h16M4 10h16" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Restaurants & Snacks',
    description: 'Respectez les normes sanitaires et protégez votre établissement contre les infestations !',
    price: '900DH',
    image: '/images/home/Flux_Dev_Create_a_highquality_realistic_image_of_a_modern_rest_0.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Entreprises & Bureaux',
    description: 'Offrez un espace de travail sans nuisibles pour vos employés !',
    price: 'Consultation et devis gratuits',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_sleek_modern_office_b_0.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 11V3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Appartements & Résidences',
    description: 'Dites adieu aux cafards avec une solution efficace et durable !',
    price: '900DH',
    image: '/images/home/Flux_Dev_Create_a_highquality_realistic_image_of_a_wellmaintai_1.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 21V7l6 3v11" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Usines & Entrepôts',
    description: 'Protégez vos stocks et vos locaux contre les nuisibles!',
    price: '1200DH',
    image: '/images/home/Flux_Dev_Generate_a_realistic_image_of_a_large_modern_industri_1.jpeg',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 21V11l-6-4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-[240px]">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        priority={index < 3}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.jpg';
        }}
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {service.description}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#E31E24] text-white px-6 py-3 rounded-xl text-base font-medium 
        hover:bg-[#E31E24]/90 transition-all duration-300 flex items-center justify-center"
      >
        <span>
          {service.price.includes('Consultation') 
            ? 'Consultation Gratuite'
            : `À partir de ${service.price}`
          }
        </span>
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  </motion.div>
);

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsLoading(false);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
      id="services"
      ref={servicesRef}
      className={`py-20 bg-white dark:bg-gray-900 relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes et personnalisées de désinfection pour répondre à tous vos besoins, 
            que vous soyez un particulier ou un professionnel
          </p>
        </motion.div>

        {isMobile ? (
          <div className="relative -mx-4 px-4">
            <Swiper
              modules={[Pagination, Navigation, A11y]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              pagination={{
                clickable: true,
                type: 'bullets'
              }}
              onInit={() => setSwiperInitialized(true)}
              a11y={{
                enabled: true,
                prevSlideMessage: 'Service précédent',
                nextSlideMessage: 'Service suivant',
                firstSlideMessage: 'Premier service',
                lastSlideMessage: 'Dernier service',
              }}
              className="services-swiper !pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.title} className="pb-4">
                  <ServiceCard service={service} index={swiperInitialized ? index : 0} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services; 