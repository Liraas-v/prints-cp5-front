# Log de prompts

Registro dos prompts da atividade, na ordem de uso. O texto de cada bloco é o envio exato. Abaixo de cada prompt: o que voltou e o que foi corrigido.

 Técnicas aplicadas (guia de [prompting da Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)): papel na primeira linha, contexto fixo (P0) reenviado em todo prompt, tags XML (`<papel>`, `<documentos>`, `<tarefa>`, `<por_que>`, `<restricoes>`, `<verificacao>`, `<formato_da_resposta>`), motivo de cada regra, documentos lidos antes da tarefa, verificação no navegador exigida, declaração do que não foi testado, revisão feita por executor independente e escopo de escrita limitado por prompt.

| Etapa | Assunto | Saída |
|---|---|---|
| P1 | Pesquisa de regras e confiança | `02-pesquisas.md` |
| P2 | Referências visuais, com prints | `03-referencias-visuais.md`, `prints-referencias/` |
| P3 | Identidade, paleta e estrutura | `04-decisoes-de-design.md`, `05-paleta-de-cores.md`, `04-decisoes-de-design.md` |
| P4 | Construção e verificação | `index.html`, `css/`, `js/`, `03-referencias-visuais.md` |
| P5 | Revisão crítica independente | correções na página |
| P6 | Versão comercial | página, `img/`, `04-decisoes-de-design.md`, `03-referencias-visuais.md` |
| P7 | Revisão da versão comercial | correções na página |
| P8 | Carteiras de exemplo e efeitos | seção `#carteiras`, `img/`, `04-decisoes-de-design.md`, `03-referencias-visuais.md` |

P2 rodou em paralelo com P1; as demais seguem em sequência.

## Regras globais (valem para todo prompt)

- Nenhuma promessa ou sugestão de retorno futuro, nenhum selo ou credencial inventado.
- Aviso de risco no mesmo quadro de qualquer número; caso de cliente sempre fictício e rotulado.
- Só tokens de cor e fontes de `05-paleta-de-cores.md`.
- Contraste mínimo de 4,5:1, alvos de 44 px, foco visível.
- Movimento só em `prefers-reduced-motion: no-preference`.
- Sem bibliotecas nem CDN, exceto Google Fonts.
- Textos em português do Brasil.

## Riscos que as verificações testaram de propósito

1. **Texto que vira promessa:** varredura de palavras proibidas no texto visível, nos dialogs e no formulário.
2. **Contraste:** medido na página com `getComputedStyle` e a fórmula da WCAG, inclusive texto sobre fotos e legendas de gráfico.
3. **Rolagem horizontal:** `scrollWidth` conferido em 390 px (iframe) e em 1920 px.
4. **Revelação na rolagem:** todos os elementos precisam aparecer depois de rolar a página inteira.
5. **Simulador:** 1.000 / 0 / 12 meses / 12% = R$ 1.120,00 e 1.500 = R$ 1.500,00, além de campo vazio e taxa absurda.
6. **Teclado:** dialogs com Esc e foco devolvido ao botão, abas das carteiras com setas, Home e End.
7. **Formulário:** nenhuma requisição de rede.

---

## P0. Contexto fixo (enviado junto de todos os prompts)

```xml
<contexto>
Projeto: landing page de tema livre para a atividade de vibecode da disciplina de Front-End (FIAP). Vale o processo tanto quanto o resultado: pesquisas, decisões de design, referências visuais e paleta ficam registrados na pasta do projeto.

Tema: consultoria de investimentos independente de um consultor fictício, "Henrique Lira" (pessoa física, São Paulo). Serviço educativo: plano por escrito, custo à vista, risco explicado. Exercício acadêmico: a página declara que a persona é fictícia, nenhum formulário envia dados e todo número de cliente é fictício e rotulado.

Pasta do projeto (única onde você pode escrever): C:\Users\miche\OneDrive\Área de Trabalho\Estudos e Cursos\ESTUDOS-FACUL\FRONT-END\vibecode-consultoria-investimentos-v2\
Subpastas: processo/ (markdown), prints-referencias/ (prints), css/, js/, img/.
Não leia nem copie nada de ..\vibecode-consultor-investimentos\ (versão anterior descartada): este projeto é refeito do zero.

Stack: HTML, CSS e JavaScript puros, sem build, abrindo por duplo clique em index.html.
Idioma: português do Brasil, frases curtas, sem enrolação, sem emoji.
Regras de conteúdo (consultor de valores mobiliários, Resolução CVM 19/2021): nenhuma promessa ou sugestão de retorno futuro, nenhum selo ou credencial inventado, aviso de risco junto de qualquer número, caso de cliente sempre fictício e rotulado.
Registro de pesquisa: toda afirmação factual com fonte (URL) e grau de confiança; o que não foi confirmado fica marcado "verificar".
</contexto>
```

---

## P1. Pesquisa de regras e confiança

