# Decisões de design

Cada decisão tem o porquê e a alternativa descartada. Evidências: `02-pesquisas.md`, `03-referencias-visuais.md` e os prints em `prints-referencias/`. Datas: 2026-10-14 (direção e versão comercial) e 2026-10-15 (carteiras).

## Direção
- **Conceito:** a página é o próprio plano por escrito: papel, tinta e margem, com o que é combinado visível antes de qualquer contato. Palavras-guia: papel, tinta, margem, à vista.
- **Descartado: "painel de controle"** (fundo escuro, gráficos, número grande, estilo Wealthfront). Número grande vira promessa e puxa para o curto prazo.
- **Descartado: "cenário de liberdade"** (paisagem em tela cheia, estilo Mercury). A metáfora sugere resultado e traz risco de licença e de rosto identificável.
- **Tema:** consultoria independente de um consultor fictício, Henrique Lira. Serviço educativo, com argumento em método e transparência, não em rentabilidade.
- **Stack:** HTML, CSS e JS puros, sem build.

## O que veio das referências
- **Uma ação por tela** (Mercury, Warren, Betterment): o hero tem um botão dominante.
- **Aviso legal no primeiro quadro, com tamanho legível** (Mercury). O contraexemplo é a nota minúscula do Wealthfront.
- **Contraste de escala** (Wealthfront): título grande com uma palavra em serifa itálica ("por escrito"), nunca um número.
- **Serifa em título sobre cor única** (Betterment) e a nota discreta "imagem ilustrativa" junto da imagem.
- **Independência por transparência**, não por comparação (Warren): o preço vem à vista, sem citar concorrentes nem selos.

## Decisões iniciais
- **Aviso de exercício e de risco no primeiro quadro**, em 14 px e contraste 4,5:1 ou mais. Em vez de nota no rodapé: Res. CVM 19, art. 12 e 18 IV.
- **Acento único verde-azulado `#0B5C5A`.** Em vez de azul-profundo com dourado: é o clichê do setor e o dourado falha em contraste (2,16:1).
- **Source Serif 4 nos títulos e Inter no corpo.** Em vez de grotesca em tudo e número gigante: dá o contraste de escala do Wealthfront sem o número.
- **Preço fixo e à vista antes do contato.** Em vez de "fale com um especialista": NN/g e art. 16 III a.
- **3 casos fictícios, um negativo, com selo "caso fictício" e aviso no mesmo quadro.** Em vez de depoimentos e número de clientes: evita prova social inventada (art. 18 III).
- **Simulador sem taxa padrão**, com resultado como conta rotulada "não é projeção". Em vez de taxa pré-preenchida: art. 12 §1 e art. 17, e a taxa padrão sugere expectativa.
- **Positivo com "+" e negativo com "−"**, além da cor (WCAG 1.4.1).
- **Movimento só com `prefers-reduced-motion: no-preference`** e conteúdo completo sem JS. Em vez de parallax e animação de rolagem: WCAG 2.3.3 e 2.2.2.
- **Alvos de 44 x 44 px** em botões e menu, como meta do projeto (WCAG 2.5.5). O mínimo de 24 px seria só o nível AA.
- **Seção "Política de negociação" de exemplo, rotulada fictícia** (art. 14, parágrafo único). Pendente: confirmar com o professor.
- **Hero escuro chapado, uma única ação, sem foto de pessoa.** Em vez de foto em tela cheia: evita licença, rosto e metáfora de resultado.

## Versão comercial
Motivo: a revisão independente deu nota 7,5 (aparência de template, hero chapado, resultado verde em destaque, fade de revelação, sem fotos). Na segunda rodada o nível comercial foi de 7,0 para 8,0 (capturas em 1920 e 390 px). Identidade e regras de conteúdo mantidas.

