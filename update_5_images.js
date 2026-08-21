import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newProducts = products.map(p => {
  if (p.id === 'sibass_led_16_white') {
    return { ...p, image: '/images/sibass_led_16_white.png' };
  }
  if (p.id === 'sibass_buzzer_16') {
    return { ...p, image: '/images/sibass_buzzer_16.png' };
  }
  if (p.id === 'sibass_buzzer_22') {
    return { ...p, image: '/images/sibass_buzzer_22.png' };
  }
  if (p.id === 'sibass_volt_ind_22_red') {
    return { ...p, image: '/images/sibass_volt_ind_22_red.png' };
  }
  if (p.id === 'sibass_volt_ind_22_green') {
    return { ...p, image: '/images/sibass_volt_ind_22_green.png' };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated 5 new image pointers.');
