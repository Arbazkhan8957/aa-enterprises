const fs = require('fs');
const content = fs.readFileSync('src/data.js', 'utf8');
const productsMatch = content.match(/"id": "sibass_[^"]+",\s*"name": "[^"]+",\s*"brand": "Sibass",\s*"category": "[^"]+",\s*"model": "[^"]+"/g);
if (productsMatch) {
  console.log(productsMatch.join('\n\n'));
} else {
  console.log("No matches");
}
