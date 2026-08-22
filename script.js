/**
 * EDITORA PACTUM — JAVASCRIPT PRINCIPAL (VIBRANT & INTERACTIVE)
 * Catálogo Completo (32 Livros com Preços Oficiais em BRL), 
 * Efeitos 3D Tilt, Favoritos (Wishlist), Busca Rápida, Filtros por Preço e Categoria,
 * Modal Interativo com Navegação Entre Obras, Citações dos Mestres e Web Audio FX.
 */

// ==========================================================================
// BANCO DE DADOS DOS LIVROS (32 TÍTULOS COM ASIN, PREÇOS EM BRL E CAPAS REAIS)
// ==========================================================================
const BOOKS_DATABASE = [
  // --- BÍBLIAS INTERLINEARES (PORTUGUÊS) ---
  {
    id: "pentateuco-interlinear",
    title: "O Pentateuco Interlinear Hebraico-Português: Tradução Exegética Contextual",
    shortTitle: "Pentateuco Interlinear Hebraico-Português",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 18,99",
    numPrice: 18.99,
    asin: "B0HD2PC5YY",
    cover: "capas/pentateuco_interlinear.jpg",
    language: "Hebraico / Português",
    pages: "Pentateuco (Gênesis a Deuteronômio)",
    format: "eBook Kindle & KU",
    quote: "No princípio criou Deus os céus e a terra — com aparato analítico minucioso e transliteração direta das raízes hebraicas.",
    synopsis: "Texto hebraico massorético original, com transliteração acadêmica e simplificada lado a lado, e tradução exegética contextual minuciosa. Ferramenta indispensável para pastores, seminaristas e estudantes das Escrituras Sagradas."
  },
  {
    id: "biblia-interlinear-hg-vol1",
    title: "Bíblia Interlinear Hebraico–Grego — Volume 1: Pentateuco",
    shortTitle: "Bíblia Interlinear Hebraico–Grego Vol. 1: Pentateuco",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear Poliglota",
    price: "R$ 29,90",
    numPrice: 29.90,
    asin: "B0HFTTTT1Z",
    cover: "capas/biblia_interlinear_hg_vol1.jpg",
    language: "Hebraico / Grego / Português",
    pages: "Gênesis a Deuteronômio",
    format: "eBook Kindle & KU",
    quote: "Hebraico Massorético e Septuaginta Grega (LXX) confrontados versículo por versículo em edição de alto padrão filológico.",
    synopsis: "Edição monumental reunindo o Hebraico Massorético, a Septuaginta Grega (LXX), transliteração fonética completa e tradução literal alinhada palavra por palavra."
  },
  {
    id: "biblia-profetas-maiores",
    title: "Bíblia Interlinear Hebraico-Português: Profetas Maiores",
    shortTitle: "Bíblia Interlinear: Profetas Maiores",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 17,99",
    numPrice: 17.99,
    asin: "B0HDFPGNN3",
    cover: "capas/biblia_profetas_maiores.jpg",
    language: "Hebraico / Português",
    pages: "Isaías a Daniel",
    format: "eBook Kindle & KU",
    quote: "De Isaías a Daniel: a majestade profética preservada no idioma do pacto com aparato de notas exegéticas.",
    synopsis: "Texto Hebraico Original dos Profetas Maiores (Isaías, Jeremias, Lamentações, Ezequiel e Daniel), com transliteração fonética precisa e tradução exegética contextual versículo por versículo."
  },
  {
    id: "biblia-livros-historicos",
    title: "Bíblia Interlinear Hebraico-Português: Livros Históricos",
    shortTitle: "Bíblia Interlinear: Livros Históricos",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 17,00",
    numPrice: 17.00,
    asin: "B0HDFPC4RM",
    cover: "capas/biblia_livros_historicos.jpg",
    language: "Hebraico / Português",
    pages: "Josué a Ester",
    format: "eBook Kindle & KU",
    quote: "A narrativa providencial de Israel de Josué até Ester exposta com rigor semântico e transliteração fonética.",
    synopsis: "Cobertura completa da narrativa histórica de Israel de Josué até Ester com texto hebraico original, vocalização massorética, transliteração fonética e aparato de notas exegéticas."
  },
  {
    id: "biblia-profetas-menores",
    title: "Bíblia Interlinear Hebraico-Português: Profetas Menores",
    shortTitle: "Bíblia Interlinear: Profetas Menores",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 15,00",
    numPrice: 15.00,
    asin: "B0HDGL26ZJ",
    cover: "capas/biblia_profetas_menores.jpg",
    language: "Hebraico / Português",
    pages: "Oseias a Malaquias",
    format: "eBook Kindle & KU",
    quote: "Os doze profetas em texto hebraico integral com tradução analítica e fidelidade filológica irrepreensível.",
    synopsis: "Os doze profetas menores em texto hebraico integral com tradução analítica, transliteração fonética de fácil leitura e fidelidade filológica rigorosa."
  },
  {
    id: "biblia-livros-poeticos",
    title: "Bíblia Interlinear Hebraico-Português: Livros Poéticos e de Sabedoria",
    shortTitle: "Bíblia Interlinear: Livros Poéticos e Sabedoria",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 15,99",
    numPrice: 15.99,
    asin: "B0HDG2D5PD",
    cover: "capas/biblia_livros_poeticos.jpg",
    language: "Hebraico / Português",
    pages: "Jó, Salmos, Provérbios, Eclesiastes, Cantares",
    format: "eBook Kindle & KU",
    quote: "A sublime poesia hebraica e a sabedoria divina traduzidas com preservação lírica e precisão morfológica.",
    synopsis: "A sublime poesia hebraica e a literatura sapiencial bíblica expostas com preservação métrica, vocabulário exegético contextual e transliteração detalhada."
  },
  {
    id: "nt-interlinear-grego-pt",
    title: "Novo Testamento Interlinear Grego-Português: Tradução Exegética Contextual",
    shortTitle: "Novo Testamento Interlinear Grego-Português",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear NT",
    price: "R$ 16,90",
    numPrice: 16.90,
    asin: "B0H75RZF89",
    cover: "capas/nt_interlinear_grego_pt.jpg",
    language: "Grego Koiné / Português",
    pages: "Mateus a Apocalipse",
    format: "eBook Kindle & KU",
    quote: "O Koiné apostólico de Mateus ao Apocalipse com análise morfológica, transliteração e tradução contínua.",
    synopsis: "Tradução exegética contextual a partir do Grego Koiné com análise morfológica, transliteração fonética e tradução interlinear corrida ideal para estudos bíblicos aprofundados."
  },

  // --- CLÁSSICOS PURITANOS ---
  {
    id: "arte-contentamento-divino",
    title: "A Arte do Contentamento Divino (Coleção Clássicos Puritanos Vol. 1) 2ª Edição",
    shortTitle: "A Arte do Contentamento Divino",
    author: "Thomas Watson",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 7,90",
    numPrice: 7.90,
    asin: "B0H4267BD1",
    cover: "capas/arte_contentamento_divino.jpg",
    language: "Português",
    pages: "Tratado Completo",
    format: "eBook Kindle & KU",
    quote: "O contentamento é uma gema preciosa que enriquece a alma nas maiores pobrezas terrenas.",
    synopsis: "Uma das maiores joias da literatura puritana. Thomas Watson expõe a passagem de Filipenses 4:11 ensinando a misteriosa e santa arte de estar plenamente satisfeito em Deus em meio a qualquer circunstância da vida."
  },
  {
    id: "chave-secreta-ceu",
    title: "A Chave Secreta do Céu 2ª Edição: O Dever e a Doçura da Oração Secreta",
    shortTitle: "A Chave Secreta do Céu",
    author: "Thomas Brooks",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 7,90",
    numPrice: 7.90,
    asin: "B0H42BKKZT",
    cover: "capas/chave_secreta_ceu.jpg",
    language: "Português",
    pages: "Tratado de Oração",
    format: "eBook Kindle & KU",
    quote: "A oração secreta é a chave de ouro que abre o cofre de misericórdias inesgotáveis de Deus.",
    synopsis: "Thomas Brooks descortina os tesouros e as delícias da comunhão secreta com o Pai. Um chamado vigoroso e consolador à intimidade no quarto secreto de oração."
  },
  {
    id: "glorioso-banquete-evangelho",
    title: "O Glorioso Banquete do Evangelho 2ª Edição",
    shortTitle: "O Glorioso Banquete do Evangelho",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 6,99",
    numPrice: 6.99,
    asin: "B0H2BFQGTY",
    cover: "capas/glorioso_banquete_evangelho.jpg",
    language: "Português",
    pages: "Sermões em Isaías 25",
    format: "eBook Kindle & KU",
    quote: "Há em Cristo mais misericórdia para nos abraçar e curar do que pecado em nós para nos condenar.",
    synopsis: "O célebre 'doutor celestial' Richard Sibbes expõe a abundância da graça de Deus, a vitória irrevogável sobre a morte e o consolo profundo nas aflições terrenas."
  },
  {
    id: "filho-luz-caminhando-trevas",
    title: "O Filho da Luz Caminhando em Trevas 2ª Edição",
    shortTitle: "O Filho da Luz Caminhando em Trevas",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 7,90",
    numPrice: 7.90,
    asin: "B0H2B4FC2C",
    cover: "capas/filho_luz_caminhando_trevas.jpg",
    language: "Português",
    pages: "Tratado Teológico-Pastoral",
    format: "eBook Kindle & KU",
    quote: "Nas horas em que a luz do Seu rosto parece oculta, apoie-se firme no braço invencível do Seu poder.",
    synopsis: "Como encontrar consolo, orientação e paz no aparente abandono espiritual e nas tribulações da consciência. Uma obra-prima de teologia pastoral e cuidado da alma."
  },
  {
    id: "anatomia-pecados-secretos",
    title: "A Anatomia dos Pecados Secretos (Coleção Clássicos Puritanos)",
    shortTitle: "A Anatomia dos Pecados Secretos",
    author: "Obadiah Sedgwick",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0HCDFR88B",
    cover: "capas/anatomia_pecados_secretos.jpg",
    language: "Português",
    pages: "Exposição do Salmo 19:12",
    format: "eBook Kindle & KU",
    quote: "A verdadeira santidade persegue as menores corrupções ocultas até a luz santa da cruz.",
    synopsis: "A descoberta das corrupções ocultas da alma e a busca incansável pela integridade e santidade diante dos olhos oniscientes de Deus."
  },
  {
    id: "terrivel-voz-deus-cidade",
    title: "A Terrível Voz de Deus na Cidade (Coleção Clássicos Puritanos Vol. 18) 2ª Edição",
    shortTitle: "A Terrível Voz de Deus na Cidade",
    author: "Thomas Vincent",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0H2PVDYR5",
    cover: "capas/terrivel_voz_deus_cidade.jpg",
    language: "Português",
    pages: "Relato Histórico-Teológico",
    format: "eBook Kindle & KU",
    quote: "A voz de Deus ressoa mais alta nas calamidades para despertar os homens à salvação eterna.",
    synopsis: "A mensagem da Providência divina nas históricas desolações de Londres pela Grande Peste de 1665 e pelo Grande Incêndio de 1666, narradas por quem permaneceu pregando entre os enfermos."
  },
  {
    id: "vaidade-mundo",
    title: "A Vaidade do Mundo: Uma Exposição Solene sobre Eclesiastes 1:2",
    shortTitle: "A Vaidade do Mundo",
    author: "Ezekiel Hopkins",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 5,99",
    numPrice: 5.99,
    asin: "B0HD1F53NG",
    cover: "capas/vaidade_mundo.jpg",
    language: "Português",
    pages: "Exposição Teológica",
    format: "eBook Kindle & KU",
    quote: "O mundo é uma sombra efêmera; somente a graça soberana concede tesouros imperecíveis.",
    synopsis: "Uma exposição penetrante e solene sobre a transitoriedade dos prazeres, honras e riquezas terrenas em contraste com a glória eterna do Reino de Deus."
  },
  {
    id: "exposicoes-efesios",
    title: "Exposições Teológicas em Efésios (Coleção Clássicos Puritanos Vol. 11) 2ª Edição",
    shortTitle: "Exposições Teológicas em Efésios",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 17,00",
    numPrice: 17.00,
    asin: "B0H2KZXKJ7",
    cover: "capas/exposicoes_efesios.jpg",
    language: "Português",
    pages: "Sermões nos Capítulos 2, 3 e 5",
    format: "eBook Kindle & KU",
    quote: "A salvação pela graça soberana é o monumento eterno edificado pelo amor incondicional da Trindade.",
    synopsis: "Monumentais exposições sobre a salvação pela graça soberana, as insondáveis riquezas do amor de Cristo e a união mística entre Cristo e Sua Igreja."
  },
  {
    id: "retorno-oracoes",
    title: "O Retorno das Orações (Coleção Clássicos Puritanos Vol. 15) 2ª Edição",
    shortTitle: "O Retorno das Orações",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 8,90",
    numPrice: 8.90,
    asin: "B0H2W7CM7Y",
    cover: "capas/retorno_oracoes.jpg",
    language: "Português",
    pages: "Exposição do Salmo 85:8",
    format: "eBook Kindle & KU",
    quote: "Quem envia orações como navios ao porto celestial deve vigiar na praia para receber suas cargas preciosas.",
    synopsis: "Como discernir e reconhecer as respostas de Deus aos nossos clamores, orações e súplicas com discernimento espiritual e gratidão santa."
  },
  {
    id: "limites-liberdade-crista",
    title: "Os Verdadeiros Limites da Liberdade Cristã (2ª Edição)",
    shortTitle: "Os Verdadeiros Limites da Liberdade Cristã",
    author: "Samuel Bolton",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 8,90",
    numPrice: 8.90,
    asin: "B0H271BHQ5",
    cover: "capas/limites_liberdade_crista.jpg",
    language: "Português",
    pages: "Tratado sobre Lei e Graça",
    format: "eBook Kindle & KU",
    quote: "Cristo nos liberta do jugo do pecado não para vivermos em rebeldia, mas no deleite da santa obediência.",
    synopsis: "Um dos mais equilibrados tratados sobre a relação entre a Lei moral e a Graça redentora, refutando tanto o legalismo rígido quanto o antinomianismo permissivo."
  },
  {
    id: "suspiro-por-deus",
    title: "Um Suspiro por Deus (Coleção Clássicos Puritanos Vol. 14) 2ª Edição",
    shortTitle: "Um Suspiro por Deus",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 6,90",
    numPrice: 6.90,
    asin: "B0H2T177BT",
    cover: "capas/suspiro_por_deus.jpg",
    language: "Português",
    pages: "Exposição do Salmo 27:4",
    format: "eBook Kindle & KU",
    quote: "O desejo mais nobre da alma nascida de novo é contemplar a beleza santificante do Senhor.",
    synopsis: "O anseio fervoroso da alma regenerada, a contemplação da formosura do Senhor e o consolo inefável de habitar continuamente em Sua presença."
  },
  {
    id: "paciencia-obra-perfeita",
    title: "A Paciência e Sua Obra Perfeita (Coleção Clássicos Puritanos Vol. 3)",
    shortTitle: "A Paciência e Sua Obra Perfeita",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,99",
    numPrice: 9.99,
    asin: "B0H2KQJW3M",
    cover: "capas/paciencia_obra_perfeita.jpg",
    language: "Português",
    pages: "Exposição de Tiago 1:4",
    format: "eBook Kindle & KU",
    quote: "A paciência é a virtude que permite à fé coroar o crente mesmo em meio às dores mais agudas.",
    synopsis: "Como a paciência graciosa opera no sofrimento humano, forjando na alma do crente a conformidade sublime com o caráter de Cristo."
  },
  {
    id: "refrigerio-abatido",
    title: "Um Refrigério para o Abatido (Coleção Clássicos Puritanos Vol. 3)",
    shortTitle: "Um Refrigério para o Abatido",
    author: "William Bridge",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0H2MXB8WY",
    cover: "capas/refrigerio_abatido.jpg",
    language: "Português",
    pages: "Sermões Consoladores",
    format: "eBook Kindle & KU",
    quote: "Nunca desespere da graça; quando você se sente no fundo do poço, as mãos de Cristo estão por baixo de você.",
    synopsis: "Sermões de extraordinário bálsamo sobre a cura dos desânimos, das tentações lancinantes e do abatimento de espírito mediante o exercício da fé salvadora em Jesus."
  },
  {
    id: "chamado-nao-convertidos",
    title: "Um Chamado aos Não Convertidos (Coleção Clássicos Puritanos)",
    shortTitle: "Um Chamado aos Não Convertidos",
    author: "Richard Baxter",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 12,90",
    numPrice: 12.90,
    asin: "B0H6NDYT59",
    cover: "capas/chamado_nao_convertidos.jpg",
    language: "Português",
    pages: "Tratado Evangelístico",
    format: "eBook Kindle & KU",
    quote: "Voltem enquanto há fôlego, venham a Cristo enquanto a porta da graça permanece escancarada!",
    synopsis: "Um dos apelos evangelísticos mais inflamados e influentes da história da Igreja, conclamando homens e mulheres ao arrependimento genuíno e à vida em Deus."
  },
  {
    id: "sobre-paciencia-agostinho",
    title: "Sobre a Paciência: A Virtude da Alma como Dom da Graça Divina",
    shortTitle: "Sobre a Paciência",
    author: "Santo Agostinho",
    category: "puritano",
    categoryLabel: "Patrística",
    price: "R$ 5,99",
    numPrice: 5.99,
    asin: "B0GY9Z6H32",
    cover: "capas/sobre_paciencia_agostinho.jpg",
    language: "Português",
    pages: "Tratado Patrístico",
    format: "eBook Kindle & KU",
    quote: "A paciência verdadeira é o dom celeste que nasce do amor de Deus derramado em nosso coração.",
    synopsis: "O Bispo de Hipona examina a paciência como virtude essencialmente cristã, decorrente da graça soberana de Deus diante das tribulações e perseguições."
  },
  {
    id: "amor-cristo-invisivel",
    title: "O Amor do Verdadeiro Cristão pelo Cristo Invisível (Vol. 8)",
    shortTitle: "O Amor pelo Cristo Invisível",
    author: "Thomas Vincent",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 6,90",
    numPrice: 6.90,
    asin: "B0GX315H3V",
    cover: "capas/amor_cristo_invisivel.jpg",
    language: "Português",
    pages: "Exposição de 1 Pedro 1:8",
    format: "eBook Kindle & KU",
    quote: "Não o vimos com os olhos carnais, contudo nosso coração inflama-se de santa afeição por Sua pessoa.",
    synopsis: "Sermões exortativos de intensa chama devocional sobre a natureza, a excelência e a prática do amor sincero a Jesus Cristo a quem não vimos mas amamos."
  },
  {
    id: "carta-privilegios-crente",
    title: "A Carta de Privilégios do Crente (Coleção Clássicos Puritanos Vol. 19)",
    shortTitle: "A Carta de Privilégios do Crente",
    author: "Thomas Watson",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 6,90",
    numPrice: 6.90,
    asin: "B0H4X5DHJW",
    cover: "capas/carta_privilegios_crente.jpg",
    language: "Português",
    pages: "Exposição de 1 Coríntios 3:21-23",
    format: "eBook Kindle & KU",
    quote: "Tudo é vosso, e vós de Cristo, e Cristo de Deus: a herança inabalável dos redimidos.",
    synopsis: "Uma celebração magnífica da herança inestimável do crente: todas as coisas pertencem àqueles que pertencem a Cristo."
  },
  {
    id: "entranhas-abertas",
    title: "Entranhas Abertas (Coleção Clássicos Puritanos Vol. 13)",
    shortTitle: "Entranhas Abertas: Cântico dos Cânticos",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0H2SQKLBL",
    cover: "capas/entranhas_abertas.jpg",
    language: "Português",
    pages: "Cântico dos Cânticos 4 a 6",
    format: "eBook Kindle & KU",
    quote: "A afeição terna do Salvador transborda em cuidado incessante por Sua Noiva redimida pelo sangue.",
    synopsis: "Exposição teológica e devocional sobre a ternura, a intimidade e a união mística entre Cristo Jesus e Sua Igreja lavada pelo sangue."
  },
  {
    id: "cristao-silencioso",
    title: "O Cristão Silencioso sob a Vara da Aflição (Vol. 2)",
    shortTitle: "O Cristão Silencioso sob a Vara",
    author: "Thomas Brooks",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 7,90",
    numPrice: 7.90,
    asin: "B0H2MZ8LW7",
    cover: "capas/cristao_silencioso.jpg",
    language: "Português",
    pages: "Exposição do Salmo 39:9",
    format: "eBook Kindle & KU",
    quote: "Emudeci e não abri a boca porque Tu o fizeste. O silêncio humilde diante da soberania santa.",
    synopsis: "Um guia prático e bíblico sobre o silêncio santo e a submissão humilde diante da soberania de Deus em meio aos sofrimentos mais agudos."
  },
  {
    id: "quinhao-tortuoso",
    title: "O Quinhão Tortuoso: A Soberania e Sabedoria de Deus nas Aflições",
    shortTitle: "O Quinhão Tortuoso",
    author: "Thomas Boston",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 6,99",
    numPrice: 6.99,
    asin: "B0H6NN75PN",
    cover: "capas/quinhao_tortuoso.jpg",
    language: "Português",
    pages: "Exposição de Eclesiastes 7:13",
    format: "eBook Kindle & KU",
    quote: "As curvaturas que Deus traça em nossa jornada destinam-se a dobrar o nosso orgulho para a santidade.",
    synopsis: "Como entender e acolher as 'curvaturas' e provações que Deus designa em nosso caminho para nos humilhar, santificar e atrair a Si."
  },
  {
    id: "conflito-alma",
    title: "O Conflito da Alma Consigo Mesma e a Vitória pela Fé (Vol. 17)",
    shortTitle: "O Conflito da Alma Consigo Mesma",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0H4X79RJ4",
    cover: "capas/conflito_alma.jpg",
    language: "Português",
    pages: "Exposição do Salmo 42:11",
    format: "eBook Kindle & KU",
    quote: "Prega para a tua alma: espera em Deus, pois ainda O louvarás pela salvação do Seu rosto.",
    synopsis: "A anatomia das lutas interiores da mente e do coração, e como a fé viva em Deus subjuga o desespero e renova a esperança na salvação divina."
  },
  {
    id: "misterio-providencia",
    title: "O Mistério da Providência (Coleção Clássicos Puritanos)",
    shortTitle: "O Mistério da Providência",
    author: "John Flavel",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 9,90",
    numPrice: 9.90,
    asin: "B0H6NDVWVH",
    cover: "capas/misterio_providencia.jpg",
    language: "Português",
    pages: "Exposição do Salmo 57:2",
    format: "eBook Kindle & KU",
    quote: "As providências de Deus são como caracteres hebraicos: compreendem-se melhor quando lidas no final.",
    synopsis: "Como reconhecer os desígnios providentes de Deus em cada detalhe da nossa história, nascimento, conversão e preservação na fé cristã."
  },

  // --- INTERNACIONAL / OUTROS IDIOMAS ---
  {
    id: "nt-trilingue",
    title: "Novo Testamento Trilíngue: Grego — Português — English",
    shortTitle: "Novo Testamento Trilíngue (Grego-PT-EN)",
    author: "Editora Pactum",
    category: "outros",
    categoryLabel: "Trilíngue",
    price: "R$ 22,00",
    numPrice: 22.00,
    asin: "B0HBCRRWMV",
    cover: "capas/nt_trilingue.jpg",
    language: "Grego / Português / Inglês",
    pages: "Novo Testamento Completo",
    format: "eBook Kindle & KU",
    quote: "Grego Koiné original, Português Exegético e Inglês Literal em disposição paralela de excelência.",
    synopsis: "Edição trilíngue de referência contendo o Grego Koiné original, Tradução Exegética Contextual em português e Word-for-Word Literal Reference em inglês com transliteração fonética."
  },
  {
    id: "nt-interlinear-grego-es",
    title: "Nuevo Testamento Interlineal Griego-Español: Texto Griego Koiné (BGNT)",
    shortTitle: "Nuevo Testamento Interlineal Griego-Español",
    author: "Editora Pactum",
    category: "outros",
    categoryLabel: "Español",
    price: "R$ 19,00",
    numPrice: 19.00,
    asin: "B0HBNGVCC5",
    cover: "capas/nt_interlinear_grego_es.jpg",
    language: "Griego Koiné / Español",
    pages: "Nuevo Testamento Completo",
    format: "eBook Kindle & KU",
    quote: "Texto Griego Koiné con transliteración y traducción analítica para toda la comunidad hispanohablante.",
    synopsis: "Texto Griego Koiné con transliteración fonética y traducción analítica palabra por palabra en español para la comunidad hispanohablante de estudiantes bíblicos."
  },
  {
    id: "nt-interlinear-grego-fr",
    title: "Nouveau Testament Interlinéaire Grec-Français: Texte Grec Koinè (BGNT)",
    shortTitle: "Nouveau Testament Interlinéaire Grec-Français",
    author: "Editora Pactum",
    category: "outros",
    categoryLabel: "Français",
    price: "R$ 20,00",
    numPrice: 20.00,
    asin: "B0HBFZKH4N",
    cover: "capas/nt_interlinear_grego_fr.jpg",
    language: "Grec Koinè / Français",
    pages: "Nouveau Testament Complet",
    format: "eBook Kindle & KU",
    quote: "Texte Grec Koinè avec translitération et traduction mot à mot pour l'étude théologique rigoureuse.",
    synopsis: "Texte Grec Koinè avec translitération et traduction mot à mot en français alignée sur la tradition Louis Segond 1910 pour l'étude théologique rigoureuse."
  }
];

