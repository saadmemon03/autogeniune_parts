import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface DropdownProps {
  label: string;
  icon: LucideIcon;
  value: string;
  placeholder: string;
  options: string[];
  disabled?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  icon: Icon,
  value,
  placeholder,
  options,
  disabled = false,
  isOpen,
  onToggle,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">{label}</label>

      <div
        onClick={() => !disabled && onToggle()}
        className={`border border-neutral-300 rounded-sm p-3 flex items-center justify-between text-sm transition-colors ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-primary'
        }`}
      >
        <div className="flex items-center gap-3 text-neutral-900">
          <Icon className="h-4 w-4 text-primary" />
          <span className="font-bold">{value || placeholder}</span>
        </div>
        <span className="text-neutral-400 text-xs">▼</span>
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-[100%] left-0 w-full bg-neutral-0 border border-neutral-200 shadow-lg mt-1 z-50 rounded-sm max-h-48 overflow-y-auto">
          {options.length === 0 ? (
            <div className="p-3 text-sm text-neutral-400">No options available</div>
          ) : (
            options.map((opt) => (
              <div
                key={opt}
                onClick={() => onSelect(opt)}
                className="p-3 text-sm font-bold hover:bg-primary-50 cursor-pointer border-b border-neutral-50 last:border-0"
              >
                {opt}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};