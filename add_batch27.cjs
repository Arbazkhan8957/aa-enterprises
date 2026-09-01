const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "siemens-relay-base-3ux1418",
    name: "Siemens 3UX1 418 Relay Base",
    brand: "Siemens",
    category: "Relays & Contactors",
    model: "3UX1 418",
    description: "Original Siemens 3UX1 418 mounting base. Designed for secure and reliable installation of Siemens thermal overload relays or contactors, featuring clearly marked robust screw terminals.",
    image: "/images/siemens-relay-base-3ux1418.jpg",
    features: [
      "Brand: Genuine Siemens accessory",
      "Terminals: Heavy-duty screw clamp terminals",
      "Mounting: DIN rail or panel mount compatible",
      "Application: Motor protection and control circuits"
    ],
    specs: [
      { name: "Model", value: "3UX1 418" },
      { name: "Type", value: "Relay Base" }
    ],
    voltage: "690V AC",
    current: "Standard",
    mounting: "DIN Rail"
  },
  {
    id: "electrical-panel-fan-filter",
    name: "Electrical Panel Cooling Fan Filter",
    brand: "Generic",
    category: "Cooling Fans",
    model: "Panel Filter Grill",
    description: "A louvered white plastic exhaust filter grill for electrical panels. It includes a replaceable non-woven synthetic filter pad to prevent dust ingress while allowing optimal airflow for internal cooling fans.",
    image: "/images/electrical-panel-fan-filter.jpg",
    features: [
      "Material: Flame-retardant ABS plastic housing",
      "Filtration: Replaceable synthetic fiber filter pad",
      "Design: Slanted louvers protect against splashing water",
      "Certification: CE and RoHS compliant"
    ],
    specs: [
      { name: "Type", value: "Fan Filter Assembly" },
      { name: "Color", value: "White / Grey" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Panel Snap-in / Screw"
  },
  {
    id: "resonance-axial-fan-172mm",
    name: "Resonance Axial Fan (172x172x50mm)",
    brand: "Resonance",
    category: "Cooling Fans",
    model: "FM17250A2HSL",
    description: "A heavy-duty Resonance AC axial cooling fan. Measuring 172x172x50mm, it operates on 220/240VAC and features impedance protection, making it ideal for robust industrial ventilation and cooling systems.",
    image: "/images/resonance-axial-fan-172mm.jpg",
    features: [
      "Motor: Impedance protected AC motor",
      "Construction: Sturdy metal frame with durable blades",
      "Certification: CE marked for safety",
      "Application: Control panels, server racks, welding machines"
    ],
    specs: [
      { name: "Size", value: "172x172x50mm" },
      { name: "Voltage", value: "220/240V AC" },
      { name: "Current", value: "0.22A" }
    ],
    voltage: "220-240V AC",
    current: "0.22A",
    mounting: "Screw Mount"
  },
  {
    id: "resonance-axial-fan-box",
    name: "Resonance Fan Packaging",
    brand: "Resonance",
    category: "Cooling Fans",
    model: "FM17250A2HSL",
    description: "Original OEM packaging box for the Resonance 172mm AC Axial Fan, verifying model details (FM17250A2HSL), voltage ratings, and CE certification for authentic industrial supply.",
    image: "/images/resonance-axial-fan-box.jpg",
    features: [
      "Details: Clear model and spec printing",
      "Verification: Authenticity and specifications check"
    ],
    specs: [
      { name: "Model", value: "FM17250A2HSL" }
    ],
    voltage: "220-240V AC",
    current: "0.25A (Box Spec)",
    mounting: "N/A"
  },
  {
    id: "sibass-dc-fan-24v",
    name: "Sibass Electric DC Fan (92x25mm)",
    brand: "Sibass",
    category: "Cooling Fans",
    model: "SE-9225S",
    description: "The Sibass SE-9225S is a compact DC cooling fan operating at 24V. Delivering 3000RPM at a low 3.5W power draw, it's an efficient choice for spot cooling in electronic enclosures and automation equipment.",
    image: "/images/sibass-dc-fan-24v.jpg",
    features: [
      "Speed: High-performance 3000 RPM operation",
      "Power: Efficient 3.5W consumption",
      "Protection: RoHS and CE compliant",
      "Format: Compact 92x25mm square profile"
    ],
    specs: [
      { name: "Model", value: "SE-9225S" },
      { name: "Voltage", value: "24V DC" },
      { name: "Power", value: "3.5W" }
    ],
    voltage: "24V DC",
    current: "0.15A (~3.5W)",
    mounting: "Screw Mount"
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
console.log('Successfully added the 5 new items!');
