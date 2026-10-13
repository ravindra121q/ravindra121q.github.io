import SEO from '../components/ui/SEO';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import Container from '../components/ui/Container';
import { PROFILE } from '../data/profileData';

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Website Development & Services', url: '/services' }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO 
        title={`Website Development & Modern Frontend Engineering Services | ${PROFILE.name}`}
        description="Hire Ravindra Kumar for professional website development and React frontend engineering. Custom web applications, performance audits, responsive UI design systems, and API integrations."
        canonicalUrl="https://ravindra-dev07.vercel.app/services"
        keywords="Website Development Services, React Developer Services, Custom Web Application Development, Frontend Architecture, Hire Website Developer, React UI Engineering, Web Performance Optimization, Responsive Web Design"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#060608]">
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
              Production Stack &amp; Architectural Patterns
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
              Website Development &amp; <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400">Frontend Engineering</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Full-lifecycle website development, modern React 18 applications, design system implementation, and performance optimization for startups, agencies, and high-growth businesses.
            </p>
          </div>
        </Container>
      </section>

      <CapabilitiesSection />
    </div>
  );
}