```xml
<papel>
Você é pesquisador de UX e de conformidade regulatória para sites de serviços financeiros no Brasil.
</papel>

<tarefa>
Pesquise na web, em fontes que você de fato abriu, o que uma landing page de consultor de investimentos precisa ter e evitar. Responda a quatro perguntas:
1. Quais regras da CVM (Resolução CVM 19/2021 e normas de publicidade) limitam o que um consultor pode afirmar no site? Cite artigo e fonte primária (cvm.gov.br) sempre que conseguir abrir.
2. Que elementos geram confiança em sites de consultoria financeira (custos, processo, prova, risco) e quais são clichês do setor?
3. Que práticas de acessibilidade e de movimento (prefers-reduced-motion, contraste WCAG, alvos de toque) valem para uma página com muita animação?
4. Que licenças de fotos gratuitas (Unsplash, Pexels) se aplicam e como reconhecer foto paga (Unsplash+)?
</tarefa>

<por_que>
O consultor é uma persona regulada: uma frase de promessa de retorno na página seria um erro de conteúdo, e não só de estilo. O registro precisa mostrar de onde veio cada regra para que a decisão de design seja defensável.
</por_que>

<restricoes>
- Só afirme o que viu na fonte aberta. Se a fonte não abriu ou é secundária (blog, site de legislação), diga isso na coluna de confiança.
- Em vez de "não sei", escreva "verificar" e diga onde conferir.
- Escreva apenas em processo/02-pesquisas.md. Não crie outros arquivos.
</restricoes>

<formato_da_resposta>
Arquivo processo/02-pesquisas.md com: data da pesquisa; uma seção por pergunta, cada uma com tabela "Achado | Fonte (URL) | Confiança | O que isso muda na página"; seção final "Lacunas" com o que ficou sem confirmação. Depois, na resposta de chat, no máximo 10 linhas: o que mais importa e o que ficou em aberto.
</formato_da_resposta>
```

**IA entregou:** `02-pesquisas.md`, com a Resolução CVM 19 lida no PDF oficial, regras do W3C e licenças de foto.
**Em aberto, declarado pelo agente:** artigo de publicidade não encontrado; ofícios da CVM não abertos; sinal visual de foto Unsplash+ não confirmado.
**Efeito:** a regra do art. 13 (erro de texto é infração) virou a varredura de palavras proibidas do P4; a persona não exibe registro nem selo (art. 2º).

---

## P2. Referências visuais com prints

```xml
<papel>
Você é diretor de arte analisando referências visuais para uma landing page de consultoria financeira.
</papel>

<tarefa>
Abra no navegador (ferramentas de Chrome disponíveis) pelo menos 5 sites de referência e capture um print do topo de cada um em prints-referencias/ com nome "<site>-hero-AAAA-MM-DD.jpg". Inclua obrigatoriamente: mercury.com (referência principal: hero centralizado sobre foto em tela cheia, uma única ação, conteúdo que sobe por cima do hero) e pelo menos um site brasileiro de consultoria ou assessoria de investimentos. Para cada site registre, olhando o print e não só o texto da página:
- o que se vê (layout, tipografia, cor, imagem, chamada);
- o que funciona;
- o que não serve para uma consultoria independente que não pode sugerir retorno;
- o que adotar, em uma frase.
</tarefa>

<por_que>
Descrever uma referência só pelo texto da página já gerou leitura errada de layout. O print é a evidência; sem ele, a referência vale como pista, não como análise.
</por_que>

<restricoes>
- Marque "visto" (com print próprio) ou "citado" (não aberto). Nunca descreva layout de site que você não abriu.
- Se uma página bloquear a captura, registre isso e siga para a próxima.
- Escreva apenas em processo/03-referencias-visuais.md e em prints-referencias/.
</restricoes>

<formato_da_resposta>
Arquivo processo/03-referencias-visuais.md com uma seção por site visto e uma seção final "O que as referências ensinam, juntas" com 3 a 5 princípios. Na resposta de chat, no máximo 8 linhas com o que mais pesa para o design.
</formato_da_resposta>
```

**IA entregou:** 5 sites vistos com print (Mercury, Warren, Nord, Betterment, Wealthfront) e 5 princípios. O vitreo.com.br abriu em erro e ficou como "não visto".
**Efeito:** os princípios entraram como entrada do P3.

---

## P3. Identidade, paleta e estrutura

