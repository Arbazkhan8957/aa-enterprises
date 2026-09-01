with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_str = "const galleryProducts = products.slice(0, 12);"
new_str = "const galleryProducts = products.filter(p => p.brand && (p.brand.toLowerCase() === 'strok' || p.brand.toLowerCase() === 'sibass'));"

code = code.replace(old_str, new_str)

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Done')
