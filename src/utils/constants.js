/**
 * Application constants and configuration
 */

// Category mapping for TheMealDB API
export const CATEGORY_MAP = {
  breakfast: 'Breakfast',
  lunch: 'Beef',
  dessert: 'Dessert',
  side: 'Side',
};

// Default fallback category
export const DEFAULT_CATEGORY = 'Seafood';

// Category configuration for UI
export const CATEGORY_CONFIG = {
  breakfast: {
    name: 'Breakfast',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
    url: '/recipe-category/breakfast',
  },
  lunch: {
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    url: '/recipe-category/lunch',
  },
  dessert: {
    name: 'Dessert',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
    url: '/recipe-category/dessert',
  },
  side: {
    name: 'Side',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
    url: '/recipe-category/drink',
  },
  default: {
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    url: '/recipes',
  },
};

// Categories list for navigation and display
export const CATEGORIES = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
    link: '/recipe-category/breakfast',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    link: '/recipe-category/lunch',
  },
  {
    id: 'side',
    name: 'Side',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
    link: '/recipe-category/side',
  },
  {
    id: 'dessert',
    name: 'Dessert',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
    link: '/recipe-category/dessert',
  },
];

