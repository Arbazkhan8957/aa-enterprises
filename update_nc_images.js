import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newProducts = products.map(p => {
  if (p.id === 'sibass_se1d0901') {
    return { ...p, image: '/images/sibass_nc_0901.jpg' };
  }
  if (p.id === 'sibass_se1d1201') {
    return { ...p, image: '/images/sibass_nc_1201.jpg' };
  }
  if (p.id === 'sibass_se1d1801') {
    return { ...p, image: '/images/sibass_nc_1801.jpg' };
  }
  if (p.id === 'sibass_se1d2501') {
    return { ...p, image: '/images/sibass_nc_2501.jpg' };
  }
  if (p.id === 'sibass_se1d3201') {
    return { ...p, image: '/images/sibass_nc_3201.jpg' };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated NC Contactors images.');
