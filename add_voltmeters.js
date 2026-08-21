import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newVoltmeters = [
  {
    id: "sibass_voltmeter_22_white",
    name: "Sibass 22.5mm Digital Voltmeter Indicator White",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VM22.5-7S",
    description: "Sibass 22.5mm Digital Voltmeter Display - White",
    image: "/images/sibass_volt_ind_22_white.png",
    voltage: "AC 60-500V",
    current: "N/A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Voltmeter).",
      "Model: SE-VM22.5-7S - Compact digital voltage indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 60-500V in real-time.",
      "Display Type: High-contrast White 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit voltage monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Voltage Monitoring and line status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_voltmeter_22_blue",
    name: "Sibass 22.5mm Digital Voltmeter Indicator Blue",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VM22.5-7S",
    description: "Sibass 22.5mm Digital Voltmeter Display - Blue",
    image: "/images/sibass_volt_ind_22_blue.png",
    voltage: "AC 60-500V",
    current: "N/A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Voltmeter).",
      "Model: SE-VM22.5-7S - Compact digital voltage indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 60-500V in real-time.",
      "Display Type: High-contrast Blue 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit voltage monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Voltage Monitoring and line status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_voltmeter_22_yellow",
    name: "Sibass 22.5mm Digital Voltmeter Indicator Yellow",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VM22.5-7S",
    description: "Sibass 22.5mm Digital Voltmeter Display - Yellow",
    image: "/images/sibass_volt_ind_22_yellow.png",
    voltage: "AC 60-500V",
    current: "N/A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Voltmeter).",
      "Model: SE-VM22.5-7S - Compact digital voltage indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 60-500V in real-time.",
      "Display Type: High-contrast Yellow 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit voltage monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Voltage Monitoring and line status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_voltmeter_22_green",
    name: "Sibass 22.5mm Digital Voltmeter Indicator Green",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VM22.5-7S",
    description: "Sibass 22.5mm Digital Voltmeter Display - Green",
    image: "/images/sibass_volt_ind_22_green.png",
    voltage: "AC 60-500V",
    current: "N/A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Voltmeter).",
      "Model: SE-VM22.5-7S - Compact digital voltage indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 60-500V in real-time.",
      "Display Type: High-contrast Green 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit voltage monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Voltage Monitoring and line status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  },
  {
    id: "sibass_voltmeter_22_red",
    name: "Sibass 22.5mm Digital Voltmeter Indicator Red",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-VM22.5-7S",
    description: "Sibass 22.5mm Digital Voltmeter Display - Red",
    image: "/images/sibass_volt_ind_22_red.png",
    voltage: "AC 60-500V",
    current: "N/A",
    poles: "N/A",
    mainContact: "N/A",
    application: "Voltage Monitoring",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Digital Panel Meters (Voltmeter).",
      "Model: SE-VM22.5-7S - Compact digital voltage indicator replacing bulky analog meters.",
      "Measurement Range: Accurately reads AC 60-500V in real-time.",
      "Display Type: High-contrast Red 3-digit LED segment display for crystal-clear readability.",
      "Mounting Hole Diameter: 22.5mm Panel standard push-button cutout size.",
      "Accuracy: High precision internal sampling for reliable circuit voltage monitoring.",
      "Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.",
      "Application: Ideal for Voltage Monitoring and line status.",
      "Durability: Shock-resistant housing withstands vibrations from heavy machinery."
    ]
  }
];

const newProducts = [...products, ...newVoltmeters];

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully added 5 new voltmeters.');
