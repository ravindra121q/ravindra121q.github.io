import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import SEO from '../components/ui/SEO';
import { PROFILE } from '../data/profileData';

export default function Terms() {
  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20">
      <SEO 
        title={`Terms of Service | ${PROFILE.name}`}
        description="Terms of service for using this portfolio web application."
        canonicalUrl="https://ravindra121q.github.io/terms"
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
            Terms of Service
          </h1>

          <p>
            Welcome to the portfolio website of <strong>{PROFILE.name}</strong>.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            1. Intellectual Property
          </h2>
          <p>
            All custom content, architecture descriptions, code snippets, and visual presentation on this portfolio are owned by {PROFILE.name}, unless otherwise noted for open-source libraries or third-party client project assets.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            2. Disclaimer
          </h2>
          <p>
            The case studies and metrics provided on this site reflect real engineering implementations. Project demonstrations are provided for informational and recruitment presentation purposes.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white pt-4">
            3. Contact
          </h2>
          <p>
            For questions regarding these terms, reach out to <a href={`mailto:${PROFILE.email}`} className="text-neutral-900 dark:text-white underline">{PROFILE.email}</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
