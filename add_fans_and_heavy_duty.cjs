const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newProducts = [
  {
    id: "fan-ra12038abh1",
    name: "Resonance RA12038ABH1 Cooling Fan",
    brand: "Resonance",
    category: "Resonance Cooling Fan",
    image: "/images/fan1.jpg",
    description: "High-performance AC cooling fan with ball bearing for industrial panels and enclosures.",
    model: "RA12038ABH1",
    voltage: "110-120V AC",
    current: "0.14A",
    mounting: "Panel Mount",
    features: ["Ball Bearing", "50/60Hz Frequency", "Durable Plastic Frame", "High Airflow"],
    specs: [
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Size", value: "120x120x38mm" }
    ],
    applications: ["Control Panels", "Server Racks", "Industrial Enclosures"]
  },
  {
    id: "fan-ra12038abhl",
    name: "Resonance RA12038ABHL Cooling Fan",
    brand: "Resonance",
    category: "Resonance Cooling Fan",
    image: "/images/fan2.jpg",
    description: "High-performance AC cooling fan with ball bearing for industrial panels and enclosures.",
    model: "RA12038ABHL",
    voltage: "220-240V AC",
    current: "0.14A",
    mounting: "Panel Mount",
    features: ["Ball Bearing", "50/60Hz Frequency", "Durable Plastic Frame", "High Airflow"],
    specs: [
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Size", value: "120x120x38mm" }
    ],
    applications: ["Control Panels", "Server Racks", "Industrial Enclosures"]
  },
  {
    id: "fan-ra12038asl",
    name: "Resonance RA12038ASL Cooling Fan",
    brand: "Resonance",
    category: "Resonance Cooling Fan",
    image: "/images/fan3.jpg",
    description: "Reliable AC cooling fan with sleeve bearing for standard cooling applications.",
    model: "RA12038ASL",
    voltage: "220-240V AC",
    current: "0.12A",
    mounting: "Panel Mount",
    features: ["Sleeve Bearing", "50/60Hz Frequency", "Cost-effective Cooling", "Quiet Operation"],
    specs: [
      { name: "Bearing Type", value: "Sleeve Bearing" },
      { name: "Size", value: "120x120x38mm" }
    ],
    applications: ["Control Panels", "General Electronics", "Small Enclosures"]
  },
  {
    id: "fan-ra12038b2hsl",
    name: "Resonance RA12038B2HSL Cooling Fan",
    brand: "Resonance",
    category: "Resonance Cooling Fan",
    image: "/images/fan4.jpg",
    description: "Powerful 22W AC cooling fan with ball bearing for demanding thermal management.",
    model: "RA12038B2HSL",
    voltage: "220-240V AC",
    current: "0.14A (22W)",
    mounting: "Panel Mount",
    features: ["Ball Bearing", "High Power 22W", "50/60Hz Frequency", "Maximum Airflow"],
    specs: [
      { name: "Bearing Type", value: "Ball Bearing" },
      { name: "Power", value: "22W" },
      { name: "Size", value: "120x120x38mm" }
    ],
    applications: ["Heavy Industrial Panels", "High-heat Environments", "Large Enclosures"]
  },
  {
    id: "hdc-ha10",
    name: "Jigo HA-10 Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd1.png",
    description: "Robust heavy duty connector designed for harsh industrial environments, ensuring secure power and signal transmission.",
    model: "HA-10",
    voltage: "250V / 400V",
    current: "16A",
    mounting: "Surface / Bulkhead",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Easy Locking Mechanism"],
    specs: [
      { name: "Poles", value: "10 + PE" },
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  },
  {
    id: "hdc-he16",
    name: "Jigo HE-16 Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd2.png",
    description: "Robust heavy duty connector designed for harsh industrial environments, ensuring secure power and signal transmission.",
    model: "HE-16",
    voltage: "500V",
    current: "16A",
    mounting: "Surface / Bulkhead",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Easy Locking Mechanism"],
    specs: [
      { name: "Poles", value: "16 + PE" },
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  },
  {
    id: "hdc-ha16",
    name: "Jigo HA-16 Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd3.jpg",
    description: "Robust heavy duty connector designed for harsh industrial environments, ensuring secure power and signal transmission.",
    model: "HA-16",
    voltage: "250V / 400V",
    current: "16A",
    mounting: "Surface / Bulkhead",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Easy Locking Mechanism"],
    specs: [
      { name: "Poles", value: "16 + PE" },
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  },
  {
    id: "hdc-he24",
    name: "Jigo HE-24 Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd4.jpg",
    description: "Robust heavy duty connector designed for harsh industrial environments, ensuring secure power and signal transmission.",
    model: "HE-24",
    voltage: "500V",
    current: "16A",
    mounting: "Surface / Bulkhead",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Easy Locking Mechanism"],
    specs: [
      { name: "Poles", value: "24 + PE" },
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  },
  {
    id: "hdc-ha32",
    name: "Jigo HA-32 Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd5.jpg",
    description: "Robust heavy duty connector designed for harsh industrial environments, ensuring secure power and signal transmission.",
    model: "HA-32",
    voltage: "250V / 400V",
    current: "16A",
    mounting: "Surface / Bulkhead",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Easy Locking Mechanism"],
    specs: [
      { name: "Poles", value: "32 + PE" },
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  },
  {
    id: "hdc-cat",
    name: "Jigo Heavy Duty Connectors",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    image: "/images/hd5.jpg",
    description: "Premium heavy duty connectors for robust industrial power and signal transmission.",
    model: "Various",
    voltage: "250V - 500V",
    current: "16A - 35A",
    mounting: "Various",
    features: ["Die-cast Aluminum Housing", "IP65 Protection", "Vibration Resistant", "Secure Locking"],
    specs: [
      { name: "Protection", value: "IP65" }
    ],
    applications: ["Machinery", "Robotics", "Wind Energy", "Railway"]
  }
];

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

// Filter out old ones just in case
productsArray = productsArray.filter(p => !p.category.includes('Resonance') && !p.category.includes('Heavy Duty'));

const updatedProducts = [...productsArray, ...newProducts];

const newData = `export const products = ${JSON.stringify(updatedProducts, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));

console.log('Successfully added Resonance Cooling Fans and Jigo Heavy Duty Connectors!');
