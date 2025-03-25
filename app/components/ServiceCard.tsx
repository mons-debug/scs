'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-0">
          <div className="bg-red-600 text-white px-6 py-2 rounded-r-lg shadow-lg">
            ◆ {service.title} ◆
          </div>
        </div>
        {service.price && (
          <div className="absolute bottom-4 right-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-[-3deg]">
              {service.price.includes('Consultation') 
                ? 'Consultation et devis gratuits'
                : `À PARTIR DE ${service.price}DH`
              }
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-white text-lg text-center font-medium">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
} 