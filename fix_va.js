import fs from 'fs';
import { brands, categories, products } from './src/data.js';

let newProducts = products.filter(p => !p.id.startsWith('sibass_va_22_'));

newProducts = newProducts.map(p => {
  if (p.id.startsWith('sibass_va_ind_22_')) {
    const color = p.id.split('_').pop();
    const newImage = `/images/sibass_va_22_${color}.png`;
    
    const newFeatures = p.features.map(f => {
      if (f.startsWith('Model: ')) {
        return `Model: SE-VA22.5-7S - Revolutionary 2-in-1 digital meter for simultaneous power monitoring.`;
      }
      return f;
    });

    return {
      ...p,
      image: newImage,
      model: 'SE-VA22.5-7S',
      features: newFeatures
    };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Fixed VA products.');
