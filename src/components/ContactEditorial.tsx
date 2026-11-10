import React, { useState } from 'react';
import { MANSI_PROFILE } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, CheckCircle2, Copy, Loader2, ArrowUpRight } from 'lucide-react';

interface ContactEditorialProps {
  onOpenResume: () => void;
}

export const ContactEditorial: React.FC<ContactEditorialProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. Submit directly to FormSubmit which emails mansiikulkarnii@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/mansiikulkarnii@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: open mail client directly
        window.location.href = `mailto:${MANSI_PROFILE.email}?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
        setMessageSent(true);
      }
    } catch (err) {
      // Network fallback: open user's email client
      window.location.href = `mailto:${MANSI_PROFILE.email}?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
      setMessageSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${MANSI_PROFILE.email}?subject=Inquiry from Portfolio&body=Hi Mansi,%0D%0A%0D%0A`;

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
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Interested in discussing ServiceNow GRC / IRM opportunities, risk and compliance workflows, or data analytics roles? Reach out directly.
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
                    Phone &amp; WhatsApp
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
                  {MANSI_PROFILE.location} (Open to Remote &amp; Hybrid)
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

          {/* Right Column: Direct Email Delivery Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Messages submitted here are sent directly to <strong className="text-slate-700 font-semibold">{MANSI_PROFILE.email}</strong>.
                </p>
              </div>
              <a
                href={mailtoLink}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline shrink-0"
              >
                <span>Open in Email App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {messageSent ? (
              <div className="p-8 my-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-lg">Message Sent to Mansi's Inbox!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your message, name, and email address have been sent directly to <strong>{MANSI_PROFILE.email}</strong>. Mansi will reply to your email address shortly.
                </p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="mt-2 px-4 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                action="https://formsubmit.co/mansiikulkarnii@gmail.com"
                method="POST"
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4 mt-6"
              >
                {/* Netlify & FormSubmit hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
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
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Hi Mansi, I would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to Mansi's Email...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send to Mansi's Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoLink}
                    className="text-xs text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    <span>Prefer direct mail? Click here</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
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
