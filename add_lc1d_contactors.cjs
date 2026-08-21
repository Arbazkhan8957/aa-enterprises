const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Schneider LC1D Contactors';

  // Ensure category exists
  if (!categories.find(c => c.name === categoryName)) {
    categories.push({
      name: categoryName,
      image: '/images/lc1d09.png',
      description: 'The TeSys D (LC1D) series contactors offer high reliability, long mechanical and electrical life, and the most compact design for motor control.'
    });
  }

  const generateContactor = (model, current, hpRange) => {
    const id = model.toLowerCase().replace(' ', '');
    return {
      id: id,
      name: `Schneider ${model.replace(' ', '')} Contactor`,
      brand: 'Schneider',
      category: categoryName,
      model: model.replace(' ', ''),
      description: `The Schneider Electric TeSys D ${model} is an industry-leading AC magnetic contactor designed for perfect integration in control systems, specific to motor control and power switching applications. Engineered for compactness, high reliability, and a long mechanical lifespan, it seamlessly handles currents up to ${current}A. It features highly conductive copper coils, advanced interlocking capability, and built-in 1 NO + 1 NC auxiliary contacts. Safe and easy to install on a standard DIN rail or panel mount.`,
      image: `/images/${id}.png`,
      voltage: '24V, 110V, 220V, 415V AC (Multiple Coil Options)',
      current: `${current}A`,
      poles: '3P',
      mainContact: '3 NO',
      application: 'Motor Control & Power Switching',
      mounting: 'DIN Rail / Panel Mount',
      auxiliary: '1 NO + 1 NC Built-in',
      features: [
        `Model: Schneider TeSys D ${model.replace(' ', '')} Contactor`,
        `Current Rating: ${current} Amperes for AC-3 heavy-duty loads`,
        `Power Capacity: Suitable for motors up to ${hpRange} at 415V`,
        'Auxiliary Contacts: Integrated 1 Normally Open (NO) and 1 Normally Closed (NC)',
        'Coil Options: Available in versatile AC and DC control circuit voltages',
        'Mounting: Standard 35mm DIN rail mounting or direct screw fixing',
        'Durability: Exceptional mechanical and electrical lifespan for rigorous operations',
        'Safety: IP20 finger-safe terminals with protective covers',
        'Compatibility: Seamless direct mounting with TeSys LRD thermal overload relays',
        'Standards: Fully compliant with IEC 60947-4-1, UL, and CSA certifications'
      ]
    };
  };

  const newItems = [
    generateContactor('LC1 D09', 9, '4 kW / 5.5 HP'),
    generateContactor('LC1 D12', 12, '5.5 kW / 7.5 HP'),
    generateContactor('LC1 D18', 18, '7.5 kW / 10 HP'),
    generateContactor('LC1 D25', 25, '11 kW / 15 HP'),
    generateContactor('LC1 D32', 32, '15 kW / 20 HP')
  ];

  let modifiedProducts = [...products];
  newItems.forEach(newP => {
    const existingIdx = modifiedProducts.findIndex(p => p.model === newP.model);
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
  console.log('Successfully appended Schneider LC1D Contactors!');
}

run();