// ==========================================================================
// BANCO DE DADOS DOS AUTORES
// ==========================================================================
const AUTHORS_DATABASE = [
  {
    name: "Thomas Watson",
    era: "1620 – 1686",
    desc: "Mestre puritano célebre por sua prosa vívida, ilustrações ricas e zelo pastoral inigualável.",
    worksCount: "2 Títulos no Catálogo",
    famousQuote: "O contentamento é a melodia sagrada do coração afinado com a vontade de Deus."
  },
  {
    name: "Richard Sibbes",
    era: "1577 – 1635",
    desc: "Conhecido como 'O Doutor Celestial' por sua pregação calorosa sobre a ternura e doçura da graça de Cristo.",
    worksCount: "4 Títulos no Catálogo",
    famousQuote: "Há em Cristo mais misericórdia do que pecado em nós."
  },
  {
    name: "Thomas Goodwin",
    era: "1600 – 1680",
    desc: "Um dos maiores teólogos de Westminster, mestre supremo na profundidade da união mística com Cristo.",
    worksCount: "4 Títulos no Catálogo",
    famousQuote: "O amor de Deus não é efeito da nossa oração, mas a fonte inesgotável dela."
  },
  {
    name: "Thomas Brooks",
    era: "1608 – 1680",
    desc: "Pastor devoto com dom singular para desmascarar as ciladas do pecado e consolar consciências aflitas.",
    worksCount: "2 Títulos no Catálogo",
    famousQuote: "A oração secreta é o termômetro espiritual da alma regenerada."
  },
  {
    name: "John Flavel",
    era: "1627 – 1691",
    desc: "Autor de tratados comoventes sobre a providência divina e o manancial da graça salvadora.",
    worksCount: "1 Título no Catálogo",
    famousQuote: "A providência divina cuida do menor pardal e governa as maiores tempestades."
  },
  {
    name: "Richard Baxter",
    era: "1615 – 1691",
    desc: "Incansável pregador do Evangelho e autor do clássico devocional O Pastor Reformado.",
    worksCount: "1 Título no Catálogo",
    famousQuote: "Preguei como quem nunca mais pregaria, e como um homem moribundo a homens moribundos."
  },
  {
    name: "William Bridge",
    era: "1600 – 1670",
    desc: "Teólogo de Cambridge especialista em curar o abatimento de espírito através da fé inabalável.",
    worksCount: "1 Título no Catálogo",
    famousQuote: "A fé olha para a promessa de Deus antes de olhar para a fraqueza humana."
  },
  {
    name: "Obadiah Sedgwick",
    era: "1600 – 1658",
    desc: "Membro da Assembleia de Westminster e expositor magistral da santidade do coração.",
    worksCount: "1 Título no Catálogo",
    famousQuote: "A alma que ama a Deus não tolera o menor pecado oculto em seus recônditos."
  }
];

