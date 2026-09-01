const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-contactor-sed38-box",
    name: "SIBASS SEsys Control Contactor (SE D38)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D38 (SE - 3P 38 M5)",
    description: "The SIBASS SE D38 is a heavy-duty 38A contactor designed for demanding industrial motor control applications, providing robust switching capabilities and a long operational lifespan.",
    image: "/images/sibass-contactor-sed38-box.jpg",
    features: [
      "Series: SEsys Control",
      "Capacity: High 38A rating for heavy loads",
      "Terminals: Secure screw clamp connections",
      "Durability: Extended mechanical lifespan"
    ],
    specs: [
      { name: "Model", value: "SE D38" },
      { name: "Rating", value: "38A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "38A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-contactor-sed32-box",
    name: "SIBASS SEsys Control Contactor (SE D32)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D32 (SE - 3P 32 M5)",
    description: "The SIBASS SE D32 contactor is part of the reliable SEsys Control range, offering 32A of switching power suitable for various industrial automation and control tasks.",
    image: "/images/sibass-contactor-sed32-box.jpg",
    features: [
      "Series: SEsys Control",
      "Protection: Enclosed design to prevent dust ingress",
      "Reliability: Consistent performance under load",
      "Integration: Easy mounting and wiring"
    ],
    specs: [
      { name: "Model", value: "SE D32" },
      { name: "Rating", value: "32A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-heat-aerosol-extinguisher",
    name: "SIBASS Heat Aerosol Fire Extinguishing Device",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Aerosol Extinguisher",
    description: "The SIBASS Heat Aerosol Fire Extinguishing Device is an innovative, compact fire suppression solution. Designed for enclosed spaces like electrical cabinets, it releases an extinguishing aerosol within 6 seconds of activation.",
    image: "/images/sibass-heat-aerosol-extinguisher.jpg",
    features: [
      "Type: Heat-activated aerosol suppression",
      "Speed: Spray release time <= 6 seconds",
      "Lifespan: 10 Years expiration date",
      "Application: Ideal for electrical panels and small enclosures"
    ],
    specs: [
      { name: "Protected Space", value: "<= 0.4m³" },
      { name: "Extinguishing Density", value: "100g/m³" },
      { name: "Operating Temp", value: "-30°C to +80°C" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Internal Cabinet Mount"
  },
  {
    id: "sibass-limit-switch-p121",
    name: "SIBASS Limit Switch (SE-XCK-P121)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XCK-P121",
    description: "The SIBASS SE-XCK-P121 is an industrial-grade limit switch featuring a roller lever actuator. Built with IP65 protection, it ensures reliable position sensing in harsh environments.",
    image: "/images/sibass-limit-switch-p121.jpg",
    features: [
      "Actuator: Roller Lever",
      "Protection: IP65 Rated against dust and water",
      "Compliance: IEC/EN 60947-5-1 standards",
      "Durability: High mechanical life"
    ],
    specs: [
      { name: "Model", value: "SE-XCK-P121" },
      { name: "Ui", value: "500V" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "AC 15 240V",
    current: "3A",
    mounting: "Panel/Machine Mount"
  },
  {
    id: "sibass-limit-switch-p102",
    name: "SIBASS Limit Switch (SE-XCK-P102)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XCK-P102",
    description: "The SIBASS SE-XCK-P102 is a rugged limit switch equipped with a roller plunger actuator. Designed for precise position detection, it features an IP65 enclosure for industrial reliability.",
    image: "/images/sibass-limit-switch-p102.jpg",
    features: [
      "Actuator: Roller Plunger",
      "Protection: IP65 enclosure",
      "Standard: Meets IEC/EN 60947-5-1",
      "Application: Machine tools, automation equipment"
    ],
    specs: [
      { name: "Model", value: "SE-XCK-P102" },
      { name: "Ui", value: "500V" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "AC 15 240V",
    current: "3A",
    mounting: "Panel/Machine Mount"
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
console.log('Successfully added 5 new SIBASS items (D38, D32, Fire Extinguisher, P121, P102)!');
