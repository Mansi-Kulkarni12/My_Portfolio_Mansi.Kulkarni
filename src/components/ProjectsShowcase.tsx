import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Activity, Database, BarChart3, Globe, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { HRDashboardSimulator, CreditCardSimulator, SQLBenchmarkSimulator } from './InteractiveProjectSimulators';

export const ProjectsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'data' | 'sql' | 'web'>('all');
  const [expandedSimulator, setExpandedSimulator] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Power BI & Data', value: 'data' },
    { label: 'SQL Optimization', value: 'sql' },
    { label: 'Live Websites', value: 'web' },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Projects Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Data Analytics, SQL & Web Projects
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore my academic data projects built with PostgreSQL, SQL, Power BI, and DAX, alongside deployed responsive web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasSimulator = ['hr-analytics-dashboard', 'credit-card-analytics', 'hospital-visit-analytics', 'bookstore-sales-analytics'].includes(project.id);
            const isSimulatorOpen = expandedSimulator === project.id;

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Line: Project Type & Interactive Demo Button */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                      {project.type}
                    </span>

                    {hasSimulator && (
                      <button
                        onClick={() => setExpandedSimulator(isSimulatorOpen ? null : project.id)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors cursor-pointer"
                      >
                        <Activity className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{isSimulatorOpen ? 'Close Demo' : 'Try Live Demo'}</span>
                      </button>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-extrabold text-slate-900">{m.value}</div>
                          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable Live Interactive Simulator */}
                  {isSimulatorOpen && (
                    <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-xs text-indigo-300 font-bold border-b border-slate-800 pb-2">
                        <span>Interactive Dashboard Preview</span>
                        <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-200">Live Simulator</span>
                      </div>
                      {project.id === 'hr-analytics-dashboard' && <HRDashboardSimulator />}
                      {project.id === 'credit-card-analytics' && <CreditCardSimulator />}
                      {(project.id === 'hospital-visit-analytics' || project.id === 'bookstore-sales-analytics') && <SQLBenchmarkSimulator />}
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-indigo-600 font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools / Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Card Actions */}
                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-end gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>View Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
