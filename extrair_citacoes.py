"""
Extrator de Citações dos Ebooks da Editora Pactum
Lê EPUBs e TXTs traduzidos, seleciona os melhores trechos e gera citacoes.js
"""

import zipfile
import re
import os
import json
import random

BASE = r"D:\.gemini\antigravity\scratch\traducao_puritana"
OUT_JS = r"D:\.gemini\antigravity\editorapactum\citacoes.js"

# Mapeamento: id_livro -> arquivos para ler
SOURCES = {
    "arte-contentamento-divino": [
        "Thomas_Watson_A_Arte_do_Contentamento_Divino_2aEd.epub",
        "Watson_Contentment_2aEdicao.txt",
    ],
    "carta-privilegios-crente": [
        "Thomas_Watson_A_Carta_de_Privilegios_do_Crente_2aEd.epub",
        "Watson_Christians_Charter_2aEdicao.txt",
    ],
    "chave-secreta-ceu": [
        "Thomas_Brooks_A_Chave_Secreta_do_Ceu_2aEd.epub",
    ],
    "cristao-silencioso": [
        "Thomas_Brooks_O_Cristao_Silencioso_2aEd.epub",
    ],
    "quinhao-tortuoso": [
        "Thomas_Boston_O_Quinhao_Tortuoso_2aEd.epub",
    ],
    "filho-luz-caminhando-trevas": [
        "Thomas_Goodwin_O_Filho_da_Luz_Caminhando_em_Trevas_2aEd.epub",
    ],
    "exposicoes-efesios": [
        "Thomas_Goodwin_Exposicoes_em_Efesios_2aEd.epub",
    ],
    "retorno-oracoes": [
        "Thomas_Goodwin_O_Retorno_das_Oracoes_2aEd.epub",
    ],
    "paciencia-obra-perfeita": [
        "Thomas_Goodwin_A_Paciencia_e_Sua_Obra_Perfeita_2aEd.epub",
    ],
    "glorioso-banquete-evangelho": [
        "Sibbes_Glorious_Feast_2aEdicao.txt",
    ],
    "conflito-alma": [
        "Sibbes_Souls_Conflict_2aEdicao.txt",
    ],
    "terrivel-voz-deus-cidade": [
        "Thomas_Vincent_A_Terrivel_Voz_de_Deus_na_Cidade_2aEd.epub",
        "Vincent_Terrible_Voice_2aEdicao.txt",
    ],
    "amor-cristo-invisivel": [
        "Thomas_Vincent_O_Amor_pelo_Cristo_Invisivel_2aEd.epub",
        "Vincent_Unseen_Christ_2aEdicao.txt",
    ],
    "refrigerio-abatido": [
        "William_Bridge_Um_Refrigerio_para_o_Abatido_2aEd.epub",
    ],
    "limites-liberdade-crista": [
        "The True Bounds of Christian Fr - Samuel Bolton.pdf",
    ],
    "vaidade-mundo": [],  # sem arquivo identificado — ficará vazio
}

BOOK_META = {
    "arte-contentamento-divino": ("Thomas Watson", "A Arte do Contentamento Divino"),
    "carta-privilegios-crente": ("Thomas Watson", "A Carta de Privilégios do Crente"),
    "chave-secreta-ceu": ("Thomas Brooks", "A Chave Secreta do Céu"),
    "cristao-silencioso": ("Thomas Brooks", "O Cristão Silencioso sob a Vara"),
    "quinhao-tortuoso": ("Thomas Boston", "O Quinhão Tortuoso"),
    "filho-luz-caminhando-trevas": ("Thomas Goodwin", "O Filho da Luz Caminhando em Trevas"),
    "exposicoes-efesios": ("Thomas Goodwin", "Exposições em Efésios"),
    "retorno-oracoes": ("Thomas Goodwin", "O Retorno das Orações"),
    "paciencia-obra-perfeita": ("Thomas Goodwin", "A Paciência e Sua Obra Perfeita"),
    "glorioso-banquete-evangelho": ("Richard Sibbes", "O Glorioso Banquete do Evangelho"),
    "conflito-alma": ("Richard Sibbes", "O Conflito da Alma"),
    "terrivel-voz-deus-cidade": ("Thomas Vincent", "A Terrível Voz de Deus na Cidade"),
    "amor-cristo-invisivel": ("Thomas Vincent", "O Amor pelo Cristo Invisível"),
    "refrigerio-abatido": ("William Bridge", "Um Refrigério para o Abatido"),
    "limites-liberdade-crista": ("Samuel Bolton", "Os Limites da Liberdade Cristã"),
    "vaidade-mundo": ("Ezekiel Hopkins", "A Vaidade do Mundo"),
}


