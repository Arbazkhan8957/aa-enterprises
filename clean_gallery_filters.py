import re

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_map = """  const projects = galleryProducts.map((product, index) => ({
    id: product.id || index,
    title: product.name,
    client: product.brand || 'AA Enterprises',
    desc:
      product.description ||
      'Industrial-grade component suitable for demanding electrical and automation applications.',
    img: product.image || '/images/hero.png',
    category: product.category || 'Industrial',
    model: product.model || 'Industrial Component',
  }));"""

# I need to use regex since the exact whitespace might differ.
# Let's just do a string replacement of category: product.category || 'Industrial',
old_category = "category: product.category || 'Industrial',"
new_category = "category: (product.category || 'Industrial').replace('Sibass ', '').replace('Stroke ', '').replace('Electricals', 'Electrical'),"

code = code.replace(old_category, new_category)

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Filters cleaned successfully!")
