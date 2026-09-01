const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-micro-switch-m110",
    name: "SIBASS Micro Switch (SE-XCK-M110)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XCK-M110",
    description: "The SIBASS SE-XCK-M110 is a heavy-duty micro switch designed with a sturdy metal housing. Featuring a top plunger actuator and an IP66 rating, it provides excellent protection against dust and powerful water jets.",
    image: "/images/sibass-micro-switch-m110.jpg",
    features: [
      "Actuator: Top Plunger",
      "Housing: Robust metal body",
      "Protection: IP66 Rated",
      "Compliance: IEC/EN 60947-5-1"
    ],
    specs: [
      { name: "Model", value: "SE-XCK-M110" },
      { name: "Ui", value: "500V" },
      { name: "IP Rating", value: "IP66" }
    ],
    voltage: "AC 15 240V",
    current: "3A",
    mounting: "Panel/Machine Mount"
  },
  {
    id: "sibass-limit-switch-wld",
    name: "SIBASS Limit Switch (SE-WLD)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-WLD",
    description: "The SIBASS SE-WLD limit switch features a top plunger actuator. With a NEMA A600 rating, it is suitable for heavy-duty industrial control circuit applications.",
    image: "/images/sibass-limit-switch-wld.jpg",
    features: [
      "Actuator: Top Plunger",
      "Rating: NEMA A600",
      "Contacts: 1NO + 1NC",
      "Application: Industrial control circuits"
    ],
    specs: [
      { name: "Model", value: "SE-WLD" },
      { name: "NEMA Rating", value: "A600" },
      { name: "Type", value: "3, 4 and 13" }
    ],
    voltage: "600V AC Max",
    current: "Standard Load",
    mounting: "Panel/Machine Mount"
  },
  {
    id: "sibass-limit-switch-wld2",
    name: "SIBASS Limit Switch (SE-WLD2)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-WLD2",
    description: "The SIBASS SE-WLD2 limit switch comes equipped with a top roller plunger actuator, ideal for applications requiring smooth, low-friction actuation.",
    image: "/images/sibass-limit-switch-wld2.jpg",
    features: [
      "Actuator: Top Roller Plunger",
      "Rating: NEMA A600",
      "Contacts: 1NO + 1NC",
      "Action: Low-friction actuation"
    ],
    specs: [
      { name: "Model", value: "SE-WLD2" },
      { name: "NEMA Rating", value: "A600" },
      { name: "Type", value: "3, 4 and 13" }
    ],
    voltage: "600V AC Max",
    current: "Standard Load",
    mounting: "Panel/Machine Mount"
  },
  {
    id: "sibass-micro-switch-m121",
    name: "SIBASS Micro Switch (SE-XCK-M121)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-XCK-M121",
    description: "The SIBASS SE-XCK-M121 micro switch features a roller lever actuator and a robust metal body. Its IP66 rating makes it perfect for demanding industrial environments with heavy washdowns.",
    image: "/images/sibass-micro-switch-m121.jpg",
    features: [
      "Actuator: Roller Lever",
      "Housing: Sturdy metal enclosure",
      "Protection: IP66 Rated",
      "Compliance: IEC/EN 60947-5-1"
    ],
    specs: [
      { name: "Model", value: "SE-XCK-M121" },
      { name: "Ui", value: "500V" },
      { name: "IP Rating", value: "IP66" }
    ],
    voltage: "AC 15 240V",
    current: "3A",
    mounting: "Panel/Machine Mount"
  },
  {
    id: "sibass-solar-fuse-sepv32x",
    name: "SIBASS Cylindrical Solar Fuse & Holder",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SEPV-32X (Holder) / SE-10PV (Fuse)",
    description: "The SIBASS Cylindrical Solar Fuse system (SE-10PV fuses in SEPV-32X holders) is designed specifically for photovoltaic string protection. Rated up to 1000VDC with a high 20kA breaking capacity.",
    image: "/images/sibass-solar-fuse-sepv32x.jpg",
    features: [
      "Application: Photovoltaic (PV) system protection",
      "Breaking Capacity: High 20kA rating",
      "Standard: Meets IEC 60269-6",
      "Variants: Available in 16A, 20A, and 30A"
    ],
    specs: [
      { name: "Model", value: "SEPV-32X" },
      { name: "Voltage", value: "1000VDC" },
      { name: "Breaking Cap", value: "20kA" }
    ],
    voltage: "1000V DC",
    current: "16A / 20A / 30A",
    mounting: "DIN Rail Mount"
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
console.log('Successfully added 5 new SIBASS items (M110, WLD, WLD2, M121, Solar Fuses)!');
