/**
 * EDITORA PACTUM — JAVASCRIPT PRINCIPAL
 * Catálogo Dinâmico, Filtros, Busca, Modal e Partículas
 */

// ==========================================================================
// BANCO DE DADOS DOS LIVROS (32 TÍTULOS COM ASIN E CAPAS REAIS)
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
    price: "R$ 24,90",
    asin: "B0HD2PC5YY",
    cover: "capas/pentateuco_interlinear.jpg",
    language: "Hebraico / Português",
    pages: "Pentateuco (Gênesis a Deuteronômio)",
    format: "eBook Kindle",
    synopsis: "Texto hebraico massorético original, com transliteração acadêmica e simplificada lado a lado, e tradução exegética contextual minuciosa. Ferramenta indispensável para pastores, seminaristas e estudantes das Escrituras Sagradas."
  },
  {
    id: "biblia-interlinear-hg-vol1",
    title: "Bíblia Interlinear Hebraico–Grego — Volume 1: Pentateuco",
    shortTitle: "Bíblia Interlinear Hebraico–Grego Vol. 1: Pentateuco",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear Poliglota",
    price: "R$ 34,90",
    asin: "B0HFTTTT1Z",
    cover: "capas/biblia_interlinear_hg_vol1.jpg",
    language: "Hebraico / Grego / Português",
    pages: "Gênesis a Deuteronômio",
    format: "eBook Kindle",
    synopsis: "Edição monumental reunindo o Hebraico Massorético, a Septuaginta Grega (LXX), transliteração fonética completa e tradução literal alinhada palavra por palavra."
  },
  {
    id: "biblia-profetas-maiores",
    title: "Bíblia Interlinear Hebraico-Português: Profetas Maiores",
    shortTitle: "Bíblia Interlinear: Profetas Maiores",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 24,90",
    asin: "B0HDFPGNN3",
    cover: "capas/biblia_profetas_maiores.jpg",
    language: "Hebraico / Português",
    pages: "Isaías a Daniel",
    format: "eBook Kindle",
    synopsis: "Texto Hebraico Original dos Profetas Maiores (Isaías, Jeremias, Lamentações, Ezequiel e Daniel), com transliteração fonética precisa e tradução exegética contextual versículo por versículo."
  },
  {
    id: "biblia-livros-historicos",
    title: "Bíblia Interlinear Hebraico-Português: Livros Históricos",
    shortTitle: "Bíblia Interlinear: Livros Históricos",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 21,90",
    asin: "B0HDFPC4RM",
    cover: "capas/biblia_livros_historicos.jpg",
    language: "Hebraico / Português",
    pages: "Josué a Ester",
    format: "eBook Kindle",
    synopsis: "Cobertura completa da narrativa histórica de Israel de Josué até Ester com texto hebraico original, vocalização massorética, transliteração fonética e aparato de notas exegéticas."
  },
  {
    id: "biblia-profetas-menores",
    title: "Bíblia Interlinear Hebraico-Português: Profetas Menores",
    shortTitle: "Bíblia Interlinear: Profetas Menores",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 21,90",
    asin: "B0HDGL26ZJ",
    cover: "capas/biblia_profetas_menores.jpg",
    language: "Hebraico / Português",
    pages: "Oseias a Malaquias",
    format: "eBook Kindle",
    synopsis: "Os doze profetas menores em texto hebraico integral com tradução analítica, transliteração fonética de fácil leitura e fidelidade filológica rigorosa."
  },
  {
    id: "biblia-livros-poeticos",
    title: "Bíblia Interlinear Hebraico-Português: Livros Poéticos e de Sabedoria",
    shortTitle: "Bíblia Interlinear: Livros Poéticos e Sabedoria",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear AT",
    price: "R$ 19,90",
    asin: "B0HDG2D5PD",
    cover: "capas/biblia_livros_poeticos.jpg",
    language: "Hebraico / Português",
    pages: "Jó, Salmos, Provérbios, Eclesiastes, Cantares",
    format: "eBook Kindle",
    synopsis: "A sublime poesia hebraica e a literatura sapiencial bíblica expostas com preservação métrica, vocabulário exegético contextual e transliteração detalhada."
  },
  {
    id: "nt-interlinear-grego-pt",
    title: "Novo Testamento Interlinear Grego-Português: Tradução Exegética Contextual",
    shortTitle: "Novo Testamento Interlinear Grego-Português",
    author: "Editora Pactum",
    category: "interlinear",
    categoryLabel: "Interlinear NT",
    price: "R$ 19,90",
    asin: "B0H75RZF89",
    cover: "capas/nt_interlinear_grego_pt.jpg",
    language: "Grego Koiné / Português",
    pages: "Mateus a Apocalipse",
    format: "eBook Kindle",
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
    price: "R$ 18,99",
    asin: "B0H4267BD1",
    cover: "capas/arte_contentamento_divino.jpg",
    language: "Português",
    pages: "Tratado Completo",
    format: "eBook Kindle",
    synopsis: "Uma das maiores joias da literatura puritana. Thomas Watson expõe a passagem de Filipenses 4:11 ensinando a misteriosa e santa arte de estar plenamente satisfeito em Deus em meio a qualquer circunstância da vida."
  },
  {
    id: "chave-secreta-ceu",
    title: "A Chave Secreta do Céu 2ª Edição: O Dever e a Doçura da Oração Secreta",
    shortTitle: "A Chave Secreta do Céu",
    author: "Thomas Brooks",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H42BKKZT",
    cover: "capas/chave_secreta_ceu.jpg",
    language: "Português",
    pages: "Tratado de Oração",
    format: "eBook Kindle",
    synopsis: "Thomas Brooks descortina os tesouros e as delícias da comunhão secreta com o Pai. Um chamado vigoroso e consolador à intimidade no quarto secreto de oração."
  },
  {
    id: "glorioso-banquete-evangelho",
    title: "O Glorioso Banquete do Evangelho 2ª Edição",
    shortTitle: "O Glorioso Banquete do Evangelho",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2BFQGTY",
    cover: "capas/glorioso_banquete_evangelho.jpg",
    language: "Português",
    pages: "Sermões em Isaías 25",
    format: "eBook Kindle",
    synopsis: "O célebre 'doutor celestial' Richard Sibbes expõe a abundância da graça de Deus, a vitória irrevogável sobre a morte e o consolo profundo nas aflições terrenas."
  },
  {
    id: "filho-luz-caminhando-trevas",
    title: "O Filho da Luz Caminhando em Trevas 2ª Edição",
    shortTitle: "O Filho da Luz Caminhando em Trevas",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2B4FC2C",
    cover: "capas/filho_luz_caminhando_trevas.jpg",
    language: "Português",
    pages: "Tratado Teológico-Pastoral",
    format: "eBook Kindle",
    synopsis: "Como encontrar consolo, orientação e paz no aparente abandono espiritual e nas tribulações da consciência. Uma obra-prima de teologia pastoral e cuidado da alma."
  },
  {
    id: "anatomia-pecados-secretos",
    title: "A Anatomia dos Pecados Secretos (Coleção Clássicos Puritanos)",
    shortTitle: "A Anatomia dos Pecados Secretos",
    author: "Obadiah Sedgwick",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0HCDFR88B",
    cover: "capas/anatomia_pecados_secretos.jpg",
    language: "Português",
    pages: "Exposição do Salmo 19:12",
    format: "eBook Kindle",
    synopsis: "A descoberta das corrupções ocultas da alma e a busca incansável pela integridade e santidade diante dos olhos oniscientes de Deus."
  },
  {
    id: "terrivel-voz-deus-cidade",
    title: "A Terrível Voz de Deus na Cidade (Coleção Clássicos Puritanos Vol. 18) 2ª Edição",
    shortTitle: "A Terrível Voz de Deus na Cidade",
    author: "Thomas Vincent",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2PVDYR5",
    cover: "capas/terrivel_voz_deus_cidade.jpg",
    language: "Português",
    pages: "Relato Histórico-Teológico",
    format: "eBook Kindle",
    synopsis: "A mensagem da Providência divina nas históricas desolações de Londres pela Grande Peste de 1665 e pelo Grande Incêndio de 1666, narradas por quem permaneceu pregando entre os enfermos."
  },
  {
    id: "vaidade-mundo",
    title: "A Vaidade do Mundo: Uma Exposição Solene sobre Eclesiastes 1:2",
    shortTitle: "A Vaidade do Mundo",
    author: "Ezekiel Hopkins",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0HD1F53NG",
    cover: "capas/vaidade_mundo.jpg",
    language: "Português",
    pages: "Exposição Teológica",
    format: "eBook Kindle",
    synopsis: "Uma exposição penetrante e solene sobre a transitoriedade dos prazeres, honras e riquezas terrenas em contraste com a glória eterna do Reino de Deus."
  },
  {
    id: "exposicoes-efesios",
    title: "Exposições Teológicas em Efésios (Coleção Clássicos Puritanos Vol. 11) 2ª Edição",
    shortTitle: "Exposições Teológicas em Efésios",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 24,90",
    asin: "B0H2KZXKJ7",
    cover: "capas/exposicoes_efesios.jpg",
    language: "Português",
    pages: "Sermões nos Capítulos 2, 3 e 5",
    format: "eBook Kindle",
    synopsis: "Monumentais exposições sobre a salvação pela graça soberana, as insondáveis riquezas do amor de Cristo e a união mística entre Cristo e Sua Igreja."
  },
  {
    id: "retorno-oracoes",
    title: "O Retorno das Orações (Coleção Clássicos Puritanos Vol. 15) 2ª Edição",
    shortTitle: "O Retorno das Orações",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2W7CM7Y",
    cover: "capas/retorno_oracoes.jpg",
    language: "Português",
    pages: "Exposição do Salmo 85:8",
    format: "eBook Kindle",
    synopsis: "Como discernir e reconhecer as respostas de Deus aos nossos clamores, orações e súplicas com discernimento espiritual e gratidão santa."
  },
  {
    id: "limites-liberdade-crista",
    title: "Os Verdadeiros Limites da Liberdade Cristã (2ª Edição)",
    shortTitle: "Os Verdadeiros Limites da Liberdade Cristã",
    author: "Samuel Bolton",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H271BHQ5",
    cover: "capas/limites_liberdade_crista.jpg",
    language: "Português",
    pages: "Tratado sobre Lei e Graça",
    format: "eBook Kindle",
    synopsis: "Um dos mais equilibrados tratados sobre a relação entre a Lei moral e a Graça redentora, refutando tanto o legalismo rígido quanto o antinomianismo permissivo."
  },
  {
    id: "suspiro-por-deus",
    title: "Um Suspiro por Deus (Coleção Clássicos Puritanos Vol. 14) 2ª Edição",
    shortTitle: "Um Suspiro por Deus",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2T177BT",
    cover: "capas/suspiro_por_deus.jpg",
    language: "Português",
    pages: "Exposição do Salmo 27:4",
    format: "eBook Kindle",
    synopsis: "O anseio fervoroso da alma regenerada, a contemplação da formosura do Senhor e o consolo inefável de habitar continuamente em Sua presença."
  },
  {
    id: "paciencia-obra-perfeita",
    title: "A Paciência e Sua Obra Perfeita (Coleção Clássicos Puritanos Vol. 3)",
    shortTitle: "A Paciência e Sua Obra Perfeita",
    author: "Thomas Goodwin",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2KQJW3M",
    cover: "capas/paciencia_obra_perfeita.jpg",
    language: "Português",
    pages: "Exposição de Tiago 1:4",
    format: "eBook Kindle",
    synopsis: "Como a paciência graciosa opera no sofrimento humano, forjando na alma do crente a conformidade sublime com o caráter de Cristo."
  },
  {
    id: "refrigerio-abatido",
    title: "Um Refrigério para o Abatido (Coleção Clássicos Puritanos Vol. 3)",
    shortTitle: "Um Refrigério para o Abatido",
    author: "William Bridge",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2MXB8WY",
    cover: "capas/refrigerio_abatido.jpg",
    language: "Português",
    pages: "Sermões Consoladores",
    format: "eBook Kindle",
    synopsis: "Sermões de extraordinário bálsamo sobre a cura dos desânimos, das tentações lancinantes e do abatimento de espírito mediante o exercício da fé salvadora em Jesus."
  },
  {
    id: "chamado-nao-convertidos",
    title: "Um Chamado aos Não Convertidos (Coleção Clássicos Puritanos)",
    shortTitle: "Um Chamado aos Não Convertidos",
    author: "Richard Baxter",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H6NDYT59",
    cover: "capas/chamado_nao_convertidos.jpg",
    language: "Português",
    pages: "Tratado Evangelístico",
    format: "eBook Kindle",
    synopsis: "Um dos apelos evangelísticos mais inflamados e influentes da história da Igreja, conclamando homens e mulheres ao arrependimento genuíno e à vida em Deus."
  },
  {
    id: "sobre-paciencia-agostinho",
    title: "Sobre a Paciência: A Virtude da Alma como Dom da Graça Divina",
    shortTitle: "Sobre a Paciência",
    author: "Santo Agostinho",
    category: "puritano",
    categoryLabel: "Patrística",
    price: "R$ 18,99",
    asin: "B0GY9Z6H32",
    cover: "capas/sobre_paciencia_agostinho.jpg",
    language: "Português",
    pages: "Tratado Patrístico",
    format: "eBook Kindle",
    synopsis: "O Bispo de Hipona examina a paciência como virtude essencialmente cristã, decorrente da graça soberana de Deus diante das tribulações e perseguições."
  },
  {
    id: "amor-cristo-invisivel",
    title: "O Amor do Verdadeiro Cristão pelo Cristo Invisível (Vol. 8)",
    shortTitle: "O Amor pelo Cristo Invisível",
    author: "Thomas Vincent",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0GX315H3V",
    cover: "capas/amor_cristo_invisivel.jpg",
    language: "Português",
    pages: "Exposição de 1 Pedro 1:8",
    format: "eBook Kindle",
    synopsis: "Sermões exortativos de intensa chama devocional sobre a natureza, a excelência e a prática do amor sincero a Jesus Cristo a quem não vimos mas amamos."
  },
  {
    id: "carta-privilegios-crente",
    title: "A Carta de Privilégios do Crente (Coleção Clássicos Puritanos Vol. 19)",
    shortTitle: "A Carta de Privilégios do Crente",
    author: "Thomas Watson",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H4X5DHJW",
    cover: "capas/carta_privilegios_crente.jpg",
    language: "Português",
    pages: "Exposição de 1 Coríntios 3:21-23",
    format: "eBook Kindle",
    synopsis: "Uma celebração magnífica da herança inestimável do crente: todas as coisas pertencem àqueles que pertencem a Cristo."
  },
  {
    id: "entranhas-abertas",
    title: "Entranhas Abertas (Coleção Clássicos Puritanos Vol. 13)",
    shortTitle: "Entranhas Abertas: Cântico dos Cânticos",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2SQKLBL",
    cover: "capas/entranhas_abertas.jpg",
    language: "Português",
    pages: "Cântico dos Cânticos 4 a 6",
    format: "eBook Kindle",
    synopsis: "Exposição teológica e devocional sobre a ternura, a intimidade e a união mística entre Cristo Jesus e Sua Igreja lavada pelo sangue."
  },
  {
    id: "cristao-silencioso",
    title: "O Cristão Silencioso sob a Vara da Aflição (Vol. 2)",
    shortTitle: "O Cristão Silencioso sob a Vara",
    author: "Thomas Brooks",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H2MZ8LW7",
    cover: "capas/cristao_silencioso.jpg",
    language: "Português",
    pages: "Exposição do Salmo 39:9",
    format: "eBook Kindle",
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
    asin: "B0H6NN75PN",
    cover: "capas/quinhao_tortuoso.jpg",
    language: "Português",
    pages: "Exposição de Eclesiastes 7:13",
    format: "eBook Kindle",
    synopsis: "Como entender e acolher as 'curvaturas' e provações que Deus designa em nosso caminho para nos humilhar, santificar e atrair a Si."
  },
  {
    id: "conflito-alma",
    title: "O Conflito da Alma Consigo Mesma e a Vitória pela Fé (Vol. 17)",
    shortTitle: "O Conflito da Alma Consigo Mesma",
    author: "Richard Sibbes",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H4X79RJ4",
    cover: "capas/conflito_alma.jpg",
    language: "Português",
    pages: "Exposição do Salmo 42:11",
    format: "eBook Kindle",
    synopsis: "A anatomia das lutas interiores da mente e do coração, e como a fé viva em Deus subjuga o desespero e renova a esperança na salvação divina."
  },
  {
    id: "misterio-providencia",
    title: "O Mistério da Providência (Coleção Clássicos Puritanos)",
    shortTitle: "O Mistério da Providência",
    author: "John Flavel",
    category: "puritano",
    categoryLabel: "Clássicos Puritanos",
    price: "R$ 18,99",
    asin: "B0H6NDVWVH",
    cover: "capas/misterio_providencia.jpg",
    language: "Português",
    pages: "Exposição do Salmo 57:2",
    format: "eBook Kindle",
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
    price: "R$ 39,90",
    asin: "B0HBCRRWMV",
    cover: "capas/nt_trilingue.jpg",
    language: "Grego / Português / Inglês",
    pages: "Novo Testamento Completo",
    format: "eBook Kindle",
    synopsis: "Edição trilíngue de referência contendo o Grego Koiné original, Tradução Exegética Contextual em português e Word-for-Word Literal Reference em inglês com transliteração fonética."
  },
  {
    id: "nt-interlinear-grego-es",
    title: "Nuevo Testamento Interlineal Griego-Español: Texto Griego Koiné (BGNT)",
    shortTitle: "Nuevo Testamento Interlineal Griego-Español",
    author: "Editora Pactum",
    category: "outros",
    categoryLabel: "Español",
    price: "R$ 29,90",
    asin: "B0HBNGVCC5",
    cover: "capas/nt_interlinear_grego_es.jpg",
    language: "Griego Koiné / Español",
    pages: "Nuevo Testamento Completo",
    format: "eBook Kindle",
    synopsis: "Texto Griego Koiné con transliteración fonética y traducción analítica palabra por palabra en español para la comunidad hispanohablante de estudiantes bíblicos."
  },
  {
    id: "nt-interlinear-grego-fr",
    title: "Nouveau Testament Interlinéaire Grec-Français: Texte Grec Koinè (BGNT)",
    shortTitle: "Nouveau Testament Interlinéaire Grec-Français",
    author: "Editora Pactum",
    category: "outros",
    categoryLabel: "Français",
    price: "R$ 34,90",
    asin: "B0HBFZKH4N",
    cover: "capas/nt_interlinear_grego_fr.jpg",
    language: "Grec Koinè / Français",
    pages: "Nouveau Testament Complet",
    format: "eBook Kindle",
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
    desc: "Mestre puritano célebre por sua prosa vívida, ilustrações ricas e profundo zelo pastoral.",
    worksCount: "2 Títulos no Catálogo"
  },
  {
    name: "Richard Sibbes",
    era: "1577 – 1635",
    desc: "Conhecido como 'O Doutor Celestial' por sua pregação calorosa sobre a doçura da graça de Cristo.",
    worksCount: "4 Títulos no Catálogo"
  },
  {
    name: "Thomas Goodwin",
    era: "1600 – 1680",
    desc: "Um dos maiores teólogos da Assembleia de Westminster, mestre na profundidade da união com Cristo.",
    worksCount: "4 Títulos no Catálogo"
  },
  {
    name: "Thomas Brooks",
    era: "1608 – 1680",
    desc: "Pastor devoto com dom singular para desmascarar os ardis do pecado e consolar consciências aflitas.",
    worksCount: "2 Títulos no Catálogo"
  },
  {
    name: "John Flavel",
    era: "1627 – 1691",
    desc: "Autor de tratados comoventes sobre a Providência divina e o manancial da graça salvadora.",
    worksCount: "1 Título no Catálogo"
  },
  {
    name: "Richard Baxter",
    era: "1615 – 1691",
    desc: "Incansável pregador do Evangelho e autor do clássico devocional O Pastor Reformado.",
    worksCount: "1 Título no Catálogo"
  },
  {
    name: "William Bridge",
    era: "1600 – 1670",
    desc: "Teólogo de Cambridge especialista em curar o abatimento de espírito através da fé inabalável.",
    worksCount: "1 Título no Catálogo"
  },
  {
    name: "Obadiah Sedgwick",
    era: "1600 – 1658",
    desc: "Membro da Assembleia de Westminster e expositor magistral da santidade do coração.",
    worksCount: "1 Título no Catálogo"
  }
];

