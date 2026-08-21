const fs = require('fs');

// Create temp module
let content = fs.readFileSync('src/data.js', 'utf8');
content = content.replace('export const brands', 'const brands');
content = content.replace('export const categories', 'const categories');
content = content.replace('export const products', 'const products');
content += '\nmodule.exports = { brands, categories, products };';
fs.writeFileSync('temp_data_module2.cjs', content);

const { brands, categories, products } = require('./temp_data_module2.cjs');

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

// 1. Add Brand
if (!brands.find(b => b.name === 'Stroke')) {
    brands.push({ name: "Stroke", logo: "STROKE" });
}

// 2. Add Categories
const strokeCategories = [
  {
    name: "Stroke Components",
    image: `/images/${files[0] || 'hero.png'}`,
    description: "Premium industrial components, plugs, sockets, and heavy-duty switchgears by Stroke.",
  },
  {
    name: "Industrial Connectors",
    image: `/images/${files[1] || 'hero.png'}`,
    description: "Heavy duty MC4 and multi-plug connectors.",
  },
  {
    name: "Control Accessories",
    image: `/images/${files[2] || 'hero.png'}`,
    description: "Push buttons, fans, and protective covers.",
  }
];

// Append categories only if not already present
if (!categories.find(c => c.name === 'Stroke Components')) {
    categories.push(...strokeCategories);
}

// 3. Add Products
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

products.push(...newProducts);

// 4. Write back
let finalContent = `export const brands = ${JSON.stringify(brands, null, 4)};\n\n`;
finalContent += `export const categories = ${JSON.stringify(categories, null, 4)};\n\n`;
finalContent += `export const products = ${JSON.stringify(products, null, 4)};\n`;

fs.writeFileSync('src/data.js', finalContent);
fs.unlinkSync('temp_data_module2.cjs');
console.log(`Successfully appended Stroke products to the END of data.js! Total products: ${products.length}`);
