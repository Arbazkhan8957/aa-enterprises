const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

productsArray = productsArray.map(p => {
  if (p.category === 'Resonance Cooling Fan') {
    p.category = 'Resonance Cooling Fans';
  }
  return p;
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Category name updated successfully!');
