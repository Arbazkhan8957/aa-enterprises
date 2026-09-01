const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra17251ab24s",
    name: formatFanName('RA17251AB24S', '6 Inch', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251AB24S",
    description: "The Resonance RA17251AB24S is a high-capacity 6-inch (172x51mm) cooling fan designed for robust 24V DC systems. Utilizing a sleeve bearing system, it strikes an exceptional balance between massive airflow and quieter operation. It is specifically designed to provide cost-effective thermal extraction for large electrical panels and automation cabinets without sacrificing performance.",
    image: "/images/ra17251ab24s.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251AB24S",
      "Bearing System: Smooth-running Sleeve Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251abh",
    name: formatFanName('RA17251ABH', '6 Inch', '172x51mm', 'AC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251ABH",
    description: "The Resonance RA17251ABH is an industrial-grade 110V AC cooling powerhouse. Measuring at a massive 6 inches (172x51mm) and driven by premium ball bearings, it generates torrential airflow to rapidly cool high-density server racks and extreme-heat heavy machinery where 110V standard mains power is utilized.",
    image: "/images/ra17251abh.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251ABH",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 110V AC (50/60Hz)",
      "Current Draw: 0.22A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "110V AC" }
    ],
    voltage: "110V AC",
    current: "0.22A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251abhl",
    name: formatFanName('RA17251ABHL', '6 Inch', '172x51mm', 'AC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251ABHL",
    description: "Engineered for 220-240V AC systems, the Resonance RA17251ABHL provides devastatingly effective thermal management. This 6-inch (172x51mm) fan features high-precision ball bearings for relentless 24/7 operation in the most demanding industrial environments, ensuring your critical automation equipment never succumbs to heat.",
    image: "/images/ra17251abhl.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251ABHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Application: Extreme thermal load management",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "220-240V AC" }
    ],
    voltage: "220-240V AC",
    current: "0.14A",
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
console.log('Successfully added the remaining 3 unique 6-inch AC/DC fans!');
