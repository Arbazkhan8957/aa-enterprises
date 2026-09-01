const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// The ID of the item to fix is "heavy-duty-connector-base-grey"
// Let's replace its details.

data = data.replace(/"id": "heavy-duty-connector-base-grey",([\s\S]*?)"mounting": "Panel Mount"/, `"id": "jigo-surface-socket-jg523",
    "name": "JIGO Surface Mount Socket (JG-523)",
    "brand": "Jigo",
    "category": "Industrial Plugs & Sockets",
    "model": "JG-523",
    "description": "The JIGO JG-523 is a highly durable 32A surface mount industrial socket. Conforming to IEC 60309-2 standards, it features a grey angled backplate for easy wall mounting and a blue IP44 rated socket for robust power connections.",
    "image": "/images/heavy-duty-connector-base-grey.jpg",
    "features": [
      "Configuration: 2P+E (3 Pin)",
      "Protection: IP44 Splash-proof",
      "Mounting: Angled surface mount with grey backplate",
      "Standard: Conforms to IEC 60309-2"
    ],
    "specs": [
      { "name": "Model", "value": "JG-523" },
      { "name": "Rating", "value": "32A-6h / 220-250V~" },
      { "name": "Mounting", "value": "Surface / Wall" }
    ],
    "voltage": "220-250V AC",
    "current": "32A",
    "mounting": "Surface Mount"`);

fs.writeFileSync('src/data.js', data);
console.log('Successfully corrected the Jigo JG-523 surface socket.');
