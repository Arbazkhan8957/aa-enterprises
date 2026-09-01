const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra17251rbl-24v",
    name: formatFanName('RA17251RBL (24V DC)', '6 Inch Round', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RBL",
    description: "The Resonance RA17251RBL (24V DC) is a highly specialized 6-inch round cooling fan built for DC systems. Equipped with premium ball bearings, it provides exceptional longevity and reliability for custom tubular ventilation and circular mounting cutouts in demanding 24V DC industrial applications.",
    image: "/images/ra17251rbl-24v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RBL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Application: Ideal for circular cutouts and tubing",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Round Panel/Tube Mount"
  },
  {
    id: "fan-ra17251rsl-12v",
    name: formatFanName('RA17251RSL (12V DC)', '6 Inch Round', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RSL",
    description: "Engineered with a sleeve bearing for quieter operation, the Resonance RA17251RSL (12V DC) is a versatile 6-inch round fan. It operates efficiently on standard 12V DC systems, providing excellent airflow for specialized circular mounts while keeping acoustics and costs under control.",
    image: "/images/ra17251rsl-12v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
    mounting: "Round Panel/Tube Mount"
  },
  {
    id: "fan-ra17251rsl-24v",
    name: formatFanName('RA17251RSL (24V DC)', '6 Inch Round', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RSL",
    description: "The 24V variant of the Resonance RA17251RSL brings quiet sleeve bearing performance to 24V DC control systems. With its 6-inch round chassis, it flawlessly handles cooling for custom circular enclosures where high airflow and lower noise levels are both required.",
    image: "/images/ra17251rsl-24v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.20A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.20A",
    mounting: "Round Panel/Tube Mount"
  },
  {
    id: "fan-ra17251rbhl-110v",
    name: formatFanName('RA17251RBHL (110V AC)', '6 Inch Round', '172x51mm', 'AC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RBHL",
    description: "Built for massive 110V AC systems, the Resonance RA17251RBHL (110-120V) utilizes a rugged round 6-inch frame and premium ball bearings. It ensures 24/7 continuous thermal extraction in extreme industrial environments, seamlessly fitting into circular ducting and panel cutouts.",
    image: "/images/ra17251rbhl-110v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RBHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 100-120V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "100-120V AC" }
    ],
    voltage: "100-120V AC",
    current: "0.14A",
    mounting: "Round Panel/Tube Mount"
  },
  {
    id: "fan-ra17251rsl-ac110v",
    name: formatFanName('RA17251RSL (110V AC)', '6 Inch Round', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RSL",
    description: "The AC variant of the Resonance RA17251RSL offers the same reliable 6-inch round chassis but is optimized for 110V AC systems. Using a smooth sleeve bearing, it delivers high-volume cooling at a lower noise profile, perfect for noise-sensitive AC-powered circular mounts.",
    image: "/images/ra17251rsl-ac110v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 100-120V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "100-120V AC" }
    ],
    voltage: "100-120V AC",
    current: "0.14A",
    mounting: "Round Panel/Tube Mount"
  }
];

newFans.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Successfully added the 5 unique Round fans (AC & DC)!');
