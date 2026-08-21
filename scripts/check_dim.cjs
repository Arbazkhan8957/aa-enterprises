const Jimp = require('jimp');
const path = require('path');

async function check() {
    const imagePath = path.join(__dirname, '../public/images/temp_s-overload-relay.png');
    const img = await Jimp.read(imagePath);
    console.log(`Dimensions: ${img.bitmap.width} x ${img.bitmap.height}`);
}
check();
