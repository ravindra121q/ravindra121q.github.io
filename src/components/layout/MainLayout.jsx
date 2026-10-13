import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function MainLayout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:font-mono focus:text-xs focus:font-bold focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-black dark:bg-white/10 dark:hover:bg-white/20 dark:backdrop-blur-md text-white p-3.5 border-2 border-black dark:border-white/25 shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}