import fs from 'fs';
import { brands, categories, products } from './src/data.js';

let newProducts = [];

// 1. Tower Lights
const towerLights = [
  { id: 'jigo-tower-2tier', name: 'Jigo Tower Light 2-Tier', image: '/images/jigo-jg5088-2tier.png' },
  { id: 'jigo-tower-3tier-buzzer', name: 'Jigo Tower Light 3-Tier with Buzzer', image: '/images/jigo-jg5088-3tier-buzzer.png' },
  { id: 'jigo-tower-3tier-nobuzzer', name: 'Jigo Tower Light 3-Tier without Buzzer', image: '/images/jigo-jg5088-3tier-nobuzzer.png' }
];
towerLights.forEach(tl => {
  newProducts.push({
    id: tl.id,
    name: tl.name,
    brand: 'Jigo',
    category: 'Jigo Tower Lights',
    model: tl.name,
    description: 'Industrial Warning Lights, Tower Lights, and Machine Status Indicators.',
    image: tl.image,
    voltage: '24V / 220V',
    current: 'N/A',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Industrial Warning',
    mounting: 'Base Mount',
    auxiliary: 'N/A'
  });
});

// 2. Cooling Fans
const fans = [
  { id: 'res-fan-ra17251obhl-220v', name: 'Resonance AC Axial Fan RA17251OBHL 220V', image: '/images/cooling_fan_resonance.png' },
  { id: 'res-fan-ra17251oshl-220v', name: 'Resonance AC Axial Fan RA17251OSHL 220V', image: '/images/cooling_fan_resonance.png' },
  { id: 'res-fan-ra17251obhl-110v', name: 'Resonance AC Axial Fan RA17251OBHL 110V', image: '/images/cooling_fan_resonance.png' },
  { id: 'res-fan-ra17251oshl-110v', name: 'Resonance AC Axial Fan RA17251OSHL 110V', image: '/images/cooling_fan_resonance.png' },
  { id: 'res-fan-ra17251024hbl-24v', name: 'Resonance DC Axial Fan RA17251024HBL 24V', image: '/images/cooling_fan_resonance.png' }
];
fans.forEach(f => {
  newProducts.push({
    id: f.id,
    name: f.name,
    brand: 'Resonance',
    category: 'Cooling Fans & Sockets',
    model: f.name.split(' ')[4] || f.name,
    description: 'High quality industrial cooling fan for electrical panels.',
    image: f.image,
    voltage: f.name.includes('220V') ? '220V AC' : (f.name.includes('110V') ? '110V AC' : '24V DC'),
    current: 'Standard',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Panel Cooling',
    mounting: 'Panel Mount',
    auxiliary: 'N/A'
  });
});

// 3. Heavy Duty Connectors
const hdc = [
  { id: 'jigo-hdc-10pin', name: 'Jigo Heavy Duty Connector 10-Pin', image: '/images/jigo-hdc-10pin.png' },
  { id: 'jigo-hdc-16pin', name: 'Jigo Heavy Duty Connector 16-Pin', image: '/images/jigo-hdc-16pin.png' },
  { id: 'jigo-hdc-24pin', name: 'Jigo Heavy Duty Connector 24-Pin', image: '/images/jigo-hdc-24pin.png' }
];
hdc.forEach(h => {
  newProducts.push({
    id: h.id,
    name: h.name,
    brand: 'Jigo',
    category: 'Cooling Fans & Sockets',
    model: h.name.replace('Jigo Heavy Duty Connector ', ''),
    description: 'Heavy duty plug socket for industrial connections.',
    image: h.image,
    voltage: 'Up to 500V',
    current: '16A',
    poles: h.name.includes('10-Pin') ? '10 Pin' : (h.name.includes('16-Pin') ? '16 Pin' : '24 Pin'),
    mainContact: 'N/A',
    application: 'Industrial Connection',
    mounting: 'Panel Mount',
    auxiliary: 'N/A'
  });
});

// 4. Sibass 16mm LED Indicators
const led16 = [
  { id: 'sibass-16mm-red', color: 'Red', image: '/images/sibass_led_16_red.png' },
  { id: 'sibass-16mm-green', color: 'Green', image: '/images/sibass_led_16_green.png' },
  { id: 'sibass-16mm-yellow', color: 'Yellow', image: '/images/sibass_led_16_yellow.png' },
  { id: 'sibass-16mm-blue', color: 'Blue', image: '/images/sibass_led_16_blue.png' },
  { id: 'sibass-16mm-white', color: 'White', image: '/images/sibass_led_16_white.png' }
];
led16.forEach(l => {
  newProducts.push({
    id: l.id,
    name: `Sibass 16mm LED Indicator ${l.color}`,
    brand: 'Sibass Electric',
    category: 'Sibass 16mm LED Indicators',
    model: `16mm LED ${l.color}`,
    description: `Compact 16mm panel indicator, ${l.color} color.`,
    image: l.image,
    voltage: '24V DC / 220V AC',
    current: '20mA',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Panel Indication',
    mounting: '16mm panel hole',
    auxiliary: 'N/A'
  });
});

// 5. Buzzers
const buzzers = [
  { id: 'sibass-buzzer-16', name: 'Sibass 16mm Buzzer', image: '/images/sibass_buzzer_16.png' },
  { id: 'sibass-buzzer-22', name: 'Sibass 22.5mm Buzzer', image: '/images/sibass_buzzer_22.png' }
];
buzzers.forEach(b => {
  newProducts.push({
    id: b.id,
    name: b.name,
    brand: 'Sibass Electric',
    category: 'Sibass LED Indicators',
    model: b.name.replace('Sibass ', ''),
    description: `Industrial panel buzzer for audible warning.`,
    image: b.image,
    voltage: '24V DC / 220V AC',
    current: 'Standard',
    poles: 'N/A',
    mainContact: 'N/A',
    application: 'Audible Alarm',
    mounting: b.name.includes('16mm') ? '16mm panel hole' : '22.5mm panel hole',
    auxiliary: 'N/A'
  });
});

// Check if these products already exist, don't add duplicates
const existingIds = new Set(products.map(p => p.id));
const productsToAdd = newProducts.filter(p => !existingIds.has(p.id));

products.push(...productsToAdd);

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log(`Successfully added ${productsToAdd.length} missing items!`);
