const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787856460501.jpg',
  'media_1787856470334.jpg',
  'media_1787856484284.jpg',
  'media_1787856493616.jpg',
  'media_1787856730271.jpg'
];

const destNames = [
  'jg1232-industrial-socket.jpg',
  'dual-push-button-flush.jpg',
  'sibass-warning-light-lte1103.jpg',
  'sibass-limit-switch-se3104.jpg',
  'siren-12v-dc.jpg'
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
