const fs = require('fs');

const brands = [
  { "name": "Schneider", "logo": "Schneider" },
  { "name": "Omron", "logo": "OMRON" },
  { "name": "Resonance", "logo": "RESONANCE" },
  { "name": "Sibass", "logo": "SIBASS" },
  { "name": "Jigo", "logo": "JIGO" }
];

const categories = [
  { "name": "Schneider LC1E Contactors", "image": "/images/lc1e_family.jpg", "description": "Schneider Easy TeSys LC1E Contactors." },
  { "name": "Schneider LC1D Contactors", "image": "/images/lc1d09bd.png", "description": "Schneider TeSys D Contactors." },
  { "name": "Schneider LRE Overload Relays", "image": "/images/easy_tesys_protect.jpg", "description": "Schneider Easy TeSys LRE Thermal Relays." },
  { "name": "Schneider LRD Overload Relays", "image": "/images/tesys_lrd.jpg", "description": "Schneider TeSys Deca LRD Thermal Relays." },
  { "name": "Schneider Control Relays (LADN)", "image": "/images/tesys_ladn.jpg", "description": "Schneider Auxiliary Contact Blocks and Relays." },
  { "name": "Schneider Harmony Push Buttons", "image": "/images/harmony_push_button.jpg", "description": "Schneider Harmony 22mm Push Buttons." },
  { "name": "Sibass AC Contactors", "image": "/images/sibass_placeholder.jpg", "description": "Sibass Electric AC Contactors." },
  { "name": "Sibass Thermal Relays", "image": "/images/sibass_placeholder.jpg", "description": "Sibass Electric Thermal Overload Relays." },
  { "name": "Sibass LED Indicators", "image": "/images/sibass_placeholder.jpg", "description": "Sibass 22.5mm LED Indicating Lamps." },
  { "name": "Sibass Push Buttons", "image": "/images/sibass_placeholder.jpg", "description": "Sibass 22.5mm Push Buttons." },
  { "name": "Sibass Proximity Sensors", "image": "/images/sensors.png", "description": "Sibass Inductive Proximity Sensors." },
  { "name": "Sibass Enclosures", "image": "/images/enclosures.png", "description": "Sibass Electro MT BOC Casting Boxes." },
  { "name": "Jigo Wiring Accessories", "image": "/images/jigo_accessories.png", "description": "Jigo Cable Ties, Lugs, Glands, Connectors." },
  { "name": "Jigo Tower Lights", "image": "/images/jigo_lights.png", "description": "Jigo Industrial Warning Tower Lights." },
  { "name": "Jigo Limit Switches", "image": "/images/limit_switch_jigo.png", "description": "Jigo Industrial Limit Switches." },
  { "name": "Omron Limit Switches", "image": "/images/limit_switch_omron.png", "description": "Omron Precision Limit Switches." },
  { "name": "Resonance Cooling Fans", "image": "/images/cooling_fan_resonance.png", "description": "Resonance AC Axial Cooling Fans." },
  { "name": "Bharat Plugs & Sockets", "image": "/images/plug_socket_bharat.png", "description": "Bharat Industrial Heavy Duty Plugs & Sockets." }
];

let products = [];

