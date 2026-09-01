const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "siren-12v-dc-box",
    name: "Industrial Security Siren (Top View)",
    brand: "Generic",
    category: "Sensors & Controls",
    model: "12V DC Siren",
    description: "A compact yet powerful 12V DC electronic siren designed for security alarms, control panels, and automation warning systems. Shown here from a top-down perspective detailing the central sound dispersion cone.",
    image: "/images/siren-12v-dc-box.jpg",
    features: [
      "Sound: High-decibel piercing alarm output",
      "Design: Compact black plastic housing",
      "Format: Top-down profile view",
      "Application: Security systems, fault alarms"
    ],
    specs: [
      { name: "Type", value: "Electronic Siren" },
      { name: "Housing", value: "Black Polymer" }
    ],
    voltage: "12V DC",
    current: "Standard Draw",
    mounting: "Surface / Bracket Mount"
  },
  {
    id: "sibass-crimping-tool-se64",
    name: "SIBASS Professional Crimping Tool (SE-6-4)",
    brand: "Sibass",
    category: "Tools",
    model: "SE-6-4",
    description: "The SIBASS SE-6-4 is a high-quality professional crimping tool designed specifically for electricians. It features an ergonomic grip and a ratchet mechanism for precise, repeatable crimping of ferrules and terminals (0.25 - 6mm²).",
    image: "/images/sibass-crimping-tool-se64.jpg",
    features: [
      "Range: Crimps 0.25mm² to 6mm² (AWG 23-10)",
      "Mechanism: Ratchet action for perfect crimps",
      "Handles: Ergonomic non-slip grips (Red/Blue)",
      "Application: Professional wire termination"
    ],
    specs: [
      { name: "Model", value: "SE-6-4" },
      { name: "Wire Capacity", value: "0.25 - 6mm²" },
      { name: "Type", value: "Hand Crimper" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Hand Tool"
  },
  {
    id: "sibass-warning-light-lte2071",
    name: "SIBASS Warning Light with Buzzer (LTE2071)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-LTE2071WJ",
    description: "The SIBASS SE-LTE2071WJ is a robust industrial warning light featuring a high-intensity red PC dome. It includes a multi-voltage LED (12-220V AC/DC) and a built-in buzzer, offering excellent visibility and audible alerts for factory floors.",
    image: "/images/sibass-warning-light-lte2071.jpg",
    features: [
      "Lense: High intensity PC dome, hard to distort or crack",
      "Vocal Type: Built-in buzzer (ON/OFF)",
      "Visibility: High photoelectric transmission rate (>1,000,000 MCD)",
      "Durability: No mechanic abrasion, no noise, anti-backlight ability"
    ],
    specs: [
      { name: "Model", value: "SE-LTE2071WJ" },
      { name: "Color", value: "Red" },
      { name: "Power", value: "4.1W LED" }
    ],
    voltage: "Multi-voltage AC&DC 12-220V",
    current: "Low Draw",
    mounting: "Screw Mount"
  },
  {
    id: "sibass-panel-buzzers",
    name: "SIBASS Mini Panel Mount Buzzers",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Compact Buzzer",
    description: "A bulk pack of SIBASS miniature red panel mount buzzers. Designed for standard 16mm or 22mm cutouts, these highly reliable sounders provide immediate acoustic feedback for control panels and operating systems.",
    image: "/images/sibass-panel-buzzers.jpg",
    features: [
      "Type: Continuous acoustic sounder",
      "Design: Ultra-compact panel mount footprint",
      "Color: Red transparent casing with sound wave logo",
      "Application: Fault warning, cycle completion alerts"
    ],
    specs: [
      { name: "Quantity", value: "10 Pieces (Box)" },
      { name: "Color", value: "Red" },
      { name: "Feedback", value: "Acoustic / Buzzer" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-led-indicators-as16",
    name: "SIBASS LED Indicator Lights (SE-AS16-7S)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-AS16-7S",
    description: "SIBASS SE-AS16-7S panel mount LED indicator lights. Engineered for long life and high visibility, these 16mm pilot lights (shown in Green and Red) operate up to 230V AC/DC and are essential for displaying circuit status.",
    image: "/images/sibass-led-indicators-as16.jpg",
    features: [
      "Illumination: High-brightness LED technology",
      "Colors: Available in Red, Green (and others)",
      "Standard: Conforms to IEC 60947-5-1",
      "Efficiency: <20mA ultra-low current consumption"
    ],
    specs: [
      { name: "Model", value: "SE-AS16-7S" },
      { name: "Size", value: "16mm Cutout" },
      { name: "Consumption", value: "<= 20mA" }
    ],
    voltage: "AC/DC 12-230V",
    current: "<= 20mA",
    mounting: "16mm Panel Mount"
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
