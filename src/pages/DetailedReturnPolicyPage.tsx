import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const DetailedReturnPolicyPage: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-neutral-500 hover:text-primary-500 mb-8 transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 uppercase tracking-tight">Detailed Return Policy</h1>
        
        <div className="bg-neutral-0 p-8 md:p-12 border border-neutral-200 text-neutral-600 leading-relaxed shadow-sm">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">1. 30-Day Return Window</h3>
          <p className="mb-8">
            At Autogenuine, we stand by the quality of our parts. If you are not completely satisfied with your purchase, you may request a return within 30 days from the delivery date. No awkward questions asked!
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">2. Eligibility for Returns</h3>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>The item must be in its original, unused condition.</li>
            <li>It must be returned in the original packaging, including all manuals, accessories, and warranty cards.</li>
            <li>Parts that have been installed, modified, or damaged during installation will not be accepted for return.</li>
          </ul>

          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">3. How to Initiate a Return</h3>
          <p className="mb-8">
            To start a return, simply log in to your account, go to your order history, and select "Request Return". Alternatively, you can reach out to us directly via email. We will guide you through the process and provide a return shipping label.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">4. Refund Process</h3>
          <p className="mb-8">
            Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. If approved, a full refund will be processed and automatically applied to your original method of payment (e.g., Paystack) within 5-7 business days.
          </p>

          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">5. Damaged or Defective Parts</h3>
          <p className="mb-8">
            If you receive a defective or damaged part, please contact us within 48 hours of delivery. We will arrange a free replacement or a full refund, covering all shipping costs for the defective item.
          </p>

          <div className="mt-12 p-8 bg-cream border border-primary-200">
            <p className="font-black text-neutral-900 mb-2 uppercase tracking-tight">Need further assistance?</p>
            <p className="text-neutral-600">Contact our support team via WhatsApp at <span className="font-bold text-neutral-900">+234 812 345 6789</span> or email us at <span className="font-bold text-neutral-900">support@autogenuine.ng</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
