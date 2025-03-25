'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

const Logo = ({ 
  className = '', 
  width = 150, 
  height = 50, 
  showText = false 
}: LogoProps) => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          className="relative"
        >
          <Image
            src={theme === 'dark' ? '/logos/logo-darkmode.png' : '/logos/logo.png'}
            alt="Société Cafards Services Logo"
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Logo; 