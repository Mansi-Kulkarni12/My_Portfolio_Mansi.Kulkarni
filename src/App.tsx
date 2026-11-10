import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroEditorial } from './components/HeroEditorial';
import { AboutEditorial } from './components/AboutEditorial';
import { ExperienceChapters } from './components/ExperienceChapters';
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-indigo-600 selection:text-white">
      {/* Precision Micro Follower Cursor */}
      <CustomCursor />

      {/* Top Hairline Scroll Indicator */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Stream */}
      <main>
        {/* Welcoming Hero Section */}
        <HeroEditorial
          onExploreClick={handleExploreClick}
          onOpenResume={handleOpenResume}
        />

        {/* About Me: 3 Core Pillars & Key Highlights */}
        <AboutEditorial />

        {/* Work Experience: Valerian (ServiceNow GRC/IRM) & Deloitte */}
        <ExperienceChapters />

        {/* Featured Projects: PostgreSQL, SQL, Power BI & Web */}
        <ProjectsShowcase />

        {/* Skills & Tools: ServiceNow, Data Analytics, BI, Consulting */}
        <SkillsMatrix />

        {/* Education & Verified Certifications with Direct Drive Links */}
        <EducationCertifications />

        {/* Contact Me & Message Form */}
        <ContactEditorial onOpenResume={handleOpenResume} />
      </main>

      {/* Printable Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
