const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "jg1232-industrial-socket",
    name: "JG-1232 Industrial Socket (IP67)",
    brand: "Jigo",
    category: "Industrial Plugs & Sockets",
    model: "JG-1232",
    description: "The JG-1232 is a heavy-duty 32A industrial socket designed for harsh environments. Conforming to IEC 60309-2 standards, this 2P+E socket offers excellent IP67 water and dust resistance, making it ideal for outdoor and industrial power distribution.",
    image: "/images/jg1232-industrial-socket.jpg",
    features: [
      "Configuration: 2P+E (3 Pin)",
      "Protection: IP67 Waterproof and dustproof",
      "Standard: Conforms to IEC 60309-2",
      "Design: Blue hinged lid for secure closure"
    ],
    specs: [
      { name: "Rating", value: "32A-6h / 220-250V~" },
      { name: "Frequency", value: "50~60Hz" },
      { name: "IP Rating", value: "IP67" }
    ],
    voltage: "220-250V AC",
    current: "32A",
    mounting: "Panel / Surface Mount"
  },
  {
    id: "dual-push-button-flush",
    name: "Dual Head Start/Stop Push Button",
    brand: "Generic",
    category: "Control Stations",
    model: "Dual Flush PB",
    description: "A space-saving dual head push button combining both Start (Green 'I') and Stop (Red 'O') functions into a single 22mm cutout. Features an integrated center indicator light for clear operational status feedback.",
    image: "/images/dual-push-button-flush.jpg",
    features: [
      "Design: Two buttons in one housing (Start/Stop)",
      "Indicator: Central amber/yellow pilot light",
      "Actuators: Flush green (I) and flush red (O)",
      "Space-saving: Requires only one standard 22mm hole"
    ],
    specs: [
      { name: "Type", value: "Dual Push Button" },
      { name: "Colors", value: "Green / Red" },
      { name: "Indicator", value: "Integrated" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-warning-light-lte1103",
    name: "SIBASS Warning Light with Buzzer",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-LTE1103WLJ",
    description: "The SIBASS SE-LTE1103WLJ is a versatile red industrial warning light equipped with an integrated buzzer. Featuring multi-voltage compatibility (AC/DC 12-220V) and a high-brightness LED, it provides both visual and vocal alerts for machine safety and status.",
    image: "/images/sibass-warning-light-lte1103.jpg",
    features: [
      "Luminous Type: Constant, Shining, Rotating light modes",
      "Vocal Type: Built-in buzzer (ON/OFF)",
      "Light Source: High photoelectric transmission LED (4.1W)",
      "Durability: Low power consumption, long service life"
    ],
    specs: [
      { name: "Model", value: "SE-LTE1103WLJ" },
      { name: "Color", value: "Red" },
      { name: "Power", value: "4.1W LED" }
    ],
    voltage: "Multi-voltage AC&DC 12-220V",
    current: "Low Draw",
    mounting: "Screw Mount"
  },
  {
    id: "sibass-limit-switch-se3104",
    name: "SIBASS Limit Switch (SE-3104)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3104",
    description: "A highly durable SIBASS SE-3104 limit switch featuring a robust metal roller lever actuator. This switch comes pre-wired with a heavy-duty grey multi-core cable, offering IP67 protection for reliable position sensing in harsh wet or dusty environments.",
    image: "/images/sibass-limit-switch-se3104.jpg",
    features: [
      "Actuator: Metal roller lever",
      "Wiring: Pre-wired integrated cable for easy installation",
      "Protection: IP67 sealed body against liquids and dust",
      "Contacts: Standard industrial configuration"
    ],
    specs: [
      { name: "Model", value: "SE-3104" },
      { name: "IP Rating", value: "IP67" },
      { name: "Actuator", value: "Roller Lever" }
    ],
    voltage: "Up to 250V AC",
    current: "5A",
    mounting: "Surface Mount"
  },
  {
    id: "siren-12v-dc",
    name: "Industrial Security Siren (12V DC)",
    brand: "Generic",
    category: "Sensors & Controls",
    model: "12V DC Siren",
    description: "A compact yet powerful 12V DC electronic siren designed for security alarms, control panels, and automation warning systems. Its sleek black housing is designed for easy surface mounting.",
    image: "/images/siren-12v-dc.jpg",
    features: [
      "Sound: High-decibel piercing alarm output",
      "Design: Compact black plastic housing",
      "Wiring: Simple two-wire connection (Red/Black)",
      "Application: Security systems, fault alarms, vehicle reverse warning"
    ],
    specs: [
      { name: "Type", value: "Electronic Siren" },
      { name: "Housing", value: "Black Polymer" }
    ],
    voltage: "12V DC",
    current: "Standard Draw",
    mounting: "Surface / Bracket Mount"
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
