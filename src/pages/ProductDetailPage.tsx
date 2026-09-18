import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        const found = data.products.find((p: any) => p._id === id);
        setProduct(found);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product._id,
        title: product.title,
        price: `₦${product.price.toLocaleString()}`,
        image: product.image_url,
        fit: product.fit,
        type: product.type || 'OEM',
        cat: product.category || ''
      };
      addToCart(cartItem, quantity);
      navigate('/cart');
    }
  };

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/category" className="text-primary-500 hover:text-primary-600 font-medium">Return to Shop</Link>
      </div>
    );
  }

  const totalPriceFormatted = `₦${(product.price * quantity).toLocaleString()}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/category" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-500 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 flex items-center justify-center p-8">
            {product.image_url ? (
              <img src={product.image_url.startsWith("http") ? product.image_url : `http://localhost:5000${product.image_url}`} alt={product.title} className="max-w-full max-h-100 object-contain drop-shadow-md rounded" />
            ) : (
              <div className="text-gray-400 font-medium text-lg">No Image Available</div>
            )}
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">{product.type || 'OEM'}</span>
              <span className="text-sm font-medium text-primary-500 uppercase">{product.category}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">{totalPriceFormatted}</p>
              {quantity > 1 && (
                <p className="text-sm text-gray-500 mt-1">(₦{product.price.toLocaleString()} each)</p>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description || 'Premium quality auto part guaranteed to meet OEM specs.'}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Fitment</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded border border-gray-100">{product.fit}</p>
            </div>

            {(product.quantity || product.demo_video_url) && (
              <div className="mb-8 flex flex-col gap-3">
                {product.quantity && (
                  <p className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-2 rounded border border-green-100 inline-block w-fit">
                    ✓ In Stock ({product.quantity} available)
                  </p>
                )}
                {product.demo_video_url && (
                  <a 
                    href={product.demo_video_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg border border-red-200 hover:bg-red-100 transition-colors w-fit"
                  >
                    ▶ Watch Influencer Demo
                  </a>
                )}
              </div>
            )}
            
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12 w-full sm:w-32 shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold">-</button>
                <div className="flex-1 h-full flex items-center justify-center font-bold text-gray-900 border-x border-gray-300">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold">+</button>
              </div>
              
              <button onClick={handleAddToCart} className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors h-12">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
