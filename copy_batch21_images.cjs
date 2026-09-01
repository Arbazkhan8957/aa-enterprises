const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787856743900.jpg',
  'media_1787856794559.jpg',
  'media_1787856799994.jpg',
  'media_1787856812533.jpg',
  'media_1787856827083.jpg'
];

const destNames = [
  'siren-12v-dc-box.jpg',
  'sibass-crimping-tool-se64.jpg',
  'sibass-warning-light-lte2071.jpg',
  'sibass-panel-buzzers.jpg',
  'sibass-led-indicators-as16.jpg'
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
