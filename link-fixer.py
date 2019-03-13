import glob
import re

htmls = glob.glob("./html/**/*.html", recursive=True)

def dashrepl(matchobj):
    if matchobj.group(1) == 'md':
        return 'html'

for path in htmls:
    data = ""
    with open(path, 'r', encoding="utf-8") as file:
        data = file.read()
    data = re.sub(r'\shref\=[\"\'](.*?)\.md[\"\']', r' href="\1.html"', data)
    with open(path, 'w', encoding="utf-8") as file:
        file.write(data)
    
