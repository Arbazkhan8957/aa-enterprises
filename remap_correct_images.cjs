const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// The exact correct mapping based on visual inspection
const mappings = {
  'omron-h3cr-a8-timer': 'media_1788247437898.png',
  'ceyone-fs1-foot-switch': 'media_1788247391443.png',
  'cable-float-switch': 'media_1788247298822.png',
  'ideal-micro-switches-display': 'media_1788247266239.png',
  'crane-pendant-cob': 'media_1788247255374.png',
  'ab-802t-atp': 'media_1788246478089.png',
  'omron-wlnj-th': 'media_1788246459333.png',
  'repon-cm18-3008pc': 'media_1788246425987.png',
  'repon-micro-switches': 'media_1788246418895.png',
  'repon-rp8104': 'media_1788246412593.png',
  'ceyone-lte-1101j': 'media_1788246275933.png',
  'ceyone-lxk3-20sb': 'media_1788246246292.png',
  'ceyone-proximity-sensor': 'media_1788246234490.png',
  'ceyone-push-buttons': 'media_1788246207409.png',
  'ceyone-lsa-012': 'media_1788246195354.png'
};

for (const [id, file] of Object.entries(mappings)) {
  const regexImg = new RegExp("(id:\\s*['\"]" + id + "['\"][\\s\\S]*?image:\\s*['\"]).*?(['\"])", 'g');
  data = data.replace(regexImg, "$1/media/" + file + "$2");
}

fs.writeFileSync('src/data.js', data);
console.log('Successfully remapped all 15 images to their correct product details and categories.');
