const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'Schneider', logo: 'Schneider' },
  { name: 'Omron', logo: 'OMRON' },
  { name: 'Resonance', logo: 'RESONANCE' },
  { name: 'Sibass', logo: 'SIBASS' },
  { name: 'Jigo', logo: 'JIGO' }
];

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
  {m: '40*', c: '40A', a: '1NO + 1NC', base: '40'},
  {m: '50*', c: '50A', a: '1NO + 1NC', base: '50'},
  {m: '65*', c: '65A', a: '1NO + 1NC', base: '65'},
  {m: '80*', c: '80A', a: '1NO + 1NC', base: '80'},
  {m: '95*', c: '95A', a: '1NO + 1NC', base: '95'},
  {m: '120*', c: '120A', a: '1NO + 1NC', base: '120'},
  {m: '160*', c: '160A', a: '1NO + 1NC', base: '160'},
  {m: '200*', c: '200A', a: '1NO + 1NC', base: '200'},
  {m: '250*', c: '250A', a: '1NO + 1NC', base: '250'},
  {m: '300*', c: '300A', a: '1NO + 1NC', base: '300'},
  {m: '400*', c: '400A', a: '1NO + 1NC', base: '400'},
  {m: '500*', c: '500A', a: '1NO + 1NC', base: '500'},
  {m: '630*', c: '630A', a: '1NO + 1NC', base: '630'}
];

lc1e_models.forEach(mod => {
  let modelStr = mod.m.replace('*', '');
  products.push({
    id: 'lc1e' + modelStr.toLowerCase(),
    name: 'Schneider Electric Easy TeSys LC1E' + modelStr,
    brand: 'Schneider',
    category: 'LC1E EASY TESYS CONTACTORS',
    model: mod.b ? 'LC1E' + modelStr : 'LC1E' + mod.m,
    description: 'Schneider Electric Easy TeSys LC1E' + mod.m + ' is a 3-pole industrial contactor designed for reliable AC-3 motor control and switching applications. It is suitable for electrical control panels, pumps, compressors, fans, conveyors, HVAC systems, machinery and industrial automation. The contactor provides dependable switching performance, simple installation and compatibility with Easy TeSys motor-starter components.',
    image: '/images/lc1e_family.jpg',
    voltage: 'exact suffix dependent',
    current: mod.c,
    poles: '3P',
    mainContact: '3NO',
    application: 'Motor control / industrial switching',
    mounting: 'panel/DIN rail depending on frame',
    auxiliary: mod.a
  });
});

products.push({
  id: 'gz1e01',
  name: 'Schneider Easy TeSys Power GZ1E Motor Circuit Breaker',
  brand: 'Schneider',
  category: 'Easy TeSys Power',
  model: 'GZ1E',
  description: 'GZ1E motor circuit breakers are 3-pole thermal-magnetic circuit breakers designed for the control and protection of motors up to 15kW.',
  image: '/images/easy_tesys_power.jpg',
  voltage: '415V',
  current: 'Up to 32A',
  poles: '3P',
  mainContact: 'N/A',
  application: 'Motor Protection',
  mounting: 'DIN rail',
  auxiliary: 'Optional'
});

products.push({
  id: 'easy_tesys_control',
  name: 'Schneider Easy TeSys Control Relay',
  brand: 'Schneider',
  category: 'Easy TeSys Control Relay',
  model: 'Easy TeSys Control Relay',
  description: 'Control relays offering three combinations of contact types (2NO/2NC, 3NO/1NC, 4NO), with 50 Hz or 60 Hz compatible coils.',
  image: '/images/easy_tesys_control_relay.jpg',
  voltage: 'Coil dependent',
  current: 'N/A',
  poles: 'N/A',
  mainContact: '2NO/2NC, 3NO/1NC, 4NO',
  application: 'Control Circuit',
  mounting: 'DIN rail',
  auxiliary: 'Built-in'
});

products.push({
  id: 'easy_tesys_protect',
  name: 'Schneider Easy TeSys Protect Thermal Relay',
  brand: 'Schneider',
  category: 'Easy TeSys Protect',
  model: 'Easy TeSys Protect',
  description: 'Thermal protection relays from 0.1 to 630 A, compatible with Easy TeSys Control contactors.',
  image: '/images/easy_tesys_protect.jpg',
  voltage: 'N/A',
  current: '0.1A to 630A',
  poles: '3P',
  mainContact: 'N/A',
  application: 'Motor Overload Protection',
  mounting: 'Direct to Contactor',
  auxiliary: '1NO+1NC'
});

const lr_ranges = ['01','02','03','04','05','06','07','08','10','12','14','16','21','22','32','35'];

