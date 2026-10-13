import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import Container from '../ui/Container';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import ShapeWaves from '../reactbits/ShapeWaves';
import { PROFILE } from '../../data/profileData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800/80 pt-20 pb-12">
      {/* Background Shape Waves */}
      <ShapeWaves waveCount={6} amplitude={35} speed={0.012} />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Main Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-mono font-bold text-sm">
                R
              </div>
              <span className="text-base font-bold tracking-tight uppercase text-neutral-900 dark:text-white">
                {PROFILE.name}
              </span>
            </Link>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-md mb-6">
              {PROFILE.bio}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Overview & Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Website Development Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Engineering Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-neutral-500">
                  <Link to="/help" className="hover:underline">Help</Link>
                  <span>•</span>
                  <Link to="/privacy" className="hover:underline">Privacy</Link>
                  <span>•</span>
                  <Link to="/terms" className="hover:underline">Terms</Link>
                </div>
              </li>
              <li className="pt-1">
                <a 
                  href={PROFILE.resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors"
                >
                  Resume / CV (PDF) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-5">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href={`mailto:${PROFILE.email}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors font-mono">
                  {PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a 
                  href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, '')}`} 
                  aria-label={`Call Ravindra at ${PROFILE.phone}`}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors font-mono"
                >
                  {PROFILE.phone}
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 text-[11px] font-mono bg-neutral-200/60 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800">
                  {PROFILE.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}