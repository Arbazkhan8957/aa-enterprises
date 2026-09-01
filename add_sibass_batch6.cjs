const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-mini-siren",
    name: "SIBASS Mini Motor Siren",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-MS190",
    description: "The SIBASS SE-MS190 is a high-decibel motor-driven industrial siren. Housed in a durable red metal casing, it provides a piercing, continuous alarm sound designed to cut through heavy ambient noise in factories and construction sites.",
    image: "/images/sibass-mini-siren.jpg",
    features: [
      "Acoustics: High-frequency motor-driven rotary siren",
      "Housing: Heavy-duty red powder-coated steel casing",
      "Mounting: Includes pre-drilled adjustable metal bracket",
      "Application: Emergency warnings, shift changes, and heavy machinery alerts"
    ],
    specs: [
      { name: "Model", value: "SE-MS190" },
      { name: "Type", value: "Motor Siren" },
      { name: "Color", value: "Industrial Red" }
    ],
    voltage: "Available in 12V/24V DC or 110V/220V/380V AC",
    current: "High Draw",
    mounting: "Bracket Mount"
  },
  {
    id: "sibass-mini-siren-top",
    name: "SIBASS Mini Motor Siren (Top Profile)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-MS190 Top View",
    description: "A detailed top-down view of the SIBASS SE-MS190 motor siren, showcasing the protective rotary fan grille that prevents debris from jamming the internal acoustic rotor while maximizing sound dispersion.",
    image: "/images/sibass-mini-siren-top.jpg",
    features: [
      "Design: Radial sound dispersion grille",
      "Protection: Prevents accidental contact with high-speed internal rotor",
      "Finish: Rust-resistant baked enamel coating",
      "Maintenance: Easy-access top plate screws"
    ],
    specs: [
      { name: "Model", value: "SE-MS190" },
      { name: "Format", value: "Top Profile" },
      { name: "Material", value: "Steel" }
    ],
    voltage: "Universal",
    current: "N/A",
    mounting: "N/A"
  },
  {
    id: "sibass-contact-block-zb2",
    name: "SIBASS Contact Block (Normally Open)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2-BE101",
    description: "The SIBASS ZB2-BE101 is a premium auxiliary contact block for industrial push buttons and selector switches. Color-coded green for Normally Open (NO) circuits, it ensures ultra-reliable electrical switching in high-vibration control panels.",
    image: "/images/sibass-contact-block-zb2.jpg",
    features: [
      "Contact Type: Normally Open (NO) - Green",
      "Rating: 10(6)A at 400V AC",
      "Installation: Quick snap-on modular design",
      "Durability: High mechanical and electrical lifespan"
    ],
    specs: [
      { name: "Model", value: "ZB2-BE101" },
      { name: "Type", value: "Normally Open (NO)" },
      { name: "Current", value: "10A" }
    ],
    voltage: "400V AC",
    current: "10A (6A Inductive)",
    mounting: "Snap-on Modular"
  },
  {
    id: "sibass-clamp-meter",
    name: "SIBASS Digital Clamp Meter",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "DT266",
    description: "The SIBASS DT266 Digital Clamp Meter is an essential diagnostic tool for electricians. It allows safe, non-contact measurement of high AC currents, alongside standard multimeter functions like DC/AC voltage and continuity testing.",
    image: "/images/sibass-clamp-meter.jpg",
    features: [
      "Functions: Non-contact ACA measurement, AC/DC Voltage, Resistance, Continuity",
      "Display: Clear digital LCD with Data Hold function",
      "Safety: Built-in insulation tester port (500V option)",
      "Extras: Includes carrying case and test leads"
    ],
    specs: [
      { name: "Model", value: "DT266" },
      { name: "Type", value: "Clamp Multimeter" },
      { name: "Function", value: "AC Current" }
    ],
    voltage: "Test up to 750V AC / 1000V DC",
    current: "Clamp up to 1000A AC",
    mounting: "Handheld Portable"
  },
  {
    id: "sibass-3phase-protector",
    name: "SIBASS 3-Phase Adjustable Voltage & Amp Protector",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-82N(63A)",
    description: "The SIBASS SE-82N is a state-of-the-art 3-phase digital protection relay. It continuously monitors L1, L2, and L3 lines, providing instantaneous cutoff against overvoltage, undervoltage, and overcurrent faults to safeguard expensive industrial machinery.",
    image: "/images/sibass-3phase-protector.jpg",
    features: [
      "Display: 6 Independent LED digital tubes for real-time V & A on all 3 phases",
      "Protection: Fully adjustable Over/Under Voltage and Overcurrent limits",
      "Recovery: Automatic reset with programmable delay times",
      "Installation: Standard 35mm DIN rail mount"
    ],
    specs: [
      { name: "Model", value: "SE-82N(63A)" },
      { name: "Type", value: "3-Phase Relay" },
      { name: "Capacity", value: "63A per phase" }
    ],
    voltage: "3-Phase 380V-400V AC",
    current: "63A Max",
    mounting: "DIN Rail Mount"
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
console.log('Successfully added 5 new SIBASS varied items!');
