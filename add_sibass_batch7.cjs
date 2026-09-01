const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-voltage-protector-single",
    name: "SIBASS Single-Phase Voltage & Amp Protector",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-63N(63A)",
    description: "The SIBASS SE-63N(63A) is a smart, adjustable voltage and current protector for single-phase circuits. Featuring a dual LED display for real-time monitoring, it automatically disconnects power during voltage spikes or overcurrent events, protecting sensitive electronics.",
    image: "/images/sibass-voltage-protector-single.jpg",
    features: [
      "Display: Dual Digital LED for real-time Voltage and Amperage",
      "Protection: Programmable over/under voltage and overcurrent cut-off",
      "Function: Automatic power recovery with adjustable delay timer",
      "Installation: Compact 35mm DIN rail mounting"
    ],
    specs: [
      { name: "Model", value: "SE-63N(63A)" },
      { name: "Type", value: "Single Phase Relay" },
      { name: "Capacity", value: "63A" }
    ],
    voltage: "220V AC",
    current: "63A Max",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-industrial-plug-set",
    name: "SIBASS Industrial Plug & Socket Assortment",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Blue Series",
    description: "A rugged assortment of SIBASS industrial blue plugs and sockets. Built with heavy-duty impact-resistant plastic, these connectors ensure safe, weatherproof power distribution for factories, construction sites, and outdoor events.",
    image: "/images/sibass-industrial-plug-set.jpg",
    features: [
      "Components: Wall-mount socket, inline socket, and inline male plug",
      "Protection: Spring-loaded covers prevent dust and water ingress (IP44)",
      "Safety: Recessed brass pins prevent accidental contact",
      "Housing: High-impact industrial blue polymer"
    ],
    specs: [
      { name: "Type", value: "Industrial Connectors" },
      { name: "Color", value: "Blue" },
      { name: "IP Rating", value: "IP44" }
    ],
    voltage: "220V-250V AC",
    current: "16A Standard",
    mounting: "Wall/Inline"
  },
  {
    id: "sibass-wall-socket-13a",
    name: "SIBASS Industrial Wall Mount Socket (Front View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-WallSocket",
    description: "A detailed front view of the SIBASS industrial wall-mount socket. Featuring a robust spring-loaded flap and deep-recessed universal pin configuration to accommodate standard 13A plugs safely within industrial environments.",
    image: "/images/sibass-wall-socket-13a.jpg",
    features: [
      "Design: Universal socket layout for 10-13A plugs",
      "Protection: Spring-loaded weather-resistant cover",
      "Mounting: 4-point screw flange for secure wall attachment",
      "Material: Flame-retardant blue casing"
    ],
    specs: [
      { name: "Type", value: "Wall Socket" },
      { name: "Rating", value: "10-13A" },
      { name: "Poles", value: "2P+E" }
    ],
    voltage: "250V AC",
    current: "10-13A",
    mounting: "Panel/Wall"
  },
  {
    id: "sibass-wall-socket-terminals",
    name: "SIBASS Industrial Wall Socket (Wiring Terminals)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-WallSocket-Rear",
    description: "A rear view of the SIBASS industrial wall socket, highlighting the high-quality brass screw terminals. Clearly marked for Live (L), Neutral (N), and Earth (Ground), ensuring fast, error-free wiring by electricians.",
    image: "/images/sibass-wall-socket-terminals.jpg",
    features: [
      "Terminals: Heavy-duty brass screw clamps for secure wire retention",
      "Markings: Clear L, N, and Earth symbols molded into the housing",
      "Safety: Fully enclosed backplate prevents short circuits",
      "Compatibility: Accepts solid or stranded industrial copper wire"
    ],
    specs: [
      { name: "Type", value: "Wiring Terminals" },
      { name: "Material", value: "Brass Contacts" },
      { name: "Rating", value: "10-13A 250V~" }
    ],
    voltage: "250V AC",
    current: "10-13A",
    mounting: "Internal Wiring"
  },
  {
    id: "sibass-dc-fuse-holder",
    name: "SIBASS DC Fuse Holder (1000V)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SEPV-32X",
    description: "The SIBASS SEPV-32X is a high-performance DC fuse holder engineered for solar photovoltaic (PV) arrays and high-voltage DC systems. Rated up to 1000V DC, it provides critical short-circuit protection for inverters and battery banks.",
    image: "/images/sibass-dc-fuse-holder.jpg",
    features: [
      "Application: Solar PV strings and DC battery storage",
      "Capacity: Rated for massive 1000V DC loads",
      "Safety: DIN rail mountable with finger-safe dead-front design",
      "Standards: Compliant with IEC-60269 and IEC-60947-3"
    ],
    specs: [
      { name: "Model", value: "SEPV-32X" },
      { name: "Type", value: "DC PV Fuse Holder" },
      { name: "Standard", value: "IEC-60269" }
    ],
    voltage: "1000V DC Max",
    current: "32A Max (Depending on fuse)",
    mounting: "DIN Rail"
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
console.log('Successfully added 5 new SIBASS power products!');
