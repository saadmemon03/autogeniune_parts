import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';

const vehicleMakes = [
  {
    name: 'Toyota',
    models: [
      { name: 'Camry', years: '2007 - 2024' },
      { name: 'Corolla', years: '2009 - 2024' },
      { name: 'Hilux', years: '2011 - 2024' },
      { name: 'RAV4', years: '2013 - 2024' },
      { name: 'Highlander', years: '2014 - 2024' },
      { name: 'Prado', years: '2010 - 2024' }
    ]
  },
  {
    name: 'Honda',
    models: [
      { name: 'Accord', years: '2008 - 2024' },
      { name: 'Civic', years: '2012 - 2024' },
      { name: 'CR-V', years: '2015 - 2024' }
    ]
  },
  {
    name: 'Lexus',
    models: [
      { name: 'RX350', years: '2010 - 2024' },
      { name: 'ES350', years: '2013 - 2024' },
      { name: 'LX570', years: '2015 - 2024' }
    ]
  },
  {
    name: 'Nissan',
    models: [
      { name: 'Altima', years: '2013 - 2024' },
      { name: 'Patrol', years: '2010 - 2024' }
    ]
  }
];

export const ShopByVehiclePage: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm('');
    }
    window.scrollTo(0, 0);
  }, [location.search]);

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-neutral-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary-500 font-bold text-[10px] tracking-widest uppercase mb-2 block">Select Your Ride</span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Shop By Vehicle</h1>
          
          <div className="max-w-2xl mx-auto relative mt-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by make or model (e.g. Camry)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-sm focus:ring-2 focus:ring-primary-500 outline-none text-neutral-900"
            />
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="space-y-16">
          {vehicleMakes.map((make) => {
            const filteredModels = make.models.filter(m => 
              m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              make.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredModels.length === 0) return null;

            return (
              <div key={make.name}>
                <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight mb-6 border-b border-neutral-200 pb-4">
                  {make.name}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredModels.map((model) => (
                    <Link 
                      key={model.name}
                      to="/category"
                      className="bg-white p-6 border border-neutral-100 shadow-sm hover:border-primary-300 hover:shadow-md transition-all group rounded-sm flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">{make.name}</span>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{model.name}</h3>
                        <p className="text-xs text-neutral-500 bg-neutral-50 inline-block px-2 py-1 rounded">{model.years}</p>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest group-hover:text-primary-600">
                          Shop Parts
                        </span>
                        <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                          <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-500" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {vehicleMakes.every(make => !make.models.some(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || make.name.toLowerCase().includes(searchTerm.toLowerCase()))) && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No vehicles found matching "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};
