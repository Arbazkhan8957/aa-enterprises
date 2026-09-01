const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787854968690.jpg',
  'media_1787854984251.jpg',
  'media_1787854990216.jpg',
  'media_1787854998699.jpg',
  'media_1787855006336.jpg'
];

const destNames = [
  'sibass-illuminated-pb-220v.jpg',
  'sibass-illuminated-pb-24v.jpg',
  'sibass-pb-assorted-flush.jpg',
  'sibass-pb-green-red-estop.jpg',
  'sibass-illuminated-pb-metal.jpg'
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
