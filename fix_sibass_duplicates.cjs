const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // 1. Fix Categories
  // Remove any existing 'Sibass Contactors' or 'Sibass AC Contactors' or 'Sibass NC Contactors'
  // and replace with exactly one 'Sibass Contactors' category.
  const sibassCategory = {
    name: 'Sibass Contactors',
    image: '/images/sibass0901.jpg',
    description: 'Heavy duty motor control, Advanced interlocking, Copper coils, DIN rail mountable'
  };
  
  categories = categories.filter(c => !c.name.includes('Sibass'));
  categories.push(sibassCategory);

  // 2. Fix Products
  // Remove the OLD format duplicates
  const oldNamesToRemove = [
    'Sibass NC Contactor 0901',
    'Sibass NC Contactor 1201',
    'Sibass NC Contactor 1801',
    'Sibass NC Contactor 2501',
    'Sibass NC Contactor 3201'
  ];

  products = products.filter(p => !oldNamesToRemove.includes(p.name));

  // Change category of all remaining Sibass products to 'Sibass Contactors'
  products.forEach(p => {
    if (p.brand === 'Sibass') {
      p.category = 'Sibass Contactors';
      
      // Make sure the image of the newly added ones is exactly what we just copied (.jpg)
      // They should already be set to /images/sibass0901.jpg etc.
      // But let's enforce it for the ones we just added:
      if (['0901', '1201', '1801', '2501', '3201'].includes(p.model) && p.name.includes('NC Contactor')) {
          p.image = `/images/sibass${p.model}.jpg`;
      }
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully cleaned up Sibass Contactors!');
}

run();