// ==========================================================================
// CITAÇÕES PARA O CAROUSEL DOS MESTRES PURITANOS
// ==========================================================================
const PURITAN_QUOTES = [
  {
    quote: "O contentamento é uma gema preciosa que enriquece a alma nas maiores pobrezas terrenas.",
    author: "Thomas Watson",
    book: "A Arte do Contentamento Divino",
    bookId: "arte-contentamento-divino"
  },
  {
    quote: "Há em Cristo mais misericórdia para nos abraçar e curar do que pecado em nós para nos condenar.",
    author: "Richard Sibbes",
    book: "O Glorioso Banquete do Evangelho",
    bookId: "glorioso-banquete-evangelho"
  },
  {
    quote: "Nas horas em que a luz do Seu rosto parece oculta, apoie-se firme no braço invencível do Seu poder.",
    author: "Thomas Goodwin",
    book: "O Filho da Luz Caminhando em Trevas",
    bookId: "filho-luz-caminhando-trevas"
  },
  {
    quote: "A oração secreta é a chave de ouro que abre o cofre de misericórdias inesgotáveis de Deus.",
    author: "Thomas Brooks",
    book: "A Chave Secreta do Céu",
    bookId: "chave-secreta-ceu"
  },
  {
    quote: "As providências de Deus são como caracteres hebraicos: compreendem-se melhor quando lidas no final.",
    author: "John Flavel",
    book: "O Mistério da Providência",
    bookId: "misterio-providencia"
  },
  {
    quote: "As curvaturas que Deus traça em nossa jornada destinam-se a dobrar o nosso orgulho para a santidade.",
    author: "Thomas Boston",
    book: "O Quinhão Tortuoso",
    bookId: "quinhao-tortuoso"
  }
];

