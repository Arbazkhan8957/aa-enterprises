const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-contactor-sed18-hand",
    name: "SIBASS SEsys Control Contactor (SE D18)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D18",
    description: "The SIBASS SEsys Control Contactor SE D18 is a compact, high-performance contactor designed for reliable motor control and switching applications. This image shows the contactor held in hand, highlighting its compact form factor.",
    image: "/images/sibass-contactor-sed18-hand.jpg",
    features: [
      "Series: SEsys Control",
      "Function: Reliable motor control and switching",
      "Design: Compact form factor for easy installation",
      "Application: Industrial automation"
    ],
    specs: [
      { name: "Model", value: "SE D18" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "18A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-contactor-sed18-box",
    name: "SIBASS SEsys Control Contactor (SE D18) - Boxed",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D18 (SE - 3P 18 M5)",
    description: "The SIBASS SE D18 contactor displayed on its official packaging. This reliable 18A contactor is part of the SEsys Control series, suitable for various industrial automation and control tasks.",
    image: "/images/sibass-contactor-sed18-box.jpg",
    features: [
      "Series: SEsys Control",
      "Protection: Enclosed design to prevent dust ingress",
      "Packaging: Comes in official SIBASS retail box",
      "Reliability: Long mechanical and electrical lifespan"
    ],
    specs: [
      { name: "Model", value: "SE D18" },
      { name: "Rating", value: "18A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "18A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-contactor-sed25-box",
    name: "SIBASS SEsys Control Contactor (SE D25)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D25 (SE - 3P 25 M5)",
    description: "The SIBASS SE D25 is a robust 25A contactor from the SEsys Control series, providing dependable performance for more demanding motor loads. Shown here on its official retail packaging.",
    image: "/images/sibass-contactor-sed25-box.jpg",
    features: [
      "Series: SEsys Control",
      "Capacity: Higher 25A rating for demanding loads",
      "Coil: Low power consumption",
      "Terminals: Secure screw clamp connections"
    ],
    specs: [
      { name: "Model", value: "SE D25" },
      { name: "Rating", value: "25A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "25A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-contactor-sed12-box",
    name: "SIBASS SEsys Control Contactor (SE D12)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D12 (SE - 3P 12 M5)",
    description: "The SIBASS SE D12 offers 12A switching capacity in the proven SEsys Control form factor. Ideal for smaller motors, lighting, and general control circuits.",
    image: "/images/sibass-contactor-sed12-box.jpg",
    features: [
      "Series: SEsys Control",
      "Versatility: Ideal for small motors and lighting circuits",
      "Safety: Finger-proof terminals",
      "Compliance: Meets international standards"
    ],
    specs: [
      { name: "Model", value: "SE D12" },
      { name: "Rating", value: "12A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "12A",
    mounting: "DIN Rail / Panel Mount"
  },
  {
    id: "sibass-contactor-sed09-box",
    name: "SIBASS SEsys Control Contactor (SE D09)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE D09 (SE - 3P 09 M5)",
    description: "The SIBASS SE D09 is the 9A variant of the SEsys Control contactor range. Compact and efficient, it's perfect for low-power automation and switching applications.",
    image: "/images/sibass-contactor-sed09-box.jpg",
    features: [
      "Series: SEsys Control",
      "Efficiency: Optimized for low-power applications",
      "Compactness: Space-saving design in control panels",
      "Integration: Easily combined with overload relays"
    ],
    specs: [
      { name: "Model", value: "SE D09" },
      { name: "Rating", value: "9A" },
      { name: "Poles", value: "3P" }
    ],
    voltage: "415V AC",
    current: "9A",
    mounting: "DIN Rail / Panel Mount"
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
console.log('Successfully added 5 new SIBASS contactor items!');
