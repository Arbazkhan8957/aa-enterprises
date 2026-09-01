const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-mcb-enclosure",
    name: "SIBASS Weatherproof MCB Enclosure",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-CB4N (IP66)",
    description: "The SIBASS SE-CB4N is a rugged, weatherproof surface-mounting enclosure designed specifically for Miniature Circuit Breakers (MCBs). Rated at IP66, it features a transparent protective door and provides superior protection against water and dust in demanding outdoor or industrial environments.",
    image: "/images/sibass-mcb-enclosure.jpg",
    features: [
      "Protection: IP66 Weatherproof and Dustproof rating",
      "Capacity: 4-Way module capacity for MCBs/RCDs",
      "Design: High-impact housing with transparent spring-loaded lid",
      "Mounting: Surface mount with secure screw-down points"
    ],
    specs: [
      { name: "Model", value: "SE-CB4N" },
      { name: "IP Rating", value: "IP66" },
      { name: "Capacity", value: "4-Way" }
    ],
    voltage: "Universal",
    current: "Universal",
    mounting: "Surface Mount"
  },
  {
    id: "sibass-relay-socket-pf113a-1",
    name: "SIBASS Relay Socket (PF-113A) - 11-Pin",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PF-113A",
    description: "The SIBASS PF-113A is a heavy-duty 11-pin round relay socket designed for secure DIN-rail or panel mounting. Engineered for high reliability, it ensures a strong mechanical and electrical connection for 11-pin industrial relays and timers.",
    image: "/images/sibass-relay-socket-pf113a-1.jpg",
    features: [
      "Configuration: 11-Pin circular layout",
      "Terminals: Robust screw-clamp terminals for secure wiring",
      "Rating: Max 10A, 250V AC",
      "Certification: CE and RoHS compliant"
    ],
    specs: [
      { name: "Model", value: "PF-113A" },
      { name: "Pins", value: "11-Pin Round" },
      { name: "Current", value: "10A Max" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "DIN Rail / Panel"
  },
  {
    id: "sibass-relay-socket-pf113a-2",
    name: "SIBASS Relay Socket (PF-113A) - Retail View",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PF-113A (Side View)",
    description: "A detailed profile view of the SIBASS PF-113A 11-pin relay socket showcasing its DIN-rail locking mechanism. This robust base guarantees secure seating and effortless installation in high-density control cabinets.",
    image: "/images/sibass-relay-socket-pf113a-2.jpg",
    features: [
      "Mechanism: Easy snap-on DIN rail locking tab",
      "Housing: Flame-retardant industrial polymer",
      "Terminals: Deep-set screw wells to prevent short circuits",
      "Rating: Max 10A, 250V AC"
    ],
    specs: [
      { name: "Model", value: "PF-113A" },
      { name: "Format", value: "Profile View" },
      { name: "Current", value: "10A Max" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-relay-socket-pyf14a",
    name: "SIBASS Relay Socket (PYF14A) - 14-Pin",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PYF14A",
    description: "The SIBASS PYF14A is a premium 14-pin flat relay socket for multi-pole miniature relays. Featuring a compact footprint and reliable screw terminals, it allows for organized, high-density wiring in complex automation panels.",
    image: "/images/sibass-relay-socket-pyf14a.jpg",
    features: [
      "Configuration: 14-Pin flat layout (4PDT Relays)",
      "Terminals: Heavy-duty screw clamps (0.4-0.8 N-m torque)",
      "Rating: Max 5A, 250V AC",
      "Certification: CE and RoHS compliant"
    ],
    specs: [
      { name: "Model", value: "PYF14A" },
      { name: "Pins", value: "14-Pin Flat" },
      { name: "Current", value: "5A Max" }
    ],
    voltage: "250V AC",
    current: "5A",
    mounting: "DIN Rail / Panel"
  },
  {
    id: "sibass-relay-socket-pf083a",
    name: "SIBASS Relay Socket (PF-083A) - 8-Pin",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PF-083A",
    description: "The SIBASS PF-083A is an 8-pin round relay socket tailored for standard industrial timers and relays. Designed for durability, it offers excellent contact reliability and simple DIN-rail mounting for quick setup.",
    image: "/images/sibass-relay-socket-pf083a.jpg",
    features: [
      "Configuration: 8-Pin circular layout",
      "Terminals: Deep-set safety screw terminals",
      "Rating: Max 10A, 250V AC",
      "Certification: CE and RoHS compliant"
    ],
    specs: [
      { name: "Model", value: "PF-083A" },
      { name: "Pins", value: "8-Pin Round" },
      { name: "Current", value: "10A Max" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "DIN Rail / Panel"
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