// ==========================================================================
// ESTADO GLOBAL & WISHLIST (FAVORITOS)
// ==========================================================================
let currentFilter = "todos";
let currentPriceFilter = "all";
let currentSort = "default";
let currentSearch = "";
let currentModalBookId = null;

// Gerenciamento de Favoritos no LocalStorage
function getFavorites() {
  try {
    const favs = localStorage.getItem("pactum_favs");
    return favs ? JSON.parse(favs) : [];
  } catch (e) {
    return [];
  }
}

function toggleFavorite(bookId, event) {
  if (event) {
    event.stopPropagation();
  }
  let favs = getFavorites();
  const index = favs.indexOf(bookId);
  let added = false;
  if (index >= 0) {
    favs.splice(index, 1);
    showToast("Removido dos Favoritos 🤍");
  } else {
    favs.push(bookId);
    added = true;
    showToast("Adicionado aos Favoritos! 💛");
    playAudioFeedback("fav");
  }
  try {
    localStorage.setItem("pactum_favs", JSON.stringify(favs));
  } catch (e) {}

  updateFavCounters();
  renderBooks();
  updateModalFavButton();
}

function updateFavCounters() {
  const favs = getFavorites();
  const badges = document.querySelectorAll(".fav-count-badge");
  badges.forEach(b => {
    b.textContent = favs.length;
    b.style.display = favs.length > 0 ? "inline-flex" : "none";
  });
}

