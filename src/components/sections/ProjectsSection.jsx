import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../ui/Container';
import DecryptedText from '../reactbits/DecryptedText';
import { PROJECTS } from '../../data/projectsData';

function LiveProjectPreview({ project }) {
  const [showInteractiveIframe, setShowInteractiveIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#');
  const canEmbedIframe = hasLiveUrl && project.allowIframe !== false;

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 group">
      {/* Background / Fallback Static Image */}
      <img
        src={project.image}
        alt={project.title}
        width="600"
        height="375"
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          showInteractiveIframe && iframeLoaded ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
        }`}
      />

      {/* Direct Live Website Preview via Iframe (only when explicitly requested by user) */}
      {showInteractiveIframe && canEmbedIframe && (
        <iframe
          src={project.liveUrl}
          title={`Live preview of ${project.title}`}
          onLoad={() => setIframeLoaded(true)}
          tabIndex="-1"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className={`absolute top-0 left-0 w-[300%] h-[300%] origin-top-left transition-opacity duration-700 pointer-events-none border-0 ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: 'scale(0.33333333)',
          }}
        />
      )}

      {/* Category Tag */}
      <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-white/10 z-10">
        {project.category}
      </div>

      {/* Live Status Badge & Interactive Toggle */}
      {hasLiveUrl && (
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          {canEmbedIframe && !showInteractiveIframe && (
            <button
              type="button"
              onClick={() => setShowInteractiveIframe(true)}
              className="bg-emerald-500/90 hover:bg-emerald-400 text-black text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-1 border border-emerald-400 transition-colors shadow-sm cursor-pointer"
              title="Load interactive live preview iframe"
            >
              Interactive Preview
            </button>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit live website for ${project.title}`}
            className="bg-black/80 backdrop-blur-xs text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 border border-emerald-500/30 flex items-center gap-1.5 hover:border-emerald-400 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>LIVE SITE</span>
          </a>
        </div>
      )}

      {/* Hover Overlay with External Link */}
      {hasLiveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live website for ${project.title}`}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
        >
          <span className="px-4 py-2 bg-white text-black dark:bg-neutral-900 dark:text-white text-xs font-mono font-bold uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>Open Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>
      )}
    </div>
  );
}

export default function ProjectsSection({ limit = null, title = "Featured Case Studies", showHeader = true }) {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'EdTech & AI Platform', 'Healthcare & Enterprise System', 'Corporate Platform & Admin Panel', 'Luxury Modernization & Design System'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section className="py-24 bg-background border-b border-neutral-200 dark:border-neutral-800/80">
      <Container size="xl">
        {showHeader && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
                Production Case Studies
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white text-balance">
                {title}
              </h2>
            </div>
            {limit && (
              <a
                href="/projects"
                className="mt-4 md:mt-0 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1.5 transition-colors"
              >
                <span>View All Case Studies ({PROJECTS.length})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Filter Categories */}
        {!limit && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-neutral-200 dark:border-neutral-800 whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer transition-all shrink-0 ${
                  activeFilter === cat
                    ? 'bg-emerald-500 text-black font-bold shadow-xs shadow-emerald-500/20 border border-emerald-400'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Stack */}
        <div className="space-y-12">
          {displayedProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#0d0d12] overflow-hidden group hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-start">
                  {/* Left Column: Direct Live Website Preview */}
                  <div className="lg:col-span-5">
                    <LiveProjectPreview project={project} />

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 bg-neutral-50 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 text-center">
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">{m.label}</div>
                          <div className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Information & Architecture */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                        {project.category}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-2">
                        <DecryptedText text={project.title} animateOn="hover" speed={30} maxIterations={8} />
                      </h3>
                      <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-[11px] font-mono bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-2 mb-6">
                        {project.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                            <span className="text-emerald-500 font-mono font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Launch live application for ${project.title}`}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xs shadow-emerald-500/20"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`arch-breakdown-${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Architectural Breakdown' : 'Architecture Breakdown'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Architectural Details Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`arch-breakdown-${project.id}`}
                      role="region"
                      aria-label={`${project.title} Architectural Breakdown`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 md:p-10"
                    >
                      <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">
                        Architectural Deep-Dive
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="font-mono font-bold text-neutral-500 uppercase block mb-2">01. Problem</span>
                          <p className="text-neutral-700 dark:text-neutral-300">{project.architecture.problem}</p>
                        </div>
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="font-mono font-bold text-neutral-500 uppercase block mb-2">02. Solution</span>
                          <p className="text-neutral-700 dark:text-neutral-300">{project.architecture.solution}</p>
                        </div>
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                          <span className="font-mono font-bold text-neutral-500 uppercase block mb-2">03. Challenges</span>
                          <p className="text-neutral-700 dark:text-neutral-300">{project.architecture.challenges}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
