import re

with open(r'D:\coding\my-tech-blog\docs\Arry\core\移动端、响应式项目开发\9、兼容多终端响应式项目开发，标准规范和最佳实践.md', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
in_details = False
css_lines = []

for line in lines:
    if '<details class=' in line and 'custom-block details' in line:
        in_details = True
        continue
    if in_details and '</details>' in line:
        in_details = False
        continue
    if in_details:
        # Remove HTML tags
        text = re.sub(r'<[^>]+>', '', line)
        # Restore escaped chars
        text = text.replace('&lt;', '<')
        text = text.replace('&gt;', '>')
        text = text.replace('&amp;', '&')
        if text.strip():
            css_lines.append(text.rstrip())
        else:
            css_lines.append('')

with open(r'D:\temp_css.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(css_lines))

print("Done! CSS extracted to D:\\temp_css.txt")
print(f"Total CSS lines: {len(css_lines)}")
