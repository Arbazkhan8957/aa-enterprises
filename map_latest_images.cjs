const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');
const files = [
  'media_1788247437898.png', 'media_1788247391443.png', 'media_1788247298822.png',
  'media_1788247266239.png', 'media_1788247255374.png', 'media_1788246478089.png',
  'media_1788246459333.png', 'media_1788246425987.png', 'media_1788246418895.png',
  'media_1788246412593.png', 'media_1788246275933.png', 'media_1788246246292.png',
  'media_1788246234490.png', 'media_1788246207409.png', 'media_1788246195354.png'
];
const matches = [...data.matchAll(/id:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'/g)];
const last15 = matches.slice(-15);
last15.forEach((m, i) => {
  const id = m[1];
  const regexImg = new RegExp("(id:\\s*['\"]" + id + "['\"][\\s\\S]*?image:\\s*['\"]).*?(['\"])", 'g');
  data = data.replace(regexImg, "$1/media/" + files[i] + "$2");
});
fs.writeFileSync('src/data.js', data);
console.log('Updated data.js images');
