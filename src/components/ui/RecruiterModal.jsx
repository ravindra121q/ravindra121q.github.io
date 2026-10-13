import { X, Copy, Mail, Phone, MapPin, Briefcase, CheckCircle2, FileDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { PROFILE } from '../../data/profileData';

export default function RecruiterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    toast.success('Email copied to clipboard!');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    toast.success('Phone copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c0c0e] border border-neutral-300 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Recruiter Quick-View
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
              {PROFILE.name}
            </h2>
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
              {PROFILE.role} • 3+ Years Experience
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Close Recruiter Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="text-lg font-black font-mono text-emerald-500">3+ Yrs</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">Experience</div>
            </div>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="text-lg font-black font-mono text-emerald-500">10+</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">Projects Delivered</div>
            </div>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="text-lg font-black font-mono text-emerald-500">+40%</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">Core Web Vitals</div>
            </div>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="text-lg font-black font-mono text-emerald-500">+35%</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase">User Engagement</div>
            </div>
          </div>

          {/* Core Info */}
          <div className="space-y-2 border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <Briefcase className="w-4 h-4 text-neutral-400 shrink-0" />
              <span><strong>Current Role:</strong> {PROFILE.companyRole}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span><strong>Location:</strong> {PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Availability:</strong> Immediate to Standard Notice for Full-time Roles / Contracts</span>
            </div>
          </div>

          {/* Core Tech Stack Badges */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 font-bold">
              Primary Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['React 18', 'JavaScript ES6+', 'Vite', 'Tailwind CSS', 'REST APIs', 'Zustand', 'Performance Tuning', 'Git / CI/CD'].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider text-xs transition-colors shadow-sm flex-1"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={`mailto:${PROFILE.email}?subject=Interview%20Inquiry%20-%20Frontend%20Developer`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email Ravindra</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold uppercase tracking-wider text-xs text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Email</span>
            </button>

            <button
              type="button"
              onClick={copyPhone}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold uppercase tracking-wider text-xs text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