// ==========================================================================
// SÍNTESE DE ÁUDIO SUAVE (WEB AUDIO API - ZERO DEPENDÊNCIAS)
// ==========================================================================
let audioContext = null;
let soundEnabled = true;

function initAudio() {
  if (!audioContext && (window.AudioContext || window.webkitAudioContext)) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }
}

function playAudioFeedback(type = "click") {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioContext) return;
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);

    const now = audioContext.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "fav") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(392.00, now); // G4
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18); // G5
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  } catch (e) {}
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById("soundToggleBtn");
  if (btn) {
    btn.innerHTML = soundEnabled ? "🔔 <span>Som Ativo</span>" : "🔕 <span>Som Mudo</span>";
    btn.classList.toggle("muted", !soundEnabled);
  }
  showToast(soundEnabled ? "Efeitos sonoros ativados 🔔" : "Efeitos sonoros silenciados 🔕");
}

// ==========================================================================
// RENDERIZAÇÃO DO CATÁLOGO DE LIVROS
// ==========================================================================
function renderBooks() {
  const booksGrid = document.getElementById("booksGrid");
  const resultsCounter = document.getElementById("resultsCounter");
  if (!booksGrid) return;

  const favs = getFavorites();

  let filtered = BOOKS_DATABASE.filter(book => {
    // 1. Filtro de Categoria & Favoritos
    let matchesCategory = false;
    if (currentFilter === "todos") {
      matchesCategory = true;
    } else if (currentFilter === "puritano") {
      matchesCategory = book.category === "puritano";
    } else if (currentFilter === "interlinear") {
      matchesCategory = book.category === "interlinear";
    } else if (currentFilter === "outros") {
      matchesCategory = book.category === "outros";
    } else if (currentFilter === "favoritos") {
      matchesCategory = favs.includes(book.id);
    }

    // 2. Filtro de Faixa de Preço
    let matchesPrice = true;
    if (currentPriceFilter === "under8") {
      matchesPrice = book.numPrice <= 8.00;
    } else if (currentPriceFilter === "8to15") {
      matchesPrice = book.numPrice > 8.00 && book.numPrice <= 15.00;
    } else if (currentPriceFilter === "over15") {
      matchesPrice = book.numPrice > 15.00;
    }

    // 3. Filtro de Busca
    const term = currentSearch.toLowerCase().trim();
    const matchesSearch = !term || 
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.synopsis.toLowerCase().includes(term) ||
      book.categoryLabel.toLowerCase().includes(term) ||
      book.asin.toLowerCase().includes(term);

    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Ordenação
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.numPrice - b.numPrice);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.numPrice - a.numPrice);
  } else if (currentSort === "title-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === "author-asc") {
    filtered.sort((a, b) => a.author.localeCompare(b.author));
  }

  // Atualiza contador de resultados
  if (resultsCounter) {
    if (currentFilter === "favoritos") {
      resultsCounter.innerHTML = `Exibindo <strong>${filtered.length}</strong> de <strong>${favs.length}</strong> obras salvas nos favoritos`;
    } else if (currentSearch) {
      resultsCounter.innerHTML = `Exibindo <strong>${filtered.length}</strong> resultados para "<em>${currentSearch}</em>" <button onclick="clearSearch()" class="btn-clear-search">Limpar busca ✕</button>`;
    } else {
      resultsCounter.innerHTML = `Exibindo <strong>${filtered.length}</strong> de <strong>${BOOKS_DATABASE.length}</strong> obras publicadas`;
    }
  }

  if (filtered.length === 0) {
    booksGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📜</div>
        <p class="empty-state-title">Nenhuma obra encontrada</p>
        <p class="empty-state-desc">${currentFilter === 'favoritos' ? 'Você ainda não adicionou nenhum livro aos favoritos. Clique no coração 🤍 dos livros para salvar!' : 'Tente buscar por outro termo, limpar filtros de preço ou selecionar outra categoria.'}</p>
        <button class="btn btn-ghost" onclick="resetAllFilters()">Ver Todo o Catálogo</button>
      </div>
    `;
    return;
  }

  booksGrid.innerHTML = filtered.map((book, index) => {
    const badgeClass = book.category === 'puritano' ? 'puritano' : (book.category === 'interlinear' ? 'interlinear' : 'idiomas');
    const amazonUrl = `https://www.amazon.com.br/dp/${book.asin}?tag=editorapactum-20`;
    const isFav = favs.includes(book.id);

    return `
      <article class="book-card" data-id="${book.id}" style="animation-delay: ${Math.min(index * 0.04, 0.6)}s">
        <div class="book-card-inner">
          <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${book.id}', event)" title="${isFav ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}" aria-label="Favoritar">
            ${isFav ? '❤️' : '🤍'}
          </button>
          
          <div class="book-cover-wrap" onclick="openBookModal('${book.id}')">
            <span class="book-badge ${badgeClass}">${book.categoryLabel}</span>
            <div class="book-glare"></div>
            <img src="${book.cover}" alt="${book.title}" class="book-cover-img" loading="lazy">
            <div class="book-quick-view-overlay">
              <span class="quick-view-text">✦ Ver Detalhes ✦</span>
            </div>
          </div>
          
          <div class="book-info">
            <div class="book-author" onclick="filterByAuthor('${book.author}')" title="Filtrar obras deste autor">${book.author}</div>
            <h3 class="book-title" title="${book.title}" onclick="openBookModal('${book.id}')">${book.shortTitle}</h3>
            
            <div class="book-ku-tag">
              <span class="ku-badge">Kindle Unlimited</span>
              <span class="ku-sub">ou compra avulsa</span>
            </div>

            <div class="book-meta">
              <div class="price-container">
                <span class="price-label">Preço Kindle:</span>
                <span class="book-price">${book.price}</span>
              </div>
              <div class="asin-tag" title="Código ASIN Oficial na Amazon">${book.asin}</div>
            </div>

            <div class="book-actions">
              <button class="btn-details" onclick="openBookModal('${book.id}')">
                <span>Detalhes</span>
              </button>
              <a href="${amazonUrl}" target="_blank" rel="noopener" class="btn-card-amazon" title="Comprar eBook Kindle ou ler no Kindle Unlimited">
                <span>Amazon</span> 🛒
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Aplica 3D tilt nos cards renderizados
  attach3DTiltEffect();
}

function clearSearch() {
  currentSearch = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  renderBooks();
}

function resetAllFilters() {
  currentFilter = "todos";
  currentPriceFilter = "all";
  currentSort = "default";
  currentSearch = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "default";

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "todos");
  });

  document.querySelectorAll(".price-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.price === "all");
  });

  renderBooks();
}

// ==========================================================================
// EFEITO 3D TILT COM REFLEXO DINÂMICO DE LUZ
// ==========================================================================
function attach3DTiltEffect() {
  const cards = document.querySelectorAll(".book-card");
  cards.forEach(card => {
    const coverWrap = card.querySelector(".book-cover-wrap");
    const glare = card.querySelector(".book-glare");

    if (!coverWrap) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
      
      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(247, 223, 148, 0.35) 0%, rgba(201, 168, 76, 0) 75%)`;
        glare.style.opacity = "1";
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)";
      if (glare) {
        glare.style.opacity = "0";
      }
    });
  });
}

