import React, { useState } from 'react';
import { Package, Truck, CheckCircle, MapPin, Clock, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const MOCK_ACTIVE_ORDERS = [
  { id: 'AG-123456', date: 'Oct 24, 2024', total: '₦37,000', status: 'Out for Delivery', items: 2 }
];

const MOCK_PAST_ORDERS = [
  { id: 'AG-098765', date: 'Sep 15, 2024', total: '₦18,500', status: 'Delivered', items: 1 },
  { id: 'AG-084321', date: 'Aug 02, 2024', total: '₦45,000', status: 'Delivered', items: 3 }
];

export const TrackOrderPage: React.FC = () => {
  const { user } = useAuth();
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found'>('idle');
  const [activeTrackingId, setActiveTrackingId] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId && email) {
      setStatus('loading');
      setTimeout(() => setStatus('found'), 1000);
    }
  };

  const simulateTrackFromHistory = (id: string) => {
    setActiveTrackingId(id);
    setOrderId(id);
    setStatus('loading');
    setTimeout(() => setStatus('found'), 800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTimeline = () => (
    <div className="mt-8 pt-8 border-t border-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Order Status</p>
          <p className="text-xl font-black text-neutral-900 uppercase mt-1">
            {activeTrackingId?.includes('098') ? 'Delivered' : 'Out for Delivery'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Expected</p>
          <p className="text-lg font-bold text-primary-500 mt-1">
            {activeTrackingId?.includes('098') ? 'Completed' : 'Today'}
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-neutral-200 ml-3 space-y-8">
        <div className="relative pl-8">
          <div className="absolute -left-[11px] top-0 bg-primary-500 rounded-full p-1 text-white">
            <CheckCircle className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-neutral-900">Order Confirmed</h3>
          <p className="text-sm text-neutral-500">Your order has been received.</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute -left-[11px] top-0 bg-primary-500 rounded-full p-1 text-white">
            <Package className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-neutral-900">Processing</h3>
          <p className="text-sm text-neutral-500">Parts are being packed in our warehouse.</p>
        </div>

        <div className={`relative pl-8 ${activeTrackingId?.includes('098') ? '' : ''}`}>
          <div className={`absolute -left-[11px] top-0 rounded-full p-1 text-white ${activeTrackingId?.includes('098') ? 'bg-primary-500' : 'bg-primary-500 animate-pulse'}`}>
            <Truck className="w-4 h-4" />
          </div>
          <h3 className={`font-bold ${activeTrackingId?.includes('098') ? 'text-neutral-900' : 'text-primary-500'}`}>Out for Delivery</h3>
          <p className="text-sm text-neutral-500">Rider is on the way to your address.</p>
        </div>

        <div className={`relative pl-8 ${activeTrackingId?.includes('098') ? '' : 'opacity-40'}`}>
          <div className={`absolute -left-[11px] top-0 rounded-full p-1 text-white ${activeTrackingId?.includes('098') ? 'bg-primary-500' : 'bg-neutral-300'}`}>
            <MapPin className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-neutral-900">Delivered</h3>
          <p className="text-sm text-neutral-500">Pending delivery confirmation.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-neutral-50 min-h-[70vh] py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Main Tracking / Current Focus Area */}
        <div className="flex-1">
          <div className="mb-10">
            <span className="text-primary-500 font-bold text-[10px] tracking-widest uppercase mb-2 block">Order Tracking</span>
            <h1 className="text-4xl font-black text-neutral-900 uppercase tracking-tight">Track Your Order</h1>
            {!user && (
              <p className="text-neutral-500 mt-2 text-sm">
                Enter your order number and email below, or <Link to="/login" className="text-primary-500 font-bold hover:underline">log in</Link> to view your full history.
              </p>
            )}
          </div>

          <div className="bg-neutral-0 p-8 border border-neutral-200 shadow-sm mb-8">
            {(!user || status === 'idle' || !activeTrackingId) && (
              <form onSubmit={handleTrack} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">Order Number</label>
                  <input 
                    type="text" required value={orderId} onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g. AG-123456" 
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 uppercase tracking-widest text-sm transition-colors disabled:opacity-70 flex justify-center items-center">
                  {status === 'loading' ? 'Searching...' : 'Track Manual Order'}
                </button>
              </form>
            )}

            {(status === 'found' || status === 'loading') && activeTrackingId && (
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-neutral-900 uppercase">Tracking Details for {orderId}</h2>
                <button onClick={() => { setStatus('idle'); setActiveTrackingId(null); setOrderId(''); }} className="text-sm text-primary-500 font-bold hover:underline">Track Another</button>
              </div>
            )}

            {status === 'found' && renderTimeline()}
          </div>
        </div>

        {/* Sidebar: Order History (Only if logged in) */}
        {user && (
          <div className="w-full md:w-[320px] flex-shrink-0">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-tight border-b border-neutral-200 pb-2">Your Orders</h2>
            
            <div className="space-y-6">
              {/* Active Orders */}
              <div>
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Active Orders
                </h3>
                <div className="space-y-3">
                  {MOCK_ACTIVE_ORDERS.map(order => (
                    <div key={order.id} onClick={() => simulateTrackFromHistory(order.id)} className="bg-white p-4 border border-primary-200 rounded-sm cursor-pointer hover:border-primary-500 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-neutral-900">{order.id}</span>
                        <span className="text-[10px] bg-primary-100 text-primary-600 px-2 py-1 rounded font-bold uppercase">{order.status}</span>
                      </div>
                      <div className="text-sm text-neutral-500 mb-3">{order.date} • {order.items} items • {order.total}</div>
                      <div className="flex items-center text-xs font-bold text-primary-500 uppercase tracking-widest group-hover:text-primary-600">
                        Track Now <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past Orders */}
              <div>
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Past Orders
                </h3>
                <div className="space-y-3">
                  {MOCK_PAST_ORDERS.map(order => (
                    <div key={order.id} onClick={() => simulateTrackFromHistory(order.id)} className="bg-neutral-0 p-4 border border-neutral-200 rounded-sm cursor-pointer hover:border-neutral-300 hover:shadow-sm transition-all group opacity-80 hover:opacity-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-neutral-900">{order.id}</span>
                        <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded font-bold uppercase">{order.status}</span>
                      </div>
                      <div className="text-sm text-neutral-500 mb-3">{order.date} • {order.items} items • {order.total}</div>
                      <div className="flex items-center text-xs font-bold text-neutral-500 uppercase tracking-widest group-hover:text-neutral-900">
                        View Details <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
