const fs = require('fs');

let content = fs.readFileSync('src/blogData.js', 'utf8');

// We want to insert an image right after the first paragraph in the content block
// or just at the beginning of the content block.
// The easiest way is to add a dynamic image at the start of the content string.
// Let's modify the raw string.

content = content.replace(/content:\s*`\s*(<h2>|<p>)/g, `content: \`
      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" alt="Industrial Content" class="w-full aspect-video object-cover rounded-3xl shadow-lg my-10" />
      $1`);

// Also add a highlight box for premium feel
content = content.replace(/<h3>1\./g, `<div class="highlight-box">
        <strong>Pro Tip:</strong> Always consult with our technical engineers before finalizing your electrical specifications.
      </div>
      <h3>1.`);

fs.writeFileSync('src/blogData.js', content);
console.log('Injected images and premium boxes into blog content!');
