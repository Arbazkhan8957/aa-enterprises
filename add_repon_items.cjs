const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// 1. Add Allen-Bradley to brands if not exists
if (!data.includes('"name": "Allen-Bradley"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = `,\n  { "name": "Allen-Bradley", "logo": "Allen-Bradley" }`;
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 2. Add categories if not exist
const addCategory = (name, image, desc) => {
  if (!data.includes(`"name": "${name}"`)) {
    const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
    // Ensure trailing comma for previous element
    let preSlice = data.slice(0, categoriesEnd);
    if (!preSlice.trim().endsWith(',')) {
      preSlice += ',';
    }
    const newCategory = `\n  {
    "name": "${name}",
    "image": "${image}",
    "description": "${desc}"
  },`;
    data = preSlice + newCategory + data.slice(categoriesEnd);
  }
};

addCategory("Repon Items", "/images/repon_logo.jpg", "High-quality Repon electrical components including limit switches, micro switches, and proximity sensors.");
addCategory("Omron Items", "/images/omron_logo.jpg", "Omron industrial automation components, featuring durable limit switches and sensors.");
addCategory("Allen-Bradley Items", "/images/ab_logo.jpg", "Allen-Bradley industrial control components, known for rugged reliability.");

// 3. Add 5 products
const newProducts = `
  {
    id: 'repon-rp8104',
    name: 'Repon RP-8104 Limit Switch',
    category: 'Repon Items',
    brand: 'Repon',
    image: '/images/products/repon_rp8104.jpg',
    description: 'The Repon RP-8104 is a highly durable limit switch featuring a roller lever actuator. Suitable for precise position detection in automated machinery.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.6,
    reviews: 14,
    features: [
      'Model: RP-8104',
      'Actuator: Roller Lever',
      'Contact Rating: 5A 250V AC',
      'Configuration: 1NO + 1NC'
    ],
    specs: [
      { name: 'Brand', value: 'Repon' },
      { name: 'Model', value: 'RP-8104' },
      { name: 'Type', value: 'Limit Switch' }
    ]
  },
  {
    id: 'repon-micro-switches',
    name: 'Repon Micro Switches (Z-15G Series)',
    category: 'Repon Items',
    brand: 'Repon',
    image: '/images/products/repon_micro_switches.jpg',
    description: 'Repon precision micro switches (Z-15G series equivalents) available in multiple actuator types including pin plunger, roller lever, and hinge lever for versatile control panel applications.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 21,
    features: [
      'Series: Z-15G equivalents',
      'Actuators: Pin Plunger, Roller Lever, Hinge Lever',
      'High precision snap action mechanism',
      'Reliable switching performance'
    ],
    specs: [
      { name: 'Brand', value: 'Repon' },
      { name: 'Type', value: 'Micro Switch' }
    ]
  },
  {
    id: 'repon-cm18-3008pc',
    name: 'Repon Capacitive Proximity Sensor RP-CM18-3008PC',
    category: 'Repon Items',
    brand: 'Repon',
    image: '/images/products/repon_cm18_3008pc.jpg',
    description: 'Repon RP-CM18-3008PC capacitive proximity sensor. Designed for reliable detection of both metallic and non-metallic objects in industrial environments.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 11,
    features: [
      'Model: RP-CM18-3008PC',
      'Type: Capacitive Proximity Sensor',
      'Output: PNP',
      'Pre-wired cable connection'
    ],
    specs: [
      { name: 'Brand', value: 'Repon' },
      { name: 'Model', value: 'RP-CM18-3008PC' },
      { name: 'Type', value: 'Proximity Sensor' }
    ]
  },
  {
    id: 'omron-wlnj-th',
    name: 'Omron WLNJ-TH Limit Switch',
    category: 'Omron Items',
    brand: 'Omron',
    image: '/images/products/omron_wlnj_th.jpg',
    description: 'The Omron WLNJ-TH is a flexible rod spring actuator limit switch designed for versatile detection from any direction. Built for tough industrial use.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 28,
    features: [
      'Model: WLNJ-TH',
      'Actuator: Flexible Rod Spring',
      'High resistance to harsh environments',
      'Reliable multi-directional detection'
    ],
    specs: [
      { name: 'Brand', value: 'Omron' },
      { name: 'Model', value: 'WLNJ-TH' },
      { name: 'Type', value: 'Limit Switch' }
    ]
  },
  {
    id: 'ab-802t-atp',
    name: 'Allen-Bradley 802T-ATP Limit Switch',
    category: 'Allen-Bradley Items',
    brand: 'Allen-Bradley',
    image: '/images/products/ab_802t_atp.jpg',
    description: 'Allen-Bradley 802T-ATP heavy-duty plug-in limit switch. Known for exceptional durability and reliability in the most demanding industrial environments.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 42,
    features: [
      'Model: 802T-ATP',
      'Type: Oiltight Limit Switch',
      'Heavy-duty construction',
      'Plug-in design for easy replacement'
    ],
    specs: [
      { name: 'Brand', value: 'Allen-Bradley' },
      { name: 'Model', value: '802T-ATP' },
      { name: 'Type', value: 'Limit Switch' }
    ]
  }
`;

const productsEnd = data.lastIndexOf('];');
// Ensure trailing comma for previous element
let prodPreSlice = data.slice(0, productsEnd - 1);
if (!prodPreSlice.trim().endsWith(',')) {
    prodPreSlice += ',';
}
data = prodPreSlice + newProducts + data.slice(productsEnd - 1);

fs.writeFileSync('src/data.js', data);
console.log('Successfully added Repon, Omron, and AB items to data.js');
