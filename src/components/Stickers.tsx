import React from 'react';
import { motion } from 'motion/react';

interface StickerProps {
  children?: React.ReactNode;
  variant?: 'pink-badge' | 'washi-pink' | 'washi-rose' | 'stamp' | 'ribbon' | 'tag' | 'heart' | 'star' | 'flower' | 'note';
  className?: string;
  rotate?: number;
  interactive?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({
  children,
  variant = 'pink-badge',
  className = '',
  rotate = 0,
  interactive = true,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'washi-pink':
        return 'washi-tape-pink text-[#5C1D2E] font-mono-tech text-[11px] px-3 py-1 border-t border-b border-[#EFAFC2]/60';
      case 'washi-rose':
        return 'washi-tape-rose text-[#382629] font-mono-tech text-[11px] px-3.5 py-1 font-semibold';
      case 'stamp':
        return 'postage-stamp bg-[#FFF8F5] text-[#9F3D5C] font-mono-tech text-[10px] px-2.5 py-1.5 uppercase font-bold tracking-wider';
      case 'ribbon':
        return 'bg-gradient-to-r from-[#9F3D5C] to-[#C85B7B] text-[#FFF8F5] font-syne text-[11px] font-bold px-3.5 py-1 rounded-full shadow-sm';
      case 'tag':
        return 'bg-[#FFF8F5] border border-[#EFAFC2] text-[#9F3D5C] font-mono-tech text-[10px] px-2.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider';
      case 'note':
        return 'bg-[#FFF0F4] border border-[#F7CDD9] text-[#5C1D2E] font-serif-luxury italic text-xs px-3 py-1.5 rounded-xl shadow-xs';
      case 'heart':
      case 'star':
      case 'flower':
        return 'w-8 h-8 rounded-full bg-[#FFF0F4] border border-[#EFAFC2] text-[#C85B7B] flex items-center justify-center text-sm shadow-xs';
      case 'pink-badge':
      default:
        return 'bg-[#FCE4EC] border border-[#E38FA9] text-[#9F3D5C] font-mono-tech text-[11px] font-bold px-3 py-1 rounded-full shadow-xs';
    }
  };

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.08, rotate: rotate + (rotate >= 0 ? 3 : -3) } : {}}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 select-none transition-transform duration-200 ${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Preset Decorative Icons
export const PinkFlower: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 16 }) => (
  <span className={`inline-block text-[#C85B7B] animate-spin-slow ${className}`} style={{ fontSize: size }}>
    ✿
  </span>
);

export const PinkHeart: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 14 }) => (
  <span className={`inline-block text-[#9F3D5C] ${className}`} style={{ fontSize: size }}>
    ♡
  </span>
);

export const PinkStar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 14 }) => (
  <span className={`inline-block text-[#C85B7B] ${className}`} style={{ fontSize: size }}>
    ✦
  </span>
);

export const SparkleStar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 14 }) => (
  <span className={`inline-block text-[#E38FA9] ${className}`} style={{ fontSize: size }}>
    ★
  </span>
);
