const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-industrial-cable-reel-back",
    name: "SIBASS Industrial Cable Reel (Back Profile)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Heavy Duty Reel - Rear",
    description: "Detailed rear view of the SIBASS industrial cable reel. Showcasing the durable tubular metal stand, winding mechanism, and the integrated thermal protection / breaker switch with a clear protective cover.",
    image: "/images/sibass-cable-reel-back.jpg",
    features: [
      "View: Rear structural profile",
      "Safety: Clearly visible breaker / thermal switch",
      "Stand: Robust metal tubular base",
      "Design: Ergonomic winding handle"
    ],
    specs: [
      { name: "Material", value: "Impact Resistant Polymer & Metal" },
      { name: "Safety Component", value: "Thermal Cutout Switch" }
    ],
    voltage: "220V - 250V AC",
    current: "16A",
    mounting: "Portable Free-standing"
  },
  {
    id: "sibass-estop-small-side-view",
    name: "SIBASS Compact Emergency Stop (Side Profile)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Compact Series - Side",
    description: "Side profile view of the SIBASS compact red mushroom emergency stop button. This view highlights the shallow mounting depth and the secure locking collar suitable for thin or thick panels.",
    image: "/images/sibass-estop-small-side.jpg",
    features: [
      "View: Complete side profile",
      "Mounting Depth: Optimized for compact enclosures",
      "Mechanism: Twist-to-release latching",
      "Base: Sturdy plastic collar"
    ],
    specs: [
      { name: "Actuator", value: "Red Mushroom Head" },
      { name: "Depth", value: "Compact Mounting" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-limit-switch-se8108",
    name: "SIBASS Limit Switch (SE-8108)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8108",
    description: "SIBASS SE-8108 adjustable roller lever limit switch. Features a durable blue cast alloy body with a versatile rotary head, making it perfect for detecting moving machine parts in industrial automation.",
    image: "/images/sibass-limit-switch-se8108.jpg",
    features: [
      "Actuator: Adjustable metal roller lever",
      "Head: Rotary motion detection",
      "Body: Heavy-duty cast alloy (Blue)",
      "Contacts: 1 NO + 1 NC configuration"
    ],
    specs: [
      { name: "Model", value: "SE-8108" },
      { name: "Rating (AC)", value: "10A 230V AC" },
      { name: "Rating (DC)", value: "0.4A 115V DC" }
    ],
    voltage: "230V AC / 115V DC",
    current: "10A AC / 0.4A DC",
    mounting: "Surface Mount"
  },
  {
    id: "sibass-bimetallic-lugs-dtl2",
    name: "SIBASS Bimetallic Cable Lugs (DTL-2 Series)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "DTL-2 Assorted Sizes",
    description: "A complete range of SIBASS DTL-2 bimetallic (Aluminium/Copper) cable lugs. These friction-welded lugs are essential for safely connecting aluminium cables to copper busbars or terminals without galvanic corrosion.",
    image: "/images/sibass-bimetallic-lugs-dtl2.jpg",
    features: [
      "Construction: Friction-welded Copper ring and Aluminium barrel",
      "Application: Transition joints between Al and Cu",
      "Sizes Shown: 120mm², 150mm², 185mm², 240mm², 300mm², 400mm²",
      "Performance: Excellent electrical conductivity and mechanical strength"
    ],
    specs: [
      { name: "Type", value: "Bimetallic (DTL-2)" },
      { name: "Material", value: "Copper + Aluminium" },
      { name: "Range", value: "120 sq.mm to 400 sq.mm" }
    ],
    voltage: "Medium/High Voltage",
    current: "High Current Capacity",
    mounting: "Crimping"
  },
  {
    id: "sibass-illuminated-selector-red",
    name: "SIBASS Red Illuminated Selector Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "XB4/ZB4 Style",
    description: "SIBASS 22mm illuminated selector switch featuring a bright red handle and a durable metal collar. Integrated with a Z...-BW06 contact block for reliable switching and visual indication.",
    image: "/images/sibass-illuminated-selector-red.jpg",
    features: [
      "Actuator: Red illuminated rotary handle",
      "Base: Chrome-plated metal collar",
      "Illumination: BA9s bulb compatible (Max 2W)",
      "Positions: Maintained selection"
    ],
    specs: [
      { name: "Color", value: "Red" },
      { name: "Block Model", value: "Z...-BW06" },
      { name: "Bulb Spec", value: "Max 120V / 24V (depending on bulb)" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-estop-zb2-side",
    name: "SIBASS Mushroom Emergency Stop (Side View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2 Series E-Stop",
    description: "Detailed side profile of the SIBASS ZB2 series red mushroom emergency stop button. The modular plastic base and robust latching mechanism ensure dependable safety performance.",
    image: "/images/sibass-estop-zb2-side.jpg",
    features: [
      "View: Side structural profile",
      "Base: ZB2 modular plastic collar",
      "Action: Latching twist-to-release",
      "Safety: Essential for machine safety circuits"
    ],
    specs: [
      { name: "Actuator", value: "Mushroom Head" },
      { name: "Color", value: "Red" },
      { name: "Series", value: "ZB2 Compatible" }
    ],
    voltage: "Depends on contact block",
    current: "Depends on contact block",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-estop-zb2-top",
    name: "SIBASS Mushroom Emergency Stop (Top View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2 Series E-Stop",
    description: "Clear top view of the SIBASS ZB2 series red mushroom emergency stop button. High-contrast white arrows clearly indicate the twist-to-release operating direction for rapid reset.",
    image: "/images/sibass-estop-zb2-top.jpg",
    features: [
      "View: Top-down operator view",
      "Marking: Bold white 'twist' arrows",
      "Ergonomics: Large mushroom head for easy striking",
      "Action: Latching mechanical interlock"
    ],
    specs: [
      { name: "Actuator", value: "Mushroom Head" },
      { name: "Color", value: "Red" },
      { name: "Reset", value: "Twist" }
    ],
    voltage: "Depends on contact block",
    current: "Depends on contact block",
    mounting: "22mm Panel Mount"
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
console.log('Successfully added the 7 items requested!');
