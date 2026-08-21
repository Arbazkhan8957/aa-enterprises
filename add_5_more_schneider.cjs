const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  const newProducts = [
    {
      id: 'lc1e50',
      name: 'Schneider LC1E50 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E50',
      description: 'The Schneider Electric TeSys E LC1E50 is a robust 50A industrial contactor designed for demanding electrical systems. Equipped with built-in front-mounted auxiliary contacts (1 NO + 1 NC), it simplifies intricate control panel wiring. The distinctive green mechanical actuator provides immediate visual confirmation of the contactor state, ensuring safety and precision in motor control operations.',
      image: '/images/lc1e50.jpg',
      voltage: 'Up to 415V AC',
      current: '50A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Heavy Motor Starting',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider TeSys E LC1E50',
        'Current Rating: 50A maximum continuous capability',
        'Auxiliary Contacts: Built-in 1 NO (13, 14) and 1 NC (21, 22)',
        'Diagnostics: High-visibility green mechanical actuator',
        'Poles: 3-Pole main circuit configuration',
        'Application: Industrial compressors, HVAC, and heavy machinery',
        'Terminals: High-torque screw clamps for secure connections',
        'Mounting: Versatile DIN-rail or direct panel mounting',
        'Safety: Premium insulation protecting against phase-to-phase arcing',
        'Durability: High mechanical endurance for rapid switching cycles'
      ]
    },
    {
      id: 'lc1e65',
      name: 'Schneider LC1E65 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E65',
      description: 'Engineered for exceptional power handling, the Schneider Electric EasyPact TVS LC1E65 is a 65A contactor that forms the backbone of large industrial automation systems. It features a comprehensive auxiliary block (1 NO + 1 NC) integrated directly into the front face. The wide green manual actuator allows for instant operational testing, making maintenance and commissioning effortless.',
      image: '/images/lc1e65.jpg',
      voltage: 'Up to 415V AC',
      current: '65A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Industrial Automation',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E65',
        'Current Rating (AC-3): 65A heavy-duty industrial rating',
        'Auxiliary Contacts: 1 NO (13, 14) and 1 NC (21, 22)',
        'Diagnostics: Wide green mechanical actuator for manual testing',
        'Application: Large manufacturing lines and heavy pump control',
        'Terminals: Deep wire insertion ports for thick gauge cables',
        'Architecture: Modular design supporting additional contact blocks',
        'Safety: Advanced thermal dissipation under continuous high load',
        'Mounting: Secure panel mount compatible',
        'Standards: Built to strict international IEC specifications'
      ]
    },
    {
      id: 'lc1e80',
      name: 'Schneider LC1E80 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E80',
      description: 'The Schneider Electric EasyPact TVS LC1E80 delivers immense switching capability with an 80A rating, perfect for large-scale industrial motors and main incoming power feeds. It comes standard with integrated 1 NO and 1 NC auxiliary contacts. The unit is characterized by its massive frame, superior arc-quenching chambers, and a prominent green actuator for direct mechanical override.',
      image: '/images/lc1e80.jpg',
      voltage: 'Up to 415V AC',
      current: '80A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Large Scale Motors',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E80',
        'Current Rating: 80A continuous industrial load capability',
        'Auxiliary Contacts: Integrated 1 NO + 1 NC (13,14 / 21,22)',
        'Controls: Direct mechanical override via green central actuator',
        'Application: Ideal for massive industrial motors and main feeds',
        'Durability: Enhanced arc-quenching for prolonged electrical life',
        'Terminals: Heavy-duty screw terminals for large cross-section wiring',
        'Mounting: Sturdy panel mounting points',
        'Architecture: Allows for side and top-mounted auxiliary additions',
        'Safety: Extremely high impulse withstand voltage'
      ]
    },
    {
      id: 'lc1e95',
      name: 'Schneider LC1E95 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E95',
      description: 'Representing the pinnacle of the standard frame sizes, the Schneider Electric TeSys E LC1E95 is a massive 95A contactor designed for the most demanding electrical environments. Featuring integrated 1 NO and 1 NC auxiliary contacts and a highly visible green mechanical actuator, it provides unparalleled reliability and safety for critical infrastructure and heavy machinery.',
      image: '/images/lc1e95.jpg',
      voltage: 'Up to 415V AC',
      current: '95A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Critical Infrastructure',
      mounting: 'Panel Mount',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider TeSys E LC1E95',
        'Current Rating: 95A maximum switching capacity',
        'Auxiliary Contacts: Integrated 1 NO (13, 14) and 1 NC (21, 22)',
        'Diagnostics: Central green mechanical actuator',
        'Application: Critical infrastructure, large cranes, and heavy crushers',
        'Terminals: Oversized connection ports for heavy industrial cabling',
        'Mounting: Heavy-duty panel mounting chassis',
        'Durability: Engineered for severe industrial environments',
        'Safety: Exceptional phase insulation and heat resistance',
        'Standards: IEC compliant for heavy industrial applications'
      ]
    },
    {
      id: 'lc1e120',
      name: 'Schneider LC1E120 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E120',
      description: 'The Schneider Electric TeSys LC1E120 is a gigantic 120A block contactor engineered specifically for extreme high-power applications. Stripped down to its core heavy-duty components, it features a distinct green indicator window for state verification. With its massive L1-L3 / T1-T3 power terminals and robust chassis, this contactor is the definitive choice for monumental industrial power distribution.',
      image: '/images/lc1e120.jpg',
      voltage: 'Up to 690V AC',
      current: '120A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Monumental Power Distribution',
      mounting: 'Panel Mount',
      auxiliary: 'Side Mount Capable',
      features: [
        'Model: Schneider TeSys LC1E120',
        'Current Rating: Massive 120A continuous power handling',
        'Voltage: High-voltage capable (up to 690V AC)',
        'Diagnostics: Central green state-indicator window',
        'Architecture: Large block design with side-mount auxiliary support',
        'Application: Main power feeds, gigafactory distribution, massive pumps',
        'Terminals: Hex-bolt / large lug compatible power terminals',
        'Durability: Unmatched mechanical endurance for its size class',
        'Mounting: Solid industrial panel mounting',
        'Safety: Supreme arc-suppression technology for high-current breaking'
      ]
    }
  ];

  let modifiedProducts = [...products];
  newProducts.forEach(newP => {
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
  console.log('Successfully appended 5 new high-power Schneider contactors!');
}

run();
