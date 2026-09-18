import React from 'react';
import { ShieldCheck, Lock, RotateCcw, Truck } from 'lucide-react';


interface TrustFeature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const features: TrustFeature[] = [
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: '100% GENUINE & OEM', subtitle: 'Every part certified' },
  { icon: <Lock className="h-6 w-6 text-primary" />, title: 'SECURE PAYSTACK CHECKOUT', subtitle: 'Card, transfer, USSD' },
  { icon: <RotateCcw className="h-6 w-6 text-primary" />, title: '30-DAY RETURNS', subtitle: 'Self-service, hassle-free' },
  { icon: <Truck className="h-6 w-6 text-primary" />, title: 'SAME-DAY LAGOS DELIVERY', subtitle: 'Nationwide shipping too' },
];

export const TrustBadges: React.FC = () => (
  <section className="bg-neutral-0 border-b border-neutral-200 w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
      {features.map((feature, idx) => (
        <div key={idx} className="flex-1 flex items-center gap-4 p-6 sm:p-8 hover:bg-neutral-50 transition-colors">
          <div className="bg-primary-50 p-3 rounded-md">{feature.icon}</div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-neutral-900 uppercase">{feature.title}</span>
            <span className="text-xs text-neutral-500">{feature.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
