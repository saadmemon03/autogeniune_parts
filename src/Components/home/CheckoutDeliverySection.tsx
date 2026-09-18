// // import React from 'react';
// // import { Lock, CreditCard, Box, Smartphone, Truck, Clock, MapPin } from 'lucide-react';
// // import { IconTile } from '../ui/IconTile';

// // const paymentMethods = [
// //   { icon: <CreditCard className="h-5 w-5 text-brand" />, label: 'Card' },
// //   { icon: <Box className="h-5 w-5 text-brand" />, label: 'Bank Transfer' },
// //   { icon: <Smartphone className="h-5 w-5 text-brand" />, label: 'USSD' },
// // ];

// // const supportedCards = ['Visa', 'Mastercard', 'Verve', 'Paystack'];

// // export const CheckoutDeliverySection: React.FC = () => (
// //   <section className="w-full">
// //     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[400px]">
// //       {/* Left - Paystack */}
// //       <div className="w-full lg:w-1/2 bg-surface-cream p-10 lg:p-20 flex flex-col justify-center">
// //         <div className="mb-6">
// //           <IconTile size="md" bg="brand" icon={<Lock className="h-6 w-6" />} className="w-12 h-12" />
// //         </div>
// //         <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
// //           Secure Paystack Checkout
// //         </h2>
// //         <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-md">
// //           Pay the way that suits you. Every transaction is encrypted and processed through Paystack, Nigeria's most
// //           trusted payment gateway.
// //         </p>
// //         <div className="flex flex-wrap gap-4 mb-6">
// //           {paymentMethods.map((method) => (
// //             <div key={method.label} className="bg-white border border-gray-200 p-4 min-w-[140px] flex flex-col gap-3">
// //               {method.icon}
// //               <span className="font-bold text-xs uppercase tracking-widest text-gray-900">{method.label}</span>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="flex flex-wrap gap-2 text-[10px] font-medium text-gray-500 uppercase">
// //           {supportedCards.map((card) => (
// //             <span key={card} className="bg-gray-100 px-3 py-1">
// //               {card}
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Right - Delivery */}
// //       <div className="w-full lg:w-1/2 bg-dark p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
// //         <Truck className="absolute -bottom-10 -right-10 h-64 w-64 text-brand-900 opacity-20" strokeWidth={1} />
// //         <div className="mb-6 relative z-10">
// //           <IconTile size="md" bg="brand" icon={<Truck className="h-6 w-6" />} className="w-12 h-12" />
// //         </div>
// //         <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 relative z-10">
// //           Delivery That Actually Delivers
// //         </h2>
// //         <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md relative z-10">
// //           Pick the speed that fits your job — from urgent workshop repairs to routine restocking anywhere in
// //           Nigeria.
// //         </p>
// //         <div className="flex flex-col gap-4 relative z-10">
// //           <div className="border-l-2 border-brand pl-6 py-2">
// //             <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest mb-1">
// //               <Clock className="h-4 w-4 text-brand" /> Same-Day • Lagos
// //             </div>
// //             <p className="text-gray-500 text-xs">Order before 12pm for same-day dispatch</p>
// //           </div>
// //           <div className="border-l-2 border-brand pl-6 py-2">
// //             <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest mb-1">
// //               <MapPin className="h-4 w-4 text-brand" /> Nationwide • 2-4 Days
// //             </div>
// //             <p className="text-gray-500 text-xs">Tracked shipping to all 36 states</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );
// import React from 'react';
// import { Lock, CreditCard, Box, Smartphone, Truck, Clock, MapPin } from 'lucide-react';
// import { IconTile } from '../ui/IconTile';

// const paymentMethods = [
//   { icon: <CreditCard className="h-5 w-5 text-primary" />, label: 'Card' },
//   { icon: <Box className="h-5 w-5 text-primary" />, label: 'Bank Transfer' },
//   { icon: <Smartphone className="h-5 w-5 text-primary" />, label: 'USSD' },
// ];

// const supportedCards = ['Visa', 'Mastercard', 'Verve', 'Paystack'];

