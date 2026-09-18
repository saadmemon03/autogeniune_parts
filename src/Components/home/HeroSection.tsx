// // import React from 'react';
// // import { CheckCircle, ArrowRight, ScanLine } from 'lucide-react';
// // import { VehicleFitmentForm } from './VehicleFitmentForm';

// // export const HeroSection: React.FC = () => (
// //   <section className="relative w-full bg-neutral-900 min-h-[600px] overflow-hidden">
// //     {/* Background decorative orange slash */}
// //     <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none ">
// //       <div className="absolute left-[20%] top-[-50%] w-[120px] h-[200%] bg-brand transform rotate-[15deg] origin-center z-0 bg-primary"></div>
// //     </div>

// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
// //       {/* Left Column - Content */}
// //       <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl">
// //         <div className="border border-brand/50 text-primary px-3 py-1.5 flex items-center gap-2 text-xs font-bold tracking-wider rounded-sm">
// //           <CheckCircle className="h-4 w-4" />
// //           100% GENUINE & OEM CERTIFIED
// //         </div>

// //         <h1 className="text-5xl md:text-6xl font-black text-neutral-0 leading-[1.1] tracking-tight">
// //           THE RIGHT PART.
// //           <br />
// //           <span className="text-primary">VERIFIED</span> FOR YOUR
// //           <br />
// //           CAR.
// //           <br />
// //           DELIVERED{' '}
// //           <span className="text-primary">
// //             SAME-
// //             <br />
// //             DAY
// //           </span>{' '}
// //           IN LAGOS.
// //         </h1>

// //         <p className="text-neutral-0 text-lg md:text-xl max-w-lg leading-relaxed mt-2">
// //           Search by VIN, vehicle, or part number. Every listing is checked against your car's exact fitment before
// //           you pay — so it fits the first time.
// //         </p>

// //         <div className="flex flex-wrap gap-4 mt-4 w-full">
// //           <button className="bg-primary text-neutral-50 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-brand-hover transition-colors">
// //             SHOP BY VEHICLE <ArrowRight className="h-5 w-5" />
// //           </button>
// //           <button className="border border-neutral-0 text-neutral-0 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-neutral-900 transition-colors">
// //             <ScanLine className="h-5 w-5" /> CHECK BY VIN
// //           </button>
// //         </div>

// //         <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
// //           <div className="flex flex-col">
// //             <span className="text-primary text-3xl font-black tracking-tight">4,200+</span>
// //             <span className="text-neutral-0 text-[10px] font-bold tracking-widest uppercase mt-1">Genuine Parts</span>
// //           </div>
// //           <div className="flex flex-col">
// //             <span className="text-primary text-3xl font-black tracking-tight">Same-Day</span>
// //             <span className="text-neutral-0 text-[10px] font-bold tracking-widest uppercase mt-1">Lagos Delivery</span>
// //           </div>
// //           <div className="flex flex-col">
// //             <span className="text-primary text-3xl font-black tracking-tight">30-Day</span>
// //             <span className="text-neutral-0 text-[10px] font-bold tracking-widest uppercase mt-1">Returns</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Column - Form */}
// //       <div className="w-full max-w-[420px] relative mt-10 lg:mt-0">
// //         <VehicleFitmentForm />

// //         {/* Trusted By Badge */}
// //         <div className="absolute -bottom-15 left-0 bg-dark text-neutral-0 p-4 font-bold flex flex-col gap-1 border bg-neutral-900 z-20">
// //           <span className="text-[10px] text-primary tracking-widest uppercase">Trusted By</span>
// //           <div className="flex items-center gap-2">
// //             <span className="text-primary tracking-tighter text-sm">★★★★★</span>
// //             <span className="text-neutral-0">2,400+ drivers</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// import React from 'react';
// import { CheckCircle, ArrowRight, ScanLine } from 'lucide-react';
// import { VehicleFitmentForm } from './VehicleFitmentForm';

// export const HeroSection: React.FC = () => (
//   <section className="relative w-full bg-neutral-900 min-h-[600px] overflow-hidden">
//     {/* Background decorative orange slash */}
//     <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none">
//       <div className="absolute left-[20%] top-[-50%] w-[120px] h-[200%] bg-primary transform rotate-[15deg] origin-center z-0"></div>
//     </div>

//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
//       {/* Left Column - Content */}
//       <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl">
//         <div className="border border-primary/50 text-primary px-3 py-1.5 flex items-center gap-2 text-xs font-bold tracking-wider rounded-sm">
//           <CheckCircle className="h-4 w-4" />
//           100% GENUINE & OEM CERTIFIED
//         </div>

