import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const noModels = ['0910', '1210', '1810', '2510', '3210'];

const newProducts = products.map(p => {
  const match = noModels.find(m => p.id === `sibass_se1d${m}`);
  if (match) {
    return {
      ...p,
      name: `Sibass NO Contactor ${match}`,
      model: `NO ${match}`,
      description: `Sibass ${match} Contactor with Normally Open (NO) Auxiliary.`,
      features: [
        `Series: Sibass Industrial NO Contactors.`,
        `Model: NO ${match} - High-efficiency contactor engineered specifically for NO auxiliary requirements.`,
        `Coil Voltages Available: 24V, 48V, 110V, 220V, 380V, 415V, and 440V AC options.`,
        `Load Capacity (AC-3): ${match.substring(0, 2)}A continuous operation rating.`,
        `Main Power Poles: 3P configuration (3 NO) utilizing high-conductivity silver alloy contacts.`,
        `Auxiliary Circuitry: Integrated 1 NO (Normally Open) contact for standard automation control loops and latching circuits.`,
        `Arc Extinguishing: Advanced internal arc chute design significantly reduces contact wear.`,
        `Installation: DIN-rail standard design allows for quick snap-on panel integration.`,
        `Application: Specifically tuned for motor control, holding circuits, and automation logic.`,
        `Durability: Robust thermoset plastic housing resists cracking and high panel temperatures.`
      ]
    };
  }
  return p;
});

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated NO Contactors names and details.');
