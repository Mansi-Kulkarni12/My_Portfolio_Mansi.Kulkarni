import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { Sticker, PinkHeart } from './Stickers';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'what-i-do', 'experience', 'driskify', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'WORK', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel-blush border border-[#F7CDD9]/90 shadow-md py-2.5 px-4 sm:px-6'
            : 'bg-[#FFF8F5]/80 backdrop-blur-sm border border-[#F7CDD9]/50 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] flex items-center justify-center font-syne font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
              ✦
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-syne font-bold text-xs sm:text-sm tracking-wider text-[#382629] group-hover:text-[#9F3D5C] transition-colors">
                  MANSI KULKARNI
                </span>
                <span className="text-[#C85B7B] text-xs animate-pulse">✦</span>
              </div>
              <span className="text-[9px] font-mono-tech text-[#9E7D84] tracking-tight uppercase hidden sm:block">
                Technology Consultant · ServiceNow GRC
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#5C1D2E] font-bold bg-[#FCE4EC] border border-[#E38FA9]/60 shadow-2xs'
                      : 'text-[#6B4E54] hover:text-[#382629] hover:bg-[#FDF3EE]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#9F3D5C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono-tech text-[#9F3D5C] bg-[#FFF8F5] hover:bg-[#FCE4EC] border border-[#EFAFC2] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer hover:scale-102"
              title="View Verified Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-syne font-bold text-[#FFF8F5] bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] hover:from-[#822E49] hover:to-[#B04C6A] transition-all shadow-sm flex items-center gap-1.5 hover:scale-102 active:scale-98"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-full bg-[#FCE4EC] text-[#9F3D5C] border border-[#E38FA9] text-xs font-mono-tech"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#FDF3EE] hover:bg-[#FCE4EC] text-[#382629] border border-[#F7CDD9] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-5 rounded-3xl bg-[#FFF8F5]/95 backdrop-blur-xl border border-[#EFAFC2] shadow-xl space-y-4 max-w-7xl mx-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F7CDD9]">
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-sm text-[#382629]">Navigation Menu</span>
                <PinkHeart size={12} />
              </div>
              <Sticker variant="tag">HYDERABAD · 2026</Sticker>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-xs font-mono-tech font-semibold text-[#5C1D2E] hover:bg-[#FCE4EC] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#E38FA9]">↗</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#F7CDD9] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-full text-xs font-mono-tech text-[#9F3D5C] bg-[#FCE4EC] border border-[#EFAFC2] flex items-center justify-center gap-2 font-bold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW VERIFIED RESUME</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full text-xs font-syne font-bold text-[#FFF8F5] bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] flex items-center justify-center gap-2 shadow-sm"
              >
                <span>LET'S TALK ♡</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
