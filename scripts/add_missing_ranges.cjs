const fs = require('fs');
const path = require('path');

let products = [];

// LC1E auto-generated
const lc1e_models = [
  {m: '0601', c: '6A', a: '1NC'}, {m: '0610', c: '6A', a: '1NO'},
  {m: '0901', c: '9A', a: '1NC'}, {m: '0910', c: '9A', a: '1NO'},
  {m: '1201', c: '12A', a: '1NC'}, {m: '1210', c: '12A', a: '1NO'},
  {m: '1801', c: '18A', a: '1NC'}, {m: '1810', c: '18A', a: '1NO'},
  {m: '2501', c: '25A', a: '1NC'}, {m: '2510', c: '25A', a: '1NO'},
  {m: '3201', c: '32A', a: '1NC'}, {m: '3210', c: '32A', a: '1NO'},
  {m: '3801', c: '38A', a: '1NC'}, {m: '3810', c: '38A', a: '1NO'},
  {m: '40B01', c: '40A', a: '1NC', b:true}, {m: '40B10', c: '40A', a: '1NO', b:true},
  {m: '40', c: '40A', a: '1NO + 1NC'},
  {m: '50', c: '50A', a: '1NO + 1NC'},
  {m: '65', c: '65A', a: '1NO + 1NC'},
  {m: '80', c: '80A', a: '1NO + 1NC'},
  {m: '95', c: '95A', a: '1NO + 1NC'},
  {m: '120', c: '120A', a: '1NO + 1NC'},
  {m: '160', c: '160A', a: '1NO + 1NC'},
  {m: '200', c: '200A', a: '1NO + 1NC'},
  {m: '250', c: '250A', a: '1NO + 1NC'},
  {m: '300', c: '300A', a: '1NO + 1NC'},
  {m: '400', c: '400A', a: '1NO + 1NC'},
  {m: '500', c: '500A', a: '1NO + 1NC'},
  {m: '630', c: '630A', a: '1NO + 1NC'}
];

lc1e_models.forEach(mod => {
  products.push({
    id: 'lc1e' + mod.m.toLowerCase(),
    name: 'Schneider Electric Easy TeSys LC1E' + mod.m,
    brand: 'Schneider',
    category: 'TeSys Contactors',
    model: 'LC1E' + mod.m,
    description: 'Schneider Electric Easy TeSys LC1E' + mod.m + ' is a 3-pole industrial contactor designed for reliable AC-3 motor control and switching applications.',
    image: '/images/lc1e_family.jpg',
    voltage: 'exact suffix dependent',
    current: mod.c,
    poles: '3P',
    mainContact: '3NO',
    application: 'Motor control / industrial switching',
    mounting: 'panel/DIN rail',
    auxiliary: mod.a
  });
});

const lr_ranges = ['01','02','03','04','05','06','07','08','10','12','14','16','21','22','32','35'];

// LRE
lr_ranges.forEach(range => {
  products.push({
    id: 'lre' + range,
    name: 'Schneider Easy TeSys Protect LRE' + range,
    brand: 'Schneider',
    category: 'Thermal Overload Relays',
    model: 'LRE' + range,
    description: 'Schneider Easy TeSys Protect Thermal Overload Relay LRE' + range + ' for motor protection.',
    image: '/images/easy_tesys_protect.jpg',
    voltage: 'Standard',
    current: 'Range dependent',
    poles: '3P',
    mainContact: 'N/A',
    application: 'Motor Protection',
    mounting: 'Contactor Direct',
    auxiliary: '1NO+1NC'
  });
});

// LRD
lr_ranges.forEach(range => {
  products.push({
    id: 'lrd' + range,
    name: 'Schneider TeSys Deca Thermal Overload Relay LRD' + range,
    brand: 'Schneider',
    category: 'Thermal Overload Relays',
    model: 'LRD' + range,
    description: 'Schneider TeSys Deca Thermal Overload Relay LRD' + range + ' for motor protection.',
    image: '/images/tesys_lrd.jpg',
    voltage: 'Standard',
    current: 'Range dependent',
    poles: '3P',
    mainContact: 'N/A',
    application: 'Motor Protection',
    mounting: 'Contactor Direct',
    auxiliary: '1NO+1NC'
  });
});

// LADN
const ladn_ranges = ['11', '22', '20', '02', '31', '13', '40', '04'];
ladn_ranges.forEach(range => {
  products.push({
    id: 'ladn' + range,
    name: 'Schneider TeSys Deca Auxiliary Contact LADN' + range,
    brand: 'Schneider',
    category: 'TeSys Contactors',
    model: 'LADN' + range,
    description: 'Instantaneous auxiliary contact block LADN' + range + ' for TeSys contactors.',
    image: '/images/tesys_ladn.jpg',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Auxiliary Control',
    mounting: 'Front Mount',
    auxiliary: range.charAt(0) + 'NO + ' + range.charAt(1) + 'NC'
  });
});

