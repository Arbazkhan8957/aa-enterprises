const fs = require('fs');

const files = fs.readdirSync('public/images').filter(f => f.startsWith('media_'));

const defaultNames = [
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
  "Stroke Waterproof Junction Box",
  "Stroke Relay Socket",
  "Stroke Signal Tower Light",
  "Stroke Professional Crimping Tool",
  "Stroke Cooling Fan Large",
  "Stroke Digital Timer Relay",
  "Stroke Industrial Pendant Station",
  "Stroke Remote Control Pendant",
  "Stroke Heavy Duty Cable Reel MTC",
  "Stroke Heavy Duty Cable Reel Back",
  "Stroke Heavy Duty Cable Reel Black"
];

let newProducts = [];
files.forEach((file, index) => {
    let name = defaultNames[index] || `Stroke Component ${index + 1}`;
    newProducts.push({
      id: `user_product_${index}`,
      name: name,
      brand: "Stroke",
      category: "Stroke Components",
      model: `STRK-2026-${index + 100}`,
      description: `Premium ${name} designed for heavy-duty industrial applications.`,
      image: `/images/${file}`,
      features: [
        "Rugged and Durable Construction",
        "Industrial Grade Reliability"
      ],
      specs: [
        { name: "Brand", value: "Stroke" },
        { name: "Quality", value: "Premium" }
      ]
    });
});

let content = fs.readFileSync('src/data.js', 'utf-8');

// Append Stroke brand if not exists
if (!content.includes('{ name: "Stroke"')) {
    content = content.replace('export const brands = [', 'export const brands = [\n  { name: "Stroke", logo: "STROKE" },');
}

// Append Stroke categories
const strokeCategories = `  {
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
  },`;

content = content.replace('export const categories = [\n', 'export const categories = [\n' + strokeCategories + '\n');

// Append Stroke products
let productsStr = '';
newProducts.forEach(p => {
    productsStr += `  ${JSON.stringify(p, null, 4)},\n`;
});

content = content.replace('export const products = [\n', 'export const products = [\n' + productsStr);

fs.writeFileSync('src/data.js', content, 'utf-8');
console.log('Successfully appended all Stroke products to data.js!');
