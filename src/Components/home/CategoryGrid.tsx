// import React from 'react';
// import { Disc, Settings, Wrench, Filter, Zap, PaintBucket, ArrowRight } from 'lucide-react';
// import type { LucideIcon } from 'lucide-react';
// import { IconTile } from '../ui/IconTile';
// import { categories } from '../../data/categoryData';
// import type{ CategoryIconKey } from '../../types/category';

// const CATEGORY_ICON_MAP: Record<CategoryIconKey, LucideIcon> = {
//   Disc,
//   Settings,
//   Wrench,
//   Filter,
//   Zap,
//   PaintBucket,
// };

// export const CategoryGrid: React.FC = () => (
//   <section className="w-full bg-w py-20 border-b border-neutral 0">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ">
//       <div className="flex flex-col gap-1 mb-10">
//         <span className="text-primary font-bold text-[10px] tracking-widest uppercase ">Shop Parts</span>
//         <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Browse by Category</h2>
//         <p className="text-gray-500 max-w-2xl mt-2 text-sm md:text-base">
//           Six core categories cover 95% of routine service and repair jobs. Every SKU is genuine or OEM-certified.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-neutral-50">
//         {categories.map((category, idx) => {
//           const Icon = CATEGORY_ICON_MAP[category.icon];
//           return (
//             <div
//               key={idx}
//               className="bg-surface-cream border border-brand-100/50 hover:border-brand-200 hover:shadow-sm transition-all p-6 flex flex-col gap-12 cursor-pointer rounded-sm group"
//             >
//               <IconTile icon={<Icon className="h-5 w-5" />} bg="brand" />
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold text-sm text-gray-900 leading-tight">{category.title}</h3>
//                 <span className="text-primary text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
//                   Shop <ArrowRight className="h-3 w-3" />
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </section>
// );
import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, Settings, Wrench, Filter, Zap, PaintBucket, ArrowRight, } from 'lucide-react';
import type {LucideIcon } from 'lucide-react';
import { IconTile } from '../ui/IconTile';
import { categories } from '../../data/categoryData';
import type { CategoryIconKey } from '../../types/category';

const CATEGORY_ICON_MAP: Record<CategoryIconKey, LucideIcon> = {
  Disc,
  Settings,
  Wrench,
  Filter,
  Zap,
  PaintBucket,
};

export const CategoryGrid: React.FC = () => (
  <section className="w-full bg-neutral-0 py-20 border-b border-neutral-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="flex flex-col gap-1 mb-10">
        <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Shop Parts</span>
        <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight">Browse by Category</h2>
        <p className="text-neutral-500 max-w-2xl mt-2 text-sm md:text-base">
          Six core categories cover 95% of routine service and repair jobs. Every SKU is genuine or OEM-certified.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, idx) => {
          const Icon = CATEGORY_ICON_MAP[category.icon];
          return (
            <Link
              key={idx}
              to={`/category/${encodeURIComponent(category.title)}`}
              className="bg-cream border border-primary-100/50 hover:border-primary-200 hover:shadow-sm transition-all p-6 flex flex-col gap-12 cursor-pointer rounded-sm group block"
            >
              <IconTile icon={<Icon className="h-5 w-5" />} bg="brand" />
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-sm text-neutral-900 leading-tight">{category.title}</h3>
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);