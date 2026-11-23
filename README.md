# CertiMarch

Catálogo estático com seis portais de estudo de AWS e Databricks em português do Brasil, inglês e espanhol. A busca aceita fornecedor, nome, código e termos como `engenharia de dados`. Os filtros são combináveis e ficam na URL para compartilhar a seleção. Cada portal tem um link **Página inicial**, **Home** ou **Inicio** no cabeçalho, ao lado do controle do menu. O link também aparece no modo de leitura e funciona ao abrir um portal pelo endereço direto.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `certimarch`. Para publicar via GitHub Free, use um repositório público.
2. Extraia o ZIP e envie **o conteúdo da pasta extraída** para a raiz da branch `main`. A raiz deve conter `index.html`, `404.html`, `README.md`, `.nojekyll`, `assets/` e `portais/`. Envie os **28 arquivos** do pacote, incluindo os **18 HTML de estudo**. Todos os arquivos individuais ficam abaixo de 25 MB. O GitHub permite enviar arquivos pela opção **Add file → Upload files**. Depois do commit, confira na aba **Code** se `.nojekyll` aparece na raiz. Se o seletor de arquivos tiver ocultado esse arquivo, use **Add file → Create new file**, dê a ele o nome `.nojekyll` e faça o commit. Enviar os arquivos pelo Git também inclui o marcador quando ele foi adicionado com `git add --all`.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, escolha **main** e **/(root)** e salve.
4. Após a implantação, volte a **Settings → Pages** para ver o endereço publicado. Para um repositório comum, o formato é `https://SEU-USUARIO.github.io/certimarch/`.

Os links de portais, CSS e JavaScript são relativos, então funcionam no subdiretório do repositório. O arquivo `.nojekyll` instrui o Pages a servir os arquivos estáticos diretamente. O projeto pode ser publicado a partir de uma branch, como no guia de referência, com o conteúdo na raiz de `main`. [Guia indicado](https://vincehu.github.io/docs/github-pages/) · [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

O GitHub Pages usa o `404.html` na raiz para exibir a página de erro no idioma escolhido. Ela localiza o catálogo mesmo quando o endereço inválido está em uma subpasta. [Documentação sobre páginas 404](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

### Conferir antes de publicar

Abra `index.html` em um navegador a partir da pasta extraída. Depois de publicar, pesquise por `MLA-C02`, filtre por **Databricks** e abra um portal de cada fornecedor para conferir os links no endereço final.

## Idioma e busca

Use os botões no canto superior esquerdo para escolher **Português (BR)**, **English (EN)** ou **Español (ES)**. O catálogo, a página de erro e os links dos cartões acompanham essa escolha. Cada cartão abre o portal no idioma selecionado e inclui `?lang=` no endereço. O link de retorno leva ao catálogo no mesmo idioma.

O catálogo dá prioridade a um `lang` válido na URL, depois à preferência do site guardada em `localStorage` sob `certimarch.lang` (a chave antiga `trilhacert.lang` é migrada automaticamente) e ao idioma configurado no navegador. Idiomas de navegador fora dos três suportados usam português do Brasil. Uma URL com `lang` fixa o idioma daquela visita. Uma escolha no seletor grava a preferência, que também vale em abas abertas sem `lang` na URL.

Você pode compartilhar uma busca como `./index.html?lang=es&vendor=databricks&q=ingenieria+de+datos`. A busca reconhece nomes, códigos e termos correspondentes nas três línguas e ignora diferenças de acentuação e hífens.

## Portais incluídos

| Fornecedor | Certificação | Versão | Arquivo |
| --- | --- | --- | --- |
| AWS | Cloud Practitioner (CLF-C02) | 1.1 | [aws-clf-c02.html](portais/aws-clf-c02.html) |
| AWS | AI Practitioner (AIF-C01) | 2.5.1 | [aws-aif-c01.html](portais/aws-aif-c01.html) |
| AWS | Data Engineer Associate (DEA-C01) | 2.4.1 | [aws-dea-c01.html](portais/aws-dea-c01.html) |
| AWS | Machine Learning Engineer Associate (MLA-C02) | 3.8 | [aws-mla-c02.html](portais/aws-mla-c02.html) |
| Databricks | Data Engineer Associate | 1.3.1 | [databricks-data-engineer-associate.html](portais/databricks-data-engineer-associate.html) |
| Databricks | Data Engineer Professional | 1.1.2 | [databricks-data-engineer-professional.html](portais/databricks-data-engineer-professional.html) |

No MLA-C02, as 325 questões correspondem a 240 questões no banco principal e 85 no simulado complementar. Os demais totais incluem as questões de prática e simulados de cada portal.

## Atualizar o catálogo

Ao substituir um HTML em `portais/`, mantenha o nome curto para preservar o endereço público e reaplique o link de retorno com `href="../index.html"`, `data-trilha-home` no link e `data-home-label` no texto do botão. Carregue `../assets/site-i18n.js` com `defer` para que o link siga o idioma do catálogo. Preserve também o carregamento de `../assets/site-theme.js`. Atualize a versão e o total de questões no cartão correspondente em `index.html` e a versão nesta tabela. Para adicionar uma certificação AWS ou Databricks, inclua um cartão com o atributo `data-vendor` e um link relativo ao novo arquivo. O JavaScript calcula as contagens dos filtros a partir dos cartões.

A preferência de tema é compartilhada entre o catálogo e os portais abertos no mesmo site. O progresso fica no armazenamento do navegador, separado por certificação e idioma. As versões em inglês e espanhol usam os sufixos `.en` e `.es`. O português mantém as chaves originais. Cada idioma inicia com seu próprio progresso, a menos que você importe um backup compatível. Se já estudou usando um HTML local, use a exportação e a importação de backup quando o portal oferecer esses recursos.

### Estrutura por idioma

| Idioma | Caminho | Retorno ao catálogo |
| --- | --- | --- |
| Português do Brasil | `portais/<arquivo>.html` | `../index.html?lang=pt-BR` |
| Inglês | `portais/en/<arquivo>.html` | `../../index.html?lang=en` |
| Espanhol | `portais/es/<arquivo>.html` | `../../index.html?lang=es` |

Os seis arquivos da tabela de certificações existem nos três caminhos, com o mesmo nome. Os portais em `en/` e `es/` carregam os scripts compartilhados de `../../assets/`.

### Adicionar uma tradução

1. Coloque o HTML traduzido em `portais/en/` ou `portais/es/`, mantendo a versão em português no endereço atual.
2. No link do cartão correspondente em `index.html`, adicione `data-href-en="./portais/en/nome.html"` ou `data-href-es="./portais/es/nome.html"`. O catálogo usa esse endereço no idioma correspondente e retira o aviso de conteúdo em português no cartão.
3. No HTML traduzido, ajuste `<html lang="en">` ou `<html lang="es">` e faça o link de retorno apontar para `../../index.html`. Se você usar idioma e tema compartilhados, carregue os scripts equivalentes em `../../assets/`. Use o sufixo `.en` ou `.es` nas chaves de progresso da versão traduzida. Preserve as chaves sem sufixo da versão original.

As traduções do catálogo ficam em `assets/catalog-i18n.js`. O idioma compartilhado e os rótulos de retorno ficam em `assets/site-i18n.js`. Os textos da página de erro ficam em `404.html`.
