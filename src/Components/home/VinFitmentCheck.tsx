import React from 'react';
import { CheckCircle, ScanLine } from 'lucide-react';
import { VinInput } from '../ui/VinInput';

export const VinFitmentCheck: React.FC = () => (
  <section className="relative w-full min-h-[500px] overflow-hidden flex items-center bg-neutral-900 lg:bg-transparent">
    {/* Desktop Background Split */}
    <div className="hidden lg:flex absolute inset-0">
      <div className="w-1/2 bg-neutral-900 h-full relative">
        <div className="hidden lg:block absolute top-0 -right-[150px] w-[300px] h-full bg-neutral-900 transform -skew-x-[14deg] z-10"></div>
      </div>
      <div className="w-1/2 bg-primary h-full relative z-0"></div>
    </div>

    <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row z-20">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:pr-12 px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center gap-2 text-primary text-[10px] font-bold tracking-widest uppercase mb-2">
          <ScanLine className="h-4 w-4" /> VIN Fitment Check
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-neutral-0 leading-[1.1] tracking-tight">
          NEVER BUY THE <br />
          <span className="text-primary">WRONG PART</span> AGAIN.
        </h2>
        <p className="text-neutral-400 mt-2 text-sm md:text-base leading-relaxed max-w-xl">
          Enter your 17-character VIN and we'll check compatibility against the official NHTSA database before you
          add to cart. No guessing. No returns for wrong fitment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-xl">
          <div className="flex items-center gap-2 text-neutral-300 text-xs">
            <CheckCircle className="h-4 w-4 text-primary" /> Instant OEM & aftermarket match
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs">
            <CheckCircle className="h-4 w-4 text-primary" /> Auto-fills Make / Model / Year
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs">
            <CheckCircle className="h-4 w-4 text-primary" /> Highlights compatible parts only
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs">
            <CheckCircle className="h-4 w-4 text-primary" /> Free — no account required
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end bg-primary lg:bg-transparent px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="bg-neutral-0 p-6 sm:p-10 w-full max-w-[440px] lg:ml-auto relative">
          <span className="text-primary text-[10px] font-black tracking-widest uppercase block mb-1">
            Check Compatibility
          </span>
          <h3 className="text-2xl font-black text-neutral-900 mb-8">Enter your VIN</h3>
          <VinInput variant="large" />
        </div>
      </div>
    </div>
  </section>
);