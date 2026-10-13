import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { useTheme } from '../../context/useTheme';
import { PRINCIPLES } from '../../data/principlesData';

const TechText = lazy(() => import('../reactbits/TechText'));

export default function ApproachSection() {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const [shouldLoadCanvas, setShouldLoadCanvas] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !window.IntersectionObserver) {
      setShouldLoadCanvas(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadCanvas(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fontSize = windowWidth < 480 ? 55 : windowWidth < 768 ? 85 : 130;

  return (
    <section ref={sectionRef} className="py-24 bg-background border-b border-neutral-200 dark:border-neutral-800/80">
      <Container size="xl">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
            How I Think
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white text-balance">
            Engineering Approach
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mt-4">
            Core principles guiding every line of code, component contract, and interface decision. Drag letters to test spring physics.
          </p>
        </div>

        {/* Interactive React Bits TechText Wordmark Canvas */}
        <div className="w-full h-44 sm:h-56 md:h-64 mb-16 relative overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xs flex items-center justify-center">
          {shouldLoadCanvas ? (
            <Suspense fallback={
              <div className="font-mono font-black text-xl sm:text-3xl uppercase tracking-widest text-neutral-400">
                REACT ARCHITECT
              </div>
            }>
              <TechText
                text="REACT ARCHITECT"
                fontWeight={800}
                fontSize={fontSize}
                color={isDarkMode ? '#ffffff' : '#0f172a'}
                accentColor={isDarkMode ? '#10b981' : '#059669'}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={16}
                selection={true}
                labels={true}
                draggable={true}
                sweep={true}
                speed={0.8}
              />
            </Suspense>
          ) : (
            <div className="font-mono font-black text-xl sm:text-3xl uppercase tracking-widest text-neutral-400">
              REACT ARCHITECT
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRINCIPLES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0d0d12] hover:border-emerald-500/50 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
