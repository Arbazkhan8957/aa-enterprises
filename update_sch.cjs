const fs = require('fs');
const { brands, categories, products } = require('./temp_update.cjs');

const updates = {
  'LC1E0601': {
    name: 'Schneider EasyPact TVS LC1E0601',
    image: '/images/lc1e0601.jpg',
    description: 'The Schneider Electric EasyPact TVS LC1E0601 is a high-performance 3-pole industrial AC contactor designed for robust motor control. Rated for 6A (AC-3) and thermal rating of 20A, it is perfect for essential motor control up to 415V 50Hz. Manufactured in India, it features superior arc suppression and a compact DIN-rail mountable design for seamless integration into industrial automation panels. Built-in 1 NC (Normally Closed) auxiliary contact ensures reliable logic signaling.',
    features: [
      'Model: Schneider EasyPact TVS LC1E0601',
      'Current Rating (AC-3): 6A continuous operation',
      'Thermal Rating (Ith): 20A for robust load handling',
      'Voltage: 415V 50Hz AC operational voltage',
      'Poles: 3-Pole (3 NO main contacts) configuration',
      'Auxiliary Contacts: 1 NC (Normally Closed) for control circuits',
      'Origin: Proudly Made in India ensuring authentic Schneider quality',
      'Application: Ideal for industrial pumps, fans, compressors, and motor switching',
      'Mounting: Easy DIN-rail or panel mounting for quick installation',
      'Reliability: Engineered for millions of trouble-free mechanical cycles'
    ],
    auxiliary: '1 NC'
  },
  'LC1E0610': {
    name: 'Schneider EasyPact TVS LC1E0610',
    image: '/images/lc1e0610.jpg',
    description: 'The Schneider Electric EasyPact TVS LC1E0610 is an essential 3-pole industrial contactor optimized for standard motor control applications. Delivering 6A (AC-3) capacity and up to 2.2kW power handling, this unit provides reliable and safe circuit orchestration. It features a built-in 1 NO (Normally Open) auxiliary contact for feedback logic. Its robust construction ensures exceptional thermal performance and long-term durability in demanding environments.',
    features: [
      'Model: Schneider EasyPact TVS LC1E0610',
      'Current Rating (AC-3): 6A continuous operation',
      'Power Rating: Supports up to 2.2kW motor loads',
      'Poles: 3-Pole (3 NO main contacts)',
      'Auxiliary Contacts: 1 NO (Normally Open) for feedback and latching circuits',
      'Design: Compact footprint optimizing panel space',
      'Application: Perfect for HVAC, conveyors, and general automation panels',
      'Mounting: Standard DIN-rail snap-on mounting',
      'Terminals: Secure screw clamp terminals for robust wire connections',
      'Durability: High mechanical and electrical lifespan under continuous load'
    ],
    auxiliary: '1 NO'
  },
  'LC1E0901': {
    name: 'Schneider EasyPact TVS LC1E0901',
    image: '/images/lc1e0901.jpg',
    description: 'Designed for precision and reliability, the Schneider Electric EasyPact TVS LC1E0901 is a 3-pole AC contactor rated for 9A (AC-3) and 4kW at 400V. With a thermal current (Ie) rating of 9A and a robust build, it is the go-to choice for managing mid-sized inductive loads. It includes a 1 NC auxiliary block, making it ideal for interlocking and safety circuits. The unit offers exceptional insulation voltage and is designed for quick deployment in modern control cabinets.',
    features: [
      'Model: Schneider EasyPact TVS LC1E0901',
      'Current Rating (AC-3): 9A continuous operation (Ie=9A)',
      'Power Rating: 4kW at 400V AC',
      'Poles: 3-Pole main circuit for 3-phase systems',
      'Auxiliary Contacts: 1 NC (Normally Closed) integrated contact',
      'Voltage: 220-230V AC standard operating capability',
      'Insulation: High-grade thermoplastic housing for maximum safety',
      'Application: Essential for machinery, packaging equipment, and material handling',
      'Compliance: Meets stringent IEC international safety standards',
      'Mounting: Quick-mount DIN rail compatible base'
    ],
    auxiliary: '1 NC'
  },
  'LC1E0910': {
    name: 'Schneider EasyPact TVS LC1E0910',
    image: '/images/lc1e0910.jpg',
    description: 'The Schneider Electric EasyPact TVS LC1E0910 provides heavy-duty switching performance in a compact form factor. Rated at 9A (AC-3, 4kW) with an Ith of 20A, it is engineered for resilience with a 690V insulation voltage (Ui) and 6kV impulse withstand voltage (Uimp). Featuring a built-in 1 NO auxiliary contact and certified to IEC/EN 60947-4-1 standards, this contactor guarantees supreme safety and operational efficiency for industrial motor starters.',
    features: [
      'Model: Schneider EasyPact TVS LC1E0910',
      'Current/Power (AC-3): 9A / 4kW continuous switching',
      'Thermal Current (Ith): 20A maximum capacity',
      'Insulation Voltage (Ui): Rated up to 690V',
      'Impulse Withstand (Uimp): 6kV surge protection',
      'Poles: 3-Pole (3 NO) configuration',
      'Auxiliary Contacts: 1 NO (Normally Open) integrated contact',
      'Certifications: CE marked, complies with IEC/EN 60947-4-1',
      'Application: Advanced motor starting and automation control',
      'Durability: Superior arc extinguishing for prolonged contact life'
    ],
    auxiliary: '1 NO'
  },
  'LC1E1201': {
    name: 'Schneider EasyPact TVS LC1E1201',
    image: '/images/lc1e1201.jpg',
    description: 'Engineered for higher capacity requirements, the Schneider Electric EasyPact TVS LC1E1201 is a premium 12A (AC-3) 3-pole contactor. Powered by a 220-230V~ 50/60Hz coil, it delivers consistent actuation for demanding industrial tasks. Made in Indonesia under strict quality controls, this model features 1 NC auxiliary contact for safety logic. Its ventilated design and robust terminals make it an indispensable component for heavy machinery and commercial HVAC setups.',
    features: [
      'Model: Schneider EasyPact TVS LC1E1201',
      'Current Rating (AC-3): 12A continuous heavy-duty operation',
      'Coil Voltage: 220-230V~ 50/60Hz AC',
      'Poles: 3-Pole main power circuit',
      'Auxiliary Contacts: 1 N.C. (Normally Closed) integrated logic contact',
      'Origin: High-quality manufacturing Made in Indonesia',
      'Design: Enclosed construction with clear terminal markings',
      'Application: Ideal for large motor starting, HVAC, and industrial presses',
      'Mounting: Versatile DIN-rail or screw mounting options',
      'Performance: Low power consumption coil with rapid response time'
    ],
    auxiliary: '1 NC'
  }
};

let modifiedProducts = products.map(p => {
  if (updates[p.model]) {
    return { ...p, ...updates[p.model] };
  }
  return p;
});

const output = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\nexport const categories = ' + JSON.stringify(categories, null, 2) + ';\n\nexport const products = ' + JSON.stringify(modifiedProducts, null, 2) + ';\n';

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated the 5 Schneider contactors with deep descriptions!');
fs.unlinkSync('./temp_update.cjs');
