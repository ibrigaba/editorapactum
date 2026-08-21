import urllib.request, re, json, time

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
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'pt-BR,pt;q=0.9',
}

results = {}

for id_book, asin in asins:
    url = f"https://translate.google.com/translate?sl=pt&tl=en&u=https://www.amazon.com.br/dp/{asin}"
    price_found = None
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Match Kindle price pattern: "Kindle R$ XX,XX" or "ou R$ XX,XX para comprar" or "R$ XX,XX"
            m = re.search(r'ou\s*R\$\s*([\d\.,]+)\s*para\s*comprar', html, re.IGNORECASE)
            if m:
                price_found = f"R$ {m.group(1).strip()}"
            else:
                m2 = re.search(r'R\$\s*([\d]+,[\d]{2})', html)
                if m2:
                    price_found = f"R$ {m2.group(1).strip()}"
    except Exception as e:
        pass
        
    print(f"'{id_book}': ('{asin}', '{price_found}'),")
    results[id_book] = price_found
    time.sleep(0.5)

with open("precos_br.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print("Finished scraping Amazon BR prices")
