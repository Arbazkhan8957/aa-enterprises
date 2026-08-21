const fs = require('fs');

// We will use require to load the JS file
const data = require('./src/data.js');

const brands = data.brands;
const categories = data.categories;
// Take only the first 152 products (the original ones before the append)
const originalProducts = data.products.slice(0, 152);

const fileContent = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                  'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                  'export const products = ' + JSON.stringify(originalProducts, null, 2) + ';\n';

fs.writeFileSync('./src/data.js', fileContent);
console.log('Restored original 926-line file structure with 152 products.');
