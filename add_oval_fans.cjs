const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra17251absl-110v",
    name: formatFanName('RA17251ABSL (110V)', '6 Inch', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251ABSL",
    description: "The Resonance RA17251ABSL (110V) is a heavy-duty 6-inch AC cooling fan engineered for 110V systems. By utilizing a sleeve bearing mechanism, it offers a quieter and more cost-effective alternative to ball bearing fans while still providing the massive airflow required for large enclosures, server racks, and industrial machinery.",
    image: "/images/ra17251absl-110v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251ABSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 110V AC (50/60Hz)",
      "Current Draw: 0.22A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "110V AC" }
    ],
    voltage: "110V AC",
    current: "0.22A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251absl-220v",
    name: formatFanName('RA17251ABSL (220V)', '6 Inch', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251ABSL",
    description: "The 220-240V variant of the Resonance RA17251ABSL provides massive 6-inch airflow capabilities with a smooth-running sleeve bearing. Operating on standard 220V AC, it is the perfect cooling solution for large electrical panels and automation cabinets where huge volumes of air are needed quietly and affordably.",
    image: "/images/ra17251absl-220v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (High Capacity)",
      "Model: RA17251ABSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm)" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "220-240V AC" }
    ],
    voltage: "220-240V AC",
    current: "0.14A",
    mounting: "Panel Mount"
  },
  {
    id: "fan-ra17251obhl-110v",
    name: formatFanName('RA17251OBHL (110V)', '6 Inch Oval', '172x51mm', 'AC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251OBHL",
    description: "Featuring a specialized oval housing, the Resonance RA17251OBHL (110-120V) is a premium 6-inch AC cooling fan built for heavy industrial use. The high-precision ball bearing system ensures maximum lifespan and continuous 24/7 thermal extraction for demanding automation control panels and dense enclosures.",
    image: "/images/ra17251obhl-110v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (Oval Housing)",
      "Model: RA17251OBHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 110-120V AC (50/60Hz)",
      "Current Draw: 0.20A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm) Oval" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "110-120V AC" }
    ],
    voltage: "110-120V AC",
    current: "0.20A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra17251obhl-220v",
    name: formatFanName('RA17251OBHL (220V)', '6 Inch Oval', '172x51mm', 'AC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251OBHL",
    description: "The Resonance RA17251OBHL (220-240V) is a heavy-duty 6-inch oval cooling fan designed for relentless performance. Equipped with premium ball bearings and operating on 220-240V AC, it delivers torrential airflow necessary to protect critical high-heat industrial machinery and densely packed server racks from thermal failure.",
    image: "/images/ra17251obhl-220v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (Oval Housing)",
      "Model: RA17251OBHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm) Oval" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "220-240V AC" }
    ],
    voltage: "220-240V AC",
    current: "0.14A",
    mounting: "Oval Panel Mount"
  }
];

newFans.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Successfully added the 4 unique Oval and Sleeve fans!');
