const fs = require('fs');

const file = 'src/data.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');

let outLines = [];
let i = 0;
while (i < lines.length) {
    let line = lines[i];
    
    if (line.trim() === '{') {
        let blockLines = [];
        let j = i;
        let idMatch = null;
        while (j < lines.length) {
            blockLines.push(lines[j]);
            const match = lines[j].match(/"id":\s*"([^"]+)"/);
            if (match) {
                idMatch = match[1]; // e.g., lrd01
            }
            if (lines[j].trim() === '}' || lines[j].trim() === '},') {
                break;
            }
            j++;
        }
        
        // If it is an LRD item, replace the image line
        if (idMatch && idMatch.startsWith('lrd')) {
            for (let k = 0; k < blockLines.length; k++) {
                if (blockLines[k].includes('"image":')) {
                    // replace whatever image it is with `/images/${idMatch}.png`
                    blockLines[k] = blockLines[k].replace(/"image":\s*"[^"]+"/, `"image": "/images/${idMatch}.png"`);
                }
            }
        }
        
        outLines.push(...blockLines);
        i = j + 1;
    } else {
        outLines.push(line);
        i++;
    }
}

fs.writeFileSync(file, outLines.join('\n'));
console.log("Updated LRD images in data.js");
