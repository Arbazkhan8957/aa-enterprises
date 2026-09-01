const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ae81758f-a232-4551-9b50-3ccd74f83948\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const fileMap = {
  'media_1788272389236.png': 'jaibalaji_jlsspr.png',
  'media_1788272435043.png': 'jaibalaji_jlsl1.png',
  'media_1788272483319.png': 'jaibalaji_jlsla.png',
  'media_1788272609952.png': 'jaibalaji_jlstpr.png',
  'media_1788272646247.png': 'jaibalaji_micro_switches.png'
};

for (const [src, dest] of Object.entries(fileMap)) {
  if (fs.existsSync(path.join(srcDir, src))) {
    fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
    console.log(`Copied ${src} to ${dest}`);
  }
}

// Update data.js
let data = fs.readFileSync('src/data.js', 'utf8');

// Update categories
let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

const newCategory = {
  name: "JaiBalaJi Items",
  image: "/images/jaibalaji_micro_switches.png",
  description: "Durable and reliable JaiBalaJi electrical limit switches and micro switches."
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
    id: "jaibalaji-limit-jlsspr",
    name: "JaiBalaJi BC 9 Limit Switch JLSSPR",
    brand: "Jaibalaji",
    category: "JaiBalaJi Items",
    model: "JLSSPR",
    description: "JaiBalaJi BC 9 series 'T' limit switch (JLSSPR), IP-67 rated. Features a side push roller plunger, 1NO+1NC contacts, 10A thermal current capacity.",
    image: "/images/jaibalaji_jlsspr.png",
    features: [
      "Type: Side Push Roller Plunger",
      "Protection: IP-67",
      "Contacts: 1 NO + 1 NC"
    ],
    specs: [
      { name: "Model", value: "JLSSPR" },
      { name: "Thermal Current", value: "10A" }
    ],
    voltage: "415V AC / 30V DC",
    current: "1.5A AC15 / 10A Thermal",
    mounting: "Panel/Surface"
  },
  {
    id: "jaibalaji-limit-jlsl1",
    name: "JaiBalaJi BC 9 Limit Switch JLSL1",
    brand: "Jaibalaji",
    category: "JaiBalaJi Items",
    model: "JLSL1",
    description: "JaiBalaJi BC 9 series limit switch (JLSL 1), IP-67 rated. Features a standard adjustable roller lever arm for industrial machinery positioning.",
    image: "/images/jaibalaji_jlsl1.png",
    features: [
      "Type: Standard Roller Lever",
      "Protection: IP-67",
      "Contacts: 1 NO + 1 NC"
    ],
    specs: [
      { name: "Model", value: "JLSL1" },
      { name: "Thermal Current", value: "10A" }
    ],
    voltage: "415V AC / 30V DC",
    current: "1.5A AC15 / 10A Thermal",
    mounting: "Panel/Surface"
  },
  {
    id: "jaibalaji-limit-jlsla",
    name: "JaiBalaJi BC 9 Limit Switch JLSLA",
    brand: "Jaibalaji",
    category: "JaiBalaJi Items",
    model: "JLSLA",
    description: "JaiBalaJi BC 9 series limit switch (JLSLA), IP-67 rated. Features an adjustable length roller lever arm for flexible actuation.",
    image: "/images/jaibalaji_jlsla.png",
    features: [
      "Type: Adjustable Roller Lever",
      "Protection: IP-67",
      "Contacts: 1 NO + 1 NC"
    ],
    specs: [
      { name: "Model", value: "JLSLA" },
      { name: "Thermal Current", value: "10A" }
    ],
    voltage: "415V AC / 30V DC",
    current: "1.5A AC15 / 10A Thermal",
    mounting: "Panel/Surface"
  },
  {
    id: "jaibalaji-limit-jlstpr",
    name: "JaiBalaJi BC 9 Limit Switch JLSTPR",
    brand: "Jaibalaji",
    category: "JaiBalaJi Items",
    model: "JLSTPR",
    description: "JaiBalaJi BC 9 series 'T' limit switch (JLSTPR), IP-67 rated. Top push roller plunger type.",
    image: "/images/jaibalaji_jlstpr.png",
    features: [
      "Type: Top Push Roller Plunger",
      "Protection: IP-67",
      "Contacts: 1 NO + 1 NC"
    ],
    specs: [
      { name: "Model", value: "JLSTPR" },
      { name: "Thermal Current", value: "10A" }
    ],
    voltage: "415V AC / 30V DC",
    current: "1.5A AC15 / 10A Thermal",
    mounting: "Panel/Surface"
  },
  {
    id: "jaibalaji-micro-switches",
    name: "JaiBalaJi Micro Switches Series",
    brand: "Jaibalaji",
    category: "JaiBalaJi Items",
    model: "Various",
    description: "A comprehensive range of JaiBalaJi micro switches available in various actuation forms (plunger, roller lever, hinge lever). Designed for precision switching.",
    image: "/images/jaibalaji_micro_switches.png",
    features: [
      "Types: Plunger, Lever, Roller",
      "High precision switching",
      "Durable housing"
    ],
    specs: [
      { name: "Model", value: "Various" },
      { name: "Brand", value: "JaiBalaJi" }
    ],
    voltage: "240V AC",
    current: "Various",
    mounting: "Chassis Mount"
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
console.log('Successfully copied images and added JaiBalaJi items to data.js!');
