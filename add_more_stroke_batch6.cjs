const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "stroke-cable-reel-orange",
    name: "Stroke Heavy Duty Cable Reel (Orange)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Orange 4-Socket",
    description: "The Stroke Orange heavy-duty cable extension reel is designed for extreme site use. It incorporates a central Miniature Circuit Breaker (MCB) for comprehensive overload protection, an illuminated power switch, and 4 universal multi-pin sockets.",
    image: "/images/stroke-cable-reel-orange.jpg",
    features: [
      "Sockets: 4 x Universal output sockets",
      "Safety: Built-in transparent MCB switch protection",
      "Controls: Illuminated neon power indicator and thermostat",
      "Design: High-visibility orange ABS drum with metal stand"
    ],
    specs: [
      { name: "Brand", value: "Stroke Electric India" },
      { name: "Type", value: "Extension Reel" },
      { name: "Protection", value: "Integrated MCB" }
    ],
    voltage: "220V-250V AC",
    current: "16A",
    mounting: "Portable Reel"
  },
  {
    id: "stroke-blue-connectors-set",
    name: "Stroke 16A Blue Industrial Connector Set",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "ST-1132 Series",
    description: "A complete set of STROKE 16A blue industrial connectors (ST-1132 series). These IP67 waterproof connectors are built to IEC 60309-2 standards, offering unmatched durability and secure twist-lock mechanisms for wet and harsh industrial environments.",
    image: "/images/stroke-blue-connectors-set.jpg",
    features: [
      "Set Includes: Panel mount socket, inline coupler, and wall mount socket",
      "Protection: IP67 fully waterproof and dustproof",
      "Standard: Conforms to IEC 60309-2",
      "Design: Spring-loaded sealing caps for socket protection"
    ],
    specs: [
      { name: "Model", value: "ST-1132 Series" },
      { name: "IP Rating", value: "IP67" },
      { name: "Color", value: "Blue (220-250V)" }
    ],
    voltage: "220V-250V AC",
    current: "16A",
    mounting: "Various"
  },
  {
    id: "stroke-blue-connectors-inside",
    name: "Stroke 16A 3-Pin Industrial Plug (Male)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "ST-1132 Male",
    description: "The male plug variant of the STROKE 16A blue industrial range. Featuring a 3-pin (2P+E) solid brass pin configuration, it provides a highly conductive, gas-tight connection suitable for heavy single-phase power applications.",
    image: "/images/stroke-blue-connectors-inside.jpg",
    features: [
      "Configuration: 3-Pin (2P+E)",
      "Terminals: Solid brass precision-machined pins",
      "Housing: Impact-resistant engineered polymer",
      "Locking: Threaded lock ring for IP67 seal"
    ],
    specs: [
      { name: "Type", value: "Male Plug" },
      { name: "Pins", value: "2P+E (3-Pin)" },
      { name: "Current", value: "16A" }
    ],
    voltage: "220V-250V AC",
    current: "16A",
    mounting: "Cable Mount"
  },
  {
    id: "stroke-red-connectors-set",
    name: "Stroke 32A Red Industrial Connector Set",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "ST-1252 Series",
    description: "The STROKE ST-1252 series is a premium collection of red 32A industrial connectors designed for 3-phase power. Rated at IP67 for total waterproof protection, this set is essential for heavy machinery and construction site power distribution.",
    image: "/images/stroke-red-connectors-set.jpg",
    features: [
      "Set Includes: Heavy-duty panel mount socket, plug, and wall mount socket",
      "Protection: IP67 Waterproof with threaded secure locks",
      "Current: High-capacity 32A continuous rating",
      "Housing: Rugged red/grey industrial polymer"
    ],
    specs: [
      { name: "Model", value: "ST-1252 Series" },
      { name: "IP Rating", value: "IP67" },
      { name: "Color", value: "Red (415V)" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "Various"
  },
  {
    id: "stroke-red-connectors-inside",
    name: "Stroke 32A 5-Pin Industrial Plug (Male)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "ST-1252 Male",
    description: "The male plug from the STROKE ST-1252 32A series, featuring a robust 5-pin (3P+N+E) layout. Built with superior brass alloy pins, it guarantees extremely low resistance for safe and efficient high-power 3-phase transmission.",
    image: "/images/stroke-red-connectors-inside.jpg",
    features: [
      "Configuration: 5-Pin (3P+N+E) for 3-phase power",
      "Contacts: Heavy-duty solid brass pins",
      "Protection: Threaded locking ring ensures IP67 seal",
      "Reliability: Designed for harsh mechanical impact"
    ],
    specs: [
      { name: "Type", value: "Male Plug" },
      { name: "Pins", value: "3P+N+E (5-Pin)" },
      { name: "Current", value: "32A" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "Cable Mount"
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
console.log('Successfully added 5 new connector/reel items!');
