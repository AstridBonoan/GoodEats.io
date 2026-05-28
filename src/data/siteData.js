export const PHONE = '(718) 555-0198'
export const PHONE_HREF = 'tel:+17185550198'
export const ADDRESS = '69-10 Grand Ave, Maspeth, NY 11378'
export const ORDER_URL = '#order'
export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-73.899!3d40.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzMzLjYiTiA3M8KwNTMnNTYuNCJX!5e0!3m2!1sen!2sus!4v1'

export const HOURS = [
  { day: 'Mon–Thu', time: '6:00 AM – 9:00 PM' },
  { day: 'Fri–Sat', time: '6:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 9:00 PM' },
]

export const QUICK_INFO = [
  { id: 'open', label: 'Open Daily', icon: 'clock' },
  { id: 'delivery', label: 'Delivery', icon: 'truck' },
  { id: 'pickup', label: 'Pickup', icon: 'bag' },
  { id: 'outdoor', label: 'Outdoor Seating', icon: 'sun' },
]

export const FEATURED_DISHES = [
  {
    id: 'egg-sandwich',
    title: 'Classic Egg Sandwich',
    description: 'Fluffy eggs, melted cheese, toasted roll — the Queens breakfast staple.',
    price: '$8.95',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'burger',
    title: 'Good Eats Burger',
    description: 'Half-pound patty, lettuce, tomato, pickles, diner sauce on a brioche bun.',
    price: '$14.50',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'omelette',
    title: 'Western Omelette',
    description: 'Ham, peppers, onions, cheddar — loaded and served with home fries.',
    price: '$13.25',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'pancakes',
    title: 'Stack of Pancakes',
    description: 'Three fluffy buttermilk pancakes with butter and warm maple syrup.',
    price: '$10.95',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'wrap',
    title: 'Grilled Chicken Wrap',
    description: 'Grilled chicken, romaine, tomato, ranch in a warm flour tortilla.',
    price: '$12.75',
    image:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'triple',
    title: 'Turkey Triple Decker',
    description: 'Triple-decker club with turkey, bacon, lettuce, tomato, and mayo.',
    price: '$15.95',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&auto=format&fit=crop',
  },
]

export const MENU_CATEGORIES = [
  {
    id: 'breakfast',
    title: 'Breakfast Favorites',
    icon: '🍳',
    items: [
      { name: 'Two Eggs Any Style', price: '$7.95' },
      { name: 'Pancakes (3)', price: '$10.95' },
      { name: 'French Toast', price: '$11.50' },
      { name: 'Bacon & Eggs', price: '$12.95' },
      { name: 'Home Fries', price: '$4.50' },
    ],
  },
  {
    id: 'omelettes',
    title: 'Omelettes',
    icon: '🥚',
    items: [
      { name: 'Western', price: '$13.25' },
      { name: 'Cheese', price: '$11.95' },
      { name: 'Veggie', price: '$12.75' },
      { name: 'Greek', price: '$14.25' },
      { name: 'Build Your Own', price: 'from $12.95' },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    icon: '🍔',
    items: [
      { name: 'Good Eats Burger', price: '$14.50' },
      { name: 'Cheeseburger', price: '$13.95' },
      { name: 'Bacon Burger', price: '$15.95' },
      { name: 'Veggie Burger', price: '$13.50' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches & Wraps',
    icon: '🥪',
    items: [
      { name: 'Grilled Cheese', price: '$8.95' },
      { name: 'BLT', price: '$11.95' },
      { name: 'Chicken Wrap', price: '$12.75' },
      { name: 'Tuna Melt', price: '$12.50' },
    ],
  },
  {
    id: 'triple-deckers',
    title: 'Triple Deckers',
    icon: '🥓',
    items: [
      { name: 'Turkey Club', price: '$15.95' },
      { name: 'Ham & Cheese Club', price: '$14.95' },
      { name: 'Chicken Club', price: '$15.50' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    icon: '🥗',
    items: [
      { name: 'House Salad', price: '$9.95' },
      { name: 'Caesar', price: '$11.95' },
      { name: 'Grilled Chicken Salad', price: '$14.95' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍰',
    items: [
      { name: 'Pie Slice', price: '$5.95' },
      { name: 'Ice Cream Sundae', price: '$6.50' },
      { name: 'Milkshake', price: '$6.95' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    icon: '☕',
    items: [
      { name: 'Coffee', price: '$2.95' },
      { name: 'Fresh Orange Juice', price: '$4.50' },
      { name: 'Fountain Soda', price: '$2.75' },
      { name: 'Iced Tea', price: '$3.25' },
    ],
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80&auto=format&fit=crop',
    alt: 'Breakfast platter with eggs and toast',
  },
  {
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80&auto=format&fit=crop',
    alt: 'Juicy diner burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80&auto=format&fit=crop',
    alt: 'Stack of pancakes with syrup',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80&auto=format&fit=crop',
    alt: 'Fresh brewed coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80&auto=format&fit=crop',
    alt: 'Diner seating and atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80&auto=format&fit=crop',
    alt: 'Fluffy omelette closeup',
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Maria L.',
    rating: 5,
    text: 'Huge portions and the staff always makes you feel like family. Best egg sandwich in the neighborhood.',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    text: 'Real comfort food — burgers, omelettes, pancakes. Fast service even when it\'s packed on weekends.',
  },
  {
    id: 3,
    name: 'Sofia R.',
    rating: 5,
    text: 'We\'ve been coming for years. Friendly crew, fair prices, and portions that actually fill you up.',
  },
  {
    id: 4,
    name: 'Mike D.',
    rating: 5,
    text: 'Classic NYC diner energy with a clean menu online. Ordered pickup — food was hot and ready on time.',
  },
]

export const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Visit' },
]
