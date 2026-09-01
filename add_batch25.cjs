const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "heavy-duty-connector-insert-4a",
    name: "Heavy Duty Connector Insert (Han 4A-F)",
    brand: "Generic",
    category: "Connectors",
    model: "Han 4A-F",
    description: "A high-quality 4-pin female insert (Han 4A-F) designed for heavy duty industrial connectors. Rated for 10A at 230/400V, it features clearly marked screw terminals and a central grounding point for secure, reliable power transmission.",
    image: "/images/heavy-duty-connector-insert-4a.jpg",
    features: [
      "Configuration: 4 Pins + 1 Ground (Female)",
      "Terminals: Easy-to-wire screw clamp connection",
      "Material: High-temperature resistant thermoplastic",
      "Application: Industrial machinery power and control"
    ],
    specs: [
      { name: "Model", value: "Han 4A-F" },
      { name: "Rating", value: "10A 230/400V" },
      { name: "Contacts", value: "4 + PE" }
    ],
    voltage: "230 / 400V",
    current: "10A",
    mounting: "Insert for HDC Hoods"
  },
  {
    id: "heavy-duty-connector-hood-assembled",
    name: "Heavy Duty Connector (Assembled Kit)",
    brand: "Generic",
    category: "Connectors",
    model: "HDC Assembly Kit",
    description: "A complete heavy duty connector assembly showing both the grey metal hood with cable gland and the panel mount base with locking lever. This kit ensures a secure, IP-rated connection for demanding industrial applications.",
    image: "/images/heavy-duty-connector-hood-assembled.jpg",
    features: [
      "Kit: Includes side-entry hood and panel-mount base",
      "Locking: Robust single-lever latch system",
      "Protection: Designed to provide IP65 protection when mated",
      "Housing: Die-cast aluminum alloy"
    ],
    specs: [
      { name: "Type", value: "Complete Assembly" },
      { name: "Material", value: "Metal Housing" },
      { name: "Locking", value: "Single Lever" }
    ],
    voltage: "Depends on Insert",
    current: "Depends on Insert",
    mounting: "Surface / Cable Mount"
  },
  {
    id: "omron-style-relay-220v",
    name: "General Purpose 8-Pin Relay (220VAC)",
    brand: "Generic",
    category: "Relays & Contactors",
    model: "8-Pin Power Relay",
    description: "A versatile general-purpose electromagnetic power relay featuring a transparent dust-proof cover. Operating on a 220/240VAC coil, it utilizes a standard 8-pin plug-in base for quick installation in control panels.",
    image: "/images/omron-style-relay-220v.jpg",
    features: [
      "Coil Voltage: 220/240V AC",
      "Configuration: DPDT (2 Form C) 8-pin base",
      "Enclosure: Clear plastic cover for visual inspection",
      "Application: Automation circuits, motor controls"
    ],
    specs: [
      { name: "Type", value: "Plug-in Relay" },
      { name: "Pins", value: "8-Pin Octal / Blade" },
      { name: "Coil", value: "220/240VAC" }
    ],
    voltage: "220-240V AC Coil",
    current: "Standard Contact Rating",
    mounting: "8-Pin Socket Mount"
  },
  {
    id: "riko-proximity-sensor-sn04",
    name: "RIKO SN04-N Proximity Sensor",
    brand: "RIKO",
    category: "Sensors & Controls",
    model: "SN04-N",
    description: "The RIKO SN04-N is a reliable rectangular inductive proximity sensor. Operating on 10-30V DC with an NPN Normally Open (NO) output, it features a built-in red LED indicator and is widely used for position detection in automation.",
    image: "/images/riko-proximity-sensor-sn04.jpg",
    features: [
      "Output: NPN Normally Open (NO)",
      "Design: Compact blue block housing",
      "Indicator: High-visibility red LED status light",
      "Wiring: 3-wire DC connection (10-30V)"
    ],
    specs: [
      { name: "Model", value: "SN04-N" },
      { name: "Output Type", value: "NPN NO" },
      { name: "Sensing", value: "Inductive" }
    ],
    voltage: "10-30V DC",
    current: "Standard Draw",
    mounting: "Screw Mount"
  },
  {
    id: "led-digital-voltmeter-ad22-boxes",
    name: "AD22 Digital Panel Voltmeters (4 Colors)",
    brand: "Generic",
    category: "Test & Measurement",
    model: "AD22-22V Bulk",
    description: "A multi-pack view of AD22 series digital panel voltmeters. These compact 22mm meters provide real-time voltage monitoring and are shown here in four distinct phase colors: Green, Red, Yellow, and Blue.",
    image: "/images/led-digital-voltmeter-ad22-boxes.jpg",
    features: [
      "Display: 3-digit bright LED",
      "Format: Fits standard 22mm round cutouts",
      "Variety: Complete range of colors for phase indication",
      "Application: Switchboards, control panels, generator sets"
    ],
    specs: [
      { name: "Type", value: "Digital Voltmeter" },
      { name: "Size", value: "22mm Cutout" },
      { name: "Packaging", value: "Bulk Boxes" }
    ],
    voltage: "Measurement Range Varies",
    current: "Low Draw",
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
console.log('Successfully added the 5 new items!');
