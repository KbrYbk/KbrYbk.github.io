import os
import re
import glob

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace phone numbers and email
    content = content.replace('+7 (999) 999-99-99', '+7 (3812) 55-44-33')
    content = content.replace('tel:+79999999999', 'tel:+73812554433')
    content = content.replace('info@example.com', 'avanstroy@mai.ru')

    # 2. Replace <object> tags with <img> tags
    # First, handle the mapflag with nested <img>
    content = re.sub(
        r'<object[^>]*data="(resources/svg/mapflag\.svg)"[^>]*>\s*<img[^>]*>\s*</object>',
        r'<img src="\1" aria-hidden="true" alt="">',
        content
    )
    # Then handle the rest (self-closing or empty object tags)
    def repl_obj(match):
        attrs = match.group(1)
        data_match = re.search(r'data="([^"]+)"', attrs)
        if not data_match:
            return match.group(0)
        src = data_match.group(1)
        
        class_match = re.search(r'class="([^"]+)"', attrs)
        class_attr = f' class="{class_match.group(1)}"' if class_match else ''
        
        return f'<img src="{src}" aria-hidden="true" alt=""{class_attr}>'

    content = re.sub(r'<object([^>]*data="resources/svg/[^"]+"\s*[^>]*)>\s*</object>', repl_obj, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print('HTML files processed.')
