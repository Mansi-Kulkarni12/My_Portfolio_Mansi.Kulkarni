import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Layers, Database, MessageSquare, Check, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      title: 'GRC & COMPLIANCE',
      subtitle: 'Frameworks & Risk Governance',
      icon: Shield,
      skills: [
        { name: 'ServiceNow GRC', desc: 'Policy & compliance governance' },
        { name: 'ServiceNow IRM', desc: 'Integrated risk management' },
        { name: 'Policy Management', desc: 'Enterprise policy review & alignment' },
        { name: 'Control Mapping', desc: 'ISO/SOC/NIST framework mapping' },
        { name: 'Risk Assessment', desc: 'Vulnerability & disruption impact modeling' },
        { name: 'Compliance Review', desc: 'Operational adherence & mitigation strategies' },
      ],
    },
    {
      title: 'PLATFORMS & TOOLS',
      subtitle: 'Enterprise Platforms & Analytics Suites',
      icon: Layers,
      skills: [
        { name: 'ServiceNow Platform', desc: 'CSA & CIS-DF Certified, CMDB & CSDM' },
        { name: 'Driskify AI Platform', desc: 'Autonomous AI risk agents & data mapping' },
        { name: 'Power BI Desktop', desc: 'Executive dashboard modeling & DAX' },
        { name: 'Microsoft Excel', desc: 'Advanced modeling, pivots & XLOOKUP' },
        { name: 'PostgreSQL & SQL Engine', desc: 'Relational databases & performance tuning' },
        { name: 'Archer (RSA)', desc: 'Enterprise risk management platform' },
      ],
    },
    {
      title: 'DATA & ANALYTICS',
      subtitle: 'Relational Schemas & Visualizations',
      icon: Database,
      skills: [
        { name: 'SQL & PostgreSQL', desc: 'Relational schemas & query optimization' },
        { name: 'Power BI Desktop', desc: 'Interactive dashboards & executive KPIs' },
        { name: 'DAX Measures', desc: 'Custom calculations & statistical modeling' },
        { name: 'Microsoft Excel', desc: 'Data modeling, analysis & equality scoring' },
        { name: 'Power Query & ETL', desc: 'Data cleaning, ingestion & normalization' },
        { name: 'Python', desc: 'Data manipulation & analytical workflows' },
      ],
    },
    {
      title: 'CONSULTING & STRATEGY',
      subtitle: 'Stakeholder Advisory & Execution',
      icon: MessageSquare,
      skills: [
        { name: 'Stakeholder Management', desc: 'Aligning business leaders with tech' },
        { name: 'Requirement Gathering', desc: 'Translating needs into specifications' },
        { name: 'Business Analysis', desc: 'Process gap diagnostics' },
        { name: 'Client Communication', desc: 'Executive presentations & reporting' },
        { name: 'Cross-functional Teams', desc: 'Bridging developers and auditors' },
        { name: 'Problem Solving', desc: 'Structured root cause diagnostics' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#F7CDD9]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sticker variant="washi-pink" rotate={-1}>
              <span>✦ CHAPTER 04 // CAPABILITY INVENTORY</span>
            </Sticker>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight">
            Skills <span className="font-serif-luxury italic font-light text-[#C85B7B]">Matrix</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6B4E54] max-w-sm">
          Four structured pillars covering enterprise compliance, platform administration, advanced analytics, and strategic consulting.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === idx;

          return (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] border-[#9F3D5C] shadow-md scale-102'
                  : 'bg-[#FFFFFF] text-[#6B4E54] border-[#F7CDD9] hover:bg-[#FDF3EE] hover:text-[#382629]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono-tech font-bold ${isSelected ? 'text-[#FFF8F5]/80' : 'text-[#9F3D5C]'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FFF8F5]' : 'text-[#9F3D5C]'}`} />
              </div>
              <div className="font-display font-bold text-sm sm:text-base leading-tight">
                {cat.title}
              </div>
              <div className={`text-[11px] font-serif-luxury italic mt-0.5 ${isSelected ? 'text-[#FFF8F5]/80' : 'text-[#9E7D84]'}`}>
                {cat.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Skills Grid */}
      <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] p-6 sm:p-10 shadow-lg">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F7CDD9]">
          <div className="flex items-center gap-2">
            <span className="text-[#9F3D5C]">✦</span>
            <span className="font-mono-tech text-xs font-bold text-[#382629] uppercase tracking-wider">
              {categories[activeCategory].title} // {categories[activeCategory].subtitle}
            </span>
          </div>
          <Sticker variant="tag">6 KEY COMPETENCIES</Sticker>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories[activeCategory].skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#F7CDD9] hover:border-[#E38FA9] hover:bg-[#FFF0F4] transition-all flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FCE4EC] text-[#9F3D5C] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <div>
                <div className="font-mono-tech text-xs font-bold text-[#382629]">
                  {skill.name}
                </div>
                <div className="text-[11px] text-[#6B4E54] mt-0.5 leading-relaxed">
                  {skill.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
