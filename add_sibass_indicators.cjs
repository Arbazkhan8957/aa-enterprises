const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Sibass Indicators';

  // 1. Add Category if it doesn't exist
  if (!categories.find(c => c.name === categoryName)) {
    categories.push({
      name: categoryName,
      image: '/images/sibass_indicator_red.png',
      description: 'High-visibility LED indicator lights for control panels, ensuring clear status signaling with reliable AC/DC operation.'
    });
  }

  // 2. Generate Products
  const generateIndicator = (color) => {
    const id = `sibass_indicator_${color.toLowerCase()}`;
    return {
      id: id,
      name: `Sibass Indicator SE-A516-7S ${color}`,
      brand: 'Sibass',
      category: categoryName,
      model: 'SE-A516-7S',
      description: `The Sibass SE-A516-7S ${color} LED Indicator is designed for reliable and bright status signaling on industrial control panels. It operates efficiently on 12-24V AC/DC with ultra-low power consumption (≤20mA). Built strictly to IEC/EN 60947-5-1 standards, it guarantees exceptional durability, long lifespan, and highly visible illumination for machinery and automation systems.`,
      image: `/images/${id}.png`,
      voltage: '12-24V AC/DC',
      current: '≤ 20mA',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Control Panel Status Indication',
      mounting: '22mm Panel Mount',
      auxiliary: 'N/A',
      features: [
        `Model: SE-A516-7S`,
        `Color: ${color}`,
        `Light Source: High-intensity LED for clear visibility`,
        `Voltage Rating: 12-24V AC/DC versatile operation`,
        `Power Consumption: Ultra-low current draw (≤ 20mA)`,
        `Compliance: Meets IEC/EN 60947-5-1 industrial standards`,
        `Mounting: Standard 22mm diameter hole installation`,
        `Durability: Shock and vibration resistant for harsh environments`,
        `Wiring: Secure screw terminal connections`
      ]
    };
  };

  const newItems = [
    generateIndicator('Blue'),
    generateIndicator('Green'),
    generateIndicator('Red'),
    generateIndicator('White'),
    generateIndicator('Yellow')
  ];

  // 3. Append Products securely
  let modifiedProducts = [...products];
  newItems.forEach(newP => {
    const existingIdx = modifiedProducts.findIndex(p => p.id === newP.id);
    if (existingIdx > -1) {
      modifiedProducts[existingIdx] = newP;
    } else {
      modifiedProducts.push(newP);
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(modifiedProducts, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully added Sibass Indicators!');
}

run();