// 1. LC1E
const lc1e_models = [
  {m: '0601', c: '6A', a: '1NC'}, {m: '0610', c: '6A', a: '1NO'},
  {m: '0901', c: '9A', a: '1NC'}, {m: '0910', c: '9A', a: '1NO'},
  {m: '1201', c: '12A', a: '1NC'}, {m: '1210', c: '12A', a: '1NO'},
  {m: '1801', c: '18A', a: '1NC'}, {m: '1810', c: '18A', a: '1NO'},
  {m: '2501', c: '25A', a: '1NC'}, {m: '2510', c: '25A', a: '1NO'},
  {m: '3201', c: '32A', a: '1NC'}, {m: '3210', c: '32A', a: '1NO'},
  {m: '3801', c: '38A', a: '1NC'}, {m: '3810', c: '38A', a: '1NO'},
  {m: '40B01', c: '40A', a: '1NC'}, {m: '40B10', c: '40A', a: '1NO'},
  {m: '40', c: '40A', a: '1NO + 1NC'}, {m: '50', c: '50A', a: '1NO + 1NC'},
  {m: '65', c: '65A', a: '1NO + 1NC'}, {m: '80', c: '80A', a: '1NO + 1NC'},
  {m: '95', c: '95A', a: '1NO + 1NC'}, {m: '120', c: '120A', a: '1NO + 1NC'},
  {m: '160', c: '160A', a: '1NO + 1NC'}, {m: '200', c: '200A', a: '1NO + 1NC'},
  {m: '250', c: '250A', a: '1NO + 1NC'}, {m: '300', c: '300A', a: '1NO + 1NC'},
  {m: '400', c: '400A', a: '1NO + 1NC'}, {m: '500', c: '500A', a: '1NO + 1NC'},
  {m: '630', c: '630A', a: '1NO + 1NC'}
];
lc1e_models.forEach(mod => {
  products.push({
    id: 'lc1e' + mod.m.toLowerCase(),
    name: 'Schneider Electric Easy TeSys LC1E' + mod.m,
    brand: 'Schneider',
    category: 'Schneider LC1E Contactors',
    model: 'LC1E' + mod.m,
    description: 'Schneider Electric Easy TeSys LC1E' + mod.m + ' is a 3-pole industrial contactor designed for reliable AC-3 motor control and switching applications.',
    image: '/images/temp_s-lc1e-series.png',
    voltage: 'Standard',
    current: mod.c,
    poles: '3P',
    mainContact: '3NO',
    application: 'Motor control',
    mounting: 'Panel/DIN rail',
    auxiliary: mod.a
  });
});

// 2. LC1D
const lc1d_models = ['09', '12', '18', '25', '32', '38', '40', '50', '65', '80', '95', '115', '150'];
lc1d_models.forEach(m => {
  let img = `/images/lc1d${m}bd.png`;
  if (parseInt(m) >= 40) {
    img = `/images/lc1d${m}_billboard.jpg`;
  }
  products.push({
    id: 'lc1d' + m,
    name: 'Schneider Electric TeSys D LC1D' + m,
    brand: 'Schneider',
    category: 'Schneider LC1D Contactors',
    model: 'LC1D' + m,
    description: 'TeSys D LC1D' + m + ' contactor for motor control.',
    image: img,
    voltage: 'Select required voltage',
    current: m + 'A',
    poles: '3P',
    mainContact: '3 NO',
    application: 'AC-3 Motor Control',
    mounting: 'Panel/DIN-rail',
    auxiliary: 'NO/NC'
  });
});

