const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-voltage-protector",
    name: "SIBASS Adjustable Voltage & Amp Protector",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-63N (63A)",
    description: "The SIBASS SE-63N is an intelligent, programmable digital protector for single-phase networks. It continuously monitors voltage and current, instantly cutting power during over/under voltage or overcurrent events to save sensitive electronics.",
    image: "/images/sibass-voltage-protector.jpg",
    features: [
      "Display: Dual bright LED readouts for real-time Voltage and Amperage",
      "Customization: Fully programmable thresholds via front-panel menu",
      "Capacity: High 63A load rating suitable for entire distribution boards",
      "Mounting: Standard 35mm DIN rail compatible"
    ],
    specs: [
      { name: "Model", value: "SE-63N" },
      { name: "Max Current", value: "63A" },
      { name: "Delay", value: "Adjustable 0.1s-10s" }
    ],
    voltage: "220V AC",
    current: "63A Max",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-siren-top",
    name: "SIBASS Mini Motor Siren (Top View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-MS190 Series",
    description: "A top-down view of the SIBASS Mini Motor Siren (MS190 style). This angle highlights the vortex-style acoustic grill designed to project the high-decibel warning wail uniformly across wide industrial factory floors.",
    image: "/images/sibass-siren-top.jpg",
    features: [
      "Acoustics: Engineered vortex grill for omnidirectional sound dispersion",
      "Build: Heavy-duty red steel casing for high-visibility and durability",
      "Motor: Pure copper high-speed internal rotary motor",
      "Application: Fire alarms, shift-change signals, and crane warnings"
    ],
    specs: [
      { name: "Type", value: "Motor Driven" },
      { name: "Color", value: "Signal Red" },
      { name: "Grill", value: "Vortex Fan" }
    ],
    voltage: "220V AC",
    current: "Standard",
    mounting: "Base Mount"
  },
  {
    id: "sibass-relay-sockets",
    name: "SIBASS Industrial Relay Sockets Assortment",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "PF & PYF Series",
    description: "A comprehensive assortment of SIBASS industrial relay bases. This selection includes the round 8-pin (PF083A), round 11-pin (PF113A), square 14-pin (PYF14A), and square 8-pin (PYF08A) sockets, ensuring compatibility with all standard control relays.",
    image: "/images/sibass-relay-sockets.jpg",
    features: [
      "Range: Includes PF083A, PF113A, PYF14A, and PYF08A models",
      "Terminals: High-conductivity screw clamps for secure wire retention",
      "Material: Flame-retardant engineered plastic bases",
      "Mounting: Dual-compatible with DIN rail or panel screw mounting"
    ],
    specs: [
      { name: "Series", value: "PF & PYF" },
      { name: "Pins", value: "8, 11, 14 Pin" },
      { name: "Mount", value: "DIN / Screw" }
    ],
    voltage: "250V AC",
    current: "10A/15A",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-socket-reel",
    name: "SIBASS Industrial Socket Cable Reel",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Reel",
    description: "The SIBASS Industrial Socket Reel is built for serious job sites. It features a heavy-duty portable drum frame integrated with three IP44 rated weatherproof sockets, providing safe, extended power distribution across rough terrain.",
    image: "/images/sibass-socket-reel.jpg",
    features: [
      "Outlets: 3 x Red IP44 rated sockets with spring-loaded protective caps",
      "Frame: Robust tubular steel stand with ergonomic carrying handle",
      "Drum: High-impact polymer drum for smooth cable winding",
      "Safety: Integrated thermal overload protection cutout"
    ],
    specs: [
      { name: "Sockets", value: "3x Weatherproof" },
      { name: "Frame", value: "Steel Tube" },
      { name: "Rating", value: "IP44" }
    ],
    voltage: "220V-250V",
    current: "16A",
    mounting: "Portable Free-Standing"
  },
  {
    id: "sibass-fan-172qyasl",
    name: "SIBASS Square Cooling Fan (SE-172QYASL)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-172QYASL",
    description: "The SIBASS SE-172QYASL is a specialized mid-to-large scale industrial cooling fan. Running at 38W and 2600RPM, its compact yet aggressive square flange design forces massive airflow through densely packed electrical enclosures.",
    image: "/images/sibass-fan-172qyasl.jpg",
    features: [
      "Size: Optimized 172mm footprint for versatile panel mounting",
      "Motor: Sleeve bearing (SL) for quiet, continuous operation",
      "Frame: Die-cast aluminum alloy for structural rigidity",
      "Efficiency: Low 0.25A current draw with high thermal extraction"
    ],
    specs: [
      { name: "Model", value: "SE-172QYASL" },
      { name: "Power", value: "38W" },
      { name: "Speed", value: "2600 RPM" }
    ],
    voltage: "220V AC",
    current: "0.25A",
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
console.log('Successfully added 5 new SIBASS items!');
