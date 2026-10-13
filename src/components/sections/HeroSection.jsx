import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, FileDown } from 'lucide-react';
import Container from '../ui/Container';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import ClickSpark from '../reactbits/ClickSpark';
import DecryptedText from '../reactbits/DecryptedText';
import ShinyText from '../reactbits/ShinyText';
import ShapeWaves from '../reactbits/ShapeWaves';
import CountUp from '../reactbits/CountUp';
import { PROFILE } from '../../data/profileData';

const GridDistortion = lazy(() => import('../reactbits/GridDistortion'));

export default function HeroSection() {
  return (
    <ClickSpark sparkColor="#10b981" sparkCount={6} sparkRadius={18}>
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-neutral-200 dark:border-neutral-800/80">
        {/* React Bits Shape Waves Background */}
        <ShapeWaves waveCount={6} amplitude={40} speed={0.012} />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-8">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 border border-neutral-300 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-xs font-mono text-neutral-900 dark:text-neutral-300 shadow-xs backdrop-blur-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <DecryptedText text={PROFILE.status} animateOn="hover" speed={30} maxIterations={8} />
              </motion.div>

              {/* Heading with ShinyText */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.1] sm:leading-[1.05] mb-6 text-balance">
                Building Scalable <br className="hidden sm:inline" />
                <ShinyText text="High-Performance" speed={4} className="text-neutral-900 dark:text-white inline-block" /> <br className="hidden sm:inline" />
                React Interfaces.
              </h1>

              {/* Tagline / Positioning */}
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10">
                Hi, I’m <strong className="text-neutral-900 dark:text-white">{PROFILE.name}</strong>, a {PROFILE.role} with 3+ years of experience building production-grade web applications with React.js, Vite, Tailwind CSS, REST APIs, and modern frontend architecture.
              </p>

              {/* Primary & Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-14"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm w-full sm:w-auto"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs w-full sm:w-auto"
                  aria-label="Download Resume / CV (PDF)"
                >
                  <FileDown className="w-4 h-4 text-emerald-500" />
                  <span>Resume / CV</span>
                </a>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs flex-1 sm:flex-initial"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-colors shadow-xs"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-4.5 h-4.5" />
                    </a>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-colors shadow-xs"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Profile Avatar & Card */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-4 max-w-sm mx-auto shadow-md dark:shadow-xl backdrop-blur-xs"
              >
                <div className="aspect-square overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-4 bg-neutral-100 dark:bg-neutral-800 relative group cursor-pointer">
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    width="400"
                    height="400"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="hidden sm:block absolute inset-0 pointer-events-auto">
                    <Suspense fallback={null}>
                      <GridDistortion
                        imageSrc={PROFILE.avatarUrl}
                        grid={12}
                        mouse={0.14}
                        strength={0.18}
                        relaxation={0.9}
                      />
                    </Suspense>
                  </div>
                </div>

                <div className="p-2 text-center">
                  <h2 className="text-lg font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                    {PROFILE.name}
                  </h2>
                  <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-2">
                    {PROFILE.role}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-2">
                    📍 {PROFILE.location}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Key Engineering Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-neutral-200 dark:border-neutral-800/80 mt-12"
          >
            {PROFILE.stats.map((stat, idx) => {
              const numericVal = parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0;
              const suffix = stat.value.replace(/[0-9]/g, '');

              return (
                <div key={idx} className="p-5 bg-white dark:bg-[#0d0d12] border border-neutral-200 dark:border-neutral-800/80 shadow-xs dark:shadow-none hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-neutral-900 dark:text-white mb-1 flex items-center gap-0.5">
                    <CountUp
                      from={0}
                      to={numericVal}
                      duration={1.8}
                      delay={0.15 * idx}
                    />
                    <span className="text-emerald-500 font-bold">{suffix}</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </ClickSpark>
  );
}
