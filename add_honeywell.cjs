const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ae81758f-a232-4551-9b50-3ccd74f83948\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const fileMap = {
  'media_1788272820153.png': 'honeywell_vfd_group.png',
  'media_1788272830687.png': 'honeywell_omnipoint.png',
  'media_1788272840586.png': 'honeywell_micro_switch.png',
  'media_1788272854898.png': 'honeywell_thermostat.png',
  'media_1788272873573.png': 'honeywell_vfd_single.png'
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
  name: "HoneyWell Items",
  image: "/images/honeywell_vfd_group.png",
  description: "Advanced Honeywell industrial automation solutions including VFDs, gas detectors, and control switches."
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
    id: "honeywell-vfd-series",
    name: "Honeywell Variable Frequency Drives (VFD)",
    brand: "Honeywell",
    category: "HoneyWell Items",
    model: "VFD Series",
    description: "Honeywell Variable Frequency Drives for efficient motor speed control and energy savings in HVAC and industrial applications.",
    image: "/images/honeywell_vfd_group.png",
    features: [
      "Application: HVAC and Industrial",
      "Control: Advanced motor speed control",
      "Efficiency: High energy saving potential"
    ],
    specs: [
      { name: "Type", value: "Variable Frequency Drive" },
      { name: "Brand", value: "Honeywell" }
    ],
    voltage: "380-480V AC",
    current: "Various Ratings",
    mounting: "Wall/Panel Mount"
  },
  {
    id: "honeywell-omnipoint",
    name: "Honeywell OmniPoint Gas Detector",
    brand: "Honeywell",
    category: "HoneyWell Items",
    model: "OmniPoint",
    description: "Honeywell OmniPoint intelligent gas detector with touchscreen interface and advanced sensor technology for industrial safety.",
    image: "/images/honeywell_omnipoint.png",
    features: [
      "Interface: Touchscreen display",
      "Detection: Toxic and combustible gases",
      "Connectivity: Bluetooth and standard industrial protocols"
    ],
    specs: [
      { name: "Model", value: "OmniPoint" },
      { name: "Sensor", value: "Smart Sensor Module" }
    ],
    voltage: "24V DC",
    current: "Low Power",
    mounting: "Wall/Pipe Mount"
  },
  {
    id: "honeywell-micro-switch-limit",
    name: "Honeywell Heavy Duty Limit Switch",
    brand: "Honeywell",
    category: "HoneyWell Items",
    model: "Micro Switch Series",
    description: "Honeywell heavy-duty industrial limit switch with roller lever. Built for rugged environments and precise actuation.",
    image: "/images/honeywell_micro_switch.png",
    features: [
      "Actuator: Roller Lever",
      "Housing: Rugged die-cast metal",
      "Protection: IP67 / NEMA sealing"
    ],
    specs: [
      { name: "Type", value: "Heavy Duty Limit Switch" },
      { name: "Contacts", value: "SPDT / DPDT" }
    ],
    voltage: "Up to 600V AC",
    current: "10A Continuous",
    mounting: "Surface Mount"
  },
  {
    id: "honeywell-thermostat",
    name: "Honeywell Industrial Thermostat",
    brand: "Honeywell",
    category: "HoneyWell Items",
    model: "Capillary Thermostat",
    description: "Honeywell robust industrial capillary thermostat for precise temperature control in heating and cooling systems.",
    image: "/images/honeywell_thermostat.png",
    features: [
      "Sensing: Capillary tube and bulb",
      "Adjustment: External dial",
      "Enclosure: Protective industrial housing"
    ],
    specs: [
      { name: "Type", value: "Temperature Controller" },
      { name: "Range", value: "Adjustable" }
    ],
    voltage: "230V AC",
    current: "Standard Relay Output",
    mounting: "Wall/Surface Mount"
  },
  {
    id: "honeywell-vfd-single",
    name: "Honeywell Compact VFD Drive",
    brand: "Honeywell",
    category: "HoneyWell Items",
    model: "Compact Series",
    description: "Honeywell compact Variable Frequency Drive with integrated keypad display for simple setup and reliable motor control.",
    image: "/images/honeywell_vfd_single.png",
    features: [
      "Interface: Built-in LCD Keypad",
      "Design: Compact footprint",
      "Setup: Easy commissioning"
    ],
    specs: [
      { name: "Type", value: "Compact VFD" },
      { name: "Interface", value: "Local Keypad" }
    ],
    voltage: "380-480V AC",
    current: "Various",
    mounting: "DIN/Panel Mount"
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
console.log('Successfully copied images and added HoneyWell items to data.js!');
