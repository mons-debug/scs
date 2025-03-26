'use client';

import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceIconProps {
  title: string;
  iconNumber: string;
  className?: string;
}

const ServiceIcons = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const services = [
    { title: 'Contrôle des Rongeurs', iconNumber: '01' },
    { title: 'Désinfection', iconNumber: '02' },
    { title: 'Contrôle des Insectes', iconNumber: '03' },
    { title: 'Contrôle des Serpents', iconNumber: '04' },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceIcon 
              key={index}
              title={service.title}
              iconNumber={service.iconNumber}
              className="transform transition-all duration-300 hover:translate-y-[-8px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceIcon = ({ title, iconNumber, className = "" }: ServiceIconProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md ${className}`}
    >
      <div className="relative w-24 h-24 mb-4">
        <Image 
          src={isDarkMode ? `/svgiconhomedm-${iconNumber}.webp` : `/svgiconhome-${iconNumber}.webp`}
          alt={title}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 96px, 96px"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Failed to load image: ${target.src}`);
            // Try loading the opposite theme image as fallback
            target.src = isDarkMode ? `/svgiconhome-${iconNumber}.webp` : `/svgiconhomedm-${iconNumber}.webp`;
          }}
        />
      </div>
      <h3 className="text-center text-gray-900 dark:text-white font-semibold text-lg">{title}</h3>
    </motion.div>
  );
};

export default ServiceIcons; 