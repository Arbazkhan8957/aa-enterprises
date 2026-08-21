const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  products = products.map(p => {
    if (p.category === 'Schneider LC1E Contactors') {
      let num = p.model.replace('LC1E', '').replace('*', '');
      if (num) {
         p.name = 'Schneider LC1E' + num + ' Contactor';
      }
    }
    return p;
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\nexport const categories = ' + JSON.stringify(categories, null, 2) + ';\n\nexport const products = ' + JSON.stringify(products, null, 2) + ';\n';
  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Fixed names for all LC1E contactors');
}

run();
