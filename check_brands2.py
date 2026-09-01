import re

with open('d:/aa-enterprises/src/data.js', 'r', encoding='utf-8') as f:
    data = f.read()

lines = data.split('\n')
for i, line in enumerate(lines):
    if 'sibass' in line.lower():
        print(f"Line {i+1}: {line}")
    if 'strok' in line.lower():
        print(f"Line {i+1}: {line}")
