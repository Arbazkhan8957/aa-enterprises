const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// Updates mapping
const updates = {
  'ceyone-lsa-012': {
    image: '/media/media_1787164512955.png',
    description: 'Product Overview: The Ceyone LSA-012 Limit Switch is engineered for robust industrial performance. Featuring a heavy-duty roller lever actuator and enclosed in a high-grade IP65 housing, it provides exceptional durability against dust and water ingress. It is widely used in conveyor systems, automated packaging lines, and CNC machinery for accurate position sensing and end-of-travel limits.'
  },
  'ceyone-push-buttons': {
    image: '/media/media_1787164521451.jpg',
    description: 'Product Overview: Ceyone Industrial Flush Push Buttons deliver highly reliable manual control for industrial panels. Available in a comprehensive range of colors (Black, Yellow, Red, Green, Blue) to signify various operations (Start, Stop, Fault, Reset). Built to withstand high mechanical wear, these non-illuminated buttons ensure crisp tactile feedback and long operational life in demanding environments.'
  },
  'ceyone-proximity-sensor': {
    image: '/media/media_1787164529509.jpg',
    description: 'Product Overview: The Ceyone Inductive Proximity Sensor provides precise, non-contact detection of ferrous and non-ferrous metal objects. Enclosed in a rugged, threaded cylindrical housing for easy mounting, it features a built-in LED status indicator and a pre-wired cable connection, ensuring rapid installation and reliable sensing in harsh manufacturing conditions.'
  },
  'ceyone-lxk3-20sb': {
    image: '/media/media_1787164542246.jpg',
    description: 'Product Overview: Designed for heavy-duty applications, the Ceyone LXK3-20S/B Limit Switch features a versatile adjustable roller lever mechanism. It allows operators to customize the actuation angle and distance, making it ideal for variable mechanical setups. Rated IP65, it guarantees dependable electrical switching in rugged, high-vibration industrial sectors.'
  },
  'ceyone-lte-1101j': {
    image: '/media/media_1787164550305.jpg',
    description: 'Product Overview: Ensure maximum safety with the Ceyone LTE-1101J Revolving Warning Light. This industrial-grade siren and beacon combo emits a powerful, high-visibility revolving light to instantly alert personnel of operational statuses or hazards. Essential for heavy machinery, emergency exits, and high-traffic factory floors.'
  },
  'repon-rp8104': {
    image: '/media/media_1787164892778.jpg',
    description: 'Product Overview: The Repon RP-8104 is a highly durable limit switch equipped with a roller lever actuator, optimized for precision position detection. Its compact yet rugged design allows it to fit into tight machine spaces while providing consistent, high-frequency switching. It features a robust 1NO+1NC contact configuration, suitable for a wide range of automation tasks.'
  },
  'repon-micro-switches': {
    image: '/media/media_1787164900873.jpg',
    description: 'Product Overview: Repon Z-15G Series Micro Switches are precision-engineered for applications requiring rapid, high-accuracy switching. This versatile family includes multiple actuator options such as pin plungers, short roller levers, and long hinge levers, allowing them to adapt to almost any mechanical trigger. Recognized for exceptional electrical lifespan and crisp snap-action.'
  },
  'repon-cm18-3008pc': {
    image: '/media/media_1787164908663.jpg',
    description: 'Product Overview: The Repon RP-CM18-3008PC Capacitive Proximity Sensor offers superior versatility by detecting both metallic and non-metallic objects (such as plastics, liquids, and wood). Its adjustable sensitivity ensures flawless performance even in varying environmental conditions. Features a PNP output configuration with a robust pre-wired cable for reliable connectivity.'
  },
  'omron-wlnj-th': {
    image: '/media/media_1787164915818.jpg',
    description: 'Product Overview: The Omron WLNJ-TH is a heavy-duty limit switch utilizing a flexible rod spring actuator. This unique design enables actuation from any direction, making it the perfect solution for erratic or multidirectional moving targets. Built to Omron legendary quality standards, it withstands extreme industrial environments and guarantees exceptionally long service life.'
  },
  'ab-802t-atp': {
    image: '/media/media_1787164923321.jpg',
    description: 'Product Overview: The Allen-Bradley 802T-ATP Oiltight Limit Switch is a benchmark in industrial durability. Engineered for the harshest manufacturing floors, it features a rugged, plug-in design that dramatically reduces downtime during maintenance. Its heavy-duty construction ensures reliable electrical switching even when exposed to oil, dust, and heavy impacts.'
  }
};

