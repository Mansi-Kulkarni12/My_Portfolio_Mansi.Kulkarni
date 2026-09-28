import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Database, FileCheck, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const AboutEditorial: React.FC = () => {
  const [activeWord, setActiveWord] = useState<'technology' | 'risk' | 'compliance' | 'data'>('technology');

  const pillars = {
    technology: {
      title: 'TECHNOLOGY',
      subtitle: 'ServiceNow Platforms & Autonomous AI Agents',
      details: 'Specializing in ServiceNow IRM modules and the Driskify AI platform. Transforming complex enterprise infrastructure architectures into automated, real-time risk intelligence.',
      metrics: 'Valerian Risk Solutions · ServiceNow CSA & CIS-DF Certified',
      tools: ['ServiceNow IRM', 'Driskify AI', 'PostgreSQL', 'SQL Optimization'],
      sticker: '01 // TECH CORE',
      accent: '#9F3D5C',
    },
    risk: {
      title: 'RISK',
      subtitle: 'Enterprise Assessment & Vulnerability Mitigation',
      details: 'Structuring comprehensive risk assessment workflows, identifying technological threat surfaces, and modeling operational disruption baselines across enterprise operations.',
      metrics: 'Deloitte Downtime Modeling · Telemetry Analysis',
      tools: ['Risk Assessment', 'Threat Modeling', 'SLA Analysis', 'Power BI Analytics'],
      sticker: '02 // RISK LENS',
      accent: '#C85B7B',
    },
    compliance: {
      title: 'COMPLIANCE',
      subtitle: 'Control Mapping & Regulatory Alignment',
      details: 'Reviewing enterprise security policies against stringent regulatory standards (ISO 27001, SOC 2, NIST CSF). Validating evidence trails and executing automated control attestations.',
      metrics: 'Policy Review · Automated Control Mapping',
      tools: ['Control Mapping', 'Policy Governance', 'Compliance Audits', 'Evidence Collection'],
      sticker: '03 // GOVERNANCE',
      accent: '#5C1D2E',
    },
    data: {
      title: 'DATA',
      subtitle: 'Relational Schemas, Power BI & DAX Intelligence',
      details: 'Engineering relational PostgreSQL tables, authoring optimized SQL queries that reduce report turnaround times by 30%, and delivering multi-KPI executive Power BI dashboards.',
      metrics: '25% Faster Reports · 20% Error Reduction',
      tools: ['PostgreSQL', 'Power BI Desktop', 'DAX Measures', 'Excel Modeling'],
      sticker: '04 // DATA ANALYTICS',
      accent: '#9F3D5C',
    },
  };

  const current = pillars[activeWord];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Decorative Washi Tape at Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <Sticker variant="washi-pink" rotate={-2}>
          <span>✦ CHAPTER 01 // EDITORIAL PROFILE</span>
        </Sticker>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#F7CDD9] to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading and Core Bio */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight leading-[0.95]">
            A Little <br />
            <span className="font-serif-luxury italic font-light text-[#C85B7B]">About Me</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5C1D2E] font-serif-luxury leading-relaxed">
            Technology Consultant specializing in <strong className="text-[#382629] font-bold font-sans">ServiceNow GRC & IRM</strong> at <strong className="text-[#9F3D5C] font-semibold">Valerian Risk Solutions</strong>, working across governance, risk, compliance and technology-driven risk solutions.
          </p>

          <p className="text-sm text-[#6B4E54] leading-relaxed">
            I blend deep analytical rigor with modern software architectures. Whether categorizing client datasets for autonomous AI risk agents or configuring ServiceNow policy attestations, my focus is delivering actionable governance that protects business value.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-[#FFF8F5] border border-[#F7CDD9] text-center shadow-2xs">
              <div className="font-display text-2xl font-bold text-[#9F3D5C]">8.83</div>
              <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">B.Tech CGPA</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFF8F5] border border-[#F7CDD9] text-center shadow-2xs">
              <div className="font-display text-2xl font-bold text-[#C85B7B]">2026</div>
              <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">Valerian Consultant</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFF8F5] border border-[#F7CDD9] text-center shadow-2xs">
              <div className="font-display text-2xl font-bold text-[#5C1D2E]">2+</div>
              <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase">Live Deployed Apps</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Word Exploration Visual Box */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] p-6 sm:p-8 shadow-lg relative overflow-hidden">
            
            {/* Top Bar Annotation */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F7CDD9]">
              <div className="flex items-center gap-2">
                <span className="text-[#C85B7B]">✦</span>
                <span className="font-mono-tech text-xs font-bold text-[#9F3D5C] uppercase tracking-wider">
                  FOUR PILLARS // HOVER TO REVEAL
                </span>
              </div>
              <Sticker variant="stamp">HYDERABAD</Sticker>
            </div>

            {/* The 4 Core Words as Interactive Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {(['technology', 'risk', 'compliance', 'data'] as const).map((word) => {
                const isSelected = activeWord === word;
                return (
                  <button
                    key={word}
                    onMouseEnter={() => setActiveWord(word)}
                    onClick={() => setActiveWord(word)}
                    className={`py-2.5 px-3 rounded-2xl font-mono-tech text-xs font-bold transition-all text-center cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] shadow-xs scale-102'
                        : 'bg-[#FFF8F5] text-[#6B4E54] hover:bg-[#FCE4EC] hover:text-[#382629] border border-[#F7CDD9]'
                    }`}
                  >
                    {word.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card Reveal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWord}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 bg-gradient-to-br from-[#FFF8F5] to-[#FCE4EC]/50 p-5 rounded-2xl border border-[#EFAFC2]"
              >
                <div className="flex items-center justify-between">
                  <Sticker variant="washi-rose" rotate={-1}>
                    <span>{current.sticker}</span>
                  </Sticker>
                  <span className="text-[11px] font-mono-tech text-[#9F3D5C] font-semibold">
                    {current.metrics}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#382629]">
                    {current.title}
                  </h3>
                  <p className="font-serif-luxury italic text-xs sm:text-sm text-[#9F3D5C]">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                  {current.details}
                </p>

                {/* Tools Chips */}
                <div className="pt-2 border-t border-[#F7CDD9]">
                  <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase mb-1.5 font-bold">
                    Key Competencies & Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-[#FFFFFF] text-[#9F3D5C] border border-[#EFAFC2]"
                      >
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
