const fs = require('fs');

async function run() {
  const dataModule = await import('./src/data.js');
  const { brands, categories, products } = dataModule;

  function expandDescription(p) {
    if (p.category === 'Sibass Indicators') {
      const colorMatch = p.name.match(/(Red|Green|Yellow|Blue|White)/i);
      const color = colorMatch ? colorMatch[1] : 'Status';

      if (p.model.includes('SE-VM')) { // Voltmeter
        return `The Sibass ${color} Digital Panel Voltmeter (${p.model}) is an advanced, industrial-grade voltage monitoring solution designed to replace conventional, bulky analog meters. It provides continuous, real-time AC voltage readings, ensuring precise electrical tracking in control panels and power distribution units. Featuring an ultra-bright, high-contrast 3-digit LED segment display, this unit guarantees exceptional visibility across vast factory floors and under harsh lighting conditions. The ultra-compact cylindrical body requires only a standard panel cutout, optimizing space inside heavily populated cabinets. Built with a shock-resistant thermoplastic housing and IP65-rated front protection, it effortlessly withstands mechanical vibrations, dust, and moisture ingress. Direct two-wire installation simplifies setup, making it an indispensable component for generator panels, mains monitoring, and automated machinery safety.`;
      }
      else if (p.model.includes('SE-IA')) { // Ammeter
        return `The Sibass ${color} Digital Panel Ammeter (${p.model}) is a state-of-the-art current measurement instrument meticulously engineered for modern industrial automation. Featuring a brilliant 3-digit LED display, it delivers highly accurate, real-time current monitoring when paired with its dedicated Current Transformer (CT). The CT ensures complete galvanic isolation, safeguarding your sensitive control circuitry from high-power loads. Designed for extreme space efficiency, it fits seamlessly into a standard push-button hole, eliminating the need for complex panel cutouts typically required by square analog meters. Its robust, vibration-resistant construction and IP65-rated sealing make it perfectly suited for heavy machinery, motor load tracking, and continuous process manufacturing environments where reliability is paramount.`;
      }
      else if (p.model.includes('SE-VA')) { // Volt+Amp
        return `The Sibass ${color} Dual Digital Panel Meter (Volt + Amp, ${p.model}) represents the pinnacle of space-saving electrical monitoring technology. This revolutionary 2-in-1 device simultaneously tracks both AC voltage and AC current, displaying the real-time data on stacked, high-intensity LED segments. By integrating two critical measurement functions into a single cylindrical body, it drastically reduces panel clutter, wiring complexity, and installation time. A high-precision Current Transformer (CT) is included, providing flawless induction measurement and absolute electrical isolation from the load circuit. Housed in a heavy-duty, flame-retardant casing with IP65 front-panel protection, this dual meter is the ultimate solution for power generators, motor control centers, and complex automation systems where comprehensive power visibility is essential.`;
      }
      else if (p.model.includes('SE-BZ')) { // Buzzer
        return `The Sibass Industrial Panel Mount Buzzer (${p.model}) is a critical acoustic signaling device engineered for high-stakes automation and safety applications. Operating efficiently on an AC/DC 12-24V supply, it utilizes advanced solid-state piezoelectric technology to produce a piercing, high-decibel continuous tone that easily cuts through overwhelming ambient factory noise. The absence of moving parts ensures a virtually unlimited operational lifespan, free from the mechanical wear and tear associated with traditional electromechanical bells. Its highly compact form factor allows for effortless installation into standard cutouts, while the enclosed front grille protects the acoustic element from dust and debris (IP40/IP54 rated). This buzzer is an indispensable warning mechanism for machine fault states, emergency alerts, and sequence completion notifications in robust industrial settings.`;
      }
      else if (p.model.includes('SE-A516') || p.model.includes('AD22')) { // Regular Indicators
        return `The Sibass ${color} LED Panel Indicator (${p.model}) is a premium-grade pilot light engineered to provide instantaneous visual status confirmation for complex automation systems. Utilizing a high-intensity, long-life LED chip, this indicator delivers an exceptionally bright and uniform ${color} illumination that remains clearly visible from wide angles and extended distances across the factory floor. Designed to replace incandescent bulbs, it offers ultra-low power consumption and completely eliminates the need for frequent bulb replacements. The rugged polycarbonate lens is highly resistant to impact, while the IP65-rated front face ensures complete protection against dust, water, and oil ingress. Featuring standardized dimensions for rapid panel mounting and robust screw terminals for secure wiring, this indicator is the definitive choice for representing power status, machine faults, or operational readiness in demanding industrial environments.`;
      }
    }
    return p.description;
  }

  const newProducts = [];
  let updatedCount = 0;
  for (const p of products) {
    const modified = { ...p };
    const newDesc = expandDescription(p);
    if (newDesc !== p.description) {
      modified.description = newDesc;
      updatedCount++;
    }
    newProducts.push(modified);
  }

  const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

  fs.writeFileSync('./src/data.js', output, 'utf-8');
  console.log('Successfully updated BIG descriptions for', updatedCount, 'items.');
}

run();
