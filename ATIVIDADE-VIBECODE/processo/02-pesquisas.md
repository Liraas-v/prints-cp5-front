# Pesquisa

Data: 2026-10-14.

Confiança: **alta** = fonte primária aberta e lida; **média** = fonte oficial, só resumo ou parte lida; **baixa** = secundária ou inferência; **verificar** = não confirmado.

Fonte das regras da CVM: PDF consolidado da Resolução CVM 19 (https://conteudo.cvm.gov.br/export/sites/cvm/legislacao/resolucoes/anexos/001/resol019consolid.pdf), texto extraído do arquivo baixado.

## 1. Regras da CVM

| Achado (Res. CVM 19) | Confiança | O que muda na página |
|---|---|---|
| Art. 12: informação "verdadeira, completa, consistente" e em "linguagem simples, clara, objetiva e concisa" | Alta | Textos curtos; toda frase defensável como verdadeira |
| Art. 12 §1º: não pode "assegurar ou sugerir" garantia de resultado ou isenção de risco | Alta | Fora: "seguro", "sem risco", "retorno", "ganhe"; vale para sugestão, não só promessa |
| Art. 18 III: vedado "garantir níveis de rentabilidade" | Alta | Nenhum número de rentabilidade como meta ou "histórico de clientes" |
| Art. 18 IV: vedado omitir conflito de interesses e riscos | Alta | Seções visíveis de risco e de conflito de interesses |
| Art. 18 V e art. 16 VII: remuneração que prejudique independência; benefício obtido como consultor é do cliente | Alta | Única remuneração vem do cliente; sem parceria paga nem afiliado |
| Art. 16 III a e IX: contrato por escrito com remuneração detalhada; riscos informados | Alta | Preço e escopo antes do contato; plano por escrito |
| Art. 16, parágrafo único: taxa de performance só para investidor profissional | Alta | Cobrança por valor fixo |
| Art. 2º e 3º: consultoria é privativa de autorizado (curso superior, certificação, reputação) | Alta | Persona sem autorização: aviso explícito, sem registro nem selo |
| Art. 12 §2º e art. 18 §2º: distribuidor não pode induzir a achar que há consultoria; produto relacionado exige segregação | Alta | Declarar que não distribui nem vende produto |
| Art. 14: pessoa natural entrega ou publica a política de negociação | Alta | Seção "Política de negociação" de exemplo, rotulada fictícia |
| Art. 13: CVM pode exigir cessação e retificação de informação que induza a erro | Alta | Erro de texto é infração, não só falha de estilo |
| Art. 17: sistema automatizado continua sob responsabilidade do consultor | Alta | Simulador sem resultado que sugira promessa |
| Ofício CVM/SIN 2/2026 (interpretações da Res. 19) e Ofício 6/19 (analistas), vistos só em busca/notícia | Baixa | Verificar em https://www.gov.br/cvm; Ofício 6/19 serve só de analogia |

## 2. Confiança e clichês do setor

Fonte: https://www.nngroup.com/articles/trustworthy-design/ (resumo lido; artigo geral, não só finanças). Confiança: média.

| Achado | O que muda na página |
|---|---|
| Transparência no início: custo base, taxas, contato, políticas; site que esconde o preço é descartado | Preço visível na primeira seção de serviço; sem "fale com um especialista" |
| Mostrar o processo real e quem o executa gera confiança | Método em passos; persona descrita sem currículo inventado |
| Foto genérica é ignorada; avaliação externa pesa mais que depoimento no próprio site | Sem foto de terno e aperto de mão; casos só fictícios e rotulados |
| Erros de digitação, links quebrados e rótulos "criativos" reduzem confiança | Menu com nomes literais; revisão de texto e links |
| Clichês (cofre, gráfico subindo, seta verde, "liberdade financeira") | Sem fonte aberta; observação própria (verificar) |

## 3. Acessibilidade e movimento

Fontes: MDN (`prefers-reduced-motion`) e W3C WCAG 2.2 Understanding. Confiança: alta.

| Achado | O que muda na página |
|---|---|
| `prefers-reduced-motion: reduce`: zoom, paralaxe e deslocamentos grandes são gatilhos vestibulares; trocar por fade | Animação dentro de `no-preference`; conteúdo completo sem JS |
| WCAG 2.3.3 (AAA): movimento por interação deve poder ser desativado | Botão para desativar animações |
| WCAG 2.2.2 (A): movimento automático acima de 5 s exige pausa | Sem carrossel nem fundo animado em loop |
| WCAG 1.4.3 (AA): 4,5:1 texto normal, 3:1 texto grande; sem arredondar | Conferir cada par de cor (ver `05-paleta-de-cores.md`) |
| WCAG 2.5.8 (AA): alvos de 24 x 24 px; 2.5.5 (AAA): 44 x 44 px | 44 px nos botões e no menu como meta |
| Conteúdo que pisca 3 vezes por segundo ou mais cai no critério 2.3 | Nada pisca |

## 4. Licenças de fotos

| Achado | Fonte | Confiança | O que muda na página |
|---|---|---|---|
| Unsplash: uso comercial e não comercial sem permissão, pode modificar; atribuição não obrigatória | https://unsplash.com/license | Alta | Pode usar; creditar no registro e no rodapé |
| Unsplash+: exige assinatura; temas sensíveis pedem aviso "posed by model" | https://unsplash.com/plus/license | Média | Não usar sem assinatura; foto de origem duvidosa é descartada |
| Sinal visual de Unsplash+ não encontrado em fonte oficial | https://unsplash.com/plus | Verificar | Conferir a página de cada foto; em dúvida, trocar |
| Pexels: uso livre; proibido sugerir que pessoas ou marcas retratadas endossam o produto | https://www.pexels.com/license/ | Alta | Pessoa em foto não pode parecer cliente |
| Licenças padrão não garantem autorização de imagem de terceiros | Inferência | Baixa | Preferir fotos sem rosto (objetos, paisagem, mesa) |

## Lacunas

- Artigo de publicidade específico para consultor na Res. 19: não encontrado; verificar em gov.br/cvm (normas, "publicidade") e o Ofício CVM/SIN 2/2026.
- Como rotular a persona frente ao art. 2º: o aviso fixo sem número de registro é decisão de design, não achado; confirmar com o professor.
- Política de negociação fictícia (art. 14): confirmar com o professor se vale incluir.
- Clichês visuais do setor e confiança em serviços financeiros: sem fonte específica.
- Termos do Unsplash+ (https://unsplash.com/plus/terms) não abertos.
