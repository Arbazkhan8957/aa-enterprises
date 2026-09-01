const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newCategory = `  {
    "name": "Ceyone Items",
    "image": "/images/ceyone_logo.jpg",
    "description": "High-quality Ceyone electrical components including limit switches, push buttons, proximity sensors, and warning lights."
  },
`;

const newProducts = `
  {
    id: 'ceyone-lsa-012',
    name: 'Ceyone LSA-012 Limit Switch',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/images/products/ceyone_lsa012.jpg',
    description: 'The Ceyone LSA-012 is a durable and reliable limit switch designed for various industrial automation applications. It features a robust housing and high precision switching for effective position detection.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.5,
    reviews: 12,
    features: [
      'Model: LSA-012',
      'Actuator: Roller Lever',
      'Standard: GB14048.5',
      'Ith: 10A',
      'IP65 Enclosure Rating',
      'AC-15: 380V 0.8A',
      'DC-13: 220V 0.16A'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Model', value: 'LSA-012' },
      { name: 'Type', value: 'Limit Switch' }
    ]
  },
  {
    id: 'ceyone-push-buttons',
    name: 'Ceyone Industrial Push Buttons',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/images/products/ceyone_push_buttons.jpg',
    description: 'Ceyone industrial push buttons, available in flush and non-illuminated variants with various colors (Black, Yellow, Red, Green, Blue). Ideal for control panels and machinery.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.6,
    reviews: 18,
    features: [
      'Type: Flush Push Button',
      'Colors: Black, Yellow, Red, Green, Blue',
      'High mechanical life',
      'Easy panel mounting'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Type', value: 'Push Button' }
    ]
  },
  {
    id: 'ceyone-proximity-sensor',
    name: 'Ceyone Inductive Proximity Sensor',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/images/products/ceyone_proximity_sensor.jpg',
    description: 'Ceyone inductive proximity sensor for reliable non-contact detection of metallic objects in industrial environments.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 15,
    features: [
      'Type: Inductive Proximity Sensor',
      'Cylindrical threaded body',
      'Pre-wired cable connection',
      'LED status indicator'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Type', value: 'Proximity Sensor' }
    ]
  },
  {
    id: 'ceyone-lxk3-20sb',
    name: 'Ceyone LXK3-20S/B Limit Switch',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/images/products/ceyone_lxk3_20sb.jpg',
    description: 'The Ceyone LXK3-20S/B is a heavy-duty limit switch with an adjustable roller lever actuator. Suitable for demanding environments requiring reliable limit control.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 22,
    features: [
      'Model: LXK3-20S/B',
      'Actuator: Adjustable Roller Lever',
      'Standard: GB14048.5',
      'Ith: 10A',
      'IP65 Enclosure Rating',
      'AC-15: 380V 0.8A',
      'DC-13: 220V 0.16A'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Model', value: 'LXK3-20S/B' },
      { name: 'Type', value: 'Limit Switch' }
    ]
  },
  {
    id: 'ceyone-lte-1101j',
    name: 'Ceyone LTE-1101J Revolving Warning Light',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/images/products/ceyone_revolving_light.jpg',
    description: 'Ceyone LTE-1101J revolving warning light (siren). Provides high visibility alert signaling for industrial safety and machinery status indication.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 35,
    features: [
      'Model: LTE-1101J',
      'Type: Revolving Warning Light',
      'Color: Green (other colors may be available)',
      'Highly visible indication'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Model', value: 'LTE-1101J' },
      { name: 'Type', value: 'Warning Light' }
    ]
  }
`;

// Insert category
const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
data = data.slice(0, categoriesEnd) + newCategory + data.slice(categoriesEnd);

// Insert products
const productsEnd = data.lastIndexOf('];');
data = data.slice(0, productsEnd - 1) + ',' + newProducts + data.slice(productsEnd - 1);

fs.writeFileSync('src/data.js', data);
console.log('Successfully added Ceyone items to data.js');
