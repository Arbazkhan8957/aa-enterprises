import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newProducts = products.map(p => {
  if (p.id === 'sibass_led_white') {
    return { ...p, image: '/images/sibass_led_white.png' };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated White LED image.');
