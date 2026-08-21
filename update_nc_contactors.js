import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const ncModels = ['0901', '1201', '1801', '2501', '3201'];

const newProducts = products.map(p => {
  const match = ncModels.find(m => p.id === `sibass_se1d${m}`);
  if (match) {
    return {
      ...p,
      name: `Sibass NC Contactor ${match}`,
      model: `NC ${match}`,
      description: `Sibass ${match} Contactor with Normally Closed (NC) Auxiliary.`,
      features: [
        `Series: Sibass Industrial NC Contactors.`,
        `Model: NC ${match} - High-efficiency contactor engineered specifically for NC auxiliary requirements.`,
        `Coil Voltages Available: 24V, 48V, 110V, 220V, 380V, 415V, and 440V AC options.`,
        `Load Capacity (AC-3): ${match.substring(0, 2)}A continuous operation rating.`,
        `Main Power Poles: 3P configuration (3 NO) utilizing high-conductivity silver alloy contacts.`,
        `Auxiliary Circuitry: Integrated 1 NC (Normally Closed) contact for safety and interlock circuits.`,
        `Arc Extinguishing: Advanced internal arc chute design significantly reduces contact wear.`,
        `Installation: DIN-rail standard design allows for quick snap-on panel integration.`,
        `Application: Specifically tuned for motor control, safety interlocks, and automation logic.`,
        `Durability: Robust thermoset plastic housing resists cracking and high panel temperatures.`
      ]
    };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated NC Contactors names and details.');
