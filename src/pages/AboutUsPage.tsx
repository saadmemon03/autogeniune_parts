import React from 'react';
import { ShieldCheck, Wrench, BadgeCheck } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans pb-20">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-bold text-xs tracking-widest uppercase mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Nigeria's Trusted Auto Parts Hub
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            We are dedicated to providing genuine, VIN-verified automotive parts with guaranteed fitment. No more guesswork, no more counterfeit parts.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight mb-6">
              Why AutoGenuine?
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Finding the right auto parts in Nigeria has always been a challenge. Counterfeit products and mismatched parts cost car owners time, money, and safety. That's why we created Autogenuine.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Our mission is simple: to connect drivers and mechanics with 100% authentic OEM and Aftermarket parts, using advanced VIN verification to ensure a perfect fit every single time.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-sm text-primary-600">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-1">100% Genuine Parts</h3>
                  <p className="text-sm text-neutral-500">We source directly from manufacturers and trusted global distributors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-sm text-primary-600">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-1">VIN Verified Fitment</h3>
                  <p className="text-sm text-neutral-500">Enter your chassis number, and we guarantee the part will fit your car perfectly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000" 
              alt="Mechanic working on car" 
              className="rounded-sm shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-sm border border-neutral-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-neutral-900 text-white p-3 rounded-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">Guarantee</p>
                  <p className="text-xl font-black text-neutral-900">30-DAY RETURNS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
