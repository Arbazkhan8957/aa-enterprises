const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  categories = [
    {
      name: 'Schneider LC1E Contactors',
      image: '/images/lc1e_family.jpg',
      description: 'Reliable switching for motors, High thermal resistance, IEC Certified, Robust industrial design'
    },
    {
      name: 'Sibass AC Contactors',
      image: '/images/sibass_placeholder.jpg',
      description: 'Heavy duty motor control, Advanced interlocking, Copper coils, DIN rail mountable'
    }
  ];

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Categories fixed!');
}

run();
