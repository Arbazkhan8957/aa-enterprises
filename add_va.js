import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newVA = [
  {
    id: "sibass_va_22_red",
    name: "Sibass 22.5mm Digital Volt+Ammeter Indicator Red",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VA22.5-7S",
    description: "Sibass 22.5mm Digital Volt+Ammeter Display - Red",
    image: "/images/sibass_va_22_red.png",
    voltage: "AC 20-500V",
    current: "0-100A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage and Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Volt+Ammeter).",
      "Model: SE-VA22.5-7S - Compact dual digital indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 20-500V and AC 0-100A in real-time.",
      "Display Type: High-contrast Red dual LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for dual Voltage and Current Monitoring, incoming mains, and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_va_22_green",
    name: "Sibass 22.5mm Digital Volt+Ammeter Indicator Green",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VA22.5-7S",
    description: "Sibass 22.5mm Digital Volt+Ammeter Display - Green",
    image: "/images/sibass_va_22_green.png",
    voltage: "AC 20-500V",
    current: "0-100A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage and Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Volt+Ammeter).",
      "Model: SE-VA22.5-7S - Compact dual digital indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 20-500V and AC 0-100A in real-time.",
      "Display Type: High-contrast Green dual LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for dual Voltage and Current Monitoring, incoming mains, and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_va_22_yellow",
    name: "Sibass 22.5mm Digital Volt+Ammeter Indicator Yellow",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VA22.5-7S",
    description: "Sibass 22.5mm Digital Volt+Ammeter Display - Yellow",
    image: "/images/sibass_va_22_yellow.png",
    voltage: "AC 20-500V",
    current: "0-100A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage and Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Volt+Ammeter).",
      "Model: SE-VA22.5-7S - Compact dual digital indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 20-500V and AC 0-100A in real-time.",
      "Display Type: High-contrast Yellow dual LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for dual Voltage and Current Monitoring, incoming mains, and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_va_22_blue",
    name: "Sibass 22.5mm Digital Volt+Ammeter Indicator Blue",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VA22.5-7S",
    description: "Sibass 22.5mm Digital Volt+Ammeter Display - Blue",
    image: "/images/sibass_va_22_blue.png",
    voltage: "AC 20-500V",
    current: "0-100A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage and Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Volt+Ammeter).",
      "Model: SE-VA22.5-7S - Compact dual digital indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 20-500V and AC 0-100A in real-time.",
      "Display Type: High-contrast Blue dual LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for dual Voltage and Current Monitoring, incoming mains, and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_va_22_white",
    name: "Sibass 22.5mm Digital Volt+Ammeter Indicator White",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VA22.5-7S",
    description: "Sibass 22.5mm Digital Volt+Ammeter Display - White",
    image: "/images/sibass_va_22_white.png",
    voltage: "AC 20-500V",
    current: "0-100A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage and Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Volt+Ammeter).",
      "Model: SE-VA22.5-7S - Compact dual digital indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 20-500V and AC 0-100A in real-time.",
      "Display Type: High-contrast White dual LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for dual Voltage and Current Monitoring, incoming mains, and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  }
];

const newProducts = [...products, ...newVA];

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully added 5 new Volt+Ammeters.');
