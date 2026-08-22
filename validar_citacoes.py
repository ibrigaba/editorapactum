import re

with open('citacoes.js', encoding='utf-8') as f:
    content = f.read()

# Conta strings entre aspas com 50+ chars nos arrays JS
pattern = re.compile(r'"([^"\\]{50,})"')
quotes = pattern.findall(content)

print(f"Total de citacoes detectadas: {len(quotes)}")
print()

step = max(1, len(quotes) // 10)
for i, q in enumerate(quotes[::step]):
    num = i * step + 1
    print(f"[{num}] {q[:115]}")
    print()
