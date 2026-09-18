export interface Product {
  id: string;
  title: string;
  fit: string;
  price: string;
  type: 'OEM' | 'GENUINE';
  cat: string;
  description?: string;
  image?: string;
}

export interface FeaturedVehicle {
  id: string;
  model: string;
  years: string;
  parts: string;
}