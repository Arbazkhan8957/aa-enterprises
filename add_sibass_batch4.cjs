const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-pendant-yellow",
    name: "SIBASS Rain-Proof Pendant Switch (Yellow)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COBP-21H",
    description: "The SIBASS COBP-21H is a heavy-duty, rain-proof pendant control station designed for hoists and cranes. It features a high-visibility yellow casing, up/down directional controls, and a prominent red emergency stop button for maximum operator safety.",
    image: "/images/sibass-pendant-yellow.jpg",
    features: [
      "Controls: Up, Down, and Twist-to-Release Red E-Stop",
      "Safety: Rain-proof and dust-resistant enclosure",
      "Power Handling: Rated for heavy duty 500V systems",
      "Design: Ergonomic shock-proof yellow polymer casing"
    ],
    specs: [
      { name: "Model", value: "COBP-21H" },
      { name: "Buttons", value: "2 + E-Stop" },
      { name: "Protection", value: "Rain Proof" }
    ],
    voltage: "500V AC",
    current: "2.2kW Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-cob61",
    name: "SIBASS Pendant Control Station (COB-61)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COB-61",
    description: "The SIBASS COB-61 is a reliable, rain-proof pendant switch tailored for industrial lifting applications. Its durable orange housing contains two responsive push buttons (Up/Down) and comes with a heavy-duty rubber strain relief boot.",
    image: "/images/sibass-pendant-cob61.jpg",
    features: [
      "Controls: 2-Button layout (Up / Down)",
      "Protection: Rain-proof enclosed contacts (IP65 equivalent)",
      "Extras: Includes flexible rubber cable strain relief boot",
      "Rating: AC 250V 5A / AC 500V 2A"
    ],
    specs: [
      { name: "Model", value: "COB-61" },
      { name: "Type", value: "2-Button Pendant" },
      { name: "Color", value: "Orange" }
    ],
    voltage: "250V / 500V AC",
    current: "5A / 2A",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-cob62",
    name: "SIBASS Pendant Control Station (COB-62)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COB-62",
    description: "The SIBASS COB-62 expands on the classic pendant design by offering 4-way directional control. Housed in a robust orange rain-proof casing, it is perfect for complex overhead crane operations requiring precise multi-axis movement.",
    image: "/images/sibass-pendant-cob62.jpg",
    features: [
      "Controls: 4-Button layout (Up/Down, Left/Right)",
      "Protection: Rain-proof enclosed contacts for outdoor/indoor use",
      "Housing: High-impact orange industrial polymer",
      "Rating: AC 250V 5A / AC 500V 2A"
    ],
    specs: [
      { name: "Model", value: "COB-62" },
      { name: "Type", value: "4-Button Pendant" },
      { name: "Color", value: "Orange" }
    ],
    voltage: "250V / 500V AC",
    current: "5A / 2A",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-cob21",
    name: "SIBASS Rain-Proof Pendant Switch (COB-21)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COB-21",
    description: "The SIBASS COB-21 is a compact, high-capacity 2-button pendant station. Designed for heavy electrical loads up to 15A at 250V, it provides reliable up/down hoist control in a tough, rain-proof orange enclosure.",
    image: "/images/sibass-pendant-cob21.jpg",
    features: [
      "Controls: 2-Button layout (Up / Down)",
      "Capacity: High current rating (15A at 250V AC)",
      "Protection: Rain-proof and drop-resistant design",
      "Wiring: Easy access internal screw terminals"
    ],
    specs: [
      { name: "Model", value: "COB-21" },
      { name: "Type", value: "2-Button Pendant" },
      { name: "Current", value: "15A Max" }
    ],
    voltage: "250V AC",
    current: "15A",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-limit-switch-wlca2",
    name: "SIBASS Roller Lever Limit Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-WLCA2-2",
    description: "The SIBASS SE-WLCA2-2 is a heavy-duty industrial limit switch featuring an adjustable roller lever actuator. Engineered for high-frequency automated machinery, it delivers precise position sensing and long-term mechanical endurance.",
    image: "/images/sibass-limit-switch.jpg",
    features: [
      "Actuator: Adjustable rotary roller lever",
      "Standard: NEMA A600 / Type 3, 4, 13 compliant",
      "Construction: Die-cast metal alloy housing for extreme durability",
      "Contacts: 1 NO + 1 NC snap-action mechanism"
    ],
    specs: [
      { name: "Model", value: "SE-WLCA2-2" },
      { name: "Actuator", value: "Roller Lever" },
      { name: "Standard", value: "NEMA A600" }
    ],
    voltage: "Universal AC/DC",
    current: "Standard Industrial load",
    mounting: "Surface Bolt-on"
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
