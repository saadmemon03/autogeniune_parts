import React from 'react';

interface IconTileProps {
  icon: React.ReactNode;
  /** 'brand' = filled orange tile (default), 'dark' = filled dark tile with brand-colored icon */
  bg?: 'brand' | 'dark';
  /** 'sm' = 32px, 'md' = 40px (default — category grid, how-it-works), 'lg' = 48px (checkout/delivery) */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<IconTileProps['size']>, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export const IconTile: React.FC<IconTileProps> = ({ icon, bg = 'brand', size = 'md', className = '' }) => {
  const sizeClass = SIZE_CLASSES[size];
  const bgClass = bg === 'brand' ? 'bg-primary text-black' : 'bg-neutral-900 text-primary';

  return (
    <div className={`flex items-center justify-center shrink-0 ${sizeClass} ${bgClass} ${className}`}>
      {icon}
    </div>
  );
};