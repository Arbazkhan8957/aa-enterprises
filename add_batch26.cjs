const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "cylindrical-photoelectric-sensor",
    name: "Cylindrical Photoelectric Sensor (30cm)",
    brand: "Generic",
    category: "Sensors & Controls",
    model: "10-30VDC PNP NO",
    description: "A robust yellow cylindrical photoelectric/proximity sensor designed for precise object detection. With a sensing distance of 30cm and PNP Normally Open output, it's ideal for automated packaging and conveying systems.",
    image: "/images/cylindrical-photoelectric-sensor.jpg",
    features: [
      "Output: PNP Normally Open (NO)",
      "Sensing Range: 30cm (Sn:30cm)",
      "Housing: Durable yellow cylindrical body with threaded mounting",
      "Connection: Pre-wired cable"
    ],
    specs: [
      { name: "Type", value: "Photoelectric Sensor" },
      { name: "Voltage", value: "10-30V DC" },
      { name: "Range", value: "30 cm" }
    ],
    voltage: "10-30V DC",
    current: "Standard Draw",
    mounting: "Panel / Bracket Mount"
  },
  {
    id: "ckc-rotary-timer-dc24v",
    name: "CKC Rotary Knob Timer (0-10S, DC 24V)",
    brand: "CKC",
    category: "Timers",
    model: "0-10S VDC",
    description: "The CKC 0-10 Second Rotary Knob Timer is designed for precise, short-duration time delay control. Operating on DC 24V, it features a clear front dial for easy adjustment and prominent ON/UP indicator lights.",
    image: "/images/ckc-rotary-timer-dc24v.jpg",
    features: [
      "Range: 0 to 10 seconds",
      "Control: Smooth rotary knob for time setting",
      "Indicators: Integrated ON and UP status LEDs",
      "Application: Machine control and automation timing"
    ],
    specs: [
      { name: "Model", value: "0-10S Timer" },
      { name: "Voltage", value: "24V DC" },
      { name: "Format", value: "Panel/Socket Mount" }
    ],
    voltage: "24V DC",
    current: "Standard Contact",
    mounting: "Plug-in / Panel"
  },
  {
    id: "taperr-axial-fan-80mm-12v",
    name: "Taperr Axial Fan (80x80x25mm)",
    brand: "Taperr",
    category: "Cooling Fans",
    model: "80x80x25mm 12V",
    description: "A high-performance Taperr brand DC axial cooling fan. Measuring 80x80x25mm, this 12V DC fan features a sleeve bearing design for quiet operation and draws only 0.20A, making it perfect for electronic enclosure cooling.",
    image: "/images/taperr-axial-fan-80mm-12v.jpg",
    features: [
      "Bearing: Quiet and reliable sleeve bearing",
      "Protection: Impedance protected motor",
      "Certification: CE Marked",
      "Size: Standard 80mm square frame"
    ],
    specs: [
      { name: "Size", value: "80x80x25mm" },
      { name: "Voltage", value: "12V DC" },
      { name: "Current", value: "0.20A" }
    ],
    voltage: "12V DC",
    current: "0.20A",
    mounting: "Screw Mount"
  },
  {
    id: "green-led-voltmeters-box",
    name: "AD22 Green LED Voltmeters (Box of 10)",
    brand: "Generic",
    category: "Test & Measurement",
    model: "AD22-22V Green",
    description: "A bulk box containing ten AD22 series digital panel voltmeters. These 22mm meters feature a vivid green 3-digit LED display, providing continuous and clear voltage monitoring for industrial control panels.",
    image: "/images/green-led-voltmeters-box.jpg",
    features: [
      "Display: 3-Digit Green LED",
      "Size: Fits standard 22mm panel cutouts",
      "Packaging: Box of 10 pieces",
      "Application: Real-time AC/DC voltage measurement"
    ],
    specs: [
      { name: "Model", value: "AD22-22V" },
      { name: "Color", value: "Green" },
      { name: "Package", value: "10 Pcs/Box" }
    ],
    voltage: "Varies",
    current: "Low Draw",
    mounting: "22mm Panel Mount"
  },
  {
    id: "lxw5-11q1-roller-limit-switch",
    name: "LXW5-11Q1 Roller Plunger Limit Switch",
    brand: "Generic",
    category: "Sensors & Controls",
    model: "LXW5-11Q1",
    description: "The LXW5-11Q1 is a rugged micro limit switch featuring a stainless steel roller plunger actuator. Designed for high mechanical endurance, it supports heavy loads (Ith:15A, Ui:380V) for precise position sensing in machinery.",
    image: "/images/lxw5-11q1-roller-limit-switch.jpg",
    features: [
      "Actuator: Top roller plunger for smooth mechanical contact",
      "Rating: Ui:380V, Ith:15A (AC-15, DC-13)",
      "Configuration: SPDT (1 NO + 1 NC)",
      "Housing: Durable black phenolic resin"
    ],
    specs: [
      { name: "Model", value: "LXW5-11Q1" },
      { name: "Ue / Ie", value: "250V / 5A" },
      { name: "Actuator", value: "Roller Plunger" }
    ],
    voltage: "Up to 380V AC",
    current: "15A (Ith)",
    mounting: "Screw Mount"
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
console.log('Successfully added the 5 new items!');
