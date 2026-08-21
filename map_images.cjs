const fs = require('fs');
const path = require('path');

const imgDir = 'public/images';
const files = fs.readdirSync(imgDir).filter(f => f.startsWith('media_'));

if (files.length === 0) {
  console.log("No media files found.");
  process.exit(1);
}

let productsStr = '';

files.forEach((file, index) => {
    productsStr += `
  {
    id: "user_product_${index}",
    name: "Industrial Component ${index + 1}",
    brand: "Stroke",
    category: "Stroke Components",
    model: "Model-${index + 1000}",
    description: "High quality industrial component provided by user.",
    image: "/images/${file}",
    features: ["Durable", "Reliable", "Industrial Grade"],
    specs: [{name: "Type", value: "Component"}]
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
    image: "/images/${files[0]}",
    description: "Premium industrial components.",
  }
];

export const products = [
${productsStr}
];
`;

fs.writeFileSync('src/data.js', newContent);
console.log('Successfully updated data.js with actual images');
