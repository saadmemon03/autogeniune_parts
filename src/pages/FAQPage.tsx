import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery within Lagos takes 1-2 business days. Outside Lagos, delivery typically takes 3-5 business days depending on your exact location."
      },
      {
        q: "Can I track my order?",
        a: "Yes! Once your order is dispatched, you can use the 'Track My Order' link in the footer to see real-time updates on your delivery status."
      }
    ]
  },
  {
    category: "Parts & Fitment",
    questions: [
      {
        q: "How do I know a part will fit my car?",
        a: "We highly recommend using our 'Shop by Vehicle' feature or providing your VIN (Vehicle Identification Number) during checkout. Our team verifies the fitment before shipping to ensure 100% accuracy."
      },
      {
        q: "Are your parts genuinely OEM?",
        a: "Yes, we stock both Genuine (dealership-level) and OEM (Original Equipment Manufacturer) parts. Each product listing clearly specifies the type of part."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-Day Return Policy for unused, uninstalled parts in their original packaging. Please refer to our Detailed Return Policy page for more information."
      },
      {
        q: "How do I initiate a return?",
        a: "Contact our WhatsApp support or Email us with your Order ID and the reason for the return. Our team will guide you through the process."
      }
    ]
  }
];

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans pb-20">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-primary-500" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400 text-sm md:text-base">
            Find answers to common questions about our parts, shipping, and return policies.
          </p>
        </div>
      </div>

      {/* FAQs Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {faqs.map((section, secIdx) => (
            <div key={secIdx}>
              <h2 className="text-xl font-black text-neutral-900 uppercase tracking-widest mb-6 border-b border-neutral-200 pb-2">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => {
                  const id = `${secIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={qIdx} 
                      className="bg-white border border-neutral-200 rounded-sm overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                      >
                        <span className="font-bold text-neutral-900 pr-4">{faq.q}</span>
                        {isOpen ? (
                          <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="p-5 pt-0 bg-neutral-0">
                          <p className="text-neutral-600 leading-relaxed text-sm">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-primary-50 border border-primary-100 p-8 rounded-sm text-center">
          <h3 className="text-lg font-black text-neutral-900 uppercase tracking-widest mb-3">
            Still have questions?
          </h3>
          <p className="text-neutral-600 text-sm mb-6 max-w-lg mx-auto">
            If you couldn't find the answer you were looking for, our customer care team is here to help you out.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 text-white font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-sm hover:bg-primary-600 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};
