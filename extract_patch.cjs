const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity-ide/brain/44c506a9-7864-4301-ae8c-13db0f1f1c19/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let found = false;

rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    if (data.step_index === 281 && data.type === 'RUN_COMMAND') {
      const content = data.content;
      const outputParts = content.split('Output:\\n\\t\\t\\t\\t');
      if (outputParts.length > 1) {
        let patch = outputParts[1];
        // unescape the patch
        patch = patch.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
        fs.writeFileSync('home.patch', patch);
        console.log('Successfully extracted home.patch!');
        found = true;
      }
    }
  } catch(e) {}
});

rl.on('close', () => {
  if (!found) console.log("Could not find it.");
});
