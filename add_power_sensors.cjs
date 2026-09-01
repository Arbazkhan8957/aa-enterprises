const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/788cbadc-9bd8-4953-a1bc-dc562f1b7250/.user_uploaded/';
const publicMediaDir = 'd:/aa-enterprises/public/media/';

const newProducts = [
  {
    id: 'power-sensor-black',
    name: 'Power Sensor Inductive Proximity Switch (Black)',
    category: 'Power Sensor Items',
    brand: 'Power Sensor',
    image: '/media/media_1788249124281.png',
    sourceFile: 'media_1788249124281.png',
    description: 'Product Overview: The Power Sensor Inductive Proximity Switch provides highly reliable non-contact detection of metallic objects. Featuring a rugged metal housing and a distinctive black sensing face, it is engineered for consistent performance in harsh industrial environments. Its fast switching frequency and robust cable connection make it ideal for automation, robotics, and assembly line applications where precise position sensing is critical.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 42,
    features: [
      'Non-contact metal detection',
      'Durable metal threaded housing',
      'High switching frequency',
      'IP67 rated for dust and water resistance',
      'Integrated heavy-duty cable'
    ],
    specs: [
      { name: 'Brand', value: 'Power Sensor' },
      { name: 'Type', value: 'Inductive Proximity' }
    ]
  },
  {
    id: 'power-sensor-orange-short',
    name: 'Power Sensor Inductive Proximity Switch (Orange)',
    category: 'Power Sensor Items',
    brand: 'Power Sensor',
    image: '/media/media_1788249092724.png',
    sourceFile: 'media_1788249092724.png',
    description: 'Product Overview: This compact Power Sensor Inductive Proximity Switch features a high-visibility orange sensing cap and a space-saving threaded barrel design. It is optimized for tight installation spaces in machinery and conveyors while delivering exceptional sensing accuracy and repeatability. Built to withstand vibration and mechanical shock, it ensures long-term operational stability.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 35,
    features: [
      'Compact short-barrel design',
      'High-visibility orange sensing face',
      'Excellent repeatability and accuracy',
      'Shock and vibration resistant',
      'Easy mounting with included lock nuts'
    ],
    specs: [
      { name: 'Brand', value: 'Power Sensor' },
      { name: 'Type', value: 'Inductive Proximity' }
    ]
  },
  {
    id: 'power-sensor-blue',
    name: 'Power Sensor Inductive Proximity Switch (Blue)',
    category: 'Power Sensor Items',
    brand: 'Power Sensor',
    image: '/media/media_1788249080446.png',
    sourceFile: 'media_1788249080446.png',
    description: 'Product Overview: Designed for precision and durability, the Power Sensor Inductive Proximity Switch with a blue sensing face offers extended sensing ranges for versatile industrial use. Equipped with a long, flexible connection cable, it simplifies routing in complex machine layouts. Its robust electrical protection circuits safeguard against short circuits and reverse polarity.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 50,
    features: [
      'Extended sensing distance capability',
      'Distinctive blue sensing cap',
      'Long, flexible multi-core cable',
      'Built-in short circuit protection',
      'Reverse polarity protection'
    ],
    specs: [
      { name: 'Brand', value: 'Power Sensor' },
      { name: 'Type', value: 'Inductive Proximity' }
    ]
  },
  {
    id: 'power-sensor-green',
    name: 'Power Sensor Inductive Proximity Switch (Green)',
    category: 'Power Sensor Items',
    brand: 'Power Sensor',
    image: '/media/media_1788249061782.png',
    sourceFile: 'media_1788249061782.png',
    description: 'Product Overview: The Power Sensor Inductive Proximity Switch (Green Cap) is a premium sensing solution for critical automation tasks. It boasts superior immunity to electromagnetic interference, ensuring stable detection even in noisy electrical environments. The high-quality threaded metal body allows for precise mechanical adjustment, making it a reliable choice for demanding position feedback loops.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 61,
    features: [
      'High immunity to electrical noise',
      'Premium green sensing face',
      'Precision threaded metal housing',
      'Stable temperature performance',
      'Ideal for critical position feedback'
    ],
    specs: [
      { name: 'Brand', value: 'Power Sensor' },
      { name: 'Type', value: 'Inductive Proximity' }
    ]
  },
  {
    id: 'power-sensor-heavy-duty',
    name: 'Power Sensor Inductive Proximity Switch (Heavy Duty)',
    category: 'Power Sensor Items',
    brand: 'Power Sensor',
    image: '/media/media_1788248971690.png',
    sourceFile: 'media_1788248971690.png',
    description: 'Product Overview: Engineered for the toughest industrial applications, this Heavy Duty Power Sensor features an extended metal housing and a thick, highly durable grey connection cable. It provides unmatched resistance to mechanical wear, cutting oils, and coolants. The high-visibility orange cap and rugged construction make it the ultimate choice for heavy machinery, metalworking, and outdoor installations.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 88,
    features: [
      'Extended heavy-duty metal housing',
      'Thick, oil-resistant grey cable',
      'Maximum resistance to cutting fluids',
      'High-visibility orange sensing cap',
      'Designed for extreme industrial environments'
    ],
    specs: [
      { name: 'Brand', value: 'Power Sensor' },
      { name: 'Type', value: 'Inductive Proximity' }
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
if (!data.includes('"name": "Power Sensor"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Power Sensor", "logo": "Power Sensor" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// 3. Ensure category exists
if (!data.includes('"name": "Power Sensor Items"')) {
  const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
  let preSlice = data.slice(0, categoriesEnd);
  if (!preSlice.trim().endsWith(',')) {
    preSlice += ',';
  }
  const newCategory = '\n  {\n' +
  '    "name": "Power Sensor Items",\n' +
  '    "image": "/media/media_1788249061782.png",\n' +
  '    "description": "High-precision inductive proximity switches and sensors."\n' +
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
console.log('Successfully added Power Sensor items to data.js');
