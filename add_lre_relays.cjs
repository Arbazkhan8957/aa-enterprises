const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Schneider LRE Relays';
  
  if (!categories.includes(categoryName)) {
    categories.push(categoryName);
  }

  const generateRelay = (model, currentRange) => {
    return {
      id: model.toLowerCase().replace(' ', ''),
      name: `Schneider ${model.replace(' ', '')} Relay`,
      brand: 'Schneider',
      category: categoryName,
      model: model.replace(' ', ''),
      description: `The Schneider Electric EasyTeSys Protect ${model} is a high-performance, cost-effective Thermal Overload Relay designed for essential motor protection against overloads and phase failures. This model provides an adjustable thermal setting range of ${currentRange}, easily configured via the secure front dial. Equipped with a transparent protective cover, integrated STOP (red) and RESET (white) push buttons, and a TEST slide switch, it offers superior manual control and diagnostics. Featuring 1 NO + 1 NC auxiliary contacts (97, 98, 95, 96), this relay directly interfaces with EasyTeSys contactors to provide reliable, compact protection in straightforward industrial applications.`,
      image: `/images/${model.toLowerCase().replace(' ', '')}.png`,
      voltage: '690V AC (Insulation Voltage)',
      current: currentRange,
      poles: '3P',
      mainContact: 'Direct mount to contactor',
      application: 'Motor Overload Protection',
      mounting: 'Direct on Contactor',
      auxiliary: '1 NO + 1 NC',
      features: [
        `Model: Schneider EasyTeSys Protect ${model.replace(' ', '')} Thermal Overload Relay`,
        `Thermal Protection Range: ${currentRange} precision adjustable dial`,
        'Protection Class: Class 10A tripping characteristics for motor safety',
        'Auxiliary Contacts: Built-in 1 NO (97, 98) and 1 NC (95, 96)',
        'Controls: Independent STOP (Red) and RESET (White) push buttons',
        'Functionality: Selectable Manual (H) or Automatic (A) reset modes',
        'Diagnostics: Front-facing TEST slide switch for immediate relay verification',
        'Security: Transparent sealable cover to prevent unauthorized dial adjustments',
        'Mounting: Designed for direct plug-in mounting under EasyTeSys contactors',
        'Standards: IEC 60947-4-1 compliant for robust international safety standards'
      ]
    };
  };

  const newRelays = [
    generateRelay('LRE 01', '0.1 - 0.16 A'),
    generateRelay('LRE 02', '0.16 - 0.25 A'),
    generateRelay('LRE 03', '0.25 - 0.4 A'),
    generateRelay('LRE 04', '0.4 - 0.63 A'),
    generateRelay('LRE 05', '0.63 - 1 A'),
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
  console.log('Successfully appended 5 new Schneider LRE Relays!');
}

run();
