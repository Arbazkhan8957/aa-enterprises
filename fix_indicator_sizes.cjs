const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // We have two sets of Sibass indicators:
  // 1. The SE-A516-7S ones (ids: sibass_indicator_blue, etc.). These are actually 16mm.
  // 2. The newer ones (ids: sibass_16mm_blue, etc.). These are actually 22.5mm.

  products.forEach(p => {
    if (p.category === 'Sibass Indicators') {
      
      // Fix the SE-A516-7S ones (tall white) -> They are 16MM
      if (p.id.startsWith('sibass_indicator_')) {
        const color = p.id.split('_').pop();
        const CapitalColor = color.charAt(0).toUpperCase() + color.slice(1);
        p.name = `Sibass 16MM ${CapitalColor} Indicator`;
        p.mounting = '16mm Panel Mount';
        p.description = p.description.replace('22mm Panel Mount', '16mm Panel Mount').replace('22mm diameter hole', '16mm diameter hole');
        
        // Update features array if necessary
        p.features = p.features.map(f => f.replace('22mm diameter hole', '16mm diameter hole'));
      }
      
      // Fix the short black ones -> They are 22.5MM
      if (p.id.startsWith('sibass_16mm_')) {
        const color = p.id.split('_').pop();
        const CapitalColor = color.charAt(0).toUpperCase() + color.slice(1);
        
        p.id = p.id.replace('16mm', '22mm'); // Update ID
        p.name = `Sibass 22.5MM ${CapitalColor} Indicator`;
        p.model = '22.5MM Indicator';
        p.mounting = '22.5mm Panel Mount';
        p.description = p.description.replace('16MM', '22.5MM').replace('16mm', '22.5mm');
        
        // Ensure image path is updated to match the new ID if we want, but the actual files on disk are named 'sibass_16mm_blue.jpg'. 
        // We should rename the files on disk and update the path here.
        p.image = p.image.replace('16mm', '22mm');
        
        // Update features array
        p.features = p.features.map(f => f.replace('16MM', '22.5MM').replace('16mm', '22.5mm'));
      }
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully swapped the 16MM and 22.5MM naming!');
}

run();
