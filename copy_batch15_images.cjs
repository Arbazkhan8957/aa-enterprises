const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787854932518.jpg',
  'media_1787854942757.jpg',
  'media_1787854947948.jpg',
  'media_1787854953346.jpg',
  'media_1787854958239.jpg'
];

const destNames = [
  'sibass-push-button-heads-4.jpg',
  'sibass-push-button-red-zb2.jpg',
  'sibass-push-button-black-zb2.jpg',
  'sibass-estop-mushroom-zb2.jpg',
  'sibass-selector-and-estop.jpg'
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
