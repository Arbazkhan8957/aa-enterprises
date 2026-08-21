const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // Fix Category
  const catIdx = categories.findIndex(c => c.name === 'Sibass AC Contactors');
  if (catIdx > -1) {
    categories[catIdx].name = 'Sibass NC Contactors';
  }

  // Fix Products
  products.forEach(p => {
    if (p.category === 'Sibass AC Contactors' || (p.brand === 'Sibass' && p.name.includes('AC Contactor'))) {
      p.category = 'Sibass NC Contactors';
      p.name = p.name.replace('AC Contactor', 'NC Contactor');
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully renamed Sibass AC to Sibass NC Contactors!');
}

run();
