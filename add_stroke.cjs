const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

// 1. Add Category if it doesn't exist
let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

if (!categoriesArray.find(c => c.name === 'Stroke Electricals')) {
  categoriesArray.push({
    name: "Stroke Electricals",
    image: "/images/stroke-trolley.jpg",
    description: "High-quality industrial cable reels and electrical accessories designed for heavy-duty applications, safety, and mobility on site."
  });
  
  const newCatData = `export const categories = ${JSON.stringify(categoriesArray, null, 2)};\n`;
  data = data.replace(/export const categories = \[\s*([\s\S]*?)\s*\];/, newCatData.trim());
}

// 2. Add Products
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newStroke = [
  {
    id: "stroke-trolley-reel",
    name: "Stroke Heavy Duty Trolley Cable Reel",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Trolley Series",
    description: "The Stroke Heavy Duty Trolley Cable Reel features a robust build with an integrated handle and wheels for maximum mobility. Equipped with multiple industrial blue and red sockets, it's designed to supply reliable power across large construction sites and heavy industrial environments.",
    image: "/images/stroke-trolley.jpg",
    features: [
      "Mobility: Telescopic trolley handle and sturdy wheels",
      "Sockets: Multiple heavy-duty industrial sockets (Blue/Red)",
      "Safety: Built-in MCB/RCCB protection window",
      "Construction: High-impact resistant drum",
      "Application: Construction sites, shipyards, large workshops"
    ],
    specs: [
      { name: "Type", value: "Trolley Cable Reel" },
      { name: "Protection", value: "Built-in Breaker" },
      { name: "Material", value: "High-impact Plastic/Metal" }
    ],
    voltage: "220V / 415V",
    current: "16A / 32A",
    mounting: "Portable Trolley"
  },
  {
    id: "stroke-standard-reel",
    name: "Stroke Industrial Cable Reel (Standard Sockets)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Standard Reel",
    description: "A highly portable Stroke industrial cable reel featuring multiple standard flat/universal sockets. Built with a durable metal frame and a sturdy carrying handle, it provides convenient and safe power distribution for workshops, garages, and indoor industrial tasks.",
    image: "/images/stroke-standard.jpg",
    features: [
      "Design: Hand-carried tubular metal frame",
      "Sockets: 4x Universal/Standard flat pin sockets",
      "Indicator: Central power LED indicator",
      "Winding: Easy-wind handle mechanism",
      "Application: Workshops, garages, indoor maintenance"
    ],
    specs: [
      { name: "Type", value: "Portable Cable Reel" },
      { name: "Sockets", value: "4x Standard Universal" },
      { name: "Frame", value: "Tubular Metal" }
    ],
    voltage: "220V",
    current: "10A / 16A",
    mounting: "Portable Free-standing"
  },
  {
    id: "stroke-red-reel",
    name: "Stroke British Standard Heavy Duty Reel",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Red Series BS",
    description: "The Stroke Red Series Heavy Duty Cable Reel complies with British Standards (BS). It features 3 robust sockets, rust-resistant zinc-plated metal components, and a strong steel stand, making it a rugged choice for harsh outdoor and industrial power needs.",
    image: "/images/stroke-red.jpg",
    features: [
      "Compliance: Built to British Standards",
      "Construction: Strong steel stand with zinc plating for rust resistance",
      "Sockets: 3x Heavy-duty British Standard sockets",
      "Cable: Fitted with flexible and easy-to-wind cable",
      "Safety: Central reset/thermal cutout button"
    ],
    specs: [
      { name: "Standard", value: "British Standard" },
      { name: "Stand", value: "Steel (Rust Resistant)" },
      { name: "Sockets", value: "3x BS Sockets" }
    ],
    voltage: "250V",
    current: "13A / 16A",
    mounting: "Portable Free-standing"
  },
  {
    id: "stroke-orange-mcb",
    name: "Stroke Orange Cable Reel with MCB",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Orange MCB Series",
    description: "The Stroke Orange Series Cable Reel provides ultimate electrical safety with an integrated MCB (Miniature Circuit Breaker) and thermostat protection. Featuring 4 universal sockets and a highly visible orange drum, it is perfect for demanding industrial applications requiring strict safety protocols.",
    image: "/images/stroke-orange.jpg",
    features: [
      "Safety: Integrated MCB and Thermostat protection",
      "Sockets: 4x Universal sockets (220V-16A)",
      "Indicators: Power and Safety indicator lights",
      "Frame: Heavy-duty metal stand with rubber feet",
      "Visibility: High-visibility orange drum"
    ],
    specs: [
      { name: "Protection", value: "MCB + Thermostat" },
      { name: "Sockets", value: "4x 220V 16A" },
      { name: "Color", value: "High-Visibility Orange" }
    ],
    voltage: "220V",
    current: "16A",
    mounting: "Portable Free-standing"
  },
  {
    id: "stroke-pyf14a",
    name: "PYF14A 14-Pin Relay Base",
    brand: "Generic",
    category: "Stroke Electricals",
    model: "PYF14A",
    description: "The PYF14A is a standard 14-pin relay socket/base designed for secure DIN rail or screw mounting. It is fully compatible with standard 4PDT industrial relays (like MY4), offering reliable screw terminals for quick and safe wiring in control panels.",
    image: "/images/pyf14a.png",
    features: [
      "Configuration: 14-Pin Relay Base",
      "Mounting: 35mm DIN Rail or Panel Mount via screws",
      "Terminals: Secure screw terminals for easy wiring",
      "Compatibility: Standard 4PDT control relays",
      "Application: Industrial control panels, automation circuits"
    ],
    specs: [
      { name: "Pins", value: "14" },
      { name: "Mounting", value: "DIN Rail / Screw" },
      { name: "Compatibility", value: "4PDT Relays" }
    ],
    voltage: "250V",
    current: "10A",
    mounting: "DIN Rail / Panel"
  }
];

newStroke.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added Stroke Category and Products!');
