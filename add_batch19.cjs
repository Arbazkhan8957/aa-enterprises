const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-smps-power-supply",
    name: "SIBASS SMPS Power Supply",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Industrial SMPS",
    description: "A robust SIBASS Switched-Mode Power Supply (SMPS) housed in a durable perforated metal casing for optimal heat dissipation. Ideal for providing stable DC power to control panels, LED lighting, and industrial automation equipment.",
    image: "/images/sibass-smps-power-supply.jpg",
    features: [
      "Design: Perforated metal casing for passive cooling",
      "Reliability: High efficiency and low operating temperature",
      "Safety: Built-in short circuit and overload protection",
      "Application: Industrial controls, automation, LED displays"
    ],
    specs: [
      { name: "Type", value: "Switched-Mode Power Supply" },
      { name: "Housing", value: "Metal Vented" }
    ],
    voltage: "Input: 220V AC (Standard)",
    current: "Varies by wattage",
    mounting: "Panel/Surface Mount"
  },
  {
    id: "sibass-eco-acspd",
    name: "SIBASS-ECO Photovoltaic SPD (ACSPD-320N)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ACSPD-320N",
    description: "SIBASS-ECO Surge Protective Device (SPD) specifically designed for photovoltaic and solar power applications. Features a 4-pole DIN rail mountable design to protect sensitive solar equipment from lightning and switching surges.",
    image: "/images/sibass-eco-acspd.jpg",
    features: [
      "Application: Photovoltaic / Solar systems",
      "Protection: T2 class surge protection",
      "Indicators: Clear status indicator windows (Green/Red)",
      "Design: Modular DIN rail mountable"
    ],
    specs: [
      { name: "Model", value: "ACSPD-320N" },
      { name: "Uc", value: "320V~" },
      { name: "Imax", value: "40kA" },
      { name: "Up", value: "<= 1.5kV" }
    ],
    voltage: "320V AC",
    current: "Imax 40kA",
    mounting: "DIN Rail Mount"
  },
  {
    id: "minilec-mpr-d2-relay",
    name: "Minilec MPR D2 Motor Protection Relay",
    brand: "Minilec",
    category: "Relays",
    model: "MPR D2",
    description: "The Minilec MPR D2 is a highly reliable electronic motor protection relay. It offers comprehensive protection against overload, phase failure, and phase unbalance, ensuring the longevity and safety of industrial motors.",
    image: "/images/minilec-mpr-d2-relay.jpg",
    features: [
      "Protection: Overload, phase loss, and phase unbalance",
      "Settings: Adjustable overload time (2/5 seconds) and AMP settings",
      "Interface: Clear LED indicators for ON, OL (Overload), and SP",
      "Test/Reset: Built-in manual Test and Reset buttons"
    ],
    specs: [
      { name: "Model", value: "MPR D2" },
      { name: "Aux Supply", value: "240V AC" },
      { name: "Time Set", value: "2/5 Seconds" }
    ],
    voltage: "240V AC",
    current: "Configurable (refer to CTs)",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "photocontrol-as10-12",
    name: "AS-10-12 Photo Control Switch (10A)",
    brand: "Generic",
    category: "Sensors & Controls",
    model: "AS-10-12",
    description: "The AS-10-12 Photo Control Switch automatically turns lighting on at dusk and off at dawn. Housed in a weather-resistant blue casing with a sturdy metal mounting bracket, perfect for street lighting and outdoor automation.",
    image: "/images/photocontrol-as10-12.jpg",
    features: [
      "Function: Automatic Day/Night light control (Dusk to Dawn)",
      "Wiring: Simple 3-wire installation (Line, Neut, Load)",
      "Bracket: Included L-shape metal mounting bracket",
      "Application: Street lights, garden lights, security lighting"
    ],
    specs: [
      { name: "Model", value: "AS-10-12" },
      { name: "Type", value: "AC/DC Photo Control" },
      { name: "Rating", value: "10A" }
    ],
    voltage: "AC/DC 12V (Compatible)",
    current: "10A",
    mounting: "Bracket Mount"
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
console.log('Successfully added the 4 new items!');
