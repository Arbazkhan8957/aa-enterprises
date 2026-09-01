const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

function formatFanName(model, sizeName, dims, type, bearing) {
  return `Resonance ${model} ${sizeName} (${dims}) ${type} Cooling Fan - ${bearing}`;
}

const newFans = [
  {
    id: "fan-ra172512dbhl-12v",
    name: formatFanName('RA172512DBHL', '6 Inch Oval', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA172512DBHL",
    description: "The Resonance RA172512DBHL is a highly specialized 6-inch oval cooling fan built for 12V DC systems. Equipped with premium ball bearings, it provides exceptional longevity and massive airflow for custom mounting scenarios in demanding 12V DC applications.",
    image: "/images/ra172512dbhl-12v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Oval Housing)",
      "Model: RA172512DBHL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.38A",
      "Application: Ideal for specialized panel mountings",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Oval" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.38A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra172512dshl-12v",
    name: formatFanName('RA172512DSHL', '6 Inch Oval', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA172512DSHL",
    description: "Engineered with a sleeve bearing for quieter operation, the Resonance RA172512DSHL is a versatile 6-inch oval fan. It operates efficiently on standard 12V DC systems, providing excellent airflow while keeping acoustics and costs under control.",
    image: "/images/ra172512dshl-12v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Oval Housing)",
      "Model: RA172512DSHL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 12V DC",
      "Current Draw: 0.35A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Oval" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "12V DC" }
    ],
    voltage: "12V DC",
    current: "0.35A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra17251o24hbl-24v",
    name: formatFanName('RA17251O24HBL', '6 Inch Oval', '172x51mm', 'DC', 'Ball Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251O24HBL",
    description: "The Resonance RA17251O24HBL brings premium ball bearing performance to 24V DC control systems. With its 6-inch oval chassis, it flawlessly handles continuous cooling for custom enclosures where high airflow and supreme reliability are required.",
    image: "/images/ra17251o24hbl-24v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Oval Housing)",
      "Model: RA17251O24HBL",
      "Bearing System: Heavy-duty Ball Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.28A",
      "Airflow: Massive CFM for extreme cooling",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Oval" },
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.28A",
    mounting: "Oval Panel Mount"
  },
  {
    id: "fan-ra17251o24hsl-24v",
    name: formatFanName('RA17251O24HSL', '6 Inch Oval', '172x51mm', 'DC', 'Sleeve Bearing'),
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "RA17251O24HSL",
    description: "The Resonance RA17251O24HSL is a 6-inch oval fan optimized for 24V DC systems. Using a smooth sleeve bearing, it delivers high-volume cooling at a lower noise profile, making it a highly cost-effective and quiet solution for 24V automation cabinets.",
    image: "/images/ra17251o24hsl-24v.jpg",
    features: [
      "Size: 6 Inch / 172x51mm (Oval Housing)",
      "Model: RA17251O24HSL",
      "Bearing System: Smooth Sleeve Bearing",
      "Operating Voltage: 24V DC",
      "Current Draw: 0.28A",
      "Acoustics: Optimized for quieter operation",
      "Certifications: CE Certified"
    ],
    specs: [
      { name: "Size", value: "6 Inch (172x51mm) Oval" },
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Power", value: "24V DC" }
    ],
    voltage: "24V DC",
    current: "0.28A",
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
console.log('Successfully added the 4 unique Oval DC fans!');
