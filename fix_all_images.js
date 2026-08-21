import fs from 'fs';
import path from 'path';

// Read data
import { brands, categories, products } from './src/data.js';

// Get all images
const imageFiles = fs.readdirSync('./public/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let newProducts = [];
let updatedCount = 0;

// Helper to find a product by checking if the image name matches the product ID or Model
function findProductMatch(img) {
  const baseName = img.replace(/\.(png|jpg)$/, '').toLowerCase();
  
  // Exact ID match
  let match = products.find(p => p.id.toLowerCase() === baseName);
  if (match) return match;
  
  // LRE / LRD / LADN
  if (baseName.startsWith('lre') || baseName.startsWith('lrd') || baseName.startsWith('ladn')) {
    match = products.find(p => p.model && p.model.toLowerCase() === baseName);
    if (match) return match;
  }
  
  // LC1E
  if (baseName.startsWith('lc1e')) {
    match = products.find(p => p.id.toLowerCase() === baseName);
    if (match) return match;
  }
  
  // LC1D
  if (baseName.startsWith('lc1d') && baseName.endsWith('bd')) {
     const clean = baseName.replace('bd', '');
     match = products.find(p => p.id.toLowerCase() === clean);
     if (match) return match;
  }
  if (baseName.startsWith('lc1d') && baseName.endsWith('_billboard')) {
     const clean = baseName.replace('_billboard', '');
     match = products.find(p => p.id.toLowerCase() === clean);
     if (match) return match;
  }
  
  // SE1D (Sibass AC Contactors)
  if (baseName.startsWith('se1d') || baseName.startsWith('sibass_nc_')) {
    match = products.find(p => p.id.toLowerCase() === baseName || (p.model && p.model.toLowerCase() === baseName));
    if (match) return match;
  }
  
  // Harmony
  if (baseName.startsWith('harmony_pb_')) {
    const color = baseName.split('_')[2];
    match = products.find(p => p.id.toLowerCase() === `harmony_${color}`);
    if (match) return match;
  }

  // Sibass LED
  if (baseName.startsWith('sibass_led_') && !baseName.includes('16')) {
    const color = baseName.replace('sibass_led_', '');
    match = products.find(p => p.id.toLowerCase() === `sibass_led_${color}`);
    if (match) return match;
  }
  
  // Sibass Volt Indicator
  if (baseName.startsWith('sibass_volt_ind_22_')) {
    const color = baseName.replace('sibass_volt_ind_22_', '');
    match = products.find(p => p.id.toLowerCase() === `sibass_volt_ind_${color}`);
    if (match) return match;
  }

  // Sibass Ammeter
  if (baseName.startsWith('sibass_ammeter_22_')) {
    const color = baseName.replace('sibass_ammeter_22_', '');
    match = products.find(p => p.id.toLowerCase() === `sibass_ammeter_${color}`);
    if (match) return match;
  }

  // Sibass V/A
  if (baseName.startsWith('sibass_va_22_')) {
    const color = baseName.replace('sibass_va_22_', '');
    match = products.find(p => p.id.toLowerCase() === `sibass_va_${color}`);
    if (match) return match;
  }

  return null;
}

const mappedImages = new Set();

imageFiles.forEach(img => {
  const match = findProductMatch(img);
  if (match) {
    if (match.image !== `/images/${img}`) {
       match.image = `/images/${img}`;
       updatedCount++;
    }
    mappedImages.add(img);
  }
});

// For unmapped images, we need to create products
const unmappedImages = imageFiles.filter(img => !mappedImages.has(img) && !img.startsWith('temp_') && !img.startsWith('media_') && img !== 'hero.png' && img !== 'enclosures.png' && !img.includes('placeholder') && !img.includes('family') && !img.includes('group') && !img.includes('accessories') && !img.includes('lights.png'));

console.log('Unmapped images to create products for:', unmappedImages.length);

unmappedImages.forEach(img => {
  const baseName = img.replace(/\.(png|jpg)$/, '');
  
  // Fans
  if (baseName.startsWith('cooling-fan-ra')) {
    newProducts.push({
      id: baseName,
      name: `Resonance Axial Cooling Fan ${baseName.split('-')[2].toUpperCase()}`,
      brand: 'Resonance',
      category: 'Cooling Fans & Sockets',
      model: baseName.split('-')[2].toUpperCase(),
      description: 'High performance industrial AC/DC cooling fan.',
      image: `/images/${img}`,
      voltage: baseName.includes('220v') ? '220V AC' : (baseName.includes('110v') ? '110V AC' : (baseName.includes('24v') ? '24V DC' : (baseName.includes('12v') ? '12V DC' : 'Standard'))),
      current: 'Standard',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Panel Cooling',
      mounting: 'Panel Mount',
      auxiliary: 'N/A'
    });
  }
  // Tower Lights
  else if (baseName.startsWith('jigo-tower') || baseName.startsWith('jigo-jg5088') || baseName.includes('warning-light')) {
    newProducts.push({
      id: baseName,
      name: `Jigo Tower Light ${baseName.replace('jigo-', '').replace(/-/g, ' ')}`,
      brand: 'Jigo',
      category: 'Jigo Tower Lights',
      model: baseName,
      description: 'Industrial Warning Tower Light for machine status indication.',
      image: `/images/${img}`,
      voltage: '24V / 220V',
      current: 'N/A',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Machine Status Indication',
      mounting: 'Base Mount',
      auxiliary: 'N/A'
    });
  }
  // Sirens
  else if (baseName.includes('siren')) {
    newProducts.push({
      id: baseName,
      name: `Jigo Motor Siren ${baseName.includes('ms190') ? 'MS190' : 'MS290'}`,
      brand: 'Jigo',
      category: 'Sibass Sirens',
      model: baseName.includes('ms190') ? 'MS190' : 'MS290',
      description: 'Industrial heavy duty motor siren.',
      image: `/images/${img}`,
      voltage: '220V AC',
      current: 'Standard',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Audible Warning',
      mounting: 'Surface Mount',
      auxiliary: 'N/A'
    });
  }
  // Heavy Duty Connectors
  else if (baseName.startsWith('jigo-hdc')) {
    newProducts.push({
      id: baseName,
      name: `Jigo Heavy Duty Connector ${baseName.replace('jigo-hdc-', '')}`,
      brand: 'Jigo',
      category: 'Cooling Fans & Sockets',
      model: baseName.replace('jigo-hdc-', ''),
      description: 'Industrial heavy duty plug socket.',
      image: `/images/${img}`,
      voltage: 'Up to 500V',
      current: '16A / 32A',
      poles: baseName.replace('jigo-hdc-', ''),
      mainContact: 'N/A',
      application: 'Industrial Connection',
      mounting: 'Panel/Cable Mount',
      auxiliary: 'N/A'
    });
  }
  // Sibass 16mm/22.5mm
  else if (baseName.startsWith('sibass_led_16') || baseName.startsWith('sibass_buzzer_')) {
     newProducts.push({
      id: baseName,
      name: `Sibass ${baseName.includes('buzzer') ? 'Buzzer' : 'LED Indicator'} ${baseName.replace('sibass_', '').replace(/_/g, ' ')}`,
      brand: 'Sibass',
      category: 'Sibass 16mm & 22.5mm',
      model: baseName,
      description: 'Industrial indicator for panel boards.',
      image: `/images/${img}`,
      voltage: 'Standard',
      current: 'N/A',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Panel Indication',
      mounting: 'Panel Mount',
      auxiliary: 'N/A'
    });
  }
});

// Check if these products already exist, don't add duplicates
const existingIds = new Set(products.map(p => p.id));
const productsToAdd = newProducts.filter(p => !existingIds.has(p.id));

products.push(...productsToAdd);

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log(`Successfully updated ${updatedCount} existing product images!`);
console.log(`Successfully added ${productsToAdd.length} missing products from images!`);
