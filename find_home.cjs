const fs = require('fs');
const transcriptPath = 'C:\\\\Users\\\\HP\\\\.gemini\\\\antigravity-ide\\\\brain\\\\f1bc579a-9ac9-4d17-9d35-d96b7dc8138f\\\\.system_generated\\\\logs\\\\transcript_full.jsonl';
const logData = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for(let line of logData) {
  if(!line) continue;
  if(line.includes('function Home()') && line.includes('className=')) {
     let match = line.match(/(function Home\(\)[\s\S]*?className=\"[^\"]+\")/);
     if(match) console.log(match[0]);
  }
}
