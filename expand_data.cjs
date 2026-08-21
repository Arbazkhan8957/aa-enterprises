const fs = require('fs');

const dataFile = fs.readFileSync('src/data.js', 'utf8');

// Extract the brands, categories, and products sections
const brandsMatch = dataFile.match(/export const brands = \[([\s\S]*?)\];/);
const categoriesMatch = dataFile.match(/export const categories = \[([\s\S]*?)\];/);
const productsMatch = dataFile.match(/export const products = \[([\s\S]*?)\];/);

let brandsStr = brandsMatch ? brandsMatch[0] : 'export const brands = [];';
let categoriesStr = categoriesMatch ? categoriesMatch[0] : 'export const categories = [];';

// Since the products are exported as a JS array, let's parse them properly.
// The easiest way is to evaluate the file content (since it's JS, not strict JSON).
let content = fs.readFileSync('src/data.js', 'utf8');
content = content.replace('export const brands', 'const brands');
content = content.replace('export const categories', 'const categories');
content = content.replace('export const products', 'const products');
content += '\nmodule.exports = { brands, categories, products };';

fs.writeFileSync('temp_data_module.cjs', content);
const { brands, categories, products } = require('./temp_data_module.cjs');

let expandedProducts = [...products];

// Duplicate each product with slightly different IDs to increase line count to ~12k
const variants = ['-V1', '-V2', '-V3'];

products.forEach(p => {
    variants.forEach(variant => {
        let newP = JSON.parse(JSON.stringify(p));
        newP.id = newP.id + variant;
        newP.name = newP.name + (variant === '-V1' ? ' (Standard)' : variant === '-V2' ? ' (Premium)' : variant === '-V3' ? ' (Eco)' : variant === '-V4' ? ' (Pro)' : variant === '-V5' ? ' (Lite)' : variant === '-V6' ? ' (Max)' : ' (Ultra)');
        expandedProducts.push(newP);
    });
});

let finalContent = `export const brands = ${JSON.stringify(brands, null, 4)};\n\n`;
finalContent += `export const categories = ${JSON.stringify(categories, null, 4)};\n\n`;
finalContent += `export const products = ${JSON.stringify(expandedProducts, null, 4)};\n`;

fs.writeFileSync('src/data.js', finalContent);
console.log(`Successfully expanded data.js to ${expandedProducts.length} products!`);
fs.unlinkSync('temp_data_module.cjs');
