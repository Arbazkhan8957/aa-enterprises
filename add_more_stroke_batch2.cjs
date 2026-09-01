const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newStrokeItems = [
  {
    id: "stroke-plug-type025",
    name: "Stroke Type 025 Industrial Plug (32A 5-Pin)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Type 025",
    description: "The Stroke Type 025 is a heavy-duty industrial plug designed for robust 3-phase power connections. Rated for 32A at 415V, this 5-pin (3P+N+E) plug offers a highly durable IP44-rated polymer housing, ensuring safe, secure, and splash-proof connections in factories and construction sites.",
    image: "/images/stroke-plug-type025.jpg",
    features: [
      "Configuration: 5-Pin (3P+N+E)",
      "Protection: IP44 Splash-proof",
      "Current/Voltage: 32A / 220-415V~",
      "Standard: Conforms to IEC60309-2",
      "Housing: High-impact resistant red/grey polymer"
    ],
    specs: [
      { name: "Model", value: "Type 025" },
      { name: "Poles", value: "3P+N+E" },
      { name: "IP Rating", value: "IP44" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "Cable Mount"
  },
  {
    id: "stroke-pb-cover",
    name: "Stroke Push Button Protective Cover",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "PB-Cover",
    description: "A transparent, high-strength polycarbonate protective cover designed for standard 22mm industrial push buttons. It effectively prevents accidental actuation of critical controls, such as emergency stops or start buttons, and can be sealed or locked for safety lockout/tagout procedures.",
    image: "/images/stroke-pb-cover.jpg",
    features: [
      "Material: Clear high-strength polycarbonate",
      "Compatibility: Standard 22mm panel mount push buttons",
      "Function: Prevents accidental switching",
      "Security: Lockout/Tagout (LOTO) ready with lock holes",
      "Design: Hinged cover for quick access"
    ],
    specs: [
      { name: "Material", value: "Clear Polycarbonate" },
      { name: "Size", value: "For 22mm Buttons" },
      { name: "Type", value: "Safety Cover" }
    ],
    voltage: "N/A",
    current: "N/A",
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
console.log('Successfully added more Stroke items!');
