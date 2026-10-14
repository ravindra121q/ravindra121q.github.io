import { lazy, Suspense } from 'react';
import SEO from '../components/ui/SEO';
import HeroSection from '../components/sections/HeroSection';
import { PROFILE } from '../data/profileData';

// Below-the-fold sections lazy loaded to ensure instant FCP and LCP
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));
const CapabilitiesSection = lazy(() => import('../components/sections/CapabilitiesSection'));
const ApproachSection = lazy(() => import('../components/sections/ApproachSection'));
const ExperienceSection = lazy(() => import('../components/sections/ExperienceSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

const SectionPlaceholder = ({ height = "h-96" }) => (
  <div className={`w-full ${height} bg-transparent`} />
);

export default function Home() {
  return (
    <div className="w-full bg-background min-h-screen">
      <SEO 
        title={`${PROFILE.name} — Senior Frontend Engineer & Website Developer | React.js Architect`}
        description="Hire Ravindra Kumar — Top-rated Frontend Engineer & Website Developer with 3+ years experience. Building production-grade React web applications, responsive websites, accessible design systems, and 100% Core Web Vitals."
        canonicalUrl="https://ravindra121q.github.io/"
        keywords="Website Development, Website Developer, Hire Web Developer, React Developer, Frontend Engineer, React Architect, Web Application Development, React.js, Next.js, Vite, Tailwind CSS, Responsive Web Design, Core Web Vitals, Full Stack UI, Ravindra Kumar"
      />
      
      {/* 1. Hero Section - Rendered synchronously for instant LCP */}
      <HeroSection />

      {/* 2. Featured Case Studies */}
      <Suspense fallback={<SectionPlaceholder height="h-96" />}>
        <ProjectsSection limit={3} showHeader={true} title="Featured Case Studies" />
      </Suspense>

      {/* 3. Engineering Capabilities */}
      <Suspense fallback={<SectionPlaceholder height="h-80" />}>
        <CapabilitiesSection />
      </Suspense>

      {/* 4. Engineering Approach / How I Think */}
      <Suspense fallback={<SectionPlaceholder height="h-80" />}>
        <ApproachSection />
      </Suspense>

      {/* 5. Professional Experience */}
      <Suspense fallback={<SectionPlaceholder height="h-80" />}>
        <ExperienceSection />
      </Suspense>

      {/* 6. Contact CTA */}
      <Suspense fallback={<SectionPlaceholder height="h-80" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}