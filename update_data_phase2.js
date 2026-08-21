import fs from 'fs';
import { brands, categories, products } from './src/data.js';

// Helper to generate 8-10 lines of features based on product data
function generateFeatures(product) {
  // If it already has features, we skip, except we want to make sure it's updated if we run it again
  if (product.features && product.features.length >= 8) {
    return product.features; // already done
  }

  let f = [];

  // Schneider
  if (product.category.includes('Schneider LC1E') || product.category.includes('Schneider LC1D')) {
    f = [
      `Premium industrial-grade AC Contactor by Schneider Electric.`,
      `Model: ${product.model} designed for reliable motor control.`,
      `Coil Voltage: ${product.voltage} providing consistent switching performance.`,
      `Current Rating: Engineered for continuous ${product.current} load.`,
      `Poles: Configured as ${product.poles} (${product.mainContact}).`,
      `Auxiliary Configuration: Includes ${product.auxiliary} for integration into logic circuits.`,
      `Mounting: Compatible with ${product.mounting} for rapid installation.`,
      `Application: Specifically suited for ${product.application}.`,
      `High mechanical and electrical durability for extended lifespan.`,
      `Meets rigorous global standards including IEC, UL, and CSA.`
    ];
  } else if (product.category.includes('Schneider LRE') || product.category.includes('Schneider LRD')) {
    f = [
      `Advanced Thermal Overload Relay by Schneider Electric.`,
      `Model: ${product.model} offering superior motor protection.`,
      `Operating Voltage: ${product.voltage}.`,
      `Current Setting Range: ${product.current}.`,
      `Mounting: Designed for ${product.mounting}.`,
      `Application: Crucial for ${product.application} protecting against phase loss.`,
      `Manual and automatic reset options for flexible operation.`,
      `Integrated trip indicator provides immediate fault visibility.`,
      `Compact form factor aligns seamlessly with Schneider contactors.`,
      `Reliable performance in harsh industrial environments.`
    ];
  } else if (product.category.includes('Control Relays (LADN)')) {
    f = [
      `Schneider Electric Auxiliary Contact Block / Control Relay.`,
      `Model: ${product.model} designed to expand contactor capabilities.`,
      `Voltage: Rated for ${product.voltage}.`,
      `Contacts: Provides ${product.mainContact} or ${product.auxiliary}.`,
      `Mounting: ${product.mounting} style for immediate attachment.`,
      `Application: Ideal for ${product.application} and logic expansion.`,
      `Mechanical linking ensures reliable synchronized operation.`,
      `High contact reliability even in low energy circuits.`,
      `Easy snap-on design requires no tools for installation.`,
      `RoHS compliant and globally certified component.`
    ];
  } else if (product.category.includes('Schneider Harmony')) {
    f = [
      `Schneider Harmony Series 22mm Push Button / Pilot Device.`,
      `Model: ${product.model} offering rugged manual control.`,
      `Voltage: Rated for ${product.voltage}.`,
      `Contact Configuration: Includes ${product.auxiliary}.`,
      `Mounting: Standard ${product.mounting} cutout.`,
      `Application: Perfect for ${product.application}.`,
      `Ergonomic design ensures comfortable operator interaction.`,
      `High IP66/IP69K rating protects against dust and high-pressure water.`,
      `Modular construction allows for easy maintenance and contact replacement.`,
      `Extremely high mechanical lifespan (up to 10 million cycles).`
    ];
  } 
  
  // Jigo
  else if (product.category.includes('Jigo Tower Lights')) {
    f = [
      `Industrial-grade Warning Tower Light by Jigo.`,
      `Model: ${product.model} with high-visibility illumination.`,
      `Operating Voltage: ${product.voltage}.`,
      `Mounting: Solid ${product.mounting} structure.`,
      `Application: Essential for ${product.application} and safety alerts.`,
      `Bright LED modules provide 360-degree visibility.`,
      `Shock and vibration resistant for factory floor environments.`,
      `Modular stack design allows for easy color re-arrangement.`,
      `Optional buzzer module integration for dual audio/visual alerts.`,
      `Durable polycarbonate lenses resist yellowing and impact.`
    ];
  } else if (product.category.includes('Jigo Wiring')) {
    f = [
      `Professional Wiring Accessory by Jigo.`,
      `Model: ${product.model} built for secure electrical connections.`,
      `Voltage/Current Rating: ${product.voltage} / ${product.current}.`,
      `Application: Engineered for heavy-duty ${product.application}.`,
      `Manufactured from high-grade conductive and insulating materials.`,
      `Ensures low contact resistance preventing heat buildup.`,
      `Simple and fast ${product.mounting} installation process.`,
      `Resistant to corrosion and environmental degradation.`,
      `Meets strict electrical safety compliance standards.`,
      `Provides long-lasting reliability in complex wiring harnesses.`
    ];
  } else if (product.category.includes('Limit Switches')) {
    f = [
      `Heavy-Duty Industrial Limit Switch by ${product.brand}.`,
      `Model: ${product.model} designed for precise position sensing.`,
      `Voltage: ${product.voltage}.`,
      `Contacts: Configured as ${product.auxiliary}.`,
      `Application: Vital for ${product.application} and automation end-stops.`,
      `Rugged die-cast housing withstands severe impacts.`,
      `High precision actuator ensures exact repeatability.`,
      `Excellent sealing (IP67) against oil, water, and dust.`,
      `Wide operating temperature range for extreme environments.`,
      `Long mechanical life minimizes maintenance downtime.`
    ];
  } 
  
  // Resonance
  else if (product.category.includes('Cooling Fans')) {
    f = [
      `High-Performance AC Axial Cooling Fan by Resonance.`,
      `Model: ${product.model} for optimal thermal management.`,
      `Operating Voltage: ${product.voltage}.`,
      `Application: Designed specifically for ${product.application}.`,
      `Mounting: Standard ${product.mounting} frame size.`,
      `High-speed motor delivers massive volumetric airflow.`,
      `Precision ball bearings ensure ultra-long operational life.`,
      `Low acoustic noise profile despite high RPM.`,
      `Die-cast aluminum frame offers superior structural rigidity.`,
      `Impedance protected motor prevents burnout during rotor lock.`
    ];
  }

  // Fallback if none matched
  else {
    f = [
      `High-quality industrial component by ${product.brand}.`,
      `Model: ${product.model || 'Standard'}.`,
      `Voltage Rating: ${product.voltage || 'Standard'}.`,
      `Current Rating: ${product.current || 'Standard'}.`,
      `Mounting: ${product.mounting || 'Standard'}.`,
      `Application: Designed for ${product.application || 'industrial use'}.`,
      `Manufactured with premium materials for maximum durability.`,
      `Tested thoroughly for reliability under heavy industrial loads.`,
      `Compact footprint allows for optimized panel layouts.`,
      `Meets rigorous safety and electrical performance standards.`
    ];
  }
  return f;
}

const newProducts = [];

for (const p of products) {
  const modified = { ...p };
  // Generate features for non-Sibass products (Sibass was done in phase 1, but we do it safely here if missing)
  if (!modified.features || modified.features.length === 0) {
    modified.features = generateFeatures(p);
  }
  newProducts.push(modified);
}

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully updated all remaining products in data.js');
