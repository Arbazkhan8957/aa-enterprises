const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-socket-schuko",
    name: "SIBASS Industrial Schuko Socket (Blue)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Schuko",
    description: "The SIBASS Industrial Schuko Socket combines standard 2-pin European plug compatibility with rugged industrial protection. The durable blue housing and spring-loaded lid provide excellent defense against dust and moisture in workshop environments.",
    image: "/images/sibass-socket-schuko.jpg",
    features: [
      "Compatibility: Standard 2-Pin Schuko / Type F",
      "Protection: Spring-loaded weather-resistant cap",
      "Safety: Deep-set grounding clips for secure connections",
      "Installation: Standard 4-point screw panel mount"
    ],
    specs: [
      { name: "Type", value: "Schuko Socket" },
      { name: "Color", value: "Industrial Blue" },
      { name: "Poles", value: "2P+E" }
    ],
    voltage: "250V AC",
    current: "16A",
    mounting: "Panel/Wall Mount"
  },
  {
    id: "sibass-panel-socket-125a-box",
    name: "SIBASS 125A High Power Panel Socket (SE-3452)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3452",
    description: "The massive SIBASS SE-3452 is an ultra-heavy-duty 125 Amp panel socket designed for major industrial power distribution. This image shows the official packaging, highlighting its 5-pole (3P+N+E) configuration and extreme IP67 waterproof rating.",
    image: "/images/sibass-panel-socket-125a-box.jpg",
    features: [
      "Capacity: Extremely high 125A current rating",
      "Configuration: 5 Poles (3-Phase + Neutral + Earth)",
      "Protection: IP67 rated - completely dust-tight and waterproof",
      "Application: Heavy machinery, mining, and large-scale construction"
    ],
    specs: [
      { name: "Model", value: "SE-3452" },
      { name: "Current", value: "125A" },
      { name: "IP Rating", value: "IP67" }
    ],
    voltage: "220-415V~ 3-Phase",
    current: "125A",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-panel-socket-125a-front",
    name: "SIBASS 125A Panel Socket (Front IP67 Cap)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3452 Front",
    description: "A front view of the SIBASS SE-3452 125A socket, showcasing its secure, threaded IP67 locking cap. When not in use, the cap forms a watertight seal, protecting the high-voltage contacts from flooding or harsh environmental exposure.",
    image: "/images/sibass-panel-socket-125a-front.jpg",
    features: [
      "Seal: Threaded locking ring for a guaranteed watertight connection",
      "Design: High-visibility red coloration for 415V 3-phase identification",
      "Material: Ultra-rugged, impact-resistant thermoplastic",
      "Safety: Integrated locking tabs to prevent accidental unplugging"
    ],
    specs: [
      { name: "Model", value: "SE-3452" },
      { name: "Color", value: "Red/Grey" },
      { name: "Poles", value: "3P+N+E" }
    ],
    voltage: "415V AC",
    current: "125A",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-panel-socket-125a-side",
    name: "SIBASS 125A Panel Socket (Terminal View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3452 Rear",
    description: "A side/rear profile of the SIBASS SE-3452 125A socket, revealing the massive internal wiring terminals. These oversized hex-screw clamps are specifically designed to handle thick-gauge industrial cables safely.",
    image: "/images/sibass-panel-socket-125a-side.jpg",
    features: [
      "Terminals: Oversized dual-screw hex clamps for maximum cable retention",
      "Wiring: Engineered to accept high cross-section copper conductors",
      "Housing: Deep terminal shrouds to prevent arc flash",
      "Durability: Solid brass internal busbars"
    ],
    specs: [
      { name: "Model", value: "SE-3452" },
      { name: "Current", value: "125A" },
      { name: "Connection", value: "Hex Screw Clamp" }
    ],
    voltage: "415V AC",
    current: "125A",
    mounting: "Internal Wiring"
  },
  {
    id: "sibass-pendant-cobp21n",
    name: "SIBASS Pendant Control Station (COBP-21N)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COBP-21N",
    description: "The SIBASS COBP-21N is a rugged, compact pendant switch featuring an updated housing design. It provides reliable Up/Down directional control alongside a high-visibility red emergency stop, perfect for modern hoist systems.",
    image: "/images/sibass-pendant-cobp21n.jpg",
    features: [
      "Controls: 2-Button Directional (Up/Down) + E-Stop",
      "Housing: High-impact yellow polymer, designed for easy gripping",
      "Safety: IP65 Rated against dust and water jets",
      "Standard: CE certified for industrial safety compliance"
    ],
    specs: [
      { name: "Model", value: "COBP-21N" },
      { name: "Type", value: "2-Button + E-Stop" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "250V AC / 500V AC",
    current: "Standard Load",
    mounting: "Handheld Wired"
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
