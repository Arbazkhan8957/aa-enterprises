const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newCategory = `  {
    "name": "Schneider Push Button",
    "image": "/images/harmony_pb_green.jpg",
    "description": "Premium Schneider Electric Harmony series push buttons and emergency stops. Engineered for robust industrial control, offering superior reliability, easy installation, and clear visual feedback."
  }`;

// Inject category
if (!data.includes('"name": "Schneider Push Button"')) {
    data = data.replace(
        /\];\s*export const products = \[/,
        `,\n${newCategory}\n];\n\nexport const products = [`
    );
}

const newProducts = [
  {
    id: "schneider_pb_estop",
    name: "Schneider Harmony Emergency Stop Push Button",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 E-Stop",
    description: "The Schneider Electric Harmony Emergency Stop Push Button features a prominent red mushroom head with a 'Turn to Release' mechanism. Designed for critical safety applications in industrial environments, it ensures immediate machinery halt upon actuation. Built with a robust housing and reliable contact blocks, it complies with stringent international safety standards, making it an essential component for any control panel or automation system.",
    image: "/images/harmony_estop.jpg",
    features: [
      "Model: Harmony Series Emergency Stop",
      "Actuator: Red Mushroom Head (Turn to Release)",
      "Action: Latching, push-pull or turn to release",
      "Contacts: Standard NC (Normally Closed) configuration for fail-safe operation",
      "Durability: High mechanical lifespan and impact resistance",
      "Protection: IP66 / NEMA 4X rated for harsh environments",
      "Application: Emergency halting of industrial machinery and conveyor systems",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony E-Stop" },
      { name: "Type", value: "Mushroom Head" },
      { name: "Reset", value: "Turn to Release" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NC",
    application: "Critical Safety & Emergency Stop",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
  },
  {
    id: "schneider_pb_black",
    name: "Schneider Harmony Black Push Button (START)",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 Black",
    description: "The Schneider Electric Harmony Black Push Button is a rugged, momentary action switch designed for starting machinery and initiating processes. Featuring a clear 'START' marking on a sleek black bezel, it provides distinct tactile feedback for operators. Its modular design allows for easy assembly with various contact blocks, while its high IP rating ensures it remains protected against dust and liquids on the factory floor.",
    image: "/images/harmony_pb_black.jpg",
    features: [
      "Model: Harmony Series Black Push Button",
      "Actuator: Flush profile with 'START' marking",
      "Action: Momentary (Spring return)",
      "Contacts: Compatible with standard NO/NC contact blocks",
      "Durability: Engineered for millions of mechanical operations",
      "Protection: IP66 water and dust resistance",
      "Application: Process initiation and machine starting",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony Black PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "Black" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NO/NC Options",
    application: "Machine Start & Control",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
  },
  {
    id: "schneider_pb_blue",
    name: "Schneider Harmony Blue Push Button (ON)",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 Blue",
    description: "The Schneider Electric Harmony Blue Push Button provides a clear, illuminated or standard tactile interface for activating specific machine functions. Marked with 'ON', this button is ideal for resetting systems, acknowledging alarms, or initiating auxiliary processes. Its vibrant blue color aids in rapid visual identification on complex control panels, while its robust construction guarantees long-term reliability in demanding industrial settings.",
    image: "/images/harmony_pb_blue.jpg",
    features: [
      "Model: Harmony Series Blue Push Button",
      "Actuator: Flush profile with 'ON' marking",
      "Action: Momentary (Spring return)",
      "Contacts: Modular design for NO/NC blocks",
      "Durability: High resistance to vibration and mechanical wear",
      "Protection: IP66 rated for severe environments",
      "Application: System resets, auxiliary functions, and status acknowledgment",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony Blue PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "Blue" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NO/NC Options",
    application: "System Reset & Auxiliary Control",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
  },
  {
    id: "schneider_pb_green",
    name: "Schneider Harmony Green Push Button",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 Green",
    description: "The Schneider Electric Harmony Green Push Button is the industry standard for initiating normal operation or 'Start' sequences. Featuring a highly visible green flush actuator, it offers an ergonomic and responsive touch for machine operators. Built to withstand continuous industrial use, it integrates seamlessly into 22mm cutouts and supports a wide range of contact block configurations for versatile panel design.",
    image: "/images/harmony_pb_green.jpg",
    features: [
      "Model: Harmony Series Green Push Button",
      "Actuator: Flush green profile for standard start operations",
      "Action: Momentary (Spring return)",
      "Contacts: Easily accommodates multiple NO/NC blocks",
      "Durability: Premium materials for extended mechanical life",
      "Protection: IP66 / NEMA 4X environmental sealing",
      "Application: General machine start and process activation",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony Green PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "Green" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NO/NC Options",
    application: "Standard Start Operation",
    mounting: "22mm Panel Mount",
    auxiliary: "N/A"
  },
  {
    id: "schneider_pb_red",
    name: "Schneider Harmony Red Push Button",
    brand: "Schneider",
    category: "Schneider Push Button",
    model: "Harmony XB4/XB5 Red",
    description: "The Schneider Electric Harmony Red Push Button is engineered for standard 'Stop' or 'Halt' commands in industrial control systems. Its bright red flush actuator ensures it is instantly recognizable on busy control panels. Combining ergonomic design with rugged durability, this momentary switch provides reliable performance in harsh conditions, making it a staple for safe and efficient machinery operation.",
    image: "/images/harmony_pb_red.jpg",
    features: [
      "Model: Harmony Series Red Push Button",
      "Actuator: Flush red profile for standard stop operations",
      "Action: Momentary (Spring return)",
      "Contacts: Typically paired with NC contact blocks",
      "Durability: Built for high-frequency actuation",
      "Protection: IP66 rated against dust and high-pressure water jets",
      "Application: General machine stop and process halting",
      "Mounting: Standard 22mm panel cutout"
    ],
    specs: [
      { name: "Model", value: "Harmony Red PB" },
      { name: "Type", value: "Momentary Flush" },
      { name: "Color", value: "Red" }
    ],
    voltage: "Up to 600V",
    current: "10A",
    poles: "N/A",
    mainContact: "NC Option Preferred",
    application: "Standard Stop Operation",
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

if (itemsAdded > 0 || data.includes("Schneider Push Button")) {
    fs.writeFileSync('src/data.js', data, 'utf8');
    console.log("Successfully added Schneider Push Button category and " + itemsAdded + " new products.");
} else {
    console.log('No new items were added (they might already exist).');
}
