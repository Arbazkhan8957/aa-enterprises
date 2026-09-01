const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/788cbadc-9bd8-4953-a1bc-dc562f1b7250/.user_uploaded/';
const publicMediaDir = 'd:/aa-enterprises/public/media/';

const newProducts = [
  {
    id: 'lnt-single-pole-mcb',
    name: 'L&T Single Pole MCB (C-Curve)',
    category: 'L&T Items',
    brand: 'L&T',
    image: '/media/media_1788248806903.png',
    sourceFile: 'media_1788248806903.png',
    description: 'Product Overview: The L&T Single Pole Miniature Circuit Breaker (MCB) offers reliable protection against short circuits and overloads. Featuring a C-curve trip characteristic, it is ideal for commercial and industrial applications with moderate inrush currents. Its compact, din-rail mountable design ensures easy installation in standard distribution boards, providing essential safety for critical electrical circuits.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 65,
    features: [
      'Type: Single Pole Miniature Circuit Breaker',
      'Trip Curve: Type C',
      'High breaking capacity',
      'Finger-proof terminals for safe wiring',
      'DIN-rail mountable'
    ],
    specs: [
      { name: 'Brand', value: 'L&T' },
      { name: 'Type', value: 'MCB' }
    ]
  },
  {
    id: 'lnt-mpower-plus-relay',
    name: 'L&T MPower+ Motor Protection Relay',
    category: 'L&T Items',
    brand: 'L&T',
    image: '/media/media_1788248796146.png',
    sourceFile: 'media_1788248796146.png',
    description: 'Product Overview: The L&T MPower+ is an advanced, microprocessor-based motor protection relay designed to safeguard critical three-phase motors. It continuously monitors voltage, current, and phase conditions, instantly detecting anomalies such as phase loss, unbalance, and thermal overloads. Equipped with wireless configuration capabilities and a compact footprint, it minimizes motor burnout risks and operational downtime.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 24,
    features: [
      'Comprehensive motor protection',
      'Microprocessor-based high accuracy',
      'Phase loss and unbalance detection',
      'Wireless/Smart configuration support',
      'Wide operating voltage range'
    ],
    specs: [
      { name: 'Brand', value: 'L&T' },
      { name: 'Type', value: 'Protection Relay' }
    ]
  },
  {
    id: 'lnt-switchgear-collection',
    name: 'L&T Switchgear & Controlgear',
    category: 'L&T Items',
    brand: 'L&T',
    image: '/media/media_1788248789065.png',
    sourceFile: 'media_1788248789065.png',
    description: 'Product Overview: Explore our comprehensive range of L&T Switchgear and Controlgear, designed for ultimate industrial power control. This collection includes robust power contactors, high-capacity Molded Case Circuit Breakers (MCCB), and reliable rotary switches. Engineered for long electrical and mechanical lifespans, these components ensure safe, efficient power distribution and motor control in heavy-duty environments.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 112,
    features: [
      'Includes Contactors, MCCBs, and Switches',
      'High mechanical and electrical durability',
      'Compliance with international standards',
      'Optimized for industrial power distribution',
      'Modular and compact designs'
    ],
    specs: [
      { name: 'Brand', value: 'L&T' },
      { name: 'Type', value: 'Switchgear' }
    ]
  },
  {
    id: 'lnt-final-distribution-products',
    name: 'L&T Final Distribution Products',
    category: 'L&T Items',
    brand: 'L&T',
    image: '/media/media_1788248782541.png',
    sourceFile: 'media_1788248782541.png',
    description: 'Product Overview: Secure your electrical infrastructure with L&T Final Distribution Products. This essential lineup features Residual Current Circuit Breakers (RCCB) for superior earth leakage protection, Automatic Source Changeover with Current Limiter (ACCL), and heavy-duty industrial distribution boards. These solutions provide unmatched safety, seamless power switching, and organized circuit management for commercial complexes.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 58,
    features: [
      'RCCBs for earth leakage protection',
      'ACCL units for automatic source changeover',
      'Rugged metal distribution boards',
      'Easy to install and maintain',
      'Provides comprehensive electrical safety'
    ],
    specs: [
      { name: 'Brand', value: 'L&T' },
      { name: 'Type', value: 'Distribution' }
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
if (!data.includes('"name": "L&T"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "L&T", "logo": "L&T" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 3. Ensure category exists
if (!data.includes('"name": "L&T Items"')) {
  const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
  let preSlice = data.slice(0, categoriesEnd);
  if (!preSlice.trim().endsWith(',')) {
    preSlice += ',';
  }
  const newCategory = '\n  {\n' +
  '    "name": "L&T Items",\n' +
  '    "image": "/media/media_1788248806903.png",\n' +
  '    "description": "L&T Switchgear, Relays, and Distribution Products"\n' +
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
console.log('Successfully added L&T items to data.js');
