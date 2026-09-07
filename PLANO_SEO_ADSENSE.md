# Plano de Ação Estratégico: Resolução do Google Search Console, Otimização Máxima de SEO e Aprovação no Google AdSense

**Projeto:** Editora Pactum (https://www.editorapactum.com.br/)  
**Data:** 07 de Setembro de 2026  
**Status:** Aguardando Aprovação do Usuário para Execução

---

## 1. Diagnóstico do Aviso do Google Search Console

### Mensagem Recebida:
> *"O Search Console identificou que não houve indexação de páginas no seu site pelo seguinte motivo: Página alternativa com tag canônica adequada. Se o motivo não for intencional, corrija o erro para que possamos indexar páginas e exibir o conteúdo afetado no Google."*

### O que isso significa na prática?
1. **Não é um erro ou penalização do site:** O status *"Página alternativa com tag canônica adequada"* é o comportamento padrão e saudável do robô do Google quando ele encontra uma **URL duplicada ou secundária** e constata que ela aponta via `<link rel="canonical">` para a versão oficial.
2. **Exemplos comuns de URLs que causam esse aviso:**
   - `http://editorapactum.com.br` ou `http://www.editorapactum.com.br` (versões HTTP)
   - `https://editorapactum.com.br` (versão sem `www`)
   - `https://www.editorapactum.com.br/index.html` (com terminação `/index.html`)
   - `https://www.editorapactum.com.br/?q=...` ou URLs com parâmetros de rastreamento
3. **O Google está dizendo:** *"Encontrei uma versão alternativa desta página, mas como você mesmo me avisou na tag canônica que a versão oficial é `https://www.editorapactum.com.br/`, eu não indexei a versão alternativa para evitar duplicidade."*
4. **Onde está a única preocupação?**
   - Garantir que a **página canônica oficial (`https://www.editorapactum.com.br/`) ESTÁ indexada**.
   - Garantir que todas as versões secundárias façam **Redirecionamento 301 Permanente** para a URL canônica, evitando que o Google gaste tempo rastreando URLs desnecessárias.

---

## 2. Por que o site atual tem alto risco de reprovação no Google AdSense?

O Google AdSense possui regras estritas de monetização. A maioria dos sites novos é reprovada pela mensagem padrão: *"Conteúdo de baixo valor / Inventário com pouco valor"*.

| Requisito do Google AdSense | Situação Atual do Site | Impacto no AdSense |
| :--- | :--- | :--- |
| **Política de Privacidade Completa** | ❌ Não existe | **Reprovação 100% garantida.** O Google exige obrigatoriamente cláusulas sobre cookies de terceiros, Google AdSense, cookie DART e LGPD/GDPR. |
| **Páginas Institucionais (Sobre / Termos / Contato)** | ⚠️ Apenas âncoras na mesma página | Falta de sinais de transparência e confiabilidade (E-E-A-T). |
| **Conteúdo Editorial Textual Substancial** | ⚠️ Apenas catálogo/vitrine com links da Amazon | O AdSense **não aprova sites que são apenas vitrines de afiliados**. Ele exige artigos, estudos e textos onde os anúncios façam sentido. |
| **Arquitetura de Navegação Multi-páginas** | ⚠️ Apenas 1 página indexada (`/`) | O robô do AdSense precisa rastrear várias páginas com conteúdo editorial para validar a qualidade do domínio. |

---

## 3. Estratégia de Solução Completa

Para resolver o Search Console, aprovar o AdSense e multiplicar as visitas orgânicas no Google Search, dividimos a execução em 4 fases:

### Fase 1: Infraestrutura de Redirecionamento 301 e Canonicidade
- **Configurar `vercel.json`:**
  - Redirecionar `https://www.editorapactum.com.br/index.html` → `https://www.editorapactum.com.br/` (Status HTTP 301).
  - Redirecionar `/index` → `/` (Status HTTP 301).
- **Otimizar `robots.txt`:**
  - Declarar permissões explícitas para os robôs do AdSense (`Mediapartners-Google` e `AdsBot-Google`), garantindo que a revisão do AdSense consiga ler todo o conteúdo sem bloqueios.
- **Configuração no Painel da Vercel (Instrução ao usuário):**
  - Garantir que o domínio `editorapactum.com.br` redirecione automaticamente (301) para `www.editorapactum.com.br`.

### Fase 2: Páginas Jurídicas e Institucionais Obrigatórias (AdSense Compliance)
Criar páginas completas, responsivas e estilizadas no mesmo padrão de luxo do site (cores ouro, azul escuro, tipografia EB Garamond / Cinzel):
1. **`politica-de-privacidade.html`**:
   - Menção expressa ao Google AdSense e rede de display do Google.
   - Explicação sobre cookies, web beacons e cookie DART do Google.
   - Instruções de desativação de anúncios personalizados (Google Ads Settings e aboutads.info).
   - Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
   - Divulgação de links de afiliado Amazon Associates.
2. **`termos-de-uso.html`**:
   - Termos e condições legais de navegação, direitos autorais e propriedade intelectual.
3. **`sobre.html`**:
   - Página institucional rica apresentando a história, visão teológica e rigor exegético da Editora Pactum, elevando o E-E-A-T perante o Google.
4. **`contato.html`**:
   - Formulário de contato, e-mail institucional e canais de atendimento direto.

### Fase 3: Portal Editorial de Estudos Teológicos (O Segredo para Aprovação no AdSense)
Criar artigos teológicos aprofundados (1.000 a 1.500 palavras cada) com marcação Schema.org `Article`, links contextuais para os livros e espaço dedicado para blocos de anúncios:
1. **`artigo-legado-puritano.html`**:
   - *"O Legado da Teologia Puritana: Por que os Clássicos dos Séculos XVI e XVII Continuam Vitais Hoje?"*
2. **`artigo-biblia-interlinear-exegese.html`**:
   - *"A Importância da Bíblia Interlinear: Como o Hebraico Massorético e a Septuaginta Grega Iluminam o Texto Bíblico."*
3. **`artigo-contentamento-thomas-watson.html`**:
   - *"A Arte do Contentamento Divino: A Resposta Puritana de Thomas Watson para a Ansiedade e as Aflições."*
4. **`artigo-verdadeira-graca-edwards.html`**:
   - *"Jonathan Edwards e o Discernimento Espiritual: A Diferença Vital entre o Saber Intelectual e o Amor Santo."*

### Fase 4: Integração de Navegação, Home e Sitemap.xml
1. **Atualizar `index.html`:**
   - Adicionar links no menu superior e rodapé para "Artigos", "Quem Somos", "Contato" e "Políticas".
   - Criar uma nova seção visual na home: *"Estudos & Artigos Teológicos em Destaque"* com cards ilustrados.
   - Posicionar blocos de anúncios responsivos do AdSense em locais estratégicos (sem poluir a leitura).
2. **Atualizar `sitemap.xml`:**
   - Adicionar todas as novas URLs com `<loc>`, `<lastmod>`, `<changefreq>` e prioridades de indexação corretas.
   - O Google passará a ter mais de 8 páginas ricas para indexar, multiplicando o tráfego orgânico.

---

## 4. Roteiro Prático no Google Search Console

Após publicarmos as mudanças:
1. Acesse o **Google Search Console**.
2. Na barra superior **Inspeção de URL**, digite: `https://www.editorapactum.com.br/`.
3. Clique em **Testar o URL ao Vivo**.
4. Clique em **Solicitar Indexação**.
5. No menu esquerdo, vá em **Sitemaps**, digite `sitemap.xml` e clique em **Enviar**.
6. Na aba **Páginas**, clique no aviso *"Página alternativa com tag canônica adequada"* e verifique quais URLs estavam listadas para confirmar que eram apenas variações secundárias.

---

## 5. Próximos Passos
Você aprova a execução deste plano para implementarmos todas as páginas institucionais, os artigos teológicos, os redirecionamentos 301 e o sitemap atualizado?