```xml
<papel>
Você é designer de identidade visual e redator de UX para serviços financeiros, com rigor em acessibilidade.
</papel>

<documentos>
Leia antes de decidir (são a evidência do projeto):
- processo/02-pesquisas.md (regras CVM, confiança, acessibilidade, fotos)
- processo/03-referencias-visuais.md (5 sites vistos e os 5 princípios finais)
- os prints em prints-referencias/ (abra pelo menos Mercury e Wealthfront para conferir o que o texto diz)
</documentos>

<tarefa>
1. Escolha um conceito visual de uma frase e 4 palavras-guia, justificando contra duas alternativas descartadas. O conceito deve nascer dos princípios de 03-referencias-visuais.md e não do clichê do setor (azul-profundo + número de rentabilidade).
2. Defina a paleta (6 a 10 papéis: fundo, superfície, texto, acento, hover do acento, texto sobre escuro, positivo, negativo, linha, hero). Calcule o contraste de CADA par de texto com um script Python (fórmula de luminância relativa da WCAG) e mostre os valores. Texto normal exige 4,5:1; se um par falhar, ajuste a cor e registre o valor antes e depois.
3. Defina a tipografia: duas fontes do Google Fonts (título e corpo), com pesos e justificativa; escala fluida com clamp(); regra para números tabulares.
4. Proponha a estrutura da página: ordem das seções, função de cada uma, texto-guia (títulos e subtítulos reais, em português, sem promessa de retorno) e onde entram avisos de risco. Inclua: hero com uma única ação, método, custos à vista, 3 casos fictícios de clientes (um com resultado negativo), simulador sem taxa padrão, glossário curto, FAQ e rodapé com créditos e avisos.
5. Liste o que a página NÃO faz, de propósito.
6. Escreva o bloco :root com os tokens em CSS, pronto para colar em css/style.css.
</tarefa>

<por_que>
Uma paleta bonita que falha em contraste, ou um conceito que copia o setor, tornaria a decisão indefensável no registro. O script de contraste é a prova; o conceito precisa ter alternativas descartadas para mostrar que houve escolha.
</por_que>

<restricoes>
- Nenhum número de retorno em destaque e nenhuma palavra de promessa ("garantido", "sem risco", "seguro", "rentabilidade de").
- Cor nunca é o único sinal (positivo com "+", negativo com "−").
- Escreva apenas em processo/04-decisoes-de-design.md, processo/05-paleta-de-cores.md e processo/04-decisoes-de-design.md. Não crie index.html nem CSS; isso é a próxima etapa.
</restricoes>

<formato_da_resposta>
- 04-decisoes-de-design.md: o que a atividade pede, a ideia, decisões iniciais, o que a página não faz.
- 05-paleta-de-cores.md: decisão, por quê, tabela da paleta com contraste, tipografia, o que evitar e o bloco :root.
- 04-decisoes-de-design.md: conceito com alternativas descartadas, tabela de decisões (id, decisão, alternativa descartada, motivo), estrutura da página com texto-guia.
Na resposta de chat: no máximo 10 linhas com as decisões que a próxima etapa precisa saber.
</formato_da_resposta>
```

