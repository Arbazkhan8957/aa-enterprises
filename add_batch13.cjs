const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-fan-22060-box",
    name: "SIBASS Square Cooling Fan (Retail Packaging)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-22060ABL",
    description: "The SIBASS SE-22060ABL 220mm industrial fan shown with its official retail packaging. The box highlights the extensive SIBASS cooling fan lineup, proving their commitment to thermal management across all industrial form factors.",
    image: "/images/sibass-fan-22060-box.jpg",
    features: [
      "Series Range: Packaging indicates availability in multiple standard industrial sizes",
      "Format: 220mm x 60mm high-velocity square profile",
      "Compliance: RoHS, CE, and ISO9001 certified components",
      "Protection: Includes safe transit packaging to prevent blade warping"
    ],
    specs: [
      { name: "Format", value: "Retail Box Presentation" },
      { name: "Size", value: "220x60mm" },
      { name: "Certifications", value: "CE / RoHS" }
    ],
    voltage: "220V AC",
    current: "0.7A",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-enclosure-ip66",
    name: "SIBASS IP66 Plug & Socket Enclosure",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Enclosure",
    description: "The SIBASS Industrial Plug and Socket Enclosure is a highly durable, IP66 rated isolation box. Designed to house circuit breakers and heavy-duty sockets safely outdoors, it features a clear locking window for quick visual inspection.",
    image: "/images/sibass-enclosure-ip66.jpg",
    features: [
      "Protection: IP66 rated against high-pressure water jets and total dust ingress",
      "Design: Modular internal DIN rail for custom MCB and socket layouts",
      "Window: Clear, UV-resistant polycarbonate inspection flap with locking tab",
      "Material: Heavy-duty, flame-retardant grey polymer shell"
    ],
    specs: [
      { name: "Type", value: "Distribution Enclosure" },
      { name: "IP Rating", value: "IP66" },
      { name: "Color", value: "Industrial Grey" }
    ],
    voltage: "Universal",
    current: "N/A (Housing)",
    mounting: "Surface / Wall Mount"
  },
  {
    id: "sibass-waterproof-connectors",
    name: "SIBASS 125A Waterproof Connectors (IP67)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "TYPE 045 / SE-Series",
    description: "A pair of massive SIBASS 125A heavy-duty connectors. Showing both a surface-mount socket and an inline cable plug, these red (415V 3-phase) connectors feature thick rubber sealing rings to guarantee an IP67 waterproof connection.",
    image: "/images/sibass-waterproof-connectors.jpg",
    features: [
      "Capacity: Extreme 125A current rating for heavy machinery",
      "Sealing: Deep-channel rubber O-rings ensure an IP67 hermetic seal",
      "Format: Includes both surface mount and trailing plug designs",
      "Build: High-impact thermoplastic resists cracking and chemical corrosion"
    ],
    specs: [
      { name: "Current", value: "125A" },
      { name: "Poles", value: "3P+N+E / 4P+E" },
      { name: "Rating", value: "IP67 Waterproof" }
    ],
    voltage: "240-415V~ 3-Phase",
    current: "125A",
    mounting: "Surface / Inline"
  },
  {
    id: "sibass-pendant-6way",
    name: "SIBASS Pendant Station (6-Way SE-XAC)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A4713",
    description: "The SIBASS SE-XAC-A4713 is a streamlined 6-button pendant station. Designed for overhead cranes, it features an emergency stop button alongside customizable black directional buttons in a high-visibility, ergonomic yellow housing.",
    image: "/images/sibass-pendant-6way.jpg",
    features: [
      "Layout: 1 Red Emergency Stop + 5 programmable directional/action buttons",
      "Grip: Contoured yellow ABS casing designed for secure one-handed operation",
      "Cable Entry: Thick, tiered rubber strain relief boot protects internal wiring",
      "Durability: Shock-resistant and sealed against factory dust"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A4713" },
      { name: "Buttons", value: "6-Way" },
      { name: "Strain Relief", value: "Tiered Rubber Boot" }
    ],
    voltage: "Universal",
    current: "Standard Load",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-bimetallic-lugs",
    name: "SIBASS Bimetallic Cable Lugs (DTL-2 Series)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "DTL-2 Series",
    description: "The SIBASS DTL-2 Series Bimetallic Lugs are engineered for safely terminating aluminum cables to copper busbars. The friction-welded copper ring and aluminum barrel prevent galvanic corrosion and ensure a perfect electrical connection.",
    image: "/images/sibass-bimetallic-lugs.jpg",
    features: [
      "Construction: Friction-welded Copper (Cu) ring to Aluminum (Al) barrel",
      "Range: Comprehensive sizing from 120mm² up to massive 400mm² cables",
      "Safety: Completely eliminates dangerous galvanic corrosion between dissimilar metals",
      "Installation: Deep barrel design for secure multi-point crimping"
    ],
    specs: [
      { name: "Series", value: "DTL-2" },
      { name: "Material", value: "Copper + Aluminum" },
      { name: "Sizes", value: "120mm² to 400mm²" }
    ],
    voltage: "High Voltage Rated",
    current: "Heavy Duty",
    mounting: "Crimped Termination"
  }
];

newItems.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added 5 new SIBASS items!');
