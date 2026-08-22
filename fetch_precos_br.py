import urllib.request
import re
import json
import time

asins = [
    ("pentateuco-interlinear", "B0HD2PC5YY"),
    ("biblia-interlinear-hg-vol1", "B0HFTTTT1Z"),
    ("biblia-profetas-maiores", "B0HDFPGNN3"),
    ("biblia-livros-historicos", "B0HDFPC4RM"),
    ("biblia-profetas-menores", "B0HDGL26ZJ"),
    ("biblia-livros-poeticos", "B0HDG2D5PD"),
    ("nt-interlinear-grego-pt", "B0H75RZF89"),
    ("arte-contentamento-divino", "B0H4267BD1"),
    ("chave-secreta-ceu", "B0H42BKKZT"),
    ("glorioso-banquete-evangelho", "B0H2BFQGTY"),
    ("filho-luz-caminhando-trevas", "B0H2B4FC2C"),
    ("anatomia-pecados-secretos", "B0HCDFR88B"),
    ("terrivel-voz-deus-cidade", "B0H2PVDYR5"),
    ("vaidade-mundo", "B0HD1F53NG"),
    ("exposicoes-efesios", "B0H2KZXKJ7"),
    ("retorno-oracoes", "B0H2W7CM7Y"),
    ("limites-liberdade-crista", "B0H271BHQ5"),
    ("suspiro-por-deus", "B0H2T177BT"),
    ("paciencia-obra-perfeita", "B0H2KQJW3M"),
    ("refrigerio-abatido", "B0H2MXB8WY"),
    ("chamado-nao-convertidos", "B0H6NDYT59"),
    ("sobre-paciencia-agostinho", "B0GY9Z6H32"),
    ("amor-cristo-invisivel", "B0GX315H3V"),
    ("carta-privilegios-crente", "B0H4X5DHJW"),
    ("entranhas-abertas", "B0H2SQKLBL"),
    ("cristao-silencioso", "B0H2MZ8LW7"),
    ("quinhao-tortuoso", "B0H6NN75PN"),
    ("conflito-alma", "B0H4X79RJ4"),
    ("misterio-providencia", "B0H6NDVWVH"),
    ("nt-trilingue", "B0HBCRRWMV"),
    ("nt-interlinear-grego-es", "B0HBNGVCC5"),
    ("nt-interlinear-grego-fr", "B0HBFZKH4N"),
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'pt-BR,pt;q=0.9',
}

def clean_price(p):
    if not p:
        return None
    p = p.replace('&nbsp;', ' ').replace('\xa0', ' ').strip()
    m = re.search(r'R\$\s*([\d\.,]+)', p)
    if m:
        return f"R$ {m.group(1).strip()}"
    return p

results = {}

for id_book, asin in asins:
    url = f"https://translate.google.com/translate?sl=pt&tl=en&u=https://www.amazon.com.br/dp/{asin}"
    price_found = None
    
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                
                m = re.search(r'ou\s*<span[^>]*>\s*R\$\s*(&nbsp;|\xa0|\s)*([\d\.,]+)\s*</span>\s*para\s*comprar', html, re.IGNORECASE)
                if not m:
                    m = re.search(r'ou\s*R\$\s*(&nbsp;|\xa0|\s)*([\d\.,]+)\s*para\s*comprar', html, re.IGNORECASE)
                
                if m:
                    price_found = f"R$ {m.group(2).strip()}"
                else:
                    m2 = re.search(r'id="tmm-grid-swatch-KINDLE".*?R\$\s*(&nbsp;|\xa0|\s)*([\d]+,[\d]{2})', html, re.DOTALL)
                    if m2 and m2.group(2).strip() != "0,00":
                        price_found = f"R$ {m2.group(2).strip()}"
                    else:
                        for pm in re.finditer(r'R\$\s*(&nbsp;|\xa0|\s)*([\d]+,[\d]{2})', html):
                            val = pm.group(2).strip()
                            if val != "0,00":
                                price_found = f"R$ {val}"
                                break
            if price_found:
                break
        except Exception:
            time.sleep(1)
            
    price_found = clean_price(price_found)
    print(f"'{id_book}': '{price_found}',  # {asin}")
    results[id_book] = price_found
    time.sleep(0.4)

with open("precos_br.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Finished updating precos_br.json!")
