export const SITE_URL = 'https://goodeatsdinerny.com/'
export const MENU_URL = 'https://goodeatsdinerny.com/menu'
export const ORDER_URL = 'https://goodeatsdinerny.com/menu'
export const STORY_URL = 'https://goodeatsdinerny.com/story'
export const EVENTS_URL = 'https://goodeatsdinerny.com/events'
export const CAREERS_URL = 'https://goodeatsdinerny.com/careers'
export const GIFT_CARDS_URL = 'https://goodeatsdinerny.com/gift-cards'
export const CONTACT_URL = 'https://goodeatsdinerny.com/page/contact-us'
export const REWARDS_URL = 'https://goodeatsdinerny.com/'

export const PHONE = '(718) 478-2420'
export const PHONE_HREF = 'tel:+17184782420'
export const EMAIL = 'goodeatsdinerNY@gmail.com'
export const EMAIL_HREF = 'mailto:goodeatsdinerNY@gmail.com'
export const ADDRESS = '69-32 Grand Ave, Maspeth, NY 11378'
export const ADDRESS_LINE = '69-32 Grand Ave'
export const CITY_STATE_ZIP = 'Maspeth, NY 11378'

export const TAGLINE = 'Good food, good life—where hearty American favorites feel like home.'
export const HERO_HEADLINE = 'Comfort Food the Right Way'
export const HERO_SUBHEADLINE =
  'Breakfast, lunch, and dinner in Maspeth. Dine in, takeout, or delivery — open daily 8 AM to 8:30 PM.'

export const MAP_EMBED =
  'https://maps.google.com/maps?q=69-32+Grand+Ave,+Maspeth,+NY+11378&hl=en&z=15&output=embed'
export const MAP_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=69-32+Grand+Ave,+Maspeth,+NY+11378'

export const HOURS = [
  { day: 'Sunday', time: '8:00 AM – 8:30 PM' },
  { day: 'Monday', time: '8:00 AM – 8:30 PM' },
  { day: 'Tuesday', time: '8:00 AM – 8:30 PM' },
  { day: 'Wednesday', time: '8:00 AM – 8:30 PM' },
  { day: 'Thursday', time: '8:00 AM – 8:30 PM' },
  { day: 'Friday', time: '8:00 AM – 8:30 PM' },
  { day: 'Saturday', time: '8:00 AM – 8:30 PM' },
]

export const QUICK_INFO = [
  { id: 'open', label: 'Open Daily 8–8:30', icon: 'clock' },
  { id: 'delivery', label: 'Delivery', icon: 'truck' },
  { id: 'pickup', label: 'Pickup', icon: 'bag' },
  { id: 'dinein', label: 'Dine In', icon: 'utensils' },
]

export const FEATURED_DISHES = [
  {
    id: 'siesta-egg-sando',
    title: 'Siesta Egg Sando',
    description: 'Fried eggs, avocado, chorizo, chipotle mayo on a brioche bun.',
    price: '$12.50',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'mademoiselle-egg-sando',
    title: 'The Mademoiselle Egg Sando',
    description: 'Scrambled eggs, ham, Gruyère, grilled tomatoes, avocado, garlic aioli on bagel.',
    price: '$12.50',
    image:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'new-york-egg-sando',
    title: 'New York Egg Sando',
    description: 'Egg whites, Swiss, baby spinach, green apple, avocado on 8-grain bread.',
    price: '$12.50',
    image:
      'https://images.unsplash.com/photo-1484723091739-30a097fc8f51?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'brain-food-egg-sando',
    title: 'Brain Food Egg Sando',
    description: 'Egg whites, turkey, avocado, grilled tomato & Gruyère.',
    price: '$12.50',
    image:
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'peasant-omelette',
    title: 'Peasant Omelette',
    description: 'Bacon, potato, mozzarella, tomato & onion with potatoes and toast.',
    price: '$18.00+',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'turkey-triple-decker',
    title: 'Turkey Triple Decker',
    description: 'Bacon, lettuce & tomato — served with French fries or potato salad.',
    price: '$19.50',
    image:
      'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80&auto=format&fit=crop',
  },
]