// LRE
lr_ranges.forEach(range => {
  products.push({
    id: 'lre' + range,
    name: 'Schneider Easy TeSys Protect LRE' + range,
    brand: 'Schneider',
    category: 'Easy TeSys Protect',
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
    category: 'TeSys Deca Overload Relays (LRD)',
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
    category: 'TeSys Deca Auxiliary Contacts (LADN)',
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

// Add LC1D models based on previous knowledge
const lc1d_models = ['09', '12', '18', '25', '32', '38', '40', '50', '65', '80', '95', '115', '150'];
lc1d_models.forEach(m => {
  products.push({
    id: 'lc1d' + m,
    name: 'Schneider Electric TeSys D LC1D' + m,
    brand: 'Schneider',
    category: 'Schneider Switchgear & Control',
    model: 'LC1D' + m,
    description: 'TeSys D LC1D' + m + ' contactor for motor control.',
    image: parseInt(m) >= 40 ? `/images/lc1d${m}_billboard.jpg` : `/images/lc1d${m}bd.png`,
    voltage: 'Select required voltage',
    current: m + 'A',
    poles: '3P',
    mainContact: '3 NO',
    application: 'AC-3 Motor Control',
    mounting: 'Panel/DIN-rail depending on model',
    auxiliary: 'NO/NC'
  });
});

// Harmony
const harmony = ['red', 'green', 'blue', 'yellow', 'white'];
harmony.forEach(color => {
  products.push({
    id: 'harmony_' + color,
    name: 'Schneider Harmony Push Button (' + color.charAt(0).toUpperCase() + color.slice(1) + ')',
    brand: 'Schneider',
    category: 'Harmony Push Buttons',
    model: 'Harmony ' + color,
    description: '22mm modular push button, ' + color + '.',
    image: '/images/harmony_pb_' + color + '.jpg',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Signaling',
    mounting: '22mm panel',
    auxiliary: 'N/A'
  });
});

const categories = [
  { name: 'LC1E EASY TESYS CONTACTORS', image: '/images/lc1e_family.jpg', description: 'Easy TeSys 3-pole contactors from 6A to 630A.' },
  { name: 'Easy TeSys Power', image: '/images/easy_tesys_power.jpg', description: 'Thermal-magnetic motor protection circuit breakers up to 32A/15kW (GZ1E).' },
  { name: 'Easy TeSys Control Relay', image: '/images/easy_tesys_control_relay.jpg', description: 'Control relays offering combinations of 2NO/2NC, 3NO/1NC, and 4NO contacts.' },
  { name: 'Easy TeSys Protect', image: '/images/easy_tesys_protect.jpg', description: 'Thermal relays up to 630A for overload protection of motors.' },
  { name: 'TeSys Deca Overload Relays (LRD)', image: '/images/tesys_lrd.jpg', description: 'Thermal overload relays for motor protection up to 140A.' },
  { name: 'TeSys Deca Auxiliary Contacts (LADN)', image: '/images/tesys_ladn.jpg', description: 'Instantaneous auxiliary contact blocks for TeSys contactors.' },
  { name: 'Harmony Push Buttons', image: '/images/harmony_push_button.jpg', description: '22mm modular plastic and metal push buttons.' },
  { name: 'Harmony Emergency Stop', image: '/images/harmony_estop.jpg', description: 'Mushroom head emergency stop push buttons.' },
  { name: 'Sibass 16mm LED Indicators', image: '/images/sibass_placeholder.jpg', description: 'Compact 16mm panel indicators for industrial boards.' },
  { name: 'Sibass Cooling Fans', image: '/images/sibass_placeholder.jpg', description: 'High performance AC and DC cooling fans for electrical panels.' },
  { name: 'Sibass Contactors', image: '/images/sibass_placeholder.jpg', description: 'Sibass Electric AC Contactors for motor control.' },
  { name: 'Sibass Relays', image: '/images/sibass_placeholder.jpg', description: 'Sibass Electric Thermal Overload Relays.' },
  { name: 'Sibass LED Indicators', image: '/images/sibass_placeholder.jpg', description: '22.5mm LED Indicating Lamps in all colors.' },
  { name: 'Sibass Float Switches', image: '/images/sibass_placeholder.jpg', description: 'Water level controllers FS1, FS2, FS3.' },
  { name: 'Sibass Sirens', image: '/images/sibass_placeholder.jpg', description: 'Industrial motor sirens (0.5km to 5km range).' },
  { name: 'Sibass Push Buttons', image: '/images/sibass_placeholder.jpg', description: 'Flush, projecting and mushroom push buttons.' },
  { name: 'Sibass Industrial Plug & Sockets', image: '/images/sibass_placeholder.jpg', description: 'Industrial plugs, sockets and connectors.' },
  { name: 'Schneider Switchgear & Control', image: '/images/schneider_group.png', description: 'TeSys Contactors, Motor Starters, and Industrial Push Buttons.' },
  { name: 'Schneider Relays & Timers', image: '/images/schneider_relays.png', description: 'Control Relays, Solid State Relays, and Digital Timers.' },
  { name: 'Jigo Wiring Accessories', image: '/images/jigo_accessories.png', description: 'Nylon Cable Ties, Ring Terminal Lugs, Cable Glands, and Connectors.' },
  { name: 'Jigo Tower Lights', image: '/images/jigo_lights.png', description: 'Industrial Warning Lights, Tower Lights, and Machine Status Indicators.' },
  { name: 'Sensors & Limit Switches', image: '/images/sensors.png', description: 'M18 Proximity Sensors, Limit Switches, and Photoelectric Sensors.' },
  { name: 'Industrial Enclosures & Castings', image: '/images/enclosures.png', description: 'Electro MT BOC Casting Boxes, COB Series Pendants, and Wire Mesh Guards.' },
  { name: 'Cooling Fans & Sockets', image: '/images/cooling_fan_resonance.png', description: 'Industrial Axial Cooling Fans and Heavy Duty Plug Sockets.' }
];

let fileContent = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                  'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                  'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, '../src/data.js'), fileContent);
console.log('Restored all data successfully.');
