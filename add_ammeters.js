import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newAmmeters = [
  {
    id: "sibass_ammeter_22_white",
    name: "Sibass 22.5mm Digital Ammeter Indicator White",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-IA22.5-7S",
    description: "Sibass 22.5mm Digital Ammeter Display - White",
    image: "/images/sibass_ammeter_22_white.png",
    voltage: "N/A",
    current: "0-5A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Ammeter).",
      "Model: SE-IA22.5-7S - Compact digital current indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 0-5A in real-time.",
      "Display Type: High-contrast White 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit current monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Current Monitoring and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_ammeter_22_blue",
    name: "Sibass 22.5mm Digital Ammeter Indicator Blue",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-IA22.5-7S",
    description: "Sibass 22.5mm Digital Ammeter Display - Blue",
    image: "/images/sibass_ammeter_22_blue.png",
    voltage: "N/A",
    current: "0-5A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Ammeter).",
      "Model: SE-IA22.5-7S - Compact digital current indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 0-5A in real-time.",
      "Display Type: High-contrast Blue 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit current monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Current Monitoring and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_ammeter_22_yellow",
    name: "Sibass 22.5mm Digital Ammeter Indicator Yellow",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-IA22.5-7S",
    description: "Sibass 22.5mm Digital Ammeter Display - Yellow",
    image: "/images/sibass_ammeter_22_yellow.png",
    voltage: "N/A",
    current: "0-5A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Ammeter).",
      "Model: SE-IA22.5-7S - Compact digital current indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 0-5A in real-time.",
      "Display Type: High-contrast Yellow 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit current monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Current Monitoring and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_ammeter_22_green",
    name: "Sibass 22.5mm Digital Ammeter Indicator Green",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-IA22.5-7S",
    description: "Sibass 22.5mm Digital Ammeter Display - Green",
    image: "/images/sibass_ammeter_22_green.png",
    voltage: "N/A",
    current: "0-5A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Ammeter).",
      "Model: SE-IA22.5-7S - Compact digital current indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 0-5A in real-time.",
      "Display Type: High-contrast Green 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit current monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Current Monitoring and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_ammeter_22_red",
    name: "Sibass 22.5mm Digital Ammeter Indicator Red",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-IA22.5-7S",
    description: "Sibass 22.5mm Digital Ammeter Display - Red",
    image: "/images/sibass_ammeter_22_red.png",
    voltage: "N/A",
    current: "0-5A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Current Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Ammeter).",
      "Model: SE-IA22.5-7S - Compact digital current indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 0-5A in real-time.",
      "Display Type: High-contrast Red 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit current monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Current Monitoring and load status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  }
];

const newProducts = [...products, ...newAmmeters];

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully added 5 new ammeters.');
