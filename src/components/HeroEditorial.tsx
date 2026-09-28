import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, ShieldCheck, Database, Cpu, Award } from 'lucide-react';
import { MANSI_PROFILE } from '../data/portfolioData';
import mansiProfile from '../assets/images/mansi-profile.jpg';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

interface HeroEditorialProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
  onOpenRiskLens: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  onExploreClick,
  onOpenResume,
  onOpenRiskLens,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(mansiProfile);
  const [activeChip, setActiveChip] = useState<'grc' | 'ai' | 'data'>('grc');

  const chipsData = {
    grc: {
      label: 'SERVICENOW GRC & IRM',
      text: 'Architecting policy frameworks, audit controls, and risk remediations at Valerian Risk Solutions.',
      accent: '#9F3D5C',
    },
    ai: {
      label: 'DRISKIFY AI AGENTS',
      text: 'Ingesting enterprise schemas, mapping data columns, and running autonomous risk intelligence agents.',
      accent: '#C85B7B',
    },
    data: {
      label: 'DATA & SQL ANALYTICS',
      text: 'PostgreSQL optimization, Power BI DAX modeling, and industrial JSON telemetry analysis.',
      accent: '#5C1D2E',
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-cream-canvas"
    >
      {/* Ambient Decorative Pink Blobs & Grain */}
      <div className="absolute top-10 right-5 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#FCE4EC]/70 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-[#F7CDD9]/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#FFF0F4]/80 blur-2xl -z-10 pointer-events-none" />

      {/* Floating Decorative Stickers (Strategic Pinterest placements) */}
      <div className="absolute top-24 left-8 hidden lg:block z-10 animate-float-slow">
        <Sticker variant="washi-pink" rotate={-6}>
          <span>✿ HELLO & WELCOME</span>
        </Sticker>
      </div>

      <div className="absolute top-36 right-16 hidden lg:block z-10 animate-float-reverse">
        <Sticker variant="stamp" rotate={8}>
          <span>VALERIAN RISK · 2026</span>
        </Sticker>
      </div>

      <div className="absolute bottom-28 left-12 hidden lg:block z-10">
        <Sticker variant="note" rotate={4}>
          <span>"governance meets modern ai"</span>
        </Sticker>
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-20">
        
        {/* Left Column: Expressive Typography & Editorial Intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Top Status & Verification Pill */}
          <div className="flex flex-wrap items-center gap-2">
            <Sticker variant="pink-badge">
              <span className="w-2 h-2 rounded-full bg-[#9F3D5C] animate-ping" />
              <span>HYDERABAD, INDIA</span>
            </Sticker>
            <Sticker variant="washi-rose" rotate={-2}>
              <span>✦ ACTIVE IN GRC & AI CONSULTING</span>
            </Sticker>
          </div>

          {/* Large Expressive Typography */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-bold text-[#382629] tracking-tight leading-[0.9]">
                MANSI
              </h1>
              <span className="font-serif-luxury italic font-light text-4xl sm:text-6xl text-[#C85B7B]">
                Kulkarni
              </span>
            </div>
            
            <p className="text-xl sm:text-2xl font-serif-luxury text-[#6B4E54] pt-2">
              Technology Consultant <span className="text-[#C85B7B] italic">specializing in</span> ServiceNow GRC, IRM & Driskify AI.
            </p>
          </div>

          {/* Editorial Bio & Tagline */}
          <p className="text-sm sm:text-base text-[#6B4E54] leading-relaxed max-w-2xl">
            Bridging enterprise risk architecture, autonomous AI compliance agents, and precision data engineering. Currently empowering governance frameworks at <strong className="text-[#382629] font-semibold">Valerian Risk Solutions</strong>.
          </p>

          {/* Floating Key Metadata Labels / Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['TECHNOLOGY', 'GRC & IRM', 'SERVICENOW', 'DRISKIFY AI', 'POSTGRESQL', 'HYDERABAD'].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-[11px] font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9] shadow-2xs hover:bg-[#FCE4EC] hover:border-[#EFAFC2] transition-colors cursor-default"
              >
                ✦ {tag}
              </span>
            ))}
          </div>

          {/* Interactive Persona / Domain Selector Box */}
          <div className="p-4 sm:p-5 rounded-3xl bg-[#FFF8F5]/90 border border-[#EFAFC2] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-mono-tech text-[#9F3D5C] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXPERTISE LENS // CLICK TO REVEAL</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#9E7D84]">SOURCE: 2026 RESUME</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['grc', 'ai', 'data'] as const).map((key) => {
                const isSelected = activeChip === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveChip(key)}
                    className={`py-2 px-2.5 rounded-2xl text-xs font-mono-tech text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] font-bold shadow-xs scale-102'
                        : 'bg-[#FDF3EE] text-[#6B4E54] hover:bg-[#FCE4EC] hover:text-[#382629]'
                    }`}
                  >
                    {key === 'grc' ? '01 · GRC / IRM' : key === 'ai' ? '02 · DRISKIFY AI' : '03 · DATA / SQL'}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#5C1D2E] font-medium bg-[#FFF0F4] p-3 rounded-2xl border border-[#F7CDD9] leading-relaxed">
              <strong>{chipsData[activeChip].label}:</strong> {chipsData[activeChip].text}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-explore-cta"
              onClick={onExploreClick}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9F3D5C] via-[#C85B7B] to-[#9F3D5C] text-[#FFF8F5] font-syne font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-102 active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="px-5 sm:px-6 py-3.5 rounded-full bg-[#FFF8F5] text-[#9F3D5C] font-syne font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#E38FA9] hover:bg-[#FCE4EC] transition-all flex items-center gap-2 shadow-2xs hover:scale-102 cursor-pointer"
            >
              <span>LET'S CONNECT ♡</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-3.5 rounded-full text-xs font-mono-tech text-[#6B4E54] hover:text-[#382629] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Resume Record ↗</span>
            </button>
          </div>
        </div>

        {/* Right Column: Layered Pinterest Magazine-Cover Composition */}
        <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            
            {/* Ambient Pink Backdrop Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#EFAFC2]/40 via-[#F7CDD9]/30 to-[#FCE4EC]/50 rounded-[2.5rem] blur-xl -z-10" />

            {/* Main Polaroid / Magazine Card */}
            <div className="relative bg-[#FFFFFF] rounded-[2rem] p-3 sm:p-4 border-2 border-[#F7CDD9] shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] overflow-hidden">
              
              {/* Photo Frame Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FDF3EE] border border-[#F7CDD9]">
                
                <img
                  id="mansi-primary-portrait"
                  src={imgSrc}
                  alt="Mansi Kulkarni"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (imgSrc === mansiProfile) {
                      setImgSrc('/mansi-profile.jpg');
                    } else if (imgSrc === '/mansi-profile.jpg') {
                      setImgSrc('https://lh3.googleusercontent.com/d/1VHiOD7Y7KAEU2J7VKZtAZiPmZlAn7biW');
                    }
                  }}
                />

                {/* Subtle Editorial Gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#382629]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-[#FFF8F5] z-10">
                  <div className="font-mono-tech text-[9px] text-[#F7CDD9] uppercase tracking-widest font-bold mb-0.5">
                    // CONSULTANT PROFILE
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold leading-tight">
                    Mansi Kulkarni
                  </div>
                  <div className="text-[11px] text-[#FFF8F5]/90 font-mono-tech flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85B7B]" />
                    <span>Valerian Risk Solutions</span>
                  </div>
                </div>
              </div>

              {/* Bottom Magazine-style Footer Bar */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#6B4E54]">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-tech">
                  <span className="text-[#C85B7B]">✦</span>
                  <span className="font-medium text-[#382629]">Hyderabad, IN</span>
                  <span>·</span>
                  <span className="font-semibold text-[#9F3D5C]">GRC / IRM</span>
                </div>

                <button
                  onClick={onOpenResume}
                  className="text-[11px] font-mono-tech text-[#9F3D5C] font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Resume ↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Marquee Ticker */}
      <div className="mt-12 py-3 border-t border-b border-[#F7CDD9] bg-[#FFF8F5]/90 overflow-hidden select-none">
        <div className="flex animate-ticker whitespace-nowrap text-xs font-mono-tech text-[#9F3D5C] uppercase font-bold tracking-widest gap-8">
          <span>✦ SERVICENOW GRC & IRM</span>
          <span>♡ DRISKIFY AI DATA MAPPING</span>
          <span>✦ POSTGRESQL & POWER BI DAX</span>
          <span>✿ CONTROL COMPLIANCE & POLICY REVIEW</span>
          <span>✦ DELOITTE TELEMETRY SIMULATION</span>
          <span>★ LIVE AT VALERIAN RISK SOLUTIONS</span>
          <span>✦ SERVICENOW GRC & IRM</span>
          <span>♡ DRISKIFY AI DATA MAPPING</span>
          <span>✦ POSTGRESQL & POWER BI DAX</span>
          <span>✿ CONTROL COMPLIANCE & POLICY REVIEW</span>
          <span>✦ DELOITTE TELEMETRY SIMULATION</span>
          <span>★ LIVE AT VALERIAN RISK SOLUTIONS</span>
        </div>
      </div>
    </section>
  );
};
