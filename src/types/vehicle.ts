export type VehicleFitmentData = Record<
  string /* make */,
  Record<string /* model */, string[] /* years */>
>;

export interface FeaturedVehicle {
  id: string;
  model: string;
  years: string;
  parts: string;
}