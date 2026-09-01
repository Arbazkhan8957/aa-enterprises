const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787857362880.jpg',
  'media_1787857373885.jpg',
  'media_1787857379168.jpg',
  'media_1787857389978.jpg',
  'media_1787857398661.jpg'
];

const destNames = [
  'heavy-duty-connector-base-grey.jpg',
  'jigo-industrial-plug-jg523.jpg',
  'reco-led-indicators-ad22.jpg',
  'led-indicators-ad16-6colors.jpg',
  'led-digital-voltmeter-ad22.jpg'
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
