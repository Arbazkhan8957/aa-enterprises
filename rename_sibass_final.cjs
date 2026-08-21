const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // Fix Products name format
  products.forEach(p => {
    if (p.brand === 'Sibass' && p.category === 'Sibass Contactors') {
      if (p.name === 'Sibass 0901 NC Contactor') p.name = 'Sibass NC Contactor 0901';
      else if (p.name === 'Sibass 1201 NC Contactor') p.name = 'Sibass NC Contactor 1201';
      else if (p.name === 'Sibass 1801 NC Contactor') p.name = 'Sibass NC Contactor 1801';
      else if (p.name === 'Sibass 2501 NC Contactor') p.name = 'Sibass NC Contactor 2501';
      else if (p.name === 'Sibass 3201 NC Contactor') p.name = 'Sibass NC Contactor 3201';
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully renamed Sibass Contactors to format: Sibass NC Contactor 0901');
}

run();
