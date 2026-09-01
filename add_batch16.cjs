const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-contact-no",
    name: "SIBASS Auxiliary Contact Block (NO)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2-BE101",
    description: "The SIBASS ZB2-BE101 is a normally open (NO) auxiliary contact block. Identified by its bright green housing, it provides reliable switching for control circuits and seamlessly clips onto all standard ZB2 series actuators.",
    image: "/images/sibass-contact-no.jpg",
    features: [
      "Function: Normally Open (NO) switching logic",
      "Identification: Industry standard green coloration for NO blocks",
      "Mounting: Quick-clip design for rapid assembly on ZB2 series push buttons",
      "Reliability: Self-cleaning silver alloy contacts ensure consistent conductivity"
    ],
    specs: [
      { name: "Model", value: "ZB2-BE101" },
      { name: "Type", value: "Normally Open (NO)" },
      { name: "Rating", value: "10A 400V~" }
    ],
    voltage: "400V AC",
    current: "10A",
    mounting: "Clip-On Actuator"
  },
  {
    id: "sibass-voltage-protector-3p",
    name: "SIBASS 3-Phase Voltage & Amp Protector",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-63N(63A)",
    description: "The SIBASS SE-63N(63A) is an advanced 3-phase digital protection relay. It continuously monitors voltage and current across all phases, automatically disconnecting power to prevent motor burnout during over/under voltage or overcurrent events.",
    image: "/images/sibass-voltage-protector-3p.jpg",
    features: [
      "Display: 6x digital LED readouts for real-time monitoring of all 3 phases (V & A)",
      "Protection: Guards against over-voltage, under-voltage, phase loss, and over-current",
      "Adjustability: Fully programmable trip thresholds and recovery delay timers",
      "Mounting: Standard 35mm DIN rail design for easy panel integration"
    ],
    specs: [
      { name: "Model", value: "SE-63N(63A)" },
      { name: "Capacity", value: "63A per phase" },
      { name: "Type", value: "3-Phase Digital Relay" }
    ],
    voltage: "400V AC 3-Phase",
    current: "63A Max",
    mounting: "DIN Rail Mount"
  },
  {
    id: "sibass-foot-switch-double",
    name: "SIBASS Twin Foot Switch (Safety Covered)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-LT-4",
    description: "The SIBASS SE-LT-4 is a heavy-duty twin foot switch. It features two independent grooved pedals housed under a high-visibility yellow safety shield, preventing accidental actuation from falling objects in busy workshops.",
    image: "/images/sibass-foot-switch-double.jpg",
    features: [
      "Actuation: Twin independent pedals (e.g., Forward/Reverse or Up/Down control)",
      "Safety: Solid steel overhead guard protects against accidental triggering",
      "Base: Heavy die-cast grey base provides exceptional floor stability",
      "Visibility: Bright safety yellow cover with hazard warning label"
    ],
    specs: [
      { name: "Model", value: "SE-LT-4" },
      { name: "Configuration", value: "Twin Pedal" },
      { name: "Safety", value: "Overhead Guard" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "Floor Placed"
  },
  {
    id: "sibass-blue-sockets",
    name: "SIBASS Blue Industrial Plug & Sockets",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "Type 012 / 212 / 312",
    description: "A selection of SIBASS 16A blue industrial connectors designed for 230V applications. The set includes a robust Type-012 plug alongside Type-212 inline and Type-312 panel-mount sockets, all featuring spring-loaded weather flaps.",
    image: "/images/sibass-blue-sockets.jpg",
    features: [
      "Application: Standard European/International 230V single-phase power",
      "Protection: IP54 rated for splash and dust resistance",
      "Safety: Spring-loaded socket covers snap shut automatically when unplugged",
      "Build: High-impact thermoplastic resists cracking on job sites"
    ],
    specs: [
      { name: "Rating", value: "16A 200-250V~" },
      { name: "IP Rating", value: "IP54" },
      { name: "Types", value: "Plug / Inline / Panel" }
    ],
    voltage: "200-250V AC",
    current: "16A",
    mounting: "Inline / Panel Mount"
  },
  {
    id: "sibass-hdc-enclosures",
    name: "SIBASS Heavy Duty Connector Housings",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-HDC Series",
    description: "SIBASS heavy-duty connector (HDC) metallic housings. These die-cast aluminum enclosures provide robust mechanical and environmental protection for multi-pin industrial connector inserts, utilizing heavy-duty steel locking latches.",
    image: "/images/sibass-hdc-enclosures.jpg",
    features: [
      "Material: Rugged die-cast aluminum with a corrosion-resistant powder coat",
      "Locking: Twin galvanized steel lever latches ensure a vibration-proof seal",
      "Design: Side and top cable entry variants for flexible panel wiring",
      "Protection: Guards sensitive multi-pin inserts against dust, water, and impact"
    ],
    specs: [
      { name: "Type", value: "HDC Hood / Base" },
      { name: "Material", value: "Die-Cast Aluminum" },
      { name: "Locking", value: "Double Lever Latches" }
    ],
    voltage: "N/A (Housing)",
    current: "N/A",
    mounting: "Panel / Cable Mount"
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
console.log('Successfully added 5 new SIBASS items!');
