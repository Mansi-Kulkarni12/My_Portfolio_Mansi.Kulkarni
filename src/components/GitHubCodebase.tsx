import React from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight, Code2, Database, Terminal, Star, GitFork } from 'lucide-react';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const GitHubCodebase: React.FC = () => {
  const curatedRepos = [
    {
      name: 'SQL-Analytics-Optimization',
      description: 'PostgreSQL relational schemas, complex subqueries, indexing benchmarks, and query execution plans for retail and hospital datasets.',
      language: 'PostgreSQL / SQL',
      tag: 'DATABASE OPTIMIZATION',
      stats: { branches: 3, commits: '40+' },
    },
    {
      name: 'Credit-Card-Financial-Analytics',
      description: 'End-to-end Power BI report connected to PostgreSQL database tracking $55M revenue, weekly deltas, and risk metrics using DAX formulas.',
      language: 'Power BI / DAX / SQL',
      tag: 'BUSINESS INTELLIGENCE',
      stats: { branches: 2, commits: '25+' },
    },
    {
      name: 'Web-Architecture-Interactive-Portals',
      description: 'Modern web applications featuring clean UI architectures, fluid state management, and optimized responsive layouts.',
      language: 'TypeScript / React / CSS',
      tag: 'WEB DEVELOPMENT',
      stats: { branches: 4, commits: '60+' },
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] p-8 sm:p-12 shadow-lg relative overflow-hidden">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-[#F7CDD9]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sticker variant="washi-rose" rotate={-1}>
                <span>✦ OPEN SOURCE & CODEBASE</span>
              </Sticker>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#382629]">
              More of My <span className="font-serif-luxury italic font-light text-[#C85B7B]">Work</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4E54] mt-1 font-mono-tech">
              github.com/Mansi-Kulkarni12
            </p>
          </div>

          <a
            href="https://github.com/Mansi-Kulkarni12"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#382629] hover:bg-[#5C1D2E] text-[#FFF8F5] text-xs font-mono-tech font-bold flex items-center gap-2 shadow-md transition-all hover:scale-102 self-start md:self-auto cursor-pointer"
          >
            <Github className="w-4 h-4 text-[#F7CDD9]" />
            <span>EXPLORE GITHUB ↗</span>
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curatedRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FFF8F5] border border-[#F7CDD9] hover:border-[#EFAFC2] hover:bg-[#FFF0F4] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono-tech text-[#9F3D5C] font-bold">
                  <span>{repo.tag}</span>
                  <Code2 className="w-3.5 h-3.5 text-[#9F3D5C]" />
                </div>

                <h4 className="font-mono-tech text-sm font-bold text-[#382629] mb-2">
                  {repo.name}
                </h4>

                <p className="text-xs text-[#5C1D2E] leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7CDD9] flex items-center justify-between text-[11px] font-mono-tech text-[#9E7D84]">
                <span className="font-semibold text-[#9F3D5C]">{repo.language}</span>
                <span className="text-[#6B4E54]">Public Repository</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
