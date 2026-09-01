const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newProducts = [
  {
    id: "schneider_pb_yellow",
    name: "Schneider Harmony Yellow Push Button",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 Yellow",
    description: "The Schneider Electric Harmony Yellow Push Button provides a high-visibility tactile interface for specific machine functions such as fault resets, alarm acknowledgments, or returning systems to a home position. Its bright yellow flush actuator ensures quick identification by operators. Engineered with Schneider's robust modular design, it delivers exceptional mechanical durability and is fully protected against dust and water ingress (IP66), ensuring reliable performance in demanding industrial environments.",
    image: "/images/harmony_pb_yellow.jpg",
    features: [
      "Model: Harmony Series Yellow Push Button",
      "Actuator: Flush yellow profile for specialized operations or resets",
      "Action: Momentary (Spring return)",
      "Contacts: Modular design compatible with standard NO/NC blocks",
      "Durability: High resistance to vibration and repetitive mechanical wear",
      "Protection: IP66 / NEMA 4X rated for severe environments",
      "Application: Fault resets, alarm acknowledgment, and specialized functions",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony Yellow PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "Yellow" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NO/NC Options",
    application: "Fault Reset & Specialized Control",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
  },
  {
    id: "schneider_pb_white",
    name: "Schneider Harmony White Push Button",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 White",
    description: "The Schneider Electric Harmony White Push Button is a versatile, momentary action switch typically used for general control functions, process initiation, or secondary start commands. Featuring a clean, highly visible white flush actuator, it offers an ergonomic and responsive touch. Built to withstand continuous industrial use, it integrates seamlessly into 22mm cutouts and supports a wide range of contact block configurations for flexible panel design.",
    image: "/images/harmony_pb_white.jpg",
    features: [
      "Model: Harmony Series White Push Button",
      "Actuator: Flush white profile for general operations",
      "Action: Momentary (Spring return)",
      "Contacts: Easily accommodates multiple NO/NC blocks",
      "Durability: Premium materials for extended mechanical life",
      "Protection: IP66 / NEMA 4X environmental sealing",
      "Application: General control functions and process activation",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony White PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "White" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NO/NC Options",
    application: "General Control Operations",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
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
    console.log("Successfully added " + itemsAdded + " new push buttons (Yellow, White).");
} else {
    console.log('No new items were added (they might already exist).');
}
