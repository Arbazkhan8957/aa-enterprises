const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-illuminated-pb-220v",
    name: "SIBASS Illuminated Push Buttons (220V LED)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZBV Series (220V AC)",
    description: "A set of SIBASS 22mm illuminated push buttons operating at 220V AC. Available in vibrant Red, Green, and Yellow colors with integrated long-life LED indicators (e.g., ZBV-M3, ZBV-M4 blocks) for clear visual feedback.",
    image: "/images/sibass-illuminated-pb-220v.jpg",
    features: [
      "Illumination: High-brightness built-in LED",
      "Voltage: 220V AC direct connection",
      "Colors: Red, Green, Yellow",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Bulb Type", value: "Integrated LED" },
      { name: "Supply", value: "220V AC" },
      { name: "Protection", value: "IP65 (Front face)" }
    ],
    voltage: "220V AC",
    current: "14mA LED Draw",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-illuminated-pb-24v",
    name: "SIBASS Illuminated Push Buttons (24V DC/AC)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZBV Series (24V)",
    description: "SIBASS 22mm illuminated push buttons equipped with 24V LED modules (e.g., ZBV-B3, ZBV-B4, ZBV-B5). Designed for low-voltage control panels, PLC outputs, and automation systems requiring clear status indication.",
    image: "/images/sibass-illuminated-pb-24v.jpg",
    features: [
      "Illumination: Reliable 24V LED technology",
      "Terminals: Screw clamp for secure wiring",
      "Durability: Rugged industrial design",
      "Standards: IEC 60947-5-1 compliant"
    ],
    specs: [
      { name: "Bulb Type", value: "Integrated LED" },
      { name: "Supply", value: "24V AC/DC" },
      { name: "Colors", value: "Green, Red, Yellow" }
    ],
    voltage: "24V AC/DC",
    current: "14mA LED Draw",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-pb-assorted-flush",
    name: "SIBASS Standard Push Buttons (Assorted Flush/Projecting)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "22mm Modular Push Buttons",
    description: "An assortment of SIBASS 22mm non-illuminated push buttons, featuring flush and projecting head designs in classic Black and Red colors. Engineered for heavy industrial machine control.",
    image: "/images/sibass-pb-assorted-flush.jpg",
    features: [
      "Actuator Types: Flush and Projecting available",
      "Action: Spring return mechanism",
      "Contact Compatibility: Works with standard ZB2/ZB4 blocks",
      "Application: Start/Stop control circuits"
    ],
    specs: [
      { name: "Actuator", value: "Flush / Projecting" },
      { name: "Colors", value: "Black, Red" },
      { name: "Base", value: "Plastic Modular" }
    ],
    voltage: "Depends on contact block",
    current: "Depends on contact block",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-pb-green-red-estop",
    name: "SIBASS Green/Red PB & E-Stop Set",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Control Panel Set",
    description: "A complete machine control set including a Green Flush START button, a Red Flush STOP button, and a critical Red Mushroom Head Emergency Stop button (Twist to release).",
    image: "/images/sibass-pb-green-red-estop.jpg",
    features: [
      "Green PB: Ideal for circuit or motor start",
      "Red PB: Standard stop or reset functions",
      "Emergency Stop: Latching twist-to-release action",
      "Housing: Robust modular design"
    ],
    specs: [
      { name: "Included", value: "Green, Red, E-Stop" },
      { name: "Size", value: "22mm Standard" },
      { name: "E-Stop Head", value: "Mushroom 40mm" }
    ],
    voltage: "Standard Control",
    current: "Standard Load",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-illuminated-pb-metal",
    name: "SIBASS Metal Illuminated Push Button",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "XB4 Series Style (Metal Collar)",
    description: "A premium SIBASS 22mm illuminated push button featuring a robust metal bezel and mounting collar. Includes a Z...-BW06 contact block suitable for BA9s bulbs (up to 24V max).",
    image: "/images/sibass-illuminated-pb-metal.jpg",
    features: [
      "Construction: Heavy-duty metal bezel and collar",
      "Illumination: Supports BA9s incandescent or LED bulbs",
      "Actuator: Flush Green illuminated head",
      "Environment: High resistance to vibration and impacts"
    ],
    specs: [
      { name: "Material", value: "Chrome-plated Metal" },
      { name: "Bulb Base", value: "BA9s (Max 2W)" },
      { name: "Voltage", value: "Max 24V / 120V (Depending on bulb)" }
    ],
    voltage: "Up to 120V",
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
console.log('Successfully added the batch 16 of SIBASS items!');
