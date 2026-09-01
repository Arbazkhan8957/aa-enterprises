const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787858359074.jpg',
  'media_1787858384100.jpg',
  'media_1787858390696.jpg',
  'media_1787858401395.jpg',
  'media_1787858415607.jpg'
];

const destNames = [
  'siemens-relay-base-3ux1418.jpg',
  'electrical-panel-fan-filter.jpg',
  'resonance-axial-fan-172mm.jpg',
  'resonance-axial-fan-box.jpg',
  'sibass-dc-fan-24v.jpg'
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
