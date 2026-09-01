const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// Update categories
let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

const newCategory = {
  name: "Siemens Items",
  image: "/images/siemens_collage.jpg",
  description: "High-quality Siemens electrical components including MCBs, Motor Starter Protectors, and PLCs."
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
    id: "siemens-3rv2-mmp",
    name: "Siemens SIRIUS 3RV2 Motor Starter Protector",
    brand: "Siemens",
    category: "Siemens Items",
    model: "3RV2",
    description: "Siemens SIRIUS 3RV2 Motor Starter Protector for reliable short-circuit and overload protection of motors.",
    image: "/images/siemens_3rv2.jpg",
    features: [
      "Series: SIRIUS 3RV2",
      "Function: Motor protection",
      "Mounting: DIN Rail"
    ],
    specs: [
      { name: "Model", value: "3RV2" },
      { name: "Type", value: "Motor Starter Protector" }
    ],
    voltage: "415V AC",
    current: "Various",
    mounting: "DIN Rail"
  },
  {
    id: "siemens-5sl6-mcb-2p",
    name: "Siemens 5SL6 MCB 2-Pole",
    brand: "Siemens",
    category: "Siemens Items",
    model: "5SL6",
    description: "Siemens 5SL6 Miniature Circuit Breaker (MCB), 2-Pole, B-Curve for residential and commercial applications.",
    image: "/images/siemens_5sl6.jpg",
    features: [
      "Poles: 2 Pole",
      "Curve: B Curve",
      "Capacity: 7500A Short Circuit"
    ],
    specs: [
      { name: "Model", value: "5SL6" },
      { name: "Poles", value: "2P" }
    ],
    voltage: "415V AC",
    current: "25A (Example)",
    mounting: "DIN Rail"
  },
  {
    id: "siemens-5sy4-mcb-4p",
    name: "Siemens 5SY4 MCB 4-Pole",
    brand: "Siemens",
    category: "Siemens Items",
    model: "5SY4",
    description: "Siemens 5SY4 Miniature Circuit Breaker (MCB), 4-Pole, designed for industrial and high-demand commercial installations.",
    image: "/images/siemens_5sy4.jpg",
    features: [
      "Poles: 4 Pole",
      "Application: Industrial",
      "Protection: Overload and short-circuit"
    ],
    specs: [
      { name: "Model", value: "5SY4" },
      { name: "Poles", value: "4P" }
    ],
    voltage: "415V AC",
    current: "Various",
    mounting: "DIN Rail"
  },
  {
    id: "siemens-logo-24ce",
    name: "Siemens LOGO! 24CE Logic Module",
    brand: "Siemens",
    category: "Siemens Items",
    model: "LOGO! 24CE",
    description: "Siemens LOGO! 24CE logic module with display, ethernet interface, and integrated web server for simple automation tasks.",
    image: "/images/siemens_logo_plc.jpg",
    features: [
      "Inputs: 8 Digital (4 can be used as analog)",
      "Outputs: 4 Transistor",
      "Interface: Ethernet/LAN",
      "Display: Integrated LCD"
    ],
    specs: [
      { name: "Model", value: "24CE" },
      { name: "Type", value: "Logic Module PLC" }
    ],
    voltage: "24V DC",
    current: "0.3A (Outputs)",
    mounting: "DIN Rail"
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
console.log('Successfully added Siemens category and items!');
