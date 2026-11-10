import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Layers, ShieldCheck, Sparkles, Database, Users, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const groupIcons = [
    <ShieldCheck className="w-5 h-5 text-blue-600" />,
    <Sparkles className="w-5 h-5 text-purple-600" />,
    <Database className="w-5 h-5 text-emerald-600" />,
    <Users className="w-5 h-5 text-amber-600" />,
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Skills & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Technical & Consulting Skills
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Proficiencies across the ServiceNow platform, enterprise risk and compliance workflows, relational data analytics, and stakeholder consulting.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              key={group.title}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {groupIcons[gIdx]}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg">
                    {group.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {group.skills.length} Skills
                </span>
              </div>

              {/* Skills List in Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${group.bgBadge} transition-transform hover:-translate-y-0.5`}
                  >
                    <CheckCircle2 className="w-3 h-3 opacity-60" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
