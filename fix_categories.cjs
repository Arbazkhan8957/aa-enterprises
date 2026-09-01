const fs = require('fs');
const { products } = require('./src/data.js');

let data = fs.readFileSync('src/data.js', 'utf8');

products.forEach(p => {
  const n = (p.name || '').toLowerCase();
  
  if (n.includes('lc1e')) {
    p.category = 'Schneider LC1E Contactors';
  } else if (n.includes('lrd')) {
    p.category = 'Schneider LRD Relays';
  } else if (n.includes('lre')) {
    p.category = 'Schneider LRE Relays';
  } else if (n.includes('lc1d') || n.includes('lc1-d')) {
    p.category = 'Schneider LC1D Contactors';
  } else if (n.includes('ladn')) {
    p.category = 'Schneider LADN Auxiliary Blocks';
  } else if (n.includes('push button') && n.includes('schneider')) {
    p.category = 'Schneider Push Button';
  } else if (n.includes('sibass') && n.includes('contactor')) {
    p.category = 'Sibass Contactors';
  } else if (n.includes('sibass') && n.includes('indicator')) {
    p.category = 'Sibass Indicators';
  } else if (n.includes('sibass')) {
    p.category = 'Sibass Contactors'; // fallback for some sibass
  } else if (n.includes('jigo') && n.includes('warning light')) {
    p.category = 'Jigo Revolving Warning Lights';
  } else if (n.includes('jigo') && n.includes('siren')) {
    p.category = 'Jigo Motor Sirens';
  } else if (n.includes('jigo') && n.includes('tower light')) {
    p.category = 'Jigo Tower Lights';
  } else if (n.includes('jigo')) {
    p.category = 'Jigo Heavy Duty Connectors';
  } else if (n.includes('resonance')) {
    p.category = 'Resonance Cooling Fans';
  } else if (n.includes('stroke')) {
    p.category = 'Stroke Electricals';
  } else if (n.includes('frontier')) {
    p.category = 'Frontier Electricals';
  } else if (n.includes('schneider')) {
    p.category = 'Schneider LC1E Contactors'; // fallback
  } else {
    // Keep it as is or fallback
  }
});

const newData = `export const products = ${JSON.stringify(products, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());
fs.writeFileSync('src/data.js', data);
console.log('Fixed categories!');
