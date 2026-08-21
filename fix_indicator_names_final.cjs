const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  products.forEach(p => {
    if (p.category === 'Sibass Indicators') {
      if (p.mounting === '16mm Panel Mount') {
        const color = p.id.split('_').pop();
        const CapitalColor = color.charAt(0).toUpperCase() + color.slice(1);
        p.name = `Sibass 16MM Indicator SE-A516-7S ${CapitalColor}`;
      } else if (p.mounting === '22.5mm Panel Mount') {
        const color = p.id.split('_').pop();
        const CapitalColor = color.charAt(0).toUpperCase() + color.slice(1);
        p.name = `Sibass 22.5MM Indicator AD22-22DS ${CapitalColor}`;
      }
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Fixed Sibass Indicator names to include exact model and color at the end.');
}

run();
