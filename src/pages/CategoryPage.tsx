import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';


const categories = [
  'Brakes',
  'Engine',
  'Suspension & Steering',
  'Body & Exterior',
  'Electrical',
  'Filters'
];

const vehicleMakes = [
  { name: 'Toyota', models: ['Camry', 'Corolla', 'Hilux', 'RAV4', 'Highlander', 'Prado'] },
  { name: 'Honda', models: ['Accord', 'Civic', 'CR-V'] },
  { name: 'Lexus', models: ['RX350', 'ES350', 'LX570'] },
  { name: 'Nissan', models: ['Altima', 'Patrol'] }
];

export const CategoryPage: React.FC = () => {
  const { catName } = useParams<{ catName: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  const decodedCatName = catName ? decodeURIComponent(catName) : '';
  
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  
  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setDbProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = dbProducts.filter((p) => {
    const matchCategory = decodedCatName ? p.category?.toLowerCase() === decodedCatName.toLowerCase() : true;
    const matchSearch = searchQuery ? p.title?.toLowerCase().includes(searchQuery.toLowerCase()) || p.fit?.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    const matchMake = selectedMake ? p.fit?.toLowerCase().includes(selectedMake.toLowerCase()) : true;
    const matchModel = selectedModel ? p.fit?.toLowerCase().includes(selectedModel.toLowerCase()) : true;
    
    return matchCategory && matchSearch && matchMake && matchModel;
  });

  const availableModels = vehicleMakes.find(m => m.name === selectedMake)?.models || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
        
        {/* Categories Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/category" 
                className={`block py-2 px-3 rounded-md transition-colors ${!decodedCatName ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500'}`}
              >
                All Products
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    decodedCatName.toLowerCase() === category.toLowerCase()
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500'
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Vehicle Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filter by Vehicle</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Make</label>
              <select 
                value={selectedMake}
                onChange={(e) => {
                  setSelectedMake(e.target.value);
                  setSelectedModel(''); // Reset model when make changes
                }}
                className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-primary-500 focus:border-primary-500 text-gray-700 outline-none"
              >
                <option value="">All Makes</option>
                {vehicleMakes.map(make => (
                  <option key={make.name} value={make.name}>{make.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Model</label>
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedMake}
                className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-primary-500 focus:border-primary-500 text-gray-700 outline-none disabled:bg-gray-100 disabled:text-gray-400"
              >
                <option value="">All Models</option>
                {availableModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
            
            {(selectedMake || selectedModel) && (
              <button 
                onClick={() => { setSelectedMake(''); setSelectedModel(''); }}
                className="w-full py-2 text-sm text-primary-500 font-bold hover:text-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {searchQuery 
            ? `Search Results for "${searchQuery}"`
            : decodedCatName 
              ? `${decodedCatName} Products` 
              : 'All Products'}
        </h1>
        
        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
                    <span className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
