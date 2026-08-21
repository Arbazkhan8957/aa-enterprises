const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'Schneider', logo: 'Schneider' },
  { name: 'Omron', logo: 'OMRON' },
  { name: 'Resonance', logo: 'RESONANCE' },
  { name: 'Sibass', logo: 'SIBASS' },
  { name: 'Jigo', logo: 'JIGO' }
];

const categories = [
  { name: 'TeSys Contactors', image: '/images/lc1e_family.jpg', description: 'Industrial contactors for motor control.' },
  { name: 'Thermal Overload Relays', image: '/images/tesys_lrd.jpg', description: 'Protection relays for motors.' },
  { name: 'Control Relays', image: '/images/easy_tesys_control_relay.jpg', description: 'Relays for control circuits.' },
  { name: 'Push Buttons & Switches', image: '/images/harmony_push_button.jpg', description: 'Industrial command and signaling devices.' },
  { name: 'Sensors & Limit Switches', image: '/images/sensors.png', description: 'Proximity sensors and limit switches.' },
  { name: 'Wiring Accessories', image: '/images/jigo_accessories.png', description: 'Cable ties, lugs, glands and connectors.' },
  { name: 'Cooling Fans', image: '/images/cooling_fan_resonance.png', description: 'AC and DC cooling fans.' },
  { name: 'Enclosures', image: '/images/enclosures.png', description: 'Industrial casting boxes and enclosures.' },
  { name: 'Indicators & Tower Lights', image: '/images/jigo_lights.png', description: 'Panel indicators and tower lights.' },
  { name: 'Plugs & Sockets', image: '/images/plug_socket_bharat.png', description: 'Industrial heavy duty plugs and sockets.' }
];

