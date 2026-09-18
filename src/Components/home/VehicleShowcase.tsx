import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VehicleCard } from '../ui/Vehiclecard';
import { featuredVehicles } from '../../data/vehicleShowCaseData';

export const VehicleShowcase: React.FC = () => (
  <section className="w-full bg-cream py-20 border-b border-neutral-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div className="flex flex-col gap-1 max-w-xl">
          <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Shop By Vehicle</span>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight leading-[1.1]">
            Genuine Parts
            <br />
            For Your Toyota
          </h2>
          <p className="text-neutral-500 mt-3 text-sm md:text-base">
            We currently stock verified parts for three of Nigeria's most-driven Toyotas — with more models coming
            soon.
          </p>
        </div>
        <Link
          to="/shop-by-vehicle"
          className="text-neutral-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-primary-500 transition-colors"
        >
          View All Vehicles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} make="Toyota" />
        ))}
      </div>
    </div>
  </section>
);