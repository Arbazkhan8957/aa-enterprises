const fs = require('fs');
const lines = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/44c506a9-7864-4301-ae8c-13db0f1f1c19/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');
for (const line of lines) {
  if (!line) continue;
  try {
    const data = JSON.parse(line);
    if (data.step_index === 281) {
      const content = data.content;
      const idx = content.indexOf('diff --git');
      if (idx !== -1) {
         let patch = content.substring(idx);
         fs.writeFileSync('home.patch', patch);
         console.log('Saved home.patch!');
      } else {
         fs.writeFileSync('home.patch', content);
         console.log('Saved raw content to home.patch!');
      }
      break;
    }
  } catch(e) {}
}
