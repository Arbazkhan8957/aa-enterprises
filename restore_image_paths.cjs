const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const imageMapping = {
  "sibass-contactor-sed18-hand": "/images/sibass-contactor-sed18-hand.jpg",
  "sibass-contactor-sed18-box": "/images/sibass-contactor-sed18-box.jpg",
  "sibass-contactor-sed25-box": "/images/sibass-contactor-sed25-box.jpg",
  "sibass-contactor-sed12-box": "/images/sibass-contactor-sed12-box.jpg",
  "sibass-contactor-sed09-box": "/images/sibass-contactor-sed09-box.jpg",
  "sibass-contactor-sed38-box": "/images/sibass-contactor-sed38-box.jpg",
  "sibass-contactor-sed32-box": "/images/sibass-contactor-sed32-box.jpg",
  "sibass-heat-aerosol-extinguisher": "/images/sibass-heat-aerosol-extinguisher.jpg",
  "sibass-limit-switch-p121": "/images/sibass-limit-switch-p121.jpg",
  "sibass-limit-switch-p102": "/images/sibass-limit-switch-p102.jpg",
  "sibass-micro-switch-m110": "/images/sibass-micro-switch-m110.jpg",
  "sibass-limit-switch-wld": "/images/sibass-limit-switch-wld.jpg",
  "sibass-limit-switch-wld2": "/images/sibass-limit-switch-wld2.jpg",
  "sibass-micro-switch-m121": "/images/sibass-micro-switch-m121.jpg",
  "sibass-solar-fuse-sepv32x": "/images/sibass-solar-fuse-sepv32x.jpg",
  "sibass-pendant-cobp21": "/images/sibass-pendant-cobp21-new.jpg",
  "sibass-contact-block-seg1191": "/images/sibass-contact-block-seg1191.jpg",
  "sibass-pendant-cob61": "/images/sibass-pendant-cob61-orange.jpg",
  "sibass-push-button-set-flush": "/images/sibass-push-button-set-flush.jpg"
};

productsArray.forEach(p => {
  if (imageMapping[p.id]) {
    p.image = imageMapping[p.id];
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Restored the correct image file paths for all 19 products!');
