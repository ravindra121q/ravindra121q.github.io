import { motion } from 'framer-motion';
import { Terminal, Cpu, Gauge, Code2 } from 'lucide-react';
import Container from '../ui/Container';
import SpotlightCard from '../reactbits/SpotlightCard';
import DecryptedText from '../reactbits/DecryptedText';
import LogoLoop from '../reactbits/LogoLoop';
import { useTheme } from '../../context/useTheme';
import { CAPABILITIES } from '../../data/capabilitiesData';

const icons = [Cpu, Code2, Gauge, Terminal];

const techItems = [
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">React 18</span>, title: "React.js" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">JavaScript ES2024</span>, title: "JavaScript" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">Vite 8</span>, title: "Vite" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">Tailwind CSS v4</span>, title: "Tailwind CSS" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">REST APIs</span>, title: "REST APIs" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">Zustand</span>, title: "Zustand" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">TanStack Query</span>, title: "TanStack Query" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">WCAG 2.1 AA</span>, title: "Accessibility" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">Framer Motion</span>, title: "Framer Motion" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">Vitest</span>, title: "Vitest" },
  { node: <span className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-900 dark:text-white shadow-xs">EmailJS</span>, title: "EmailJS" }
];

export default function CapabilitiesSection() {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-24 bg-neutral-50/50 dark:bg-[#060608] border-b border-neutral-200 dark:border-neutral-800/80">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white text-balance">
            Engineering Capabilities
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mt-4">
            Grouped around core engineering strengths. Hover over any card for interactive spotlight cursor tracking.
          </p>
        </div>

        {/* LogoLoop Continuous Tech Ticker */}
        <div className="mb-14 py-4 border-y border-neutral-200 dark:border-neutral-800/80 bg-white/40 dark:bg-neutral-900/30 backdrop-blur-xs overflow-hidden">
          <LogoLoop
            logos={techItems}
            speed={70}
            direction="left"
            logoHeight={34}
            gap={24}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor={isDarkMode ? '#060608' : '#fafafa'}
            scaleOnHover={true}
            ariaLabel="Technologies and tools stack"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((group, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={isDarkMode ? "rgba(16, 185, 129, 0.08)" : "rgba(0, 0, 0, 0.04)"}
                  className="h-full flex flex-col justify-between bg-white dark:bg-[#0d0d12] border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                        <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                        <DecryptedText text={group.category} animateOn="hover" speed={35} maxIterations={8} />
                      </h3>
                    </div>

                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-6">
                      {group.summary}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="text-xs font-bold font-mono text-neutral-900 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            <span>{skill.name}</span>
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 pl-3.5 leading-relaxed">
                            {skill.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
