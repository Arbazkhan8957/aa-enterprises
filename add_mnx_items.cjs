const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/788cbadc-9bd8-4953-a1bc-dc562f1b7250/.user_uploaded/';
const publicMediaDir = 'd:/aa-enterprises/public/media/';

const newProducts = [
  {
    id: 'mnx-40-contactor',
    name: 'Lauritz Knudsen MNX 40 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250827212.png',
    sourceFile: 'media_1788250827212.png',
    description: 'Product Overview: The Lauritz Knudsen MNX 40 is a high-performance, 3-pole power contactor designed for demanding industrial applications. Engineered for switching motor loads and lighting circuits, it features a 240V AC coil and robust contacts that ensure reliable operation and extended electrical life under frequent switching conditions.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 21,
    features: [
      'AC3 Rating: 40A, 3-Pole configuration',
      '240V AC 50/60Hz operating coil',
      'High switching reliability for motor loads',
      'Compact design for space-saving panel layout',
      'Manufactured by Schneider Electric India'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 40' }
    ]
  },
  {
    id: 'mnx-32-contactor',
    name: 'Lauritz Knudsen MNX 32 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250664813.png',
    sourceFile: 'media_1788250664813.png',
    description: 'Product Overview: The MNX 32 power contactor by Lauritz Knudsen offers exceptional durability for medium-duty industrial switching. With its 3-pole design and reliable coil mechanism, it provides secure isolation and control for motors, pumps, and heavy machinery, minimizing downtime through its rugged construction.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 35,
    features: [
      'Rated for 32A AC3 industrial loads',
      'Reliable 3-Pole main contacts',
      'Integrated auxiliary contacts for control logic',
      'Excellent electrical and mechanical endurance',
      'Easy DIN rail or panel mounting'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 32' }
    ]
  },
  {
    id: 'mnx-25-contactor',
    name: 'Lauritz Knudsen MNX 25 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250653130.png',
    sourceFile: 'media_1788250653130.png',
    description: 'Product Overview: The Lauritz Knudsen MNX 25 is a robust, 25A power contactor built to handle the rigors of industrial environments. It features a 240V AC coil and provides safe, dependable switching for standard AC-3 motor applications, ensuring optimal protection and control within automation panels.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 42,
    features: [
      'AC3 Rating: 25A, 3-Pole',
      'Standard 240V AC 50/60Hz coil',
      'Finger-safe terminal design',
      'High resistance to shock and vibration',
      'CE marked and quality tested'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 25' }
    ]
  },
  {
    id: 'mnx-18-contactor',
    name: 'Lauritz Knudsen MNX 18 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250573992.png',
    sourceFile: 'media_1788250573992.png',
    description: 'Product Overview: The MNX 18 is a compact and efficient 18A power contactor from the trusted Lauritz Knudsen MNX series. Ideal for smaller motor loads and general-purpose switching, it delivers consistent performance with a 240V AC coil and features easily accessible terminals for quick installation.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 58,
    features: [
      'AC3 Rating: 18A, 3-Pole configuration',
      '240V AC operating coil',
      'Space-efficient design for smaller panels',
      'Low coil power consumption',
      'Durable thermoplastic housing'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 18' }
    ]
  },
  {
    id: 'mnx-12-contactor',
    name: 'Lauritz Knudsen MNX 12 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250550277.png',
    sourceFile: 'media_1788250550277.png',
    description: 'Product Overview: Designed for light to medium industrial duties, the Lauritz Knudsen MNX 12 power contactor provides reliable 12A switching. Its modular and compact architecture allows for easy integration into tight control panels while maintaining excellent thermal and electrical stability.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 44,
    features: [
      '12A continuous current rating for AC3 loads',
      '3-Pole main contact system',
      'Built-in auxiliary contacts',
      'Fast and straightforward DIN rail mounting',
      'High operational reliability'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 12' }
    ]
  },
  {
    id: 'mnx-9-contactor',
    name: 'Lauritz Knudsen MNX 9 Power Contactor',
    category: 'MNX Items',
    brand: 'Lauritz Knudsen',
    image: '/media/media_1788250534137.png',
    sourceFile: 'media_1788250534137.png',
    description: 'Product Overview: The Lauritz Knudsen MNX 9 is an ultra-compact 9A power contactor perfect for low-power motor control and auxiliary switching applications. Despite its small size, it boasts a robust 240V AC coil and delivers the heavy-duty reliability expected from the MNX series.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 67,
    features: [
      'AC3 Rating: 40A? No, AC3 9A Rating, 3-Pole',
      '240V AC 50/60Hz coil',
      'Ultra-compact footprint',
      'Ideal for low-power industrial switching',
      'Manufactured by Schneider Electric India'
    ],
    specs: [
      { name: 'Brand', value: 'Lauritz Knudsen' },
      { name: 'Model', value: 'MNX 9' }
    ]
  }
];

// Correct the MNX 9 feature string
newProducts[5].features[0] = 'AC3 Rating: 9A, 3-Pole';

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
if (!data.includes('"name": "Lauritz Knudsen"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Lauritz Knudsen", "logo": "Lauritz Knudsen" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 3. Ensure category exists
if (!data.includes('"name": "MNX Items"')) {
  const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
  let preSlice = data.slice(0, categoriesEnd);
  if (!preSlice.trim().endsWith(',')) {
    preSlice += ',';
  }
  const newCategory = '\n  {\n' +
  '    "name": "MNX Items",\n' +
  '    "image": "/media/media_1788250827212.png",\n' +
  '    "description": "Lauritz Knudsen MNX Series Power Contactors."\n' +
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
console.log('Successfully added MNX items to data.js');
