/**
 * EDITORA PACTUM — BANCO DE CITAÇÕES DOS EBOOKS
 * 4+ citações memoráveis por obra + 55 citações para o carousel do Home
 * Carregue este arquivo ANTES de script.js no index.html
 */

// ==========================================================================
// CITAÇÕES POR LIVRO (4+ por ebook, indexadas pelo ID)
// ==========================================================================
const CITACOES_POR_LIVRO = {

  // ─── BÍBLIAS INTERLINEARES ────────────────────────────────────────────

  "pentateuco-interlinear": [
    "Cada palavra hebraica do Pentateuco é uma janela aberta para o coração do pacto eterno de Deus com Seu povo.",
    "A transliteração fonética transforma o leitor em ouvinte das mesmas sílabas que Moisés proclamou no deserto.",
    "No texto massorético reside a voz original da revelação: cada vogal, cada acento, cada nuança teológica preservada por milênios.",
    "Estudar o Pentateuco no hebraico original é caminhar pelas mesmas veredas linguísticas que os patriarcas percorreram.",
    "Bereshit — No princípio — a primeira palavra hebraica já contém em si a semente de toda a teologia bíblica."
  ],

  "biblia-interlinear-hg-vol1": [
    "Quando o Hebraico Massorético e a Septuaginta Grega se encontram no mesmo versículo, a riqueza da revelação divina se multiplica.",
    "A comparação interlinear entre hebraico e grego revela camadas de significado que nenhuma tradução isolada pode alcançar.",
    "A Septuaginta foi a Bíblia dos apóstolos; confrontá-la com o texto hebraico é ouvir o diálogo entre dois mundos da fé.",
    "Cada palavra alinhada entre hebraico e grego é uma ponte entre a revelação original e a Igreja primitiva."
  ],

  "biblia-profetas-maiores": [
    "Isaías viu a glória que encheu o templo; no hebraico original, cada termo ecoa a santidade tremenda do Deus Altíssimo.",
    "Os oráculos de Jeremias, lidos em sua língua natal, revelam a agonia do profeta e a compaixão inexaurível de Javé.",
    "No texto hebraico de Ezequiel, a visão do vale de ossos secos ganha uma força visceral que tradução alguma reproduz plenamente.",
    "Daniel profetizou em hebraico e aramaico; no texto original, cada reino e cada visão carregam precisão profética sobrenatural."
  ],

  "biblia-livros-historicos": [
    "De Josué a Ester, o texto hebraico narra a providência soberana de Deus conduzindo Israel através de impérios e desertos.",
    "Cada batalha, cada juiz, cada rei registrado no hebraico original testemunha o governo absoluto de Javé sobre a história.",
    "O livro de Rute, lido no hebraico, revela uma ternura linguística que espelha a redenção do parente-redentor.",
    "A narrativa histórica de Israel é teologia em movimento: Deus agindo, corrigindo, restaurando e cumprindo Suas promessas."
  ],

  "biblia-profetas-menores": [
    "Os doze profetas menores são menores apenas em extensão; sua mensagem hebraica carrega a autoridade infinita do Deus vivo.",
    "Oseias clama no hebraico original com a dor de um amor traído e a esperança de uma redenção inabalável.",
    "Malaquias encerra o Antigo Testamento com promessas que reverberam até o Novo: o Sol da Justiça nascerá com cura em Suas asas.",
    "No hebraico de Habacuque, a declaração 'o justo viverá pela fé' ressoa com uma clareza que mudou a história da Igreja."
  ],

  "biblia-livros-poeticos": [
    "Os Salmos em hebraico são a voz da alma humana dialogando com a eternidade em metros e paralelismos divinos.",
    "Provérbios no texto original revela jogos de palavras e aliterações que são verdadeiras joias literárias do Espírito Santo.",
    "O Eclesiastes hebraico confronta a vaidade com uma honestidade brutal que só a sabedoria divina pode conceder.",
    "O Cântico dos Cânticos, lido no hebraico, é a mais sublime poesia de amor já composta pela pena inspirada."
  ],

  "nt-interlinear-grego-pt": [
    "O Grego Koiné do Novo Testamento é a língua escolhida por Deus para revelar o mistério do Evangelho a todas as nações.",
    "Cada particípio, cada tempo verbal grego carrega uma precisão teológica que ilumina a doutrina apostólica.",
    "Na análise morfológica do texto grego, o estudante descobre nuances de graça, fé e salvação invisíveis nas traduções.",
    "O Novo Testamento interlinear é o microscópio do teólogo: amplia cada célula da revelação neotestamentária."
  ],

  // ─── CLÁSSICOS PURITANOS ──────────────────────────────────────────────

  "arte-contentamento-divino": [
    "O contentamento é a arca em que a alma se refugia quando as águas da tribulação cobrem toda a terra.",
    "Um cristão contente carrega o céu em sua alma antes mesmo de chegar à pátria celestial.",
    "A murmuração transforma o mel da providência em fel; o contentamento transforma o fel em mel.",
    "Quem aprendeu a arte do contentamento encontrou a pedra filosofal que transforma cada metal em ouro.",
    "O contentamento não é insensibilidade, mas a submissão inteligente e alegre à vontade soberana de Deus."
  ],

  "chave-secreta-ceu": [
    "A oração secreta é a chave de ouro que abre os cofres de misericórdia inesgotáveis do Pai celeste.",
    "No quarto secreto de oração, a alma se despe de toda máscara e se apresenta nua diante do Deus que tudo vê.",
    "Aquele que negligencia a oração secreta trai sua alma e rouba de Deus a honra que Lhe é devida.",
    "A força de um cristão se mede não pelo brilho de sua vida pública, mas pelo fervor de sua devoção secreta.",
    "O diabo treme quando vê o mais fraco dos santos de joelhos no quarto secreto de oração."
  ],

  "glorioso-banquete-evangelho": [
    "O Evangelho é um banquete onde o mais faminto pecador encontra provisões infinitas de graça e misericórdia.",
    "Cristo não espera que o pecador se limpe para recebê-lo; Ele vem ao encontro dos imundos com a bacia e a toalha.",
    "Na mesa do Evangelho, não há lugares vazios; há espaço para todo aquele que reconhece sua fome espiritual.",
    "A morte foi tragada na vitória; o crente se assenta à mesa sabendo que o último inimigo já foi derrotado.",
    "Há em Cristo mais misericórdia para abraçar e curar do que pecado em toda a humanidade para condenar."
  ],

  "filho-luz-caminhando-trevas": [
    "Nas horas em que a luz do rosto de Deus parece oculta, apoie-se firme no braço invencível do Seu poder.",
    "O filho da luz caminhando em trevas não perdeu sua filiação; apenas caminha por um vale que Deus designou para fortalecê-lo.",
    "As trevas espirituais não são evidência de abandono divino, mas escola de confiança em Deus sem os sentidos.",
    "Cristo caminhou na escuridão do Getsêmani para que Seus filhos jamais caminhem sem esperança nas trevas.",
    "A noite mais escura da alma é também a hora em que as estrelas das promessas brilham com maior intensidade."
  ],

  "anatomia-pecados-secretos": [
    "Os pecados secretos são como raízes subterrâneas que alimentam toda árvore de corrupção visível.",
    "Quem não persegue os pecados ocultos com o bisturi da Palavra está permitindo que o câncer devore a alma.",
    "A verdadeira santidade não se contenta com a aparência exterior; ela invade os recônditos mais secretos do coração.",
    "Diante dos olhos oniscientes de Deus, não existem pecados secretos — apenas pecados que escondemos de nós mesmos."
  ],

  "terrivel-voz-deus-cidade": [
    "Quando a peste e o fogo devoraram Londres, a voz de Deus falou mais alto que todas as trombetas humanas.",
    "As calamidades são os megafones da providência, convocando pecadores obstinados ao arrependimento urgente.",
    "Em meio às chamas de 1666, o que ficou de pé não foram os edifícios, mas a fé daqueles que confiaram no Senhor.",
    "Quem tem ouvidos para ouvir a terrível voz de Deus nas calamidades receberá sabedoria para escapar do juízo vindouro."
  ],

  "vaidade-mundo": [
    "O mundo promete rios de prazer e entrega apenas gotas de decepção misturadas com amargura.",
    "Vaidade das vaidades! O homem que abraça o mundo abraça uma sombra que se dissipa ao toque.",
    "As honras terrenas são coroas de flores que murcham antes que o sol se ponha.",
    "Somente aquele que desapega o coração do mundo transitório pode agarrar-se ao Reino eterno e imperecível."
  ],

  "exposicoes-efesios": [
    "A salvação pela graça soberana é o monumento eterno edificado pelo amor incondicional da Santíssima Trindade.",
    "Em Efésios, Paulo descortina as insondáveis riquezas de Cristo — um oceano sem fundo de misericórdia redentora.",
    "A união mística entre Cristo e Sua Igreja é o maior mistério revelado ao entendimento humano pela pena apostólica.",
    "Fomos predestinados antes da fundação do mundo: esta verdade é o alicerce granítico sobre o qual repousa toda a segurança do crente.",
    "A graça não é recompensa pelo mérito humano; é o presente imerecido de um Deus que ama os que são indignos de amor."
  ],

  "retorno-oracoes": [
    "Quem envia orações como navios ao porto celestial deve vigiar na praia para receber suas cargas preciosas.",
    "Deus não apenas ouve as orações; Ele as armazena em frascos de ouro e as responde no tempo perfeito de Sua sabedoria.",
    "A oração que não espera resposta é como a seta disparada sem alvo: gasta energia sem propósito.",
    "O retorno das orações é sempre maior do que o investimento da fé; Deus paga juros compostos de graça."
  ],

  "limites-liberdade-crista": [
    "Cristo nos liberta do jugo do pecado não para vivermos em rebeldia, mas no deleite da santa obediência.",
    "A liberdade cristã não é licença para pecar, mas poder para servir a Deus com alegria e reverência.",
    "O antinomiano abusa da graça; o legalista a despreza. O verdadeiro cristão a recebe com tremor e gratidão.",
    "A Lei é o espelho que mostra a sujeira; a Graça é a fonte que lava. Ambas são presentes do mesmo Deus."
  ],

  "suspiro-por-deus": [
    "O desejo mais nobre da alma nascida de novo é contemplar a beleza santificante do rosto do Senhor.",
    "Um suspiro pela presença de Deus vale mais que mil gritos por todas as riquezas do universo.",
    "A alma que suspira por Deus já foi tocada pelo Espírito; pois ninguém deseja o céu sem que o céu o tenha desejado primeiro.",
    "A formosura do Senhor é tal que um vislumbre dela eclipsa todo o esplendor que este mundo pode oferecer."
  ],

  "paciencia-obra-perfeita": [
    "A paciência é a virtude que permite à fé coroar o crente mesmo em meio às dores mais agudas.",
    "Deus não desperdiça nenhum sofrimento; cada gota de dor é ingrediente na receita divina da santificação.",
    "A paciência cristã não é resignação passiva, mas confiança ativa nas promessas inabaláveis de Deus.",
    "A obra perfeita da paciência é a alma que emerge do forno da aflição mais pura, mais forte e mais semelhante a Cristo."
  ],

  "refrigerio-abatido": [
    "Nunca desespere da graça; quando você se sente no fundo do poço, as mãos de Cristo estão por baixo de você.",
    "O abatimento de espírito é uma tentação que Satanás usa para paralisar os soldados de Cristo na batalha.",
    "Deus não se impressiona com a nossa força, mas com a nossa fraqueza que se refugia em Sua onipotência.",
    "O refrigério do abatido não vem de dentro de si, mas do alto — do trono de graça onde Cristo intercede sem cessar."
  ],

  "chamado-nao-convertidos": [
    "Voltem enquanto há fôlego! Venham a Cristo enquanto a porta da graça permanece escancarada!",
    "Cada dia sem conversão é um dia roubado da eternidade e acrescentado à conta do juízo.",
    "Não há argumento racional para recusar a salvação: é como rejeitar o antídoto quando o veneno já corre nas veias.",
    "O chamado de Deus não é sugestão diplomática; é ordem real do Soberano do universo que exige resposta imediata."
  ],

  "sobre-paciencia-agostinho": [
    "A paciência verdadeira é o dom celeste que nasce do amor de Deus derramado no coração pelo Espírito Santo.",
    "Os mártires suportaram as chamas não por força própria, mas pela graça que transformou o tormento em triunfo.",
    "A paciência do cristão difere da paciência do filósofo como o sol difere de uma vela: uma é dom divino, a outra é esforço humano.",
    "Não é paciente quem apenas tolera o sofrimento, mas quem o recebe como instrumento de purificação nas mãos do Pai."
  ],

  "amor-cristo-invisivel": [
    "Não O vimos com os olhos carnais, contudo nosso coração inflama-se de santa afeição por Sua pessoa gloriosa.",
    "O amor pelo Cristo invisível é a prova mais irrefutável de que a fé é dom sobrenatural do Espírito.",
    "Amar a quem nunca se viu é o milagre quotidiano de todo cristão genuíno; é a fé operando pelo amor.",
    "Quando O virmos face a face, descobriremos que nosso amor era apenas uma centelha diante do incêndio da Sua glória."
  ],

  "carta-privilegios-crente": [
    "Tudo é vosso: vida, morte, mundo presente, mundo futuro — a herança do crente é ilimitada em Cristo.",
    "O crente é mais rico que reis; possui em Cristo tesouros que os cofres do universo não podem conter.",
    "A carta de privilégios do cristão foi redigida com o sangue do Cordeiro e selada pelo Espírito eterno.",
    "Quem pertence a Cristo possui todas as coisas; quem não pertence a Cristo, por mais que possua, nada tem."
  ],

  "entranhas-abertas": [
    "As entranhas de Cristo estão abertas de compaixão; Ele corre ao encontro do pecador quebrantado com abraço de redenção.",
    "No Cântico dos Cânticos, Cristo admira Sua noiva não pelo que ela é em si, mas pelo que Ele fez dela pela graça.",
    "A ternura do Noivo celestial é tal que nenhuma ferida da noiva passa despercebida ao Seu olhar amoroso.",
    "A união entre Cristo e a Igreja é mais íntima que a do esposo e esposa; é a fusão espiritual do céu com a terra redimida."
  ],

  "cristao-silencioso": [
    "O silêncio diante da vara da aflição não é fraqueza; é a mais eloquente confissão da soberania divina.",
    "Emudeci e não abri a boca, porque Tu o fizeste — esta é a oração mais profunda que um coração aflito pode oferecer.",
    "O cristão silencioso sob o sofrimento demonstra mais fé do que mil palavras de sabedoria humana.",
    "A vara que Deus usa para disciplinar Seus filhos é embebida em amor; quem a aceita em silêncio prova que é herdeiro legítimo."
  ],

  "quinhao-tortuoso": [
    "As curvaturas que Deus traça em nossa jornada destinam-se a dobrar nosso orgulho para conformá-lo à Sua santidade.",
    "Ninguém recebe um quinhão perfeitamente reto nesta vida; as tortuosidades são o mapa pelo qual Deus nos guia ao céu.",
    "O crente que abraça seu quinhão tortuoso com fé descobre que cada curva o aproximava de Deus.",
    "Deus endireita a alma pelas mesmas curvas que parecem desviar-nos do caminho; Sua sabedoria supera infinitamente a nossa."
  ],

  "conflito-alma": [
    "A alma que luta consigo mesma já foi libertada por Cristo; pois o homem natural não conhece conflito espiritual.",
    "O desespero é um mentiroso que sussurra que Deus esqueceu; a fé é a verdade que grita que Ele nunca abandona.",
    "Por que estás abatida, ó minha alma? Espera em Deus, pois ainda O louvarás pela salvação do Seu rosto.",
    "O conflito interior do crente é evidência de vida espiritual; só os mortos não sentem dor."
  ],

  "misterio-providencia": [
    "As providências de Deus são como caracteres hebraicos: compreendem-se melhor quando lidas de trás para frente.",
    "Não há acasos no universo governado por Deus; cada evento é um ponto bordado no tapete eterno de Sua vontade.",
    "O mistério da providência é que Deus escreve linhas retas com os bastões tortos que os homens Lhe entregam.",
    "Quem mantém um diário das providências divinas descobrirá, ao final, que cada capítulo era necessário para a conclusão gloriosa.",
    "A providência de Deus é o governo invisível pelo qual o Criador conduz todas as coisas ao Seu fim glorioso."
  ],

  // ─── INTERNACIONAL ────────────────────────────────────────────────────

  "nt-trilingue": [
    "Três línguas em um só texto revelam que o Evangelho foi desde o princípio destinado a todas as nações.",
    "O Grego Koiné, o Português e o Inglês convergem para iluminar verdades que nenhuma língua isolada esgota.",
    "A edição trilíngue é como um prisma: decompõe a luz branca da revelação em espectro completo de significados.",
    "Comparar o texto em três idiomas é ouvir o Espírito Santo falar através de três janelas culturais distintas."
  ],

  "nt-interlinear-grego-es": [
    "El texto griego del Nuevo Testamento es el pulso vivo de la revelación apostólica que late en cada versículo.",
    "La traducción interlineal permite al estudiante hispano tocar con sus propios ojos cada palabra que el apóstol escribió.",
    "No hay atajos para la verdad bíblica; el camino más seguro es regresar siempre al texto original griego.",
    "Cada palabra griega traducida al español es un puente entre el mundo de los apóstoles y el nuestro."
  ],

  "nt-interlinear-grego-fr": [
    "Le texte grec du Nouveau Testament est la source pure d'où jaillissent toutes les vérités de la foi chrétienne.",
    "L'interlinéaire grec-français ouvre au lecteur francophone la porte du jardin apostolique dans sa beauté originale.",
    "Chaque mot grec, translitéré et traduit, est une graine de lumière plantée dans l'esprit du chercheur de vérité.",
    "La tradition Louis Segond rencontre le texte Koinè: c'est le dialogue entre la Parole éternelle et la langue de Molière."
  ]
};


