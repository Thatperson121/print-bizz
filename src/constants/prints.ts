export const FEATURED_PRINTS = [
  {
    id: 1,
    title: 'Dragon Slayer Sword',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80',
    description: 'Epic 1:1 scale gaming sword replica with LED effects',
    price: '$89.99',
    category: 'Gaming Props'
  },
  {
    id: 2,
    title: 'Minecraft Creeper',
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&q=80',
    description: 'Light-up Creeper figure that actually hisses!',
    price: '$49.99',
    category: 'Game Characters'
  },
  {
    id: 3,
    title: 'Portal Gun',
    image: 'https://images.unsplash.com/photo-1634195130430-2be61200b66a?auto=format&fit=crop&q=80',
    description: 'Replica portal device with glowing effects',
    price: '$129.99',
    category: 'Gaming Props'
  }
] as const;

export const PRINT_CATEGORIES = [
  'All',
  'Gaming Props',
  'Game Characters',
  'Mech Designs',
  'Fantasy Weapons',
  'Custom Mods',
] as const;