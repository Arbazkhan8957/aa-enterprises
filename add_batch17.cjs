const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-reel-front",
    name: "SIBASS Industrial Cable Reel (3-Socket Front)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Reel Front",
    description: "The front view of the SIBASS Industrial Cable Reel. It features three heavy-duty blue Type-312 panel sockets (IP54) equipped with spring-loaded weather flaps, allowing multiple high-draw tools to be connected safely on site.",
    image: "/images/sibass-reel-front.jpg",
    features: [
      "Connectivity: 3x robust 16A/230V IP54 sockets with self-closing covers",
      "Safety: Integrated neon power indicator clearly shows active current",
      "Ergonomics: Bright red rotating winding knob for fast cable retraction",
      "Build: Thick ABS drum mounted to a balanced tubular steel frame"
    ],
    specs: [
      { name: "Sockets", value: "3x 16A (Blue)" },
      { name: "Indicator", value: "Neon Red Pilot" },
      { name: "IP Rating", value: "IP54 (Sockets)" }
    ],
    voltage: "230-250V AC",
    current: "16A Total Load",
    mounting: "Free-Standing Base"
  },
  {
    id: "sibass-voltage-protector-box",
    name: "SIBASS 3-Phase Voltage Protector (Retail Box)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-63N(63A) Box",
    description: "The SIBASS SE-63N digital 3-Phase Voltage and Amp Protector shown with its official retail packaging and comprehensive setup manual. Details the extensive programmable parameters (P1 to P19) for customized motor protection.",
    image: "/images/sibass-voltage-protector-box.jpg",
    features: [
      "Programming: Includes detailed parameter map for trip times and thresholds",
      "Warranty: Box highlights the SIBASS 2-Year Extended Warranty",
      "Information: Manual covers wiring diagrams and specific L1/L2/L3 phase setups",
      "Design: Compact 35mm DIN rail footprint despite handling 63A per phase"
    ],
    specs: [
      { name: "Type", value: "Digital Phase Relay" },
      { name: "Format", value: "Retail Packaging" },
      { name: "Instructions", value: "Included Manual" }
    ],
    voltage: "380-415V 3-Phase",
    current: "63A Max",
    mounting: "DIN Rail Mount"
  },
  {
    id: "sibass-foot-switch-base",
    name: "SIBASS Heavy Duty Foot Switch (Base & Box)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-FS3 Base",
    description: "An alternate view of the SIBASS SE-FS3 Foot Switch alongside its retail box. This angle highlights the heavy-duty cast metal base plate equipped with rubberized anti-slip feet and secure cable gland entry points.",
    image: "/images/sibass-foot-switch-base.jpg",
    features: [
      "Base: Solid metal bottom plate ensures the pedal won't slide during heavy use",
      "Cable Entry: Features reinforced metal clamps to prevent cord pull-out",
      "Packaging: Ships in official SIBASS protective commercial boxing",
      "Maintenance: Easy-access bottom screws for quick internal switch replacement"
    ],
    specs: [
      { name: "Model", value: "SE-FS3" },
      { name: "Base", value: "Cast Metal" },
      { name: "Grip", value: "Anti-Slip Feet" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "Floor Placed"
  },
  {
    id: "sibass-foot-switch-single-covered",
    name: "SIBASS Single Foot Switch (Safety Covered)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Single Pedal",
    description: "The SIBASS single pedal industrial foot switch. Like its twin counterpart, it features a heavy-duty grey die-cast base and a high-visibility yellow steel overhead guard to prevent accidental actuation in hazardous environments.",
    image: "/images/sibass-foot-switch-single-covered.jpg",
    features: [
      "Safety: Thick steel overhead guard blocks falling debris and accidental steps",
      "Pedal: Ergonomic, deeply grooved grey pedal provides maximum boot grip",
      "Base: Heavy, wide-stance die-cast housing prevents slipping and tipping",
      "Warning: Prominent hazard symbol ensures clear visibility on the shop floor"
    ],
    specs: [
      { name: "Configuration", value: "Single Pedal" },
      { name: "Safety", value: "Steel Overhead Guard" },
      { name: "Color", value: "Safety Yellow / Grey" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "Floor Placed"
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
console.log('Successfully added 4 new unique SIBASS items!');