// ==========================================================================
// RENDERIZAÇÃO DOS AUTORES & DESTAQUES
// ==========================================================================
function renderAuthors() {
  const autoresGrid = document.getElementById("autoresGrid");
  if (!autoresGrid) return;

  autoresGrid.innerHTML = AUTHORS_DATABASE.map(author => {
    const initials = author.name.split(" ").map(n => n[0]).slice(0, 2).join("");
    return `
      <div class="author-card" onclick="filterByAuthor('${author.name}')" title="Clique para ver os livros de ${author.name}">
        <div class="author-avatar-wrap">
          <span class="author-initials">${initials}</span>
        </div>
        <h3 class="author-name">${author.name}</h3>
        <div class="author-era">${author.era}</div>
        <p class="author-desc">${author.desc}</p>
        <div class="author-quote">“${author.famousQuote}”</div>
        <div class="author-footer">
          <span class="author-works-count">${author.worksCount}</span>
          <span class="author-action-link">Ver Obras →</span>
        </div>
      </div>
    `;
  }).join("");
}

function filterByAuthor(authorName) {
  playAudioFeedback("click");
  currentFilter = "todos";
  currentPriceFilter = "all";
  currentSearch = authorName;
  
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "todos");
  });
  document.querySelectorAll(".price-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.price === "all");
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = authorName;

  renderBooks();
  
  const catalogoSection = document.getElementById("catalogo");
  if (catalogoSection) {
    catalogoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// CAROUSEL DE CITAÇÕES PURITANAS (VOZES DOS MESTRES)
// ==========================================================================
let currentQuoteIndex = 0;
let quoteInterval = null;

function initQuotesCarousel() {
  const quoteText = document.getElementById("quoteCarouselText");
  const quoteAuthor = document.getElementById("quoteCarouselAuthor");
  const quoteBook = document.getElementById("quoteCarouselBook");
  const quoteIndicators = document.getElementById("quoteIndicators");
  
  if (!quoteText || !quoteAuthor) return;

  if (quoteIndicators) {
    quoteIndicators.innerHTML = PURITAN_QUOTES.map((_, i) => `
      <button class="quote-dot ${i === 0 ? 'active' : ''}" onclick="goToQuote(${i})" aria-label="Citação ${i + 1}"></button>
    `).join("");
  }

  showQuote(0);

  // Rotação automática a cada 7 segundos
  if (quoteInterval) clearInterval(quoteInterval);
  quoteInterval = setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % PURITAN_QUOTES.length;
    showQuote(currentQuoteIndex);
  }, 7000);
}

