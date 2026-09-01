import json
import re

with open('d:/aa-enterprises/src/data.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Try to extract the products array. We can just use regex to find categories of Strok and Sibass.
categories = set()
lines = data.split('\n')
current_brand = ''
current_cat = ''

for line in lines:
    b_match = re.search(r"brand:\s*['\"](.*?)['\"]", line)
    c_match = re.search(r"category:\s*['\"](.*?)['\"]", line)
    
    if b_match:
        current_brand = b_match.group(1)
    if c_match:
        current_cat = c_match.group(1)
        
    if current_brand.lower() in ['strok', 'sibass'] and current_cat:
        categories.add(current_cat)

print("Categories for Strok and Sibass:")
for c in categories:
    print("-", c)
