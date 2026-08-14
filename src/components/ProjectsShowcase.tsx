import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Check, X, Database, BarChart3, Globe, Coffee } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { CAFE_MICO_ASSET, COFFEE_CRISPS_ASSET } from '../data/assetManager';
import { ProjectItem } from '../types';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const ProjectsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'data' | 'sql'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#F7CDD9]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sticker variant="washi-pink" rotate={-2}>
              <span>✦ CHAPTER 03 // CURATED WORK</span>
            </Sticker>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight">
            Featured <span className="font-serif-luxury italic font-light text-[#C85B7B]">Projects</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'ALL WORK', value: 'all' },
            { label: 'LIVE WEB APPS', value: 'web' },
            { label: 'POWER BI & DATA', value: 'data' },
            { label: 'SQL OPTIMIZATION', value: 'sql' },
          ].map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] shadow-xs'
                    : 'bg-[#FFF8F5] text-[#6B4E54] hover:bg-[#FCE4EC] hover:text-[#382629] border border-[#F7CDD9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const isLiveWeb = project.category === 'web';
          const projectImage =
            project.id === 'cafe-mico'
              ? CAFE_MICO_ASSET
              : project.id === 'coffee-crisps'
              ? COFFEE_CRISPS_ASSET
              : null;

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] hover:border-[#E38FA9] p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div>
                
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F7CDD9]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9F3D5C]" />
                    <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider text-[#9F3D5C]">
                      {project.type}
                    </span>
                  </div>
                  {isLiveWeb && (
                    <Sticker variant="tag">LIVE PRODUCTION ↗</Sticker>
                  )}
                </div>

                {/* Project Visual Preview Frame */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#F7CDD9] bg-gradient-to-br from-[#FFF8F5] via-[#FCE4EC]/50 to-[#F7CDD9]/40 p-6 flex flex-col justify-between min-h-[160px] sm:min-h-[180px]">
                  
                  {/* If an authentic project image asset is present in src/assets */}
                  {projectImage && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={projectImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent" />
                    </div>
                  )}

                  {/* Decorative Browser Top Dots */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#EFAFC2]/40 text-xs text-[#9F3D5C] font-mono-tech">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EFAFC2]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F7CDD9]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFF8F5]" />
                    </div>
                    <span>{project.id.toUpperCase()}</span>
                  </div>

                  <div className="relative z-10 py-4">
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#382629] group-hover:text-[#9F3D5C] transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <p className="font-serif-luxury italic text-xs sm:text-sm text-[#6B4E54] mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Visual Metric Badges if available */}
                  {project.metrics && (
                    <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-[#EFAFC2]/40">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center p-1.5 rounded-xl bg-[#FFFFFF]/80 border border-[#F7CDD9]">
                          <div className="font-display text-base font-bold text-[#9F3D5C]">{m.value}</div>
                          <div className="text-[9px] font-mono-tech text-[#9E7D84] uppercase">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                      <span className="text-[#C85B7B] font-bold mt-0.5">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="pt-4 border-t border-[#F7CDD9]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-mono-tech text-[#6B4E54] hover:text-[#9F3D5C] font-semibold underline cursor-pointer"
                  >
                    View Project Breakdown
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] hover:from-[#822E49] hover:to-[#B04C6A] text-[#FFF8F5] text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-xs transition-all hover:scale-102 cursor-pointer"
                    >
                      <span>VIEW LIVE WEBSITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#382629]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#FFF8F5] text-[#382629] rounded-3xl p-6 sm:p-10 border-2 border-[#EFAFC2] shadow-2xl max-w-2xl w-full relative overflow-hidden"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#FCE4EC] hover:bg-[#F7CDD9] text-[#9F3D5C] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <Sticker variant="washi-pink" rotate={-2}>
                    <span>PROJECT BREAKDOWN</span>
                  </Sticker>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#382629] mt-2">
                    {activeProjectModal.title}
                  </h3>
                  <p className="font-serif-luxury italic text-sm text-[#9F3D5C] mt-0.5">
                    {activeProjectModal.type}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono-tech text-[#9E7D84] uppercase font-bold">
                    Executive Summary:
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                    {activeProjectModal.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono-tech text-[#9E7D84] uppercase font-bold">
                    Key Architectural Highlights:
                  </div>
                  <ul className="space-y-2">
                    {activeProjectModal.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#382629]">
                        <span className="text-[#9F3D5C] font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono-tech text-[#9E7D84] uppercase font-bold mb-2">
                    Tooling & Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[#FFFFFF] text-[#9F3D5C] border border-[#EFAFC2]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F7CDD9] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-full bg-[#FFF8F5] border border-[#F7CDD9] text-xs font-mono-tech text-[#6B4E54] hover:bg-[#FCE4EC] cursor-pointer"
                  >
                    Close
                  </button>

                  {activeProjectModal.liveUrl && (
                    <a
                      href={activeProjectModal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <span>OPEN LIVE DEPLOYMENT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
