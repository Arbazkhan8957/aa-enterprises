import fs from 'fs';
import { brands, categories, products } from './src/data.js';

// Define categories to remove
const categoriesToRemove = ['Jigo Limit Switches'];

// Remove the categories
const newCategories = categories.filter(c => !categoriesToRemove.includes(c.name));

// Remove the products belonging to those categories
const newProducts = products.filter(p => !categoriesToRemove.includes(p.category));

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(newCategories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully removed the requested categories and products.');
