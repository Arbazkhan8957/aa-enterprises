const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const newProduct = {
    id: 'lc1e160',
    name: 'Schneider LC1E160 Contactor',
    brand: 'Schneider',
    category: 'Schneider LC1E Contactors',
    model: 'LC1E160',
    description: 'The Schneider Electric EasyPact TVS LC1E160 is a colossal 160A block contactor designed for monumental industrial power distribution and main incoming feeds. Featuring a rugged, stripped-down chassis, it is engineered for maximum thermal dissipation and arc-suppression. It includes a green state-indicator window for instant visual confirmation and supports side-mounted auxiliary contact blocks for expanded control logic.',
    image: '/images/lc1e160.jpg',
    voltage: 'Up to 690V AC',
    current: '160A',
    poles: '3P',
    mainContact: '3NO',
    application: 'Main Power Distribution',
    mounting: 'Panel Mount',
    auxiliary: 'Side Mount Capable',
    features: [
      'Model: Schneider EasyPact TVS LC1E160',
      'Current Rating: Colossal 160A continuous power handling',
      'Voltage: Extreme high-voltage capable (up to 690V AC)',
      'Diagnostics: Central green state-indicator window for quick verification',
      'Architecture: Gigantic block design with side-mount auxiliary support',
      'Application: Main incoming feeds, large industrial plants, heavy crushers',
      'Terminals: Hex-bolt / large lug compatible heavy-duty power terminals',
      'Durability: Unmatched mechanical endurance and robust chassis',
      'Mounting: Solid industrial panel mounting mechanism',
      'Safety: Supreme arc-suppression technology for high-current breaking'
    ]
  };

  let modifiedProducts = [...products];
  const existingIdx = modifiedProducts.findIndex(p => p.model === newProduct.model);
  if (existingIdx > -1) {
    modifiedProducts[existingIdx] = newProduct;
  } else {
    modifiedProducts.push(newProduct);
  }

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(modifiedProducts, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully appended the final Schneider LC1E160 contactor!');
}

run();
