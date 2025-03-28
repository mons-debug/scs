'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 relative w-full">
        <Navbar />
        
        {/* Hero Section - Optimized for mobile */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
          {/* Background Elements - Reduced complexity for mobile */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/95 to-white dark:from-gray-900/80 dark:via-gray-900/95 dark:to-gray-900" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
            
            {/* Decorative shapes - Optimized for mobile */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 -left-32 w-48 h-48 md:w-64 md:h-64 bg-[#E31E24]/5 rounded-full blur-2xl transform-gpu" />
              <div className="absolute bottom-1/4 -right-32 w-48 h-48 md:w-64 md:h-64 bg-[#0A1E3C]/5 rounded-full blur-2xl transform-gpu" />
            </div>

            {/* Icons - Optimized positioning and size for mobile */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute left-[5%] top-[40%] transform-gpu"
              >
                <Image
                  src="/backicon/iconbackground-01.svg"
                  alt="Pest control icon"
                  width={80}
                  height={80}
                  className="w-10 h-10 md:w-16 md:h-16 opacity-30 dark:opacity-20 transform -rotate-12 select-none"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute right-[5%] bottom-[20%] transform-gpu"
              >
                <Image
                  src="/backicon/iconbackground-02.svg"
                  alt="Pest control icon"
                  width={80}
                  height={80}
                  className="w-8 h-8 md:w-14 md:h-14 opacity-30 dark:opacity-20 transform rotate-12 select-none"
                  priority
                />
              </motion.div>
            </div>
          </div>
          
          {/* Content - Mobile optimized spacing */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-full text-sm font-medium shadow-sm"
              >
                Société Cafards Services
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0A1E3C] to-[#E31E24] dark:from-white dark:to-[#E31E24]"
              >
                Contactez <span className="text-[#E31E24] dark:text-white">Nous</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Notre équipe d'experts est prête à vous aider. N'hésitez pas à nous contacter pour toute question.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Cards - Mobile optimized */}
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Phone Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#E31E24]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A1E3C] dark:text-white mb-2 md:mb-3">Téléphone</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">Appelez-nous du lundi au vendredi de 9h à 18h</p>
                <a href="tel:+212666764626" className="text-[#E31E24] font-semibold text-base md:text-lg hover:underline">06.66.76.46.26</a>
              </div>
              
              {/* Email Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#E31E24]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A1E3C] dark:text-white mb-2 md:mb-3">Email</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">Nous répondons à tous les emails dans un délai de 24 heures les jours ouvrables</p>
                <a href="mailto:Contact@cafardservices.com" className="text-[#E31E24] font-semibold text-base md:text-lg hover:underline">Contact@cafardservices.com</a>
              </div>
              
              {/* WhatsApp Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#E31E24]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A1E3C] dark:text-white mb-2 md:mb-3">WhatsApp</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">Pour une réponse rapide, contactez-nous via WhatsApp</p>
                <a href="https://wa.me/212666764626" className="text-[#E31E24] font-semibold text-base md:text-lg hover:underline">Chat sur WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-4">
                Envoyez-Nous un Message
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Pre-FAQ CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0A1E3C] dark:bg-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24]/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E31E24]/10 rounded-full -ml-32 -mb-32" />
              
              <div className="relative text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Prêt à éliminer vos nuisibles ?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et sans engagement.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="tel:+212666764626" 
                    className="inline-flex items-center justify-center bg-[#0A1E3C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#132d56] transition-colors shadow-lg w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appelez-nous
                  </a>
                  <a 
                    href="mailto:Contact@cafardservices.com" 
                    className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c91b1f] transition-colors shadow-lg w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Envoyez un email
                  </a>
                  <a 
                    href="https://wa.me/212666764626" 
                    className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c91b1f] transition-colors shadow-lg w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1E3C] dark:text-white mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Trouvez des réponses aux questions les plus courantes concernant nos services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Quels types de nuisibles pouvez-vous éliminer ?",
                  answer: "Nous traitons une large gamme de nuisibles, y compris les rongeurs, les insectes (cafards, puces, punaises de lit, etc.), et les reptiles. Notre équipe est formée pour identifier et éliminer efficacement tous types de nuisibles courants en milieu urbain et rural."
                },
                {
                  question: "Vos produits sont-ils sans danger pour les enfants et les animaux domestiques ?",
                  answer: "Oui, nous utilisons des produits écologiques et des méthodes sûres qui sont efficaces contre les nuisibles tout en étant sans danger pour votre famille et vos animaux de compagnie. Nous vous fournirons des instructions spécifiques pour chaque traitement afin de garantir une sécurité maximale."
                },
                {
                  question: "Combien de temps dure généralement un traitement de désinfection ?",
                  answer: "La durée d'un traitement dépend de la taille de la zone à traiter et du type d'infestation. En général, un traitement peut prendre entre 1 et 4 heures. Certains cas plus complexes peuvent nécessiter plusieurs visites. Nous vous fournirons un délai précis lors de notre évaluation initiale."
                },
                {
                  question: "Offrez-vous des garanties sur vos services ?",
                  answer: "Oui, tous nos services sont garantis. Si les nuisibles réapparaissent pendant la période de garantie, nous reviendrons gratuitement pour effectuer un traitement supplémentaire. La durée de la garantie varie selon le type de service, généralement entre 30 jours et 6 mois."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-bold text-[#0A1E3C] dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

// Add this CSS at the end of your global CSS file or in a style tag
const styles = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(10, 30, 60, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(10, 30, 60, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;
