import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const colors = [
  { name: 'Red', code: 'R' },
  { name: 'Green', code: 'G' },
  { name: 'Yellow', code: 'Y' },
  { name: 'Blue', code: 'B' },
  { name: 'White', code: 'W' }
];

// Helper to generate 8-10 lines of features based on product data
function generateFeatures(product) {
  let f = [];
  if (product.category === 'Sibass AC Contactors') {
    f = [
      `Industrial-grade AC Contactor designed for heavy-duty motor control.`,
      `Model: ${product.model} with high reliability and durability.`,
      `Voltage: Standard coil voltage optimized for industrial use.`,
      `Current Rating: Rated for ${product.current} continuous operation.`,
      `Poles: ${product.poles} main pole configuration (${product.mainContact}).`,
      `Auxiliary Contacts: Built-in ${product.auxiliary} for control circuitry.`,
      `Mounting: Easy ${product.mounting} installation.`,
      `Application: Perfect for ${product.application} and automation panels.`,
      `Compact design saves valuable space in control cabinets.`,
      `Compliant with international electrical standards for safety.`
    ];
  } else if (product.category === 'Sibass LED Indicators' && product.model.startsWith('LED')) {
    f = [
      `High-visibility LED indicator for industrial control panels.`,
      `Operating Voltage: ${product.voltage} for versatile application.`,
      `Mounting size: ${product.mounting}.`,
      `Illumination: Super bright ${product.name.split(' ').pop()} LED for clear status indication.`,
      `Long-lasting LED technology guarantees extended operational life.`,
      `Low power consumption minimizes energy usage in large panels.`,
      `Robust construction withstands industrial vibrations.`,
      `Application: Ideal for ${product.application}.`,
      `IP rating ensures protection against dust and moisture on panel front.`,
      `Easy installation with secure locking nut mechanism.`
    ];
  } else if (product.category === 'Sibass LED Indicators' && product.model.startsWith('BUZ')) {
    f = [
      `High-decibel electronic panel buzzer for audible alerts.`,
      `Operating Voltage: ${product.voltage} for wide compatibility.`,
      `Mounting size: ${product.mounting}.`,
      `Sound: Continuous clear tone for immediate operator awareness.`,
      `Compact form factor integrates seamlessly into control panels.`,
      `Durable housing designed for harsh industrial environments.`,
      `Application: Essential for ${product.application} and fault indication.`,
      `Low current draw for efficient operation.`,
      `Simple two-wire connection for rapid installation.`,
      `Designed to meet strict safety and compliance standards.`
    ];
  } else if (product.category === 'Sibass LED Indicators' && product.model.startsWith('V-IND')) {
    f = [
      `Digital Voltmeter Indicator for precise voltage monitoring.`,
      `Display: Clear LED digital readout for instant visibility.`,
      `Measurement Range: ${product.voltage}.`,
      `Mounting size: ${product.mounting}.`,
      `Accuracy: High precision measurement for critical circuits.`,
      `Compact integrated design replaces bulky traditional analog meters.`,
      `Application: Perfect for ${product.application} on mains panels.`,
      `Rugged build withstands industrial panel vibration.`,
      `Easy reading from a distance in varying lighting conditions.`,
      `Simple installation directly into standard push-button cutouts.`
    ];
  } else if (product.category === 'Sibass LED Indicators' && product.model.startsWith('VA-IND')) {
    f = [
      `Dual Display Digital Voltage and Current Indicator.`,
      `Display: High-contrast dual LED readout (Volts and Amps simultaneously).`,
      `Voltage Range: ${product.voltage}.`,
      `Current Range: ${product.current} (via included CT).`,
      `Mounting size: ${product.mounting}.`,
      `Accuracy: High precision for comprehensive power monitoring.`,
      `Application: Ideal for ${product.application} in compact spaces.`,
      `Eliminates the need for two separate panel meters.`,
      `Current transformer included for safe, isolated measurement.`,
      `Robust industrial construction for long-term reliability.`
    ];
  } else if (product.brand === 'Sibass') {
    // Generic fallback for other Sibass items
    f = [
      `High-quality industrial component by Sibass Electric.`,
      `Model: ${product.model || 'Standard'}.`,
      `Voltage Rating: ${product.voltage || 'Standard'}.`,
      `Current Rating: ${product.current || 'Standard'}.`,
      `Mounting: ${product.mounting || 'Standard'}.`,
      `Application: Designed for ${product.application || 'industrial use'}.`,
      `Manufactured with premium materials for durability.`,
      `Tested for reliability under heavy industrial loads.`,
      `Compact footprint for optimized panel layouts.`,
      `Meets rigorous safety and performance standards.`
    ];
  }
  return f;
}

const newProducts = [];

for (const p of products) {
  // Skip the generic volt/amp indicators, we're replacing them
  if (p.id === 'sibass_volt_ind_22' || p.id === 'sibass_va_ind_22') {
    continue;
  }
  
  const modified = { ...p };
  if (p.brand === 'Sibass') {
    modified.features = generateFeatures(p);
  }
  newProducts.push(modified);
}

// Add the 5 color variants for Volt Indicator
colors.forEach(c => {
  const vInd = {
    "id": `sibass_volt_ind_22_${c.name.toLowerCase()}`,
    "name": `Sibass 22.5mm Digital Voltmeter Indicator ${c.name}`,
    "brand": "Sibass",
    "category": "Sibass LED Indicators",
    "model": `V-IND-22-${c.code}`,
    "description": `Sibass 22.5mm Digital Voltage Indicator Display - ${c.name}`,
    "image": "/images/sibass_placeholder.jpg",
    "voltage": "20-500V AC",
    "current": "N/A",
    "poles": "N/A",
    "mainContact": "N/A",
    "application": "Voltage Monitoring",
    "mounting": "22.5mm Panel",
    "auxiliary": "N/A"
  };
  vInd.features = generateFeatures(vInd);
  newProducts.push(vInd);
});

// Add the 5 color variants for Volt+Amp Indicator
colors.forEach(c => {
  const vaInd = {
    "id": `sibass_va_ind_22_${c.name.toLowerCase()}`,
    "name": `Sibass 22.5mm Volt + Amp Indicator ${c.name}`,
    "brand": "Sibass",
    "category": "Sibass LED Indicators",
    "model": `VA-IND-22-${c.code}`,
    "description": `Sibass 22.5mm Digital Voltage & Current Indicator Dual Display - ${c.name}`,
    "image": "/images/sibass_placeholder.jpg",
    "voltage": "20-500V AC",
    "current": "0-100A",
    "poles": "N/A",
    "mainContact": "N/A",
    "application": "V & A Monitoring",
    "mounting": "22.5mm Panel",
    "auxiliary": "N/A"
  };
  vaInd.features = generateFeatures(vaInd);
  newProducts.push(vaInd);
});

// Generate new file content
const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated data.js');
