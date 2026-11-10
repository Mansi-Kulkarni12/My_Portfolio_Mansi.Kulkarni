import React, { useState } from 'react';
import { MANSI_PROFILE } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, CheckCircle2, Copy } from 'lucide-react';

interface ContactEditorialProps {
  onOpenResume: () => void;
}

export const ContactEditorial: React.FC<ContactEditorialProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MANSI_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(MANSI_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Interested in discussing ServiceNow GRC / IRM opportunities, AI risk platform validation, or data analytics roles? Reach out directly.
          </p>
        </div>

        {/* Contact Grid: Direct Cards + Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${MANSI_PROFILE.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-indigo-600 truncate block transition-colors"
                  >
                    {MANSI_PROFILE.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${MANSI_PROFILE.phone}`}
                    className="text-sm font-bold text-slate-900 hover:text-emerald-600 truncate block transition-colors"
                  >
                    {MANSI_PROFILE.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer shrink-0"
                title="Copy phone"
              >
                {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                  Location
                </span>
                <span className="text-sm font-bold text-slate-900 block">
                  {MANSI_PROFILE.location} (Open to Remote & Hybrid)
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={MANSI_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={MANSI_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                onClick={onOpenResume}
                className="py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xl">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Drop a note and I will get back to you promptly.
            </p>

            {messageSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out. You can also contact me directly at {MANSI_PROFILE.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Mansi, I would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Colophon / Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Mansi Kulkarni · ServiceNow GRC &amp; IRM Consultant</p>
          <p>Designed with clarity &amp; performance · Deployed on Netlify</p>
        </div>

      </div>
    </footer>
  );
};
