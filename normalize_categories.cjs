const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-relay-socket-pyf14a-box",
    name: "SIBASS Relay Socket (PYF-14A) Retail Box",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PYF-14A Box",
    description: "The authentic retail packaged SIBASS PYF-14A relay socket. Designed for heavy industrial automation, this 14-pin DIN-rail mountable base ensures a perfectly tight mechanical connection for your 4PDT relays.",
    image: "/images/sibass-relay-socket-pyf14a-box.jpg",
    features: [
      "Packaging: Authentic SIBASS retail package (Qty 20)",
      "Configuration: 14-Pin layout",
      "Terminals: Deep-set safety screw clamps",
      "Mounting: Quick snap-on 35mm DIN rail compatible"
    ],
    specs: [
      { name: "Model", value: "PYF-14A" },
      { name: "Format", value: "Retail Box" },
      { name: "Pins", value: "14-Pin" }
    ],
    voltage: "250V AC",
    current: "5A Max",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-hour-meter",
    name: "SIBASS Digital Hour Meter",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-HR-1",
    description: "The SIBASS Industrial Hour Meter provides highly accurate tracking of machinery running time. Featuring a tamper-proof mechanical analog-style rolling display housed in a compact panel-mount enclosure.",
    image: "/images/sibass-hour-meter.jpg",
    features: [
      "Display: 6-digit rolling mechanical counter (99999.9 hours)",
      "Function: Tracks total machine run time for maintenance scheduling",
      "Housing: Dust and shock resistant black ABS panel",
      "Operation: Synchronous motor driven for extreme reliability"
    ],
    specs: [
      { name: "Type", value: "Hour Meter" },
      { name: "Capacity", value: "99999.9 Hrs" },
      { name: "Brand", value: "Sibass" }
    ],
    voltage: "220V-240V AC",
    current: "Low Power",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-motion-sensor",
    name: "SIBASS Infrared Motion Sensor",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-PIR-360",
    description: "The SIBASS Infrared (PIR) Motion Sensor provides automated, energy-saving lighting control for commercial and industrial spaces. Its sleek, low-profile dome design allows for discreet ceiling mounting while offering full 360-degree detection.",
    image: "/images/sibass-motion-sensor.jpg",
    features: [
      "Detection: 360-degree panoramic PIR infrared sensing",
      "Controls: Adjustable time-delay and ambient light (LUX) settings",
      "Design: Low profile ceiling-mount dome in matte white",
      "Application: Automated lighting for corridors, warehouses, and offices"
    ],
    specs: [
      { name: "Type", value: "PIR Sensor" },
      { name: "Coverage", value: "360 Degrees" },
      { name: "Brand", value: "Sibass" }
    ],
    voltage: "220V-240V AC",
    current: "Standard Load",
    mounting: "Ceiling Mount"
  },
  {
    id: "sibass-pendant-station-se06",
    name: "SIBASS Pendant Station (SE-06D2)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-06D2/E",
    description: "The SIBASS SE-06D2/E series pendant station is designed for direct control of heavy lifting equipment. Featuring a durable yellow ABS housing and responsive push buttons for directional hoist control alongside an emergency stop.",
    image: "/images/sibass-pendant-station.jpg",
    features: [
      "Controls: Multi-directional push buttons + Red E-Stop",
      "Housing: High-impact yellow polymer casing",
      "Protection: Dust and water-resistant for harsh environments",
      "Handling: Ergonomic grip with heavy-duty strain relief ring"
    ],
    specs: [
      { name: "Model", value: "SE-06D2/E" },
      { name: "Type", value: "Pendant Station" },
      { name: "Brand", value: "Sibass" }
    ],
    voltage: "Up to 500V AC",
    current: "Heavy Duty Contacts",
    mounting: "Handheld Wired"
  },
  {
    id: "frontier-timer-new",
    name: "FRONTIER Digital Timer (TM619 4P) Retail",
    brand: "Frontier",
    category: "Frontier Electricals",
    model: "TM619 4P Retail",
    description: "The industry-standard FRONTIER TM619 digital timer, featured in its official blue retail packaging. This 4-pin module provides flawless 24/7 weekly programmable automation for industrial lighting, pumping, and HVAC systems.",
    image: "/images/frontier-timer-new.jpg",
    features: [
      "Packaging: Official FRONTIER TM619 retail box",
      "Programming: Highly precise 24/7 weekly scheduling",
      "Display: Clear LCD with manual override functions",
      "Reliability: Built-in memory backup battery"
    ],
    specs: [
      { name: "Model", value: "TM619 4P" },
      { name: "Type", value: "Digital Timer" },
      { name: "Format", value: "Retail Box" }
    ],
    voltage: "220V-250V AC",
    current: "16A Resistive",
    mounting: "Panel/DIN Base"
  }
];

newItems.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

// Update categories based on brand
productsArray.forEach(p => {
  if (!p.brand) return;
  const b = p.brand.toLowerCase();
  if (b === 'resonance') {
    p.category = 'Resonance Cooling Fans';
  } else if (b === 'jigo') {
    p.category = 'Jigo Heavy Duty Connectors';
  } else if (b === 'stroke') {
    p.category = 'Stroke Electricals';
  } else if (b === 'sibass') {
    p.category = 'Sibass Electricals';
  } else if (b === 'frontier') {
    p.category = 'Frontier Electricals';
  } else if (b === 'enertech') {
    p.category = 'Enertech Electricals';
  } else {
    p.category = p.brand + ' Products';
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added 5 new items and normalized all categories by brand!');