**IA entregou:** conceito "o plano é o próprio documento por escrito" (palavras-guia: papel, tinta, margem, à vista), paleta com contraste calculado por script, Source Serif 4 + Inter e estrutura da página.
**Correção feita pelo agente:** 4 cores reprovadas no contraste foram ajustadas (linha de controle #8C9490 para #737C78; negativo #D64533 para #A3281C; positivo #2E9E5B para #1D6B3F; dourado #C8A24A descartado).
**Pendência:** confirmar com o professor a política de negociação de exemplo (art. 14) e a visibilidade do aviso de persona fictícia.

---

## P4. Construção e verificação no navegador

```xml
<papel>
Você é desenvolvedor front-end sênior, especialista em HTML semântico, CSS moderno e acessibilidade, sem frameworks.
</papel>

<documentos>
Leia por inteiro antes de escrever código (são a especificação; não reinterprete a identidade):
- processo/04-decisoes-de-design.md
- processo/05-paleta-de-cores.md (use o bloco :root exatamente; não invente cores fora dos tokens)
- processo/04-decisoes-de-design.md (conceito, decisões e estrutura da página com texto-guia)
- processo/02-pesquisas.md (regras de conteúdo e acessibilidade)
- processo/03-referencias-visuais.md (princípios)
</documentos>

<tarefa>
Construa a página em index.html, css/style.css e js/main.js, na raiz do projeto:
1. HTML semântico, lang="pt-BR", uma única h1, ordem das seções como em 04-decisoes-de-design.md, link "pular para o conteúdo", menu do celular com <details> nativo.
2. CSS só com os tokens do :root; layout fluido com clamp(); grade com min-width:0 nos filhos; overflow-x contido; alvos de toque de 44 px ou mais; foco visível.
3. Os 3 casos fictícios de clientes: cada um é um botão que abre uma ficha em <dialog> (showModal) com carteira, prazo, aportes, resultado e o que o acompanhamento fez. Um caso tem resultado negativo, com "−". Confira cada percentual com um script antes de escrever e mostre a conta em comentário no registro de verificação.
4. Simulador de aporte com valor inicial, aporte mensal, prazo e taxa SEM valor padrão; validação com mensagem de erro e foco no campo; aviso de risco junto do resultado; resultado mostrado como conta ("o que você digitou resulta em"), não como previsão.
5. Movimento: revelação leve na rolagem com IntersectionObserver, só dentro de @media (prefers-reduced-motion: no-preference); sem JavaScript, tudo visível (classe "js" no html).
6. Fotos: no máximo 3, livres (Unsplash License ou Pexels License), baixadas para img/ com width e height, texto alternativo e legenda "imagem ilustrativa". Abra a página de cada foto para confirmar autor e licença; descarte Unsplash+. Se não conseguir baixar, siga sem foto. Registre cada uma em processo/03-referencias-visuais.md (arquivo, autor, URL, licença, uso, o que foi descartado e por quê). Se não houver fotos, o arquivo diz isso.
7. Rodapé: aviso de exercício acadêmico (FIAP, Front-End), persona fictícia, aviso de risco e créditos.
</tarefa>

<verificacao>
Antes de dizer que terminou, prove no navegador (ferramentas mcp__claude-in-chrome__*, abrindo file:/// ou servidor local com py -m http.server numa porta livre):
a) zero erros no console;
b) sem rolagem horizontal em 360, 390, 768 e 1280 px (meça document.documentElement.scrollWidth);
c) todos os elementos revelados aparecem após rolar a página inteira;
d) cada <dialog> abre, fecha com o botão, com Esc e clicando fora;
e) simulador: casos 1.000 + 0 aporte, 1 ano, 12% = R$ 1.120,00; 0 + 100 aporte, 12 meses, 0% = R$ 1.200,00; campo vazio e taxa absurda mostram erro;
f) varredura de palavras proibidas (garantido, garantia de, sem risco, risco zero, seguro, certeza, rentabilidade de) no texto visível;
g) tab percorre todos os focáveis na ordem do HTML.
Se algo falhar, corrija e repita. Liste no chat o que NÃO conseguiu testar (celular físico, Safari, leitor de tela).
</verificacao>

<restricoes>
- Escopo: index.html, css/, js/, img/, processo/03-referencias-visuais.md. Não altere os demais registros.
- Sem bibliotecas nem CDN, exceto Google Fonts já definidas em 05-paleta-de-cores.md.
- Nenhum gradiente roxo, nenhum emoji, nenhum ícone de banco, nenhum gráfico subindo.
- Texto da página em português do Brasil, sem promessa de retorno.
</restricoes>

<formato_da_resposta>
No chat: lista curta do que foi feito, tabela "verificação | resultado" com os 7 itens, e uma seção "Problemas encontrados e como corrigi" com cada falha real que apareceu durante o teste (antes e depois). Honestidade: se um teste não rodou, diga.
</formato_da_resposta>
```

**IA entregou:** `index.html`, `css/style.css`, `js/main.js`, `03-referencias-visuais.md`; 3 fichas de caso em `<dialog>`, simulador com validação, revelação na rolagem só com movimento permitido.
**Problemas encontrados e corrigidos:**

| # | Problema | Correção |
|---|---|---|
| 1 | Cartões dos casos invisíveis após salto de rolagem (21 de 25 revelados) | Ouvinte de rolagem que revela o que já passou: 25 de 25 |
| 2 | FAQ "Existe garantia de resultados?" tinha "garantia de", palavra proibida | Trocada por "Você promete algum resultado?" |
| 3 | Medição em aba oculta deu 0 de 25 (falso negativo) | Teste refeito com rolagem real |

**Não testado:** celular físico, Safari, leitor de tela, Esc nos dialogs, Tab real.

---

## P5. Revisão crítica independente

```xml
<papel>
Você é revisor crítico de front-end e de design, independente de quem construiu a página. Sua função é achar o que está errado, não elogiar.
</papel>

<documentos>
Leia o código e a especificação antes de abrir o navegador:
- index.html, css/style.css, js/main.js
- processo/05-paleta-de-cores.md e processo/04-decisoes-de-design.md (o que foi decidido)
- processo/02-pesquisas.md (regras de conteúdo)
- processo/03-referencias-visuais.md
</documentos>

<tarefa>
1. Abra a página no navegador e olhe a tela renderizada (capturas) em 1280 px e em 390 px (use iframe se a janela não redimensionar). Percorra a página inteira rolando de verdade.
2. Dê nota de 0 a 10 e liste problemas priorizados (alto, médio, baixo) em: hierarquia visual, ritmo entre seções, legibilidade, aparência de "template", cumprimento do conceito de 04-decisoes-de-design.md, confiança, e aderência às regras de conteúdo de 02-pesquisas.md.
3. Meça na página (getComputedStyle e a fórmula de contraste da WCAG) os contrastes reais de texto: títulos, corpo, links, botões, texto sobre o hero, rótulos pequenos, mensagens de erro. Liste qualquer par abaixo de 4,5:1.
4. Teste de teclado de verdade: Tab do início ao fim, Esc nos dialogs, foco visível em cada elemento, foco que volta ao botão que abriu o dialog.
5. Procure afirmação factual da página sem fonte ou que possa ser lida como promessa; compare com as regras de 02-pesquisas.md.
6. Decida se a ausência de fotos prejudica a confiança. Se sim, adicione de 1 a 3 fotos livres (Unsplash License ou Pexels License; nunca Unsplash+), com width, height, alt, legenda "imagem ilustrativa" e entrada em processo/03-referencias-visuais.md, conferindo autor e licença na página de cada foto. Se não, justifique por escrito.
7. Corrija os problemas de prioridade alta e média diretamente nos arquivos, com mudança mínima. Os de prioridade baixa ficam listados.
8. Depois de corrigir, repita as medições dos itens 1 a 4 e mostre antes e depois.
</tarefa>

<por_que>
O construtor testou o que ele mesmo escreveu e declarou o que não testou: contraste só pelos tokens, Tab e Esc não pressionados de verdade. Uma segunda leitura, com outro olhar, é o que costuma achar o erro que o autor não vê.
</por_que>

<restricoes>
- Só corrija o que aponta; não redesenhe a página nem troque paleta ou fontes.
- Escopo de escrita: index.html, css/, js/, img/, processo/03-referencias-visuais.md.
- Registre cada achado com evidência (medida, captura ou trecho de código). Sem evidência, não é achado.
</restricoes>

<formato_da_resposta>
No chat: nota; tabela "achado | prioridade | evidência | corrigido?"; antes e depois das medições; o que não foi possível testar. Sem elogios genéricos.
</formato_da_resposta>
```

**IA entregou:** nota 7,5 de 10.

| Achado | Prioridade | Corrigido |
|---|---|---|
| Simulador lia "1.500" como 1,50 (ponto de milhar tratado como decimal) | Alta | Sim |
| Anel de foco invisível no rodapé escuro (2,15:1) | Média | Sim (10,23:1) |
| Come-cotas "em maio e novembro" sem fonte | Média | Sim, meses removidos |
| Botões "Abrir a ficha" desalinhados | Baixa | Sim |
| Resultado positivo em verde pode parecer rentabilidade; cartões brancos repetidos; fade de revelação | Baixa | Só listado (tratado no P6) |

**Decisão sobre fotos:** nenhuma foto adicionada; foto de "consultor" ou "cliente" seria preenchimento com falsa credibilidade.
**Depois das correções:** 40 pares de texto sem falha de contraste (menor 6,47:1); sem rolagem horizontal em 390 px; Esc devolve o foco.
**Não testado:** Tab real (a ferramenta envia teclas sintéticas), leitor de tela, Safari, celular físico.

---

## P6. Versão comercial

```xml
<papel>
Você é diretor de design e desenvolvedor front-end sênior de uma agência que entrega landing pages comerciais para serviços financeiros regulados. Seu padrão de qualidade é o de uma página que um cliente pagaria para publicar.
</papel>

<documentos>
Leia antes de mexer (é o estado atual e a evidência do que falta):
- index.html, css/style.css, js/main.js
- processo/05-paleta-de-cores.md e processo/04-decisoes-de-design.md (identidade e decisões vigentes)
- processo/02-pesquisas.md (regras de conteúdo e acessibilidade, que continuam valendo)
- processo/03-referencias-visuais.md e os prints em prints-referencias/
</documentos>

<diagnostico_do_revisor>
Uma revisão independente deu nota 7,5 e apontou: aparência de template moderada (cartões brancos repetidos em Método, Riscos e Casos); hero chapado, sem imagem; resultado fictício positivo em destaque verde que pode ser lido como rentabilidade; fade de revelação deixando o conteúdo meio transparente por cerca de 0,5 s; página sem fotos. A base de contraste, avisos, alvos de toque e teclado está correta e deve ser preservada.
</diagnostico_do_revisor>

<tarefa>
Eleve a página a nível comercial, mantendo identidade (papel, tinta, acento verde-azulado, serifa + grotesca) e todas as regras de conteúdo. Entregue:
1. Hero com presença: composição forte (tipografia grande, uma única ação, aviso de risco no primeiro quadro) e uma imagem ou ilustração que sustente o conceito "o plano é o próprio documento por escrito". Sugestão: uma prévia do plano por escrito (documento A4 com margens, seções e anotações) construída em HTML/CSS ou SVG, em perspectiva leve, sobre o fundo do hero.
2. Variedade de seções: abandone a grade de cartões iguais. Use ritmo alternado: faixa de largura total, duas colunas assimétricas, linha do tempo do método, tabela de custos em destaque, citação grande de princípio, listas editoriais. Cada seção precisa ter uma forma própria.
3. Fotografia real: de 3 a 5 fotos livres (Unsplash License ou Pexels License; nunca Unsplash+), de lugar e de objetos de trabalho (cidade de São Paulo, mesa, caderno, documento), sem rosto em destaque e sem sugerir que retratam o consultor ou clientes. Baixe para img/, com width, height, alt útil e legenda "imagem ilustrativa". Confira autor e licença na página de cada foto e registre em processo/03-referencias-visuais.md (atualize a decisão anterior de não usar fotos e explique a mudança).
4. Conversão comercial honesta: barra de ação fixa discreta que aparece após o hero com a mesma ação única; seção final de contato com formulário de pré-agendamento que NÃO envia dados e diz isso, com estado de sucesso simulado rotulado "exercício"; links de âncora consistentes.
5. Microinterações com propósito, só dentro de prefers-reduced-motion: no-preference: revelação sem deixar o texto semitransparente de forma incômoda (mais curta, sem fade de opacidade em texto de corpo, apenas deslocamento sutil), cabeçalho que ganha fundo ao rolar, progresso de leitura fino, foco e hover refinados.
6. Tratar os achados do revisor: resultado do caso fictício positivo sem destaque verde grande (mesmo peso do negativo, sempre com sinal e rótulo "fictício"), e nenhum número em tamanho de destaque sem o aviso no mesmo quadro.
7. Desempenho e SEO básicos: fontes com display=swap e preconnect, imagens com loading="lazy" abaixo da primeira dobra, meta description, Open Graph e título; HTML sem dependências além das fontes.
8. Atualize processo/04-decisoes-de-design.md com uma seção "Versão comercial" (o que mudou, alternativa descartada, motivo) e a estrutura nova da página.
</tarefa>

<por_que>
A versão anterior cumpre as regras e a acessibilidade, mas parece um bom exercício, não um produto. Presença visual, variedade de forma e fluxo de conversão claro são o que separa as duas coisas. Cada mudança deve reforçar confiança sem criar promessa.
</por_que>

<restricoes>
- Preservar: persona declarada fictícia, aviso de risco junto de qualquer número, casos fictícios rotulados com um negativo, simulador sem taxa padrão, nenhuma palavra proibida (garantido, garantia de, sem risco, risco zero, seguro, certeza, rentabilidade de), nenhum selo, credencial, depoimento ou número de clientes inventado.
- Contraste mínimo 4,5:1 em todo texto, medido na página; alvos de toque de 44 px ou mais; foco visível em todos os controles.
- Sem bibliotecas nem CDN, exceto Google Fonts já definidas.
- Escopo de escrita: index.html, css/, js/, img/, processo/04-decisoes-de-design.md e processo/03-referencias-visuais.md.
- Mudança maior é permitida na estrutura das seções; os tokens de cor e as fontes de 05-paleta-de-cores.md são mantidos.
</restricoes>

<verificacao>
Antes de terminar, prove no navegador (servidor local com py -m http.server numa porta livre; encerre o servidor depois):
a) zero erros no console;
b) sem rolagem horizontal em 390 px (iframe) e 1920 px;
c) todos os elementos revelados aparecem após rolar a página inteira com rolagem real;
d) contraste medido na página (getComputedStyle + fórmula WCAG) sem nenhum par abaixo de 4,5:1, inclusive texto sobre fotos e sobre a prévia do plano;
e) simulador: 1.000 / 0 / 12 meses / 12% = R$ 1.120,00; 1.500 = R$ 1.500,00; vazio e taxa absurda dão erro;
f) varredura de palavras proibidas no texto visível, nos dialogs e no formulário;
g) formulário não envia nada (nenhuma requisição de rede) e mostra o estado rotulado;
h) dialogs abrem, fecham com botão, Esc e clique fora, e devolvem o foco;
i) capturas de tela do topo, de uma seção do meio e do rodapé em 1920 px e em 390 px, olhadas por você, com um parágrafo sobre o que ainda parece fraco.
Se algo falhar, corrija e repita. Liste o que não foi possível testar.
</verificacao>

<formato_da_resposta>
No chat: o que mudou por seção, tabela "verificação | resultado", "Problemas encontrados e como corrigi" com antes e depois, e "O que ainda parece fraco". Se um teste não rodou, diga.
</formato_da_resposta>
```

**IA entregou:** hero com prévia do plano em HTML/CSS, seções de formas diferentes, 3 fotos livres, barra de ação fixa, formulário que não envia dados, revelação só por deslocamento, SEO básico. Verificação: console limpo, sem rolagem horizontal, 213 textos sem par abaixo de 4,5:1, simulador correto, formulário sem requisição de rede.
**Problema corrigido:** legenda da foto de contato ficava cinza e ilegível por regra de maior especificidade; criada regra mais específica (#C9D3CF).
**Fraquezas declaradas:** prévia com linhas cinza no lugar de texto; fotos de mesa genéricas; em 390 px a prévia ficava abaixo do botão e a barra fixa escondia o aviso; duas faixas escuras mais rodapé escuro.

---

## P7. Revisão independente da versão comercial

```xml
<papel>
Você é diretor de arte e revisor crítico, independente de quem construiu a versão comercial. Seu critério é: "um cliente pagaria para publicar esta página?".
</papel>

<documentos>
Leia o estado atual antes de abrir o navegador:
- index.html, css/style.css, js/main.js
- processo/04-decisoes-de-design.md (seção "Versão comercial"), processo/05-paleta-de-cores.md, processo/03-referencias-visuais.md, processo/02-pesquisas.md
</documentos>

<pontos_fracos_declarados>
O construtor da versão comercial listou o que ainda parece fraco:
1. A prévia do plano no hero tem linhas cinza no lugar de texto; um documento com 2 a 3 frases legíveis passaria mais credibilidade.
2. As duas fotos de mesa são parecidas entre si e genéricas; a vista de São Paulo é panorâmica e sem personalidade. Falta imagem com identidade própria.
3. Em 390 px a prévia do plano fica abaixo do botão e do aviso; a barra fixa ocupa a largura toda e o aviso de risco some nela.
4. Há duas faixas escuras (custos e contato) mais o rodapé escuro: o ritmo vertical termina sem respiro claro.
</pontos_fracos_declarados>

<tarefa>
1. Abra a página (servidor local, porta livre; encerre ao final) e olhe capturas reais em 1920 px e 390 px, rolando a página inteira. Dê nota 0 a 10 de "nível comercial" e liste novos achados com evidência, além dos 4 acima.
2. Corrija, com mudança mínima, os pontos 1, 3 e 4:
   - Prévia do plano com texto real e curto, em português, sem promessa e sem número de retorno (por exemplo: objetivo do cliente, horizonte, o que será revisado, riscos que foram explicados, custo à vista). Rotulada como exemplo fictício.
   - Em 390 px, a ordem do hero deve priorizar título, ação e aviso, com a prévia do plano visível logo depois sem exigir rolagem longa. A barra fixa em celular deve manter o aviso de risco de forma compacta ou ser mais discreta, sem cobrir conteúdo nem controles.
   - Dê respiro claro no fim da página (ordem das faixas, espaçamento ou uma seção clara antes do rodapé) sem trocar a paleta.
3. Ponto 2 (identidade própria sem rosto e sem foto paga): crie uma ilustração em SVG inline autoral para o conceito "o plano é o próprio documento por escrito" (por exemplo, margem anotada com caneta, linha do tempo do plano, mapa de riscos), usada em uma seção no lugar de uma das fotos genéricas de mesa. Mantenha apenas as fotos que agregam; remova do repositório a foto que sair da página e atualize processo/03-referencias-visuais.md.
4. Confira de novo, medindo na página: console, rolagem horizontal, contraste de todo texto (4,5:1) inclusive texto da nova prévia e do SVG, alvos de 44 px, simulador (1.000/0/12/12 = R$ 1.120,00; 1.500 = R$ 1.500,00), formulário sem requisição de rede, dialogs com Esc, varredura de palavras proibidas.
5. Atualize processo/04-decisoes-de-design.md na seção "Versão comercial" com o que mudou nesta rodada, a alternativa descartada e o motivo.
</tarefa>

<por_que>
O construtor testou o próprio trabalho e listou o que achou fraco; uma segunda leitura com outro olhar corrige isso e procura o que ele não viu. A prévia com texto real é o que traduz o conceito da página em prova visual sem prometer resultado.
</por_que>

<restricoes>
- Preservar regras de conteúdo (persona fictícia declarada, aviso junto de qualquer número, nenhum selo, depoimento ou número de clientes inventado, nenhuma palavra proibida).
- Preservar tokens de cor e fontes de 05-paleta-de-cores.md.
- Escopo: index.html, css/, js/, img/, processo/04-decisoes-de-design.md, processo/03-referencias-visuais.md. Sem git. Não escreva em processo/01-prompts.md, processo/_prompts nem README.md.
</restricoes>

<formato_da_resposta>
No chat: nota antes e depois; tabela "achado | prioridade | evidência | corrigido?"; verificação com antes e depois; o que ainda parece fraco; o que não foi testado.
</formato_da_resposta>
```

**IA entregou:** nível comercial 7,0 antes e 8,0 depois (estimativa por capturas).

| Achado | Prioridade | Corrigido |
|---|---|---|
| Prévia do plano com linhas cinza | Alta | Sim: texto real e curto, aviso e "documento fictício" |
| Barra fixa em 390 px com aviso oculto | Alta | Sim: uma linha de 53 px com aviso e botão |
| Prévia fora do primeiro quadro em 390 px | Alta | Parcial: ordem título, ação, aviso, prévia |
| Página terminava em duas faixas escuras | Média | Sim: rodapé claro com filete |
| Duas fotos de mesa genéricas | Média | Sim: SVG autoral; foto removida |
| Prévia com `aria-hidden` e rotação 3D que borrava o texto | Média | Sim |
| Três botões "Abrir a ficha" idênticos para leitor de tela | Média | Sim: nome acessível com o título do caso |
| Foto de São Paulo panorâmica e sem personalidade | Baixa | Não |

**Depois:** 161 textos em 1920 px e 154 em 390 px sem par abaixo de 4,5:1 (menor 5,24:1).
**Não testado:** navegador real em 390 px, Tab completo, leitor de tela, Safari, Firefox, `prefers-reduced-motion`, impressão.

---

## P8. Carteiras de exemplo, imagens e efeitos

```xml
<papel>
Você é diretor de design e desenvolvedor front-end sênior, com conhecimento das regras de comunicação de consultores de valores mobiliários (Resolução CVM 19/2021).
</papel>

<documentos>
Leia antes de mexer:
- index.html, css/style.css, js/main.js (estado após a revisão de nível comercial)
- processo/02-pesquisas.md (regras de conteúdo e acessibilidade, que continuam valendo)
- processo/05-paleta-de-cores.md e processo/04-decisoes-de-design.md
- processo/03-referencias-visuais.md
</documentos>

<tarefa>
Enriqueça a página com carteiras de investimento de exemplo, mais imagens e mais efeitos, sem quebrar as regras de conteúdo:
1. Nova seção "Carteiras de exemplo" com 3 modelos didáticos e fictícios (por exemplo: reserva e proteção, equilíbrio, crescimento de longo prazo). Para cada um: nome, para quem pode fazer sentido (perfil e horizonte), composição por classe de ativo em percentuais que somam 100 (renda fixa pós-fixada, Tesouro, renda fixa prefixada ou inflação, fundos imobiliários, ações, exterior), liquidez, o que pode dar errado (risco de mercado, de crédito, de liquidez, de concentração, com um exemplo de oscilação descrita em palavras, sem número de retorno), custo estimado como regra à vista (o mesmo da seção de custos) e uma frase "para que serve". Rótulo fixo "modelo didático, não é recomendação" em cada um, aviso de risco no mesmo quadro e nota de que a carteira real depende de perfil, objetivo e horizonte.
2. Visualização: gráfico de rosca em SVG para cada carteira, com legenda por texto (cor nunca é o único sinal) e tabela acessível equivalente. Sem gráfico de linha ascendente e sem número de rentabilidade.
3. Comparador simples entre as 3 carteiras: abas ou seletor (teclado e leitor de tela) que troca composição, liquidez e riscos, sem recarregar.
4. Imagens: de 2 a 4 fotos livres adicionais (Unsplash License ou Pexels License; nunca Unsplash+), sem rosto em destaque e sem sugerir cliente ou consultor reais, mais ilustrações em SVG autorais (um ícone ou ilustração por carteira). Baixe para img/ com width, height, alt útil e legenda "imagem ilustrativa". Confira autor e licença na página de cada foto e registre em processo/03-referencias-visuais.md.
5. Efeitos com propósito, todos dentro de prefers-reduced-motion: no-preference e com botão para desativar animações: rosca que se desenha ao entrar na tela, percentuais que contam até o valor, inclinação sutil dos cartões de carteira com ponteiro (só com mouse), paralaxe leve em uma foto, transição suave ao trocar de carteira, destaque do segmento da legenda ao passar o mouse ou focar. Sem efeito que mova texto de corpo de forma incômoda.
6. Integração: item "Carteiras" no menu e na barra de ação; ligação do modelo ao simulador (botão "usar esta carteira no simulador" apenas pré-preenche o horizonte, nunca a taxa).
7. Atualize processo/04-decisoes-de-design.md com a seção "Carteiras e efeitos": decisões, alternativas descartadas e motivo.
</tarefa>

<por_que>
Mostrar composição de carteira torna o método concreto, e é o que o visitante espera de uma consultoria. O risco regulatório está em transformar o exemplo em promessa: por isso a ênfase é composição, risco e liquidez, nunca retorno.
</por_que>

<restricoes>
- Nenhum número de retorno, rentabilidade, meta de ganho, "performance" ou comparação com índice. Nenhuma palavra proibida (garantido, garantia de, sem risco, risco zero, seguro, certeza, rentabilidade de). Nenhum nome de produto, banco ou gestora reais.
- Preservar persona fictícia declarada, aviso de risco junto de número, casos fictícios, simulador sem taxa padrão e demais regras.
- Contraste mínimo 4,5:1 medido na página (inclusive texto sobre fotos e legendas do gráfico); alvos de toque de 44 px; foco visível; funciona sem JavaScript para ler a composição (tabela).
- Sem bibliotecas nem CDN além das fontes já definidas. Tokens e fontes de 05-paleta-de-cores.md mantidos.
- Escopo: index.html, css/, js/, img/, processo/04-decisoes-de-design.md, processo/03-referencias-visuais.md. Sem git. Não escreva em processo/01-prompts.md, processo/_prompts nem README.md.
</restricoes>

<verificacao>
Prove no navegador (servidor local, porta livre, encerrar ao final): console sem erros; sem rolagem horizontal em 390 px (iframe) e 1920 px; percentuais de cada carteira somam 100; contraste medido sem par abaixo de 4,5:1; comparador por teclado (setas, Enter) e foco visível; prefers-reduced-motion emulado ou botão "Desativar animações" desliga rosca, contagem, inclinação e paralaxe; simulador (1.000/0/12/12 = R$ 1.120,00; 1.500 = R$ 1.500,00); varredura de palavras proibidas e de "%" fora das composições e do simulador; capturas de 1920 px e 390 px olhadas por você. Liste o que não foi possível testar.
</verificacao>

<formato_da_resposta>
No chat: o que foi acrescentado, tabela "verificação | resultado", "Problemas encontrados e como corrigi" com antes e depois, e "O que ainda parece fraco".
</formato_da_resposta>
```

**IA entregou:** seção `#carteiras` com 3 modelos fictícios (Reserva e proteção 50/30/15/5/0/0; Equilíbrio 25/20/20/15/15/5; Crescimento de longo prazo 10/10/15/20/30/15), rosca em SVG com tabela, abas por teclado, 2 fotos novas, 3 ícones SVG, efeitos e botão "Usar esta carteira no simulador" (preenche só o prazo). Verificação: console limpo, soma 100 nas três, 153 textos sem falha de contraste (menor 6,98:1), abas por teclado, botão "Desativar animações" funcional.
**Problemas encontrados e corrigidos:**

| Problema | Correção |
|---|---|
| Contagem dos percentuais travada em 0% (`requestAnimationFrame` não roda em aba em segundo plano) | `setInterval` com valor final garantido; texto final também no HTML |
| Barra fixa passou a ter dois links e o código ajustava só o primeiro | `querySelectorAll` |
| Foto de calculadora mostrava a marca do fabricante | Foto apagada; descarte registrado em `03-referencias-visuais.md` |

**Fraco ou não testado:** `prefers-reduced-motion` real, toque real, leitor de tela, página sem JS; verde-azulado e oliva da rosca são próximas (a tabela cobre); 6 paradas de Tab por painel.
