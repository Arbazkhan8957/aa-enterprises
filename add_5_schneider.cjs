const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // 1. Define new products for LC1E3201, LC1E3210, LC1E3801, LC1E3810, LC1E40
  const newProducts = [
    {
      id: 'lc1e3201',
      name: 'Schneider LC1E3201 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E3201',
      description: 'The Schneider Electric EasyPact TVS LC1E3201 is a high-performance 32A AC-3 rated 3-pole industrial contactor. Engineered for heavy electrical loads up to 15kW (400V), it ensures flawless motor control. This unit features integrated white START/ON and red STOP/OFF mechanical push buttons for immediate manual actuation and testing. With its 1 NC (Normally Closed) auxiliary contact, it guarantees maximum integration flexibility.',
      image: '/images/lc1e3201.jpg',
      voltage: '400V AC',
      current: '32A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Heavy Motor Starting',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E3201',
        'Current/Power Rating (AC-3): 32A / 15kW at 400V',
        'Poles: 3-Pole main configuration',
        'Auxiliary Contacts: 1 NC (Normally Closed) logic contact',
        'Controls: Built-in front START/ON and STOP/OFF push buttons',
        'Application: Designed for demanding industrial environments and HVAC',
        'Durability: Superior arc-suppression for longer electrical lifespan',
        'Mounting: Standard DIN-rail mount compatible',
        'Terminals: Clearly marked screw clamp terminals for L1, L2, L3',
        'Standards: Compliant with IEC rigorous testing'
      ]
    },
    {
      id: 'lc1e3210',
      name: 'Schneider LC1E3210 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E3210',
      description: 'Built for precision and resilience, the Schneider Electric EasyPact TVS LC1E3210 handles continuous 32A AC-3 loads up to 15kW at 415V. This variant boasts highly visible green mechanical actuators and a dedicated TEST push button. It comes standard with 1 NO (Normally Open) auxiliary contact and supports complex interlocking via its comprehensive terminal layout. Perfect for automated machinery requiring rapid switching.',
      image: '/images/lc1e3210.jpg',
      voltage: '415V AC',
      current: '32A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Precision Motor Control',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO',
      features: [
        'Model: Schneider EasyPact TVS LC1E3210',
        'Current Rating (AC-3): 32A high-capacity switching',
        'Power Rating: 15kW at 415V AC',
        'Auxiliary Contacts: 1 NO (Normally Open) integrated',
        'Diagnostics: Green TEST actuator button for immediate troubleshooting',
        'Architecture: Supports additional front-mounted contact blocks',
        'Application: Ideal for industrial pumps, fans, and conveyor systems',
        'Safety: Excellent thermal dissipation under continuous load',
        'Terminals: Anti-loosening screw clamps (IP20 finger-safe)',
        'Standards: Built to strict international manufacturing standards'
      ]
    },
    {
      id: 'lc1e3801',
      name: 'Schneider LC1E3801 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E3801',
      description: 'The Schneider Electric EasyPact TVS LC1E3801 provides exceptional switching power for up to 38A (AC-3) and 18.5kW at 400V. Compliant with IEC 60947-4-1, this robust contactor incorporates a crisp white START button alongside a red STOP/RESET button for localized override and diagnostics. Designed with 1 NC auxiliary contact, it is an indispensable component for secure industrial electrical panels.',
      image: '/images/lc1e3801.jpg',
      voltage: '400V AC',
      current: '38A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Industrial Machinery',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E3801',
        'Current Rating (AC-3): 38A maximum continuous current',
        'Power Rating: Massive 18.5kW handling at 400V',
        'Auxiliary Contacts: 1 NC (Normally Closed)',
        'Controls: Integrated START (White) and STOP/RESET (Red) buttons',
        'Standards: IEC 60947-4-1 certified for safety and reliability',
        'Application: Elevators, heavy compressors, and robotic assembly lines',
        'Mounting: Versatile installation on DIN rail or direct panel mounting',
        'Durability: High short-circuit resilience',
        'Terminals: Premium screw connectors preventing voltage drop'
      ]
    },
    {
      id: 'lc1e3810',
      name: 'Schneider LC1E3810 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E3810',
      description: 'Part of the advanced Easy TeSys Control lineup, the Schneider Electric LC1E3810 offers streamlined and ultra-reliable 38A AC-3 motor switching. Powered by a highly efficient 220V 50Hz coil (M5), this unit delivers rapid response times and minimal heat generation. The contactor integrates 1 NO (Normally Open) auxiliary contact and features an elegant, modern gray housing optimized for high-density panel configurations.',
      image: '/images/lc1e3810.jpg',
      voltage: '220V 50Hz (M5)',
      current: '38A',
      poles: '3P',
      mainContact: '3NO',
      application: 'High-Density Control Panels',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO',
      features: [
        'Model: Schneider Easy TeSys Control LC1E3810',
        'Current Rating (AC-3): 38A heavy-duty industrial rating',
        'Coil Voltage: 220V 50Hz (Code M5) for control logic',
        'Auxiliary Contacts: 1 NO (Normally Open)',
        'Design: Next-generation Easy TeSys Control sleek architecture',
        'Diagnostics: Visible mechanical central actuation indicator',
        'Terminals: Deep, secure wire insertion ports with clear numbering',
        'Application: Modern automation systems requiring quiet, cool operation',
        'Mounting: Quick-snap DIN rail mounting mechanism',
        'Durability: Long mechanical life cycle with low maintenance'
      ]
    },
    {
      id: 'lc1e40',
      name: 'Schneider LC1E40 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E40',
      description: 'The Schneider Electric EasyPact TVS LC1E40 is an industrial juggernaut, offering a 40A AC-3 rating designed for extreme electrical workloads. Characterized by its expansive front-mounted auxiliary blocks featuring both NO (13, 14) and NC (21, 22) contacts, it supports intricate control logic right out of the box. A prominent green central manual actuator allows for instant operational verification during panel testing.',
      image: '/images/lc1e40.jpg',
      voltage: 'Up to 415V AC',
      current: '40A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Extreme Workloads / Automation',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E40',
        'Current Rating (AC-3): 40A maximum switching capability',
        'Auxiliary Contacts: Front-mounted array (NO and NC combinations)',
        'Diagnostics: Large central green mechanical actuator block',
        'Poles: 3-Pole main circuit configuration',
        'Application: Main incoming feeds, large industrial motors, crushers',
        'Terminals: Heavy-gauge wire compatible screw clamps',
        'Mounting: Highly secure panel mount and DIN rail support',
        'Safety: Advanced electrical insulation preventing cross-phase arcing',
        'Durability: Built specifically for harsh factory floor environments'
      ]
    }
  ];

  // 2. Append them to products array (or update if they exist)
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
  console.log('Successfully appended 5 new Schneider contactors!');
}

run();
