import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#FCE4EC] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#EFAFC2] via-[#C85B7B] to-[#9F3D5C] transition-all duration-75 relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {scrollProgress > 2 && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[9px] text-[#9F3D5C] select-none font-bold">
            ✦
          </span>
        )}
      </div>
    </div>
  );
};
