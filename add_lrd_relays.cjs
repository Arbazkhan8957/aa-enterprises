const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // Add category if not exists
  const categoryName = 'Schneider LRD Relays';
  if (!categories.find(c => c.name === categoryName)) {
    categories.push({
      name: categoryName,
      image: '/images/lrd01.png',
      description: 'High-performance Schneider TeSys LRD Thermal Overload Relays for precise motor protection.'
    });
  }

  const generateRelay = (model, currentRange) => {
    return {
      id: model.toLowerCase().replace(' ', ''),
      name: `Schneider ${model.replace(' ', '')} Relay`,
      brand: 'Schneider',
      category: categoryName,
      model: model.replace(' ', ''),
      description: `The Schneider Electric TeSys ${model} is an exceptional Thermal Overload Relay designed to provide flawless protection for electric motors against overloads, phase failures, and excessively long starting times. This specific model offers a highly precise adjustable thermal setting range of ${currentRange}, ensuring your machinery operates strictly within safe thermal limits. Outfitted with manual/automatic reset selectors, a dedicated test function, and built-in NO/NC auxiliary contacts (97, 98, 95, 96), it seamlessly interfaces with your TeSys contactors. Its rugged polymer housing and integrated thermal compensation technology guarantee absolute stability and safety in demanding industrial environments.`,
      image: `/images/${model.toLowerCase().replace(' ', '')}.png`,
      voltage: '690V AC (Insulation Voltage)',
      current: currentRange,
      poles: '3P',
      mainContact: 'Direct mount to contactor',
      application: 'Motor Overload Protection',
      mounting: 'Direct on Contactor / DIN rail',
      auxiliary: '1 NO + 1 NC',
      features: [
        `Model: Schneider TeSys ${model.replace(' ', '')} Thermal Overload Relay`,
        `Thermal Protection Range: ${currentRange} precision adjustable dial`,
        'Protection Class: Class 10A tripping characteristics for motor safety',
        'Auxiliary Contacts: Built-in 1 NO (97, 98) and 1 NC (95, 96)',
        'Controls: Independent STOP (Red) and RESET (Blue) push buttons',
        'Functionality: Selectable Manual or Automatic reset modes',
        'Phase Failure: Integrated phase unbalance and phase loss sensitivity',
        'Mounting: Designed for direct plug-in mounting under TeSys D contactors',
        'Diagnostics: Front-facing TEST button for immediate relay verification',
        'Standards: IEC 60947-4-1 compliant for rigorous global safety requirements'
      ]
    };
  };

  const newRelays = [
    generateRelay('LRD 01', '0.1 - 0.16 A'),
    generateRelay('LRD 02', '0.16 - 0.25 A'),
    generateRelay('LRD 03', '0.25 - 0.4 A'),
    generateRelay('LRD 04', '0.4 - 0.63 A'),
    generateRelay('LRD 05', '0.63 - 1 A'),
  ];

  let modifiedProducts = [...products];
  newRelays.forEach(newP => {
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
  console.log('Successfully appended 5 new Schneider LRD Relays!');
}

run();
