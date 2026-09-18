import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, CheckCircle2, Trash2 } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  
  
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNo: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const totalNum = parseInt(cartTotal.replace(/[^0-9]/g, ''), 10);
      
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.fullName,
          email: user?.email || '',
          phone: formData.contactNo,
          address: `${formData.address}, ${formData.postalCode}`,
          items: cartItems,
          totalAmount: isNaN(totalNum) ? 0 : totalNum
        })
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      setOrderComplete(true);
      clearCart();
    } catch (err) {
      alert('Error placing order: ' + err);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your order has been done successfully.</p>
          <button 
            onClick={() => {
              setOrderComplete(false);
              
            }}
            className="px-6 py-2 bg-primary-500 text-white rounded font-medium hover:bg-primary-600"
          >
            <Link to="/category">Continue Shopping</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link to="/category" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6 flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img src={`http://localhost:5000${item.image}`} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Image</div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} className="font-bold text-gray-900 hover:text-primary-500 truncate block">
                        {item.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{item.fit}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-bold text-primary-500">{item.price} <span className="text-gray-500 text-sm font-normal">x {item.quantity}</span></span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checkout Summary & Customer Details */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600 font-medium">Total Amount</span>
                <span className="text-2xl font-bold text-primary-500">{cartTotal}</span>
              </div>
              
              {!user ? (
                <div className="text-center py-6 border-t border-gray-100">
                  <p className="text-gray-600 mb-4 text-sm">Please log in to enter your delivery details and place your order.</p>
                  <Link 
                    to="/login"
                    className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-lg transition-colors mb-2 text-center"
                  >
                    Login to Checkout
                  </Link>
                  <Link 
                    to="/signup"
                    className="block w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 rounded-lg border border-gray-200 transition-colors text-center text-sm"
                  >
                    Create an Account
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <h3 className="font-bold text-gray-900 mb-2">Delivery Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500 text-sm" 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact No.</label>
                    <input 
                      type="tel" 
                      name="contactNo"
                      required 
                      value={formData.contactNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500 text-sm" 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea 
                      name="address"
                      required 
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500 text-sm" 
                      rows={2}
                      placeholder="Enter your full address" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                    <input 
                      type="text" 
                      name="postalCode"
                      required 
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500 text-sm" 
                      placeholder="Enter postal code" 
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 mt-4 rounded-lg transition-colors"
                  >
                    Confirm Order
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