function showQuote(index) {
  currentQuoteIndex = index;
  const item = PURITAN_QUOTES[index];
  const quoteBox = document.getElementById("quoteBox");
  const quoteText = document.getElementById("quoteCarouselText");
  const quoteAuthor = document.getElementById("quoteCarouselAuthor");
  const quoteBook = document.getElementById("quoteCarouselBook");

  if (!quoteText || !item) return;

  if (quoteBox) {
    quoteBox.classList.add("fade-out");
  }

  setTimeout(() => {
    quoteText.textContent = `“${item.quote}”`;
    quoteAuthor.textContent = item.author;
    if (quoteBook) {
      quoteBook.innerHTML = `<a href="#catalogo" onclick="openBookModal('${item.bookId}')" class="quote-book-link">${item.book} ↗</a>`;
    }

    document.querySelectorAll(".quote-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    if (quoteBox) {
      quoteBox.classList.remove("fade-out");
    }
  }, 250);
}

function goToQuote(index) {
  showQuote(index);
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % PURITAN_QUOTES.length;
      showQuote(currentQuoteIndex);
    }, 7000);
  }
}

function nextQuote() {
  goToQuote((currentQuoteIndex + 1) % PURITAN_QUOTES.length);
}

function prevQuote() {
  goToQuote((currentQuoteIndex - 1 + PURITAN_QUOTES.length) % PURITAN_QUOTES.length);
}

