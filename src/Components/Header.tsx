import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Truck, RotateCcw, MessageCircle, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="w-full flex flex-col">
      {/* Top Notification Bar */}
      <div className="bg-[#1a1412] text-gray-300 text-xs font-medium py-2 px-4 sm:px-8 lg:px-08 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-primary-500" />
            <span>Same-Day Delivery in Lagos • Nationwide Shipping</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <RotateCcw className="h-4 w-4 text-primary-500" />
            <span>30-Day Return Policy</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-white" />
          <span>WhatsApp: +234 812 345 6789</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-[#16110d] w-10 h-10 flex items-center justify-center rounded-sm">
                <CarLogoIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl tracking-wide text-gray-900 uppercase">AUTOGENUINE</span>
                <span className="text-[10px] text-primary-500 font-bold tracking-widest mt-0.5">NG • GENUINE PARTS</span>
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl w-full flex">
            <form onSubmit={handleSearch} className="flex w-full border-2 border-[#16110d] rounded-sm overflow-hidden focus-within:border-orange-500 transition-colors">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 focus:outline-none text-sm font-medium placeholder:text-gray-400 text-gray-900"
              />
              <button type="submit" className="bg-[#16110d] text-white px-4 md:px-8 py-2.5 font-bold text-sm flex items-center gap-2 hover:bg-black transition-colors border-l-2 border-[#16110d]">
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">SEARCH</span>
              </button>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            {user ? (
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-2 text-gray-900 hover:text-primary-500 font-bold transition-colors py-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">{user.name.split(' ')[0]}</span>
                </div>
                <div className="absolute right-0 top-[100%] mt-0 w-32 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                  <button onClick={logout} className="block w-full text-left px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:text-primary-500">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 text-gray-900 hover:text-primary-500 font-bold transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Link>
            )}
            <Link to="/cart" className="flex items-center gap-2 text-gray-900 hover:text-primary-500 font-bold transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 md:-right-3 bg-orange-500 text-[#16110d] text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-[#fdf8f4] py-3.5 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-x-auto lg:overflow-visible">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-black text-gray-900 tracking-wide min-w-max">
          <nav className="flex items-center gap-6 md:gap-8">
            <Link to="/" className="hover:text-primary-500 transition-colors">HOME</Link>
            
            {/* Vehicle Dropdown */}
            <div className="relative group">
              <Link to="/shop-by-vehicle" className="flex items-center gap-1 cursor-pointer hover:text-primary-500 transition-colors py-2">
                SHOP BY VEHICLE <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-[100%] mt-0 w-48 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                <Link to="/shop-by-vehicle" className="block px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:text-primary-500 border-b border-gray-100">
                  All Vehicles
                </Link>
                {['Toyota', 'Honda', 'Lexus', 'Nissan'].map((make) => (
                  <Link 
                    key={make} 
                    to={`/shop-by-vehicle?search=${make}`} 
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-500"
                  >
                    {make}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/track-order" className="hover:text-primary-500 transition-colors">TRACK MY ORDER</Link>
            <Link to="/detailed-return-policy" className="hover:text-primary-500 transition-colors">RETURNS POLICY</Link>
            
            {/* Category Dropdown */}
            <div className="relative group">
              <Link to="/category" className="flex items-center gap-1 cursor-pointer hover:text-primary-500 transition-colors py-2">
                SHOP BY CATEGORY <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-[100%] mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                <Link to="/category" className="block px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:text-primary-500 border-b border-gray-100">
                  All Products
                </Link>
                {['Brakes', 'Engine', 'Suspension & Steering', 'Body & Exterior', 'Electrical', 'Filters'].map((cat) => (
                  <Link 
                    key={cat} 
                    to={`/category/${encodeURIComponent(cat)}`} 
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-500"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-2 hover:text-primary-500 transition-colors cursor-pointer ml-8">
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>CONTACT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// Simple placeholder car icon matching the logo roughly
const CarLogoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);
