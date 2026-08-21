import fs from 'fs';
import path from 'path';

// Read data
import { brands, categories, products } from './src/data.js';

// Get all images
const imageFiles = fs.readdirSync('./public/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let newProducts = [];
let updatedCount = 0;

const mappedImages = new Set();
imageFiles.forEach(img => {
  const match = products.find(p => p.image === `/images/${img}`);
  if (match) mappedImages.add(img);
});

const unmappedImages = imageFiles.filter(img => !mappedImages.has(img) && !img.startsWith('temp_') && !img.startsWith('media_') && img !== 'hero.png' && img !== 'enclosures.png' && !img.includes('placeholder') && !img.includes('family') && !img.includes('group') && !img.includes('accessories') && !img.includes('lights.png') && !img.includes('schneider_group.png') && !img.includes('tesys') && !img.includes('sensors.png') && !img.includes('limit_switch') && !img.includes('plug_socket'));

unmappedImages.forEach(img => {
  const baseName = img.replace(/\.(png|jpg)$/, '');
  
  // SE1D Contactors
  if (baseName.startsWith('se1d')) {
    const current = baseName.replace('se1d', '').substring(0, 2);
    newProducts.push({
      id: baseName,
      name: `Sibass SE1D AC Contactor ${current}A`,
      brand: 'Sibass',
      category: 'Sibass AC Contactors',
      model: baseName,
      description: 'Sibass high quality AC Contactor for motor control.',
      image: `/images/${img}`,
      voltage: '415V AC',
      current: `${current}A`,
      poles: '3P',
      mainContact: '3 NO',
      application: 'Motor Control',
      mounting: 'DIN Rail',
      auxiliary: baseName.endsWith('11') ? '1NO + 1NC' : (baseName.endsWith('01') ? '1 NC' : '1 NO')
    });
  }
  // Sibass NC Contactors
  else if (baseName.startsWith('sibass_nc_')) {
    const current = baseName.replace('sibass_nc_', '').substring(0, 2);
    newProducts.push({
      id: baseName,
      name: `Sibass NC AC Contactor ${current}A`,
      brand: 'Sibass',
      category: 'Sibass AC Contactors',
      model: baseName.replace('sibass_', ''),
      description: 'Sibass standard AC Contactor.',
      image: `/images/${img}`,
      voltage: '415V AC',
      current: `${current}A`,
      poles: '3P',
      mainContact: '3 NO',
      application: 'Motor Control',
      mounting: 'DIN Rail',
      auxiliary: baseName.endsWith('11') ? '1NO + 1NC' : (baseName.endsWith('01') ? '1 NC' : '1 NO')
    });
  }
  // Harmony Estop
  else if (baseName === 'harmony_estop') {
    newProducts.push({
      id: baseName,
      name: `Schneider Harmony Emergency Stop`,
      brand: 'Schneider',
      category: 'Schneider Push Buttons',
      model: 'XB4BS8442',
      description: 'Emergency stop push button, Harmony XB4, metal, red mushroom.',
      image: `/images/${img}`,
      voltage: 'Standard',
      current: '10A',
      poles: 'N/A',
      mainContact: '1 NC',
      application: 'Safety Control',
      mounting: 'Panel Mount (22mm)',
      auxiliary: 'N/A'
    });
  }
  // Harmony Push Button
  else if (baseName.startsWith('harmony_pb_') || baseName === 'harmony_push_button') {
    const color = baseName.replace('harmony_pb_', '').replace('harmony_push_button', 'green');
    newProducts.push({
      id: baseName,
      name: `Schneider Harmony Push Button ${color.charAt(0).toUpperCase() + color.slice(1)}`,
      brand: 'Schneider',
      category: 'Schneider Push Buttons',
      model: `XB4BA${color === 'green' ? '3' : color === 'red' ? '4' : '1'}`,
      description: `Harmony 22mm flush push button ${color}.`,
      image: `/images/${img}`,
      voltage: 'Standard',
      current: '10A',
      poles: 'N/A',
      mainContact: color === 'red' ? '1 NC' : '1 NO',
      application: 'Panel Control',
      mounting: 'Panel Mount (22mm)',
      auxiliary: 'N/A'
    });
  }
  // Sibass LED 22.5mm
  else if (baseName.startsWith('sibass_led_') && !baseName.includes('16')) {
    const color = baseName.replace('sibass_led_', '');
    newProducts.push({
      id: baseName,
      name: `Sibass LED Indicator 22.5mm ${color.charAt(0).toUpperCase() + color.slice(1)}`,
      brand: 'Sibass',
      category: 'Sibass 16mm & 22.5mm',
      model: baseName,
      description: `Sibass 22.5mm LED indicator light ${color}.`,
      image: `/images/${img}`,
      voltage: '220V AC',
      current: 'N/A',
      poles: 'N/A',
      mainContact: 'N/A',
      application: 'Panel Indication',
      mounting: 'Panel Mount (22.5mm)',
      auxiliary: 'N/A'
    });
  }
  // LC1E missed
  else if (baseName.startsWith('lc1e')) {
     const current = baseName.replace('lc1e', '').substring(0, 2);
     newProducts.push({
      id: baseName,
      name: `Schneider Easy TeSys AC Contactor ${current}A`,
      brand: 'Schneider',
      category: 'Schneider Easy TeSys Contactors',
      model: baseName,
      description: 'Schneider Electric Easy TeSys 3-pole contactor.',
      image: `/images/${img}`,
      voltage: '415V AC',
      current: `${current}A`,
      poles: '3P',
      mainContact: '3 NO',
      application: 'Motor Control',
      mounting: 'DIN Rail',
      auxiliary: baseName.endsWith('11') ? '1NO + 1NC' : (baseName.endsWith('01') ? '1 NC' : '1 NO')
    });
  }
});

// Check if these products already exist, don't add duplicates
const existingIds = new Set(products.map(p => p.id));
const productsToAdd = newProducts.filter(p => !existingIds.has(p.id));

products.push(...productsToAdd);

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(products, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log(`Successfully added ${productsToAdd.length} more missing products from images!`);
