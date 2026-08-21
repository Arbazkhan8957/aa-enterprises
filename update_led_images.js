import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newProducts = products.map(p => {
  if (p.id === 'sibass_led_red') {
    return { ...p, image: '/images/sibass_led_red.jpg' };
  }
  if (p.id === 'sibass_led_green') {
    return { ...p, image: '/images/sibass_led_green.jpg' };
  }
  if (p.id === 'sibass_led_yellow') {
    return { ...p, image: '/images/sibass_led_yellow.jpg' };
  }
  if (p.id === 'sibass_led_blue') {
    return { ...p, image: '/images/sibass_led_blue.jpg' };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated LED images.');
