import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight } from 'lucide-react';
import type { FeaturedVehicle } from '../../types/vehicle';

interface VehicleCardProps {
  vehicle: FeaturedVehicle;
  /** Displayed as the small uppercase eyebrow above the model name, e.g. "Toyota" */
  make?: string;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, make = 'Toyota' }) => (
  <Link to={`/category?search=${encodeURIComponent(vehicle.model)}`} className="bg-neutral-0 border border-neutral-200 flex flex-col group cursor-pointer hover:shadow-lg transition-all block">
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 h-56 relative flex items-center justify-center p-4">
      <div className="absolute top-4 left-4 bg-primary text-neutral-900 font-black text-[10px] px-2 py-1">
        #{vehicle.id}
      </div>
      <div className="absolute bottom-4 right-4 bg-neutral-0 text-neutral-900 font-black text-[10px] px-2 py-1">
        {vehicle.parts} PARTS
      </div>
      <Car className="h-20 w-20 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
    </div>
    <div className="p-6 flex flex-col gap-1">
      <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{make}</span>
      <h3 className="text-2xl font-black text-neutral-900">{vehicle.model}</h3>
      <span className="text-neutral-400 text-sm">{vehicle.years}</span>
      <div className="h-px bg-neutral-100 w-full my-4"></div>
      <div className="flex justify-between items-center text-[10px] font-bold text-neutral-900 uppercase tracking-widest">
        <span>Shop Parts</span>
        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);