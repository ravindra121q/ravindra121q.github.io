import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import SEO from '../components/ui/SEO';
import { PROFILE } from '../data/profileData';

const FAQS = [
  {
    question: "What website development and frontend services does Ravindra provide?",
    answer: "Ravindra provides end-to-end website development and frontend engineering: custom React.js web applications, responsive websites from Figma/wireframes, high-speed Vite setups, Tailwind CSS design systems, REST API integration, and Core Web Vitals performance optimization."
  },
  {
    question: "How can I hire Ravindra for website development or engineering contracts?",
    answer: "You can reach Ravindra directly via email at ravindramasaistudent@gmail.com, phone/WhatsApp at +91 8051786526, or via the interactive Contact form on this portfolio. Ravindra is available for full-time frontend roles, freelance projects, and high-impact website development contracts."
  },
  {
    question: "What is your primary tech stack for modern web development?",
    answer: "I specialize in the modern React ecosystem: React 18, Vite 8, Tailwind CSS v4, JavaScript ES2024, TypeScript, Zustand, TanStack Query (React Query), and React Router v7. I build responsive single-page applications with clean component architecture and WCAG 2.1 AA accessibility standards."
  },
  {
    question: "How do you achieve top 1% web performance (95+ Core Web Vitals)?",
    answer: "Performance is an architectural requirement, not an afterthought. I optimize bundle payloads through route-level code splitting (`React.lazy`), dynamic asset loading, native WebGL shaders instead of heavy 3D bundles, eliminating forced synchronous reflows, and enforcing strict Core Web Vitals targets (LCP < 1.5s, CLS < 0.05, TBT < 100ms)."
  },
  {
    question: "How do you ensure accessibility in your websites and web applications?",
    answer: "I follow WAI-ARIA standards and semantic HTML5 fundamentals: native keyboard focus management, trap focus in modals, explicit screen reader labels (`aria-expanded`, `aria-controls`), color contrast ratio compliance (>4.5:1), and strict `prefers-reduced-motion` CSS rules."
  },
  {
    question: "What is your availability for starting a new website development project or role?",
    answer: "I am actively available for new opportunities: immediate start for specialized website development contracts and consulting, and standard notice periods for full-time frontend engineering roles."
  }
];

export default function Help() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const toggleFaq = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Website Development FAQs & Guide', url: '/help' }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO
        title={`Website Development & Developer FAQs | ${PROFILE.name}`}
        description="Frequently asked questions about hiring Ravindra Kumar for website development, React frontend architecture, performance optimization, and project availability."
        canonicalUrl="https://ravindra121q.github.io/help"
        keywords="Hire Website Developer, Website Development FAQ, React Developer FAQ, Frontend Engineer Interview, Web Development Services, Core Web Vitals Optimization"
        faq={FAQS}
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#060608]">
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
              Recruiter & Technical FAQ
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
              Frequently Asked <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400">Questions</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Quick answers regarding tech stack preferences, engineering standards, and availability.
            </p>
          </div>
        </Container>
      </section>

      <Container size="xl" className="py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-500 hover:text-emerald-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = expandedIdx === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900/80 transition-colors"
                >
                  <span className="text-base font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-label={faq.question}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
