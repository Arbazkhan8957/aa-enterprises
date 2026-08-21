const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');
data = data.replace(/\{\s*"name": "Stroke"[\s\S]*?\},/, '');
data = data.replace(/\{\s*"name": "Stroke Components"[\s\S]*?\},/, '');
for (let i = 0; i <= 30; i++) {
    const id = '"id": "user_product_' + i + '"';
    const pIdx = data.indexOf(id);
    if (pIdx !== -1) {
        let pStart = data.lastIndexOf('{', pIdx);
        let pEnd = data.indexOf('},', pStart) + 2;
        data = data.substring(0, pStart) + data.substring(pEnd);
    }
}
fs.writeFileSync('src/data.js', data);
console.log('Cleaned');
