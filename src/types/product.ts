export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: string;
  details?: {
    dimensions: string;
    weight: string;
    material: string;
    printTime: string;
  };
}

export interface PrintOptions {
  color: string;
  size: string;
  infill: number;
  quality: string;
}

export const PRINT_COLORS = [
  { name: 'Neon Green', value: '#39FF14' },
  { name: 'Cyber Blue', value: '#00FFFF' },
  { name: 'Plasma Purple', value: '#9D00FF' },
  { name: 'Matrix Black', value: '#000000' },
  { name: 'Energy Red', value: '#FF0000' },
] as const;

export const PRINT_SIZES = ['Small', 'Medium', 'Large', 'Custom'] as const;
export const PRINT_QUALITIES = ['Draft', 'Normal', 'High', 'Ultra'] as const;
export const INFILL_OPTIONS = [20, 50, 80, 100] as const;