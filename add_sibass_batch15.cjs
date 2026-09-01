const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-push-button-heads-4",
    name: "SIBASS 22mm Push Button Heads",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2/XB2 Series Heads",
    description: "A set of four heavy-duty SIBASS 22mm push button heads. These modular heads provide robust and tactile control for industrial panels, designed to work seamlessly with SIBASS ZB2 contact blocks.",
    image: "/images/sibass-push-button-heads-4.jpg",
    features: [
      "Type: Flush push button heads",
      "Mounting: Standard 22mm panel cutout",
      "Design: Modular construction for easy assembly",
      "Durability: High-grade industrial plastic"
    ],
    specs: [
      { name: "Size", value: "22mm" },
      { name: "Compatibility", value: "ZB2 Contact Blocks" }
    ],
    voltage: "Depends on contact block",
    current: "Depends on contact block",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-push-button-red-zb2",
    name: "SIBASS Red Push Button with NO Contact (ZB2-BE101)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2 Series (Red)",
    description: "SIBASS 22mm Red Flush Push Button complete with a ZB2-BE101 (Normally Open) contact block. Engineered for reliable switching in control circuits and automation panels.",
    image: "/images/sibass-push-button-red-zb2.jpg",
    features: [
      "Color: Red actuator",
      "Contact: Includes 1 NO (ZB2-BE101) block",
      "Action: Spring return (momentary)",
      "Standard: IEC/EN compliant design"
    ],
    specs: [
      { name: "Actuator", value: "Flush Red" },
      { name: "Contact Block", value: "ZB2-BE101 (NO)" },
      { name: "Rating", value: "10(6)A / 400V~" }
    ],
    voltage: "400V AC",
    current: "10A",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-push-button-black-zb2",
    name: "SIBASS Black Push Button with NO Contact (ZB2-BE101)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2 Series (Black)",
    description: "SIBASS 22mm Black Flush Push Button complete with a ZB2-BE101 (Normally Open) contact block. Perfect for general start or signaling operations in industrial control systems.",
    image: "/images/sibass-push-button-black-zb2.jpg",
    features: [
      "Color: Black actuator",
      "Contact: Includes 1 NO (ZB2-BE101) block",
      "Action: Spring return (momentary)",
      "Terminals: Secure screw clamp connections"
    ],
    specs: [
      { name: "Actuator", value: "Flush Black" },
      { name: "Contact Block", value: "ZB2-BE101 (NO)" },
      { name: "Rating", value: "10(6)A / 400V~" }
    ],
    voltage: "400V AC",
    current: "10A",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-estop-mushroom-zb2",
    name: "SIBASS Emergency Stop Mushroom Button",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2-BS54 Series",
    description: "SIBASS 22mm Red Mushroom Head Emergency Stop push button. Features a twist-to-release mechanism for critical safety and emergency shutdown applications.",
    image: "/images/sibass-estop-mushroom-zb2.jpg",
    features: [
      "Type: Mushroom head emergency stop",
      "Action: Latching, Twist-to-release",
      "Color: High-visibility Red",
      "Safety: Ensures immediate circuit interruption"
    ],
    specs: [
      { name: "Head Type", value: "Mushroom (40mm)" },
      { name: "Release", value: "Turn to release" },
      { name: "Mounting", value: "22mm Standard" }
    ],
    voltage: "Standard Control",
    current: "Standard Load",
    mounting: "22mm Panel Mount"
  },
  {
    id: "sibass-selector-and-estop",
    name: "SIBASS Selector Switch & E-Stop Set",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2 Selection Set",
    description: "A combination set featuring a SIBASS rotary selector switch (black standard handle) and a SIBASS red mushroom head emergency stop button. Both feature durable metal bases for secure panel mounting.",
    image: "/images/sibass-selector-and-estop.jpg",
    features: [
      "Includes: 1x Selector Switch, 1x Emergency Stop",
      "Base: Sturdy metal mounting collar",
      "Selector Action: Maintained positions",
      "E-Stop Action: Twist-to-release latching"
    ],
    specs: [
      { name: "Selector Type", value: "Standard Handle" },
      { name: "E-Stop Type", value: "Mushroom Twist-Release" },
      { name: "Collar", value: "Metal" }
    ],
    voltage: "Standard Control",
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
console.log('Successfully added the batch 15 of SIBASS items!');
