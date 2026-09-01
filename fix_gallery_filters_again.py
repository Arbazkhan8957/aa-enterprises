import re

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_category = "category: (product.category || 'Industrial').replace('Sibass ', '').replace('Stroke ', '').replace('Electricals', 'Electrical'),"
new_category = "category: product.category || 'Industrial',"

code = code.replace(old_category, new_category)

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Filters reverted to original names!")
