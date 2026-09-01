with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace("=== 'strok'", "=== 'stroke'")

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Fixed Stroke typo')
