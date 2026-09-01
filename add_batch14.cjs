const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-reel-back",
    name: "SIBASS Industrial Cable Reel (Back Profile)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Reel Rear",
    description: "A rear-view of the SIBASS Industrial Cable Reel, highlighting the integrated yellow thermal overload rocker switch. This essential safety feature automatically trips to prevent cable melting if maximum load is exceeded while coiled.",
    image: "/images/sibass-reel-back.jpg",
    features: [
      "Safety: Rear-mounted thermal overload cutoff switch with manual reset",
      "Structure: Robust tubular steel frame prevents tipping",
      "Ergonomics: Integrated winding handle for rapid cable retrieval",
      "Ventilation: Vented back plate prevents excessive heat buildup"
    ],
    specs: [
      { name: "Protection", value: "Thermal Overload" },
      { name: "Frame", value: "Tubular Steel" },
      { name: "Switch", value: "Manual Reset" }
    ],
    voltage: "220-250V",
    current: "16A",
    mounting: "Free-Standing"
  },
  {
    id: "sibass-contact-nc",
    name: "SIBASS Auxiliary Contact Block (NC)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "ZB2-BE102",
    description: "The SIBASS ZB2-BE102 is a normally closed (NC) auxiliary contact block. Featuring a highly visible red housing, it clips seamlessly onto standard push buttons and selector switches for reliable industrial control circuit breaking.",
    image: "/images/sibass-contact-nc.jpg",
    features: [
      "Function: Normally Closed (NC) switching logic",
      "Identification: Industry standard red coloration for NC blocks",
      "Mounting: Quick-clip design for rapid assembly on ZB2 series actuators",
      "Reliability: Self-cleaning silver alloy contacts"
    ],
    specs: [
      { name: "Model", value: "ZB2-BE102" },
      { name: "Type", value: "Normally Closed (NC)" },
      { name: "Rating", value: "10A 400V~" }
    ],
    voltage: "400V AC",
    current: "10A",
    mounting: "Clip-On Actuator"
  },
  {
    id: "sibass-cable-ties",
    name: "SIBASS Nylon Cable Ties (300mm)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-3.6x300mm",
    description: "A 100-piece pack of SIBASS self-locking PVC cable ties. Measuring 300mm in length, these UL94V-2 flame-retardant polyamide ties are essential for securing wire harnesses and bundling cables in heavy-duty panel work.",
    image: "/images/sibass-cable-ties.jpg",
    features: [
      "Material: High-tensile Polyamide 66 (UL94V-2 Nylon)",
      "Strength: Minimum loop tensile strength of 18kgf (39.7 lbs)",
      "Capacity: Secures cable bundles up to 76mm in diameter",
      "Resistance: UV and chemical resistant for harsh environments"
    ],
    specs: [
      { name: "Size", value: "3.6 x 300mm" },
      { name: "Quantity", value: "100 Pcs" },
      { name: "Material", value: "Nylon 66" }
    ],
    voltage: "N/A",
    current: "N/A",
    mounting: "Self-Locking Zip"
  },
  {
    id: "sibass-limit-roller",
    name: "SIBASS Adjustable Roller Lever Limit Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8108",
    description: "The SIBASS SE-8108 is a highly versatile mechanical limit switch featuring a fully adjustable rotary roller lever. Built with a rugged die-cast aluminum base, it provides precise position detection for CNC machines and automated gates.",
    image: "/images/sibass-limit-roller.jpg",
    features: [
      "Actuator: Rotary lever with adjustable length and roller angle",
      "Housing: Impact-resistant plastic cover on a die-cast metal base",
      "Contacts: 1 NO + 1 NC snap-action mechanism",
      "Protection: IP65 rated against industrial coolant and dust"
    ],
    specs: [
      { name: "Model", value: "SE-8108" },
      { name: "Actuator", value: "Adjustable Roller" },
      { name: "Rating", value: "10A 250V AC" }
    ],
    voltage: "250V AC / 115V DC",
    current: "10A / 0.4A",
    mounting: "Surface Screw Mount"
  },
  {
    id: "sibass-limit-plunger",
    name: "SIBASS Plunger Limit Switches (SE-8112 & SE-8122)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-8112 / SE-8122",
    description: "A pair of SIBASS plunger-type mechanical limit switches. Displaying both the standard roller plunger (SE-8112) and the cross-roller plunger (SE-8122), these switches are perfect for high-precision, short-travel machine tooling detection.",
    image: "/images/sibass-limit-plunger.jpg",
    features: [
      "Actuators: Direct-acting top roller plungers (Parallel and Cross-mounted)",
      "Precision: High-repeatability trigger points for tooling stops",
      "Terminals: Pre-molded flexible rubber cable gland for wire protection",
      "Build: Die-cast alloy base for ultimate rigidity"
    ],
    specs: [
      { name: "Models", value: "SE-8112 / 8122" },
      { name: "Type", value: "Top Roller Plunger" },
      { name: "Contacts", value: "1NO + 1NC" }
    ],
    voltage: "250V AC / 115V DC",
    current: "5A / 0.4A",
    mounting: "Surface Panel Mount"
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
