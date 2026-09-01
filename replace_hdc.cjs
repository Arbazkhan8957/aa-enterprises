const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

// Remove old heavy duty connectors
productsArray = productsArray.filter(p => p.category !== "Jigo Heavy Duty Connectors");

const newHdc = [
  {
    id: "hdc-ha4",
    name: "Jigo HA-4 Heavy Duty Connector (4 Pin)",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HA-4",
    description: "The Jigo HA-4 is a highly compact, robust heavy-duty connector featuring 4 power pins plus ground (4+PE). It features a die-cast aluminum housing and secure locking levers, making it the perfect quick-disconnect solution for smaller industrial machinery, robotics, and automation control panels where space is limited but rugged reliability is essential.",
    image: "/images/jigo-ha4.jpg",
    features: [
      "Configuration: 4 Pins + 1 Ground (4+PE)",
      "Model: HA-4",
      "Housing: Die-cast Aluminum alloy",
      "Locking: Single locking lever mechanism",
      "Protection: IP65 Rated (Dust and Water resistant)",
      "Applications: Robotics, small machinery, automation"
    ],
    specs: [
      { name: "Poles", value: "4 + PE" },
      { name: "Housing Type", value: "Standard Hood & Base" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "250V / 400V",
    current: "10A",
    mounting: "Panel/Bulkhead Mount"
  },
  {
    id: "hdc-he6",
    name: "Jigo HE-6 Heavy Duty Connector (6 Pin)",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HE-6",
    description: "The Jigo HE-6 Heavy Duty Connector offers 6 power pins plus ground (6+PE) in a highly durable, industrial-grade die-cast aluminum enclosure. Built to withstand extreme vibration, dust, and moisture, this IP65-rated connector is a standard for modular machinery, control cabinets, and secure signal transmission in heavy industry.",
    image: "/images/jigo-he6.jpg",
    features: [
      "Configuration: 6 Pins + 1 Ground (6+PE)",
      "Model: HE-6",
      "Housing: Heavy-duty Die-cast Aluminum",
      "Locking: Secure metal locking levers",
      "Protection: IP65 Rated for harsh environments",
      "Applications: Control cabinets, modular machinery, railways"
    ],
    specs: [
      { name: "Poles", value: "6 + PE" },
      { name: "Housing Type", value: "Standard Hood & Base" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V",
    current: "16A",
    mounting: "Panel/Bulkhead Mount"
  },
  {
    id: "hdc-he10",
    name: "Jigo HE-10 Heavy Duty Connector (10 Pin)",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HE-10",
    description: "Featuring 10 power/signal pins plus a dedicated ground (10+PE), the Jigo HE-10 provides incredibly secure and fast multi-wire connections. Protected by a die-cast metal housing with a robust locking mechanism, it eliminates wiring errors and downtime when assembling, testing, or maintaining complex industrial automation equipment.",
    image: "/images/jigo-he10.png",
    features: [
      "Configuration: 10 Pins + 1 Ground (10+PE)",
      "Model: HE-10",
      "Housing: Heavy-duty Die-cast Aluminum",
      "Locking: Secure double or single metal locking levers",
      "Protection: IP65 Rated (Dust and Water resistant)",
      "Applications: Industrial automation, power distribution"
    ],
    specs: [
      { name: "Poles", value: "10 + PE" },
      { name: "Housing Type", value: "Standard Hood & Base" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V",
    current: "16A",
    mounting: "Panel/Bulkhead Mount"
  },
  {
    id: "hdc-he16",
    name: "Jigo HE-16 Heavy Duty Connector (16 Pin)",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HE-16",
    description: "The Jigo HE-16 is a premium 16-pin (+ Ground) heavy-duty connector engineered for complex signal and power routing. Its rugged die-cast aluminum housing and vibration-proof locking system guarantee continuous, fault-free connections in demanding environments like wind energy turbines, rail transport, and large-scale manufacturing lines.",
    image: "/images/jigo-he16.png",
    features: [
      "Configuration: 16 Pins + 1 Ground (16+PE)",
      "Model: HE-16",
      "Housing: Heavy-duty Die-cast Aluminum",
      "Locking: Secure dual metal locking levers",
      "Protection: IP65 Rated for harsh environments",
      "Applications: Wind energy, large machinery, transportation"
    ],
    specs: [
      { name: "Poles", value: "16 + PE" },
      { name: "Housing Type", value: "Standard Hood & Base" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V",
    current: "16A",
    mounting: "Panel/Bulkhead Mount"
  },
  {
    id: "hdc-he24",
    name: "Jigo HE-24 Heavy Duty Connector (24 Pin)",
    brand: "Jigo",
    category: "Jigo Heavy Duty Connectors",
    model: "HE-24",
    description: "For maximum capacity, the Jigo HE-24 Heavy Duty Connector offers an impressive 24 pins plus ground (24+PE) in a single ruggedized unit. It drastically simplifies complex wiring harnesses into one plug-and-play connection, shielded by an IP65 die-cast aluminum enclosure designed to survive the harshest industrial conditions.",
    image: "/images/jigo-he24.png",
    features: [
      "Configuration: 24 Pins + 1 Ground (24+PE)",
      "Model: HE-24",
      "Housing: Heavy-duty Die-cast Aluminum",
      "Locking: Heavy-duty dual metal locking levers",
      "Protection: IP65 Rated (Dust and Water resistant)",
      "Applications: Complex wiring harnesses, massive control panels"
    ],
    specs: [
      { name: "Poles", value: "24 + PE" },
      { name: "Housing Type", value: "Standard Hood & Base" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "500V",
    current: "16A",
    mounting: "Panel/Bulkhead Mount"
  }
];

newHdc.forEach(nf => {
  productsArray.push(nf);
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Successfully replaced and added the 5 proper Jigo Heavy Duty Connectors!');