// ==========================================================================
// MODAL DE DETALHES DO LIVRO COM NAVEGAÇÃO COMPLETA
// ==========================================================================
function openBookModal(bookId) {
  const bookIndex = BOOKS_DATABASE.findIndex(b => b.id === bookId);
  if (bookIndex < 0) return;

  currentModalBookId = bookId;
  const book = BOOKS_DATABASE[bookIndex];

  playAudioFeedback("open");

  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  if (!modalOverlay || !modalContent) return;

  const amazonUrl = `https://www.amazon.com.br/dp/${book.asin}?tag=editorapactum-20`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Conheça o livro "${book.title}" da Editora Pactum: ${amazonUrl}`)}`;
  const favs = getFavorites();
  const isFav = favs.includes(book.id);

  const prevBook = BOOKS_DATABASE[(bookIndex - 1 + BOOKS_DATABASE.length) % BOOKS_DATABASE.length];
  const nextBook = BOOKS_DATABASE[(bookIndex + 1) % BOOKS_DATABASE.length];

  modalContent.innerHTML = `
    <!-- Navegação Superior do Modal -->
    <div class="modal-nav-bar">
      <button class="modal-nav-btn" onclick="openBookModal('${prevBook.id}')" title="Obra anterior: ${prevBook.shortTitle}">
        ← ${prevBook.shortTitle.slice(0, 24)}...
      </button>
      <span class="modal-nav-indicator">${bookIndex + 1} de ${BOOKS_DATABASE.length}</span>
      <button class="modal-nav-btn" onclick="openBookModal('${nextBook.id}')" title="Próxima obra: ${nextBook.shortTitle}">
        ${nextBook.shortTitle.slice(0, 24)}... →
      </button>
    </div>

    <div class="modal-body-grid">
      <div class="modal-cover-column">
        <div class="modal-cover-3d-wrap">
          <img src="${book.cover}" alt="${book.title}" class="modal-cover-img">
        </div>
        <div class="modal-cover-badges">
          <span class="ku-badge-modal">✓ Incluso no Kindle Unlimited (R$ 0,00)</span>
        </div>
      </div>

      <div class="modal-details-column">
        <div class="modal-header-meta">
          <span class="modal-category">${book.categoryLabel}</span>
          <button class="btn-fav-modal ${isFav ? 'active' : ''}" id="modalFavBtn" onclick="toggleFavorite('${book.id}')" title="Salvar nos Favoritos">
            ${isFav ? '❤️ Salvo nos Favoritos' : '🤍 Adicionar aos Favoritos'}
          </button>
        </div>

        <h2 class="modal-title">${book.title}</h2>
        <div class="modal-author">por <strong>${book.author}</strong></div>
        
        <div class="modal-quote-highlight">
          <p>“${book.quote}”</p>
        </div>

        <div class="modal-synopsis-wrap">
          <h4 class="modal-subheading">Sinopse Exegética & Histórica</h4>
          <p class="modal-synopsis">${book.synopsis}</p>
        </div>
        
        <div class="modal-specs-grid">
          <div class="spec-card">
            <span class="spec-label">Preço Amazon Kindle</span>
            <span class="spec-value price-highlight">${book.price}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Código ASIN</span>
            <span class="spec-value">${book.asin}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Formato & Plataforma</span>
            <span class="spec-value">${book.format}</span>
          </div>
          <div class="spec-card">
            <span class="spec-label">Idioma / Abrangência</span>
            <span class="spec-value">${book.language}</span>
          </div>
        </div>

        <div class="modal-footer-actions">
          <a href="${amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary modal-btn-buy" onclick="playAudioFeedback('click')">
            <span>Adquirir na Amazon Kindle</span> 🚀
          </a>
          <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp modal-btn-share" title="Recomendar pelo WhatsApp">
            <span>WhatsApp</span> 💬
          </a>
          <button class="btn btn-ghost modal-btn-copy" onclick="copyBookLink('${amazonUrl}')" title="Copiar link oficial do livro">
            <span>Copiar Link</span> 📋
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateModalFavButton() {
  const modalFavBtn = document.getElementById("modalFavBtn");
  if (!modalFavBtn || !currentModalBookId) return;
  const favs = getFavorites();
  const isFav = favs.includes(currentModalBookId);
  modalFavBtn.innerHTML = isFav ? '❤️ Salvo nos Favoritos' : '🤍 Adicionar aos Favoritos';
  modalFavBtn.classList.toggle("active", isFav);
}

function copyBookLink(url) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Link direto copiado para a área de transferência! 📋");
      playAudioFeedback("click");
    }).catch(() => {
      prompt("Copie o link abaixo:", url);
    });
  } else {
    prompt("Copie o link abaixo:", url);
  }
}

function showToast(msg) {
  let toast = document.getElementById("pactumToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "pactumToast";
    toast.className = "pactum-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-sparkle">✦</span> ${msg}`;
  toast.classList.add("show");
  
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function closeBookModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    currentModalBookId = null;
  }
}

// ==========================================================================
// PARTICLES CANVAS NA HERO (POWDER DE OURO / CONSTELAÇÃO DINÂMICA)
// ==========================================================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const count = Math.min(90, Math.floor(window.innerWidth / 15));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35 - 0.1,
      opacity: Math.random() * 0.7 + 0.25,
      pulse: Math.random() * 0.02 + 0.005,
      pulseDir: 1,
      baseSize: Math.random() * 2.2 + 0.6
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      // Movimento básico
      p.x += p.speedX;
      p.y += p.speedY;

      // Interação gravitacional suave com o mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += dx * force * 0.02;
          p.y += dy * force * 0.02;
        }
      }

      // Wrap em torno da tela
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Pulso luminoso
      p.opacity += p.pulse * p.pulseDir;
      if (p.opacity > 0.9) p.pulseDir = -1;
      if (p.opacity < 0.2) p.pulseDir = 1;

      // Desenho da partícula
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247, 223, 148, ${p.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(201, 168, 76, 0.7)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================================================
// CONTADOR ANIMADO DE ESTATÍSTICAS
// ==========================================================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.dataset.count, 10);
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + (target === 32 ? "+" : (target === 15 ? "+" : ""));
              clearInterval(timer);
            } else {
              stat.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector(".stats-bar");
  if (statsSection) observer.observe(statsSection);
}

// ==========================================================================
// PROGRESSO DE SCROLL & BOTÃO VOLTAR AO TOPO
// ==========================================================================
function initScrollProgress() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const progressCircle = document.getElementById("scrollProgressCircle");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressCircle) {
      const circumference = 2 * Math.PI * 18; // r=18
      const offset = circumference - (scrollPercent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// INICIALIZAÇÃO & EVENTOS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Renderiza Catálogo, Autores e Favoritos
  renderBooks();
  renderAuthors();
  updateFavCounters();
  initQuotesCarousel();

  // 2. Inicializa Canvas, Contadores e Scroll
  initHeroCanvas();
  initStatsCounter();
  initScrollProgress();

  // 3. Campo de Busca Instantânea
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderBooks();
    });
  }

  // 4. Filtros de Categoria (Tabs)
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playAudioFeedback("click");
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderBooks();
    });
  });

  // 5. Filtros de Faixa de Preço (Chips)
  const priceChips = document.querySelectorAll(".price-chip");
  priceChips.forEach(chip => {
    chip.addEventListener("click", () => {
      playAudioFeedback("click");
      priceChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentPriceFilter = chip.dataset.price;
      renderBooks();
    });
  });

  // 6. Ordenação (Dropdown)
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderBooks();
    });
  }

  // 7. Modal Eventos (Fechar com Esc ou Click Fora, Teclas de Seta)
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");

  if (modalClose) modalClose.addEventListener("click", closeBookModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeBookModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (modalOverlay && modalOverlay.classList.contains("active")) {
      if (e.key === "Escape") {
        closeBookModal();
      } else if (e.key === "ArrowLeft") {
        if (currentModalBookId) {
          const idx = BOOKS_DATABASE.findIndex(b => b.id === currentModalBookId);
          if (idx >= 0) {
            const prevId = BOOKS_DATABASE[(idx - 1 + BOOKS_DATABASE.length) % BOOKS_DATABASE.length].id;
            openBookModal(prevId);
          }
        }
      } else if (e.key === "ArrowRight") {
        if (currentModalBookId) {
          const idx = BOOKS_DATABASE.findIndex(b => b.id === currentModalBookId);
          if (idx >= 0) {
            const nextId = BOOKS_DATABASE[(idx + 1) % BOOKS_DATABASE.length].id;
            openBookModal(nextId);
          }
        }
      }
    }
  });

  // 8. Navbar Scrolled Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 9. Menu Mobile Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
      });
    });
  }

  // 10. Botão de Som
  const soundToggleBtn = document.getElementById("soundToggleBtn");
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", toggleSound);
  }
});
