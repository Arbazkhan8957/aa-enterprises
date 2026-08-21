const fs = require('fs');

let content = fs.readFileSync('src/data.js', 'utf8');
content = content.replace('export const brands', 'const brands');
content = content.replace('export const categories', 'const categories');
content = content.replace('export const products', 'const products');
content += '\nmodule.exports = { brands, categories, products };';
fs.writeFileSync('temp_data_module3.cjs', content);

const { brands, categories, products } = require('./temp_data_module3.cjs');

// Read the new images from public/images
const files = fs.readdirSync('public/images').filter(f => f.startsWith('media_'));

if (files.length === 0) {
    console.log("No media files found.");
    process.exit(1);
}

// Replace the first 'files.length' product images with the new images
for (let i = 0; i < Math.min(files.length, products.length); i++) {
    products[i].image = `/images/${files[i]}`;
}

// Write back
let finalContent = `export const brands = ${JSON.stringify(brands, null, 4)};\n\n`;
finalContent += `export const categories = ${JSON.stringify(categories, null, 4)};\n\n`;
finalContent += `export const products = ${JSON.stringify(products, null, 4)};\n`;

fs.writeFileSync('src/data.js', finalContent);
fs.unlinkSync('temp_data_module3.cjs');

console.log(`Successfully applied ${files.length} user images to the first ${files.length} products!`);