- **Hero com prévia do plano:** documento A4 em HTML/CSS, perspectiva leve, anotação na margem, rotulado "imagem ilustrativa". Em vez de foto ou gráfico de carteira: o gráfico sugeriria resultado.
- **Texto real na prévia** (objetivo, horizonte, riscos explicados, custo à vista, "Investir envolve risco de perda", "documento fictício"). Em vez de linhas cinza, que liam como esqueleto. O preço de R$ 1.200 não entra no documento, para não duplicar o número da seção de custos.
- **Prévia legível:** sem `role="img"` nem `aria-hidden`, com inclinação 3D reduzida de -12° para -6° (0,8° no celular), porque a inclinação forte borrava o corpo de 14 px.
- **Ação única "Pré-agendar uma conversa"** no hero, na barra fixa e no cabeçalho, todas para `#contato`.
- **Seções com forma própria** (citação com foto, linha do tempo, faixa escura com tabela, lista editorial, linhas de casos, duas colunas). Em vez da grade de cartões brancos, traço de template apontado pelo revisor. O glossário também saiu de cartões e virou lista com filetes.
- **Fotos livres do Unsplash, sem pessoas**, com legenda fora da foto (créditos em `03-referencias-visuais.md`). Revoga só a ausência de fotos: a regra "sem rosto" continua.
- **Casos com o mesmo peso:** resultado no mesmo tamanho, sempre com sinal, "fictício" e aviso na linha. Em vez do número verde grande no positivo, que podia ser lido como rentabilidade. O preço também só aparece dentro de quadro com aviso e "fictício".
- **Revelação só por deslocamento de 10 px em 0,35 s, sem opacidade.** Em vez de fade de 0,5 s: texto semitransparente atrapalhava a leitura. Cabeçalho que vira papel ao rolar e progresso de leitura de 4 px, tudo em `no-preference`.
- **Formulário de pré-agendamento que não envia nada**, com sucesso rotulado "Exercício". Não há servidor e o exercício declara isso.
- **Barra fixa só depois do hero** e escondida na seção de contato, para não ter dois botões iguais no mesmo quadro. No celular vira uma linha de 53 px, com o aviso de risco à esquerda e o botão à direita.
- **Em 390 px,** hero com menos respiro e título de 36 px, mantendo a ordem título, ação, aviso, prévia. Em vez de colocar a prévia antes do botão: ação e aviso precisam estar no primeiro quadro.
- **Rodapé em papel claro, com filete acima.** Em vez de reordenar contato antes de custos (quebraria "custo antes de contato") ou criar seção extra (conteúdo sem função).
- **Ilustração SVG autoral da margem anotada** na seção Método, e foto `caderno-aberto.jpg` removida. As duas fotos de mesa eram quase iguais e genéricas; a margem mostra a ideia sem rosto e sem foto paga.
- **Botões dos casos com nome acessível próprio** ("Abrir a ficha do caso: Aposentadoria"). Em vez de três botões idênticos para leitor de tela.
- **Em aberto:** a foto de São Paulo continua panorâmica; só sai se houver foto própria ou ilustração equivalente.

## Carteiras e efeitos
Seção `#carteiras`, entre Casos e Simulador, com 3 modelos didáticos e fictícios.

- **Composição, liquidez e risco, sem número de ganho**, nem em palavras ("oscila por anos", não "cai X"). Em vez de retorno histórico ou projetado: art. 12 §1 e 17, o exemplo vira promessa.
- **3 modelos que somam 100** (50/30/15/5/0/0, 25/20/20/15/15/5, 10/10/15/20/30/15), rótulo "Modelo didático, não é recomendação" e aviso no mesmo quadro. Em vez de carteira "ideal" por perfil e de nomes de produto real: recomendação exige análise do perfil e nome de produto é publicidade.
- **Rosca em SVG feita à mão** (círculos com `pathLength=100`). Em vez de Chart.js ou D3 por CDN: sem biblioteca, e funciona sem JS.
- **A tabela de composição é a legenda:** swatch, classe e percentual em texto, e a rosca tem `role="img"` com `desc`. Em vez de legenda separada mais tabela escondida: duas listas iguais seriam ruído, e a cor nunca é o único sinal.
- **Seis cores com 5,3:1 ou mais** sobre branco e papel, com fresta de 0,6 entre os segmentos. Em vez de paleta pastel: gráfico precisa de 3:1 (WCAG 1.4.11).
- **Comparador por abas** (`role="tab"`) com setas, Home e End; sem JS, os 3 painéis aparecem empilhados. Em vez de `select` ou três colunas, que ficam ilegíveis em 390 px.
- **"Usar esta carteira no simulador" preenche só o prazo** (12, 60 ou 120 meses). Em vez de preencher também valor e taxa: taxa pré-preenchida sugere expectativa.
- **Efeitos com propósito:** rosca que se desenha, contagem até o valor, inclinação de 3° só com mouse, paralaxe de 24 px em uma foto, troca de painel com deslocamento de 8 px e destaque do segmento ao passar o mouse ou focar. Em vez de paralaxe em várias fotos, tilt em toque e fade de texto.
- **Botão "Desativar animações"** (classe `sem-anim`), além da media query, que zera também a revelação. Quem não mudou o sistema precisa de saída (WCAG 2.2.2).
- **Contagem com `setInterval` e valor final no HTML.** Em vez de `requestAnimationFrame`, que parava em 0% em aba em segundo plano.
- **Duas fotos novas** (planta em pote; calculadora e caneta) e um ícone SVG por carteira. Descartadas: calculadora com marca visível, gráfico e cédulas.
- **"Carteiras" no menu e na barra fixa.** A ação única segue sendo o agendamento.
- **Fora de propósito:** gráfico de linha, comparação com índice, "carteira recomendada", filtro por perfil e qualquer estimativa de retorno.

