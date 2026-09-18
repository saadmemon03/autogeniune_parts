import React, { useState } from 'react';
import { ScanLine, Lock } from 'lucide-react';

interface VinInputProps {
  /** 'compact' = hero form styling, 'large' = VIN Fitment Check section styling */
  variant?: 'compact' | 'large';
  onSubmit?: (vin: string) => void;
}

export const VinInput: React.FC<VinInputProps> = ({ variant = 'compact', onSubmit }) => {
  const [vin, setVin] = useState('');
  const isLarge = variant === 'large';

  const handleSubmit = () => {
    if (vin.trim().length === 0) return;
    onSubmit?.(vin.trim());
  };

  return (
    <div className="flex flex-col gap-2">
      <label className={isLarge ? 'sr-only' : 'text-[10px] font-black text-neutral-600 tracking-widest uppercase'}>
        Enter VIN (17 Characters)
      </label>

      <div className="relative flex items-center border-2 border-dark rounded-sm overflow-hidden focus-within:border-primary transition-colors">
        <input
          type="text"
          value={vin}
          maxLength={17}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={isLarge ? 'e.g. 4T1BF1FK0HU123456' : '1HGBH41JXMN109186'}
          className={`w-full text-neutral-800 font-medium focus:outline-none placeholder:text-neutral-400 min-w-0 ${
            isLarge ? 'p-3 sm:p-4 text-sm sm:text-base' : 'p-3 text-base'
          }`}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className={`bg-primary text-neutral-900 flex items-center justify-center hover:bg-primary-hover border-l-2 border-dark transition-colors shrink-0 ${
            isLarge ? 'px-4 sm:px-8 py-3 sm:py-4 font-black text-[10px] sm:text-xs tracking-widest uppercase' : 'px-4 py-3'
          }`}
        >
          {isLarge ? 'CHECK' : <ScanLine className="h-5 w-5" />}
        </button>
      </div>

      <p className="text-neutral-400 text-[10px] flex items-center gap-2">
        {isLarge && <Lock className="h-3.5 w-3.5 shrink-0" />}
        {isLarge
          ? 'Your VIN is only used for fitment — never shared.'
          : "Powered by NHTSA · we auto-detect your car's specs."}
      </p>
    </div>
  );
};