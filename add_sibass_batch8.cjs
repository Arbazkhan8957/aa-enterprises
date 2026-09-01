const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-socket-se112-dual",
    name: "SIBASS Industrial Socket SE-112 (Box Packaging)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-112",
    description: "The SIBASS SE-112 is a heavy-duty industrial panel-mount socket designed for rigorous power distribution needs. This image showcases the socket with its official retail packaging, detailing the IP44 series specifications for 16, 32, 63, and 125 Amp applications.",
    image: "/images/sibass-socket-se112-dual.jpg",
    features: [
      "Series: IP 44 Series Industrial Plug and Socket range",
      "Protection: Spring-loaded blue cap for IP44 splash protection",
      "Mounting: Standard 4-screw panel mount base",
      "Reliability: Solid brass internal contacts"
    ],
    specs: [
      { name: "Model", value: "SE-112" },
      { name: "Poles", value: "2P+E (3 Pin)" },
      { name: "Voltage", value: "220-250V~" }
    ],
    voltage: "250V AC",
    current: "16A",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-socket-se112-single",
    name: "SIBASS Panel Mount Socket (SE-112)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-112 (Single)",
    description: "A close-up view of the SIBASS SE-112 industrial socket. Built for safety and longevity, it operates at a nominal voltage of 220-415V~ and features a rugged IP54/IP44 protection degree, making it ideal for factories and construction sites.",
    image: "/images/sibass-socket-se112-single.jpg",
    features: [
      "Configuration: 3x16A capacity",
      "Enclosure: Flame-retardant industrial grade polymer",
      "Safety: Recessed contacts to prevent accidental shocks",
      "Design: Deep blue protective cap with secure latching mechanism"
    ],
    specs: [
      { name: "Model", value: "SE-112" },
      { name: "Current", value: "16A" },
      { name: "Protection Degree", value: "IP54/IP44" }
    ],
    voltage: "220-415V~ AC",
    current: "16A",
    mounting: "Panel Mount"
  },
  {
    id: "sibass-limit-switch-8108h",
    name: "SIBASS Roller Lever Limit Switch (SE-8108H)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8108H",
    description: "The SIBASS SE-8108H is an industrial-grade mechanical limit switch featuring a durable, adjustable metal roller lever. It is designed to provide highly accurate position sensing for automated conveyor belts, machine tools, and overhead doors.",
    image: "/images/sibass-limit-switch-8108h.jpg",
    features: [
      "Actuator: Adjustable metal roller lever arm",
      "Housing: Heavy-duty metal and polymer dual-housing",
      "Contacts: Standard industrial snap-action switching mechanism",
      "Mounting: Industry-standard 4-hole mounting pattern"
    ],
    specs: [
      { name: "Model", value: "SE-8108H" },
      { name: "Type", value: "Roller Limit Switch" },
      { name: "Operation", value: "Mechanical Snap Action" }
    ],
    voltage: "Universal AC/DC",
    current: "Standard load",
    mounting: "Surface Bolt-on"
  },
  {
    id: "sibass-solenoid-sa3502",
    name: "SIBASS AC Traction Solenoid (SA-3502)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SA-3502",
    description: "The SIBASS SA-3502 is a powerful AC traction electromagnet (solenoid) engineered for heavy-duty industrial actuation. With a rated pull force of 3.0kg and a 20mm stroke length, it provides reliable mechanical movement for sorting, braking, and locking mechanisms.",
    image: "/images/sibass-solenoid-sa3502.jpg",
    features: [
      "Performance: High-force 3.0kg pull rating with a 20mm travel stroke",
      "Construction: Laminated steel core for reduced AC hum and eddy currents",
      "Design: Heavy-duty black painted metal frame",
      "Connections: Robust dual wire leads for secure electrical integration"
    ],
    specs: [
      { name: "Model", value: "SA-3502" },
      { name: "Pull Force", value: "3.0kg" },
      { name: "Stroke", value: "20mm" }
    ],
    voltage: "220V AC Standard",
    current: "Continuous Duty Rated",
    mounting: "Bracket Mount"
  },
  {
    id: "sibass-mini-siren-base-view",
    name: "SIBASS Mini Motor Siren (Base Mount View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-MS190 Base",
    description: "A detailed view of the SIBASS SE-MS190 motor siren resting on its retail packaging. This angle highlights the heavy-duty red metal base bracket, which allows for versatile multi-angle mounting on walls or machinery panels.",
    image: "/images/sibass-mini-siren-dup.jpg",
    features: [
      "Mounting: Swivel U-bracket design with pre-drilled holes",
      "Wiring: External flexible wire leads for easy termination",
      "Acoustics: Engineered for maximum decibel output in open industrial spaces",
      "Construction: Fully painted metal body to resist corrosion"
    ],
    specs: [
      { name: "Model", value: "SE-MS190" },
      { name: "Base Material", value: "Steel" },
      { name: "Angle", value: "Adjustable Bracket" }
    ],
    voltage: "Universal",
    current: "High Draw",
    mounting: "Swivel Bracket"
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