const productData = [
  { id: 'fan-res', name: 'Resonance Cooling Fan', image: 'cooling_fan_resonance.png', brand: 'Resonance', cat: 'Cooling Fans', desc: 'Industrial Axial Cooling Fan.' },
  { id: 'tesys-ctrl', name: 'Schneider Easy TeSys Control Relay', image: 'easy_tesys_control_relay.jpg', brand: 'Schneider', cat: 'Control Relays', desc: 'Easy TeSys Control Relay for automation.' },
  { id: 'gz1e', name: 'Schneider Easy TeSys Power (GZ1E)', image: 'easy_tesys_power.jpg', brand: 'Schneider', cat: 'Thermal Overload Relays', desc: 'Motor circuit breaker.' },
  { id: 'lre', name: 'Schneider Easy TeSys Protect LRE', image: 'easy_tesys_protect.jpg', brand: 'Schneider', cat: 'Thermal Overload Relays', desc: 'Thermal Overload Relay LRE Series.' },
  { id: 'enc', name: 'Electro MT BOC Enclosures', image: 'enclosures.png', brand: 'Sibass', cat: 'Enclosures', desc: 'Industrial Casting Boxes.' },
  { id: 'pb-estop', name: 'Schneider Harmony Emergency Stop', image: 'harmony_estop.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: 'Mushroom head emergency stop.' },
  { id: 'pb-blue', name: 'Schneider Harmony Push Button (Blue)', image: 'harmony_pb_blue.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: '22mm modular push button, blue.' },
  { id: 'pb-green', name: 'Schneider Harmony Push Button (Green)', image: 'harmony_pb_green.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: '22mm modular push button, green.' },
  { id: 'pb-red', name: 'Schneider Harmony Push Button (Red)', image: 'harmony_pb_red.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: '22mm modular push button, red.' },
  { id: 'pb-white', name: 'Schneider Harmony Push Button (White)', image: 'harmony_pb_white.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: '22mm modular push button, white.' },
  { id: 'pb-yellow', name: 'Schneider Harmony Push Button (Yellow)', image: 'harmony_pb_yellow.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: '22mm modular push button, yellow.' },
  { id: 'pb-series', name: 'Schneider Harmony Push Button Series', image: 'harmony_push_button.jpg', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: 'Complete range of Harmony push buttons.' },
  { id: 'jigo-acc', name: 'Jigo Wiring Accessories', image: 'jigo_accessories.png', brand: 'Jigo', cat: 'Wiring Accessories', desc: 'Various wiring accessories.' },
  { id: 'jigo-lights', name: 'Jigo Tower Lights', image: 'jigo_lights.png', brand: 'Jigo', cat: 'Indicators & Tower Lights', desc: 'Industrial tower lights.' },
  { id: 'lc1d09', name: 'Schneider TeSys D LC1D09', image: 'lc1d09bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '9A 3-pole contactor.' },
  { id: 'lc1d115', name: 'Schneider TeSys D LC1D115', image: 'lc1d115_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '115A 3-pole contactor.' },
  { id: 'lc1d12', name: 'Schneider TeSys D LC1D12', image: 'lc1d12bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '12A 3-pole contactor.' },
  { id: 'lc1d150', name: 'Schneider TeSys D LC1D150', image: 'lc1d150_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '150A 3-pole contactor.' },
  { id: 'lc1d18', name: 'Schneider TeSys D LC1D18', image: 'lc1d18bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '18A 3-pole contactor.' },
  { id: 'lc1d25', name: 'Schneider TeSys D LC1D25', image: 'lc1d25bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '25A 3-pole contactor.' },
  { id: 'lc1d32', name: 'Schneider TeSys D LC1D32', image: 'lc1d32bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '32A 3-pole contactor.' },
  { id: 'lc1d38', name: 'Schneider TeSys D LC1D38', image: 'lc1d38bd.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: '38A 3-pole contactor.' },
  { id: 'lc1d40', name: 'Schneider TeSys D LC1D40', image: 'lc1d40_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '40A 3-pole contactor.' },
  { id: 'lc1d50', name: 'Schneider TeSys D LC1D50', image: 'lc1d50_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '50A 3-pole contactor.' },
  { id: 'lc1d65', name: 'Schneider TeSys D LC1D65', image: 'lc1d65_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '65A 3-pole contactor.' },
  { id: 'lc1d80', name: 'Schneider TeSys D LC1D80', image: 'lc1d80_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '80A 3-pole contactor.' },
  { id: 'lc1d95', name: 'Schneider TeSys D LC1D95', image: 'lc1d95_billboard.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: '95A 3-pole contactor.' },
  { id: 'lc1e', name: 'Schneider Easy TeSys LC1E Series', image: 'lc1e_family.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Easy TeSys LC1E Contactor Family.' },
  { id: 'ls-jigo', name: 'Jigo Limit Switch', image: 'limit_switch_jigo.png', brand: 'Jigo', cat: 'Sensors & Limit Switches', desc: 'Industrial limit switch.' },
  { id: 'ls-omron', name: 'Omron Limit Switch', image: 'limit_switch_omron.png', brand: 'Omron', cat: 'Sensors & Limit Switches', desc: 'High precision limit switch.' },
  { id: 'plug-bharat', name: 'Bharat Industrial Plug & Socket', image: 'plug_socket_bharat.png', brand: 'Jigo', cat: 'Plugs & Sockets', desc: 'Heavy duty plug and socket.' },
  { id: 'sch-group', name: 'Schneider Switchgear Group', image: 'schneider_group.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Complete range of Schneider switchgear.' },
  { id: 'sch-relays', name: 'Schneider Relays', image: 'schneider_relays.png', brand: 'Schneider', cat: 'Control Relays', desc: 'General purpose relays.' },
  { id: 'sens-m18', name: 'M18 Proximity Sensors', image: 'sensors.png', brand: 'Omron', cat: 'Sensors & Limit Switches', desc: 'M18 inductive proximity sensors.' },
  { id: 'sibass-ph', name: 'Sibass General Products', image: 'sibass_placeholder.jpg', brand: 'Sibass', cat: 'Indicators & Tower Lights', desc: 'Sibass panel products.' },
  { id: 'temp-enc', name: 'BOC Enclosures', image: 'temp_enc-boc.png', brand: 'Sibass', cat: 'Enclosures', desc: 'BOC Casting enclosure.' },
  { id: 'temp-jigo-cg', name: 'Jigo Cable Glands', image: 'temp_jigo-cable-glands.png', brand: 'Jigo', cat: 'Wiring Accessories', desc: 'Nylon cable glands.' },
  { id: 'temp-jigo-ct', name: 'Jigo Cable Ties', image: 'temp_jigo-cable-ties.png', brand: 'Jigo', cat: 'Wiring Accessories', desc: 'Nylon cable ties.' },
  { id: 'temp-jigo-lugs', name: 'Jigo Terminal Lugs', image: 'temp_jigo-lugs.png', brand: 'Jigo', cat: 'Wiring Accessories', desc: 'Ring and pin terminal lugs.' },
  { id: 'temp-jigo-pc', name: 'Jigo Push Connectors', image: 'temp_jigo-push-connectors.png', brand: 'Jigo', cat: 'Wiring Accessories', desc: 'Quick push wire connectors.' },
  { id: 'temp-jigo-tg', name: 'Jigo Tower Light (Green)', image: 'temp_jigo-tower-green.png', brand: 'Jigo', cat: 'Indicators & Tower Lights', desc: 'Green tower light module.' },
  { id: 'temp-jigo-tr', name: 'Jigo Tower Light (Red)', image: 'temp_jigo-tower-red.png', brand: 'Jigo', cat: 'Indicators & Tower Lights', desc: 'Red tower light module.' },
  { id: 'temp-s-cr', name: 'Schneider Control Relay', image: 'temp_s-control-relay.png', brand: 'Schneider', cat: 'Control Relays', desc: 'Auxiliary control relay.' },
  { id: 'temp-s-lc1d09', name: 'Schneider TeSys D LC1D09 (Alt)', image: 'temp_s-lc1d09.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Alternative view of LC1D09.' },
  { id: 'temp-s-lc1d18', name: 'Schneider TeSys D LC1D18 (Alt)', image: 'temp_s-lc1d18.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Alternative view of LC1D18.' },
  { id: 'temp-s-lc1d32', name: 'Schneider TeSys D LC1D32 (Alt)', image: 'temp_s-lc1d32.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Alternative view of LC1D32.' },
  { id: 'temp-s-lc1e', name: 'Schneider Easy TeSys LC1E (Alt)', image: 'temp_s-lc1e-series.png', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Alternative view of LC1E series.' },
  { id: 'temp-s-or', name: 'Schneider Overload Relay', image: 'temp_s-overload-relay.png', brand: 'Schneider', cat: 'Thermal Overload Relays', desc: 'General overload relay.' },
  { id: 'temp-s-pb-sp', name: 'Schneider Stayput Push Button', image: 'temp_s-push-button-stayput.png', brand: 'Schneider', cat: 'Push Buttons & Switches', desc: 'Stayput type push button.' },
  { id: 'temp-s-ssr', name: 'Schneider Solid State Relay', image: 'temp_s-solid-state-relay.png', brand: 'Schneider', cat: 'Control Relays', desc: 'Solid state relay for fast switching.' },
  { id: 'temp-sens-pnp', name: 'M18 PNP Sensor', image: 'temp_sens-m18-pnp.png', brand: 'Omron', cat: 'Sensors & Limit Switches', desc: 'M18 PNP proximity sensor.' },
  { id: 'ladn', name: 'Schneider TeSys Deca Auxiliary Contacts LADN', image: 'tesys_ladn.jpg', brand: 'Schneider', cat: 'TeSys Contactors', desc: 'Auxiliary contact block LADN.' },
  { id: 'lrd', name: 'Schneider TeSys Deca Thermal Overload Relay LRD', image: 'tesys_lrd.jpg', brand: 'Schneider', cat: 'Thermal Overload Relays', desc: 'Thermal Overload Relay LRD Series.' }
];

const products = productData.map(p => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  category: p.cat,
  model: p.name.split(' ').pop(),
  description: p.desc,
  image: '/images/' + p.image,
  voltage: 'Standard',
  current: 'N/A',
  poles: 'N/A',
  mainContact: 'N/A',
  application: 'Industrial',
  mounting: 'N/A',
  auxiliary: 'N/A'
}));

const fileContent = 'export const brands = ' + JSON.stringify(brands, null, 2) + ';' +
'\\n\\nexport const categories = ' + JSON.stringify(categories, null, 2) + ';' +
'\\n\\nexport const products = ' + JSON.stringify(products, null, 2) + ';\\n';

fs.writeFileSync(path.join(__dirname, '../src/data.js'), fileContent);
console.log('Successfully wrote data.js');
