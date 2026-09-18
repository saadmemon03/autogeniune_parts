import React from 'react';
import { MessageCircle, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col font-sans">
      {/* WhatsApp CTA Bar */}
      <div className="bg-[#16110d] w-full py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-orange-500 w-14 h-14 shrink-0 rounded-sm flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-[#16110d]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-primary-500 text-[10px] font-black tracking-widest uppercase mb-1.5">Need a hand?</span>
              <h3 className="text-white text-xl font-black mb-1.5">NOT SURE WHICH PART FITS? CHAT WITH OUR TEAM ON WHATSAPP.</h3>
              <p className="text-gray-400 text-sm">Support only — orders are placed through the site for full protection.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/2348000000000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-orange-500 text-[#16110d] px-6 py-3 font-bold text-sm tracking-wide uppercase flex items-center gap-2 hover:bg-orange-400 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-[#16110d] w-10 h-10 flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl tracking-wide text-gray-900 uppercase">AUTOGENUINE</span>
                <span className="text-[10px] text-primary-500 font-bold tracking-widest mt-0.5">NG • GENUINE PARTS</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nigeria's genuine auto parts marketplace.<br/>
              VIN-verified fitment, secure Paystack<br/>
              checkout, delivered fast.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] tracking-widest font-bold text-gray-900 uppercase bg-[#fff9f5] w-max px-3 py-1.5 rounded-sm">
                <ShieldCheck className="h-4 w-4 text-primary-500" /> GENUINE & OEM
              </div>
              <div className="flex items-center gap-2 text-[10px] tracking-widest font-bold text-gray-900 uppercase bg-[#fff9f5] w-max px-3 py-1.5 rounded-sm">
                <Lock className="h-4 w-4 text-primary-500" /> SECURE CHECKOUT
              </div>
            </div>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary-500 text-[10px] font-bold tracking-widest uppercase">Customer Care</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold text-gray-800">
              <li><Link to="/track-order" className="hover:text-primary-500 transition-colors">Track My Order</Link></li>
              <li><Link to="/detailed-return-policy" className="hover:text-primary-500 transition-colors">30-Day Return Policy</Link></li>
              <li><Link to="#" className="hover:text-primary-500 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary-500 text-[10px] font-bold tracking-widest uppercase">Shop</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold text-gray-800">
              <li><Link to="/category" className="hover:text-primary-500 transition-colors">Shop by Vehicle</Link></li>
              <li><Link to="/category" className="hover:text-primary-500 transition-colors">All Categories</Link></li>
              <li><Link to="/category?search=Camry" className="hover:text-primary-500 transition-colors">Toyota Camry Parts</Link></li>
              <li><Link to="/category?search=Corolla" className="hover:text-primary-500 transition-colors">Toyota Corolla Parts</Link></li>
              <li><Link to="/category?search=Hilux" className="hover:text-primary-500 transition-colors">Toyota Hilux Parts</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary-500 text-[10px] font-bold tracking-widest uppercase">About</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold text-gray-800">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AutoGenuine NG. All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Paystack</span>
            <span>·</span>
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Verve</span>
            <span>·</span>
            <span>USSD</span>
            <span>·</span>
            <span>Bank Transfer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};