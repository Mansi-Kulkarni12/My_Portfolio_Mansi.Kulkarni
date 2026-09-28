import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { EXPERIENCE_CHAPTERS } from '../data/portfolioData';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const ExperienceChapters: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#F7CDD9]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sticker variant="washi-pink" rotate={-2}>
              <span>✦ CHAPTER 02 // PROFESSIONAL TRACK RECORD</span>
            </Sticker>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight">
            Consulting <span className="font-serif-luxury italic font-light text-[#C85B7B]">Experience</span>
          </h2>
        </div>
        <Sticker variant="stamp">SOURCE: VERIFIED RESUME</Sticker>
      </div>

      {/* Editorial Experience Panels */}
      <div className="space-y-10">
        
        {/* Panel 1: Current Valerian Risk Solutions */}
        <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#EFAFC2] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Stamp / Currently Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F7CDD9]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#9F3D5C] animate-ping" />
              <Sticker variant="ribbon">
                <span>✦ CURRENTLY ENGAGED</span>
              </Sticker>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono-tech text-[#6B4E54]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9F3D5C]" />
                <span>Hyderabad · Hybrid</span>
              </span>
              <span>•</span>
              <span className="font-bold text-[#9F3D5C]">Jun 2026 — Present</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Role & Company Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono-tech text-[#9E7D84] uppercase tracking-wider font-bold">
                  CHAPTER 01 // ENTERPRISE GRC & AI
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#382629] mt-1">
                  Valerian Risk Solutions
                </h3>
                <p className="text-sm sm:text-base font-serif-luxury italic text-[#9F3D5C] font-semibold">
                  Technology Consultant — ServiceNow GRC & IRM
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                Architecting enterprise GRC solutions and orchestrating Driskify AI agents for automated risk governance, policy compliance review, and stakeholder advisory.
              </p>

              {/* Skills Used Chips */}
              <div className="pt-2">
                <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase font-bold mb-2">
                  Applied Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['ServiceNow GRC', 'ServiceNow IRM', 'Driskify AI', 'Risk Assessment', 'Control Mapping', 'Policy Review', 'Stakeholder Management'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9] shadow-2xs"
                    >
                      ✦ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Specific Deliverables & Bullet Points */}
            <div className="lg:col-span-7 bg-[#FFF8F5] rounded-2xl p-6 border border-[#F7CDD9] space-y-4">
              <div className="text-xs font-mono-tech text-[#9F3D5C] uppercase font-bold tracking-wider">
                // RESPONSIBILITIES & DELIVERABLES:
              </div>

              <ul className="space-y-3">
                {[
                  'Support risk and compliance solution implementation for client organizations, collaborating directly with executive stakeholders to understand business requirements.',
                  'Categorize client enterprise data on the Driskify AI platform, mapping columns and deploying specialized AI agents to evaluate control compliance and generate risk insights.',
                  'Conduct systematic policy compliance reviews, aligning client procedures with ISO, SOC, and NIST framework baselines.',
                  'Facilitate cross-functional coordination, translating technical ServiceNow IRM configurations into executive-ready risk posture summaries.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#382629] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C85B7B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Panel 2: Deloitte Virtual Job Simulation */}
        <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] p-6 sm:p-10 shadow-md relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F7CDD9]">
            <div className="flex items-center gap-3">
              <Sticker variant="tag">
                <span>✦ FORAGE SIMULATION</span>
              </Sticker>
              <Sticker variant="washi-pink" rotate={2}>
                <span>DATA & TELEMETRY</span>
              </Sticker>
            </div>
            <div className="text-xs font-mono-tech text-[#6B4E54]">
              <span>Virtual Internship</span> · <span className="font-bold text-[#9F3D5C]">March 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono-tech text-[#9E7D84] uppercase tracking-wider font-bold">
                  CHAPTER 02 // INDUSTRIAL TELEMETRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#382629] mt-1">
                  Deloitte
                </h3>
                <p className="text-sm sm:text-base font-serif-luxury italic text-[#9F3D5C] font-semibold">
                  Data Analytics Job Simulation on Forage
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                Industrial telemetry analysis across 4 manufacturing plants and 9 machine types, formulating custom downtime threshold metrics and pay equity models.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Power BI Analytics', 'JSON Telemetry', 'Downtime Modeling', 'Excel Analytics', 'Pay Equity'].map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-xs font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9]"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FFF8F5] rounded-2xl p-6 border border-[#F7CDD9] space-y-4">
              <div className="text-xs font-mono-tech text-[#9F3D5C] uppercase font-bold tracking-wider">
                // CORE ANALYTICAL OUTCOMES:
              </div>

              <ul className="space-y-3">
                {[
                  'Evaluated May 2021 JSON telemetry data from 4 factories and 9 machine types to diagnose failure frequency patterns.',
                  'Engineered a 10-minute "Unhealthy" downtime metric and created an interactive executive dashboard pinpointing highest downtime locations.',
                  'Classified employee equality scores (-100 to +100) into 3 strategic categories using Microsoft Excel for corporate pay equity analysis.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#382629] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#9F3D5C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
