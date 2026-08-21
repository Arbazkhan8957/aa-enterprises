import os
import re

directories = ['d:/aa-enterprises/src/pages', 'd:/aa-enterprises/src/components']

replacements = [
    # Gradients
    (r'from-orange-400 via-orange-500 to-red-500', 'from-indigo-400 via-purple-500 to-violet-600'),
    (r'from-yellow-400 to-yellow-600', 'from-indigo-500 to-purple-600'),
    (r'from-yellow-500/20 to-orange-500/20', 'from-indigo-500/20 to-purple-500/20'),
    
    # Oranges to Indigos
    (r'orange-400', 'indigo-400'),
    (r'orange-500', 'indigo-500'),
    (r'orange-600', 'indigo-600'),
    (r'orange-700', 'indigo-700'),
    
    # Yellows to Purples/Violets
    (r'yellow-400', 'violet-400'),
    (r'yellow-500', 'violet-500'),
    (r'yellow-600', 'violet-600'),
    (r'yellow-50', 'slate-900'), # In dark mode context
    
    # Zincs to Slates for a cooler, techy dark mode (bluish tint)
    (r'zinc-950', 'slate-950'),
    (r'zinc-900', 'slate-900'),
    (r'zinc-800', 'slate-800'),
    (r'zinc-700', 'slate-700'),
    (r'zinc-600', 'slate-600'),
    (r'zinc-500', 'slate-500'),
    (r'zinc-400', 'slate-400'),
    (r'zinc-300', 'slate-300'),
    (r'zinc-200', 'slate-200'),
    
    # Hardcoded background colors that look dark/warm
    (r'bg-\[\#121212\]', 'bg-slate-950'),
    (r'bg-\[\#1a1a1a\]', 'bg-slate-900')
]

for directory in directories:
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = re.sub(old, new, new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

print("Theme colors updated to Techies style!")
