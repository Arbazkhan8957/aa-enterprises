import re

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Remove the old static filters array
code = re.sub(r"const filters = \[\s*'All',\s*'Electrical',\s*'Automation',\s*'Control',\s*'Switching',\s*'Sensors',\s*\];", "", code)

# Find where Gallery component starts
gallery_start = "export default function Gallery() {"
new_gallery_start = """export default function Gallery() {
  const galleryProducts = useMemo(() => {
    return products.filter(p => p.brand && (p.brand.toLowerCase() === 'strok' || p.brand.toLowerCase() === 'sibass'));
  }, []);

  const filters = useMemo(() => {
    const uniqueCats = new Set(galleryProducts.map(p => p.category).filter(Boolean));
    return ['All', ...Array.from(uniqueCats)];
  }, [galleryProducts]);
"""

code = code.replace(gallery_start, new_gallery_start)

# Remove the old galleryProducts definition if it exists inside Gallery()
old_gp = "const galleryProducts = products.filter(p => p.brand && (p.brand.toLowerCase() === 'strok' || p.brand.toLowerCase() === 'sibass'));"
code = code.replace(old_gp, "")

with open('d:/aa-enterprises/src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Filters updated successfully!")
