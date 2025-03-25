'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#0A1E3C] dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">À Propos de Nous</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Société Cafards Services offre des services professionnels de désinfection et de contrôle des nuisibles pour les particuliers et les entreprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 dark:text-gray-400 hover:text-[#E31E24] transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-300 dark:text-gray-400 hover:text-[#E31E24] transition-colors">Services</Link></li>
              <li><Link href="/processus" className="text-gray-300 dark:text-gray-400 hover:text-[#E31E24] transition-colors">Processus</Link></li>
              <li><Link href="/contact" className="text-gray-300 dark:text-gray-400 hover:text-[#E31E24] transition-colors">Contact</Link></li>
              <li><Link href="/about" className="text-gray-300 dark:text-gray-400 hover:text-[#E31E24] transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Nous Contacter</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-[#E31E24] mt-1">
                  <HiMail size={18} />
                </div>
                <a href="mailto:Contact@cafardservices.com" className="text-gray-300 dark:text-gray-400 ml-2 hover:text-[#E31E24] transition-colors">Contact@cafardservices.com</a>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-[#E31E24] mt-1">
                  <HiPhone size={18} />
                </div>
                <a href="tel:+212666764626" className="text-gray-300 dark:text-gray-400 ml-2 hover:text-[#E31E24] transition-colors">06.66.76.46.26</a>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-[#E31E24] mt-1">
                  <FaWhatsapp size={18} />
                </div>
                <a href="https://wa.me/212666764626" className="text-gray-300 dark:text-gray-400 ml-2 hover:text-green-400 transition-colors">
                  Chat sur WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-[#E31E24] mt-1">
                  <HiLocationMarker size={18} />
                </div>
                <a href="https://maps.google.com/?q=RUE+CADI+AYYAD+1+ETG+APPT+2+Tanger+Morocco" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 ml-2 hover:text-[#E31E24] transition-colors">RUE CADI AYYAD 1 ETG APPT 2, Tanger 20</a>
              </li>
            </ul>
          </div>

          {/* Newsletter - with dark mode styles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Newsletter</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos actualités et offres spéciales
            </p>
            <form className="flex" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E31E24] dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                type="submit"
                className="bg-[#E31E24] px-4 py-2 rounded-r-lg hover:bg-[#c91b1f] transition-colors"
              >
                <span className="sr-only">S'inscrire</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 border-t border-gray-700 dark:border-gray-800 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Notre Localisation</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5374660540305!2d-5.7932598!3d35.7675064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf05c42d3%3A0x76bfc571bfb4e747!2sRue%20Cadi%20Ayyad%2C%20Tanger%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1711407062034!5m2!1sfr!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Société Cafards Services Location"
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Société Cafards Services. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61555182577107" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#E31E24] transition-colors"
              aria-label="Suivez-nous sur Facebook"
            >
              <FaFacebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/cafardservices/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#E31E24] transition-colors"
              aria-label="Suivez-nous sur Instagram"
            >
              <FaInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://wa.me/212666764626" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Contactez-nous sur WhatsApp"
            >
              <FaWhatsapp size={20} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 