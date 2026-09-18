import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StepCard } from '../ui/stepCard';
import { returnSteps } from '../../data/stepData';

export const ReturnsSection: React.FC = () => (
  <section className="w-full bg-cream py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      {/* Left Text */}
      <div className="w-full lg:w-5/12 flex flex-col gap-4">
        <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Our Promise</span>
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight leading-[1.1]">
          30-Day Returns.
          <br />
          No Awkward
          <br />
          Questions.
        </h2>
        <p className="text-neutral-500 mt-2 text-sm md:text-base leading-relaxed">
          If a part doesn't fit or isn't what you expected, request a return from your account within 30 days.
          Unused parts in original packaging qualify — full refund via Paystack.
        </p>
        <Link to="/detailed-return-policy" className="bg-neutral-900 text-neutral-0 px-6 py-4 font-bold text-[10px] tracking-widest uppercase hover:bg-black transition-colors flex items-center justify-between w-max gap-4 mt-4">
          Read the full policy <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Right Grid */}
      <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {returnSteps.map((step, idx) => (
          <StepCard key={idx} num={step.num} title={step.title} desc={step.desc} variant="number" />
        ))}
      </div>
    </div>
  </section>
);