import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans pb-20">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a question about a part fitment? Need help with an order? Our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                  placeholder="Order Inquiry / Part Question"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-primary-500 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:bg-primary-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-6">Direct Support</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Prefer to talk to a human? Reach out directly via our support channels below. Our support hours are Monday to Saturday, 8:00 AM to 6:00 PM (WAT).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-neutral-200 rounded-sm shadow-sm flex flex-col items-center text-center gap-3">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Call Us</h3>
                <p className="text-sm text-neutral-600">+234 800 AUTOGEN</p>
              </div>

              <div className="bg-white p-6 border border-neutral-200 rounded-sm shadow-sm flex flex-col items-center text-center gap-3">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">WhatsApp</h3>
                <p className="text-sm text-neutral-600">+234 812 345 6789</p>
              </div>

              <div className="bg-white p-6 border border-neutral-200 rounded-sm shadow-sm flex flex-col items-center text-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Email</h3>
                <p className="text-sm text-neutral-600">support@autogenuine.ng</p>
              </div>

              <div className="bg-white p-6 border border-neutral-200 rounded-sm shadow-sm flex flex-col items-center text-center gap-3">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Office</h3>
                <p className="text-sm text-neutral-600">123 Auto Market Hub,<br/>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
