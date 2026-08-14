import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RISK_SCENARIOS } from '../data/portfolioData';
import { RiskScenario } from '../types';
import { ShieldAlert, ShieldCheck, Sparkles, AlertCircle, ArrowRight, CheckCircle2, RotateCcw, Cpu } from 'lucide-react';

export const SurpriseRiskMatrix: React.FC = () => {
  const [selectedRiskId, setSelectedRiskId] = useState<string>(RISK_SCENARIOS[0].id);
  const [activeRemediation, setActiveRemediation] = useState<boolean>(false);

  const selectedRisk = RISK_SCENARIOS.find((r) => r.id === selectedRiskId) || RISK_SCENARIOS[0];

  const handleSelectRisk = (id: string) => {
    setSelectedRiskId(id);
    setActiveRemediation(false);
  };

  const getHeatmapColor = (row: number, col: number) => {
    const score = row * col;
    if (score >= 6) return 'bg-[#380c16] text-[#FFF9F5] border-[#e91e63]'; // Critical/High
    if (score >= 3) return 'bg-[#24070d] text-[#e91e63] border-[#e91e63]/40'; // Medium
    return 'bg-[#1a0505] text-[#FAD4D8]/70 border-[#e91e63]/20';               // Low
  };

  return (
    <section id="matrix" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono-tech text-xs tracking-widest text-[#e91e63] uppercase font-semibold">
            ✦ SURPRISE INTERACTION // GRC RISK MATRIX
          </span>
          <div className="h-[1px] w-12 bg-[#e91e63]/40" />
          <span className="font-mono-tech text-xs text-[#FAD4D8]/70">
            TACTILE CONTROL INSPECTOR
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#FFF9F5] tracking-tight mb-4">
          The Interactive Risk & Control Lens.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-[#FAD4D8]/80 leading-relaxed">
          Test how Mansi maps real-world enterprise technology risks to regulatory frameworks (ISO/SOC2/NIST), triggers Driskify AI agents, and automates ServiceNow IRM controls.
        </p>
      </div>

      {/* Interactive Matrix Arena */}
      <div className="rounded-3xl bg-[#24070d] border border-[#e91e63]/40 p-6 sm:p-10 shadow-2xl">
        
        {/* Scenario Selection Pills */}
        <div className="mb-8">
          <div className="text-xs font-mono-tech text-[#FAD4D8]/70 uppercase mb-3 font-semibold">
            Select an Enterprise Risk Event to Audit:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {RISK_SCENARIOS.map((risk) => {
              const isSelected = selectedRiskId === risk.id;
              return (
                <button
                  key={risk.id}
                  id={`risk-btn-${risk.id}`}
                  onClick={() => handleSelectRisk(risk.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#e91e63] text-[#FFF9F5] border-[#ff4081] shadow-lg -translate-y-0.5 ring-1 ring-[#ff4081]'
                      : 'bg-[#1e080f] text-[#FFF9F5] border-[#e91e63]/30 hover:bg-[#2d0911]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                    <span className={isSelected ? 'text-[#FFF9F5] font-bold' : 'text-[#e91e63]'}>
                      {risk.domain}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isSelected
                          ? 'bg-[#FFF9F5] text-[#e91e63]'
                          : risk.riskScore === 'Critical'
                          ? 'bg-[#e91e63] text-white'
                          : risk.riskScore === 'High'
                          ? 'bg-[#e91e63]/80 text-white'
                          : 'bg-[#2d0911] text-[#e91e63] border border-[#e91e63]/30'
                      }`}
                    >
                      {risk.riskScore}
                    </span>
                  </div>
                  <div className="font-syne font-bold text-xs sm:text-sm line-clamp-2">
                    {risk.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Matrix Grid & Remediation Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3x3 Heatmap Matrix Grid */}
          <div className="lg:col-span-6 bg-[#1a0505] rounded-3xl p-6 border border-[#e91e63]/30 shadow-inner">
            <div className="flex items-center justify-between text-xs font-mono-tech text-[#FAD4D8]/70 mb-4 pb-2 border-b border-[#e91e63]/30">
              <span>IMPACT (Y) vs LIKELIHOOD (X) MATRIX</span>
              <span className="text-[#e91e63] font-semibold">ISO/IEC 27005 ALIGNED</span>
            </div>

            {/* 3x3 Matrix Table */}
            <div className="space-y-2">
              {[3, 2, 1].map((impactLevel) => (
                <div key={impactLevel} className="flex items-center gap-2">
                  <span className="w-16 font-mono-tech text-[10px] text-[#FAD4D8]/60 text-right">
                    {impactLevel === 3 ? 'HIGH' : impactLevel === 2 ? 'MED' : 'LOW'} IMP
                  </span>

                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {[1, 2, 3].map((likelihoodLevel) => {
                      const isCoordinate =
                        selectedRisk.likelihood === likelihoodLevel &&
                        selectedRisk.impact === impactLevel;

                      return (
                        <div
                          key={likelihoodLevel}
                          className={`h-16 sm:h-20 rounded-xl border flex flex-col items-center justify-center p-2 text-center transition-all duration-300 relative ${getHeatmapColor(
                            impactLevel,
                            likelihoodLevel
                          )} ${
                            isCoordinate
                              ? 'ring-4 ring-[#e91e63] scale-105 shadow-xl z-10'
                              : 'opacity-70 hover:opacity-100'
                          }`}
                        >
                          {isCoordinate && (
                            <motion.div
                              layoutId="matrix-pin"
                              className="w-3 h-3 rounded-full bg-[#ff4081] shadow-sm mb-1 animate-ping"
                            />
                          )}
                          <span className="font-mono-tech text-[10px] font-bold">
                            L{likelihoodLevel} · I{impactLevel}
                          </span>
                          <span className="text-[9px] font-mono-tech uppercase">
                            {impactLevel * likelihoodLevel >= 6
                              ? 'Critical'
                              : impactLevel * likelihoodLevel >= 3
                              ? 'Medium'
                              : 'Low'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* X-axis Labels */}
              <div className="flex items-center gap-2 pt-2">
                <span className="w-16" />
                <div className="grid grid-cols-3 gap-2 flex-1 text-center font-mono-tech text-[10px] text-[#FAD4D8]/60">
                  <span>LOW LIKELIHOOD</span>
                  <span>MED LIKELIHOOD</span>
                  <span>HIGH LIKELIHOOD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Automated GRC Remediation Breakdown */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#24070d] to-[#1a0505] text-[#FFF9F5] rounded-3xl p-6 sm:p-8 border border-[#e91e63]/40 shadow-2xl">
            <div className="flex items-center justify-between text-xs font-mono-tech pb-3 border-b border-[#e91e63]/30 mb-4">
              <span className="text-[#e91e63] font-bold">AUTOMATED GRC REMEDIATION</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#2d0911] text-[#e91e63] border border-[#e91e63]/40">
                SCORE: {selectedRisk.riskScore.toUpperCase()}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FFF9F5] mb-2">
              {selectedRisk.title}
            </h3>

            <p className="text-xs text-[#FAD4D8]/80 leading-relaxed mb-5">
              {selectedRisk.description}
            </p>

            {/* Framework & Control Cards */}
            <div className="space-y-3 font-mono-tech text-xs">
              <div className="p-3 rounded-xl bg-[#1e080f] border border-[#e91e63]/30">
                <span className="text-[#e91e63] text-[10px] uppercase block mb-1">
                  1. REGULATORY BASELINE MAPPING:
                </span>
                <span className="text-[#FFF9F5] font-semibold">{selectedRisk.controlFramework}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#1e080f] border border-[#e91e63]/30">
                <span className="text-[#e91e63] text-[10px] uppercase block mb-1">
                  2. SERVICENOW IRM CONTROL RECORD:
                </span>
                <span className="text-[#FAD4D8]">{selectedRisk.serviceNowControl}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#2d0911] border border-[#e91e63]/50">
                <span className="text-[#e91e63] text-[10px] uppercase block mb-1 flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3 text-[#e91e63]" />
                  <span>3. DRISKIFY AI AGENT INTERVENTION:</span>
                </span>
                <span className="text-[#FFF9F5]">{selectedRisk.driskifyAiAction}</span>
              </div>
            </div>

            {/* Simulated Action */}
            <div className="mt-6 pt-4 border-t border-[#e91e63]/30 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#FAD4D8]/60">STATUS: REMEDIATED</span>
              <button
                onClick={() => setActiveRemediation(!activeRemediation)}
                className="px-3.5 py-1.5 rounded-full bg-[#e91e63] hover:bg-[#ff4081] text-[#FFF9F5] transition-colors shadow-sm"
              >
                {activeRemediation ? '✓ Control Verified' : 'Re-verify Control ↗'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
