const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/788cbadc-9bd8-4953-a1bc-dc562f1b7250/.user_uploaded/';
const publicMediaDir = 'd:/aa-enterprises/public/media/';

const newProducts = [
  {
    id: 'selec-em2m-energy-meter',
    name: 'Selec EM2M Energy Meter',
    category: 'Selec Items',
    brand: 'Selec',
    image: '/media/media_1788250248143.png',
    sourceFile: 'media_1788250248143.png',
    description: 'Product Overview: The Selec EM2M is a highly accurate, DIN rail mounted energy meter designed for comprehensive monitoring of electrical consumption. Featuring a clear LCD display, it measures active energy (kWh) and is ideal for sub-metering, cost allocation, and energy management in commercial and industrial settings.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 34,
    features: [
      'Accurate kWh energy measurement',
      'Compact DIN rail mount design',
      'Clear digital LCD display',
      'Ideal for sub-metering applications',
      'Robust industrial build quality'
    ],
    specs: [
      { name: 'Brand', value: 'Selec' },
      { name: 'Type', value: 'Energy Meter' }
    ]
  },
  {
    id: 'selec-tps50-24-smps',
    name: 'Selec TPS50-24 SMPS',
    category: 'Selec Items',
    brand: 'Selec',
    image: '/media/media_1788250244229.png',
    sourceFile: 'media_1788250244229.png',
    description: 'Product Overview: The Selec TPS50-24 is a rugged Switch Mode Power Supply (SMPS) engineered for reliable DC power delivery in automation systems. Providing a stable 24V output with high efficiency, it features short-circuit and overload protection, ensuring your sensitive PLC and control components operate safely without interruption.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 41,
    features: [
      'Stable 24V DC output',
      'High operating efficiency',
      'Built-in short-circuit protection',
      'Overload and thermal protection',
      'Compact footprint for panel mounting'
    ],
    specs: [
      { name: 'Brand', value: 'Selec' },
      { name: 'Type', value: 'SMPS' }
    ]
  },
  {
    id: 'selec-mibrx-plc',
    name: 'Selec MiBRX Micro PLC',
    category: 'Selec Items',
    brand: 'Selec',
    image: '/media/media_1788250240196.png',
    sourceFile: 'media_1788250240196.png',
    description: 'Product Overview: The Selec MiBRX is a versatile and compact Micro Programmable Logic Controller (PLC) perfect for small to medium-scale automation tasks. With modular slot architecture, a built-in LCD for local diagnostics, and flexible I/O configurations, it simplifies complex control logic while saving valuable panel space.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 19,
    features: [
      'Compact micro PLC architecture',
      'Integrated LCD for local diagnostics',
      'Modular slot-based expansion',
      'Flexible digital and analog I/O',
      'Easy-to-use programming interface'
    ],
    specs: [
      { name: 'Brand', value: 'Selec' },
      { name: 'Type', value: 'PLC' }
    ]
  },
  {
    id: 'selec-automation-accessories',
    name: 'Selec Automation & Control Accessories',
    category: 'Selec Items',
    brand: 'Selec',
    image: '/media/media_1788250232217.png',
    sourceFile: 'media_1788250232217.png',
    description: 'Product Overview: A comprehensive selection of industrial automation and control accessories, featuring Selec timing relays alongside premium switchgear components. This versatile collection includes industrial plugs, contactors, distribution boards, push buttons, and heavy-duty cabling essentials, providing everything needed for complete panel building and machine integration.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 72,
    features: [
      'Comprehensive range of control components',
      'Includes premium Selec relays and meters',
      'High-quality industrial switchgear',
      'Essential panel building accessories',
      'Durable construction for harsh environments'
    ],
    specs: [
      { name: 'Brand', value: 'Selec & Assorted' },
      { name: 'Type', value: 'Control Accessories' }
    ]
  },
  {
    id: 'selec-800xc-timer',
    name: 'Selec 800XC Timer Relay',
    category: 'Selec Items',
    brand: 'Selec',
    image: '/media/media_1788250222526.png',
    sourceFile: 'media_1788250222526.png',
    description: 'Product Overview: The Selec 800XC is a highly versatile, multi-function analog timer relay designed for precise process control. Featuring a wide range of selectable time ranges and operating modes (such as ON delay, OFF delay, and cyclic), this slimline DIN rail timer offers incredible flexibility for sequencing and timing applications in automated machinery.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 85,
    features: [
      'Multi-function timing modes',
      'Wide selectable time ranges',
      'Slimline DIN rail mounting',
      'Easy-to-read analog dial setting',
      'High repeat accuracy'
    ],
    specs: [
      { name: 'Brand', value: 'Selec' },
      { name: 'Type', value: 'Timer Relay' }
    ]
  }
];

// 1. Copy images
newProducts.forEach(prod => {
  const src = path.join(userUploadedDir, prod.sourceFile);
  const dest = path.join(publicMediaDir, prod.sourceFile);
  if (fs.existsSync(src) && !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log('Copied ' + prod.sourceFile);
  }
});

let data = fs.readFileSync('src/data.js', 'utf8');

// 2. Ensure brand exists
if (!data.includes('"name": "Selec"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Selec", "logo": "Selec" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 3. Ensure category exists
if (!data.includes('"name": "Selec Items"')) {
  const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
  let preSlice = data.slice(0, categoriesEnd);
  if (!preSlice.trim().endsWith(',')) {
    preSlice += ',';
  }
  const newCategory = '\n  {\n' +
  '    "name": "Selec Items",\n' +
  '    "image": "/media/media_1788250240196.png",\n' +
  '    "description": "Selec Meters, PLCs, SMPS, and Timers."\n' +
  '  },';
  data = preSlice + newCategory + data.slice(categoriesEnd);
}

// 4. Add products
const productsEnd = data.lastIndexOf('];');
let prodPreSlice = data.slice(0, productsEnd - 1);
if (!prodPreSlice.trim().endsWith(',')) {
  prodPreSlice += ',';
}

let newProductsStr = '';
newProducts.forEach((p, index) => {
  newProductsStr += '\n  {\n';
  newProductsStr += '    "id": "' + p.id + '",\n';
  newProductsStr += '    "name": "' + p.name + '",\n';
  newProductsStr += '    "category": "' + p.category + '",\n';
  newProductsStr += '    "brand": "' + p.brand + '",\n';
  newProductsStr += '    "image": "' + p.image + '",\n';
  newProductsStr += '    "description": "' + p.description.replace(/'/g, "\\'") + '",\n';
  newProductsStr += '    "price": "' + p.price + '",\n';
  newProductsStr += '    "stock": "' + p.stock + '",\n';
  newProductsStr += '    "rating": ' + p.rating + ',\n';
  newProductsStr += '    "reviews": ' + p.reviews + ',\n';
  newProductsStr += '    "features": [\n';
  p.features.forEach((f, i) => {
    newProductsStr += '      "' + f + '"' + (i < p.features.length - 1 ? ',' : '') + '\n';
  });
  newProductsStr += '    ],\n';
  newProductsStr += '    "specs": [\n';
  p.specs.forEach((s, i) => {
    newProductsStr += '      { "name": "' + s.name + '", "value": "' + s.value + '" }' + (i < p.specs.length - 1 ? ',' : '') + '\n';
  });
  newProductsStr += '    ]\n';
  newProductsStr += '  }' + (index < newProducts.length - 1 ? ',' : '');
});

data = prodPreSlice + newProductsStr + '\n' + data.slice(productsEnd);

fs.writeFileSync('src/data.js', data);
console.log('Successfully added Selec items to data.js');
