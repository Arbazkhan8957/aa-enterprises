const Jimp = require('jimp');
const path = require('path');

async function main() {
    // Load black font
    const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

    const imagePath = path.join(__dirname, '../public/images/temp_s-overload-relay.png');
    const baseImage = await Jimp.read(imagePath);
    
    for (let i = 1; i <= 35; i++) {
        const numStr = i.toString().padStart(2, '0');
        const text = `LRE ${numStr}`; // e.g. "LRE 01"
        
        const img = baseImage.clone();
        
        const textImg = new Jimp(100, 30, 0x00000000);
        textImg.print(font, 0, 0, text);
        textImg.opacity(0.5); // 50% opacity to make it look grey on the plastic
        
        // Moved down by 10 pixels as requested (was 185, now 195)
        img.composite(textImg, 135, 195);
        
        const outPath = path.join(__dirname, `../public/images/lre${numStr}.png`);
        await img.writeAsync(outPath);
        console.log(`Generated ${outPath}`);
    }
}

main().catch(console.error);
