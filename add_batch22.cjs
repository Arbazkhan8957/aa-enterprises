const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-hydraulic-crimper",
    name: "SIBASS Hydraulic Crimping Pliers (SE-YQK-300)",
    brand: "Sibass",
    category: "Tools",
    model: "SE-YQK-300",
    description: "The SIBASS SE-YQK-300 is a heavy-duty hydraulic crimping tool designed for professional electricians. Delivered in a durable blue carrying case, it includes multiple hardened steel dies for securely crimping large gauge copper and aluminum lugs.",
    image: "/images/sibass-hydraulic-crimper.jpg",
    features: [
      "Mechanism: High-pressure hydraulic action",
      "Kit: Includes multiple interchangeable hexagonal dies",
      "Design: Ergonomic long handles for increased leverage",
      "Storage: Comes in a custom-molded protective case"
    ],
    specs: [
      { name: "Model", value: "SE-YQK-300" },
      { name: "Type", value: "Hydraulic Crimper" },
      { name: "Application", value: "Heavy Duty Terminals" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Hand Tool"
  },
  {
    id: "sibass-digital-clamp-meter",
    name: "SIBASS Digital Clamp Meter (DT266)",
    brand: "Sibass",
    category: "Test & Measurement",
    model: "DT266",
    description: "The SIBASS DT266 is a reliable digital clamp meter essential for electrical diagnostics. It features a large LCD screen and can accurately measure AC Current, AC/DC Voltage, Resistance, and Continuity without breaking the circuit.",
    image: "/images/sibass-digital-clamp-meter.jpg",
    features: [
      "Functions: AC/DC Voltage, AC Current, OHM, Continuity Buzzer",
      "Features: Data hold function for easy reading",
      "Design: Large jaw opening for thick cables",
      "Extras: Includes 261 option (500V) Insulation Tester compatibility"
    ],
    specs: [
      { name: "Model", value: "DT266" },
      { name: "Display", value: "Digital LCD" },
      { name: "Type", value: "Clamp Meter" }
    ],
    voltage: "Measures up to 750V AC / 1000V DC",
    current: "Measures AC Current",
    mounting: "Handheld"
  },
  {
    id: "sibass-limit-switch-se8108",
    name: "SIBASS Adjustable Roller Limit Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8108A-M",
    description: "The SIBASS SE-8108A-M is a versatile limit switch featuring an adjustable metal roller lever arm. Its durable blue and black housing is designed to withstand industrial wear and tear while providing precise mechanical position sensing.",
    image: "/images/sibass-limit-switch-se8108.jpg",
    features: [
      "Actuator: Adjustable length rotary roller lever",
      "Contacts: 1 NO + 1 NC configuration",
      "Housing: Impact-resistant industrial grade material",
      "Application: CNC machines, elevators, automated gates"
    ],
    specs: [
      { name: "Model", value: "SE-8108A-M" },
      { name: "Rating", value: "5A 250V AC / 0.4A 115V DC" },
      { name: "Contacts", value: "NO 3-4, NC 1-2" }
    ],
    voltage: "250V AC / 115V DC",
    current: "5A (AC) / 0.4A (DC)",
    mounting: "Surface Mount"
  },
  {
    id: "sibass-industrial-socket-splitter",
    name: "SIBASS Industrial Multi-Outlet Socket",
    brand: "Sibass",
    category: "Industrial Plugs & Sockets",
    model: "Type 1013 / 1012",
    description: "A robust SIBASS multiple-outlet industrial socket splitter. Designed in a Y/Cross configuration, it allows a single 16A power source to be distributed safely to multiple IP44 rated receptacles.",
    image: "/images/sibass-industrial-socket-splitter.jpg",
    features: [
      "Configuration: 1 Input to Multiple Outputs (2P+E)",
      "Protection: IP44 Splash-proof with spring-loaded lids",
      "Standard: Conforms to IEC 60309-2",
      "Application: Temporary power distribution on sites"
    ],
    specs: [
      { name: "Model", value: "Type 1013 / 1012" },
      { name: "Rating", value: "16A-6h / 220-250V~" },
      { name: "IP Rating", value: "IP44" }
    ],
    voltage: "220-250V AC",
    current: "16A",
    mounting: "In-line Splitter"
  },
  {
    id: "heavy-duty-connector-grey",
    name: "Heavy Duty Multipole Connector",
    brand: "Generic",
    category: "Connectors",
    model: "CNRC HLA Base/Hood",
    description: "A rugged grey heavy duty rectangular connector designed for safe and secure electrical connections in harsh industrial environments. It features a robust metal locking latch and an integrated cable gland for superior strain relief.",
    image: "/images/heavy-duty-connector-grey.jpg",
    features: [
      "Housing: Die-cast aluminum alloy for extreme durability",
      "Locking: Single locking lever for quick, secure mating",
      "Cable Entry: Side or top entry with included M-thread gland",
      "Inserts: Compatible with standard multipole inserts"
    ],
    specs: [
      { name: "Type", value: "Heavy Duty Connector" },
      { name: "Material", value: "Metal Housing" },
      { name: "Locking", value: "Single Lever" }
    ],
    voltage: "High Voltage Rated",
    current: "High Current Rated",
    mounting: "Surface / Cable Mount"
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
