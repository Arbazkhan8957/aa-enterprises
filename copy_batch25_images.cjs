const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787857501892.jpg',
  'media_1787857508023.jpg',
  'media_1787857513523.jpg',
  'media_1787857520503.jpg',
  'media_1787857573944.jpg'
];

const destNames = [
  'heavy-duty-connector-insert-4a.jpg',
  'heavy-duty-connector-hood-assembled.jpg',
  'omron-style-relay-220v.jpg',
  'riko-proximity-sensor-sn04.jpg',
  'led-digital-voltmeter-ad22-boxes.jpg'
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
