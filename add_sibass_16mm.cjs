const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Sibass Indicators';

  const generateIndicator = (color, extension) => {
    const id = `sibass_16mm_${color.toLowerCase()}`;
    return {
      id: id,
      name: `Sibass 16MM ${color} Indicator`,
      brand: 'Sibass',
      category: categoryName,
      model: '16MM Indicator',
      description: `The Sibass 16MM ${color} LED Indicator is designed for reliable and bright status signaling on industrial control panels where space is limited. It operates efficiently on 24V AC/DC with ultra-low power consumption. Built to industrial standards, it guarantees exceptional durability, long lifespan, and highly visible illumination for machinery and automation systems.`,
      image: `/images/${id}.${extension}`,
      voltage: '24V AC/DC',
      current: '≤ 20mA',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Control Panel Status Indication',
      mounting: '16mm Panel Mount',
      auxiliary: 'N/A',
      features: [
        `Model: 16MM Compact Series`,
        `Color: ${color}`,
        `Light Source: High-intensity LED for clear visibility`,
        `Voltage Rating: 24V AC/DC`,
        `Compliance: IP65 Rated for industrial protection`,
        `Mounting: 16mm diameter hole installation for compact panels`,
        `Durability: Shock and vibration resistant for harsh environments`,
        `Wiring: Secure screw terminal connections`
      ]
    };
  };

  const newItems = [
    generateIndicator('Blue', 'jpg'),
    generateIndicator('Green', 'jpg'),
    generateIndicator('Red', 'jpg'),
    generateIndicator('White', 'png'),
    generateIndicator('Yellow', 'jpg')
  ];

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
  console.log('Successfully added Sibass 16MM Indicators!');
}

run();