def read_epub_text(path):
    texts = []
    try:
        with zipfile.ZipFile(path, 'r') as z:
            for name in sorted(z.namelist()):
                if name.endswith(('.html', '.xhtml', '.htm')):
                    raw = z.read(name).decode('utf-8', errors='ignore')
                    clean = re.sub(r'<[^>]+>', ' ', raw)
                    clean = re.sub(r'&nbsp;', ' ', clean)
                    clean = re.sub(r'&amp;', '&', clean)
                    clean = re.sub(r'&lt;', '<', clean)
                    clean = re.sub(r'&gt;', '>', clean)
                    clean = re.sub(r'&#\d+;', '', clean)
                    clean = re.sub(r'\s+', ' ', clean)
                    texts.append(clean)
    except Exception as e:
        print(f"  [EPUB ERR] {e}")
    return ' '.join(texts)


def read_txt(path):
    for enc in ('utf-8', 'utf-8-sig', 'latin-1', 'cp1252'):
        try:
            with open(path, encoding=enc) as f:
                return f.read()
        except Exception:
            continue
    return ''


def load_source(filename):
    path = os.path.join(BASE, filename)
    if not os.path.exists(path):
        print(f"  [SKIP] {filename}")
        return ''
    kb = os.path.getsize(path) // 1024
    print(f"  [LOAD] {filename} ({kb} KB)")
    if filename.endswith('.epub'):
        return read_epub_text(path)
    if filename.endswith('.txt'):
        return read_txt(path)
    return ''


PT_WORDS = re.compile(
    r'\b(de|da|do|em|que|não|por|para|com|uma|um|se|mais|são|foi|mas|como|'
    r'Deus|Cristo|alma|graça|fé|pecado|oração|amor|vida|sempre|nunca|toda|todo)\b',
    re.IGNORECASE
)

SKIP_PAT = re.compile(
    r'^(Capítulo|CAPÍTULO|Cap\.|Índice|Prefácio|\d+\s*[\.\)]\s|\[|www\.|http|©|ISBN)',
    re.IGNORECASE
)


def clean_quote(s):
    """Remove referências bíblicas inline, notas e artefatos de formatação."""
    # Remove referências tipo (Pv 14.10), (Sl 42:11), (Ef 6.18), etc.
    s = re.sub(r'\s*\([A-Z][a-zA-ZÀ-ú]{1,4}[\.\s]+\d+[\.\:]\d+[a-z]?\)', '', s)
    # Remove refs tipo "Efésios 6.18:", "Habacuque 2:4" no meio
    s = re.sub(r',?\s+[A-ZÁÉÍÓÚ][a-záéíóú]+\s+\d+[\.\:]\d+[a-z]?:', '', s)
    # Remove notas em colchetes [1], [a], etc.
    s = re.sub(r'\s*\[\d+\]|\s*\[[a-z]\]', '', s)
    # Remove aspas escapadas desnecessárias no início/fim
    s = re.sub(r'^["""\']+|["""\']+$', '', s)
    # Remove MAIÚSCULAS de formatação (cabeçalhos inline como "VIVIFICA O CORAÇÃO")
    s = re.sub(r'\b([A-ZÁÉÍÓÚ]{4,})\b', lambda m: m.group(1).capitalize(), s)
    # Normaliza espaços múltiplos
    s = re.sub(r'\s{2,}', ' ', s).strip()
    # Garante que termina com pontuação
    if s and s[-1] not in '.!?':
        s += '.'
    return s


def extract_candidates(text):
    text = re.sub(r'[ \t]+', ' ', text)
    sentences = re.split(r'(?<=[.!?])\s+', text)
    out = []
    for s in sentences:
        s = s.strip()
        if not (58 <= len(s) <= 285):
            continue
        if not PT_WORDS.search(s):
            continue
        if SKIP_PAT.match(s):
            continue
        if s.count('  ') > 2:
            continue
        out.append(s)
    return out


