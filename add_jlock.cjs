const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// Update categories
let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

const newCategory = {
  name: "J-Lock Items",
  image: "/images/jlock_collage.jpg",
  description: "High-performance J-Lock electrical components including cooling fans, micro switches, and electromagnetic locks."
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
    id: "jlock-fan-220x220x60",
    name: "J-Lock Cooling Fan 220x220x60mm",
    brand: "J-lock",
    category: "J-Lock Items",
    model: "220X220X60",
    description: "J-Lock heavy-duty AC axial cooling fan, 220x220x60mm. Impedance protected for safe, continuous industrial cooling.",
    image: "/images/jlock_fan_220.jpg",
    features: [
      "Size: 220 x 220 x 60 mm",
      "Protection: Impedance Protected",
      "Certification: CE"
    ],
    specs: [
      { name: "Model", value: "220X220X60" },
      { name: "Size", value: "220x220x60 mm" }
    ],
    voltage: "220-240V AC 50/60Hz",
    current: "0.45A",
    mounting: "Panel/Screw Mount"
  },
  {
    id: "jlock-fan-120x120x38",
    name: "J-Lock Cooling Fan 120x120x38mm",
    brand: "J-lock",
    category: "J-Lock Items",
    model: "120X120X38",
    description: "J-Lock standard industrial AC cooling fan, 120x120x38mm. Impedance protected, designed for reliable enclosure ventilation.",
    image: "/images/jlock_fan_120.jpg",
    features: [
      "Size: 120 x 120 x 38 mm",
      "Protection: Impedance Protected",
      "Certification: CE"
    ],
    specs: [
      { name: "Model", value: "120X120X38" },
      { name: "Size", value: "120x120x38 mm" }
    ],
    voltage: "220-240V AC 50/60Hz",
    current: "0.18A",
    mounting: "Panel/Screw Mount"
  },
  {
    id: "jlock-fan-170x170x51",
    name: "J-Lock Cooling Fan 170x170x51mm",
    brand: "J-lock",
    category: "J-Lock Items",
    model: "170X170X51",
    description: "J-Lock high-flow AC cooling fan, 170x170x51mm. Impedance protected, ideal for electrical panels and machinery.",
    image: "/images/jlock_fan_170.jpg",
    features: [
      "Size: 170 x 170 x 51 mm",
      "Protection: Impedance Protected",
      "Certification: CE"
    ],
    specs: [
      { name: "Model", value: "170X170X51" },
      { name: "Size", value: "170x170x51 mm" }
    ],
    voltage: "220-240V AC 50/60Hz",
    current: "0.22A",
    mounting: "Panel/Screw Mount"
  },
  {
    id: "jlock-microswitch-z15gq22b",
    name: "J-Lock Micro Switch Z-15GQ22-B",
    brand: "J-lock",
    category: "J-Lock Items",
    model: "Z-15GQ22-B",
    description: "J-Lock Z-15GQ22-B industrial micro switch with roller plunger. Rated for 15A, suitable for heavy-duty switching applications.",
    image: "/images/jlock_microswitch_z15.jpg",
    features: [
      "Actuator: Roller Plunger",
      "Rating: 15A 125,250 or 480VAC",
      "Terminals: Screw terminals"
    ],
    specs: [
      { name: "Model", value: "Z-15GQ22-B" },
      { name: "Type", value: "Micro Switch" }
    ],
    voltage: "125/250/480V AC",
    current: "15A",
    mounting: "Panel/Chassis Mount"
  },
  {
    id: "jlock-electromagnetic-lock-dsn-iy",
    name: "J-Lock DSN-IY Indoor Electromagnetic Lock",
    brand: "J-lock",
    category: "J-Lock Items",
    model: "DSN-IY",
    description: "DSN-IY indoor electromagnetic lock by J-Lock, designed for secure and reliable access control in industrial indoor environments.",
    image: "/images/jlock_lock_dsniy.jpg",
    features: [
      "Type: Indoor Electromagnetic Lock",
      "Operation: Push button unlock / Manual override",
      "Application: Electrical switchgear and panels"
    ],
    specs: [
      { name: "Model", value: "DSN-IY" },
      { name: "Type", value: "Electromagnetic Lock" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Panel Mount"
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
console.log('Successfully added J-Lock category and items!');
