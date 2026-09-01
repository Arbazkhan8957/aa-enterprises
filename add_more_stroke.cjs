const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newStrokeItems = [
  {
    id: "stroke-push-buttons-xb2",
    name: "Stroke XB2 Series Push Buttons",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "XB2 Series",
    description: "The Stroke XB2 series provides reliable, modular push buttons and selector switches for industrial control panels. Featuring robust contact blocks and vibrant colors for clear signaling, they ensure highly responsive manual control in all automation environments.",
    image: "/images/stroke-push-buttons.jpg",
    features: [
      "Type: Momentary, Latching, Mushroom, and Selector switches",
      "Model: XB2-BA, XB2-BC, XB2-BD series",
      "Contacts: Modular NO/NC contact blocks",
      "Colors: Red, Green, Blue, Yellow, Black",
      "Protection: Dust and moisture resistant for panel mounting"
    ],
    specs: [
      { name: "Series", value: "XB2" },
      { name: "Mounting", value: "22mm Panel Cutout" },
      { name: "Action", value: "Momentary / Latching" }
    ],
    voltage: "Up to 400V",
    current: "10A (Contacts)",
    mounting: "22mm Flush Mount"
  },
  {
    id: "stroke-fan-12038asl",
    name: "Stroke 12038ASL AC Cooling Fan (220V)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "12038ASL",
    description: "The Stroke 12038ASL is a high-efficiency 120x120x38mm AC cooling fan designed for continuous thermal management. Operating smoothly at 2200 RPM, it provides excellent airflow for control cabinets, server racks, and heavy machinery enclosures.",
    image: "/images/stroke-fan-12038asl.jpg",
    features: [
      "Size: 120x120x38mm",
      "Model: 12038ASL",
      "Power: 25W (High Efficiency)",
      "Speed: 2200 RPM",
      "Operation: Quiet and continuous cooling performance"
    ],
    specs: [
      { name: "Size", value: "120x120x38mm" },
      { name: "Power", value: "220V AC / 25W" },
      { name: "Speed", value: "2200 RPM" }
    ],
    voltage: "220V AC",
    current: "0.14A",
    mounting: "Panel/Chassis Mount"
  },
  {
    id: "stroke-mc4-connector",
    name: "Stroke MC4 1000V Solar Connectors",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "MC4-1000V",
    description: "Stroke MC4 Connectors are engineered specifically for high-voltage solar photovoltaic systems. Rated for 1000V DC, these IP67 weatherproof connectors ensure minimal contact resistance and maximum longevity under harsh outdoor UV exposure.",
    image: "/images/stroke-mc4-box.jpg",
    features: [
      "Application: Solar PV arrays and inverter connections",
      "Protection: IP67 Waterproof and Dustproof",
      "Material: UV resistant robust polymer housing",
      "Locking: Snap-in lock mechanism for secure mating",
      "Certification: CE / RoHS compliant"
    ],
    specs: [
      { name: "Voltage Rating", value: "1000V DC" },
      { name: "IP Rating", value: "IP67" },
      { name: "Type", value: "Solar MC4" }
    ],
    voltage: "1000V DC",
    current: "30A",
    mounting: "Cable Inline"
  },
  {
    id: "stroke-mc4-terminals",
    name: "Stroke MC4 Crimp Terminals",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "MC4-Pins",
    description: "High-conductivity copper crimp terminals designed for Stroke MC4 Solar Connectors. These pins ensure an ultra-low resistance connection for maximum solar power yield and are heavily plated to prevent oxidation in outdoor environments.",
    image: "/images/stroke-mc4-terminals.jpg",
    features: [
      "Material: Highly conductive copper alloy",
      "Plating: Anti-oxidation tin/silver plating",
      "Application: Use with MC4 solar connector housings",
      "Crimping: Compatible with standard MC4 crimping tools",
      "Durability: Rated for high-current DC transmission"
    ],
    specs: [
      { name: "Type", value: "MC4 Male/Female Pins" },
      { name: "Material", value: "Plated Copper" },
      { name: "Compatibility", value: "Solar Connectors" }
    ],
    voltage: "1000V DC",
    current: "30A",
    mounting: "Crimp Connection"
  },
  {
    id: "stroke-3way-splitter",
    name: "Stroke 3-Way Industrial Plug Splitter (IP67)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Type 0132",
    description: "The Stroke Type 0132 is a heavy-duty 3-way industrial plug splitter designed for robust power distribution in wet and demanding environments. With an IP67 waterproof rating and secure locking caps, it easily splits a single 16A feed into three safe outputs.",
    image: "/images/stroke-3way-splitter.jpg",
    features: [
      "Configuration: 1-to-3 Industrial Socket Splitter",
      "Protection: IP67 Weatherproof and Dustproof",
      "Design: Impact-resistant heavy-duty polymer body",
      "Contacts: Solid brass pins for reliable continuity",
      "Application: Construction, shipyards, outdoor events"
    ],
    specs: [
      { name: "Type", value: "3-Way Splitter" },
      { name: "IP Rating", value: "IP67" },
      { name: "Configuration", value: "2P+E (3 Pin)" }
    ],
    voltage: "220V - 250V",
    current: "16A",
    mounting: "Inline Portable"
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
