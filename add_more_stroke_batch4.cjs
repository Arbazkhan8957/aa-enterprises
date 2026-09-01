const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newStrokeItems = [
  {
    id: "stroke-tower-light",
    name: "Stroke Signal Tower Light (ST-402)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "ST-402 Series",
    description: "The Stroke ST-402 Series Signal Tower Lights provide high-visibility status indication for industrial machinery. Available in multi-tier configurations (Red, Yellow, Green), they feature ultra-bright LED technology and an integrated buzzer for immediate operator awareness in factory environments.",
    image: "/images/stroke-tower-light.jpg",
    features: [
      "Indication: Red, Yellow, Green high-intensity LED tiers",
      "Audio: Optional built-in warning buzzer",
      "Design: Modular cylindrical tower with adjustable mounting base",
      "Protection: Dust and moisture resistant for factory floors"
    ],
    specs: [
      { name: "Model", value: "ST-402-2 / ST-402-3" },
      { name: "Type", value: "LED Stack Light" },
      { name: "Colors", value: "Red/Yellow/Green" }
    ],
    voltage: "12V-24V DC / 110-220V AC",
    current: "Low Power LED",
    mounting: "Adjustable Base Mount"
  },
  {
    id: "stroke-crimping-tool-64a",
    name: "Stroke HSC8 6-4A Crimping Tool",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "HSC8 6-4A",
    description: "The Stroke HSC8 6-4A is a heavy-duty, self-adjusting crimping tool specifically engineered for wire ferrules. It delivers a perfect square crimp profile every time, featuring an ergonomic design and precise ratcheting mechanism to ensure consistent, gas-tight terminations.",
    image: "/images/stroke-crimping-tool-64a.jpg",
    features: [
      "Range: 0.25 - 10mm² (AWG 23-7)",
      "Profile: Four-mandrel square crimp profile",
      "Mechanism: Precision ratcheting with safety release",
      "Ergonomics: High-grip, dual-material handles"
    ],
    specs: [
      { name: "Model", value: "HSC8 6-4A" },
      { name: "Capacity", value: "0.25-10mm²" },
      { name: "Profile", value: "Square" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Hand Tool"
  },
  {
    id: "frontier-timer-tm619",
    name: "Frontier Digital Timer TM619 (4P)",
    brand: "Frontier",
    category: "Stroke Electricals",
    model: "TM619 4P",
    description: "The Frontier TM619 is a highly reliable digital programmable timer for automated switching of electrical loads. It features a clear LCD display, precise 24/7 weekly scheduling, and an internal battery backup to preserve programming during power outages.",
    image: "/images/frontier-timer-tm619.jpg",
    features: [
      "Programming: 24/7 weekly programmable timer",
      "Display: High-contrast digital LCD",
      "Backup: Internal battery memory backup",
      "Mounting: Panel mount (4-pin module)",
      "Application: Lighting control, pumps, and automated machinery"
    ],
    specs: [
      { name: "Model", value: "TM619" },
      { name: "Type", value: "Digital Timer" },
      { name: "Format", value: "Weekly/Daily" }
    ],
    voltage: "220V-240V AC",
    current: "16A Resistive",
    mounting: "Panel Mount"
  }
];

newStrokeItems.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added 3 new items!');
