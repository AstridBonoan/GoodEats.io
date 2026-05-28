export const ROUTES = {
  home: '#',
  menu: '#menu',
  order: '#order',
  about: '#about',
  events: '#events',
  careers: '#careers',
  giftCards: '#gift-cards',
  rewards: '#rewards',
  gallery: '#gallery',
  reviews: '#reviews',
  location: '#location',
}

export const ORDER_URL = ROUTES.order
export const MENU_URL = ROUTES.menu
export const REWARDS_URL = ROUTES.rewards

const IMG = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const IMAGES = {
  hero: IMG('storefront.jpg'),
  about: IMG('diner-interior.jpg'),
  siestaEggSando: IMG('siesta-egg-sando.jpg'),
  burger: IMG('burger.jpg'),
  frenchToast: IMG('french-toast.jpg'),
  chickenSalad: IMG('chicken-salad.jpg'),
  wings: IMG('wings.jpg'),
  macAndCheese: IMG('mac-and-cheese-plate.jpg'),
  appetizerPlatter: IMG('appetizer-platter.jpg'),
  fishAndChips: IMG('fish-and-chips.jpg'),
  hotChocolate: IMG('hot-chocolate.jpg'),
  dinerGuests: IMG('diner-guests.jpg'),
}

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
    image: IMAGES.siestaEggSando,
  },
  {
    id: 'mademoiselle-egg-sando',
    title: 'The Mademoiselle Egg Sando',
    description: 'Scrambled eggs, ham, Gruyère, grilled tomatoes, avocado, garlic aioli on bagel.',
    price: '$12.50',
    image: IMAGES.frenchToast,
  },
  {
    id: 'new-york-egg-sando',
    title: 'New York Egg Sando',
    description: 'Egg whites, Swiss, baby spinach, green apple, avocado on 8-grain bread.',
    price: '$12.50',
    image: IMAGES.chickenSalad,
  },
  {
    id: 'brain-food-egg-sando',
    title: 'Brain Food Egg Sando',
    description: 'Egg whites, turkey, avocado, grilled tomato & Gruyère.',
    price: '$12.50',
    image: IMAGES.burger,
  },
  {
    id: 'peasant-omelette',
    title: 'Peasant Omelette',
    description: 'Bacon, potato, mozzarella, tomato & onion with potatoes and toast.',
    price: '$18.00+',
    image: IMAGES.macAndCheese,
  },
  {
    id: 'turkey-triple-decker',
    title: 'Turkey Triple Decker',
    description: 'Bacon, lettuce & tomato — served with French fries or potato salad.',
    price: '$19.50',
    image: IMAGES.appetizerPlatter,
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
  { src: IMAGES.siestaEggSando, alt: 'Siesta Egg Sando with chorizo, avocado, and fried egg' },
  { src: IMAGES.frenchToast, alt: 'French toast with strawberries, whipped cream, and syrup' },
  { src: IMAGES.burger, alt: 'Good Eats burger with bacon and fries' },
  { src: IMAGES.wings, alt: 'Buffalo wings with ranch dipping sauce' },
  { src: IMAGES.appetizerPlatter, alt: 'Appetizer platter with onion rings, tenders, and sauces' },
  { src: IMAGES.macAndCheese, alt: 'Mac and cheese with sweet potatoes and dinner roll' },
  { src: IMAGES.chickenSalad, alt: 'Grilled chicken salad with avocado and cranberries' },
  { src: IMAGES.fishAndChips, alt: 'Fish and chips with pickles and coleslaw' },
  { src: IMAGES.hotChocolate, alt: 'Hot chocolate with whipped cream and chocolate drizzle' },
  { src: IMAGES.dinerInterior, alt: 'Good Eats diner interior with chalkboard menu' },
  { src: IMAGES.dinerGuests, alt: 'Guests enjoying sandwiches at Good Eats' },
  { src: IMAGES.storefront, alt: 'Good Eats storefront on Grand Ave, Maspeth' },
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
  { href: ROUTES.menu, label: 'Menu' },
  { href: ROUTES.about, label: 'Our Story' },
  { href: ROUTES.events, label: 'Events' },
  { href: ROUTES.careers, label: "We're Hiring" },
  { href: ROUTES.giftCards, label: 'Gift Cards' },
  { href: ROUTES.location, label: 'Contact' },
]

export const FOOTER_LINKS = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.menu, label: 'Menu' },
  { href: ROUTES.about, label: 'Our Story' },
  { href: ROUTES.events, label: 'Events' },
  { href: ROUTES.careers, label: "We're Hiring" },
  { href: ROUTES.giftCards, label: 'Gift Cards' },
  { href: ROUTES.location, label: 'Contact Us' },
]

export const GIFT_CARD_AMOUNTS = ['$10', '$25', '$50', '$75', '$100']

export const COPYRIGHT = 'GAV REST CORP.'
