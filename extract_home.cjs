const fs = require('fs');

const transcriptPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\f1bc579a-9ac9-4d17-9d35-d96b7dc8138f\\.system_generated\\logs\\transcript_full.jsonl';
let logData = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const filesToFind = [
  'd:/aa-enterprises/src/pages/Home.jsx',
  'd:/aa-enterprises/src/pages/Products.jsx',
  'd:/aa-enterprises/src/pages/ProductDetail.jsx',
  'd:/aa-enterprises/src/pages/About.jsx',
  'd:/aa-enterprises/src/pages/Contact.jsx',
  'd:/aa-enterprises/src/pages/Quote.jsx',
  'd:/aa-enterprises/src/components/Navbar.jsx',
  'd:/aa-enterprises/src/components/Footer.jsx',
  'd:/aa-enterprises/index.css',
  'd:/aa-enterprises/tailwind.config.js'
];

let fileContents = {};
let currentFile = null;

// Read the transcript backwards to find the state of the files BEFORE the redesign.
// The redesign happened recently.
// To find the original files, we should look for the last time they were completely viewed or written before the big redesign.
// Or we can just look for the first time they appear in the transcript.
for (let i = 0; i < logData.length; i++) {
  if (!logData[i]) continue;
  try {
    const step = JSON.parse(logData[i]);
    if (step.type === 'TOOL_RESPONSE' && step.tool_calls) {
        // we don't have tool_calls in tool_response in some formats. 
    }
    
    // Instead of doing it perfectly, let's just use string matching.
    if (step.content && step.content.includes("File Path: `file:///d:/aa-enterprises/src/pages/Home.jsx`")) {
       const lines = step.content.split('\n');
       let inCode = false;
       let code = [];
       for (const line of lines) {
           if (line.match(/^\d+:\s/)) {
               code.push(line.replace(/^\d+:\s/, ''));
           }
       }
       if (code.length > 50) {
           // check if it's the simple white theme
           const codeStr = code.join('\n');
           if (codeStr.includes('bg-slate-50')) {
               fileContents['Home.jsx'] = codeStr;
           }
       }
    }
  } catch(e) {}
}

console.log("Found:", Object.keys(fileContents));
if (fileContents['Home.jsx']) {
  fs.writeFileSync('d:/aa-enterprises/src/pages/Home.jsx', fileContents['Home.jsx']);
  console.log("Restored Home.jsx");
}

