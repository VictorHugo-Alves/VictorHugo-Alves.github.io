# victorhugo-alves.github.io

Capa do portfólio, servida na raiz por GitHub Pages.

O nome do repositório precisa ser exatamente `VictorHugo-Alves.github.io`. É essa
regra que faz o site atender em `https://victorhugo-alves.github.io/`, sem nome de
repositório na URL. Só pode existir um repo assim por conta.

Cada caso mora no repositório dele e tem o próprio Pages. Esta página só linka:

| Caso | Repositório |
| --- | --- |
| Central de controle de lançamento | [painel-captacao-case](https://github.com/VictorHugo-Alves/painel-captacao-case) |

## Para acrescentar um caso

1. Copiar `casos/painel-captacao.html` para `casos/novo-projeto.html` e reescrever.
2. Duplicar o bloco `<a class="cartao">` dentro de `.grade` no `index.html`, apontando
   para a página nova. A grade se ajusta sozinha: não há nada a mexer no CSS.
3. Colocar o preview em `img/` (a captura da tela do próprio projeto serve). O cartão
   recorta em 16:9 alinhado pelo topo, então vale enquadrar pensando nisso.
4. `git push`. O Pages republica em cerca de um minuto.

## Estrutura

Dois níveis, para a capa não crescer junto com o número de casos:

- `index.html` : capa curta. Cada caso ocupa um bloco com o essencial e leva para a página dele.
- `casos/*.html` : a história inteira de cada caso. É aqui que o texto longo mora.
- `styles.css` : um arquivo, sem framework, cobrindo a capa e as páginas de caso.
- `img/` : avatar e previews dos casos.

O avatar (`img/victor.jpg`) sai de uma foto de 7360x4912, endireitada pela
orientação EXIF e recortada em quadrado com o rosto ocupando ~74% da altura, que é
o que faz a cara continuar legível quando o círculo tem 64px. Vai para a web com
512x512 e ~30 KB.

As tags Open Graph no `<head>` montam o cartão de pré-visualização que aparece ao
colar o link no LinkedIn, no WhatsApp ou no Slack. O `og:image` precisa de URL
absoluta, então ao trocar a imagem principal é preciso trocar essa tag também.
