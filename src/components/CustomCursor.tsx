import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle follower ring */}
      <motion.div
        className="absolute rounded-full border border-[#E38FA9]/60 pointer-events-none"
        animate={{
          x: position.x - (isHovering ? 18 : 12),
          y: position.y - (isHovering ? 18 : 12),
          width: isHovering ? 36 : 24,
          height: isHovering ? 36 : 24,
          scale: isHovering ? 1.2 : 1,
          backgroundColor: isHovering ? 'rgba(252, 228, 236, 0.4)' : 'rgba(252, 228, 236, 0.1)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.4 }}
      />

      {/* Tiny inner decorative star/dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#9F3D5C] pointer-events-none"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />
    </div>
  );
};
