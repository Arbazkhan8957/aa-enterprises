const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787857296495.jpg',
  'media_1787857305044.jpg',
  'media_1787857313059.jpg',
  'media_1787857319116.jpg',
  'media_1787857327600.jpg'
];

const destNames = [
  'heavy-duty-connector-hood-side.jpg',
  'sibass-distribution-boxes.jpg',
  'panasonic-speed-controller-wiring.jpg',
  'panasonic-speed-controller-front.jpg',
  'panasonic-speed-controller-pins.jpg'
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
