const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-pendant-cobp21",
    name: "SIBASS Pendant Control Station (COBP-21)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COBP-21",
    description: "The SIBASS COBP-21 is a durable, yellow pendant station equipped with UP and DOWN push buttons along with an emergency stop switch. Designed for reliable hoist and crane control.",
    image: "/images/sibass-pendant-cobp21-new.jpg",
    features: [
      "Controls: Up, Down, and Emergency Stop",
      "Housing: High-visibility yellow, impact-resistant",
      "Ergonomics: Comfortable grip for extended use",
      "Application: Hoists, cranes, and lifting equipment"
    ],
    specs: [
      { name: "Model", value: "COBP-21" },
      { name: "Buttons", value: "2 + E-Stop" },
      { name: "Protection", value: "Rain Proof" }
    ],
    voltage: "AC 250V / 500V",
    current: "Standard",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-contact-block-seg1191",
    name: "SIBASS Auxiliary Contact Block (SE-G1191)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-G1191",
    description: "The SIBASS SE-G1191 is an auxiliary contact block designed to expand the control capabilities of SIBASS contactors. It features reliable switching contacts for signaling and logic control.",
    image: "/images/sibass-contact-block-seg1191.jpg",
    features: [
      "Type: Front/Side mounting auxiliary block",
      "Contacts: Multiple NO/NC configurations",
      "Compatibility: Works seamlessly with SEsys contactors",
      "Installation: Easy snap-on mounting with securing screws"
    ],
    specs: [
      { name: "Model", value: "SE-G1191" },
      { name: "Type", value: "Auxiliary Contact" }
    ],
    voltage: "Control Voltage",
    current: "Auxiliary Rating",
    mounting: "Contactor Mount"
  },
  {
    id: "sibass-pendant-cob61",
    name: "SIBASS Pendant Control Station (COB-61)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "COB-61",
    description: "The SIBASS COB-61 is a rugged, rain-proof pendant station with UP and DOWN push buttons. Its robust orange housing and protective cable sleeve make it ideal for tough outdoor and industrial environments.",
    image: "/images/sibass-pendant-cob61-orange.jpg",
    features: [
      "Controls: 2-Button Directional (UP/DOWN)",
      "Protection: Rain Proof enclosure",
      "Accessories: Includes flexible cable protection sleeve",
      "Housing: High-visibility orange ABS plastic"
    ],
    specs: [
      { name: "Model", value: "COB-61" },
      { name: "Voltage", value: "AC250V / AC500V" },
      { name: "Current", value: "5A / 2A" }
    ],
    voltage: "250V / 500V AC",
    current: "5A / 2A",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-push-button-set-flush",
    name: "SIBASS Flush Push Buttons (Red, Blue, Green, Yellow)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Flush Push Button Set",
    description: "A complete set of SIBASS industrial flush push buttons in four essential colors: Red, Blue, Green, and Yellow. These robust 22mm switches provide tactile feedback for reliable panel control.",
    image: "/images/sibass-push-button-set-flush.jpg",
    features: [
      "Actuator: Flush profile for protection against accidental operation",
      "Colors: Red, Blue, Green, Yellow for clear visual coding",
      "Design: Modular contact blocks for easy replacement",
      "Application: Control panels, machinery interfaces"
    ],
    specs: [
      { name: "Type", value: "Flush Push Button" },
      { name: "Mounting Hole", value: "22mm Standard" },
      { name: "Colors", value: "Red, Blue, Green, Yellow" }
    ],
    voltage: "Control Voltage",
    current: "Standard Load",
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
console.log('Successfully added the final batch of SIBASS items!');
