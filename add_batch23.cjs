const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "heavy-duty-connector-hood-side",
    name: "Heavy Duty Connector Hood (Side Entry)",
    brand: "Generic",
    category: "Connectors",
    model: "Side Entry Hood (IP68 Gland)",
    description: "A rugged metal hood for heavy duty multipole connectors featuring a side-entry cable gland (IP68). The side profile highlights the robust single-lever locking mechanism designed for secure mating in high-vibration industrial environments.",
    image: "/images/heavy-duty-connector-hood-side.jpg",
    features: [
      "Material: Die-cast aluminum alloy with powder coating",
      "Locking: Heavy-duty single lever latch",
      "Cable Entry: 90-degree side entry with integrated IP68 gland",
      "Format: Detailed side profile view"
    ],
    specs: [
      { name: "Type", value: "Connector Hood" },
      { name: "Entry", value: "Side" },
      { name: "Protection", value: "IP65 (Mated)" }
    ],
    voltage: "Depends on Insert",
    current: "Depends on Insert",
    mounting: "Cable Mount"
  },
  {
    id: "sibass-distribution-boxes",
    name: "SIBASS Weatherproof Distribution Boxes",
    brand: "Sibass",
    category: "Enclosures",
    model: "IP65 MCB Distribution Box",
    description: "A range of SIBASS weatherproof distribution boxes designed to house MCBs and electrical controls. Featuring a durable white ABS body and a transparent grey hinged cover, they provide excellent IP65 protection for outdoor or dusty indoor applications.",
    image: "/images/sibass-distribution-boxes.jpg",
    features: [
      "Protection: IP65 Dust and Water Resistant",
      "Cover: Transparent grey hinged lid for easy inspection",
      "Material: High-impact, UV-resistant ABS plastic",
      "Range: Available in multiple sizes (e.g., 4-way to 12-way+)"
    ],
    specs: [
      { name: "Type", value: "Surface Distribution Box" },
      { name: "IP Rating", value: "IP65" },
      { name: "Material", value: "ABS / PC" }
    ],
    voltage: "Up to 415V AC",
    current: "Standard Load",
    mounting: "Surface Mount"
  },
  {
    id: "panasonic-speed-controller-wiring",
    name: "Panasonic Speed Controller (Wiring View)",
    brand: "Panasonic",
    category: "Motors & Drives",
    model: "DV1204W",
    description: "The Panasonic DV1204W Series Speed Controller. This view highlights the side casing which clearly displays the comprehensive electrical wiring diagram for easy integration with AC motors (220V/230V, 50/60Hz).",
    image: "/images/panasonic-speed-controller-wiring.jpg",
    features: [
      "Diagram: Clear, factory-printed connection schematic",
      "Compatibility: Designed for AC gear motors and standard motors",
      "Labeling: Detailed pinout for AC power, motor, and capacitor",
      "View: Side profile with schematic"
    ],
    specs: [
      { name: "Model", value: "DV1204W" },
      { name: "Input", value: "AC220V/230V 50/60Hz" },
      { name: "Output", value: "0.6-1.0A" }
    ],
    voltage: "220-230V AC",
    current: "0.6 - 1.0A",
    mounting: "Panel / Socket Mount"
  },
  {
    id: "panasonic-speed-controller-front",
    name: "Panasonic Speed Controller (Front Dial)",
    brand: "Panasonic",
    category: "Motors & Drives",
    model: "DV1204W",
    description: "Front view of the Panasonic DV1204W Speed Controller. It features a precision rotary dial (graduated 0-10) for fine-tuning motor speed, encased in a durable housing with clear Panasonic and G-Series branding.",
    image: "/images/panasonic-speed-controller-front.jpg",
    features: [
      "Control: Analog rotary dial for precise speed adjustment",
      "Scale: 0 to 10 visual reference scale",
      "Design: Compact panel-mountable face",
      "View: Front fascia detailing"
    ],
    specs: [
      { name: "Model", value: "DV1204W" },
      { name: "Control Type", value: "Analog Dial" },
      { name: "Series", value: "G Series" }
    ],
    voltage: "220-230V AC",
    current: "0.6 - 1.0A",
    mounting: "Panel Mount"
  },
  {
    id: "panasonic-speed-controller-pins",
    name: "Panasonic Speed Controller (8-Pin Base)",
    brand: "Panasonic",
    category: "Motors & Drives",
    model: "DV1204W",
    description: "Bottom view of the Panasonic DV1204W Speed Controller, showing the standard 8-pin circular plug configuration. This allows for quick, secure connection into a standard 8-pin relay/timer socket for easy replacement and maintenance.",
    image: "/images/panasonic-speed-controller-pins.jpg",
    features: [
      "Connection: Standard 8-pin circular plug",
      "Installation: Plug-and-play into compatible bases",
      "Keying: Center alignment key prevents incorrect insertion",
      "View: Bottom pinout detailing"
    ],
    specs: [
      { name: "Model", value: "DV1204W" },
      { name: "Connector", value: "8-Pin Octal" }
    ],
    voltage: "220-230V AC",
    current: "0.6 - 1.0A",
    mounting: "Plug-in (8-Pin Base)"
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
