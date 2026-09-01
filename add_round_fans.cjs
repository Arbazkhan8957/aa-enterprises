const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra17251oshl-110v",
    name: formatFanName('RA17251OSHL (110V)', '6 Inch Oval', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251OSHL",
    description: "The Resonance RA17251OSHL (110-120V) utilizes a distinctive oval housing designed for specialized mounting scenarios. Powered by 110V AC and utilizing a quiet sleeve bearing mechanism, this 6-inch fan provides a highly effective balance of strong thermal extraction and lower noise levels for specialized industrial enclosures.",
    image: "/images/ra17251oshl-110v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (Oval Housing)",
      "Model: RA17251OSHL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 110-120V AC (50/60Hz)",
      "Current Draw: 0.20A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm) Oval" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "110-120V AC" }
    ],
    voltage: "110-120V AC",
    current: "0.20A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra17251oshl-220v",
    name: formatFanName('RA17251OSHL (220V)', '6 Inch Oval', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251OSHL",
    description: "Built for standard 220V industrial systems, the Resonance RA17251OSHL (220-240V) is a 6-inch oval cooling fan that combines high capacity with quiet operation. The sleeve bearing system keeps acoustics low while the massive frame extracts tremendous amounts of heat from critical automation panels.",
    image: "/images/ra17251oshl-220v.jpg",
    features: [
      "Size: 6 Inch / 172x150x51mm (Oval Housing)",
      "Model: RA17251OSHL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x150x51mm) Oval" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "220-240V AC" }
    ],
    voltage: "220-240V AC",
    current: "0.14A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra17251rbhl-220v",
    name: formatFanName('RA17251RBHL (220V)', '6 Inch Round', '172x51mm', 'AC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RBHL",
    description: "The Resonance RA17251RBHL (220-240V) features a completely round 6-inch chassis, making it perfect for custom circular cutouts and specialized tubing ventilation. Operating on 220V AC with a sleeve bearing, it effortlessly pulls massive volumes of air through systems where traditional square or oval frames will not fit.",
    image: "/images/ra17251rbhl-220v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RBHL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 220-240V AC (50/60Hz)",
      "Current Draw: 0.14A",
      "Application: Ideal for circular cutouts and tubing",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "220-240V AC" }
    ],
    voltage: "220-240V AC",
    current: "0.14A",
    mounting: "Round Panel/Tube Mount"
  },
  {
    id: "fan-ra17251rbhl-12v",
    name: formatFanName('RA17251RBHL (12V)', '6 Inch Round', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251RBHL",
    description: "Engineered for 12V DC systems requiring extreme, continuous cooling in circular mountings, the Resonance RA17251RBHL (12V DC) is a 6-inch round powerhouse. With a high-precision ball bearing system, this fan provides relentless 24/7 thermal extraction for heavy machinery and custom enclosures.",
    image: "/images/ra17251rbhl-12v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Round Housing)",
      "Model: RA17251RBHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.30A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Round" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.30A",
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
console.log('Successfully added the 4 unique Oval and Round fans!');
