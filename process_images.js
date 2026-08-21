import fs from 'fs';
import Jimp from 'jimp';
import path from 'path';

const uploadsDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\501c1383-bb17-4efc-9c9d-e0e452d9a127\\.user_uploaded';
const publicDir = 'd:\\aa-enterprises\\public\\images';

const imageMap = [
  { source: 'media_1786876819570.png', dest: 'se1d0901.jpg' },
  { source: 'media_1786876830941.png', dest: 'se1d1201.jpg' },
  { source: 'media_1786876854520.png', dest: 'se1d1801.jpg' },
  { source: 'media_1786876863567.png', dest: 'se1d2501.jpg' },
  { source: 'media_1786876876647.png', dest: 'se1d3201.jpg' }
];

async function processImages() {
  for (const { source, dest } of imageMap) {
    const srcPath = path.join(uploadsDir, source);
    const destPath = path.join(publicDir, dest);
    
    if (fs.existsSync(srcPath)) {
      console.log(`Processing ${source} -> ${dest}...`);
      try {
        const image = await Jimp.read(srcPath);
        
        // Let's do a basic clean up: resize and normalize
        // We'll scale them to fit within 800x800 and fill the background with white if needed
        image.contain(800, 800, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE, 0xFFFFFFFF);
        image.quality(90); // JPEG quality
        
        await image.writeAsync(destPath);
        console.log(`Saved ${destPath}`);
      } catch (err) {
        console.error(`Error processing ${source}:`, err.message);
      }
    } else {
      console.log(`Source file not found: ${srcPath}`);
    }
  }
  console.log('All images processed and replaced!');
}

processImages();
