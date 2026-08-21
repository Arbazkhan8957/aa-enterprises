const fs = require('fs');

const files = fs.readdirSync('public/images').filter(f => f.startsWith('media_'));

const names = [
  "Stroke Heavy Duty Cable Reel",
  "Stroke XB2 Push Button",
  "Stroke Cooling Fan 12038ASL",
  "Stroke MC4 Solar Connector",
  "Stroke IP67 Multi-Plug Splitter",
  "Stroke 4-Pin Industrial Plug",
  "Stroke High Voltage Connector",
  "Stroke Protective Socket Cover",
  "Stroke 16A Industrial Socket",
  "Stroke 32A Red Plug",
  "Stroke Panel Mount Socket",
  "Stroke Wall Mount Receptacle",
  "Stroke Interlocked Switch Socket",
  "Stroke Distribution Box",
  "Stroke Waterproof Junction Box"
];

let productsStr = '';

files.forEach((file, index) => {
    let name = names[index] || `Stroke Component ${index + 1}`;
    productsStr += `
  {
    id: "user_product_${index}",
    name: "${name}",
    brand: "Stroke",
    category: "Stroke Components",
    model: "STRK-2026-${index + 100}",
    description: "Premium ${name} designed for heavy-duty industrial applications, offering maximum durability and performance. Quality assured and certified for safety.",
    image: "/images/${file}",
    features: [
      "Rugged and Durable Construction",
      "Industrial Grade Reliability",
      "IP67 / IP44 Rating Available",
      "Easy Installation and Mounting"
    ],
    specs: [
      { name: "Brand", value: "Stroke" },
      { name: "Quality", value: "Premium" },
      { name: "Warranty", value: "1 Year" }
    ]
  },`;
});

const newContent = `
export const brands = [
  { name: "Stroke", logo: "STROKE" },
  { name: "Schneider", logo: "Schneider" },
  { name: "Omron", logo: "OMRON" },
  { name: "Sibass", logo: "SIBASS" },
  { name: "Jigo", logo: "JIGO" }
];

export const categories = [
  {
    name: "Stroke Components",
    image: "/images/${files[0] || 'hero.png'}",
    description: "Premium industrial components, plugs, sockets, and heavy-duty switchgears by Stroke.",
  },
  {
    name: "Industrial Connectors",
    image: "/images/${files[1] || 'hero.png'}",
    description: "Heavy duty MC4 and multi-plug connectors.",
  },
  {
    name: "Control Accessories",
    image: "/images/${files[2] || 'hero.png'}",
    description: "Push buttons, fans, and protective covers.",
  }
];

export const products = [
${productsStr}
];
`;

fs.writeFileSync('src/data.js', newContent);
console.log('Successfully updated data.js with improved names');
