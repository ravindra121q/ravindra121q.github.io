import Container from '../components/ui/Container';
import SEO from '../components/ui/SEO';
import ApproachSection from '../components/sections/ApproachSection';
import { FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';
import { PROFILE } from '../data/profileData';

export default function About() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Ravindra Kumar — Website Developer', url: '/about' }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO 
        title={`About Ravindra Kumar | Senior Frontend Engineer & Website Developer`}
        description="Learn about Ravindra Kumar — Frontend React Engineer and Website Developer with 3+ years experience building production-grade web applications, scalable state architectures, and accessible UI systems."
        canonicalUrl="https://ravindra121q.github.io/about"
        keywords="About Ravindra Kumar, Website Developer Biography, Frontend Engineer Profile, React Developer Experience, UI Architect Background"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#060608]">
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
              Background & Standards
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
              Engineering <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400">Philosophy</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              I build web interfaces with a focus on simplicity, execution speed, accessible design, and resilient architecture.
            </p>
          </div>
        </Container>
      </section>

      {/* Narrative Section */}
      <Container size="xl" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
              Who I Am & How I Work
            </h2>
            <p>
              I am a Frontend React.js Developer with 3+ years of experience building modern React web applications, complex state management systems, and accessible UI component libraries.
            </p>
            <p>
              My focus is on creating web applications that load fast, handle complex user interactions effortlessly, and remain easy for engineering teams to maintain and extend over time.
            </p>
            <p>
              Rather than introducing heavy third-party abstractions unnecessarily, I leverage browser APIs, modern CSS specifications, native React hooks, and predictable state stores (like Zustand and TanStack Query) to build clean, deterministic UI components.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider hover:bg-emerald-500/20 transition-colors"
              >
                <FileDown className="w-4 h-4" /> Download Resume (PDF)
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Profile
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 border border-neutral-200 dark:border-neutral-800 p-8 bg-neutral-50 dark:bg-neutral-900/60">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">
              Engineering Baseline
            </h3>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500">Framework</span>
                <span className="text-neutral-900 dark:text-white font-bold">React 18 / ES2024</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500">Build Tool</span>
                <span className="text-neutral-900 dark:text-white font-bold">Vite 8</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500">Styling</span>
                <span className="text-neutral-900 dark:text-white font-bold">Tailwind CSS v4</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500">State Engine</span>
                <span className="text-neutral-900 dark:text-white font-bold">Zustand & TanStack Query</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-500">Accessibility</span>
                <span className="text-neutral-900 dark:text-white font-bold">WCAG 2.1 AA Compliant</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">Testing</span>
                <span className="text-neutral-900 dark:text-white font-bold">Vitest & Testing Library</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Engineering Approach Section */}
      <ApproachSection />
    </div>
  );
}