import re

with open('d:/aa-enterprises/src/blogData.js', 'r', encoding='utf-8') as f:
    code = f.read()

if 'import { products }' not in code:
    code = "import { products } from './data';\n\n" + code

count = 0
def repl(match):
    global count
    p_index = count % 15
    count += 1
    return f"image: products[{p_index}]?.image || '/images/hero.png'"

code = re.sub(r"image:\s*'https://images\.unsplash\.com[^']+'", repl, code)

with open('d:/aa-enterprises/src/blogData.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('Fixed images in blogData.js')
