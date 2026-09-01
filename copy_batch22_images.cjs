const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787856902685.jpg',
  'media_1787856910546.jpg',
  'media_1787856922890.jpg',
  'media_1787856934360.jpg',
  'media_1787856941080.jpg'
];

const destNames = [
  'sibass-hydraulic-crimper.jpg',
  'sibass-digital-clamp-meter.jpg',
  'sibass-limit-switch-se8108.jpg',
  'sibass-industrial-socket-splitter.jpg',
  'heavy-duty-connector-grey.jpg'
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
