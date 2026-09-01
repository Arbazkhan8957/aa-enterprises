const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-pendant-xac-10btn",
    name: "SIBASS Heavy Duty Pendant Station (10-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A10713",
    description: "The top-tier SIBASS SE-XAC-A10713 pendant station provides total control for complex multi-axis overhead cranes. Featuring 8 directional buttons, a dedicated Green START button, and a Twist-to-Release Red E-Stop, all housed in a high-impact, waterproof yellow polymer casing.",
    image: "/images/sibass-pendant-xac-10btn.jpg",
    features: [
      "Configuration: 10 Controls (8 Directional + START + E-Stop)",
      "Safety: IP65 Dust and Water resistant enclosure",
      "Handling: Ergonomic design with heavy-duty rubber cable sleeve",
      "Durability: Shock-resistant double-insulated housing"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A10713" },
      { name: "Buttons", value: "10-Way" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V AC Max",
    current: "Heavy Duty Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-xac-2btn",
    name: "SIBASS Heavy Duty Pendant Station (2-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A2713",
    description: "The SIBASS SE-XAC-A2713 is a compact, highly rugged pendant control station. Designed for standard up/down hoisting applications, it combines two tactile directional pushbuttons with an oversized emergency stop button for immediate power cutoff.",
    image: "/images/sibass-pendant-xac-2btn.jpg",
    features: [
      "Configuration: 2 Directional Buttons + Red E-Stop",
      "Safety: Double-insulated IP65 weatherproof casing",
      "Wiring: Pre-fitted with a flexible rubber strain relief boot",
      "Standard: CE certified for industrial lifting"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A2713" },
      { name: "Buttons", value: "2-Way + E-Stop" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V AC Max",
    current: "Heavy Duty Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-xac-8btn",
    name: "SIBASS Heavy Duty Pendant Station (8-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A8713",
    description: "The SIBASS SE-XAC-A8713 pendant control offers an 8-button layout plus an emergency stop. Ideal for large gantry cranes requiring 4-axis movement control, delivering reliable switching in the harshest industrial environments.",
    image: "/images/sibass-pendant-xac-8btn.jpg",
    features: [
      "Configuration: 8 Directional Buttons + Red E-Stop",
      "Housing: High-visibility, shatter-proof yellow ABS",
      "Protection: Complete protection against dust and low-pressure water jets",
      "Handling: Stepped rubber cable boot prevents wire fatigue"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A8713" },
      { name: "Buttons", value: "8-Way + E-Stop" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V AC Max",
    current: "Heavy Duty Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-xac-4btn",
    name: "SIBASS Heavy Duty Pendant Station (4-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A4713",
    description: "The SIBASS SE-XAC-A4713 is the perfect 4-way control pendant for dual-axis hoists. It features responsive mechanical buttons and a certified twist-to-release E-stop, encased in a durable, shock-absorbent body.",
    image: "/images/sibass-pendant-xac-4btn.jpg",
    features: [
      "Configuration: 4 Directional Buttons (Up/Down/Left/Right) + Red E-Stop",
      "Reliability: Mechanical interlocks prevent simultaneous opposing movements",
      "Protection: IP65 Rated against industrial fluids and dust",
      "Certification: CE compliant"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A4713" },
      { name: "Buttons", value: "4-Way + E-Stop" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V AC Max",
    current: "Heavy Duty Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-xac-6btn",
    name: "SIBASS Heavy Duty Pendant Station (6-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XAC-A6713",
    description: "The SIBASS SE-XAC-A6713 provides 6-way directional control for advanced lifting equipment. Its robust yellow enclosure ensures operators maintain a firm grip and safe control, even with heavy industrial gloves.",
    image: "/images/sibass-pendant-xac-6btn.jpg",
    features: [
      "Configuration: 6 Directional Buttons + Red E-Stop",
      "Durability: Engineered to withstand drops and high impacts",
      "Protection: Sealed against moisture and airborne debris (IP65)",
      "Terminals: Easy-to-wire internal screw contacts"
    ],
    specs: [
      { name: "Model", value: "SE-XAC-A6713" },
      { name: "Buttons", value: "6-Way + E-Stop" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V AC Max",
    current: "Heavy Duty Rated",
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
console.log('Successfully added 5 new SIBASS SE-XAC Pendants!');
