import SEO from '../components/ui/SEO';
import ContactSection from '../components/sections/ContactSection';
import Container from '../components/ui/Container';
import { PROFILE } from '../data/profileData';

export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Hire & Contact Ravindra Kumar', url: '/contact' }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO
        title={`Hire & Contact ${PROFILE.name} | Website Developer & Frontend Engineer`}
        description="Hire Ravindra Kumar for full-time frontend roles, website development contracts, and React.js engineering consulting. Fast response within 24 hours."
        canonicalUrl="https://ravindra-dev07.vercel.app/contact"
        keywords="Hire Ravindra Kumar, Hire Website Developer, Contact Frontend Engineer, Hire React Developer, Web Development Inquiry, Freelance Website Developer"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#060608]">
        <Container size="xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-emerald-500 inline-block" />
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
              Contact & <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400">Inquiries</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Open for full-time Frontend Engineering opportunities, UI system architecture contracts, and engineering advisory.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Form & Details */}
      <ContactSection />
    </div>
  );
}
