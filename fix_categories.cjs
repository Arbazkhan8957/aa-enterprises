const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // Fix the categories array
  categories = categories.map(cat => {
    if (typeof cat === 'string') {
      if (cat === 'Schneider LRE Relays') {
        return {
          name: 'Schneider LRE Relays',
          image: '/images/lre01.png',
          description: 'High-performance Schneider EasyTeSys Protect LRE Thermal Overload Relays for essential motor protection.'
        };
      } else {
        return { name: cat, image: '', description: '' };
      }
    }
    return cat;
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Fixed categories array!');
}

run();
