const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-voltmeter-green",
    name: "SIBASS Digital Voltmeter Indicator (Green)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AD16-22DSV",
    description: "The SIBASS AD16-22DSV is a highly visible, panel-mounted digital voltmeter combining a pilot light with real-time DC voltage measurement. This green variant provides instant, crisp readouts for control panels and power distribution applications.",
    image: "/images/sibass-voltmeter-green.jpg",
    features: [
      "Display: Vivid Green LED digital readout",
      "Functionality: 2-in-1 pilot indicator and direct voltmeter",
      "Measurement Range: Direct DC 6V to 100V",
      "Form Factor: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "AD16-22DSV" },
      { name: "Range", value: "DC 6-100V" },
      { name: "Color", value: "Green" }
    ],
    voltage: "DC 6-100V",
    current: "Low Power LED",
    mounting: "Panel Mount (22mm)"
  },
  {
    id: "sibass-voltmeter-red",
    name: "SIBASS Digital Voltmeter Indicator (Red)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AD16-22DSV",
    description: "The red variant of the SIBASS AD16-22DSV digital voltmeter indicator. Perfect for critical power monitoring, providing a bright, unambiguous real-time voltage display on any industrial control cabinet.",
    image: "/images/sibass-voltmeter-red.jpg",
    features: [
      "Display: High-contrast Red LED digital readout",
      "Functionality: 2-in-1 pilot indicator and direct voltmeter",
      "Measurement Range: Direct DC 6V to 100V",
      "Form Factor: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "AD16-22DSV" },
      { name: "Range", value: "DC 6-100V" },
      { name: "Color", value: "Red" }
    ],
    voltage: "DC 6-100V",
    current: "Low Power LED",
    mounting: "Panel Mount (22mm)"
  },
  {
    id: "sibass-voltmeter-blue",
    name: "SIBASS Digital Voltmeter Indicator (Blue)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AD16-22DSV",
    description: "The blue variant of the SIBASS AD16-22DSV digital voltmeter indicator. Delivers a modern, distinct blue LED readout for real-time DC voltage tracking in advanced automation systems.",
    image: "/images/sibass-voltmeter-blue.jpg",
    features: [
      "Display: Sharp Blue LED digital readout",
      "Functionality: 2-in-1 pilot indicator and direct voltmeter",
      "Measurement Range: Direct DC 6V to 100V",
      "Form Factor: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "AD16-22DSV" },
      { name: "Range", value: "DC 6-100V" },
      { name: "Color", value: "Blue" }
    ],
    voltage: "DC 6-100V",
    current: "Low Power LED",
    mounting: "Panel Mount (22mm)"
  },
  {
    id: "sibass-pendant-cobp21h",
    name: "SIBASS Pendant Pushbutton Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COBP-21H",
    description: "The SIBASS COBP-21H is a rugged rain-proof pendant switch designed for safe control of hoists and overhead cranes. It features dedicated Up/Down directional buttons alongside a prominent twist-to-release emergency stop button.",
    image: "/images/sibass-pendant-cobp21h.jpg",
    features: [
      "Controls: Up, Down, and integrated Red Emergency Stop",
      "Safety: Rain-proof and dust-resistant enclosure (IP65)",
      "Power Handling: Rated for 500V, 2.2kW systems",
      "Design: High-visibility yellow shock-proof casing"
    ],
    specs: [
      { name: "Model", value: "COBP-21H" },
      { name: "Type", value: "Hoist Pendant" },
      { name: "Protection", value: "Rain Proof" }
    ],
    voltage: "Up to 500V AC",
    current: "2.2kW Rated",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-multi-socket-10132",
    name: "SIBASS 3-Way Industrial Socket Splitter",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Type 10132",
    description: "The SIBASS Type 10132 is a heavy-duty 3-way multi-outlet socket adapter. Conforming to IEC309-2 standards, it allows safe splitting of a single 16A industrial power line into three separate, waterproof IP44 rated sockets.",
    image: "/images/sibass-multi-socket-10132.jpg",
    features: [
      "Configuration: 1 Input to 3 Outputs (16A, 220-250V)",
      "Protection: IP44 Splash-proof with spring-loaded covers",
      "Standard: Conforms to IEC 309-2",
      "Housing: Impact-resistant industrial polymer"
    ],
    specs: [
      { name: "Model", value: "Type 10132" },
      { name: "Type", value: "3-Way Splitter" },
      { name: "IP Rating", value: "IP44" }
    ],
    voltage: "220V-250V AC",
    current: "16A",
    mounting: "Inline Plug"
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
