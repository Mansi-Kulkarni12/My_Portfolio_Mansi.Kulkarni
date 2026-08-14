import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Briefcase, Clock, Compass } from 'lucide-react';
import { MANSI_PROFILE } from '../data/portfolioData';

export const RightNowSnapshot: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#24070d] via-[#2d0911] to-[#24070d] border border-[#e91e63]/40 p-6 sm:p-10 shadow-2xl">
        
        {/* Ambient Top Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e91e63]/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e91e63] animate-ping" />
            <span className="font-mono-tech text-xs font-bold text-[#e91e63] uppercase tracking-wider">
              RIGHT NOW // LIVE PROFESSIONAL SNAPSHOT
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-tech text-[#FAD4D8]/80">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#e91e63]" />
              <span>Hyderabad, India</span>
            </span>
            <span>•</span>
            <span className="text-[#e91e63] font-semibold">2026 Engagement</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF9F5] mb-3">
              Actively Consulting in ServiceNow GRC & Driskify AI.
            </h3>
            <p className="text-sm sm:text-base text-[#FAD4D8]/80 leading-relaxed mb-6">
              Currently driving risk and compliance architectures at Valerian Risk Solutions, categorizing enterprise datasets, and orchestrating autonomous AI agents for automated regulatory alignment.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "GRC & IRM",
                "ServiceNow Platform",
                "Driskify AI Agents",
                "Data Column Mapping",
                "ISO & SOC 2 Baselines",
                "PostgreSQL & DAX",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[#1e080f] text-[#e91e63] border border-[#e91e63]/30 shadow-sm"
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#1a0505] rounded-2xl p-5 border border-[#e91e63]/30 flex flex-col justify-between shadow-lg">
            <div className="text-xs font-mono-tech text-[#e91e63] mb-2 uppercase font-semibold">
              Current Engagement Summary:
            </div>
            <div className="space-y-2 text-xs text-[#FFF9F5]">
              <div className="font-semibold">Role: Technology Consultant</div>
              <div className="text-[#FAD4D8]/80">Entity: Valerian Risk Solutions</div>
              <div className="text-[#e91e63] font-mono-tech font-bold">Status: Active & Available for Advisory</div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e91e63]/30 text-[11px] font-mono-tech text-[#FAD4D8]/60">
              UPDATED: AUG 2026
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