// Replace image and description for existing items
for (const [id, update] of Object.entries(updates)) {
  const regexImg = new RegExp("(id:\\s*['\"]" + id + "['\"][\\s\\S]*?image:\\s*['\"]).*?(['\"])", 'g');
  data = data.replace(regexImg, "$1" + update.image + "$2");
  
  const regexDesc = new RegExp("(id:\\s*['\"]" + id + "['\"][\\s\\S]*?description:\\s*['\"]).*?(['\"])", 'g');
  data = data.replace(regexDesc, "$1" + update.description.replace(/'/g, "\\'") + "$2");
}

// Add categories if not exist
const addCategory = (name, image, desc) => {
  if (!data.includes('"name": "' + name + '"')) {
    const categoriesEnd = data.indexOf('];', data.indexOf('export const categories = ['));
    let preSlice = data.slice(0, categoriesEnd);
    if (!preSlice.trim().endsWith(',')) {
      preSlice += ',';
    }
    const newCategory = '\n  {\n' +
    '    "name": "' + name + '",\n' +
    '    "image": "' + image + '",\n' +
    '    "description": "' + desc + '"\n' +
    '  },';
    data = preSlice + newCategory + data.slice(categoriesEnd);
  }
};

addCategory("Crane Pendant Controls", "/images/pendant_logo.jpg", "Robust and ergonomic crane pendant control stations for hoisting and overhead crane operation.");
addCategory("Ideal Items", "/images/ideal_logo.jpg", "Ideal brand electrical components and micro switches.");
addCategory("Float Switches", "/images/float_switch_logo.jpg", "Reliable liquid level control float switches for tanks and pumping stations.");
addCategory("Timers", "/images/timer_logo.jpg", "High-precision industrial timers and relays.");

// Ensure Ideal brand exists
if (!data.includes('"name": "Ideal"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Ideal", "logo": "Ideal" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// Ensure Generic brand exists
if (!data.includes('"name": "Generic"')) {
  const brandsEnd = data.indexOf('];', data.indexOf('export const brands = ['));
  const newBrand = ',\n  { "name": "Generic", "logo": "Generic" }';
  data = data.slice(0, brandsEnd - 1) + newBrand + data.slice(brandsEnd - 1);
}

// Add 5 new products
const newProducts = `
  {
    id: 'crane-pendant-cob',
    name: 'Crane Pendant Control Station (COB Series)',
    category: 'Crane Pendant Controls',
    brand: 'Generic',
    image: '/media/media_1787165508775.jpg',
    description: 'Product Overview: The COB Series Crane Pendant Control Station offers ergonomic, highly responsive manual control for hoists, overhead cranes, and heavy lifting equipment. Constructed from high-visibility, impact-resistant ABS plastic, it withstands severe drops and industrial abuse. Available in various button configurations (Up/Down, East/West, Start/Stop), featuring mechanically interlocked buttons to prevent simultaneous dual-direction actuation.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 55,
    features: [
      'Series: COB (e.g., COB-61, COB-62)',
      'Material: High-impact resistant ABS',
      'Protection: IP65 Rated against dust and water',
      'Mechanically interlocked directional buttons',
      'Ergonomic grip design'
    ],
    specs: [
      { name: 'Brand', value: 'Generic' },
      { name: 'Type', value: 'Pendant Control' }
    ]
  },
  {
    id: 'ideal-micro-switches-display',
    name: 'Ideal Micro & Limit Switches',
    category: 'Ideal Items',
    brand: 'Ideal',
    image: '/media/media_1787165519351.jpg',
    description: 'Product Overview: Discover the comprehensive range of Ideal Micro and Limit Switches. Engineered for uncompromising accuracy, this extensive lineup includes miniature micro switches, enclosed limit switches, and subminiature designs with a vast array of actuators (plunger, roller, lever, wire). Ideal for automation panels, robotics, and consumer appliances requiring long-lasting mechanical endurance.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 34,
    features: [
      'Comprehensive range of actuators',
      'High precision snap-action',
      'Excellent mechanical and electrical lifespan',
      'Compact and standard enclosures'
    ],
    specs: [
      { name: 'Brand', value: 'Ideal' },
      { name: 'Type', value: 'Micro / Limit Switch' }
    ]
  },
  {
    id: 'cable-float-switch',
    name: 'Heavy Duty Cable Float Switch',
    category: 'Float Switches',
    brand: 'Generic',
    image: '/media/media_1787165530706.jpg',
    description: 'Product Overview: Ensure foolproof liquid level management with our Heavy Duty Cable Float Switch. Designed for sump pumps, water tanks, and sewage systems, it utilizes a reliable internal micro switch mechanism triggered by the angle of the float. Encased in a non-toxic, hermetically sealed polypropylene shell, it comes complete with an adjustable counterweight and heavy-duty insulated cable for deep submersion.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 120,
    features: [
      'Type: Cable Suspended Float Switch',
      'Material: Hermetically sealed Polypropylene',
      'Includes adjustable counterweight',
      'Rated for water and non-corrosive liquids',
      'Contact: SPDT for Empty/Fill logic'
    ],
    specs: [
      { name: 'Brand', value: 'Generic' },
      { name: 'Type', value: 'Float Switch' }
    ]
  },
  {
    id: 'ceyone-fs1-foot-switch',
    name: 'Ceyone Industrial Foot Switch (FS-1 Series)',
    category: 'Ceyone Items',
    brand: 'Ceyone',
    image: '/media/media_1787165538702.jpg',
    description: 'Product Overview: Gain hands-free operational control with the Ceyone Industrial Foot Switch. Featuring a heavy-duty, anti-slip pedal and a sturdy metal enclosure, it is designed for operating medical equipment, stamping machines, and welding tools. Built-in high-quality micro switches guarantee instant response times, while the robust safety guard prevents accidental actuation from falling objects.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 42,
    features: [
      'Model: FS-1 Series',
      'Construction: Rugged Metal Enclosure',
      'Anti-slip pedal surface',
      'High electrical rating',
      'Hands-free machine operation'
    ],
    specs: [
      { name: 'Brand', value: 'Ceyone' },
      { name: 'Type', value: 'Foot Switch' }
    ]
  },
  {
    id: 'omron-h3cr-a8-timer',
    name: 'Omron H3CR-A8 Solid State Timer',
    category: 'Timers',
    brand: 'Omron',
    image: '/media/media_1787165546043.jpg',
    description: 'Product Overview: The Omron H3CR-A8 Solid State Timer is an industry standard for precise time-delay control. This multi-functional timer offers a wide, selectable time range and multiple operating modes (ON-delay, flicker, interval, etc.). Its standard 8-pin plug-in design ensures rapid installation, while the large, easy-to-read analog dial provides instant visual feedback for operator convenience.',
    price: 'Contact for Quote',
    stock: 'In Stock',
    rating: 4.9,
    reviews: 89,
    features: [
      'Model: H3CR-A8',
      'Multi-range (sec, min, hrs)',
      'Multi-mode operation (ON-delay, etc.)',
      'Standard 8-pin plug-in socket base',
      'Wide operating voltage range'
    ],
    specs: [
      { name: 'Brand', value: 'Omron' },
      { name: 'Model', value: 'H3CR-A8' },
      { name: 'Type', value: 'Timer Relay' }
    ]
  }
`;

const productsEnd = data.lastIndexOf('];');
let prodPreSlice = data.slice(0, productsEnd - 1);
if (!prodPreSlice.trim().endsWith(',')) {
    prodPreSlice += ',';
}
data = prodPreSlice + newProducts + data.slice(productsEnd - 1);

fs.writeFileSync('src/data.js', data);
console.log('Successfully updated all images and details in data.js');
