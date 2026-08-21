const fs = require('fs');

async function run() {
  const dataModule = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data.js');
  let { brands, categories, products } = dataModule;

  // We are going to upgrade the descriptions and features for Sibass and the first 5 Schneiders.
  
  const generateSibassContent = (model, current, auxiliary) => {
    return {
      description: `The Sibass Electric ${model} is a premium industrial AC contactor designed for absolute reliability in harsh electrical environments. Boasting a highly efficient ${current} AC-3 rating, it incorporates advanced pure copper coil technology (available in 220V, 380V, and 415V ranges) for exceptional thermal stability and reduced power consumption during continuous operation. The ${model} comes equipped with built-in ${auxiliary} auxiliary contacts, specifically engineered for seamless integration into complex interlocking logic, motor control centers (MCC), and automated PLC frameworks. Tested under the most rigorous IEC standards, its reinforced anti-welding silver alloy contacts ensure a massive operational lifespan, making it the definitive choice for heavy pumping, HVAC, and industrial automation.`,
      voltage: '220V / 380V / 415V AC (50/60Hz)',
      current: current,
      poles: '3P',
      mainContact: '3NO',
      application: 'Industrial Automation & Motor Control',
      mounting: 'DIN rail / Heavy Duty Panel Mount',
      auxiliary: auxiliary,
      features: [
        `Model: Sibass Electric ${model} AC Contactor`,
        `Current Rating (AC-3): ${current} continuous switching capability`,
        'Coil Voltage Range: Flexible 220V, 380V, 415V AC operations (50/60 Hz)',
        `Auxiliary Configuration: Factory integrated ${auxiliary} contact`,
        'Contact Material: Heavy-duty Silver Alloy (AgSnO2) for zero micro-welding',
        'Coil Technology: High-purity copper winding for superior heat dissipation',
        'Application: Ideal for robust motor starting, compressors, and heavy machinery',
        'Terminals: Deep, anti-vibration screw clamp terminals ensuring zero voltage drop',
        'Mounting: Universal 35mm DIN-rail snap-on and screw panel mounting',
        'Standards: Fully certified to strict international IEC 60947-4-1 standards'
      ]
    };
  };

  const generateSchneiderContent = (model, current, auxiliary) => {
    return {
      description: `The Schneider Electric EasyPact TVS ${model} is a compact yet incredibly powerful industrial contactor, delivering an exact ${current} AC-3 rating for uncompromising motor control. Perfect for high-density electrical panels, it features a highly optimized 220-415V AC 50/60Hz magnetic coil that provides lightning-fast actuation with minimal energy loss. Equipped with a precisely calibrated ${auxiliary} auxiliary contact, this unit excels in safety interlocks, localized feedback systems, and automated machinery orchestration. The ${model} is housed in an industrial-grade flame-retardant polymer, guaranteeing supreme arc-suppression and thermal endurance for factories, packaging lines, and pumping stations.`,
      voltage: '220-415V AC (50/60Hz)',
      current: current,
      poles: '3P',
      mainContact: '3NO',
      application: 'High-Density Motor Starting',
      mounting: 'DIN rail / Panel',
      auxiliary: auxiliary,
      features: [
        `Model: Schneider EasyPact TVS ${model}`,
        `Current Rating (AC-3): Precision ${current} load handling capability`,
        'Voltage Range: Versatile 220-415V AC (50/60Hz) operating coil',
        `Auxiliary Contacts: Built-in ${auxiliary} logic contact for seamless feedback`,
        'Architecture: Ultra-compact footprint maximizing panel board space',
        'Application: Perfect for automated conveyors, packaging machinery, and HVAC',
        'Durability: Advanced arc-quenching chambers extending electrical life',
        'Terminals: IP20 finger-safe screw clamps preventing accidental contact',
        'Mounting: Instant 35mm DIN-rail attachment or secure screw mounting',
        'Safety: Extremely high impulse withstand voltage (Uimp) ratings'
      ]
    };
  };

  const updateMap = {
    // SIBASS NC SERIES
    'NC 0901': generateSibassContent('NC 0901', '9A', '1 NC (Normally Closed)'),
    'NC 1201': generateSibassContent('NC 1201', '12A', '1 NC (Normally Closed)'),
    'NC 1801': generateSibassContent('NC 1801', '18A', '1 NC (Normally Closed)'),
    'NC 2501': generateSibassContent('NC 2501', '25A', '1 NC (Normally Closed)'),
    'NC 3201': generateSibassContent('NC 3201', '32A', '1 NC (Normally Closed)'),
    // SIBASS NO SERIES
    'NO 0910': generateSibassContent('NO 0910', '9A', '1 NO (Normally Open)'),
    'NO 1210': generateSibassContent('NO 1210', '12A', '1 NO (Normally Open)'),
    'NO 1810': generateSibassContent('NO 1810', '18A', '1 NO (Normally Open)'),
    'NO 2510': generateSibassContent('NO 2510', '25A', '1 NO (Normally Open)'),
    'NO 3210': generateSibassContent('NO 3210', '32A', '1 NO (Normally Open)'),
    // SIBASS LARGE SERIES
    'SE1D4011': generateSibassContent('SE1D4011', '40A', '1 NO + 1 NC'),
    'SE1D5011': generateSibassContent('SE1D5011', '50A', '1 NO + 1 NC'),
    'SE1D6511': generateSibassContent('SE1D6511', '65A', '1 NO + 1 NC'),
    'SE1D8011': generateSibassContent('SE1D8011', '80A', '1 NO + 1 NC'),
    'SE1D9511': generateSibassContent('SE1D9511', '95A', '1 NO + 1 NC'),
    
    // SCHNEIDER FIRST 5
    'LC1E0601': generateSchneiderContent('LC1E0601', '6A', '1 NC (Normally Closed)'),
    'LC1E0610': generateSchneiderContent('LC1E0610', '6A', '1 NO (Normally Open)'),
    'LC1E0901': generateSchneiderContent('LC1E0901', '9A', '1 NC (Normally Closed)'),
    'LC1E0910': generateSchneiderContent('LC1E0910', '9A', '1 NO (Normally Open)'),
    'LC1E1201': generateSchneiderContent('LC1E1201', '12A', '1 NC (Normally Closed)'),
  };

  let modifiedProducts = products.map(p => {
    if (updateMap[p.model]) {
      return { ...p, ...updateMap[p.model] };
    }
    return p;
  });

  const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                 'export const products = ' + JSON.stringify(modifiedProducts, null, 2) + ';\n';

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully upgraded descriptions for Sibass and Schneider!');
}

run();