//         <h1 className="text-5xl md:text-6xl font-black text-neutral-0 leading-[1.1] tracking-tight">
//           THE RIGHT PART.
//           <br />
//           <span className="text-primary">VERIFIED</span> FOR YOUR
//           <br />
//           CAR.
//           <br />
//           DELIVERED{' '}
//           <span className="text-primary">
//             SAME-
//             <br />
//             DAY
//           </span>{' '}
//           IN LAGOS.
//         </h1>

//         {/* Subtext = muted gray on dark bg, NOT pure white */}
//         <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed mt-2">
//           Search by VIN, vehicle, or part number. Every listing is checked against your car's exact fitment before
//           you pay — so it fits the first time.
//         </p>

//         <div className="flex flex-wrap gap-4 mt-4 w-full">
//           {/* Dark text on the orange button for contrast, matching the design's header/badge pattern */}
//           <button className="bg-primary text-neutral-900 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-primary-hover transition-colors">
//             SHOP BY VEHICLE <ArrowRight className="h-5 w-5" />
//           </button>
//           <button className="border border-neutral-0 text-neutral-0 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-neutral-0/10 transition-colors">
//             <ScanLine className="h-5 w-5" /> CHECK BY VIN
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
//           <div className="flex flex-col">
//             <span className="text-primary text-3xl font-black tracking-tight">4,200+</span>
//             <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Genuine Parts</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-primary text-3xl font-black tracking-tight">Same-Day</span>
//             <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Lagos Delivery</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-primary text-3xl font-black tracking-tight">30-Day</span>
//             <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Returns</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Column - Form */}
//       <div className="w-full max-w-[420px] relative mt-10 lg:mt-0">
//         <VehicleFitmentForm />

//         {/* Trusted By Badge */}
//         <div className="absolute -bottom-15 left-0 bg-neutral-900 text-neutral-0 p-4 font-bold flex flex-col gap-1 border border-neutral-800 z-20">
//           <span className="text-[10px] text-primary tracking-widest uppercase">Trusted By</span>
//           <div className="flex items-center gap-2">
//             <span className="text-primary tracking-tighter text-sm">★★★★★</span>
//             <span className="text-neutral-0 text-xs">2,400+ drivers</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
import React from 'react';
import { CheckCircle, ArrowRight, ScanLine } from 'lucide-react';
import { VehicleFitmentForm } from './VehicleFitmentForm';

export const HeroSection: React.FC = () => (
  <section className="relative w-full bg-neutral-900 min-h-[600px] overflow-hidden">
    {/* Background decorative orange slash */}
    <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none">
      <div className="absolute left-[20%] top-[-50%] w-[120px] h-[200%] bg-primary transform rotate-[15deg] origin-center z-0"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Column - Content */}
      <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl">
        <div className="border border-primary/50 text-primary px-3 py-1.5 flex items-center gap-2 text-xs font-bold tracking-wider rounded-sm">
          <CheckCircle className="h-4 w-4" />
          100% GENUINE & OEM CERTIFIED
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-neutral-0 leading-[1.1] tracking-tight">
          THE RIGHT PART.
          <br />
          <span className="text-primary">VERIFIED</span> FOR YOUR
          <br />
          CAR.
          <br />
          DELIVERED{' '}
          <span className="text-primary">
            SAME-
            <br />
            DAY
          </span>{' '}
          IN LAGOS.
        </h1>

        {/* Subtext = muted gray on dark bg, NOT pure white */}
        <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed mt-2">
          Search by VIN, vehicle, or part number. Every listing is checked against your car's exact fitment before
          you pay — so it fits the first time.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 w-full">
          {/* Dark text on the orange button for contrast, matching the design's header/badge pattern */}
          <button className="bg-primary text-neutral-900 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-primary-hover transition-colors">
            SHOP BY VEHICLE <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border border-neutral-0 text-neutral-0 px-6 py-3.5 font-bold flex items-center gap-2 hover:bg-neutral-0/10 transition-colors">
            <ScanLine className="h-5 w-5" /> CHECK BY VIN
          </button>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
          <div className="flex flex-col">
            <span className="text-primary text-3xl font-black tracking-tight">4,200+</span>
            <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Genuine Parts</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary text-3xl font-black tracking-tight">Same-Day</span>
            <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Lagos Delivery</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary text-3xl font-black tracking-tight">30-Day</span>
            <span className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase mt-1">Returns</span>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full max-w-[420px] relative mt-10 lg:mt-0">
        <VehicleFitmentForm />

        {/* Trusted By Badge */}
        <div className="mt-4 bg-neutral-900 text-neutral-0 p-4 font-bold flex flex-col gap-1 border border-neutral-800 z-20 w-max shadow-sm">
          <span className="text-[10px] text-primary tracking-widest uppercase">Trusted By</span>
          <div className="flex items-center gap-2">
            <span className="text-primary tracking-tighter text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-neutral-0 text-xs">2,400+ drivers</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);