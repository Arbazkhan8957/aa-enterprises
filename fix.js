const fs = require('fs');
let code = fs.readFileSync('d:/aa-enterprises/src/blogData.js', 'utf8');

if (!code.includes('import { products }')) {
  code = "import { products } from './data';\n\n" + code;
}

let count = 0;
code = code.replace(/image:\s*'(https:\/\/images\.unsplash\.com[^']+)'/g, (match, url) => {
  const pIndex = count % 15;
  count++;
  return \image: products[\]?.image || '/images/hero.png'\;
});

fs.writeFileSync('d:/aa-enterprises/src/blogData.js', code);
console.log('Fixed images in blogData.js');
