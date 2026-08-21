import fs from 'fs';
import { brands, categories, products } from './src/data.js';

const newBuzzers = [
  {
    id: "sibass_buzzer_16",
    name: "Sibass 16mm Panel Mount Buzzer SE-BZ16-7S",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-BZ16-7S",
    description: "Sibass 16mm Industrial Panel Mount Buzzer - AC/DC 12-24V",
    image: "/images/sibass_buzzer_16.png",
    voltage: "AC/DC 12-24V",
    current: "<= 20mA",
    poles: "N/A",
    mainContact: "N/A",
    application: "Audio Alarm & Status Signaling",
    mounting: "16mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Industrial Audible Indicators (Buzzers).",
      "Model: SE-BZ16-7S - High-decibel compact panel buzzer for control stations.",
      "Voltage Rating: Versatile AC/DC 12-24V operation for diverse control circuits.",
      "Current Consumption: Ultra-low power draw of <= 20mA.",
      "Mounting Hole Diameter: Designed for compact 16mm panel cutouts.",
      "Acoustic Output: Continuous/Pulsing high-frequency tone for immediate operator awareness.",
      "Form Factor: Space-saving cylindrical body with front-facing sound emission grills.",
      "Application: Essential for fault alarms, process completion signaling, and warning systems in factory automation.",
      "Durability: Rugged polymer housing ensuring longevity in harsh industrial environments, compliant with IEC/EN 60947-5-1."
    ]
  },
  {
    id: "sibass_buzzer_22",
    name: "Sibass 22.5mm Panel Mount Buzzer SE-BZ22-7S",
    brand: "Sibass",
    category: "Sibass Indicators",
    model: "SE-BZ22-7S",
    description: "Sibass 22.5mm Industrial Panel Mount Buzzer - AC/DC 12-24V",
    image: "/images/sibass_buzzer_22.png",
    voltage: "AC/DC 12-24V",
    current: "<= 20mA",
    poles: "N/A",
    mainContact: "N/A",
    application: "Audio Alarm & Status Signaling",
    mounting: "22.5mm Panel",
    auxiliary: "N/A",
    features: [
      "Series: Sibass Industrial Audible Indicators (Buzzers).",
      "Model: SE-BZ22-7S - Standard industrial high-decibel panel buzzer.",
      "Voltage Rating: Versatile AC/DC 12-24V operation for diverse control circuits.",
      "Current Consumption: Ultra-low power draw of <= 20mA.",
      "Mounting Hole Diameter: Fits standard 22.5mm push-button panel cutouts.",
      "Acoustic Output: Clear, piercing tone designed to cut through ambient factory noise.",
      "Form Factor: Ergonomic cylindrical design with a robust front protective cap.",
      "Application: Ideal for switchboards, heavy machinery consoles, and automated process alarms.",
      "Durability: Industrial-grade construction, vibration resistant, and certified to IEC/EN 60947-5-1 standards."
    ]
  }
];

const newProducts = [...products, ...newBuzzers];

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully added 2 new buzzers.');
