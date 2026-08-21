const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Sibass AC Contactors';

  const generateContactor = (model, current, hpRange) => {
    const id = 'sibass' + model;
    return {
      id: id,
      name: `Sibass ${model} AC Contactor`,
      brand: 'Sibass',
      category: categoryName,
      model: model,
      description: `The Sibass ${model} is a high-performance, robust 3-pole AC magnetic contactor engineered for reliable motor control and heavy-duty power switching operations. It boasts a solid AC-3 rating, ensuring seamless handling of inductive loads up to ${current}A. Built with precision for industrial environments, it features highly conductive silver alloy contacts, excellent arc extinguishing mechanisms, and long-lasting mechanical durability. Ideal for seamless integration into motor starters, control panels, and automation systems.`,
      image: `/images/${id}.jpg`,
      voltage: '230V / 240V AC (Standard Coil) - Multiple options available',
      current: `${current}A`,
      poles: '3P',
      mainContact: '3 NC (Normally Closed Configuration)',
      application: 'Motor Control & Industrial Power Switching',
      mounting: '35mm DIN Rail / Panel Mount',
      auxiliary: 'Built-in Auxiliary Contacts',
      features: [
        `Model: Sibass ${model} NC Contactor`,
        `Current Rating: ${current} Amperes for AC-3 heavy-duty loads`,
        `Power Capacity: Suitable for motors up to ${hpRange} at 415V`,
        'Contact Configuration: 3-Pole Normally Closed (NC) Main Contacts',
        'Coil Voltage: Reliable 230V/240V AC 50/60Hz control circuit',
        'Mounting: Universal 35mm DIN rail mounting and screw fixing options',
        'Durability: Superior mechanical and electrical lifespan for rigorous operations',
        'Design: Compact, heat-resistant enclosure with arc extinguishing capabilities',
        'Terminals: Heavy-duty screw clamp terminals for secure connections',
        'Standards: Compliant with IEC/EN 60947 standards for industrial control equipment'
      ]
    };
  };

  const newItems = [
    generateContactor('0901', 9, '4 kW / 5.5 HP'),
    generateContactor('1201', 12, '5.5 kW / 7.5 HP'),
    generateContactor('1801', 18, '7.5 kW / 10 HP'),
    generateContactor('2501', 25, '11 kW / 15 HP'),
    generateContactor('3201', 32, '15 kW / 20 HP')
  ];

  let modifiedProducts = [...products];
  newItems.forEach(newP => {
    const existingIdx = modifiedProducts.findIndex(p => p.model === newP.model && p.brand === newP.brand);
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
  console.log('Successfully appended Sibass Contactors!');
}

run();