THEOLOGICAL_WORDS = [
    'graça','misericórdia','redenção','salvação','Deus','Cristo','Senhor','Espírito',
    'alma','coração','eternidade','promessa','fé','oração','pecado','glória',
    'consolação','santidade','amor','sofrimento','providência','contentamento',
    'arrependimento','humildade','esperança','confiança','tribulação','consolo',
    'eleição','predestinação','justificação','santificação','perseverança',
]


def score(s):
    sc = 0.0
    sl = s.lower()
    for w in THEOLOGICAL_WORDS:
        if w in sl:
            sc += 1.4
    l = len(s)
    if 85 <= l <= 210:
        sc += 2.5
    elif 58 <= l < 85 or 210 < l <= 285:
        sc += 0.8
    if s.endswith('.'):
        sc += 1.0
    for p in ['não ', 'nunca ', 'sempre ', 'jamais ', 'toda ', 'todo ']:
        if p in sl:
            sc += 0.7
    if s.endswith('?'):
        sc -= 0.8
    return sc


def best_quotes(text, n=6):
    cands = extract_candidates(text)
    if not cands:
        return []
    # Aplica limpeza antes de pontuar
    cands = [clean_quote(c) for c in cands]
    # Filtra as que ficaram muito curtas depois da limpeza
    cands = [c for c in cands if len(c) >= 55]
    scored = sorted(cands, key=score, reverse=True)
    selected = []
    for s in scored:
        ws = set(re.sub(r'\W+', ' ', s.lower()).split())
        dup = False
        for sel in selected:
            wsel = set(re.sub(r'\W+', ' ', sel.lower()).split())
            if len(ws & wsel) / max(len(ws | wsel), 1) > 0.52:
                dup = True
                break
        if not dup:
            selected.append(s)
        if len(selected) >= n:
            break
    return selected


def main():
    print("=" * 60)
    print("EXTRATOR DE CITAÇÕES — EDITORA PACTUM")
    print("=" * 60)

    all_book_quotes = {}
    all_carousel = []

    for book_id, files in SOURCES.items():
        print(f"\n📖 [{book_id}]")
        combined = ''
        for f in files:
            combined += '\n' + load_source(f)

        if combined.strip():
            quotes = best_quotes(combined, n=6)
        else:
            quotes = []

        if quotes:
            all_book_quotes[book_id] = quotes
            print(f"  ✓ {len(quotes)} citações extraídas")
            for q in quotes[:2]:
                print(f"    · {q[:95]}...")
            meta = BOOK_META.get(book_id, ("Editora Pactum", book_id))
            for q in quotes[:3]:
                all_carousel.append({
                    "quote": q,
                    "author": meta[0],
                    "book": meta[1],
                    "bookId": book_id
                })
        else:
            print(f"  ⚠ Sem texto — livro omitido do JS")

    random.shuffle(all_carousel)
    print(f"\n✅ {len(all_book_quotes)} livros · {sum(len(v) for v in all_book_quotes.values())} citações modais · {len(all_carousel)} carousel")

    # ─── Gera citacoes.js ─────────────────────────────────────────────────
    lines = []
    lines.append('/**')
    lines.append(' * EDITORA PACTUM — CITAÇÕES EXTRAÍDAS DOS EBOOKS (gerado automaticamente)')
    lines.append(f' * Livros: {len(all_book_quotes)} | Modal: {sum(len(v) for v in all_book_quotes.values())} | Carousel: {len(all_carousel)}')
    lines.append(' */\n')

    lines.append('const CITACOES_POR_LIVRO = {')
    for book_id, quotes in all_book_quotes.items():
        lines.append(f'  "{book_id}": [')
        for q in quotes:
            escaped = q.replace('\\', '\\\\').replace('"', '\\"')
            lines.append(f'    "{escaped}",')
        lines.append('  ],\n')
    lines.append('};\n')

    lines.append('const CAROUSEL_QUOTES = [')
    for item in all_carousel:
        q = item['quote'].replace('\\', '\\\\').replace('"', '\\"')
        a = item['author']
        b = item['book']
        bid = item['bookId']
        lines.append(f'  {{ quote: "{q}", author: "{a}", book: "{b}", bookId: "{bid}" }},')
    lines.append('];\n')

    content = '\n'.join(lines)
    with open(OUT_JS, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n✅ Gerado: {OUT_JS}")


if __name__ == '__main__':
    main()
