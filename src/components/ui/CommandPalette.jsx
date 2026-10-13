import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { 
  Search, 
  Home, 
  FolderGit2, 
  User, 
  Mail, 
  Moon, 
  Sun, 
  Copy, 
  ExternalLink, 
  Briefcase,
  HelpCircle,
  FileDown
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/useTheme';
import { PROFILE } from '../../data/profileData';
import { PROJECTS } from '../../data/projectsData';

export default function CommandPalette({ isOpen, setIsOpen, onOpenRecruiterModal }) {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K or /)
  useEffect(() => {
    const down = (e) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName))) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setIsOpen]);

  const runCommand = (commandFn) => {
    setIsOpen(false);
    commandFn();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    toast.success(`Copied ${PROFILE.email} to clipboard!`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsOpen(false)} 
        aria-hidden="true"
      />

      {/* Dialog Box */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0c0c0e] border border-neutral-300 dark:border-neutral-800 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <Command label="Command Palette" className="w-full">
          {/* Header Input */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800">
            <Search className="w-4 h-4 text-neutral-400 shrink-0" />
            <Command.Input
              autoFocus
              placeholder="Type a command or search projects... (ESC to exit)"
              className="w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-hidden font-mono"
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              ESC
            </kbd>
          </div>

          {/* List of Actions */}
          <Command.List className="max-h-80 overflow-y-auto p-2 font-sans text-xs">
            <Command.Empty className="py-6 text-center text-xs text-neutral-500 font-mono">
              No matching commands or projects found.
            </Command.Empty>

            {/* Quick Actions */}
            <Command.Group heading="Quick Actions" className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
              <Command.Item
                onSelect={() => runCommand(onOpenRecruiterModal || (() => navigate('/about')))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">Recruiter Quick-View & Key Highlights</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE.resumeUrl, '_blank'))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <FileDown className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">View & Download Resume (Google Drive PDF)</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(copyEmail)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>Copy Email Address ({PROFILE.email})</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(toggleTheme)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                <span>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</span>
              </Command.Item>
            </Command.Group>

            {/* Navigation Group */}
            <Command.Group heading="Pages & Navigation" className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-2">
              <Command.Item
                onSelect={() => runCommand(() => navigate('/'))}
                className="flex items-center gap-3 px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <Home className="w-4 h-4 text-neutral-400" />
                <span>Overview / Home</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => navigate('/projects'))}
                className="flex items-center gap-3 px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-neutral-400" />
                <span>Case Studies & Projects Gallery</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => navigate('/about'))}
                className="flex items-center gap-3 px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <User className="w-4 h-4 text-neutral-400" />
                <span>About & Engineering Philosophy</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => navigate('/contact'))}
                className="flex items-center gap-3 px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Contact & Hiring Inquiries</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => navigate('/help'))}
                className="flex items-center gap-3 px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-neutral-400" />
                <span>Technical & Recruiter FAQ</span>
              </Command.Item>
            </Command.Group>

            {/* Featured Projects Group */}
            <Command.Group heading="Featured Projects" className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-2">
              {PROJECTS.map((proj) => (
                <Command.Item
                  key={proj.id}
                  onSelect={() => runCommand(() => navigate(`/projects#${proj.id}`))}
                  className="flex items-center justify-between px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="font-medium">{proj.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {proj.category}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* External Links */}
            <Command.Group heading="External Links" className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-2">
              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE.github, '_blank'))}
                className="flex items-center justify-between px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                  <span>GitHub Profile (@ravindra121q)</span>
                </div>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE.linkedin, '_blank'))}
                className="flex items-center justify-between px-3 py-2 rounded-none cursor-pointer text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                  <span>LinkedIn Profile</span>
                </div>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer Bar */}
          <div className="px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#08080a] flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            <span>Navigation: ↑ ↓ Enter</span>
            <span>Shortcut: ⌘K or /</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
