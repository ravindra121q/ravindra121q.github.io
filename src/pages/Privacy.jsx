import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import SEO from '../components/ui/SEO';
import { PROFILE } from '../data/profileData';

export default function Privacy() {
  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO 
        title={`Privacy Policy | ${PROFILE.name}`}
        description="Privacy policy regarding contact form data handling and communication."
        canonicalUrl="https://ravindra121q.github.io/privacy"
      />

      <Container size="xl" className="py-16">
        <div className="max-w-3xl mx-auto space-y-6 text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-500 hover:text-emerald-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6">
            Privacy Policy
          </h1>

          <p>
            This website is a personal portfolio created by <strong>{PROFILE.name}</strong>.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            1. Data Collection & Use
          </h2>
          <p>
            When you submit a message through the contact form, the information provided (name, email address, company name, message content) is transmitted directly via EmailJS for the sole purpose of responding to your professional inquiry. No data is sold, rented, or shared with third parties.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            2. Cookies & Analytics
          </h2>
          <p>
            This site uses standard privacy-friendly analytics tools (e.g. Vercel Analytics) to measure page views and performance metrics anonymously. No personally identifiable tracking cookies are stored.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            3. Contact Information
          </h2>
          <p>
            If you have any questions regarding this policy, please email <a href={`mailto:${PROFILE.email}`} className="text-neutral-900 dark:text-white underline">{PROFILE.email}</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
