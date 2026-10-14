import SEO from '../components/ui/SEO';
import ProjectsSection from '../components/sections/ProjectsSection';
import Container from '../components/ui/Container';
import { PROFILE } from '../data/profileData';

export default function Projects() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Website Development Projects & Case Studies', url: '/projects' }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO 
        title={`Website Development Projects & Case Studies | ${PROFILE.name}`}
        description="Production website development projects by Ravindra Kumar: AI EdTech platforms, HIPAA healthcare web applications, e-commerce marketplaces, and custom CMS tools built with React.js."
        canonicalUrl="https://ravindra121q.github.io/projects"
        keywords="Website Development Projects, React Web Application Case Studies, Frontend Portfolio Projects, E-Commerce Development, Custom Web Apps, React Developer Portfolio, Ravindra Kumar"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#060608]">
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
              Production Case Studies &amp; System Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
              Website Development &amp; <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400">Engineering Projects</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              In-depth technical breakdowns of production web applications, UI libraries, dynamic portals, and interactive platforms built with React, Vite, and modern CSS.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Projects Section */}
      <ProjectsSection limit={null} showHeader={false} />
    </div>
  );
}
