const fs = require('fs');
const transcriptPath = 'C:\\\\Users\\\\HP\\\\.gemini\\\\antigravity-ide\\\\brain\\\\f1bc579a-9ac9-4d17-9d35-d96b7dc8138f\\\\.system_generated\\\\logs\\\\transcript_full.jsonl';
const logData = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let writeCount = 0;
for(let line of logData) {
  if(!line) continue;
  try {
     const step = JSON.parse(line);
     if(step.tool_calls) {
        for(let tc of step.tool_calls) {
           if(tc.name === 'write_to_file' || tc.name === 'multi_replace_file_content' || tc.name === 'replace_file_content') {
               const args = JSON.parse(tc.arguments);
               if(args.TargetFile && args.TargetFile.includes('Home.jsx') && args.CodeContent) {
                  fs.writeFileSync(`d:/aa-enterprises/Home_version_${writeCount}.jsx`, args.CodeContent);
                  console.log(`Wrote Home_version_${writeCount}.jsx`);
                  writeCount++;
               }
           }
        }
     }
  } catch(e) {}
}
