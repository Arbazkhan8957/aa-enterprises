const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787853477180.jpg',
  'media_1787853485237.jpg',
  'media_1787853492835.jpg',
  'media_1787853510085.jpg',
  'media_1787853518532.jpg',
  
  'media_1787853675017.jpg',
  'media_1787853681870.jpg',
  'media_1787853688093.jpg',
  'media_1787853694678.jpg',
  'media_1787853701266.jpg',
  
  'media_1787853838080.jpg',
  'media_1787853845829.jpg',
  'media_1787853851389.jpg',
  'media_1787853861026.jpg',
  'media_1787853875056.jpg',
  
  'media_1787853966427.jpg',
  'media_1787853971547.jpg',
  'media_1787853976427.jpg',
  'media_1787853985469.jpg',
  'media_1787853990182.jpg'
];

const destNames = [
  'sibass-contactor-sed18-hand.jpg',
  'sibass-contactor-sed18-box.jpg',
  'sibass-contactor-sed25-box.jpg',
  'sibass-contactor-sed12-box.jpg',
  'sibass-contactor-sed09-box.jpg',
  
  'sibass-contactor-sed38-box.jpg',
  'sibass-contactor-sed32-box.jpg',
  'sibass-heat-aerosol-extinguisher.jpg',
  'sibass-limit-switch-p121.jpg',
  'sibass-limit-switch-p102.jpg',
  
  'sibass-micro-switch-m110.jpg',
  'sibass-limit-switch-wld.jpg',
  'sibass-limit-switch-wld2.jpg',
  'sibass-micro-switch-m121.jpg',
  'sibass-solar-fuse-sepv32x.jpg',
  
  'sibass-pendant-cobp21-new.jpg',
  'sibass-heat-aerosol-extinguisher-dup.jpg', // Duplicate
  'sibass-contact-block-seg1191.jpg',
  'sibass-pendant-cob61-orange.jpg',
  'sibass-push-button-set-flush.jpg'
];

files.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, destNames[index]);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${destNames[index]}`);
    } else {
      console.error(`File not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Error copying ${file}:`, err);
  }
});