// 3. Sibass Contactors
const sibass_c = ['09', '12', '18', '25', '32', '40', '50', '65', '80', '95'];
sibass_c.forEach(m => {
  products.push({
    id: 'sibass_sc' + m,
    name: 'Sibass Electric AC Contactor SC-' + m,
    brand: 'Sibass',
    category: 'Sibass AC Contactors',
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

// 4. LRE
for (let i = 1; i <= 35; i++) {
  let range = i.toString().padStart(2, '0');
  products.push({
    id: 'lre' + range,
    name: 'Schneider Easy TeSys Protect LRE' + range,
    brand: 'Schneider',
    category: 'Schneider LRE Overload Relays',
    model: 'LRE' + range,
    description: 'Schneider Easy TeSys Protect Thermal Overload Relay LRE' + range + ' for motor protection.',
    image: '/images/temp_s-overload-relay.png',
    voltage: 'Standard',
    current: 'Range dependent',
    poles: '3P',
    mainContact: 'N/A',
    application: 'Motor Protection',
    mounting: 'Contactor Direct',
    auxiliary: '1NO+1NC'
  });
}

// 5. LRD
for (let i = 1; i <= 35; i++) {
  let range = i.toString().padStart(2, '0');
  products.push({
    id: 'lrd' + range,
    name: 'Schneider TeSys Deca Thermal Overload Relay LRD' + range,
    brand: 'Schneider',
    category: 'Schneider LRD Overload Relays',
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
}

// 6. Sibass Relays
sibass_c.forEach(m => {
  products.push({
    id: 'sibass_sr' + m,
    name: 'Sibass Electric Thermal Relay SR-' + m,
    brand: 'Sibass',
    category: 'Sibass Thermal Relays',
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

// 7. LADN
const ladn_ranges = ['11', '22', '20', '02', '31', '13', '40', '04'];
ladn_ranges.forEach(range => {
  products.push({
    id: 'ladn' + range,
    name: 'Schneider TeSys Deca Auxiliary Contact LADN' + range,
    brand: 'Schneider',
    category: 'Schneider Control Relays (LADN)',
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

products.push({
    id: 'tesys-ctrl',
    name: 'Schneider Easy TeSys Control Relay',
    brand: 'Schneider',
    category: 'Schneider Control Relays (LADN)',
    model: 'Relay',
    description: 'Easy TeSys Control Relay for automation.',
    image: '/images/temp_s-control-relay.png',
    voltage: 'Standard',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Industrial',
    mounting: 'N/A',
    auxiliary: 'N/A'
});

// 8. Jigo Wiring Accessories
const cable_ties = ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm', '500mm', '600mm'];
cable_ties.forEach(t => {
  products.push({
    id: 'jigo-tie-' + t,
    name: 'Jigo Nylon Cable Tie ' + t,
    brand: 'Jigo',
    category: 'Jigo Wiring Accessories',
    model: 'JT-' + t,
    description: 'High-quality nylon cable ties for secure wire management.',
    image: '/images/temp_jigo-cable-ties.png',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Cable Management',
    mounting: 'Wrap',
    auxiliary: 'N/A'
  });
});

const lugs = ['1.5', '2.5', '4', '6', '10', '16', '25', '35', '50', '70', '95', '120', '150', '185', '240', '300', '400', '500', '630'];
lugs.forEach(l => {
  products.push({
    id: 'jigo-lug-' + l.replace('.', '_'),
    name: 'Jigo Copper Ring Lug ' + l + ' sqmm',
    brand: 'Jigo',
    category: 'Jigo Wiring Accessories',
    model: 'JL-R' + l,
    description: 'Heavy duty copper ring terminal lug.',
    image: '/images/temp_jigo-lugs.png',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Wire Termination',
    mounting: 'Crimping',
    auxiliary: 'N/A'
  });
});

const glands = ['PG7', 'PG9', 'PG11', 'PG13.5', 'PG16', 'PG21', 'PG29', 'PG36', 'PG42', 'PG48', 'M12', 'M16', 'M20', 'M25', 'M32', 'M40', 'M50', 'M63'];
glands.forEach(g => {
  products.push({
    id: 'jigo-gland-' + g.replace('.', '_').toLowerCase(),
    name: 'Jigo Cable Gland ' + g,
    brand: 'Jigo',
    category: 'Jigo Wiring Accessories',
    model: 'JG-' + g,
    description: 'Waterproof IP68 cable gland.',
    image: '/images/temp_jigo-cable-glands.png',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Cable Entry',
    mounting: 'Panel Hole',
    auxiliary: 'N/A'
  });
});

const push_conn = ['2-pin', '3-pin', '4-pin', '5-pin'];
push_conn.forEach(c => {
  products.push({
    id: 'jigo-push-conn-' + c.charAt(0),
    name: 'Jigo Push Wire Connector ' + c,
    brand: 'Jigo',
    category: 'Jigo Wiring Accessories',
    model: 'JPC-' + c.charAt(0),
    description: 'Quick connect push wire terminal block.',
    image: '/images/temp_jigo-push-connectors.png',
    voltage: '400V',
    current: '32A',
    poles: c,
    mainContact: 'N/A',
    application: 'Wire Splicing',
    mounting: 'Inline',
    auxiliary: 'N/A'
  });
});

// 9. Indicators & Tower Lights
const sibass_led = ['Red', 'Green', 'Yellow', 'Blue', 'White'];
sibass_led.forEach(c => {
  products.push({
    id: 'sibass_led_' + c.toLowerCase(),
    name: 'Sibass 22.5mm LED Indicator ' + c,
    brand: 'Sibass',
    category: 'Sibass LED Indicators',
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

const tower = ['Red', 'Green', 'Amber', 'Blue', 'Multi-color'];
tower.forEach(c => {
  let img = '/images/jigo_lights.png';
  if (c === 'Red') img = '/images/temp_jigo-tower-red.png';
  if (c === 'Green') img = '/images/temp_jigo-tower-green.png';
  products.push({
    id: 'jigo-tower-' + c.toLowerCase().split('-')[0],
    name: 'Jigo Tower Light ' + c,
    brand: 'Jigo',
    category: 'Jigo Tower Lights',
    model: 'JTL-' + c.charAt(0),
    description: 'Industrial warning tower light stack.',
    image: img,
    voltage: '24V DC',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Machine Status',
    mounting: 'Base Mount',
    auxiliary: 'N/A'
  });
});

// 10. Push Buttons
const harmony = ['red', 'green', 'blue', 'yellow', 'white', 'black'];
harmony.forEach(color => {
  products.push({
    id: 'harmony_' + color,
    name: 'Schneider Harmony Push Button (' + color.charAt(0).toUpperCase() + color.slice(1) + ')',
    brand: 'Schneider',
    category: 'Schneider Harmony Push Buttons',
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
products.push({
  id: 'harmony_estop',
  name: 'Schneider Harmony Mushroom E-Stop',
  brand: 'Schneider',
  category: 'Schneider Harmony Push Buttons',
  model: 'Harmony E-Stop',
  description: 'Emergency stop mushroom push button.',
  image: '/images/temp_s-push-button-stayput.png',
  voltage: 'N/A',
  current: 'N/A',
  poles: 'N/A',
  mainContact: 'N/A',
  application: 'Safety Control',
  mounting: '22mm panel',
  auxiliary: 'N/A'
});

const sibass_pb = ['Red Flush', 'Green Flush', 'Red Projecting', 'Mushroom'];
sibass_pb.forEach(p => {
  products.push({
    id: 'sibass_pb_' + p.toLowerCase().replace(' ', '_'),
    name: 'Sibass Push Button ' + p,
    brand: 'Sibass',
    category: 'Sibass Push Buttons',
    model: 'SPB-' + p.charAt(0),
    description: 'Sibass 22.5mm push button.',
    image: '/images/sibass_placeholder.jpg',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Signaling',
    mounting: '22.5mm panel',
    auxiliary: 'N/A'
  });
});

// 11. Sensors & Limit Switches
const ls_jigo = ['ME-8104', 'ME-8108', 'ME-8111', 'ME-8112', 'WLCA2'];
ls_jigo.forEach(ls => {
  products.push({
    id: 'jigo-ls-' + ls.toLowerCase(),
    name: 'Jigo Limit Switch ' + ls,
    brand: 'Jigo',
    category: 'Jigo Limit Switches',
    model: ls,
    description: 'Industrial limit switch.',
    image: '/images/limit_switch_jigo.png',
    voltage: '250V AC',
    current: '5A',
    poles: 'SPDT',
    mainContact: 'N/A',
    application: 'Position Sensing',
    mounting: 'Surface',
    auxiliary: 'N/A'
  });
});

const ls_omron = ['HL-5000', 'D4V-8108Z', 'WLCA2-2'];
ls_omron.forEach(ls => {
  products.push({
    id: 'omron-ls-' + ls.toLowerCase(),
    name: 'Omron Limit Switch ' + ls,
    brand: 'Omron',
    category: 'Omron Limit Switches',
    model: ls,
    description: 'Omron high precision limit switch.',
    image: '/images/limit_switch_omron.png',
    voltage: '250V AC',
    current: '5A',
    poles: 'SPDT',
    mainContact: 'N/A',
    application: 'Position Sensing',
    mounting: 'Surface',
    auxiliary: 'N/A'
  });
});

const sensors = ['M12 NPN', 'M12 PNP', 'M18 NPN', 'M18 PNP', 'M30 NPN', 'M30 PNP'];
sensors.forEach(s => {
  let img = '/images/sensors.png';
  if (s === 'M18 PNP') img = '/images/temp_sens-m18-pnp.png';
  products.push({
    id: 'sens-' + s.toLowerCase().replace(' ', '-'),
    name: 'Inductive Proximity Sensor ' + s,
    brand: 'Sibass',
    category: 'Sibass Proximity Sensors',
    model: s.replace(' ', '-'),
    description: 'Cylindrical inductive proximity sensor.',
    image: img,
    voltage: '10-30V DC',
    current: '200mA',
    poles: '3-wire',
    mainContact: 'N/A',
    application: 'Object Detection',
    mounting: 'Threaded',
    auxiliary: 'N/A'
  });
});

// 12. Plugs & Sockets
const plugs = ['16A 3-Pin', '16A 5-Pin', '32A 3-Pin', '32A 5-Pin', '63A 3-Pin', '63A 5-Pin'];
plugs.forEach(p => {
  products.push({
    id: 'plug-' + p.toLowerCase().replace(' ', '-'),
    name: 'Bharat Industrial Plug & Socket ' + p,
    brand: 'Jigo',
    category: 'Bharat Plugs & Sockets',
    model: 'BPS-' + p.split(' ')[0],
    description: 'Heavy duty industrial plug and socket combination.',
    image: '/images/plug_socket_bharat.png',
    voltage: '415V',
    current: p.split(' ')[0],
    poles: p.split(' ')[1],
    mainContact: 'N/A',
    application: 'Power Connection',
    mounting: 'Wall/Panel',
    auxiliary: 'N/A'
  });
});

// 13. Cooling Fans
const fans = ['4-inch AC', '6-inch AC', '8-inch AC'];
fans.forEach(f => {
  products.push({
    id: 'res-fan-' + f.charAt(0),
    name: 'Resonance Cooling Fan ' + f,
    brand: 'Resonance',
    category: 'Resonance Cooling Fans',
    model: 'RCF-' + f.charAt(0),
    description: 'Axial cooling fan for panels and cabinets.',
    image: '/images/cooling_fan_resonance.png',
    voltage: '230V AC',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Ventilation',
    mounting: 'Panel',
    auxiliary: 'N/A'
  });
});

// 14. Enclosures
const enclosures = ['100x100x50', '150x150x70', '200x200x80', '300x200x100', '400x300x120'];
enclosures.forEach(e => {
  products.push({
    id: 'enc-' + e,
    name: 'Electro MT BOC Enclosure ' + e + 'mm',
    brand: 'Sibass',
    category: 'Sibass Enclosures',
    model: 'BOC-' + e.split('x')[0],
    description: 'Industrial casting box / enclosure.',
    image: '/images/temp_enc-boc.png',
    voltage: 'N/A',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Housing',
    mounting: 'Wall',
    auxiliary: 'N/A'
  });
});

const fileContent = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';\n\n' +
                  'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
                  'export const products = ' + JSON.stringify(products, null, 2) + ';\n';

fs.writeFileSync('d:/aa-enterprises/src/data.js', fileContent);
console.log('Successfully created massive catalog with highly specific category names for sidebar!');