export const MENU_CATEGORIES = [
  {
    id: 'egg-sandos',
    title: 'Breakfast Egg Sandos',
    icon: '🥪',
    items: [
      { name: 'Siesta Egg Sando', price: '$12.50' },
      { name: 'New York Egg Sando', price: '$12.50' },
      { name: 'Brain Food Egg Sando', price: '$12.50' },
      { name: 'The Mademoiselle Egg Sando', price: '$12.50' },
      { name: 'Two Eggs Sando', price: '$8.50' },
    ],
  },
  {
    id: 'omelettes',
    title: 'Omelettes',
    icon: '🥚',
    items: [
      { name: 'Peasant Omelette', price: '$18.00+' },
      { name: 'Western Omelette', price: '$16.50' },
      { name: 'Good Eats Omelette', price: '$18.00' },
      { name: 'Cheese Omelette', price: '$15.50+' },
      { name: 'Fuego Omelette', price: '$18.00' },
    ],
  },
  {
    id: 'burgers',
    title: 'Homemade Burgers',
    icon: '🍔',
    items: [
      { name: 'Good Eats Burger', price: '$19.50' },
      { name: 'Smash Burger', price: '$18.00' },
      { name: 'Cowboy Burger', price: '$18.00' },
      { name: 'Chorizo Burger', price: '$22.00' },
      { name: 'Yolk Burger', price: '$21.75' },
    ],
  },
  {
    id: 'triple-deckers',
    title: 'Triple Deckers',
    icon: '🥓',
    items: [
      { name: 'Turkey Triple Decker', price: '$19.50' },
      { name: 'Roast Beef Triple Decker', price: '$19.50' },
      { name: 'Chicken Salad Triple Decker', price: '$19.50' },
      { name: 'Grilled Chicken Triple Decker', price: '$19.50' },
    ],
  },
  {
    id: 'pancakes',
    title: 'Pancakes & French Toast',
    icon: '🥞',
    items: [
      { name: 'Plain Pancake', price: '$14.50' },
      { name: 'Chocolate Chip Pancake', price: '$16.70' },
      { name: 'French Toast', price: '$14.50' },
      { name: 'Stuffed French Toast', price: '$19.00' },
      { name: '1/2 Fried Chicken & Waffle', price: '$29.00' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    icon: '🥗',
    items: [
      { name: 'Cobb Salad', price: '$15.00+' },
      { name: 'Grilled Chicken Salad', price: '$15.00+' },
      { name: 'Greek Salad', price: '$12.50+' },
      { name: 'Caesar Salad', price: '$9.50+' },
      { name: 'Garden Salad', price: '$9.50+' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍰',
    items: [
      { name: 'New York Cheese Cake', price: '$10.00' },
      { name: 'Lemon Meringue Pie', price: '$9.50' },
      { name: 'Sundae', price: '$15.00' },
      { name: 'Ice Cream', price: '$6.50' },
      { name: 'Fried Oreos', price: '$12.50' },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    icon: '☕',
    items: [
      { name: 'Coffee', price: 'See menu' },
      { name: 'Hot Chocolate', price: 'See menu' },
      { name: 'Iced Coffee', price: 'See menu' },
      { name: 'Milk Shakes', price: 'See menu' },
      { name: 'Smoothies', price: 'See menu' },
    ],
  },
]

export const MENU_HIGHLIGHTS = [
  'Egg Sandos',
  'Omelettes',
  'Homemade Burgers',
  'Triple Deckers',
  'Souvlaki & Gyro',
  'Pancakes & Waffles',
  'Salads',
  'Desserts',
  'Milk Shakes',
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80&auto=format&fit=crop',
    alt: 'Breakfast sandwich with egg, avocado, and sausage',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80&auto=format&fit=crop',
    alt: 'Pancakes with whipped cream and toppings',
  },
  {
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80&auto=format&fit=crop',
    alt: 'Diner burger with toppings',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80&auto=format&fit=crop',
    alt: 'Hot chocolate with whipped cream',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80&auto=format&fit=crop',
    alt: 'Diner seating and neighborhood atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80&auto=format&fit=crop',
    alt: 'Hearty omelette breakfast plate',
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Tony K.',
    rating: 5,
    text: 'Great local diner! I haven\'t had a bad meal here yet. The OMG sandwich was delicious, messy, but delicious. We also got an omelette with spinach, jalapeños, mushrooms and cheese.',
  },
  {
    id: 2,
    name: 'Melody A.',
    rating: 5,
    text: 'My new favorite is the ricotta toast with fig jam and eggs — chilli flakes and a baked sweet potato on the side. This place makes me happy dance while I eat.',
  },
  {
    id: 3,
    name: 'Max H.',
    rating: 5,
    text: 'The staff is so friendly and the food was delicious — their cheese fries are impeccable. The portions are enormous and I had a ton of leftovers. Incredibly reasonably priced for the quality.',
  },
]

export const NAV_LINKS = [
  { href: '#menu', label: 'Menu', external: false },
  { href: '#about', label: 'Our Story', external: false },
  { href: EVENTS_URL, label: 'Events', external: true },
  { href: CAREERS_URL, label: "We're Hiring", external: true },
  { href: GIFT_CARDS_URL, label: 'Gift Cards', external: true },
  { href: '#location', label: 'Contact', external: false },
]

export const FOOTER_LINKS = [
  { href: SITE_URL, label: 'Home', external: true },
  { href: MENU_URL, label: 'Menu', external: true },
  { href: STORY_URL, label: 'Our Story', external: true },
  { href: EVENTS_URL, label: 'Events', external: true },
  { href: CAREERS_URL, label: "We're Hiring", external: true },
  { href: GIFT_CARDS_URL, label: 'Gift Cards', external: true },
  { href: CONTACT_URL, label: 'Contact Us', external: true },
]

export const COPYRIGHT = 'GAV REST CORP.'
