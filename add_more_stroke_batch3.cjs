const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newStrokeItems = [
  {
    id: "stroke-pb-cover-clear",
    name: "Stroke Clear Push Button Guard",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "PB-Guard-Clear",
    description: "A secondary transparent guard specifically for 22mm control switches. It adds an extra layer of physical security to control panels by preventing accidental impacts or presses on critical operational buttons.",
    image: "/images/stroke-pb-cover-clear.png",
    features: [
      "Material: Heavy-duty transparent acrylic/polycarbonate",
      "Function: Anti-accidental operation guard",
      "Compatibility: Standard 22mm push buttons and selectors",
      "Mounting: Fits directly behind the button bezel"
    ],
    specs: [
      { name: "Type", value: "Switch Guard" },
      { name: "Color", value: "Clear" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "22mm Bezel"
  },
  {
    id: "stroke-sensor-cable",
    name: "Stroke M12 Sensor Cable & Connector",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "M12-Cable",
    description: "High-quality industrial sensor cable featuring a molded M12 connector. Designed for reliable signal transmission in automation systems, photoelectric sensors, and proximity switches, featuring color-coded internal wiring for quick installation.",
    image: "/images/stroke-sensor-cable.jpg",
    features: [
      "Connector: M12 Circular threaded connector",
      "Cable: Flexible, oil-resistant industrial sheathing",
      "Wiring: Color-coded pre-stripped cores (Brown, Blue, Black, White)",
      "Protection: IP67 rated when mated",
      "Application: Industrial automation and sensor networks"
    ],
    specs: [
      { name: "Type", value: "M12 Sensor Cable" },
      { name: "IP Rating", value: "IP67" },
      { name: "Cores", value: "3-Core / 4-Core Options" }
    ],
    voltage: "24V DC / 250V AC",
    current: "4A",
    mounting: "Threaded M12"
  },
  {
    id: "stroke-pb-yellow-guard",
    name: "Stroke Yellow Emergency Stop Guard",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "E-Stop-Guard",
    description: "A highly visible yellow safety guard designed specifically for Emergency Stop (E-Stop) mushroom buttons. It ensures the button is easily identifiable while preventing accidental triggering by falling objects or unintended personnel contact.",
    image: "/images/stroke-pb-yellow-guard.jpg",
    features: [
      "Color: High-visibility safety yellow base",
      "Cover: Transparent hinged lid",
      "Function: E-Stop protection and LOTO readiness",
      "Standards: Meets OSHA and ANSI lockout requirements"
    ],
    specs: [
      { name: "Type", value: "E-Stop Guard" },
      { name: "Color", value: "Yellow / Clear" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "22mm Bezel Mount"
  },
  {
    id: "stroke-crimping-tool",
    name: "Stroke HSC8 6-4 Crimping Tool Kit",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "HSC8 6-4",
    description: "The Stroke HSC8 6-4 is a professional-grade self-adjusting crimping plier kit designed for wire ferrules. It includes a comprehensive assortment of color-coded insulated bootlace terminals, ensuring gas-tight crimps for safe and reliable electrical terminations.",
    image: "/images/stroke-crimping-tool.jpg",
    features: [
      "Range: 0.25 - 10mm² (AWG 23-7)",
      "Mechanism: Ratcheting self-adjusting square crimp",
      "Kit Includes: Assorted insulated wire ferrules in organizer box",
      "Ergonomics: Non-slip bi-material handles for reduced fatigue"
    ],
    specs: [
      { name: "Model", value: "HSC8 6-4" },
      { name: "Capacity", value: "0.25-10mm²" },
      { name: "Type", value: "Ferrule Crimper" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Hand Tool"
  },
  {
    id: "stroke-relay-sockets",
    name: "Stroke Relay Sockets (PYF14A / PTF08A)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "PYF14A / PTF08A",
    description: "Premium Stroke industrial relay sockets compatible with standard 8-pin and 14-pin miniature relays. Featuring robust screw terminals and DIN-rail mounting clips, they provide secure and reliable bases for automation control logic.",
    image: "/images/stroke-relay-sockets.jpg",
    features: [
      "Variants: 8-Pin (PTF08A) and 14-Pin (PYF14A)",
      "Mounting: 35mm DIN rail or panel screw mount",
      "Terminals: Heavy-duty screw clamp terminals",
      "Compatibility: Standard MY and LY series relays"
    ],
    specs: [
      { name: "Type", value: "Relay Base Socket" },
      { name: "Pins", value: "8-Pin / 14-Pin" }
    ],
    voltage: "Up to 250V AC",
    current: "10A",
    mounting: "DIN Rail / Panel"
  },
  {
    id: "stroke-red-socket-inline",
    name: "Stroke Type 025 32A Inline Socket",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Type 025 Socket",
    description: "A heavy-duty 32A inline industrial socket (coupler) matching the Stroke Type 025 series. Designed for temporary or extension power drops, it features a self-closing protective cap to maintain IP44 protection when unplugged.",
    image: "/images/stroke-red-socket-inline.jpg",
    features: [
      "Configuration: 5-Pin (3P+N+E)",
      "Protection: IP44 with spring-loaded cover",
      "Current/Voltage: 32A / 220-415V~",
      "Application: Extension leads and portable power"
    ],
    specs: [
      { name: "Type", value: "Inline Socket / Coupler" },
      { name: "Poles", value: "3P+N+E" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "Inline Cable"
  },
  {
    id: "stroke-red-plug-pins",
    name: "Stroke 32A 5-Pin Industrial Plug (Male)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Type 025 Male",
    description: "A high-performance 32A 5-pin industrial male plug. Engineered with solid brass pins for superior conductivity, it is ideal for connecting 3-phase machinery, motors, and heavy industrial equipment to the mains supply.",
    image: "/images/stroke-red-plug-pins.jpg",
    features: [
      "Pins: Solid brass highly conductive terminals",
      "Configuration: 5-Pin (3P+N+E)",
      "Current/Voltage: 32A / 220-415V~",
      "Housing: Ergonomic grip for easy insertion/removal"
    ],
    specs: [
      { name: "Type", value: "Male Plug" },
      { name: "Poles", value: "3P+N+E" }
    ],
    voltage: "415V AC",
    current: "32A",
    mounting: "Cable Mount"
  },
  {
    id: "stroke-3way-splitter-alt",
    name: "Stroke Multi-Way Industrial Socket (1 to 3)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Multi-Way Adapter",
    description: "An alternative form-factor Stroke 1-to-3 multi-way industrial socket adapter. Provides safe, weatherproof (IP44/IP67 dependent on mating) power distribution from a single industrial feed to three separate outputs.",
    image: "/images/stroke-3way-splitter-alt.jpg",
    features: [
      "Design: Y-shape or T-shape 3-way distribution",
      "Covers: Individual spring-loaded socket covers",
      "Current/Voltage: 16A / 220-250V~",
      "Application: Expanding portable power access on site"
    ],
    specs: [
      { name: "Type", value: "Socket Splitter" },
      { name: "Outputs", value: "3 x 16A Sockets" }
    ],
    voltage: "220V-250V AC",
    current: "16A",
    mounting: "Portable / Inline"
  }
];

newStrokeItems.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added 8 more Stroke items!');
