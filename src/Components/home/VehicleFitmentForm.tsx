import React, { useEffect, useRef, useState } from 'react';
import { Car, Wrench, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../ui/Dropdown';
import { VinInput } from '../ui/VinInput';
import { dummyVehicleData } from '../../data/vehicleData';

type DropdownKey = 'make' | 'model' | 'year';

export const VehicleFitmentForm: React.FC = () => {
  const [make, setMake] = useState<string>('Toyota');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close any open dropdown when clicking outside this form.
  // Scoped to this component (not the whole page) so this form can be
  // dropped anywhere without depending on a root-level click handler.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableMakes = Object.keys(dummyVehicleData);
  const availableModels = make ? Object.keys(dummyVehicleData[make]) : [];
  const availableYears = make && model ? dummyVehicleData[make][model] : [];

  const toggleDropdown = (key: DropdownKey) => setActiveDropdown((prev) => (prev === key ? null : key));

  const handleShowParts = () => {
    if (make && model) {
      const query = `${make} ${model} ${year}`.trim();
      navigate(`/category?search=${encodeURIComponent(query)}`);
    } else if (make) {
      navigate(`/category?search=${encodeURIComponent(make)}`);
    }
  };

  return (
    <div ref={containerRef} className="bg-neutral-0 shadow-2xl rounded-sm overflow-hidden flex flex-col">
      {/* Form Header */}
      <div className="bg-primary text-neutral-900 p-6">
        <div className="flex items-start gap-4">
          <Car className="h-6 w-6 mt-0.5" strokeWidth={2.5} />
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-widest uppercase mb-1">Guided Fitment</span>
            <h2 className="text-xl font-black">Find parts for your vehicle</h2>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 flex flex-col gap-5">
        <Dropdown
          label="Make"
          icon={Car}
          value={make}
          placeholder="Select make"
          options={availableMakes}
          isOpen={activeDropdown === 'make'}
          onToggle={() => toggleDropdown('make')}
          onSelect={(m) => {
            setMake(m);
            setModel('');
            setYear('');
            setActiveDropdown(null);
          }}
        />

        <Dropdown
          label="Model"
          icon={Wrench}
          value={model}
          placeholder="Select model"
          options={availableModels}
          disabled={!make}
          isOpen={activeDropdown === 'model'}
          onToggle={() => toggleDropdown('model')}
          onSelect={(m) => {
            setModel(m);
            setYear('');
            setActiveDropdown(null);
          }}
        />

        <Dropdown
          label="Year"
          icon={Clock}
          value={year}
          placeholder="Select year"
          options={availableYears}
          disabled={!make || !model}
          isOpen={activeDropdown === 'year'}
          onToggle={() => toggleDropdown('year')}
          onSelect={(y) => {
            setYear(y);
            setActiveDropdown(null);
          }}
        />

        <button
          type="button"
          onClick={handleShowParts}
          className="bg-neutral-900 text-neutral-0 w-full py-4 font-black text-xs tracking-wider uppercase mt-2 hover:bg-black transition-colors"
        >
          Show Compatible Parts
        </button>

        <div className="flex items-center my-2">
          <hr className="flex-1 border-neutral-200" />
          <span className="mx-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Or</span>
          <hr className="flex-1 border-neutral-200" />
        </div>

        <VinInput variant="compact" />
      </div>
    </div>
  );
};