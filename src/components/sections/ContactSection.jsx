import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Container from '../ui/Container';
import { PROFILE } from '../../data/profileData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_aatkgzu';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_qk7gogf';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'POi_iM3ALZRTT63zX';

export default function ContactSection() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Frontend React.js Developer',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill in your name and email address.');
      return;
    }

    setSubmitting(true);

    // Using sendForm matching exact input names from ravindra_portfolio_2
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setSubmitting(false);
          setSubmittedSuccess(true);
          toast.success('Your message has been sent successfully!');
        },
        (error) => {
          console.warn('EmailJS Form Send Error, attempting direct send fallback...', error);
          // Secondary fallback using send object with all possible recipient and sender variables
          const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: PROFILE.name,
            to_email: PROFILE.email,
            reply_to: formData.email,
            email: formData.email,
            company: formData.company || 'N/A',
            role_type: formData.roleType,
            message: formData.message || 'No message provided'
          };

          emailjs
            .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
            .then(
              () => {
                setSubmitting(false);
                setSubmittedSuccess(true);
                toast.success('Your message has been sent successfully!');
              },
              (fallbackErr) => {
                setSubmitting(false);
                console.error('EmailJS Fallback Error:', fallbackErr);
                toast.error(
                  `Unable to dispatch email automatically. Please click direct email below or send to ${PROFILE.email}`,
                  { duration: 6000 }
                );
              }
            );
        }
      );
  };

  return (
    <section className="py-24 bg-background border-b border-neutral-200 dark:border-neutral-800/80">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
                Let’s Connect
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-6 text-balance">
                Get In Touch
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mb-8">
                Currently open for Frontend Engineer roles, React Architect opportunities, and technical consulting.
              </p>

              <div className="space-y-4 text-xs font-mono mb-8">
                <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-500 uppercase mb-1">Email Directly</div>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-bold text-neutral-900 dark:text-white hover:underline flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <span>{PROFILE.email}</span>
                  </a>
                </div>

                <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-500 uppercase mb-1">WhatsApp / Phone</div>
                  <a
                    href={`https://wa.me/${PROFILE.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Send direct WhatsApp message to Ravindra at ${PROFILE.phone}`}
                    className="text-sm font-bold text-neutral-900 dark:text-white hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>{PROFILE.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Response Time SLA</span>
              </div>
              <div>Guaranteed response within 24 business hours.</div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-8 md:p-10">
              {submittedSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. Your message has been received. I will review your inquiry and respond to <strong className="text-neutral-900 dark:text-white">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmittedSuccess(false)}
                      className="px-6 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-black font-bold uppercase text-xs tracking-wider cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                      Send a Direct Message
                    </h3>
                  </div>

                  {/* Hidden fields for EmailJS template recipient compatibility */}
                  <input type="hidden" name="to_email" value={PROFILE.email} />
                  <input type="hidden" name="to_name" value={PROFILE.name} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_from_name" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_from_name"
                        type="text"
                        name="from_name"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => {
                          handleInputChange({ target: { name: 'name', value: e.target.value } });
                        }}
                        className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_from_email" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_from_email"
                        type="email"
                        name="from_email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          handleInputChange({ target: { name: 'email', value: e.target.value } });
                        }}
                        className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_company" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        id="contact_company"
                        type="text"
                        name="company"
                        placeholder="e.g. Salesforce / Tech Corp"
                        value={formData.company}
                        onChange={(e) => {
                          handleInputChange({ target: { name: 'company', value: e.target.value } });
                        }}
                        className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="role_type" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                        Opportunity Type
                      </label>
                      <select
                        id="role_type"
                        name="role_type"
                        aria-label="Opportunity Type"
                        value={formData.roleType}
                        onChange={(e) => {
                          handleInputChange({ target: { name: 'roleType', value: e.target.value } });
                        }}
                        className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white font-mono cursor-pointer"
                      >
                        <option value="Frontend React.js Developer">Frontend React.js Developer Role</option>
                        <option value="UI Architect">UI Architect / Lead Role</option>
                        <option value="Frontend Consulting">Frontend Consulting Project</option>
                        <option value="General Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="contact_message" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Message / Project Details
                      </label>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {formData.message.length} / 1000
                      </span>
                    </div>
                    <textarea
                      id="contact_message"
                      name="message"
                      maxLength={1000}
                      rows={4}
                      placeholder="Tell me about the role, team, or project requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        handleInputChange({ target: { name: 'message', value: e.target.value } });
                      }}
                      className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 p-3.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white font-mono leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
