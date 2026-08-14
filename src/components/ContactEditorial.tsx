import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Share2, FileText, ArrowUpRight, MapPin, Heart } from 'lucide-react';
import { MANSI_PROFILE } from '../data/portfolioData';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

interface ContactEditorialProps {
  onOpenResume: () => void;
}

export const ContactEditorial: React.FC<ContactEditorialProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MANSI_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mansi Kulkarni — Technology Consultant Portfolio',
          text: 'Explore the portfolio of Mansi Kulkarni, Technology Consultant specializing in ServiceNow GRC & IRM.',
          url: window.location.href,
        });
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#FFF8F5] to-[#FCE4EC] border-2 border-[#EFAFC2] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Decorative Pink Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F7CDD9]/40 blur-3xl -z-10 pointer-events-none" />

        {/* Section Top Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#F7CDD9]">
          <div className="flex items-center gap-2">
            <Sticker variant="washi-pink" rotate={-2}>
              <span>✦ CHAPTER 06 // LET'S TALK</span>
            </Sticker>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#6B4E54]">
            <MapPin className="w-3.5 h-3.5 text-[#9F3D5C]" />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Headline & Invitation */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-7xl font-display font-bold text-[#382629] tracking-tight leading-[0.95]">
              Let's Connect <br />
              <span className="font-serif-luxury italic font-light text-[#C85B7B] flex items-center gap-3">
                & Collaborate <PinkHeart size={32} />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C1D2E] font-serif-luxury max-w-lg leading-relaxed">
              Available for Technology Consulting, ServiceNow GRC/IRM advisory, risk governance initiatives, and innovative data analytics projects.
            </p>

            {/* Direct Email Address with Copy & Mail Action */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#F7CDD9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FCE4EC] text-[#9F3D5C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase font-bold">
                    DIRECT INBOX
                  </div>
                  <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#382629]">
                    {MANSI_PROFILE.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-full bg-[#FFF8F5] hover:bg-[#FCE4EC] text-xs font-mono-tech font-bold text-[#9F3D5C] border border-[#EFAFC2] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED ✓' : 'COPY'}</span>
                </button>

                <a
                  href={`mailto:${MANSI_PROFILE.email}`}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:scale-102 cursor-pointer"
                >
                  <span>EMAIL ME</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Channels, Phone, Resume & Share */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Channel */}
            <a
              href={`tel:${MANSI_PROFILE.phone}`}
              className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#F7CDD9] hover:border-[#E38FA9] hover:bg-[#FFF0F4] transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FCE4EC] text-[#9F3D5C] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">CALL OR TEXT</div>
                  <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#382629]">
                    {MANSI_PROFILE.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#9F3D5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Channel */}
            <a
              href={MANSI_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#F7CDD9] hover:border-[#E38FA9] hover:bg-[#FFF0F4] transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FCE4EC] text-[#9F3D5C] flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">LINKEDIN PROFILE</div>
                  <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#382629]">
                    linkedin.com/in/mansiikulkarnii
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#9F3D5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Channel */}
            <a
              href={MANSI_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#F7CDD9] hover:border-[#E38FA9] hover:bg-[#FFF0F4] transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FCE4EC] text-[#9F3D5C] flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">GITHUB PROFILE</div>
                  <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#382629]">
                    github.com/Mansi-Kulkarni12
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#9F3D5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Quick Resume & Share Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="py-3 px-4 rounded-2xl bg-[#FFF8F5] hover:bg-[#FCE4EC] border border-[#EFAFC2] text-xs font-mono-tech font-bold text-[#9F3D5C] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME ↗</span>
              </button>

              <button
                onClick={handleShare}
                className="py-3 px-4 rounded-2xl bg-[#FFF8F5] hover:bg-[#FCE4EC] border border-[#EFAFC2] text-xs font-mono-tech font-bold text-[#9F3D5C] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'LINK COPIED ✓' : 'SHARE ↗'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Colophon */}
        <div className="mt-12 pt-6 border-t border-[#F7CDD9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#9E7D84]">
          <div className="flex items-center gap-2">
            <span>© 2026 MANSI KULKARNI</span>
            <span>·</span>
            <span>VALERIAN RISK SOLUTIONS</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#C85B7B]">
            <span>DESIGNED WITH PRECISION & INTENT</span>
            <PinkHeart size={12} />
          </div>
        </div>
      </div>
    </section>
  );
};
