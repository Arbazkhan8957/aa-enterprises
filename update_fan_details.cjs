const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

productsArray = productsArray.map(p => {
  if (p.id === 'fan-ra12038abh1') {
    p.name = 'Resonance RA12038ABH1 Cooling Fan';
    p.model = 'RA12038ABH1';
    p.voltage = '110-120V AC';
    p.current = '0.14A';
    p.description = 'The Resonance RA12038ABH1 is a premium industrial-grade AC cooling fan engineered for continuous and reliable thermal management. Featuring high-precision ball bearings, it ensures an extended operational lifespan even in demanding, high-temperature environments. With its 110-120V AC operating range and robust 120x120x38mm frame, it delivers exceptional airflow and cooling efficiency for control panels, server racks, and heavy-duty electrical enclosures.';
    p.features = [
      'Model: RA12038ABH1',
      'Bearing System: High-precision Ball Bearing',
      'Operating Voltage: 110-120V AC (50/60Hz)',
      'Current Draw: 0.14A for optimal efficiency',
      'Housing: Rugged, heat-resistant composite frame',
      'Lifespan: Extended continuous operational life',
      'Certifications: CE Certified for safety compliance'
    ];
  }
  if (p.id === 'fan-ra12038abhl') {
    p.name = 'Resonance RA12038ABHL Cooling Fan';
    p.model = 'RA12038ABHL';
    p.voltage = '220-240V AC';
    p.current = '0.14A';
    p.description = 'The Resonance RA12038ABHL is a heavy-duty 220-240V AC cooling fan designed for optimal heat dissipation in industrial control systems and automated machinery. Equipped with a superior ball bearing mechanism, it guarantees minimal friction and maximum longevity. Its standard 120x38mm form factor makes it an ideal drop-in replacement or upgrade for panels requiring powerful and consistent airflow.';
    p.features = [
      'Model: RA12038ABHL',
      'Bearing System: High-precision Ball Bearing',
      'Operating Voltage: 220-240V AC (50/60Hz)',
      'Current Draw: 0.14A for optimal efficiency',
      'Housing: Rugged, heat-resistant composite frame',
      'Lifespan: Extended continuous operational life',
      'Certifications: CE Certified for safety compliance'
    ];
  }
  if (p.id === 'fan-ra12038asl') {
    p.id = 'fan-ra12038asl1';
    p.name = 'Resonance RA12038ASL1 Cooling Fan';
    p.model = 'RA12038ASL1';
    p.voltage = '110-120V AC';
    p.current = '0.12A';
    p.image = '/images/ra12038asl.jpg'; // We copied the ASL1 image to this name previously
    p.description = 'The Resonance RA12038ASL1 provides reliable, cost-effective cooling for standard industrial applications. Utilizing a high-quality sleeve bearing system, it offers smooth, ultra-quiet operation suitable for noise-sensitive environments and standard control cabinets. Running on 110-120V AC and drawing just 0.12A, it strikes the perfect balance between power efficiency and thermal performance.';
    p.features = [
      'Model: RA12038ASL1',
      'Bearing System: Smooth-running Sleeve Bearing',
      'Operating Voltage: 110-120V AC (50/60Hz)',
      'Current Draw: 0.12A for maximum power savings',
      'Acoustics: Engineered for ultra-quiet operation',
      'Housing: Durable thermoplastic construction',
      'Certifications: CE Certified for safety compliance'
    ];
    p.specs[0].value = 'Sleeve Bearing';
  }
  if (p.id === 'fan-ra12038b2hsl') {
    p.name = 'Resonance RA12038B2HSL Cooling Fan';
    p.model = 'RA12038B2HSL';
    p.voltage = '220-240V AC';
    p.current = '0.14A (22W)';
    p.description = 'The Resonance RA12038B2HSL is the most powerful fan in the lineup, designed specifically for extreme thermal loads. Rated at 22W and operating at 220-240V AC, this high-speed fan utilizes premium ball bearings to push massive volumes of air. It is the ultimate cooling solution for densely packed server racks, heavy machinery drives, and high-heat industrial enclosures where thermal failure is not an option.';
    p.features = [
      'Model: RA12038B2HSL',
      'Bearing System: Heavy-duty Ball Bearing',
      'Operating Voltage: 220-240V AC (50/60Hz)',
      'Power Rating: High-performance 22W motor (0.14A)',
      'Airflow: Maximum CFM output for extreme cooling',
      'Housing: Rugged, heat-resistant composite frame',
      'Certifications: CE Certified for safety compliance'
    ];
  }
  return p;
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
fs.writeFileSync('src/data.js', data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim()));
console.log('Properly updated fan details!');