## Decisões tomadas durante os testes
- **"garantia de resultados" saiu do FAQ:** a pergunta "Existe garantia de resultados?" tinha uma palavra da lista proibida. Virou "Você promete algum resultado?".
- **Simulador passou a aceitar ponto de milhar:** "1.500" era lido como 1,50. Agora 1.500 vale R$ 1.500,00, e 0.5 e 1.5 continuam decimais.
- **Anel de foco claro no rodapé escuro** (10,23:1), porque o anterior tinha 2,15:1.
- **Come-cotas sem meses:** "em maio e novembro" não tinha fonte na pesquisa.
- **Legenda de foto sobre fundo escuro em `#C9D3CF`,** com regra mais específica, porque outra regra a deixava cinza e ilegível. Erro de formulário no escuro usa `#FFB4A8`.
- **Foto de calculadora com marca legível foi apagada,** para o exercício não citar produto real.

## Estrutura final da página
Menu: Método, Custos, Riscos, Casos, Carteiras, Simulador, Perguntas.

| # | Seção | Forma e conteúdo |
|---|---|---|
| 0 | Faixa de exercício, cabeçalho fixo, progresso de leitura | "Exercício acadêmico. Henrique Lira é uma persona fictícia, sem registro na CVM. Nenhum dado é enviado e todo número é fictício." |
| 1 | Hero | Título "Seu plano de investimentos, *por escrito*.", ação "Pré-agendar uma conversa", aviso "Investir envolve risco de perda. Nenhum resultado é certo.", prévia do plano em perspectiva |
| 2 | Princípio | Foto de São Paulo e citação grande sobre bloco verde-azulado |
| 3 | Método | Linha do tempo de 3 passos e ilustração SVG da margem anotada |
| 4 | Custos | Faixa escura de largura total, tabela em caixa clara (valores fictícios), aviso no mesmo quadro |
| 5 | Riscos e conflito de interesses | Lista editorial numerada em duas colunas e bloco de conflito |
| 6 | Casos fictícios | Três linhas de mesmo peso, um negativo, ficha em `<dialog>` |
| 7 | Carteiras de exemplo | 3 modelos com rosca, tabela, abas e botão para o simulador |
| 8 | Simulador | Campos vazios, sem taxa padrão, resultado como conta, aviso junto |
| 9 | Glossário e perguntas | Duas colunas |
| 10 | Contato | Formulário simulado, sucesso rotulado "Exercício", foto de caneta |
| 11 | Rodapé e barra fixa | Rodapé claro com política de negociação fictícia e créditos; barra de ação fixa |

Regra dos avisos: número só aparece com o aviso de risco no mesmo quadro (hero, método, custos, cada caso, cada carteira, simulador e rodapé).

## A ideia e o público

Consultoria de investimentos independente de um consultor fictício, **Henrique Lira** (pessoa física, São Paulo). O serviço é educativo: **plano por escrito, custo à vista, risco explicado**. Essas três frases são o argumento da página; nenhum número de retorno é argumento.

A página declara que é exercício acadêmico: a persona é fictícia, não tem registro nem credencial, nenhum formulário envia dados e todo número de cliente é fictício e rotulado. O conceito visual é "o plano é o próprio documento por escrito": papel, tinta e margem.

Pessoas que querem entender o que estão contratando antes de falar com alguém. O tom é calmo e direto, em português, com frases curtas e sem jargão sem explicação.

## O que a página não faz, de propósito

- Prometer ou sugerir retorno; usar "garantido", "sem risco", "seguro", "rentabilidade de".
- Destacar número de rentabilidade ou mostrar "histórico de clientes".
- Exibir selo, registro, credencial, prêmio, número de clientes ou avaliação inventados.
- Comparar com concorrentes ou com "o mercado"; usar urgência, escassez ou medo de ficar de fora.
- Capturar e-mail no hero; enviar dados em qualquer formulário.
- Vender produto financeiro, usar link de afiliado, parceria paga com corretora ou taxa de performance.
- Usar foto de gente de terno, gráfico subindo, cofre ou seta verde; carrossel, vídeo em loop, parallax ou animação automática com mais de 5 s; cotações ao vivo.

## Critérios de pronto

- Nenhum erro no console.
- Funciona no desktop e no celular (390 px), sem rolagem lateral.
- Todo texto com contraste de 4,5:1 ou mais, alvos de toque de 44 px e foco visível.
- Com "reduzir movimento" ligado, nada anima; sem JavaScript, o conteúdo aparece completo.
- Nenhuma palavra proibida no texto visível.
- Os registros estão completos e batem com o que foi feito.

## Fora do escopo

- Login, cadastro, pagamento ou qualquer funcionalidade real.
- Formulários que enviam dados.
- Número de registro, selo ou credencial de consultor.
