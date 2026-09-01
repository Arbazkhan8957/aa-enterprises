const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787855200913.jpg',
  'media_1787855212769.jpg',
  'media_1787855217742.jpg',
  'media_1787855222364.jpg',
  'media_1787855229380.jpg'
];

const destNames = [
  'sibass-limit-switch-se8108.jpg',
  'sibass-bimetallic-lugs-dtl2.jpg',
  'sibass-illuminated-selector-red.jpg',
  'sibass-estop-zb2-side.jpg',
  'sibass-estop-zb2-top.jpg'
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