// LC1D
const lc1d_models = ['09', '12', '18', '25', '32', '38', '40', '50', '65', '80', '95', '115', '150'];
lc1d_models.forEach(m => {
  products.push({
    id: 'lc1d' + m,
    name: 'Schneider Electric TeSys D LC1D' + m,
    brand: 'Schneider',
    category: 'TeSys Contactors',
    model: 'LC1D' + m,
    description: 'TeSys D LC1D' + m + ' contactor for motor control.',
    image: parseInt(m) >= 40 ? `/images/lc1d${m}_billboard.jpg` : `/images/lc1d${m}bd.png`,
    voltage: 'Select required voltage',
    current: m + 'A',
    poles: '3P',
    mainContact: '3 NO',
    application: 'AC-3 Motor Control',
    mounting: 'Panel/DIN-rail',
    auxiliary: 'NO/NC'
  });
});

// Sibass Contactors
const sibass_c = ['09', '12', '18', '25', '32', '40', '50', '65', '80', '95'];
sibass_c.forEach(m => {
  products.push({
    id: 'sibass_sc' + m,
    name: 'Sibass Electric AC Contactor SC-' + m,
    brand: 'Sibass',
    category: 'TeSys Contactors',
    model: 'SC-' + m,
    description: 'Sibass Electric SC-' + m + ' AC Contactor.',
    image: '/images/sibass_placeholder.jpg',
    voltage: 'Standard',
    current: m + 'A',
    poles: '3P',
    mainContact: '3 NO',
    application: 'Motor Control',
    mounting: 'DIN-rail',
    auxiliary: 'NO/NC'
  });
});

// Sibass Relays
const sibass_r = ['09', '12', '18', '25', '32', '40', '50', '65', '80', '95'];
sibass_r.forEach(m => {
  products.push({
    id: 'sibass_sr' + m,
    name: 'Sibass Electric Thermal Relay SR-' + m,
    brand: 'Sibass',
    category: 'Thermal Overload Relays',
    model: 'SR-' + m,
    description: 'Sibass Electric SR-' + m + ' Thermal Overload Relay.',
    image: '/images/sibass_placeholder.jpg',
    voltage: 'Standard',
    current: 'Variable',
    poles: '3P',
    mainContact: 'N/A',
    application: 'Motor Protection',
    mounting: 'Direct',
    auxiliary: '1NO+1NC'
  });
});

// Sibass LED Indicators
const sibass_led = ['Red', 'Green', 'Yellow', 'Blue', 'White'];
sibass_led.forEach(c => {
  products.push({
    id: 'sibass_led_' + c.toLowerCase(),
    name: 'Sibass 22.5mm LED Indicator ' + c,
    brand: 'Sibass',
    category: 'Indicators & Tower Lights',
    model: 'LED-22-' + c.charAt(0),
    description: 'Sibass 22.5mm LED Indicating Lamp - ' + c,
    image: '/images/sibass_placeholder.jpg',
    voltage: '24V / 230V',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Panel Indication',
    mounting: '22.5mm Panel',
    auxiliary: 'N/A'
  });
});

// Harmony Push Buttons
const harmony = ['red', 'green', 'blue', 'yellow', 'white'];
harmony.forEach(color => {
  products.push({
    id: 'harmony_' + color,
    name: 'Schneider Harmony Push Button (' + color.charAt(0).toUpperCase() + color.slice(1) + ')',
    brand: 'Schneider',
    category: 'Push Buttons & Switches',
    model: 'Harmony ' + color,
    description: '22mm modular push button, ' + color + '.',
    image: '/images/harmony_push_button.jpg',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Signaling',
    mounting: '22mm panel',
    auxiliary: 'N/A'
  });
});

let dataPath = path.join(__dirname, '../src/data.js');
let content = fs.readFileSync(dataPath, 'utf8');

let productsString = products.map(p => JSON.stringify(p, null, 2)).join(',\n  ') + '\n];\n';

// Find the last closing bracket of the products array and replace it with the new products
if (content.endsWith('];\n')) {
  content = content.replace(/\];\n$/, ',\n  ' + productsString);
} else if (content.endsWith('];')) {
  content = content.replace(/\];$/, ',\n  ' + productsString);
} else {
  // Try to replace the last ]; found in the file
  let lastIndex = content.lastIndexOf('];');
  if (lastIndex !== -1) {
    content = content.substring(0, lastIndex) + ',\n  ' + productsString;
  }
}

fs.writeFileSync(dataPath, content);
console.log('Appended all LC1E, LRD, LRE, Sibass, and Harmony ranges.');
