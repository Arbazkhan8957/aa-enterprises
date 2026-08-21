const fs = require('fs');

async function run() {
  // Use dynamic import for the ES module data.js
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;
  
  // Clone to avoid readonly issues
  categories = [...categories];
  products = [...products];

  // 1. Ensure the new category exists
  if (!categories.find(c => c.name === 'Schneider LC1E Contactors')) {
    categories.push({ name: 'Schneider LC1E Contactors' });
  }

  // 2. Remove old 'LC1E EASY TESYS CONTACTORS' category if we want to replace it
  const filteredCategories = categories.filter(c => c.name !== 'LC1E EASY TESYS CONTACTORS');

  // 3. Define updates for ALL existing 5 contactors to change their name and category
  const updates = {
    'LC1E0601': { name: 'Schneider LC1E0601 Contactor', category: 'Schneider LC1E Contactors' },
    'LC1E0610': { name: 'Schneider LC1E0610 Contactor', category: 'Schneider LC1E Contactors' },
    'LC1E0901': { name: 'Schneider LC1E0901 Contactor', category: 'Schneider LC1E Contactors' },
    'LC1E0910': { name: 'Schneider LC1E0910 Contactor', category: 'Schneider LC1E Contactors' },
    'LC1E1201': { name: 'Schneider LC1E1201 Contactor', category: 'Schneider LC1E Contactors' },
  };

  // 4. Update existing products
  let modifiedProducts = products.map(p => {
    let updated = { ...p };
    if (updates[p.model]) {
      updated = { ...updated, ...updates[p.model] };
    }
    // if they had the old category, update it
    if (updated.category === 'LC1E EASY TESYS CONTACTORS' || updated.category === 'Schneider LC1E Contactors') {
       updated.category = 'Schneider LC1E Contactors';
    }
    return updated;
  });

  // 5. Create new products for LC1E1210, LC1E1801, LC1E1810, LC1E2501, LC1E2510
  const newProducts = [
    {
      id: 'lc1e1210',
      name: 'Schneider LC1E1210 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E1210',
      description: 'The Schneider Electric EasyPact TVS LC1E1210 is a dependable 12A AC-3 rated 3-pole industrial contactor. Built for precise electrical control and automation, it operates with a 220V 50/60Hz coil. Equipped with a built-in 1 NO (Normally Open) auxiliary contact, it guarantees reliable switching for motors and resistive loads. The unit integrates ON/OFF manual test buttons for simplified maintenance and panel testing.',
      image: '/images/lc1e1210.jpg',
      voltage: '220V 50/60Hz',
      current: '12A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Motor starting / Automation',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO',
      features: [
        'Model: Schneider EasyPact TVS LC1E1210',
        'Current Rating (AC-3): 12A robust switching capacity',
        'Coil Voltage: 220V 50/60Hz for optimal actuation',
        'Poles: 3-Pole main configuration',
        'Auxiliary Contacts: 1 NO (Normally Open)',
        'Diagnostics: Front-facing ON/OFF manual test actuation buttons',
        'Application: Excellent for motor control, pumps, and machinery',
        'Durability: Built to withstand severe industrial conditions',
        'Mounting: Versatile DIN-rail snap-on mounting',
        'Terminals: Highly secure screw-clamp terminations'
      ]
    },
    {
      id: 'lc1e1801',
      name: 'Schneider LC1E1801 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E1801',
      description: 'Designed for substantial industrial applications, the Schneider Electric EasyPact TVS LC1E1801 (LC1E1801M7) is an 18A AC-3 contactor supporting up to 7.5kW loads at 415V. Featuring a 110V 50/60Hz coil, it integrates perfectly into control systems requiring lower control voltages. With its 1 NC auxiliary contact and robust construction complying with IEC 60947-4-1, this contactor offers premium safety and endurance.',
      image: '/images/lc1e1801.jpg',
      voltage: '110V 50/60Hz',
      current: '18A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Heavy Motor starting / Pumping',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E1801 (M7 variant)',
        'Current Rating (AC-3): 18A continuous load capability',
        'Power Rating: 7.5kW at 415V AC',
        'Coil Voltage: 110V 50/60Hz control circuit',
        'Poles: 3-Pole (3 NO main contacts)',
        'Auxiliary Contacts: 1 NC (Normally Closed) logic contact',
        'Standards: Certified to IEC 60947-4-1',
        'Terminals: Clear 1L1 3L2 5L3 mapping for easy wiring',
        'Application: Suitable for HVAC, conveyors, and processing machines',
        'Safety: High impulse withstand voltage and thermal protection'
      ]
    },
    {
      id: 'lc1e1810',
      name: 'Schneider LC1E1810 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E1810',
      description: 'The Schneider Electric EasyPact TVS LC1E1810 is a heavy-duty 18A (AC-3) 7.5kW rated contactor operating across 220-415V ranges. Characterized by its front-mounted START (I) and STOP (O) mechanical push buttons, it is optimized for localized testing and commissioning. It features a 1 NO auxiliary contact and superior arc-quenching chambers, ensuring maximum lifespan and electrical reliability in demanding environments.',
      image: '/images/lc1e1810.jpg',
      voltage: '220-415V AC',
      current: '18A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Motor starting / Automation',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO',
      features: [
        'Model: Schneider EasyPact TVS LC1E1810',
        'Current/Power Rating (AC-3): 18A / 7.5kW capability',
        'Voltage: Wide 220-415V AC operational range',
        'Poles: 3-Pole main circuit configuration',
        'Auxiliary Contacts: 1 NO (Normally Open) for feedback',
        'Diagnostics: Front-facing START (I) and STOP (O) test buttons',
        'Mounting: Easy mounting on standard 35mm DIN rail',
        'Terminals: Finger-safe IP20 screw clamp terminals',
        'Application: Industrial automation, pumping, and motor control',
        'Durability: Superior mechanical endurance and thermal resistance'
      ]
    },
    {
      id: 'lc1e2501',
      name: 'Schneider LC1E2501 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E2501',
      description: 'Handling heavy loads with ease, the Schneider Electric EasyPact TVS LC1E2501 is a 25A AC-3 contactor designed for 11kW (400V) operations. Powered by a 220-240V AC 50Hz coil, it features multiple built-in auxiliary blocks including 13NO, 14NO, 21NC, and 22NC configurations for complex interlocking logic. Its sophisticated mechanical design includes prominent manual actuation buttons, making it a cornerstone for advanced electrical panels.',
      image: '/images/lc1e2501.jpg',
      voltage: '220-240V AC 50Hz',
      current: '25A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Advanced Motor Control',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO + 1 NC',
      features: [
        'Model: Schneider EasyPact TVS LC1E2501',
        'Current Rating (AC-3): 25A maximum continuous operation',
        'Power Rating: 11kW at 400V AC',
        'Coil Voltage: 220-240V AC 50Hz',
        'Auxiliary Contacts: Multi-contact setup (NO and NC variants)',
        'Diagnostics: Front manual actuation testing buttons',
        'Certifications: CE, CCC, and international standards compliant',
        'Application: Heavy machinery, large compressors, and automation systems',
        'Terminals: Robust screw connections ensuring zero voltage drop',
        'Durability: High short-circuit resilience and arc suppression'
      ]
    },
    {
      id: 'lc1e2510',
      name: 'Schneider LC1E2510 Contactor',
      brand: 'Schneider',
      category: 'Schneider LC1E Contactors',
      model: 'LC1E2510',
      description: 'The Schneider Electric EasyPact TVS LC1E2510 is a powerful 25A (AC-3) industrial contactor rated for 7.5kW at 400V (50/60Hz). It features front-facing ON/RUN and OFF/STOP push buttons for effortless manual overriding and diagnostics. Complete with a 1 NO auxiliary contact and clearly marked terminals, this contactor offers unparalleled performance, thermal stability, and mechanical strength for critical industrial infrastructure.',
      image: '/images/lc1e2510.jpg',
      voltage: '400V 50/60Hz',
      current: '25A',
      poles: '3P',
      mainContact: '3NO',
      application: 'Industrial Machinery',
      mounting: 'DIN rail / Panel',
      auxiliary: '1 NO',
      features: [
        'Model: Schneider EasyPact TVS LC1E2510',
        'Current Rating (AC-3): 25A heavy-duty capacity',
        'Power Rating: 7.5kW at 400V 50/60Hz',
        'Poles: 3-Pole (3 NO main contacts)',
        'Auxiliary Contacts: 1 NO (Normally Open) logic contact',
        'Controls: Integrated ON/RUN and OFF/STOP manual override buttons',
        'Application: Ideal for robust industrial automation and heavy pumping',
        'Terminals: Precisely engineered L1-1, L2-3, L3-5 power terminals',
        'Mounting: DIN-rail or panel mount compatible',
        'Safety: Superior insulation and impulse withstand characteristics'
      ]
    }
  ];

  // Check if these already exist, if not, append them
  newProducts.forEach(newP => {
    const existingIdx = modifiedProducts.findIndex(p => p.model === newP.model);
    if (existingIdx > -1) {
      modifiedProducts[existingIdx] = newP;
    } else {
      modifiedProducts.push(newP);
    }
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\nexport const categories = ' + JSON.stringify(filteredCategories, null, 2) + ';\n\nexport const products = ' + JSON.stringify(modifiedProducts, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully updated categories and all 10 contactors!');
}

run();
