const fs = require('fs');

const file = 'src/data.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');

const toRemove = new Set([
  "lrd09", "lrd11", "lrd13", "lrd15", "lrd17", "lrd18", "lrd19", 
  "lrd20", "lrd23", "lrd24", "lrd25", "lrd26", "lrd27", "lrd28", 
  "lrd29", "lrd30", "lrd31", "lrd33", "lrd34"
]);

let outLines = [];
let i = 0;
while (i < lines.length) {
    let line = lines[i];
    
    // Check if a block starts
    if (line.trim() === '{') {
        // Look ahead to see if it's an object we want to remove
        let isRemove = false;
        let blockLines = [];
        let j = i;
        while (j < lines.length) {
            blockLines.push(lines[j]);
            const match = lines[j].match(/"id":\s*"([^"]+)"/);
            if (match && toRemove.has(match[1])) {
                isRemove = true;
            }
            if (lines[j].trim() === '}' || lines[j].trim() === '},') {
                break;
            }
            j++;
        }
        
        if (!isRemove) {
            outLines.push(...blockLines);
        }
        
        i = j + 1;
    } else {
        outLines.push(line);
        i++;
    }
}

fs.writeFileSync(file, outLines.join('\n'));
console.log("Finished removing LRD items.");