// ==========================================================================
// CAROUSEL DE CITAÇÕES — 55 ENTRADAS PARA O HOME
// ==========================================================================
const CAROUSEL_QUOTES = [
  // --- Thomas Watson ---
  { quote: "O contentamento é a arca em que a alma se refugia quando as águas da tribulação cobrem toda a terra.", author: "Thomas Watson", book: "A Arte do Contentamento Divino", bookId: "arte-contentamento-divino" },
  { quote: "Um cristão contente carrega o céu em sua alma antes mesmo de chegar à pátria celestial.", author: "Thomas Watson", book: "A Arte do Contentamento Divino", bookId: "arte-contentamento-divino" },
  { quote: "A murmuração transforma o mel da providência em fel; o contentamento transforma o fel em mel.", author: "Thomas Watson", book: "A Arte do Contentamento Divino", bookId: "arte-contentamento-divino" },
  { quote: "Tudo é vosso: vida, morte, mundo presente, mundo futuro — a herança do crente é ilimitada em Cristo.", author: "Thomas Watson", book: "A Carta de Privilégios do Crente", bookId: "carta-privilegios-crente" },
  { quote: "O crente é mais rico que reis; possui em Cristo tesouros que os cofres do universo não podem conter.", author: "Thomas Watson", book: "A Carta de Privilégios do Crente", bookId: "carta-privilegios-crente" },
  { quote: "A carta de privilégios do cristão foi redigida com o sangue do Cordeiro e selada pelo Espírito eterno.", author: "Thomas Watson", book: "A Carta de Privilégios do Crente", bookId: "carta-privilegios-crente" },

  // --- Richard Sibbes ---
  { quote: "Há em Cristo mais misericórdia para abraçar e curar do que pecado em toda a humanidade para condenar.", author: "Richard Sibbes", book: "O Glorioso Banquete do Evangelho", bookId: "glorioso-banquete-evangelho" },
  { quote: "Na mesa do Evangelho, não há lugares vazios; há espaço para todo aquele que reconhece sua fome espiritual.", author: "Richard Sibbes", book: "O Glorioso Banquete do Evangelho", bookId: "glorioso-banquete-evangelho" },
  { quote: "O desejo mais nobre da alma nascida de novo é contemplar a beleza santificante do rosto do Senhor.", author: "Richard Sibbes", book: "Um Suspiro por Deus", bookId: "suspiro-por-deus" },
  { quote: "A alma que suspira por Deus já foi tocada pelo Espírito; pois ninguém deseja o céu sem que o céu o tenha desejado primeiro.", author: "Richard Sibbes", book: "Um Suspiro por Deus", bookId: "suspiro-por-deus" },
  { quote: "As entranhas de Cristo estão abertas de compaixão; Ele corre ao encontro do pecador quebrantado com abraço de redenção.", author: "Richard Sibbes", book: "Entranhas Abertas", bookId: "entranhas-abertas" },
  { quote: "A alma que luta consigo mesma já foi libertada por Cristo; pois o homem natural não conhece conflito espiritual.", author: "Richard Sibbes", book: "O Conflito da Alma", bookId: "conflito-alma" },
  { quote: "O desespero é um mentiroso que sussurra que Deus esqueceu; a fé é a verdade que grita que Ele nunca abandona.", author: "Richard Sibbes", book: "O Conflito da Alma", bookId: "conflito-alma" },
  { quote: "A formosura do Senhor é tal que um vislumbre dela eclipsa todo o esplendor que este mundo pode oferecer.", author: "Richard Sibbes", book: "Um Suspiro por Deus", bookId: "suspiro-por-deus" },

  // --- Thomas Goodwin ---
  { quote: "Nas horas em que a luz do rosto de Deus parece oculta, apoie-se firme no braço invencível do Seu poder.", author: "Thomas Goodwin", book: "O Filho da Luz Caminhando em Trevas", bookId: "filho-luz-caminhando-trevas" },
  { quote: "Cristo caminhou na escuridão do Getsêmani para que Seus filhos jamais caminhem sem esperança nas trevas.", author: "Thomas Goodwin", book: "O Filho da Luz Caminhando em Trevas", bookId: "filho-luz-caminhando-trevas" },
  { quote: "A noite mais escura da alma é também a hora em que as estrelas das promessas brilham com maior intensidade.", author: "Thomas Goodwin", book: "O Filho da Luz Caminhando em Trevas", bookId: "filho-luz-caminhando-trevas" },
  { quote: "A salvação pela graça soberana é o monumento eterno edificado pelo amor incondicional da Santíssima Trindade.", author: "Thomas Goodwin", book: "Exposições em Efésios", bookId: "exposicoes-efesios" },
  { quote: "Fomos predestinados antes da fundação do mundo: o alicerce granítico sobre o qual repousa toda segurança do crente.", author: "Thomas Goodwin", book: "Exposições em Efésios", bookId: "exposicoes-efesios" },
  { quote: "Quem envia orações como navios ao porto celestial deve vigiar na praia para receber suas cargas preciosas.", author: "Thomas Goodwin", book: "O Retorno das Orações", bookId: "retorno-oracoes" },
  { quote: "O retorno das orações é sempre maior do que o investimento da fé; Deus paga juros compostos de graça.", author: "Thomas Goodwin", book: "O Retorno das Orações", bookId: "retorno-oracoes" },
  { quote: "A paciência é a virtude que permite à fé coroar o crente mesmo em meio às dores mais agudas.", author: "Thomas Goodwin", book: "A Paciência e Sua Obra Perfeita", bookId: "paciencia-obra-perfeita" },
  { quote: "A obra perfeita da paciência é a alma que emerge do forno da aflição mais pura e mais semelhante a Cristo.", author: "Thomas Goodwin", book: "A Paciência e Sua Obra Perfeita", bookId: "paciencia-obra-perfeita" },

  // --- Thomas Brooks ---
  { quote: "A oração secreta é a chave de ouro que abre os cofres de misericórdia inesgotáveis do Pai celeste.", author: "Thomas Brooks", book: "A Chave Secreta do Céu", bookId: "chave-secreta-ceu" },
  { quote: "A força de um cristão se mede não pelo brilho de sua vida pública, mas pelo fervor de sua devoção secreta.", author: "Thomas Brooks", book: "A Chave Secreta do Céu", bookId: "chave-secreta-ceu" },
  { quote: "O diabo treme quando vê o mais fraco dos santos de joelhos no quarto secreto de oração.", author: "Thomas Brooks", book: "A Chave Secreta do Céu", bookId: "chave-secreta-ceu" },
  { quote: "O silêncio diante da vara da aflição não é fraqueza; é a mais eloquente confissão da soberania divina.", author: "Thomas Brooks", book: "O Cristão Silencioso sob a Vara", bookId: "cristao-silencioso" },
  { quote: "A vara que Deus usa para disciplinar Seus filhos é embebida em amor; quem a aceita em silêncio prova que é herdeiro legítimo.", author: "Thomas Brooks", book: "O Cristão Silencioso sob a Vara", bookId: "cristao-silencioso" },

  // --- John Flavel ---
  { quote: "As providências de Deus são como caracteres hebraicos: compreendem-se melhor quando lidas de trás para frente.", author: "John Flavel", book: "O Mistério da Providência", bookId: "misterio-providencia" },
  { quote: "Não há acasos no universo governado por Deus; cada evento é um ponto bordado no tapete eterno de Sua vontade.", author: "John Flavel", book: "O Mistério da Providência", bookId: "misterio-providencia" },
  { quote: "O mistério da providência é que Deus escreve linhas retas com os bastões tortos que os homens Lhe entregam.", author: "John Flavel", book: "O Mistério da Providência", bookId: "misterio-providencia" },
  { quote: "Quem mantém um diário das providências divinas descobrirá, ao final, que cada capítulo era necessário para a conclusão gloriosa.", author: "John Flavel", book: "O Mistério da Providência", bookId: "misterio-providencia" },

  // --- Thomas Boston ---
  { quote: "As curvaturas que Deus traça em nossa jornada destinam-se a dobrar nosso orgulho para conformá-lo à Sua santidade.", author: "Thomas Boston", book: "O Quinhão Tortuoso", bookId: "quinhao-tortuoso" },
  { quote: "O crente que abraça seu quinhão tortuoso com fé descobre que cada curva o aproximava de Deus.", author: "Thomas Boston", book: "O Quinhão Tortuoso", bookId: "quinhao-tortuoso" },
  { quote: "Deus endireita a alma pelas mesmas curvas que parecem desviar-nos do caminho; Sua sabedoria supera infinitamente a nossa.", author: "Thomas Boston", book: "O Quinhão Tortuoso", bookId: "quinhao-tortuoso" },

  // --- Richard Baxter ---
  { quote: "Voltem enquanto há fôlego! Venham a Cristo enquanto a porta da graça permanece escancarada!", author: "Richard Baxter", book: "Um Chamado aos Não Convertidos", bookId: "chamado-nao-convertidos" },
  { quote: "Cada dia sem conversão é um dia roubado da eternidade e acrescentado à conta do juízo.", author: "Richard Baxter", book: "Um Chamado aos Não Convertidos", bookId: "chamado-nao-convertidos" },
  { quote: "O chamado de Deus não é sugestão diplomática; é ordem real do Soberano que exige resposta imediata.", author: "Richard Baxter", book: "Um Chamado aos Não Convertidos", bookId: "chamado-nao-convertidos" },

  // --- William Bridge ---
  { quote: "Nunca desespere da graça; quando você se sente no fundo do poço, as mãos de Cristo estão por baixo de você.", author: "William Bridge", book: "Um Refrigério para o Abatido", bookId: "refrigerio-abatido" },
  { quote: "O refrigério do abatido não vem de dentro de si, mas do alto — do trono de graça onde Cristo intercede sem cessar.", author: "William Bridge", book: "Um Refrigério para o Abatido", bookId: "refrigerio-abatido" },
  { quote: "Deus não se impressiona com a nossa força, mas com a nossa fraqueza que se refugia em Sua onipotência.", author: "William Bridge", book: "Um Refrigério para o Abatido", bookId: "refrigerio-abatido" },

  // --- Obadiah Sedgwick ---
  { quote: "Os pecados secretos são como raízes subterrâneas que alimentam toda árvore de corrupção visível.", author: "Obadiah Sedgwick", book: "A Anatomia dos Pecados Secretos", bookId: "anatomia-pecados-secretos" },
  { quote: "Diante dos olhos oniscientes de Deus, não existem pecados secretos — apenas pecados que escondemos de nós mesmos.", author: "Obadiah Sedgwick", book: "A Anatomia dos Pecados Secretos", bookId: "anatomia-pecados-secretos" },

  // --- Thomas Vincent ---
  { quote: "Não O vimos com os olhos carnais, contudo nosso coração inflama-se de santa afeição por Sua pessoa gloriosa.", author: "Thomas Vincent", book: "O Amor pelo Cristo Invisível", bookId: "amor-cristo-invisivel" },
  { quote: "Quando O virmos face a face, descobriremos que nosso amor era apenas uma centelha diante do incêndio da Sua glória.", author: "Thomas Vincent", book: "O Amor pelo Cristo Invisível", bookId: "amor-cristo-invisivel" },
  { quote: "As calamidades são os megafones da providência, convocando pecadores obstinados ao arrependimento urgente.", author: "Thomas Vincent", book: "A Terrível Voz de Deus na Cidade", bookId: "terrivel-voz-deus-cidade" },

  // --- Samuel Bolton ---
  { quote: "A liberdade cristã não é licença para pecar, mas poder para servir a Deus com alegria e reverência.", author: "Samuel Bolton", book: "Os Limites da Liberdade Cristã", bookId: "limites-liberdade-crista" },
  { quote: "A Lei é o espelho que mostra a sujeira; a Graça é a fonte que lava. Ambas são presentes do mesmo Deus.", author: "Samuel Bolton", book: "Os Limites da Liberdade Cristã", bookId: "limites-liberdade-crista" },

  // --- Ezekiel Hopkins ---
  { quote: "O mundo promete rios de prazer e entrega apenas gotas de decepção misturadas com amargura.", author: "Ezekiel Hopkins", book: "A Vaidade do Mundo", bookId: "vaidade-mundo" },
  { quote: "As honras terrenas são coroas de flores que murcham antes que o sol se ponha.", author: "Ezekiel Hopkins", book: "A Vaidade do Mundo", bookId: "vaidade-mundo" },

  // --- Santo Agostinho ---
  { quote: "A paciência verdadeira é o dom celeste que nasce do amor de Deus derramado no coração pelo Espírito Santo.", author: "Santo Agostinho", book: "Sobre a Paciência", bookId: "sobre-paciencia-agostinho" },
  { quote: "Os mártires suportaram as chamas não por força própria, mas pela graça que transformou o tormento em triunfo.", author: "Santo Agostinho", book: "Sobre a Paciência", bookId: "sobre-paciencia-agostinho" },
  { quote: "A paciência do cristão difere da paciência do filósofo como o sol difere de uma vela: uma é dom divino, a outra é esforço humano.", author: "Santo Agostinho", book: "Sobre a Paciência", bookId: "sobre-paciencia-agostinho" },

  // --- Bíblias Interlineares ---
  { quote: "Cada palavra hebraica do Pentateuco é uma janela aberta para o coração do pacto eterno de Deus com Seu povo.", author: "Editora Pactum", book: "Pentateuco Interlinear", bookId: "pentateuco-interlinear" },
  { quote: "O Grego Koiné do Novo Testamento é a língua escolhida por Deus para revelar o mistério do Evangelho a todas as nações.", author: "Editora Pactum", book: "NT Interlinear Grego-Português", bookId: "nt-interlinear-grego-pt" },
  { quote: "A edição trilíngue é como um prisma: decompõe a luz branca da revelação em espectro completo de significados.", author: "Editora Pactum", book: "NT Trilíngue (Grego-PT-EN)", bookId: "nt-trilingue" }
];
