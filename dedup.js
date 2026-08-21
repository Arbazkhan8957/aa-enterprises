import fs from 'fs';
import { products, categories, brands } from './src/data.js';

const uniqueProductsMap = new Map();

for (const p of products) {
  const key = (p.model && p.model !== 'N/A') ? p.model : p.name;
  if (!uniqueProductsMap.has(key)) {
    uniqueProductsMap.set(key, p);
  }
}

const newProducts = Array.from(uniqueProductsMap.values());
const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Original count:', products.length, 'New count:', newProducts.length);
