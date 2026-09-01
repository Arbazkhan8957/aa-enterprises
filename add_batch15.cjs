const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-cable-ties-400",
    name: "SIBASS Nylon Cable Ties (400mm)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-4.8x400mm",
    description: "A 100-piece pack of SIBASS heavy-duty self-locking PVC cable ties. At 400mm in length and 4.8mm wide, these robust ties are designed for securing large wire bundles and heavy conduits in commercial installations.",
    image: "/images/sibass-cable-ties-400.jpg",
    features: [
      "Material: Tough Polyamide 66 (UL94V-2 Nylon)",
      "Strength: High loop tensile strength of 22kgf (48.4 lbs)",
      "Capacity: Easily secures cable bundles up to 98mm in diameter",
      "Durability: Resistant to extreme temperatures (-10°C to +85°C)"
    ],
    specs: [
      { name: "Size", value: "4.8 x 400mm" },
      { name: "Quantity", value: "100 Pcs" },
      { name: "Material", value: "Nylon 66" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Self-Locking Zip"
  },
  {
    id: "sibass-limit-roller-metal",
    name: "SIBASS Adjustable Metal Roller Limit Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8108A-M",
    description: "The SIBASS SE-8108A-M is a heavy-duty mechanical limit switch featuring a fully metallic adjustable rotary arm and roller. Designed for environments where standard plastic rollers may wear out quickly.",
    image: "/images/sibass-limit-roller-metal.jpg",
    features: [
      "Actuator: Adjustable-length steel arm with a solid steel roller bearing",
      "Durability: Metal-on-metal design withstands extreme abrasive friction",
      "Contacts: Standard 1 NO + 1 NC configuration",
      "Sealing: Features a heavy-duty ribbed rubber cable boot"
    ],
    specs: [
      { name: "Model", value: "SE-8108A-M" },
      { name: "Actuator", value: "Metal Roller Lever" },
      { name: "Rating", value: "5A 250V AC" }
    ],
    voltage: "250V AC / 115V DC",
    current: "5A / 0.4A",
    mounting: "Surface Mount"
  },
  {
    id: "sibass-foot-switch",
    name: "SIBASS Heavy Duty Foot Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-FS3",
    description: "The SIBASS SE-FS3 is a robust industrial foot pedal switch. Housed in a heavy cast-metal base, it provides reliable hands-free operation for machinery such as presses, welders, and heavy sewing equipment.",
    image: "/images/sibass-foot-switch.jpg",
    features: [
      "Housing: Heavy cast-metal construction prevents sliding during operation",
      "Actuation: Smooth pedal action with instant tactile feedback",
      "Safety: Integrated anti-slip base pads",
      "Wiring: Enclosed terminal block keeps connections safe from debris"
    ],
    specs: [
      { name: "Model", value: "SE-FS3" },
      { name: "Type", value: "Momentary Pedal" },
      { name: "Rating", value: "10A 250V AC" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "Floor Placed"
  },
  {
    id: "sibass-limit-orange",
    name: "SIBASS IP65 Roller Limit Switch (Orange)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3SE3-100/1E",
    description: "The SIBASS SE-3SE3-100/1E is a distinct, high-visibility mechanical limit switch. Featuring an orange polymer roller arm and a grey sealed body, it offers excellent IP65 protection against water jets and oil splashes.",
    image: "/images/sibass-limit-orange.jpg",
    features: [
      "Protection: Verified IP65 rating for wet and oily CNC environments",
      "Actuator: High-visibility orange roller lever for easy visual inspection",
      "Contacts: High-capacity AC-15 and DC-13 rated internal switching",
      "Housing: Four-screw sealed faceplate prevents fluid ingress"
    ],
    specs: [
      { name: "Model", value: "SE-3SE3" },
      { name: "IP Rating", value: "IP65" },
      { name: "Max Ui", value: "380V" }
    ],
    voltage: "380V AC / 220V DC",
    current: "1.9A (AC) / 0.18A (DC)",
    mounting: "Surface Mount"
  },
  {
    id: "sibass-pendant-cob61",
    name: "SIBASS Rain-Proof Pendant Control (2-Way)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-COB61",
    description: "The SIBASS SE-COB61 is a highly compact, 2-button (Up/Down) rain-proof pendant station. Its high-visibility orange housing and integrated cable boot make it perfect for outdoor hoist and winch control.",
    image: "/images/sibass-pendant-cob61.jpg",
    features: [
      "Housing: Impact-resistant orange polymer designed to shed water",
      "Protection: Fully 'Rain Proof' rated for outdoor mechanical operation",
      "Strain Relief: Includes a long, flexible black rubber cable boot",
      "Controls: Simple, distinct UP and DOWN mechanical push buttons"
    ],
    specs: [
      { name: "Model", value: "SE-COB61" },
      { name: "Buttons", value: "2-Way (Up/Down)" },
      { name: "Environment", value: "Rain Proof" }
    ],
    voltage: "250V AC / 500V AC",
    current: "5A / 2A",
    mounting: "Handheld Wired"
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
