import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroEditorial } from './components/HeroEditorial';
import { AboutEditorial } from './components/AboutEditorial';
import { WhatIDoSection } from './components/WhatIDoSection';
import { ExperienceChapters } from './components/ExperienceChapters';
import { DriskifyFeature } from './components/DriskifyFeature';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactEditorial } from './components/ContactEditorial';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRiskLens = () => {
    const el = document.getElementById('driskify');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#382629] relative selection:bg-[#F7CDD9] selection:text-[#5C1D2E]">
      
      {/* Delicate Custom Pink Star Cursor Follower */}
      <CustomCursor />

      {/* Top Editorial Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Persistent Glassmorphism Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Editorial Content Stream */}
      <main>
        {/* 1. Pinterest / Magazine Editorial Hero */}
        <HeroEditorial
          onExploreClick={handleExploreClick}
          onOpenResume={handleOpenResume}
          onOpenRiskLens={handleOpenRiskLens}
        />

        {/* 2. A Little About Me (4 Interactive Words: Technology, Risk, Compliance, Data) */}
        <AboutEditorial />

        {/* 3. Four Core Practices ("What I Do") */}
        <WhatIDoSection />

        {/* 4. Consulting Experience Chapters (Valerian Risk Solutions & Deloitte) */}
        <ExperienceChapters />

        {/* 5. Driskify AI Pipeline Showcase (Data → Mapping → AI Agents → Control Compliance → Risk Insights) */}
        <DriskifyFeature />

        {/* 6. Featured Project Showcase (Live Apps & Analytics Portfolios) */}
        <ProjectsShowcase />

        {/* 7. Four-Pillar Interactive Skills Matrix */}
        <SkillsMatrix />

        {/* 9. Academic Foundation & Verified Certifications */}
        <EducationCertifications />

        {/* 10. Let's Connect ♡ Editorial Closing */}
        <ContactEditorial onOpenResume={handleOpenResume} />
      </main>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
