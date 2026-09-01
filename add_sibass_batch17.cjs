const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-green-pb-xb4-head",
    name: "SIBASS Green Push Button Head (Metal XB4 Style)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "XB4 Series Style",
    description: "A premium SIBASS 22mm green push button head featuring a heavy-duty metal bezel (XB4 style). Ideal for robust control panels requiring durable start/reset controls.",
    image: "/images/sibass-green-pb-xb4-head.jpg",
    features: [
      "Actuator: Flush Green Head",
      "Material: High-quality metal bezel and collar",
      "Mounting: 22mm standard cutout",
      "Compatibility: Standard contact blocks"
    ],
    specs: [
      { name: "Color", value: "Green" },
      { name: "Base Type", value: "Metal" },
      { name: "Action", value: "Spring Return" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-industrial-cable-reel",
    name: "SIBASS Industrial Cable Reel (3 Sockets)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Heavy Duty Reel",
    description: "A heavy-duty industrial cable reel equipped with three SIBASS IP44/IP67 blue waterproof sockets. Features a sturdy metal frame, thermal cutout/switch protection, and a durable winding drum.",
    image: "/images/sibass-cable-reel-front.jpg",
    features: [
      "Sockets: 3x SIBASS Blue Waterproof Receptacles",
      "Protection: Built-in thermal cutout/switch",
      "Frame: Sturdy metal stand with ergonomic grip",
      "Application: Construction sites, heavy industry, workshops"
    ],
    specs: [
      { name: "Outlets", value: "3" },
      { name: "Protection Level", value: "IP44 / Weather Resistant" },
      { name: "Stand", value: "Tubular Metal" }
    ],
    voltage: "220V - 250V AC",
    current: "16A per socket",
    mounting: "Portable Free-standing"
  },
  {
    id: "sibass-estop-small-16mm",
    name: "SIBASS Compact Emergency Stop Button",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Compact Series",
    description: "A compact SIBASS red mushroom head emergency stop button. Features a twist-to-release mechanism and prominent directional arrows, perfect for space-constrained control panels.",
    image: "/images/sibass-estop-small-top.jpg",
    features: [
      "Size: Compact design for smaller cutouts",
      "Action: Latching, Twist-to-Release",
      "Marking: High-visibility white arrows",
      "Contacts: Integrated switching mechanism"
    ],
    specs: [
      { name: "Head Type", value: "Mushroom" },
      { name: "Color", value: "Red" },
      { name: "Reset", value: "Twist" }
    ],
    voltage: "Standard Control",
    current: "Standard Load",
    mounting: "Panel Mount"
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
console.log('Successfully added the batch 17 of SIBASS items!');
