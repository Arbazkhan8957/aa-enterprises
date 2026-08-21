const fs = require('fs');

const path = './src/data.js';
let content = fs.readFileSync(path, 'utf8');

// Find all matches for products
const matches = content.match(/"id": "sibass_(volt|amp|buzzer)[^"]*"/g);
if (matches) {
  console.log("Found matches:", matches);
}
