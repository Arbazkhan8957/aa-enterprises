const fs = require('fs');

const path = 'd:/aa-enterprises/src/data.js';
let content = fs.readFileSync(path, 'utf-8');

// We will use regex to find and replace the 5 fans. Since we ran prettier, they are nicely formatted.
// It's safer to just replace them by matching their IDs.

const fanData = [
  {
    id: "res-fan-ra17251obhl-220v",
    name: "Resonance 6-inch Oval Cooling Fan 220-240V AC (RA17251OBHL)",
    model: "RA17251OBHL",
    voltage: "220-240V AC 50/60Hz",
    shortVoltage: "220-240V AC",
    current: "0.14A",
    bearing: "Ball Bearing",
    bearingText: "Ball Bearing providing significantly longer life.",
    desc: "Axial cooling fan for panels and cabinets. Delivers high airflow capacity to prevent equipment overheating. Features an energy-efficient, long-life motor optimized for continuous industrial operation."
  },
  {
    id: "res-fan-ra17251oshl-220v",
    name: "Resonance 6-inch Oval Cooling Fan 220-240V AC (RA17251OSHL)",
    model: "RA17251OSHL",
    voltage: "220-240V AC 50/60Hz",
    shortVoltage: "220-240V AC",
    current: "0.14A",
    bearing: "Sleeve Bearing",
    bearingText: "Sleeve Bearing for cost-effective standard operation.",
    desc: "Axial cooling fan for panels and cabinets. Delivers high airflow capacity to prevent equipment overheating. Features an energy-efficient motor optimized for continuous industrial operation."
  },
  {
    id: "res-fan-ra17251obhl-110v",
    name: "Resonance 6-inch Oval Cooling Fan 110-120V AC (RA17251OBHL)",
    model: "RA17251OBHL-110",
    voltage: "110-120V AC 50/60Hz",
    shortVoltage: "110-120V AC",
    current: "0.20A",
    bearing: "Ball Bearing",
    bearingText: "Ball Bearing providing significantly longer life.",
    desc: "Axial cooling fan for panels and cabinets. Delivers high airflow capacity to prevent equipment overheating. Features an energy-efficient, long-life motor optimized for continuous industrial operation."
  },
  {
    id: "res-fan-ra17251oshl-110v",
    name: "Resonance 6-inch Oval Cooling Fan 110-120V AC (RA17251OSHL)",
    model: "RA17251OSHL-110",
    voltage: "110-120V AC 50/60Hz",
    shortVoltage: "110-120V AC",
    current: "0.20A",
    bearing: "Sleeve Bearing",
    bearingText: "Sleeve Bearing for cost-effective standard operation.",
    desc: "Axial cooling fan for panels and cabinets. Delivers high airflow capacity to prevent equipment overheating. Features an energy-efficient motor optimized for continuous industrial operation."
  },
  {
    id: "res-fan-ra17251024hbl-24v",
    name: "Resonance 6-inch Oval Cooling Fan 24V DC (RA17251024HBL)",
    model: "RA17251024HBL",
    voltage: "24V DC",
    shortVoltage: "24V DC",
    current: "0.28A",
    bearing: "Ball Bearing",
    bearingText: "Ball Bearing providing significantly longer life.",
    desc: "Axial cooling fan for panels and cabinets. Delivers high airflow capacity to prevent equipment overheating. Features an energy-efficient, long-life motor optimized for continuous industrial operation."
  }
];

// Re-generate the full object string for each fan
fanData.forEach(fan => {
  const newObj = `  {
    id: "${fan.id}",
    name: "${fan.name}",
    brand: "Resonance",
    category: "Resonance Cooling Fans",
    model: "${fan.model}",
    description: "${fan.desc}",
    image: "/images/cooling-fan-${fan.id.replace('res-fan-', '')}.jpg",
    features: [
      "Model: ${fan.model} - High-efficiency thermal management solution.",
      "Operating Voltage: ${fan.voltage}.",
      "Current: ${fan.current}.",
      "Bearing Type: ${fan.bearingText}",
      "Mounting Dimensions: Oval frame for seamless installation.",
      "Motor Technology: Engineered for continuous 24/7 operation.",
      "Aerodynamics: Optimized impeller blade curvature maximizes CFM airflow.",
      "Protection: Impedance or thermal protection prevents coil burnout.",
      "Application: Specifically required for Ventilation, VFD cooling, and high-density relay panels.",
      "Certification: CE mark.",
    ],
    specs: [
      {
        name: "Voltage",
        value: "${fan.shortVoltage}",
      },
      {
        name: "Current",
        value: "${fan.current}",
      },
      {
        name: "Bearing",
        value: "${fan.bearing}",
      },
      {
        name: "Application",
        value: "Ventilation & Cooling",
      },
      {
        name: "Size",
        value: "6-inch Oval",
      },
    ],
  },`;

  // Find the existing object in the file
  const regex = new RegExp(`  {\\s*id: "${fan.id}",[\\s\\S]*?\\],\\s*\\},?`, 'g');
  
  if (regex.test(content)) {
    content = content.replace(regex, newObj);
  } else {
    console.log("Could not find", fan.id);
  }
});

fs.writeFileSync(path, content, 'utf-8');
console.log("Updated fans successfully.");
