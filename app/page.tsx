import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative w-full">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </main>
    </div>
  );
}
