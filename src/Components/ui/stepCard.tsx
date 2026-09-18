import React from 'react';
import { IconTile } from './IconTile';

interface StepCardProps {
  num: string;
  title: string;
  desc: string;
  variant: 'icon' | 'number';
  icon?: React.ReactNode;
}

export const StepCard: React.FC<StepCardProps> = ({ num, title, desc, variant, icon }) => {
  if (variant === 'icon') {
    return (
      <div className="bg-cream p-8 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-4 right-4 text-primary-200 font-black text-6xl opacity-50 select-none group-hover:scale-110 transition-transform">
          {num}
        </div>
        <div className="mb-8 relative z-10">
          <IconTile bg="dark" icon={icon} />
        </div>
        <h3 className="text-lg font-bold text-neutral-900 mb-2 relative z-10">{title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{desc}</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-0 p-8 border border-neutral-100 flex flex-col hover:shadow-md transition-shadow">
      <span className="text-primary font-black text-3xl mb-4">{num}</span>
      <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-2">{title}</h3>
      <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
};