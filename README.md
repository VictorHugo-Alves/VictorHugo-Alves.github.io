# victorhugo-alves.github.io

Capa do portfólio, servida na raiz por GitHub Pages.

O nome do repositório precisa ser exatamente `VictorHugo-Alves.github.io`. É essa
regra que faz o site atender em `https://victorhugo-alves.github.io/`, sem nome de
repositório na URL. Só pode existir um repo assim por conta.

Cada caso mora no repositório dele e tem o próprio Pages. Esta página só linka:

| Caso | Repositório |
| --- | --- |
| Painel de captação de lançamento | [painel-captacao-case](https://github.com/VictorHugo-Alves/painel-captacao-case) |

## Para acrescentar um caso

1. Duplicar o bloco `<article class="caso">` no `index.html`.
2. Trocar texto, ficha e links.
3. Colocar o preview em `img/` (a captura da tela do próprio projeto serve).
4. `git push`. O Pages republica em cerca de um minuto.

## Estrutura

- `index.html` — a página inteira
- `styles.css` — um arquivo, sem framework
- `img/` — previews dos casos

As tags Open Graph no `<head>` montam o cartão de pré-visualização que aparece ao
colar o link no LinkedIn, no WhatsApp ou no Slack. O `og:image` precisa de URL
absoluta, então ao trocar a imagem principal é preciso trocar essa tag também.
