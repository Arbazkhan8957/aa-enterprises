import re
import os

directory = 'd:/aa-enterprises/src/pages'
for filename in os.listdir(directory):
    if filename.endswith(".jsx"):
        path = os.path.join(directory, filename)
        with open(path, 'r', encoding='utf-8') as f:
            code = f.read()

        count = 0
        def repl(match):
            global count
            p_index = count % 15
            count += 1
            return f"image: products[{p_index}]?.image || '/images/hero.png'"

        new_code = re.sub(r"image:\s*'https://images\.unsplash\.com[^']+'", repl, code)

        if new_code != code:
            if 'import { products }' not in new_code:
                new_code = "import { products } from '../data';\n" + new_code
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_code)
            print(f'Fixed images in {filename}')