// ==========================================================================
// RENDERIZAÇÃO DO CATÁLOGO DE LIVROS
// ==========================================================================
let currentFilter = "todos";
let currentSearch = "";

function renderBooks() {
  const booksGrid = document.getElementById("booksGrid");
  if (!booksGrid) return;

  const filtered = BOOKS_DATABASE.filter(book => {
    // Filtro por Categoria
    const matchesFilter = (currentFilter === "todos") || 
      (currentFilter === "puritano" && book.category === "puritano") ||
      (currentFilter === "interlinear" && book.category === "interlinear") ||
      (currentFilter === "outros" && book.category === "outros");

    // Filtro por Busca
    const term = currentSearch.toLowerCase().trim();
    const matchesSearch = !term || 
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.synopsis.toLowerCase().includes(term) ||
      book.asin.toLowerCase().includes(term);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    booksGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-family: var(--font-serif-title); font-size: 1.3rem; margin-bottom: 8px;">Nenhum livro encontrado</p>
        <p style="font-size: 1rem;">Tente buscar por outro termo ou selecione outra categoria.</p>
      </div>
    `;
    return;
  }

  booksGrid.innerHTML = filtered.map(book => {
    const badgeClass = book.category === 'puritano' ? 'puritano' : (book.category === 'interlinear' ? 'interlinear' : 'idiomas');
    const amazonUrl = `https://www.amazon.com.br/dp/${book.asin}?tag=editorapactum-20`;

    return `
      <article class="book-card" data-id="${book.id}">
        <div class="book-cover-wrap" onclick="openBookModal('${book.id}')">
          <span class="book-badge ${badgeClass}">${book.categoryLabel}</span>
          <img src="${book.cover}" alt="${book.title}" class="book-cover-img" loading="lazy">
        </div>
        <div class="book-info">
          <div class="book-author">${book.author}</div>
          <h3 class="book-title" title="${book.title}" onclick="openBookModal('${book.id}')" style="cursor:pointer;">${book.shortTitle}</h3>
          <div class="book-meta">
            <span class="book-price">${book.price}</span>
            <span class="book-format">${book.format}</span>
          </div>
          <div class="book-actions">
            <button class="btn-details" onclick="openBookModal('${book.id}')">Ver Detalhes</button>
            <a href="${amazonUrl}" target="_blank" rel="noopener" class="btn-card-amazon">
              Amazon
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// RENDERIZAÇÃO DOS AUTORES
// ==========================================================================
function renderAuthors() {
  const autoresGrid = document.getElementById("autoresGrid");
  if (!autoresGrid) return;

  autoresGrid.innerHTML = AUTHORS_DATABASE.map(author => {
    const initials = author.name.split(" ").map(n => n[0]).slice(0, 2).join("");
    return `
      <div class="author-card" onclick="filterByAuthor('${author.name}')">
        <div class="author-avatar-wrap">${initials}</div>
        <h3 class="author-name">${author.name}</h3>
        <div class="author-era">${author.era}</div>
        <p class="author-desc">${author.desc}</p>
        <span class="author-works-count">${author.worksCount}</span>
      </div>
    `;
  }).join("");
}

function filterByAuthor(authorName) {
  currentFilter = "todos";
  currentSearch = authorName;
  
  // Atualiza botões de filtro
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "todos");
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = authorName;

  renderBooks();
  
  // Scroll para o catálogo
  const catalogoSection = document.getElementById("catalogo");
  if (catalogoSection) {
    catalogoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// MODAL DE DETALHES DO LIVRO
// ==========================================================================
function openBookModal(bookId) {
  const book = BOOKS_DATABASE.find(b => b.id === bookId);
  if (!book) return;

  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  if (!modalOverlay || !modalContent) return;

  const amazonUrl = `https://www.amazon.com.br/dp/${book.asin}?tag=editorapactum-20`;

  modalContent.innerHTML = `
    <div class="modal-cover-wrap">
      <img src="${book.cover}" alt="${book.title}" class="modal-cover-img">
    </div>
    <div class="modal-details">
      <span class="modal-category">${book.categoryLabel}</span>
      <h2 class="modal-title">${book.title}</h2>
      <div class="modal-author">por ${book.author}</div>
      <p class="modal-synopsis">${book.synopsis}</p>
      
      <div class="modal-specs">
        <div class="spec-item">
          <span class="spec-label">Formato</span>
          <span class="spec-value">${book.format}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">ASIN</span>
          <span class="spec-value">${book.asin}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Idioma / Escopo</span>
          <span class="spec-value">${book.language}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Disponibilidade</span>
          <span class="spec-value">Kindle & Kindle Unlimited</span>
        </div>
      </div>

      <div class="modal-footer-action">
        <div class="modal-price">${book.price}</div>
        <a href="${amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary modal-btn-buy">
          Adquirir na Amazon Kindle
        </a>
        <button class="btn btn-ghost modal-btn-share" onclick="copyBookLink('${amazonUrl}')" title="Copiar link direto do livro">
          Copiar Link
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function copyBookLink(url) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Link copiado com sucesso! 📋");
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
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function closeBookModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// PARTICLES CANVAS NA HERO (POWDER DE OURO / ESTRELAS)
// ==========================================================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Criação das partículas
  const count = Math.min(80, Math.floor(window.innerWidth / 16));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.15,
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
      pulseDir: 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Reseta posição se sair da tela
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Pulsação de brilho
      p.opacity += p.pulse * p.pulseDir;
      if (p.opacity > 0.85) p.pulseDir = -1;
      if (p.opacity < 0.2) p.pulseDir = 1;

      // Desenha partícula dourada
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 190, 104, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(201, 168, 76, 0.6)";
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
// FUNÇÕES AUXILIARES DE FILTRO
// ==========================================================================
function filterByCategory(category) {
  currentFilter = category;
  currentSearch = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  renderBooks();

  const catalogoSection = document.getElementById("catalogo");
  if (catalogoSection) {
    catalogoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// INICIALIZAÇÃO & EVENTOS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Renderiza Catálogo e Autores
  renderBooks();
  renderAuthors();

  // 2. Inicializa Canvas e Contadores
  initHeroCanvas();
  initStatsCounter();

  // 3. Campo de Busca Instantânea
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderBooks();
    });
  }

  // 4. Filtros de Categoria
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderBooks();
    });
  });

  // 5. Modal Eventos
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");

  if (modalClose) modalClose.addEventListener("click", closeBookModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeBookModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBookModal();
  });

  // 6. Navbar Scrolled Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 7. Mobile Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
});

