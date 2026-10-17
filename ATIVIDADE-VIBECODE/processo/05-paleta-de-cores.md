# Paleta e tipografia

Data: 2026-10-14.

## Decisão

Paleta de papel e tinta: fundo de papel quente, texto em tinta quase preta, um único acento verde-azulado escuro e um bloco de grafite esverdeado para o hero. Positivo é verde e negativo é vermelho, sempre com "+" e "−".

## Por quê

- O conceito é "o plano é um documento" (ver `04-decisoes-de-design.md`): a paleta nasce de papel, tinta e margem, não do azul-profundo com dourado do setor.
- Um acento só, em botão e link: a ação do hero é a única coisa colorida do quadro (03-referencias-visuais.md, princípio 1).
- Verde e vermelho só em números fictícios de caso, com sinal e rótulo (03-referencias-visuais.md, princípio 3).
- Hero escuro com aviso legal à vista, como o Mercury, mas em cor chapada, sem foto.

## Paleta e contraste

Calculado com a fórmula de luminância relativa da WCAG 2.2 (script Python). Mínimo: 4,5:1 texto normal; 3:1 texto grande e borda de controle (1.4.11).

| Papel | Token | Hex | Par testado | Contraste |
|---|---|---|---|---|
| Fundo | `--papel` | #F6F2EA | com `--tinta` | 14,91:1 |
| Superfície | `--superficie` | #FFFFFF | com `--tinta` | 16,65:1 |
| Superfície alternada | `--superficie-2` | #ECE6DA | com `--tinta` | 13,40:1 |
| Texto | `--tinta` | #1B1F1E | sobre papel | 14,91:1 |
| Texto secundário | `--tinta-suave` | #4A524F | papel / branco / superfície 2 | 7,20 / 8,04 / 6,47 |
| Acento (botão, link) | `--acento` | #0B5C5A | papel / branco | 6,98 / 7,80 |
| Hover do acento | `--acento-hover` | #084140 | com branco | 11,41:1 |
| Hero | `--hero` | #14201E | com `--sobre-escuro` | 14,98:1 |
| Texto sobre escuro | `--sobre-escuro` | #F6F2EA | sobre hero | 14,98:1 |
| Texto suave sobre escuro | `--sobre-escuro-suave` | #C9D3CF | sobre hero | cerca de 10:1 |
| Acento sobre escuro | `--acento-escuro` | #8ED8CC | sobre hero | 10,23:1 |
| Positivo | `--positivo` | #1D6B3F | branco / papel | 6,51 / 5,83 |
| Negativo | `--negativo` | #A3281C | branco / papel | 7,30 / 6,54 |
| Linha de controle | `--linha` | #737C78 | papel / branco | 3,85 / 4,30 (3:1, não é texto) |
| Linha decorativa | `--linha-clara` | #D8D1C3 | papel | 1,36:1 (só divisor) |

Todos os pares de texto passam. A lista completa de tokens está em `css/style.css`.

### Ajustes (antes e depois)

| Item | Antes | Depois | Motivo |
|---|---|---|---|
| Linha de controle | #8C9490 (2,78:1) | #737C78 (3,85:1) | borda de controle exige 3:1 |
| Acento | #2E8B8A (3,63:1) | #0B5C5A (6,98:1) | link e botão são texto |
| Positivo | #2E9E5B (3,41:1) | #1D6B3F (6,51:1) | número é texto |
| Negativo | #D64533 (4,41:1) | #A3281C (7,30:1) | falhava por 0,09; valor não se arredonda |
| Dourado | #C8A24A (2,16:1) | descartado | falha e é o clichê do setor |

## Tipografia

| Uso | Fonte (Google Fonts) | Pesos | Por quê |
|---|---|---|---|
| Títulos | Source Serif 4 | 500, 600 (itálico 500 no destaque) | Serifa com ar de documento; Betterment passa calma com serifa, Wealthfront contrasta serifa itálica com grotesca, sem o número gigante |
| Corpo, interface, números | Inter | 400, 500, 600 | Legível em corpo pequeno, algarismos tabulares, boa cobertura do português |

Carregadas com `display=swap` e `preconnect`; fallback `Georgia, serif` e `system-ui, sans-serif`.

Escala fluida em `rem` (respeita zoom): `--t-xs` 0,875rem; `--t-base` clamp(1rem, 0.96rem + 0.2vw, 1.125rem); `--t-lg`, `--t-h3`, `--t-h2` e `--t-h1` (até 4rem) também com `clamp()`. Altura de linha 1,6 no corpo e 1,15 em título; medida 65ch.

Números usam `font-variant-numeric: tabular-nums lining-nums` (classe `.num`) e nunca são maiores que o título da seção. Número de caso vem com sinal ("+" ou "−", U+2212), rótulo "caso fictício" e aviso de risco no mesmo quadro. Nenhum texto abaixo de 14 px.

## O que evitar

Azul-profundo com dourado; verde-seta e vermelho-seta de cotação; texto sobre foto sem véu sólido; gradiente, brilho e glassmorphism; cor como único sinal; nota legal pequena ou de baixo contraste (erro do Wealthfront); número de rentabilidade em destaque.
