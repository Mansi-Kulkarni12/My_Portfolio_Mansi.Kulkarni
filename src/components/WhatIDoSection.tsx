import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, AlertTriangle, CheckCircle, Cpu, ArrowUpRight } from 'lucide-react';
import { Sticker, PinkFlower, PinkHeart } from './Stickers';

export const WhatIDoSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const blocks = [
    {
      num: '01',
      title: 'GOVERNANCE',
      short: 'Enterprise Policy & Strategic Oversight',
      description: 'Designing structured governance frameworks, defining operational accountability, and aligning business processes with global security standards.',
      tools: ['Policy Management', 'Stakeholder Advisory', 'Requirement Analysis', 'Executive Briefings'],
      icon: Shield,
      tag: 'Enterprise Strategy',
      accent: '#9F3D5C',
    },
    {
      num: '02',
      title: 'RISK',
      short: 'Assessment & Vulnerability Mapping',
      description: 'Systematically assessing technological and third-party risks, conducting control impact evaluations, and establishing predictive mitigation metrics.',
      tools: ['Risk Assessment', 'Threat Modeling', 'Downtime KPIs', 'Vendor Risk'],
      icon: AlertTriangle,
      tag: 'Risk Intelligence',
      accent: '#C85B7B',
    },
    {
      num: '03',
      title: 'COMPLIANCE',
      short: 'ServiceNow IRM & Audit Validation',
      description: 'Automating compliance attestations in ServiceNow IRM, mapping operational controls to ISO/SOC standards, and orchestrating audit-ready evidence trails.',
      tools: ['ServiceNow IRM', 'Control Mapping', 'Audit Readiness', 'Evidence Collection'],
      icon: CheckCircle,
      tag: 'Regulatory Alignment',
      accent: '#5C1D2E',
    },
    {
      num: '04',
      title: 'TECHNOLOGY',
      short: 'Driskify AI & Data Engineering',
      description: 'Deploying autonomous Driskify AI agents for automated data mapping, optimizing relational PostgreSQL queries, and architecting fluid digital experiences.',
      tools: ['Driskify AI', 'PostgreSQL', 'Power BI DAX', 'Web Architecture'],
      icon: Cpu,
      tag: 'Applied Innovation',
      accent: '#9F3D5C',
    },
  ];

  return (
    <section id="what-i-do" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header with Washi Tape */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sticker variant="washi-rose" rotate={-1}>
              <span>✦ WHAT I DO // CORE DOMAINS</span>
            </Sticker>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight">
            Four Core <span className="font-serif-luxury italic font-light text-[#C85B7B]">Practices</span>
          </h2>
        </div>
        <p className="text-sm text-[#6B4E54] max-w-md">
          A balanced blend of regulatory governance, autonomous AI modeling, and precision data engineering.
        </p>
      </div>

      {/* 4 Large Interactive Visual Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blocks.map((block, idx) => {
          const Icon = block.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden border-2 cursor-default ${
                isHovered
                  ? 'bg-gradient-to-b from-[#FFFFFF] via-[#FFF8F5] to-[#FCE4EC] border-[#E38FA9] shadow-xl'
                  : 'bg-[#FFFFFF] border-[#F7CDD9] shadow-sm'
              }`}
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#F7CDD9]">
                  <span className="font-display text-2xl font-bold text-[#C85B7B]">
                    {block.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isHovered ? 'bg-[#9F3D5C] text-[#FFF8F5]' : 'bg-[#FFF0F4] text-[#9F3D5C]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono-tech text-[#9E7D84] uppercase tracking-wider block mb-1">
                    // {block.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#382629] leading-tight">
                    {block.title}
                  </h3>
                  <p className="font-serif-luxury italic text-xs text-[#9F3D5C] mt-0.5">
                    {block.short}
                  </p>
                </div>

                <p className="text-xs text-[#5C1D2E] leading-relaxed mt-4">
                  {block.description}
                </p>
              </div>

              {/* Bottom Tools & Tags */}
              <div className="mt-8 pt-4 border-t border-[#F7CDD9]">
                <div className="text-[10px] font-mono-tech text-[#9E7D84] uppercase mb-2 font-bold">
                  Tooling & Frameworks:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {block.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
