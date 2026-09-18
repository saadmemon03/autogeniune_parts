import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const VehicleProductsPage: React.FC = () => {
  const { make, model } = useParams<{ make: string; model: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        const decodedMake = make ? decodeURIComponent(make) : '';
        const decodedModel = model ? decodeURIComponent(model) : '';
        
        // Filter products by make and model
        const filtered = data.products.filter((p: any) => {
          const fitText = p.fit?.toLowerCase() || '';
          const matchMake = decodedMake ? fitText.includes(decodedMake.toLowerCase()) : true;
          const matchModel = decodedModel ? fitText.includes(decodedModel.toLowerCase()) : true;
          return matchMake && matchModel;
        });

        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [make, model]);

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      <div className="bg-neutral-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary-500 font-bold text-[10px] tracking-widest uppercase mb-2 block">
            Compatible Parts
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            {make} {model} Products
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {loading ? (
          <p className="text-center text-gray-500 py-20">Loading compatible products...</p>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found for {make} {model}.</p>
            <Link to="/shop-by-vehicle" className="text-primary-500 font-bold hover:underline mt-4 inline-block">
              Go back to Shop By Vehicle
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link 
                key={product._id} 
                to={`/product/${product._id}`} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow block"
              >
                <div className="h-48 bg-gray-200">
                  {product.image_url ? (
                    <img src={`http://localhost:5000${product.image_url}`} alt={product.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {product.type}
                    </span>
                    <span className="text-xs font-medium text-primary-500">{product.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.fit}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-gray-900">₦{product.price?.toLocaleString()}</span>
                    <span className="px-3 py-1.5 bg-primary-500 text-white text-xs font-medium rounded hover:bg-primary-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
