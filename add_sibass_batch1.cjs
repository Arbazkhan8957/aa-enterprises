const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-spd-dc-pv",
    name: "SIBASS Photovoltaic SPD (DC Surge Protector)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-PV Series",
    description: "The SIBASS SE-PV series is a Type 2 (T2) Surge Protective Device engineered specifically for solar photovoltaic applications. It provides critical overvoltage protection for expensive solar inverters and panels against lightning strikes and grid surges.",
    image: "/images/sibass-spd-dc.jpg",
    features: [
      "Application: Solar PV DC protection",
      "Type: T2 (Class II) Surge Protective Device",
      "Indicator: Visual RED/GREEN status flag (Green = OK, Red = Replace)",
      "Mounting: Standard 35mm DIN rail"
    ],
    specs: [
      { name: "Model", value: "SE-PV-1000 / SE-PV-600" },
      { name: "Max Voltage", value: "1000V DC / 600V DC" },
      { name: "Surge Current", value: "20/40KA (In/Imax)" }
    ],
    voltage: "600V - 1000V DC",
    current: "20/40KA",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-spd-ac-pro",
    name: "SIBASS AC Surge Protective Device",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-C40-PRO",
    description: "The SIBASS SE-C40-PRO is a high-performance AC surge protector designed to safeguard electrical installations and sensitive equipment from transient overvoltages. Available in multi-pole configurations for single and three-phase systems.",
    image: "/images/sibass-spd-ac.jpg",
    features: [
      "Application: AC Mains protection",
      "Type: T2 Surge Protective Device",
      "Indicator: Clear visual RED/GREEN lifecycle indicator",
      "Design: Modular plug-in cartridges for easy replacement"
    ],
    specs: [
      { name: "Model", value: "SE-C40-PRO" },
      { name: "Max Voltage", value: "320V AC" },
      { name: "Surge Current", value: "20/40KA (In/Imax)" }
    ],
    voltage: "320V AC",
    current: "20/40KA",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-selector-switch-zbw06",
    name: "SIBASS Illuminated Selector Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Z-BW06 Series",
    description: "The SIBASS Z-BW06 series features robust, illuminated rotary selector switches for industrial control panels. Equipped with translucent handles (available in Red and Green) and reliable contact blocks, they ensure safe and visible machine operation.",
    image: "/images/sibass-selector-switch.jpg",
    features: [
      "Illumination: Integrated BA9s bulb (2.6W max) for high visibility",
      "Handles: Ergonomic rotary knob (Red/Green options)",
      "Standard: Conforms to IEC947-5-1 / EN60947-5-1",
      "Base: Heavy-duty metal mounting collar"
    ],
    specs: [
      { name: "Model", value: "Z-BW06" },
      { name: "Type", value: "Rotary Selector" },
      { name: "Voltage", value: "220V Max (Indicator)" }
    ],
    voltage: "220V AC Max",
    current: "Standard Contacts",
    mounting: "Panel Mount (22mm)"
  },
  {
    id: "sibass-voltmeter-yellow",
    name: "SIBASS Digital Voltmeter Indicator (Yellow)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AD16-22DSV",
    description: "The SIBASS AD16-22DSV is a compact, panel-mounted digital voltmeter that doubles as an indicator light. This specific yellow variant provides crisp, real-time DC voltage readings for control cabinets and power distribution boards.",
    image: "/images/sibass-ad16-22dsv-yellow.jpg",
    features: [
      "Display: High-brightness Yellow LED digital readout",
      "Function: Combined pilot light and voltmeter",
      "Range: Direct measurement from DC 6V to 100V",
      "Size: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "AD16-22DSV" },
      { name: "Range", value: "DC 6-100V" },
      { name: "Color", value: "Yellow" }
    ],
    voltage: "DC 6-100V",
    current: "Low Power LED",
    mounting: "Panel Mount (22mm)"
  },
  {
    id: "sibass-voltmeter-multi",
    name: "SIBASS Digital Voltmeter Indicators (Multi-Color)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AD16-22DSV Assortment",
    description: "A complete assortment of the SIBASS AD16-22DSV digital voltmeter indicators. Available in Blue, Red, Yellow, and Green, these compact units offer precise DC voltage monitoring with vivid color-coding for different power zones.",
    image: "/images/sibass-ad16-22dsv-multi.jpg",
    features: [
      "Colors Included: Blue, Red, Yellow, Green",
      "Display: Clear 3-digit LED readout",
      "Application: Real-time DC voltage monitoring",
      "Design: 22mm standard industrial fit"
    ],
    specs: [
      { name: "Model", value: "AD16-22DSV" },
      { name: "Range", value: "DC 6-100V" },
      { name: "Colors", value: "Red/Blue/Yellow/Green" }
    ],
    voltage: "DC 6-100V",
    current: "Low Power LED",
    mounting: "Panel Mount (22mm)"
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
