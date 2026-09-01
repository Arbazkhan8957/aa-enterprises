const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

// Helper to format names
function formatFanName(model, type, bearing) {
  return `Resonance ${model} 4.7" (120x38mm) ${type} Cooling Fan - ${bearing}`;
}

// Update existing ones
productsArray = productsArray.map(p => {
  if (p.id === 'fan-ra12038abh1') {
    p.name = formatFanName('RA12038ABH1', 'AC', 'Ball Bearing');
    p.features.unshift('Size: 4.7 Inch / 120x120x38mm (Industry Standard)');
  }
  if (p.id === 'fan-ra12038abhl') {
    p.name = formatFanName('RA12038ABHL', 'AC', 'Ball Bearing');
    p.features.unshift('Size: 4.7 Inch / 120x120x38mm (Industry Standard)');
  }
  if (p.id === 'fan-ra12038asl1') {
    p.name = formatFanName('RA12038ASL1', 'AC', 'Sleeve Bearing');
    p.features.unshift('Size: 4.7 Inch / 120x120x38mm (Industry Standard)');
  }
  if (p.id === 'fan-ra12038b2hsl') {
    p.name = formatFanName('RA12038B2HSL', 'AC', 'Ball Bearing');
    p.features.unshift('Size: 4.7 Inch / 120x120x38mm (Industry Standard)');
  }
  return p;
});

// New fans to add
const newFans = [
  {
    id: "fan-ra12038b12l",
    name: formatFanName('RA12038B12L', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA12038B12L",
    description: "The Resonance RA12038B12L is a highly efficient 12V DC cooling fan featuring premium ball bearings for an extended lifecycle and maximum reliability. Its standard 4.7-inch (120x38mm) frame makes it perfect for compact electronic enclosures, server chassis, and specialized low-voltage control panels requiring steady thermal management.",
    image: "/images/ra12038b12l.jpg",
    features: [
      "Size: 4.7 Inch / 120x120x38mm (Industry Standard)",
      "Model: RA12038B12L",
      "Bearing System: High-precision Ball Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Housing: Rugged, heat-resistant composite frame",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "4.7 Inch (120x120x38mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra12038b24h",
    name: formatFanName('RA12038B24H', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA12038B24H",
    description: "Built for industrial 24V DC systems, the Resonance RA12038B24H delivers powerful airflow and extreme durability. Utilizing top-tier ball bearings, it is engineered for continuous duty in heavy machinery, telecommunication racks, and automated control cabinets. Its 4.7-inch footprint ensures broad compatibility.",
    image: "/images/ra12038b24h.jpg",
    features: [
      "Size: 4.7 Inch / 120x120x38mm (Industry Standard)",
      "Model: RA12038B24H",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Housing: Rugged, heat-resistant composite frame",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "4.7 Inch (120x120x38mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra12038s2hsl",
    name: formatFanName('RA12038S2HSL', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA12038S2HSL",
    description: "The Resonance RA12038S2HSL is a massive 22W AC cooling fan utilizing a smooth sleeve bearing system. Designed for high thermal load environments operating on 220-240V AC, it delivers an enormous volume of air in a standard 4.7-inch (120mm) form factor, ideal for heavy industrial enclosures while remaining cost-effective.",
    image: "/images/ra12038s2hsl.jpg",
    features: [
      "Size: 4.7 Inch / 120x120x38mm (Industry Standard)",
      "Model: RA12038S2HSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Power Rating: Extreme 22W Output (0.14A)",
      "Housing: Rugged, heat-resistant composite frame",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "4.7 Inch (120x120x38mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "220-240V AC (22W)" }
    ],
    voltage: "220-240V AC",
    current: "0.14A (22W)",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra12038s12l",
    name: formatFanName('RA12038S12L', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA12038S12L",
    description: "An ultra-quiet and cost-effective 12V DC cooling solution. The Resonance RA12038S12L features a sleeve bearing system within a standard 4.7-inch (120x38mm) frame. It provides reliable airflow and thermal stability for general electronics, small enclosures, and standard consumer hardware.",
    image: "/images/ra12038s12l.jpg",
    features: [
      "Size: 4.7 Inch / 120x120x38mm (Industry Standard)",
      "Model: RA12038S12L",
      "Bearing System: Ultra-quiet Sleeve Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Housing: Durable thermoplastic construction",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "4.7 Inch (120x120x38mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
    mounting: "Panel Mount"
  }
];

// Check if these new fans are already in the array to avoid duplication
newFans.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Successfully updated all fans with inch sizes and added new DC/Sleeve fans!');
