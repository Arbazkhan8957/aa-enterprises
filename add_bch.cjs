const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ae81758f-a232-4551-9b50-3ccd74f83948\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const fileMap = {
  'media_1788272980124.png': 'bch_limit_switch.png',
  'media_1788272993008.png': 'bch_contactor_n1n.png',
  'media_1788273005125.png': 'bch_intelligent_controller.png',
  'media_1788273015694.png': 'bch_contactor_ca20n.png',
  'media_1788273035426.png': 'bch_spp_pro.png'
};

for (const [src, dest] of Object.entries(fileMap)) {
  if (fs.existsSync(path.join(srcDir, src))) {
    fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
    console.log(`Copied ${src} to ${dest}`);
  }
}

// Update data.js
let data = fs.readFileSync('src/data.js', 'utf8');

let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

const newCategory = {
  name: "BCH Items",
  image: "/images/bch_contactor_n1n.png",
  description: "BCH Electric Limited industrial control products including contactors, limit switches, and intelligent controllers."
};

if (!categoriesArray.find(c => c.name === newCategory.name)) {
  categoriesArray.push(newCategory);
}

const newCategoriesData = `export const categories = ${JSON.stringify(categoriesArray, null, 2)};\n`;
data = data.replace(/export const categories = \[\s*([\s\S]*?)\s*\];/, newCategoriesData.trim());

// Update products
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newProducts = [
  {
    id: "bch-limit-switch-series",
    name: "BCH Limit Switch",
    brand: "BCH",
    category: "BCH Items",
    model: "Standard Series",
    description: "BCH industrial limit switches offering high precision and durability for position sensing in rugged environments.",
    image: "/images/bch_limit_switch.png",
    features: [
      "Actuator: Roller Lever",
      "Protection: IP67 Enclosure",
      "Robust metal housing"
    ],
    specs: [
      { name: "Type", value: "Limit Switch" },
      { name: "Brand", value: "BCH" }
    ],
    voltage: "415V AC",
    current: "Standard",
    mounting: "Surface Mount"
  },
  {
    id: "bch-contactor-n1n",
    name: "BCH Contactor NHD Size 1",
    brand: "BCH",
    category: "BCH Items",
    model: "N1N",
    description: "BCH NHD Size 1 Contactor (CAT. N1N) for reliable motor control and power switching. 40A AC3 rating.",
    image: "/images/bch_contactor_n1n.png",
    features: [
      "Size: 1 (40 AMP)",
      "Coil: 220-240V AC",
      "High electrical life"
    ],
    specs: [
      { name: "Model", value: "N1N" },
      { name: "Current (Ith)", value: "50A" },
      { name: "AC3 Rating", value: "40A" }
    ],
    voltage: "415V 50Hz (Ui 660V)",
    current: "40A",
    mounting: "DIN/Panel Mount"
  },
  {
    id: "bch-intelligent-controller",
    name: "BCH M Intelligent Controller",
    brand: "BCH",
    category: "BCH Items",
    model: "M Series",
    description: "BCH M Series Intelligent Controller for advanced motor protection and control with digital display.",
    image: "/images/bch_intelligent_controller.png",
    features: [
      "Digital display interface",
      "Integrated motor protection",
      "Push button controls"
    ],
    specs: [
      { name: "Type", value: "Intelligent Controller" },
      { name: "Series", value: "M Series" }
    ],
    voltage: "415V AC",
    current: "Various ratings",
    mounting: "Panel Mount"
  },
  {
    id: "bch-contactor-ca20n",
    name: "BCH Contactor Citation Line",
    brand: "BCH",
    category: "BCH Items",
    model: "CA20N",
    description: "BCH Citation Line Contactor (CAT. CA20N) designed for efficient switching in industrial applications. 20A AC3 rating.",
    image: "/images/bch_contactor_ca20n.png",
    features: [
      "Citation Line Series",
      "Compact design",
      "Durable contacts"
    ],
    specs: [
      { name: "Model", value: "CA20N" },
      { name: "Current (Ith)", value: "35A" },
      { name: "AC3 Rating", value: "20A" }
    ],
    voltage: "415V 50Hz (Ui 660V)",
    current: "20A",
    mounting: "DIN/Panel Mount"
  },
  {
    id: "bch-spp-pro",
    name: "BCH SPP Pro Relay",
    brand: "BCH",
    category: "BCH Items",
    model: "SPP Pro",
    description: "BCH SPP Pro Single Phase Preventer with built-in On Delay timer for motor protection.",
    image: "/images/bch_spp_pro.png",
    features: [
      "Single phase prevention",
      "On delay timer adjustment",
      "Manual/Auto bypass switch"
    ],
    specs: [
      { name: "Type", value: "Protection Relay" },
      { name: "Model", value: "SPP Pro" }
    ],
    voltage: "415V AC 3-Phase",
    current: "Low Power Control",
    mounting: "Panel/Surface"
  }
];

newProducts.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newProductsData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newProductsData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully copied images and added BCH items to data.js!');
