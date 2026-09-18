import type{ Step } from '../types/step';

export const howItWorksSteps: Step[] = [
  {
    num: '01',
    title: 'Find your part',
    desc: 'Search by VIN, choose your vehicle, or type a part number.',
    icon: 'Search',
  },
  {
    num: '02',
    title: 'Verify fitment',
    desc: 'We match against NHTSA so you only see parts that fit your car.',
    icon: 'CheckCircle',
  },
  {
    num: '03',
    title: 'Pay securely',
    desc: 'Paystack checkout — card, bank transfer or USSD. No hidden fees.',
    icon: 'Lock',
  },
  {
    num: '04',
    title: 'Get it fast',
    desc: 'Same-day in Lagos. Nationwide shipping in 2-4 working days.',
    icon: 'Box',
  },
];

export const returnSteps: Step[] = [
  { num: '01', title: 'Request from Mail', desc: 'Reach out us through mail.' },
  { num: '02', title: 'Tell us why', desc: 'Wrong part, defective, or changed your mind.' },
  { num: '03', title: 'Ship it back', desc: 'Free return pickup in Lagos. Prepaid label nationwide.' },
  { num: '04', title: 'Get refunded', desc: 'Refund in your bank account.' },
];