const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
const { categories, products } = require('./src/data.js');

categories.forEach(c => {
  if (!c.image) {
    const prodWithImg = products.find(p => p.category === c.name && p.image);
    c.image = prodWithImg ? prodWithImg.image : '/images/hero.png';
  }
  if (!c.description) {
    c.description = `${c.name} solutions, Industrial grade reliability, Certified performance, Ready stock availability`;
  }
});

const catsStr = 'export const categories = ' + JSON.stringify(categories, null, 2) + ';';
data = data.replace(/export const categories = \[\s*([\s\S]*?)\s*\];/, catsStr);
fs.writeFileSync('src/data.js', data);
console.log('Categories updated!');
