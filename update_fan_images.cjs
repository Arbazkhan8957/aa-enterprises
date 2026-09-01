const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

productsArray = productsArray.map(p => {
  if (p.id === 'fan-ra12038abh1') p.image = '/images/ra12038abh1.jpg';
  if (p.id === 'fan-ra12038abhl') p.image = '/images/ra12038abhl.jpg';
  if (p.id === 'fan-ra12038asl') p.image = '/images/ra12038asl.jpg';
  if (p.id === 'fan-ra12038b2hsl') p.image = '/images/ra12038b2hsl.jpg';
  return p;
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;

fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));

console.log('Successfully updated proper image names for Resonance fans!');
