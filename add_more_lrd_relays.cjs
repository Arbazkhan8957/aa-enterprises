const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Schneider LRD Relays';

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
    generateRelay('LRD 06', '1 - 1.6 A'),
    generateRelay('LRD 07', '1.6 - 2.5 A'),
    generateRelay('LRD 08', '2.5 - 4 A'),
    generateRelay('LRD 10', '4 - 6 A'),
    generateRelay('LRD 12', '5.5 - 8 A'),
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
