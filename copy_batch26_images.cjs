const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e185974c-85f2-46f8-8c3b-d65fd21e2e86\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const files = [
  'media_1787858253775.jpg',
  'media_1787858265941.jpg',
  'media_1787858271490.jpg',
  'media_1787858277691.jpg',
  'media_1787858283540.jpg'
];

const destNames = [
  'cylindrical-photoelectric-sensor.jpg',
  'ckc-rotary-timer-dc24v.jpg',
  'taperr-axial-fan-80mm-12v.jpg',
  'green-led-voltmeters-box.jpg',
  'lxw5-11q1-roller-limit-switch.jpg'
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
