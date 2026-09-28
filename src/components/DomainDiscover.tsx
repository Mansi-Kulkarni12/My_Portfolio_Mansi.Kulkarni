import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOMAIN_PILLARS } from '../data/portfolioData';
import { ShieldCheck, Cpu, Database, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DomainDiscoverProps {
  onSelectCategory?: (category: string) => void;
}

export const DomainDiscover: React.FC<DomainDiscoverProps> = ({ onSelectCategory }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('grc');

  const selectedPillar = DOMAIN_PILLARS.find((p) => p.id === selectedPillarId) || DOMAIN_PILLARS[0];

  return (
    <section id="discover" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono-tech text-xs tracking-widest text-[#e91e63] uppercase font-semibold">
            01 // WHO IS MANSI?
          </span>
          <div className="h-[1px] w-12 bg-[#e91e63]/40" />
          <span className="font-mono-tech text-xs text-[#FAD4D8]/70">
            INTERACTIVE DOMAIN DISCOVERY
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#FFF9F5] tracking-tight mb-4">
          Unfolding the Professional Spectrum.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-[#FAD4D8]/80 leading-relaxed">
          Select any domain below to examine how Mansi integrates regulatory compliance, autonomous AI systems, and empirical data analytics into business outcomes.
        </p>
      </div>

      {/* Interactive Pillar Selector (Giant Typography Buttons) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {DOMAIN_PILLARS.map((pillar, idx) => {
          const isSelected = pillar.id === selectedPillarId;
          return (
            <button
              key={pillar.id}
              id={`discover-pillar-${pillar.id}`}
              onClick={() => setSelectedPillarId(pillar.id)}
              className={`group relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 ${
                isSelected
                  ? 'bg-[#e91e63] text-[#FFF9F5] shadow-lg -translate-y-1 ring-1 ring-[#ff4081]'
                  : 'bg-[#24070d] text-[#FFF9F5] border border-[#e91e63]/30 hover:border-[#e91e63] hover:bg-[#2d0911]'
              }`}
            >
              {/* Number Index */}
              <div className="flex items-center justify-between mb-3 text-xs font-mono-tech">
                <span className={isSelected ? 'text-[#FFF9F5] font-bold' : 'text-[#FAD4D8]/60'}>
                  0{idx + 1}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFF9F5] animate-pulse" />
                )}
              </div>

              {/* Word Title */}
              <div
                className={`font-syne font-bold text-sm sm:text-base tracking-wide transition-colors ${
                  isSelected ? 'text-[#FFF9F5]' : 'text-[#FFF9F5] group-hover:text-[#e91e63]'
                }`}
              >
                {pillar.word}
              </div>

              {/* Tag subtitle */}
              <div
                className={`text-[11px] font-mono-tech mt-1 ${
                  isSelected ? 'text-[#FFF9F5]/90' : 'text-[#FAD4D8]/60'
                }`}
              >
                {pillar.tag}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Domain Insight Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPillar.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#24070d] to-[#1e080f] border border-[#e91e63]/40 p-6 sm:p-10 shadow-2xl"
        >
          {/* Subtle Ambient Badge */}
          <div className="absolute top-6 right-6 font-mono-tech text-[10px] uppercase px-3 py-1 rounded-full bg-[#2d0911] text-[#e91e63] border border-[#e91e63]/40 shadow-sm">
            DOM-SPEC // {selectedPillar.id.toUpperCase()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d0911] text-[#e91e63] border border-[#e91e63]/30 font-mono-tech text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedPillar.short}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF9F5] mb-4 leading-tight">
                {selectedPillar.title}
              </h3>

              <p className="text-base sm:text-lg text-[#FAD4D8]/80 leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#e91e63]/30">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FFF9F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63]" />
                  <span>Primary Focus: {selectedPillar.metrics}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FAD4D8]/70">
                  <span className="w-2 h-2 rounded-full bg-[#e91e63]" />
                  <span>Valerian Risk Solutions & Projects</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Highlights */}
            <div className="lg:col-span-5 bg-[#1e080f] rounded-2xl p-5 border border-[#e91e63]/30 shadow-sm">
              <div className="text-xs font-mono-tech text-[#e91e63] font-bold uppercase tracking-wider mb-3">
                // PRACTICAL IMPLEMENTATION IN PRACTICE
              </div>

              <div className="space-y-3 text-xs text-[#FAD4D8]/80">
                {selectedPillar.id === 'grc' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Risk & Control Assessments</span>
                      Conducting end-to-end vulnerability reviews, gap audits, and control design validation across enterprise IT assets.
                    </div>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Regulatory Policy Reviews</span>
                      Aligning enterprise controls with ISO 27001, SOC 2, and NIST cybersecurity frameworks.
                    </div>
                  </>
                )}

                {selectedPillar.id === 'servicenow' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">ServiceNow IRM Workflows</span>
                      Configuring tables, automated attestations, and compliance review cycles within ServiceNow.
                    </div>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Earned Certifications</span>
                      ServiceNow CSA & CIS-DF (CMDB and CSDM) Certified with hands-on platform expertise.
                    </div>
                  </>
                )}

                {selectedPillar.id === 'driskify' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Data Column Mapping</span>
                      Classifying multi-source enterprise client columns into standardized compliance taxonomies.
                    </div>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Autonomous AI Agent Execution</span>
                      Running targeted AI compliance agents to uncover anomalies and generate proactive risk briefs.
                    </div>
                  </>
                )}

                {selectedPillar.id === 'data' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">PostgreSQL & Query Optimization</span>
                      Architecting relational schemas with 20% error reductions and 30% execution acceleration.
                    </div>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Power BI DAX Dashboards</span>
                      Delivering interactive financial and HR analytics dashboards with multi-KPI slicing.
                    </div>
                  </>
                )}

                {selectedPillar.id === 'consulting' && (
                  <>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Executive Stakeholder Advisory</span>
                      Presenting compliance health scores and mitigation priorities directly to client leadership.
                    </div>
                    <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/30">
                      <span className="font-semibold text-[#FFF9F5] block mb-1">Requirement Engineering</span>
                      Converting complex regulatory mandates into actionable developer and auditor user stories.
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
