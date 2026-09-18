import React from 'react';
import { HeroSection } from '../Components/home/HeroSection';
import { TrustBadges } from '../Components/home/TrustBadges';
import { CategoryGrid } from '../Components/home/CategoryGrid';
import { VehicleShowcase } from '../Components/home/VehicleShowcase';
import { VinFitmentCheck } from '../Components/home/VinFitmentCheck';
import { HowItWorksSection } from '../Components/home/HowItWorksSection';
import { PopularProducts } from '../Components/home/PopularProducts';
import { CheckoutDeliverySection } from '../Components/home/CheckoutDeliverySection';
import { ReturnsSection } from '../Components/home/ReturnsSection';

export const Home: React.FC = () => (
  <div className="flex flex-col w-full">
    <HeroSection />
    <TrustBadges />
    <CategoryGrid />
    <VehicleShowcase />
    <VinFitmentCheck />
    <HowItWorksSection />
    <PopularProducts />
    <CheckoutDeliverySection />
    <ReturnsSection />
  </div>
);

export default Home;