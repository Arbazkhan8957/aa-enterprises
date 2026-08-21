import fs from 'fs';
import { brands, categories, products } from './src/data.js';

// Remove the category
const newCategories = categories.filter(c => c.name !== 'Sibass Push Buttons');

// Remove the products
const newProducts = products.filter(p => p.category !== 'Sibass Push Buttons');

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(newCategories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully removed Sibass Push Buttons category and products.');
