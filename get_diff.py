import subprocess

try:
    output = subprocess.check_output(['git', 'log', '-p', '-n', '2', 'src/pages/Gallery.jsx'], universal_newlines=True)
    with open('gallery_diff.txt', 'w', encoding='utf-8') as f:
        f.write(output)
    print('Diff saved to gallery_diff.txt')
except Exception as e:
    print('Error:', e)
