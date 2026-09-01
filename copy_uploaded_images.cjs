const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ae81758f-a232-4551-9b50-3ccd74f83948\\.user_uploaded';
const destDir = 'd:\\aa-enterprises\\public\\images';

const fileMap = {
  'media_1788271171948.png': 'siemens_3rv2.png',
  'media_1788271195968.png': 'siemens_5sl6.png',
  'media_1788271232316.png': 'siemens_5sy4.png',
  'media_1788271370689.png': 'siemens_logo_plc.png',
  'media_1788271385896.png': 'siemens_collage.png',
  
  'media_1788271745887.jpg': 'jlock_fan_220.jpg',
  'media_1788271780559.png': 'jlock_fan_120.png',
  'media_1788271984951.png': 'jlock_fan_170.png',
  'media_1788272096682.png': 'jlock_microswitch_z15.png',
  'media_1788272131452.png': 'jlock_lock_dsniy.png'
};

for (const [src, dest] of Object.entries(fileMap)) {
  fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
  console.log(`Copied ${src} to ${dest}`);
}

// Update data.js
let data = fs.readFileSync('src/data.js', 'utf8');

// replace .jpg with .png for the ones that changed
data = data.replace(/\/images\/siemens_3rv2\.jpg/g, '/images/siemens_3rv2.png');
data = data.replace(/\/images\/siemens_5sl6\.jpg/g, '/images/siemens_5sl6.png');
data = data.replace(/\/images\/siemens_5sy4\.jpg/g, '/images/siemens_5sy4.png');
data = data.replace(/\/images\/siemens_logo_plc\.jpg/g, '/images/siemens_logo_plc.png');
data = data.replace(/\/images\/siemens_collage\.jpg/g, '/images/siemens_collage.png');

data = data.replace(/\/images\/jlock_fan_120\.jpg/g, '/images/jlock_fan_120.png');
data = data.replace(/\/images\/jlock_fan_170\.jpg/g, '/images/jlock_fan_170.png');
data = data.replace(/\/images\/jlock_microswitch_z15\.jpg/g, '/images/jlock_microswitch_z15.png');
data = data.replace(/\/images\/jlock_lock_dsniy\.jpg/g, '/images/jlock_lock_dsniy.png');

fs.writeFileSync('src/data.js', data);
console.log('Successfully updated data.js image paths!');
