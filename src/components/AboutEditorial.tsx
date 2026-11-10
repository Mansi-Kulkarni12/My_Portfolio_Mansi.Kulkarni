import React from 'react';
import { SIMPLE_PILLARS, MANSI_PROFILE } from '../data/portfolioData';
import { ShieldCheck, BarChart3, CheckCircle2, Award, GraduationCap, Briefcase, Database, Layers } from 'lucide-react';

export const AboutEditorial: React.FC = () => {
  const pillarIcons = [
    <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    <Layers className="w-6 h-6 text-purple-600" />,
    <BarChart3 className="w-6 h-6 text-emerald-600" />,
  ];

  const quickStats = [
    { label: "ServiceNow Certifications", value: "2x", detail: "CSA & CIS-Data Foundations", icon: <Award className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-50 border-indigo-200" },
    { label: "B.Tech CGPA", value: "8.83", detail: "Cyber Security (2022–2026)", icon: <GraduationCap className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50 border-purple-200" },
    { label: "Hands-on Consulting", value: "Active", detail: "Valerian Risk Solutions", icon: <Briefcase className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50 border-emerald-200" },
    { label: "Core Analytics Projects", value: "4+", detail: "PostgreSQL, Power BI & SQL", icon: <Database className="w-5 h-5 text-amber-600" />, bg: "bg-amber-50 border-amber-200" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging ServiceNow GRC, Risk &amp; Data Analytics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I help companies translate business and compliance needs into structured, automated workflows on ServiceNow, configure risk registers and control frameworks, and build insightful data dashboards that empower executive decision-making.
          </p>
        </div>

        {/* 3 Core Practice Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIMPLE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {pillar.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                {pillar.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${stat.bg} shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                  {stat.label}
                </span>
                {stat.icon}
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
