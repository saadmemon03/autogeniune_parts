import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const PopularProducts: React.FC = () => {
  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setDbProducts(data.products.slice(0, 8))) // Show top 8
      .catch(err => console.error(err));
  }, []);

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product detail page if wrapped in Link
    addToCart({
      id: product._id,
      title: product.title,
      price: `₦${product.price.toLocaleString()}`,
      image: product.image_url,
      fit: product.fit,
      type: product.type || 'OEM',
      cat: product.category || ''
    }, 1);
    alert(`${product.title} added to cart!`);
  };

  return (
    <section className="w-full bg-cream py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div className="flex flex-col gap-1">
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Fast-Moving Stock</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight">
              Popular Right Now
            </h2>
            <p className="text-neutral-500 mt-2 text-sm md:text-base">
              Best-selling parts across our Toyota range — in stock and ready to ship today.
            </p>
          </div>
          <Link
            to="/category"
            className="text-neutral-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
          >
            Browse Catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dbProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/product/${product._id}`} className="block h-48 bg-gray-200">
                {product.image_url ? (
                  <img src={`http://localhost:5000${product.image_url}`} alt={product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
              </Link>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">{product.type}</span>
                  <span className="text-xs font-medium text-primary-500">{product.category}</span>
                </div>
                <Link to={`/product/${product._id}`} className="block font-bold text-gray-900 mb-1 hover:text-primary-500">{product.title}</Link>
                <p className="text-sm text-gray-500 mb-4">{product.fit}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-900">₦{product.price?.toLocaleString()}</span>
                  <button onClick={(e) => handleAddToCart(product, e)} className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
