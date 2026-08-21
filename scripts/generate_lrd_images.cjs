const Jimp = require('jimp');
const path = require('path');

async function main() {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

    const imagePath = path.join(__dirname, '../public/images/tesys_lrd.jpg');
    const baseImage = await Jimp.read(imagePath);
    
    for (let i = 6; i <= 35; i++) {
        const numStr = i.toString().padStart(2, '0');
        const text = `LRD ${numStr}`;
        
        const img = baseImage.clone();
        
        const textImg = new Jimp(200, 50, 0x00000000);
        textImg.print(font, 0, 0, text);
        textImg.opacity(0.6); 
        
        img.composite(textImg, 300, 480);
        
        const outPath = path.join(__dirname, `../public/images/lrd${numStr}.png`);
        await img.writeAsync(outPath);
        console.log(`Generated ${outPath}`);
    }
}

main().catch(console.error);
