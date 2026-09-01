import re

with open('d:/aa-enterprises/src/data.js', 'r', encoding='utf-8') as f:
    data = f.read()

aa = re.findall(r"brand:\s*['\"]AA.*?['\"]", data, re.IGNORECASE)
print('AA count:', len(aa))
