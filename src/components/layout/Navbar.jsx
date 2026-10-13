import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight, Search, FileDown } from 'lucide-react';
import Container from '../ui/Container';
import CommandPalette from '../ui/CommandPalette';
import RecruiterModal from '../ui/RecruiterModal';
import { useTheme } from '../../context/useTheme';
import { PROFILE } from '../../data/profileData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md py-3.5 border-b border-neutral-200 dark:border-neutral-800 shadow-sm'
            : 'bg-white/60 dark:bg-[#09090b]/60 backdrop-blur-sm py-5 border-b border-neutral-200/50 dark:border-neutral-800/50'
        }`}
      >
        <Container size="xl" className="flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-none bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-mono font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white uppercase font-sans">
                {PROFILE.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                Frontend Engineer
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-neutral-900 dark:text-white font-bold border-b-2 border-neutral-900 dark:border-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setIsCmdOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/70 hover:border-neutral-400 dark:hover:border-neutral-600 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer"
              title="Search and commands (⌘K)"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">⌘K</kbd>
            </button>

            {/* Recruiter Quick-View Button */}
            <button
              type="button"
              onClick={() => setIsRecruiterModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 transition-colors cursor-pointer"
              title="View quick summary for recruiters & hiring managers"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Recruiter View</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle light/dark theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>

            {/* Direct Contact CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsRecruiterModalOpen(true)}
              className="px-2 py-1 border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold"
              aria-label="Recruiter quick view"
            >
              Recruiter
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              aria-label="Toggle light/dark theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/60 backdrop-blur-xs border-0 cursor-default"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-72 max-w-full bg-white dark:bg-[#09090b] h-full shadow-2xl p-6 flex flex-col border-l border-neutral-200 dark:border-neutral-800">
            <div className="flex justify-between items-center mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="font-bold text-sm tracking-tight uppercase">{PROFILE.name}</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-1.5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold uppercase tracking-wide transition-colors ${
                    location.pathname === link.path ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsRecruiterModalOpen(true);
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Recruiter Quick-View</span>
                </button>

                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center border border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold uppercase text-xs tracking-wider py-3"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-neutral-900 text-white dark:bg-white dark:text-black font-bold uppercase text-xs tracking-wider py-3"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Modals */}
      <CommandPalette
        isOpen={isCmdOpen}
        setIsOpen={setIsCmdOpen}
        onOpenRecruiterModal={() => {
          setIsCmdOpen(false);
          setIsRecruiterModalOpen(true);
        }}
      />
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </>
  );
}
