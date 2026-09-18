import React from 'react';
import { Search, CheckCircle, Lock, Box, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { StepCard } from '../ui/stepCard';
import { howItWorksSteps } from '../../data/stepData';
import type { StepIconKey } from '../../types/step';

const STEP_ICON_MAP: Record<StepIconKey, LucideIcon> = {
  Search,
  CheckCircle,
  Lock,
  Box,
};

export const HowItWorksSection: React.FC = () => (
  <section className="w-full bg-neutral-0 py-20 border-b border-neutral-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1 mb-16 text-center lg:text-left">
        <span className="text-primary font-bold text-[10px] tracking-widest uppercase">How It Works</span>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight">
          From Part Search
          <br />
          To Your Driveway
        </h2>
        <p className="text-neutral-500 max-w-xl mt-2 text-sm md:text-base mx-auto lg:mx-0">
          Four steps between you and the exact part your car needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {howItWorksSteps.map((step, idx) => {
          const Icon = step.icon ? STEP_ICON_MAP[step.icon] : null;
          return (
            <StepCard
              key={idx}
              num={step.num}
              title={step.title}
              desc={step.desc}
              variant="icon"
              icon={Icon ? <Icon className="h-5 w-5" /> : null}
            />
          );
        })}

        {/* Arrows for Desktop */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[24%] text-primary-hover">
          <ArrowRight className="h-6 w-6" />
        </div>
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[49%] text-primary-hover">
          <ArrowRight className="h-6 w-6" />
        </div>
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[74%] text-primary-hover">
          <ArrowRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  </section>
);