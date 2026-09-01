import re

with open('d:/aa-enterprises/src/pages/BlogPost.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

count = 0
def repl(match):
    global count
    p_index = count % 15
    count += 1
    return f"image: products[{p_index}]?.image || '/images/hero.png'"

code = re.sub(r"image:\s*'https://images\.unsplash\.com[^']+'", repl, code)

if 'import { products }' not in code:
    code = "import { products } from '../data';\n" + code

with open('d:/aa-enterprises/src/pages/BlogPost.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Fixed images in BlogPost.jsx')
