const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-pendant-14way",
    name: "SIBASS Heavy Duty Pendant Station (14-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-14D2/E",
    description: "The SIBASS SE-14D2/E is the ultimate pendant control station for complex, multi-hoist gantry cranes. It provides an incredible 14 buttons (12 directional arrows + Green Start + Red Stop) in an elongated, high-impact yellow housing.",
    image: "/images/sibass-pendant-14way.jpg",
    features: [
      "Configuration: Massive 14-button layout for maximum control",
      "Handling: Ergonomic elongated body allows for two-handed operation",
      "Suspension: Top steel suspension ring to prevent cable tear",
      "Protection: Fully sealed against industrial dust and water splashes"
    ],
    specs: [
      { name: "Model", value: "SE-14D2/E" },
      { name: "Buttons", value: "14-Way" },
      { name: "Material", value: "ABS Polymer" }
    ],
    voltage: "Universal Rating",
    current: "Standard Load",
    mounting: "Suspended Wired"
  },
  {
    id: "panasonic-speed-controller",
    name: "Panasonic AC Speed Controller",
    brand: "Panasonic",
    category: "Panasonic",
    model: "DV1204W",
    description: "The Panasonic DV1204W Speed Controller provides precise, dial-based speed adjustment for AC motors. Highly reliable and compact, it is perfect for controlling automated conveyor speeds and small machinery drives.",
    image: "/images/panasonic-speed-controller.jpg",
    features: [
      "Control: Smooth rotary dial with numbered speed increments (0-10)",
      "Design: Compact metallic fascia with a clear protective dial cover",
      "Integration: Easy panel-mount installation for operator control desks",
      "Reliability: Legendary Panasonic solid-state internal components"
    ],
    specs: [
      { name: "Brand", value: "Panasonic" },
      { name: "Model", value: "DV1204W" },
      { name: "Series", value: "G Series" }
    ],
    voltage: "AC220V / AC230V",
    current: "Standard Motor Load",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-fan-20060",
    name: "SIBASS Industrial Round Cooling Fan (200mm)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-20060ABL",
    description: "The SIBASS SE-20060ABL is a high-velocity 200mm round industrial cooling fan. Featuring a robust metal frame and deep-pitched polymer blades, it rapidly extracts heat from electrical cabinets and server racks, spinning at 2600RPM.",
    image: "/images/sibass-fan-20060.jpg",
    features: [
      "Design: 200mm round form factor for circular ducting or panel exhaust",
      "Performance: High-speed 2600RPM motor delivering massive CFM",
      "Construction: Rigid black metal outer frame to prevent warping",
      "Efficiency: 65W power draw provides excellent cooling-to-power ratio"
    ],
    specs: [
      { name: "Model", value: "SE-20060ABL" },
      { name: "Power", value: "65W" },
      { name: "Speed", value: "2600 RPM" }
    ],
    voltage: "220V AC",
    current: "0.43A",
    mounting: "Panel Mount / Duct"
  },
  {
    id: "sibass-fan-22060",
    name: "SIBASS Industrial Square Cooling Fan (220mm)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-22060ABL",
    description: "The SIBASS SE-22060ABL provides heavy-duty panel cooling in a large 220mm square-flange format. Delivering high static pressure and immense airflow at 2600RPM, it is the ideal thermal management solution for major control panels.",
    image: "/images/sibass-fan-22060.jpg",
    features: [
      "Design: Large square flange allows for easy 4-screw panel mounting",
      "Motor: High-torque AC motor handles continuous 24/7 operation",
      "Blades: Aerodynamically optimized for maximum heat extraction",
      "Wiring: Pre-wired thermal-resistant leads"
    ],
    specs: [
      { name: "Model", value: "SE-22060ABL" },
      { name: "Power", value: "65W" },
      { name: "Speed", value: "2600 RPM" }
    ],
    voltage: "220V AC",
    current: "0.7A",
    mounting: "4-Point Panel Mount"
  },
  {
    id: "sibass-socket-splitter",
    name: "SIBASS 3-Way Industrial Socket Splitter",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-1013",
    description: "The SIBASS SE-1013 is an industrial-grade Y-splitter that converts a single 16A power feed into three separate IP44 rated sockets. It is perfect for safely distributing power to multiple heavy tools on construction sites without dangerous daisy-chaining.",
    image: "/images/sibass-socket-splitter.jpg",
    features: [
      "Function: 1 x 16A Input Plug branching to 3 x 16A Output Sockets",
      "Protection: IP44 rated with spring-loaded blue caps on all outputs",
      "Durability: Shatter-proof white and blue thermoplastic housing",
      "Compliance: Conforms to IEC60309-2 industrial standards"
    ],
    specs: [
      { name: "Model", value: "SE-1013" },
      { name: "Configuration", value: "1 In, 3 Out" },
      { name: "Rating", value: "IP44" }
    ],
    voltage: "220V~ AC",
    current: "16A",
    mounting: "Inline Portable"
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
console.log('Successfully added 5 new items, including a Panasonic controller!');
