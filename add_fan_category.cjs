const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

let categoriesArrayStr = data.match(/export const categories = \[\s*([\s\S]*?)\s*\];/)[1];
let categoriesArray = eval('[' + categoriesArrayStr + ']');

// Check if it already exists
if (!categoriesArray.find(c => c.name === 'Resonance Cooling Fans')) {
  categoriesArray.push({
    name: "Resonance Cooling Fans",
    image: "/images/ra12038abh1.jpg",
    description: "High-performance AC cooling fans designed for industrial machinery, electrical panels, and heavy-duty equipment cooling. Built with durable ball or sleeve bearings for maximum reliability and continuous operation."
  });
}

const newData = `export const categories = ${JSON.stringify(categoriesArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const categories = \[\s*([\s\S]*?)\s*\];/, newData.trim()));

console.log('Added Resonance Cooling Fans category!');
