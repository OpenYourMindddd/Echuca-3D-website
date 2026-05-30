/**
 * Central product catalogue.
 * Add new items here — Home and Products pages read from this array.
 *
 * Future store expansion:
 * - id: unique slug for URLs and cart line items
 * - price: number or null for "quote on request"
 * - image: path under /public/images/ or imported asset
 * - inStock, variants, sku — wire when checkout is added
 */
export const products = [
  {
    id: 'mullet-guard',
    name: 'Mullet Guard',
    description:
      'Longer rear-style MTB front mudguard. Practical mountain bike protection with a bit of attitude.',
    // image: '/images/mullet-guard.jpg',
    category: 'Outdoor & Vehicle',
  },
  {
    id: 'custom-mounts',
    name: 'Custom Mounts',
    description:
      'Simple brackets, holders, and mounts for home, work, or vehicles.',
    category: 'Workshop & Home',
  },
  {
    id: 'workshop-accessories',
    name: 'Workshop Accessories',
    description:
      'Useful small parts, holders, organisers, and tool-related add-ons.',
    category: 'Workshop',
  },
  {
    id: 'outdoor-vehicle-gear',
    name: 'Outdoor & Vehicle Gear',
    description:
      'Practical accessories for camping, bikes, cars, trailers, and outdoor setups.',
    category: 'Outdoor & Vehicle',
  },
];

/** Featured subset for the home page (first four by default). */
export const featuredProducts = products.slice(0, 4);
