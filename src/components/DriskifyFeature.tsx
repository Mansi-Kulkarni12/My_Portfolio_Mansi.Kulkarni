import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, GitFork, Cpu, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { DRISKIFY_PIPELINE_STAGES } from '../data/portfolioData';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const DriskifyFeature: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const steps = [
    {
      title: 'DATA INGESTION',
      short: 'Enterprise Data Lake',
      description: 'Ingesting multi-source spreadsheets, operational logs, and database tables into the Driskify workspace.',
      icon: Database,
      badge: '01 · INGEST',
    },
    {
      title: 'DATA MAPPING',
      short: 'Automated Column Alignment',
      description: 'Categorizing fields, identifying PII/critical attributes, and mapping columns directly to compliance schemas.',
      icon: GitFork,
      badge: '02 · MAP',
    },
    {
      title: 'AI AGENTS',
      short: 'Autonomous Reasoning Engine',
      description: 'Deploying targeted autonomous AI agents that analyze mapped data points against regulatory rule sets.',
      icon: Cpu,
      badge: '03 · REASON',
    },
    {
      title: 'CONTROL COMPLIANCE',
      short: 'Attestation & Validation',
      description: 'Verifying evidence trails, flagging policy discrepancies, and executing control tests automatically.',
      icon: ShieldCheck,
      badge: '04 · VALIDATE',
    },
    {
      title: 'RISK INSIGHTS',
      short: 'Executive Intelligence',
      description: 'Synthesizing findings into predictive risk scorecards and automated ServiceNow remediation tickets.',
      icon: TrendingUp,
      badge: '05 · MITIGATE',
    },
  ];

  return (
    <section id="driskify" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Decorative Header */}
      <div className="rounded-3xl bg-gradient-to-br from-[#FFF8F5] via-[#FCE4EC] to-[#F7CDD9] border-2 border-[#EFAFC2] p-8 sm:p-12 shadow-xl relative overflow-hidden">
        
        {/* Ambient Top Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E38FA9]/40">
          <div className="flex items-center gap-2">
            <Sticker variant="ribbon">
              <span>✦ DRISKIFY AI PLATFORM</span>
            </Sticker>
            <Sticker variant="washi-pink" rotate={2}>
              <span>VALERIAN RISK INTEGRATION</span>
            </Sticker>
          </div>
          <span className="text-xs font-mono-tech text-[#5C1D2E] font-semibold">
            AUTONOMOUS RISK GOVERNANCE
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#382629] tracking-tight leading-tight">
            How I Leverage <span className="font-serif-luxury italic font-light text-[#9F3D5C]">Driskify AI</span> to Automate Enterprise Compliance
          </h2>
          <p className="text-sm sm:text-base text-[#6B4E54] mt-3 leading-relaxed">
            From raw enterprise datasets to actionable executive risk insights—an intelligent end-to-end pipeline orchestrated by autonomous AI compliance agents.
          </p>
        </div>

        {/* Visual 5-Stage Stepper Flow (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStage === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#9F3D5C] shadow-md scale-102'
                    : 'bg-[#FFF8F5]/80 border-[#F7CDD9] hover:bg-[#FFFFFF] hover:border-[#EFAFC2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech font-bold text-[#9F3D5C]">
                    {s.badge}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      isSelected ? 'bg-[#9F3D5C] text-[#FFF8F5]' : 'bg-[#FFF0F4] text-[#9F3D5C]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="font-display text-sm font-bold text-[#382629] leading-tight">
                  {s.title}
                </div>
                <div className="text-[11px] font-serif-luxury italic text-[#6B4E54] mt-0.5">
                  {s.short}
                </div>

                {isSelected && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#9F3D5C] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Stage Card */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#EFAFC2] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9F3D5C]" />
              <span className="text-xs font-mono-tech text-[#9F3D5C] font-bold uppercase tracking-wider">
                STAGE {activeStage + 1} DEEP DIVE // {steps[activeStage].title}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#382629]">
              {steps[activeStage].short}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
              {steps[activeStage].description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveStage((prev) => (prev + 1) % steps.length)}
              className="px-4 py-2.5 rounded-full bg-[#FCE4EC] hover:bg-[#F7CDD9] text-[#9F3D5C] text-xs font-mono-tech font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
