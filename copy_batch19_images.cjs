const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787855537765.jpg',
  'media_1787855546801.jpg',
  'media_1787855613265.jpg',
  'media_1787855625941.jpg'
];

const destNames = [
  'sibass-smps-power-supply.jpg',
  'sibass-eco-acspd.jpg',
  'minilec-mpr-d2-relay.jpg',
  'photocontrol-as10-12.jpg'
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
