const fs = require('fs');
const content = fs.readFileSync('src/data.js', 'utf8');
const regex = /"id":\s*"([^"]+)"/g;
let m;
const ids = [];
while ((m = regex.exec(content)) !== null) {
  ids.push(m[1]);
}
console.log(ids.join(', '));