// export const CheckoutDeliverySection: React.FC = () => (
//   <section className="w-full">
//     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[400px]">
//       {/* Left - Paystack */}
//       <div className="w-full lg:w-1/2 bg-cream p-10 lg:p-20 flex flex-col justify-center">
//         <div className="mb-6">
//           <IconTile size="md" bg="brand" icon={<Lock className="h-6 w-6" />} className="w-12 h-12" />
//         </div>
//         <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight mb-4">
//           Secure Paystack Checkout
//         </h2>
//         <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10 max-w-md">
//           Pay the way that suits you. Every transaction is encrypted and processed through Paystack, Nigeria's most
//           trusted payment gateway.
//         </p>
//         <div className="flex flex-wrap gap-4 mb-6">
//           {paymentMethods.map((method) => (
//             <div key={method.label} className="bg-neutral-0 border border-neutral-200 p-4 min-w-[140px] flex flex-col gap-3">
//               {method.icon}
//               <span className="font-bold text-xs uppercase tracking-widest text-neutral-900">{method.label}</span>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-2 text-[10px] font-medium text-neutral-500 uppercase">
//           {supportedCards.map((card) => (
//             <span key={card} className="bg-neutral-100 px-3 py-1">
//               {card}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Right - Delivery */}
//       <div className="w-full lg:w-1/2 bg-neutral-900 p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
//         <Truck className="absolute -bottom-10 -right-10 h-64 w-64 text-primary-900 opacity-20" strokeWidth={1} />
//         <div className="mb-6 relative z-10">
//           <IconTile size="md" bg="brand" icon={<Truck className="h-6 w-6" />} className="w-12 h-12" />
//         </div>
//         <h2 className="text-3xl md:text-4xl font-black text-neutral-0 uppercase tracking-tight mb-4 relative z-10">
//           Delivery That Actually Delivers
//         </h2>
//         <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-md relative z-10">
//           Pick the speed that fits your job — from urgent workshop repairs to routine restocking anywhere in
//           Nigeria.
//         </p>
//         <div className="flex flex-col gap-4 relative z-10">
//           <div className="border-l-2 border-primary pl-6 py-2">
//             <div className="flex items-center gap-2 text-neutral-0 font-bold text-sm uppercase tracking-widest mb-1">
//               <Clock className="h-4 w-4 text-primary" /> Same-Day • Lagos
//             </div>
//             <p className="text-neutral-500 text-xs">Order before 12pm for same-day dispatch</p>
//           </div>
//           <div className="border-l-2 border-primary pl-6 py-2">
//             <div className="flex items-center gap-2 text-neutral-0 font-bold text-sm uppercase tracking-widest mb-1">
//               <MapPin className="h-4 w-4 text-primary" /> Nationwide • 2-4 Days
//             </div>
//             <p className="text-neutral-500 text-xs">Tracked shipping to all 36 states</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
import React from 'react';
import { Lock, CreditCard, Box, Smartphone, Truck, Clock, MapPin } from 'lucide-react';
import { IconTile } from '../ui/IconTile';

const paymentMethods = [
  { icon: <CreditCard className="h-5 w-5 text-primary" />, label: 'Card' },
  { icon: <Box className="h-5 w-5 text-primary" />, label: 'Bank Transfer' },
  { icon: <Smartphone className="h-5 w-5 text-primary" />, label: 'USSD' },
];

const supportedCards = ['Visa', 'Mastercard', 'Verve', 'Paystack'];

export const CheckoutDeliverySection: React.FC = () => (
  <section className="w-full py-24">
    <div className="box-border max-w-[1280px] mx-auto flex flex-col gap-8 px-6 md:h-[463.5px] md:flex-row">
      {/* Left - Paystack */}
      <div className="w-full md:w-1/2 bg-cream p-6 sm:p-10 md:p-8 flex flex-col justify-center">
        <div className="mb-4 md:mb-6">
          <IconTile size="lg" bg="brand" icon={<Lock className="h-6 w-6" />} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight mb-4">
          Secure Paystack Checkout
        </h2>
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-md">
          Pay the way that suits you. Every transaction is encrypted and processed through Paystack, Nigeria's most
          trusted payment gateway.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          {paymentMethods.map((method) => (
            <div key={method.label} className="bg-neutral-0 border border-neutral-200 p-4 min-w-[120px] flex-1 flex flex-col gap-3">
              {method.icon}
              <span className="font-bold text-xs uppercase tracking-widest text-neutral-900">{method.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] font-medium text-neutral-500 uppercase">
          {supportedCards.map((card) => (
            <span key={card} className="bg-neutral-100 px-3 py-1">
              {card}
            </span>
          ))}
        </div>
      </div>

      {/* Right - Delivery */}
      <div className="w-full md:w-1/2 bg-neutral-900 p-6 sm:p-10 md:p-8 flex flex-col justify-center relative overflow-hidden">
        <Truck className="absolute -bottom-10 -right-10 h-48 w-48 md:h-64 md:w-64 text-primary-900 opacity-20" strokeWidth={1} />
        <div className="mb-4 md:mb-6 relative z-10">
          <IconTile size="lg" bg="brand" icon={<Truck className="h-6 w-6" />} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-0 uppercase tracking-tight mb-4 relative z-10">
          Delivery That Actually Delivers
        </h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-md relative z-10">
          Pick the speed that fits your job — from urgent workshop repairs to routine restocking anywhere in
          Nigeria.
        </p>
        <div className="flex flex-col gap-4 relative z-10">
          <div className="border-l-2 border-primary pl-6 py-2">
            <div className="flex items-center gap-2 text-neutral-0 font-bold text-sm uppercase tracking-widest mb-1">
              <Clock className="h-4 w-4 text-primary" /> Same-Day • Lagos
            </div>
            <p className="text-neutral-500 text-xs">Order before 12pm for same-day dispatch</p>
          </div>
          <div className="border-l-2 border-primary pl-6 py-2">
            <div className="flex items-center gap-2 text-neutral-0 font-bold text-sm uppercase tracking-widest mb-1">
              <MapPin className="h-4 w-4 text-primary" /> Nationwide • 2-4 Days
            </div>
            <p className="text-neutral-500 text-xs">Tracked shipping to all 36 states</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);