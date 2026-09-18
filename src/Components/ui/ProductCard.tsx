import React from 'react';
import { CheckCircle, Wrench, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => (
  <div className="bg-neutral-0 border border-neutral-200 flex flex-col group cursor-pointer hover:shadow-lg transition-all relative">
    <div className="h-64 bg-neutral-50 flex items-center justify-center relative p-4">
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div className="bg-neutral-900 text-neutral-0 text-[9px] font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1">
          <CheckCircle className="h-3 w-3 text-primary" /> {product.type}
        </div>
        <div className="bg-neutral-0 text-neutral-500 border border-neutral-200 text-[9px] font-bold uppercase tracking-widest px-2 py-1">
          {product.cat}
        </div>
      </div>
      <Wrench className="h-24 w-24 text-neutral-200 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
    </div>
    <div className="p-5 flex flex-col gap-1 border-t border-neutral-100 flex-1 justify-between">
      <div>
        <h3 className="font-bold text-neutral-900 text-sm line-clamp-2 leading-tight">{product.title}</h3>
        <p className="text-neutral-400 text-xs mt-1">{product.fit}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div className="flex flex-col">
          <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Price</span>
          <span className="text-xl font-black text-neutral-900">{product.price}</span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(product);
          }}
          className="bg-primary text-neutral-0 p-2 hover:bg-primary-active transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);