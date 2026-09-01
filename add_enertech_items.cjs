const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/788cbadc-9bd8-4953-a1bc-dc562f1b7250/.user_uploaded/';
const publicMediaDir = 'd:/aa-enterprises/public/media/';

const newProducts = [
  {
    id: 'enertech-mccb',
    name: 'Enertech MCCB (ENM1-125L/3300)',
    category: 'Enertech Items',
    brand: 'Enertech',
    image: '/media/media_1788250056774.png',
    sourceFile: 'media_1788250056774.png',
    description: 'Product Overview: The Enertech ENM1-125L/3300 Molded Case Circuit Breaker (MCCB) is designed for superior electrical protection in demanding industrial networks. It provides reliable defense against overloads and short circuits, safeguarding critical electrical infrastructure. Its robust molded case ensures high durability and thermal stability under heavy continuous loads.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 24,
    features: [
      'High breaking capacity',
      'Robust molded case design',
      'Reliable overload and short circuit protection',
      'Compact footprint for panel mounting',
      'Thermal stability under load'
    ],
    specs: [
      { name: 'Brand', value: 'Enertech' },
      { name: 'Type', value: 'MCCB' }
    ]
  },
  {
    id: 'enertech-power-panel',
    name: 'Enertech Power Control Panel',
    category: 'Enertech Items',
    brand: 'Enertech',
    image: '/media/media_1788250039270.png',
    sourceFile: 'media_1788250039270.png',
    description: 'Product Overview: The Enertech Power Control Panel offers a centralized, highly secure solution for industrial power distribution and management. Featuring a ruggedized, lockable enclosure with integrated digital controllers and safety disconnects, it is built to handle high-power applications while prioritizing operator safety and system reliability.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 15,
    features: [
      'Rugged industrial enclosure',
      'Integrated digital control interface',
      'High-visibility safety disconnect switch',
      'Comprehensive fault monitoring',
      'Built-in ventilation for thermal management'
    ],
    specs: [
      { name: 'Brand', value: 'Enertech' },
      { name: 'Type', value: 'Control Panel' }
    ]
  },
  {
    id: 'enertech-cable-reel',
    name: 'Enertech Industrial Cable Extension Reel',
    category: 'Enertech Items',
    brand: 'Enertech',
    image: '/media/media_1788249954936.png',
    sourceFile: 'media_1788249954936.png',
    description: 'Product Overview: Bring power wherever you need it with the Enertech Industrial Cable Extension Reel. Built with a heavy-duty steel frame and a high-visibility yellow drum, it features multiple universal sockets with built-in overload protection. The smooth winding mechanism and ergonomic handle make it perfect for construction sites, large workshops, and maintenance depots.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 42,
    features: [
      'Heavy-duty steel tubular frame',
      'Multiple universal power sockets',
      'Built-in overload circuit breaker',
      'Smooth cable winding mechanism',
      'High-visibility industrial yellow finish'
    ],
    specs: [
      { name: 'Brand', value: 'Enertech' },
      { name: 'Type', value: 'Cable Reel' }
    ]
  },
  {
    id: 'enertech-led-indicators-1',
    name: 'Enertech LED Panel Indicators (Group 1)',
    category: 'Enertech Items',
    brand: 'Enertech',
    image: '/media/media_1788249848391.png',
    sourceFile: 'media_1788249848391.png',
    description: 'Product Overview: Enertech LED Panel Indicators provide clear, high-brightness visual feedback for industrial control panels. Available in standard colors (Red, Green, Blue, Yellow), these 22.5mm mount indicators utilize long-life LED technology for excellent visibility even in brightly lit manufacturing environments. They feature low power consumption and high vibration resistance.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 56,
    features: [
      'Ultra-bright LED illumination',
      'Standard 22.5mm panel mounting',
      'Long operational lifespan',
      'Vibration and shock resistant',
      'Available in multiple colors'
    ],
    specs: [
      { name: 'Brand', value: 'Enertech' },
      { name: 'Type', value: 'Panel Indicator' }
    ]
  },
  {
    id: 'enertech-led-indicators-2',
    name: 'Enertech LED Panel Indicators (Group 2)',
    category: 'Enertech Items',
    brand: 'Enertech',
    image: '/media/media_1788249823554.png',
    sourceFile: 'media_1788249823554.png',
    description: 'Product Overview: Ensure precise machine status monitoring with Enertech LED Panel Indicators. This group features compact, ruggedized indicator lights designed for fast installation and reliable performance. The robust housing protects the internal LED circuitry from dust and moisture, making them ideal for integration into heavy machinery and automated control stations.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 38,
    features: [
      'High-intensity LED output',
      'Compact and rugged housing',
      'Dust and moisture resistant design',
      'Fast and secure panel mounting',
      'Energy efficient operation'
    ],
    specs: [
      { name: 'Brand', value: 'Enertech' },
      { name: 'Type', value: 'Panel Indicator' }
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
if (!data.includes('"name": "Enertech"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Enertech", "logo": "Enertech" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 3. Ensure category exists
if (!data.includes('"name": "Enertech Items"')) {
  const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
  let preSlice = data.slice(0, categoriesEnd);
  if (!preSlice.trim().endsWith(',')) {
    preSlice += ',';
  }
  const newCategory = '\n  {\n' +
  '    "name": "Enertech Items",\n' +
  '    "image": "/media/media_1788250056774.png",\n' +
  '    "description": "Enertech MCCBs, Panels, and Industrial Accessories."\n' +
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
console.log('Successfully added Enertech items to data.js');
