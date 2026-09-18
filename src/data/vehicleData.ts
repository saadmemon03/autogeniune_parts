import type { VehicleFitmentData } from '../types/vehicle';

export const dummyVehicleData: VehicleFitmentData = {
  Toyota: {
    Camry: ['2021', '2022', '2023', '2024'],
    Corolla: ['2020', '2021', '2022', '2023', '2024'],
    Hilux: ['2019', '2020', '2021', '2022', '2023'],
  },
  Honda: { Civic: ['2021', '2022', '2023', '2024'], Accord: ['2020', '2021', '2022', '2023'] },
  Ford: { 'F-150': ['2022', '2023', '2024'], Mustang: ['2021', '2022', '2023', '2024'] },
  BMW: { '3 Series': ['2021', '2022', '2023'], X5: ['2022', '2023', '2024'] },
};