const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newProducts = [
  {
    id: "gvae11",
    name: "Schneider GVAE11 Auxiliary Contact Block",
    brand: "Schneider",
    category: "Schneider LADN Auxiliary Blocks",
    model: "GVAE11",
    description: "The Schneider Electric GVAE11 is a front-mounting auxiliary contact block designed for TeSys GV2 and GV3 motor circuit breakers. It provides reliable status indication and control signaling with a 1NO + 1NC contact configuration. Engineered for seamless integration, it enhances the safety and automation capabilities of your motor control panels.",
    image: "/images/gvae11.jpg",
    features: [
      "Model: GVAE11",
      "Mounting: Front mount (clips onto the front of the breaker)",
      "Contacts: 1 NO + 1 NC",
      "Compatibility: TeSys GV2 and TeSys GV3 motor circuit breakers",
      "Operation: Instantaneous auxiliary contacts",
      "Durability: High mechanical and electrical lifespan",
      "Connection: Screw clamp terminals for secure wiring"
    ],
    specs: [
      { name: "Model", value: "GVAE11" },
      { name: "Contacts", value: "1 NO + 1 NC" },
      { name: "Mounting", value: "Front Mount" }
    ],
    voltage: "Up to 250V AC",
    current: "2.5A",
    poles: "N/A",
    mainContact: "1 NO + 1 NC",
    application: "Motor Circuit Breaker Status Signaling",
    mounting: "Front Clip-on",
    auxiliary: "1NO + 1NC"
  },
  {
    id: "gvan11",
    name: "Schneider GVAN11 Auxiliary Contact Block",
    brand: "Schneider",
    category: "Schneider LADN Auxiliary Blocks",
    model: "GVAN11",
    description: "The Schneider Electric GVAN11 is a side-mounting auxiliary contact block for TeSys GV2 and GV3 motor circuit breakers. Featuring a 1NO + 1NC contact arrangement, it is ideal for extending the control and monitoring functions of motor protection circuits without taking up additional front-panel space. Built to Schneider's exacting standards for industrial environments.",
    image: "/images/gvan11.jpg",
    features: [
      "Model: GVAN11",
      "Mounting: Side mount (attaches to the left side of the breaker)",
      "Contacts: 1 NO + 1 NC",
      "Compatibility: TeSys GV2 and TeSys GV3 motor circuit breakers",
      "Operation: Instantaneous auxiliary contacts",
      "Space-saving: Side mounting keeps the front face clear",
      "Connection: Standard screw clamp terminals"
    ],
    specs: [
      { name: "Model", value: "GVAN11" },
      { name: "Contacts", value: "1 NO + 1 NC" },
      { name: "Mounting", value: "Side Mount" }
    ],
    voltage: "Up to 690V AC",
    current: "6A",
    poles: "N/A",
    mainContact: "1 NO + 1 NC",
    application: "Motor Circuit Breaker Status Signaling",
    mounting: "Side Clip-on (Left)",
    auxiliary: "1NO + 1NC"
  }
];

let itemsAdded = 0;
for (const product of newProducts) {
    if (!data.includes(product.id)) {
        const prodStr = JSON.stringify(product, null, 4);
        data = data.replace(
            /export const products = \[/,
            "export const products = [\n" + prodStr + ","
        );
        itemsAdded++;
    }
}

if (itemsAdded > 0) {
    fs.writeFileSync('src/data.js', data, 'utf8');
    console.log("Successfully added " + itemsAdded + " new blocks (GVAE11, GVAN11).");
} else {
    console.log('No new items were added (they might already exist).');
}
