const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const categoryName = 'Schneider LADN Auxiliary Blocks';

  const generateLADN = (model, noContacts, ncContacts) => {
    const id = model.toLowerCase().replace(' ', '');
    const totalContacts = noContacts + ncContacts;

    // Construct contact string
    let contactString = '';
    if (noContacts > 0 && ncContacts > 0) {
      contactString = `${noContacts} NO + ${ncContacts} NC`;
    } else if (noContacts > 0) {
      contactString = `${noContacts} NO`;
    } else if (ncContacts > 0) {
      contactString = `${ncContacts} NC`;
    }

    return {
      id: id,
      name: `Schneider ${model.replace(' ', '')} Auxiliary Block`,
      brand: 'Schneider',
      category: categoryName,
      model: model.replace(' ', ''),
      description: `The Schneider Electric TeSys D ${model} is a premium front-mounting instantaneous auxiliary contact block. Designed to effortlessly clip onto the front of TeSys D and TeSys F contactors, it provides additional ${contactString} contacts for advanced control, interlocking, and signaling logic in your automated systems. It ensures high reliability and seamless integration with Schneider's industry-standard motor control ecosystem.`,
      image: `/images/${id}.png`,
      voltage: 'Up to 690V AC/DC',
      current: '10A (Thermal Current)',
      poles: `${totalContacts} Pole`,
      mainContact: contactString,
      application: 'Control Circuit & Signaling Expansion',
      mounting: 'Front Clip-on',
      auxiliary: contactString,
      features: [
        `Model: Schneider TeSys D ${model.replace(' ', '')} Auxiliary Contact Block`,
        `Contact Configuration: ${contactString} instantaneous contacts`,
        'Mounting Style: Front-mounting clip-on design for quick, tool-free installation',
        'Compatibility: Perfectly fits TeSys D (LC1D, LC1F) contactors and TeSys Deca control relays',
        'Current Capacity: 10A conventional free air thermal current (Ith)',
        'Voltage Rating: Operational up to 690V AC, suitable for diverse control systems',
        'Durability: Up to 30 million mechanical operating cycles for extreme reliability',
        'Operation: Instantaneous contact operation without delay',
        'Connections: Standard screw clamp terminals for secure wire retention',
        'Standards: IEC 60947-5-1, UL, CSA, and CCC certified'
      ]
    };
  };

  const newItems = [
    generateLADN('LADN22', 2, 2),
    generateLADN('LADN31', 3, 1),
    generateLADN('LADN40', 4, 0)
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
  console.log('Successfully appended more Schneider LADN Auxiliary Blocks!');
}

run();
