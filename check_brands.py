import re

with open('d:/aa-enterprises/src/data.js', 'r', encoding='utf-8') as f:
    data = f.read()

sibass = re.findall(r"brand:\s*['\"].*?Sibass.*?['\"]", data, re.IGNORECASE)
strok = re.findall(r"brand:\s*['\"].*?Strok.*?['\"]", data, re.IGNORECASE)

print('Sibass count:', len(sibass))
print('Strok count:', len(strok))
