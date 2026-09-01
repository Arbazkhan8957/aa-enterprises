const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787855084860.jpg',
  'media_1787855090315.jpg',
  'media_1787855095610.jpg',
  'media_1787855102276.jpg',
  'media_1787855107076.jpg'
];

const destNames = [
  'sibass-green-pb-xb4-head.jpg',
  'sibass-cable-reel-front.jpg',
  'sibass-cable-reel-back.jpg',
  'sibass-estop-small-side.jpg',
  'sibass-estop-small-top.jpg'
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
