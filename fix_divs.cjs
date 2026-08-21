const fs = require('fs');
const path = require('path');
const files = ['Brands.jsx','Services.jsx','Projects.jsx','Blog.jsx'].map(f => path.join('src','pages',f));
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/<\/section>\s*<\/div>/, '</section>');
  fs.writeFileSync(f, c);
});
console.log("Fixed extra divs.");
