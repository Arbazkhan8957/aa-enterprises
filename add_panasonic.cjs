const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ae81758f-a232-4551-9b50-3ccd74f83948\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const fileMap = {
  'media_1788273192208.png': 'panasonic_volume_controller.png',
  'media_1788273222561.png': 'panasonic_yd400kr2.png',
  'media_1788273250032.png': 'panasonic_yd500gr3.png',
  'media_1788273265242.png': 'panasonic_pm4hm_timer.png',
  'media_1788273293744.png': 'panasonic_yd400at.png'
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
  name: "Panasonic",
  image: "/images/panasonic_yd400kr2.png",
  description: "High-quality Panasonic industrial equipment, including welding machines, timers, and control devices."
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
    id: "panasonic-volume-controller-wzvc101",
    name: "Panasonic Volume Controller WZ-VC101",
    brand: "Panasonic",
    category: "Panasonic",
    model: "WZ-VC101",
    description: "Panasonic WZ-VC101 wall-mounted volume controller for public address and audio systems.",
    image: "/images/panasonic_volume_controller.png",
    features: [
      "Wall mountable",
      "Rotary knob adjustment",
      "Brushed metal finish plate"
    ],
    specs: [
      { name: "Model", value: "WZ-VC101" },
      { name: "Brand", value: "Panasonic" }
    ],
    voltage: "Standard Audio Line",
    current: "Low Power",
    mounting: "Wall Flush Mount"
  },
  {
    id: "panasonic-welding-yd400kr2",
    name: "Panasonic Welding Machine YD-400KR2",
    brand: "Panasonic",
    category: "Panasonic",
    model: "YD-400KR2",
    description: "Panasonic YD-400KR2 MIG/MAG industrial welding machine with separate wire feeder.",
    image: "/images/panasonic_yd400kr2.png",
    features: [
      "MIG/MAG Welding Process",
      "Separate wire feeder unit",
      "High reliability and duty cycle"
    ],
    specs: [
      { name: "Model", value: "YD-400KR2" },
      { name: "Type", value: "Welding Power Source" }
    ],
    voltage: "415V AC 3-Phase",
    current: "400A Output",
    mounting: "Floor Standing"
  },
  {
    id: "panasonic-welding-yd500gr3",
    name: "Panasonic Welding Machine YD-500GR3",
    brand: "Panasonic",
    category: "Panasonic",
    model: "YD-500GR3",
    description: "Panasonic YD-500GR3 fully digital inverter CO2/MAG/MIG welding machine for precision welding.",
    image: "/images/panasonic_yd500gr3.png",
    features: [
      "Digital Inverter Control",
      "High precision arc stability",
      "Multi-process capability"
    ],
    specs: [
      { name: "Model", value: "YD-500GR3" },
      { name: "Type", value: "Digital Inverter Welder" }
    ],
    voltage: "415V AC 3-Phase",
    current: "500A Output",
    mounting: "Floor Standing"
  },
  {
    id: "panasonic-timer-pm4hm",
    name: "Panasonic PM4H-M Timer",
    brand: "Panasonic",
    category: "Panasonic",
    model: "PM4H-M",
    description: "Panasonic PM4H-M series multi-range analog timer relay for industrial automation and control panels.",
    image: "/images/panasonic_pm4hm_timer.png",
    features: [
      "Analog dial adjustment",
      "Multiple time ranges",
      "Compact DIN rail / panel mount"
    ],
    specs: [
      { name: "Model", value: "PM4H-M" },
      { name: "Type", value: "Multi-Range Timer" }
    ],
    voltage: "100-240V AC",
    current: "Relay Output 5A",
    mounting: "DIN/Panel Mount"
  },
  {
    id: "panasonic-welding-yd400at",
    name: "Panasonic DC Inverter Welder YD-400AT3DJV",
    brand: "Panasonic",
    category: "Panasonic",
    model: "YD-400AT3DJV",
    description: "Panasonic YD-400AT3DJV DC inverter TIG/MMA welding machine for high-quality industrial fabrication.",
    image: "/images/panasonic_yd400at.png",
    features: [
      "DC Inverter Technology",
      "TIG and MMA capable",
      "Compact and efficient design"
    ],
    specs: [
      { name: "Model", value: "YD-400AT3DJV" },
      { name: "Type", value: "DC Inverter TIG" }
    ],
    voltage: "415V AC 3-Phase",
    current: "400A Output",
    mounting: "Portable Floor Standing"
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
console.log('Successfully copied images and added Panasonic items to data.js!');
