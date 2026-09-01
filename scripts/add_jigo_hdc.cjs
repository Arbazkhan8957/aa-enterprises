const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

const newCategory = `  {
    "name": "Jigo Heavy Duty Connectors",
    "image": "/images/jigo-hdc-16pin.png",
    "description": "Robust and secure multi-pin heavy duty connectors designed for demanding industrial environments, ensuring reliable electrical connections under harsh conditions."
  }`;

// Inject category
if (!data.includes('"name": "Jigo Heavy Duty Connectors"')) {
    data = data.replace(
        /\];\s*export const products = \[/,
        `,\n${newCategory}\n];\n\nexport const products = [`
    );
}

const newProducts = [
  {
    id: "jigo_hdc_4pin",
    name: "Jigo 4-Pin Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HDC-4P",
    description: "The Jigo 4-Pin Heavy Duty Connector is designed for reliable power and control signal transmission in demanding industrial applications. Encased in a rugged die-cast aluminum alloy housing, it provides exceptional resistance to mechanical stress, vibrations, and harsh environmental conditions. The connector features high-quality silver-plated contacts to ensure optimal conductivity and minimal contact resistance. With an IP65 protection rating, it effectively safeguards against dust and moisture ingress, making it ideal for factory automation, robotics, and heavy machinery.",
    image: "/images/jigo-hdc-4pin.jpg",
    features: [
      "Model: HDC-4P Heavy Duty Connector",
      "Contacts: 4-Pin configuration",
      "Housing: Rugged die-cast aluminum alloy for maximum durability",
      "Protection: IP65 rated against dust and water ingress",
      "Contacts Plating: Silver-plated for superior conductivity",
      "Locking Mechanism: Secure locking levers to prevent accidental disconnection",
      "Application: Factory automation, robotics, control panels, and machinery",
      "Installation: Easy to assemble and panel mount"
    ],
    specs: [
      { name: "Model", value: "HDC-4P" },
      { name: "Pins", value: "4 Pin" },
      { name: "Material", value: "Die-cast Aluminum" }
    ],
    voltage: "Up to 500V",
    current: "10A - 16A",
    poles: "4P",
    mainContact: "4 Pins",
    application: "Industrial Power & Control Connections",
    mounting: "Panel/Surface Mount",
    auxiliary: "N/A"
  },
  {
    id: "jigo_hdc_6pin",
    name: "Jigo 6-Pin Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HDC-6P",
    description: "The Jigo 6-Pin Heavy Duty Connector delivers secure and durable connectivity for complex industrial control circuits and power distribution. Built with a solid die-cast metal housing, it is engineered to withstand extreme vibrations, temperature fluctuations, and mechanical impacts. The 6-pin insert provides reliable signal and power routing, utilizing premium contacts for low resistance. It features an IP65 sealing to keep out contaminants, making it a critical component for CNC machines, packaging equipment, and automotive manufacturing lines.",
    image: "/images/jigo-hdc-6pin.jpg",
    features: [
      "Model: HDC-6P Heavy Duty Connector",
      "Contacts: 6-Pin configuration",
      "Housing: Rugged die-cast aluminum alloy for maximum durability",
      "Protection: IP65 rated against dust and water ingress",
      "Contacts Plating: Silver-plated for superior conductivity",
      "Locking Mechanism: Secure locking levers to prevent accidental disconnection",
      "Application: CNC machines, packaging equipment, and industrial automation",
      "Installation: Easy to assemble and panel mount"
    ],
    specs: [
      { name: "Model", value: "HDC-6P" },
      { name: "Pins", value: "6 Pin" },
      { name: "Material", value: "Die-cast Aluminum" }
    ],
    voltage: "Up to 500V",
    current: "10A - 16A",
    poles: "6P",
    mainContact: "6 Pins",
    application: "Industrial Power & Control Connections",
    mounting: "Panel/Surface Mount",
    auxiliary: "N/A"
  },
  {
    id: "jigo_hdc_10pin",
    name: "Jigo 10-Pin Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HDC-10P",
    description: "The Jigo 10-Pin Heavy Duty Connector is an essential solution for multi-wire industrial control systems, providing robust multi-circuit connectivity in a single, compact housing. The heavy-duty metallic enclosure protects the internal contacts from physical damage and harsh industrial elements. With 10 precision-engineered pins, it allows for efficient consolidation of power and signal lines. The robust latching mechanism ensures a vibration-proof connection, making it highly suitable for heavy robotics, conveyor systems, and complex electrical panels.",
    image: "/images/jigo-hdc-10pin.png",
    features: [
      "Model: HDC-10P Heavy Duty Connector",
      "Contacts: 10-Pin configuration",
      "Housing: Rugged die-cast aluminum alloy for maximum durability",
      "Protection: IP65 rated against dust and water ingress",
      "Contacts Plating: Silver-plated for superior conductivity",
      "Locking Mechanism: Secure double locking levers",
      "Application: Heavy robotics, conveyor systems, and complex panels",
      "Installation: Easy to assemble and panel mount"
    ],
    specs: [
      { name: "Model", value: "HDC-10P" },
      { name: "Pins", value: "10 Pin" },
      { name: "Material", value: "Die-cast Aluminum" }
    ],
    voltage: "Up to 500V",
    current: "16A",
    poles: "10P",
    mainContact: "10 Pins",
    application: "Multi-circuit Industrial Control",
    mounting: "Panel/Surface Mount",
    auxiliary: "N/A"
  },
  {
    id: "jigo_hdc_16pin",
    name: "Jigo 16-Pin Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HDC-16P",
    description: "The Jigo 16-Pin Heavy Duty Connector is designed for high-density wiring applications, offering seamless integration for advanced industrial machinery. By accommodating 16 individual circuits, it significantly reduces wiring complexity and installation time. The tough die-cast aluminum housing offers outstanding mechanical protection and electromagnetic shielding, while the IP65 seal ensures reliability in wet or dusty environments. It is widely used in plastic injection molding machines, textile machinery, and automated assembly lines where reliability is paramount.",
    image: "/images/jigo-hdc-16pin.png",
    features: [
      "Model: HDC-16P Heavy Duty Connector",
      "Contacts: 16-Pin configuration",
      "Housing: Rugged die-cast aluminum alloy for maximum durability",
      "Protection: IP65 rated against dust and water ingress",
      "Contacts Plating: Silver-plated for superior conductivity",
      "Locking Mechanism: Secure double locking levers",
      "Application: Plastic molding, textile machinery, and assembly lines",
      "Installation: Easy to assemble and panel mount"
    ],
    specs: [
      { name: "Model", value: "HDC-16P" },
      { name: "Pins", value: "16 Pin" },
      { name: "Material", value: "Die-cast Aluminum" }
    ],
    voltage: "Up to 500V",
    current: "16A",
    poles: "16P",
    mainContact: "16 Pins",
    application: "High-density Industrial Wiring",
    mounting: "Panel/Surface Mount",
    auxiliary: "N/A"
  },
  {
    id: "jigo_hdc_24pin",
    name: "Jigo 24-Pin Heavy Duty Connector",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HDC-24P",
    description: "The Jigo 24-Pin Heavy Duty Connector is the ultimate solution for complex, high-capacity industrial wiring architectures. Capable of routing 24 distinct power and control signals through a single interface, it streamlines control cabinet design and maintenance. Encased in a heavy-duty, weather-resistant die-cast metal housing, it guarantees steadfast performance in the most severe industrial settings. Its secure latching system prevents decoupling under extreme vibration, making it indispensable for large-scale manufacturing plants, power distribution networks, and railway applications.",
    image: "/images/jigo-hdc-24pin.png",
    features: [
      "Model: HDC-24P Heavy Duty Connector",
      "Contacts: 24-Pin configuration",
      "Housing: Rugged die-cast aluminum alloy for maximum durability",
      "Protection: IP65 rated against dust and water ingress",
      "Contacts Plating: Silver-plated for superior conductivity",
      "Locking Mechanism: Secure double locking levers",
      "Application: Large-scale manufacturing, power distribution, and railways",
      "Installation: Easy to assemble and panel mount"
    ],
    specs: [
      { name: "Model", value: "HDC-24P" },
      { name: "Pins", value: "24 Pin" },
      { name: "Material", value: "Die-cast Aluminum" }
    ],
    voltage: "Up to 500V",
    current: "16A",
    poles: "24P",
    mainContact: "24 Pins",
    application: "Complex High-Capacity Wiring",
    mounting: "Panel/Surface Mount",
    auxiliary: "N/A"
  }
];

let itemsAdded = 0;
for (const product of newProducts) {
    if (!data.includes(product.id)) {
        const prodStr = JSON.stringify(product, null, 4);
        data = data.replace(
            /export const products = \\\[/,
            "export const products = [\n" + prodStr + ","
        );
        itemsAdded++;
    }
}

if (itemsAdded > 0 || data.includes("Jigo Heavy Duty Connectors")) {
    fs.writeFileSync('src/data.js', data, 'utf8');
    console.log("Successfully added Jigo Heavy Duty category and " + itemsAdded + " new products.");
} else {
    console.log('No new items were added (they might already exist).');
}
