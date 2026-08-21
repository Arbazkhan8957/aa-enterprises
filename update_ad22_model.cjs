const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  products.forEach(p => {
    if (p.category === 'Sibass Indicators' && p.name.includes('22.5MM')) {
      p.model = 'AD22-22DS';
      p.features = p.features.map(f => f.replace('Model: 16MM Compact Series', 'Model: AD22-22DS'));
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Updated 22.5MM model to AD22-22DS');
}

run();
