const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');

// Extract the products array
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

// The list of the 20 missing images we added today
const missingImageIds = [
  "sibass-contactor-sed18-hand",
  "sibass-contactor-sed18-box",
  "sibass-contactor-sed25-box",
  "sibass-contactor-sed12-box",
  "sibass-contactor-sed09-box",
  "sibass-contactor-sed38-box",
  "sibass-contactor-sed32-box",
  "sibass-heat-aerosol-extinguisher",
  "sibass-limit-switch-p121",
  "sibass-limit-switch-p102",
  "sibass-micro-switch-m110",
  "sibass-limit-switch-wld",
  "sibass-limit-switch-wld2",
  "sibass-micro-switch-m121",
  "sibass-solar-fuse-sepv32x",
  "sibass-pendant-cobp21",
  "sibass-contact-block-seg1191",
  "sibass-pendant-cob61",
  "sibass-push-button-set-flush"
];

// Temporarily point all of them to the placeholder image so they aren't broken
productsArray.forEach(p => {
  if (missingImageIds.includes(p.id)) {
    // We append a special query parameter so the user knows which image they need to replace it with later
    // p.image = "/images/sibass_placeholder.jpg"; 
    // Actually, let's just use the placeholder directly so it works cleanly.
    p.image = "/images/sibass_placeholder.jpg";
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Fixed broken images by pointing them to placeholder!');
