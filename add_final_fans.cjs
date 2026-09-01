const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra12038s24l",
    name: formatFanName('RA12038S24L', '4.7 Inch', '120x38mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA12038S24L",
    description: "The Resonance RA12038S24L is a dependable 24V DC cooling fan utilizing a smooth sleeve bearing system. With its standard 4.7-inch (120x38mm) size, it provides ultra-quiet, continuous cooling for control panels and automation cabinets where low acoustics and cost-effective thermal management are paramount.",
    image: "/images/ra12038s24l.jpg",
    features: [
      "Size: 4.7 Inch / 120x120x38mm (Industry Standard)",
      "Model: RA12038S24L",
      "Bearing System: Ultra-quiet Sleeve Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Housing: Durable thermoplastic construction",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "4.7 Inch (120x120x38mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251ab12",
    name: formatFanName('RA17251AB12', '6 Inch', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251AB12",
    description: "The Resonance RA17251AB12 is a massive, heavy-duty 6-inch (172x51mm) 12V DC cooling fan engineered for high-capacity thermal extraction. Utilizing premium ball bearings, it delivers maximum airflow and an extended lifespan. This is the ideal solution for large telecommunication racks, welding equipment, and high-heat industrial machinery.",
    image: "/images/ra17251ab12.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251AB12",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251ab12s",
    name: formatFanName('RA17251AB12S', '6 Inch', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251AB12S",
    description: "The Resonance RA17251AB12S provides the enormous airflow of a 6-inch (172x51mm) frame with the quiet operation and cost-effectiveness of a sleeve bearing system. Running on 12V DC, this fan is perfect for large server enclosures and general industrial ventilation where noise reduction is preferred.",
    image: "/images/ra17251ab12s.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251AB12S",
      "Bearing System: Smooth-running Sleeve Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251ab24",
    name: formatFanName('RA17251AB24', '6 Inch', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251AB24",
    description: "Engineered for heavy industrial 24V DC environments, the Resonance RA17251AB24 is a 6-inch (172x51mm) cooling powerhouse. Featuring high-precision ball bearings, it is designed for continuous, relentless operation in the most punishing thermal environments, ensuring maximum heat dissipation for critical automated systems.",
    image: "/images/ra17251ab24.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251AB24",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Application: Extreme thermal load management",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Panel Mount"
  }
];

newFans.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Successfully added the remaining 4 unique fans with correct inch sizes and bearing types!');
