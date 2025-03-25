import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div>
            <h1 className="text-9xl font-bold text-[#E31E24]">404</h1>
          </div>
          
          <div className="mt-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0A1E3C] dark:text-white mb-4">
              Page Non Trouvée
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center bg-[#E31E24] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#0A1E3C] dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  Retour à l'Accueil
                </Link>
              </div>
              
              <div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="relative w-full max-w-lg mt-16">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#E31E24]/10 dark:bg-[#E31E24]/20 rounded-full opacity-70"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#0A1E3C]/10 dark:bg-[#0A1E3C]/20 rounded-full opacity-70"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/20 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 