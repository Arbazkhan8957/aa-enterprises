const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.backup.js');
  let { brands, categories, products } = dataModule;

  // The specific models we want to keep
  const keepSchneiderModels = [
    'LC1E0601', 'LC1E0610', 'LC1E0901', 'LC1E0910', 'LC1E1201',
    'LC1E1210', 'LC1E1801', 'LC1E1810', 'LC1E2501', 'LC1E2510'
  ];

  const keepSibassModels = [
    'NC 0901', 'NC 1201', 'NC 1801', 'NC 2501', 'NC 3201',
    'NO 0910', 'NO 1210', 'NO 1810', 'NO 2510', 'NO 3210',
    'SE1D4011', 'SE1D5011', 'SE1D6511', 'SE1D8011', 'SE1D9511'
  ];

  // Filter products
  const filteredProducts = products.filter(p => {
    if (p.category === 'Schneider LC1E Contactors' && keepSchneiderModels.includes(p.model)) {
      return true;
    }
    if (p.category === 'Sibass AC Contactors' && keepSibassModels.includes(p.model)) {
      return true;
    }
    return false;
  });

  // Filter categories
  const filteredCategories = categories.filter(c => 
    c.name === 'Schneider LC1E Contactors' || c.name === 'Sibass AC Contactors'
  );

  // We should keep brands related to these products
  const filteredBrands = brands.filter(b => 
    b.name === 'Schneider' || b.name === 'Sibass'
  );

  const output = 'export const brands = ' + JSON.stringify(filteredBrands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(filteredCategories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(filteredProducts, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log(`Kept ${filteredProducts.length} products. Database trimmed.`);
}

run();
