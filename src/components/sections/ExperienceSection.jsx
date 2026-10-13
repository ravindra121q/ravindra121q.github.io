import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { EXPERIENCE, EDUCATION } from '../../data/experienceData';

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-neutral-50/50 dark:bg-[#060608] border-b border-neutral-200 dark:border-neutral-800/80">
      <Container size="xl">
        {/* Career Experience Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white text-balance">
            Professional Experience
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mt-4">
            Proven track record of building production-grade React.js applications, optimizing user engagement, and enhancing Core Web Vitals.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-24">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#0d0d12] p-8 md:p-10 group hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <span className="text-emerald-500 font-mono font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white text-balance">
            Education & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="px-2.5 py-1 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold mb-4">
                  {edu.institution}
                </div>

                {edu.highlights.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="text-emerald-500 font-mono">▸</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
