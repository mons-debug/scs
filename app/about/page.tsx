'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

// Define custom styles
const customStyles = `
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <style jsx global>
          {customStyles}
        </style>
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent dark:from-black/70 dark:via-black/60 dark:to-transparent z-10" />
            <Image
              src="/aboutbg1.jpeg"
              alt="À Propos de Société Cafards Services"
              fill
              className="object-cover object-center brightness-105 contrast-105 saturate-110 scale-105 transform transition-transform duration-15000 ease-in-out animate-slow-zoom"
              priority
              sizes="100vw"
              quality={100}
            />
            
            {/* Background Patterns */}
            <div className="absolute inset-0 z-20 opacity-50">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#E31E24" strokeWidth="0.6" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E31E24]/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#0A1E3C]/20 blur-3xl"></div>
          </div>
          
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-md bg-white/10 dark:bg-gray-900/20 p-8 md:p-10 rounded-3xl shadow-xl border border-white/10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 md:mb-8 inline-block"
              >
                <span className="inline-block px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-[#E31E24]/40 text-white font-medium mb-4 md:mb-6 backdrop-blur-md text-sm md:text-base shadow-xl">
                  Depuis 2008
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 text-shadow-sm leading-tight">
                À Propos de <span className="relative inline-block text-[#E31E24]">
                  SCS
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 md:-bottom-3 left-0 h-1.5 md:h-2 bg-white/60 rounded-full"
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-sm font-medium">
                Plus de 15 ans d'expérience dans la désinfection et le contrôle des nuisibles
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4"
              >
                <a 
                  href="#notre-histoire" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-[#0A1E3C] dark:text-white rounded-full font-medium hover:bg-[#E31E24] hover:text-white dark:hover:bg-[#E31E24] transition-all duration-300 shadow-lg group"
                >
                  Découvrir notre histoire
                  <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#E31E24] text-white rounded-full font-medium hover:bg-white hover:text-[#0A1E3C] transition-all duration-300 shadow-lg group"
                >
                  Contactez-nous
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story */}
        <section id="notre-histoire" className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E31E24]/5 dark:bg-[#E31E24]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0A1E3C]/5 dark:bg-[#0A1E3C]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100/20 dark:border-gray-700/20 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100/20 dark:border-gray-700/20 rounded-full -z-10"></div>
          
          <div id="notre-histoire" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium mb-6 shadow-sm">
                Depuis 2008
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1E3C] dark:text-white mb-8 leading-tight">
                Notre <span className="text-[#E31E24]">Histoire</span>
              </h2>
            </motion.div>

            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full opacity-50 sm:opacity-100"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 rounded-full opacity-50 sm:opacity-100"></div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed"
                >
                  Depuis notre création en 2008, Société Cafards Services s'est engagé à fournir des services de désinfection de première qualité aux particuliers et aux entreprises.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed"
                >
                  Notre approche combine des techniques modernes avec un engagement envers l'environnement, garantissant des solutions efficaces et durables.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed"
                >
                  Aujourd'hui, nous sommes fiers d'être l'un des leaders du secteur, servant des milliers de clients satisfaits chaque année.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0A1E3C] dark:hover:bg-gray-800 transition-colors shadow-lg group"
                  >
                    Contactez Notre Équipe
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
              
              <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <span>© {new Date().getFullYear()} Société Cafards Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800 relative">
          {/* Background patterns */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#E31E24" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium mb-6 shadow-sm">
                Nos Principes
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1E3C] dark:text-white mb-8 leading-tight">
                Nos <span className="text-[#E31E24]">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nos valeurs fondamentales guident chacune de nos actions et décisions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Excellence',
                  description: 'Nous nous efforçons d\'offrir un service exceptionnel à chaque intervention, en dépassant les attentes de nos clients. Notre équipe hautement qualifiée est formée aux dernières techniques de désinfection.',
                  icon: '🎯',
                  color: 'from-blue-500/20 to-blue-600/20',
                  highlights: ['Résultats garantis', 'Personnel qualifié', 'Satisfaction client']
                },
                {
                  title: 'Durabilité',
                  description: 'Engagement envers des solutions respectueuses de l\'environnement pour un impact positif à long terme. Nous utilisons des produits écologiques et des méthodes qui préservent l\'écosystème.',
                  icon: '🌱',
                  color: 'from-green-500/20 to-green-600/20',
                  highlights: ['Produits écologiques', 'Méthodes durables', 'Protection de l\'environnement']
                },
                {
                  title: 'Innovation',
                  description: 'Adoption continue des dernières technologies et méthodes pour améliorer constamment nos services. Nous investissons dans la recherche pour offrir des solutions toujours plus efficaces.',
                  icon: '💡',
                  color: 'from-amber-500/20 to-amber-600/20',
                  highlights: ['Technologie avancée', 'Formation continue', 'Amélioration constante']
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10`}></div>
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl h-full border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 flex items-center justify-center text-4xl mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1E3C] dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{value.description}</p>
                    <div className="space-y-2">
                      {value.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-[#E31E24] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#0A1E3C] dark:text-gray-200 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-[#0A1E3C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E31E24] transition-colors shadow-lg group"
              >
                Découvrir nos services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute left-0 right-0 top-0 h-1/3 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent -z-10"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E31E24]/5 dark:bg-[#E31E24]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0A1E3C]/5 dark:bg-[#0A1E3C]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-[#E31E24]/10 dark:bg-[#E31E24]/20 text-[#E31E24] text-sm font-medium mb-6 shadow-sm">
                Témoignages
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1E3C] dark:text-white mb-8 leading-tight">
                Ce que <span className="text-[#E31E24]">disent</span> nos clients
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Découvrez l'expérience de nos clients qui nous font confiance pour leurs besoins en désinfection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ahmed Al-Zawawi',
                  position: 'Gérant de Restaurant',
                  testimonial: 'Le service offert par Société Cafards Services a dépassé toutes mes attentes. Leur équipe a traité notre problème d\'infestation rapidement et efficacement, nous permettant de rouvrir notre restaurant dans les plus brefs délais.',
                  rating: 5
                },
                {
                  name: 'Lina Mahmoud',
                  position: 'Propriétaire Immobilier',
                  testimonial: 'Grâce à Société Cafards Services, nos immeubles sont maintenant totalement débarrassés des nuisibles. Leur approche professionnelle et leurs techniques respectueuses de l\'environnement font toute la différence.',
                  rating: 5
                },
                {
                  name: 'Omar Al-Farsi',
                  position: 'Directeur d\'Hôtel',
                  testimonial: 'Je recommande vivement Société Cafards Services à tous les établissements hôteliers. Leur service discret et efficace nous a permis de maintenir l\'excellente réputation de notre hôtel tout en résolvant rapidement nos problèmes.',
                  rating: 4
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-center text-[#E31E24] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#E31E24]' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-[#0A1E3C] dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#E31E24] hover:bg-[#0A1E3C] transition-colors duration-300"
              >
                Obtenez votre devis gratuit
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-[#0A1E3C] to-[#182d4d] dark:from-gray-900 dark:to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E24]/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E31E24]/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Prêt à Travailler Avec Notre Équipe?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Contactez-nous dès aujourd'hui pour découvrir comment nos services peuvent répondre à vos besoins de désinfection et de contrôle des nuisibles.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#E31E24] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-[#0A1E3C] transition-colors shadow-xl group"
                >
                  Contactez-nous
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
        <FloatingActionButton />
      </main>
    </>
  );
};

export default AboutPage; 