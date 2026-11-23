# Alterações

## Revisão de qualidade (novembro de 2026)

### Site e catálogo
- Descrição e metadados Open Graph em todas as páginas; marcas AWS e DB em texto.
- Card do MLA-C02 identificado como prova beta.
- Tema e idioma salvos em `certimarch.theme` e `certimarch.lang`, com migração das chaves antigas.
- Ajustes de navegação em telas pequenas (`assets/portal-polish.css` e `assets/portal-polish.js`).
- Botão ativo das fichas com cor de reserva quando o tema não define `--accent`.

### Bancos de questões em português
- **MLA-C02:** 207 questões geradas por modelo foram reescritas à mão, com cenário, alternativas plausíveis e justificativa por alternativa.
- **Simulado beta do MLA-C02:** mantido em inglês, idioma em que a AWS oferece a prova beta, com aviso em português. Distratores revisados.
- **DEA-C01, AIF-C01, CLF-C02, Databricks Associate e Professional:** cerca de 700 distratores reescritos para remover palavras absolutas ("apenas", "sempre", "todos"…) que entregavam a resposta, incluindo os simulados A e B do DEA-C01 (72 alternativas) e do AIF-C01 (48). Nenhuma questão em português mantém esse tipo de pista.
- **AIF-C01:** removidos 87 sufixos de enchimento que só alongavam as alternativas.
- A alternativa correta é a mais longa em 18% a 38% das questões de resposta única, conforme o portal (com 4 alternativas, o acaso daria 25%).

### Conteúdo
- Databricks Associate 2.1, 2.2 e 2.7: conectores managed do Lakeflow Connect, `read_files` e formato `binaryFile`, com exemplos e links para a documentação.

### MLA-C02 em inglês e espanhol
- As 240 questões foram traduzidas à mão a partir do português corrigido, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas.
- Filtros de dificuldade e dimensão cognitiva voltaram a funcionar: a tradução automática tinha trocado os valores usados pelos filtros.
- Painel de simulados, cartão da questão, feedback e relatório por dimensão refeitos a partir da versão em português, corrigindo textos quebrados e tags HTML perdidas.
- Simulado beta em inglês também no portal em espanhol, com aviso em espanhol, porque a AWS oferece a prova beta só em inglês.
- Correções de conteúdo em português que valem para os três idiomas: Q215 (a exportação nativa do DynamoDB gera DynamoDB JSON ou Amazon Ion, não Parquet), Q223, Q126 e Q145.

### DEA-C01 em inglês e espanhol
- As 486 questões (banco de prática e simulados A e B) foram traduzidas à mão a partir do português corrigido, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas.
- Questões de múltipla escolha indicam "Select TWO" ou "Selecciona DOS", como na prova.
- Gabaritos e número de alternativas conferidos contra o português: nenhuma divergência.
- Português: corrigidos "armazenha" e "digest horárias".

### AIF-C01 em inglês e espanhol
- As 370 questões (banco de prática, simulados A e B e questões de ordenação) foram traduzidas à mão a partir do português corrigido, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas.
- Questões de múltipla escolha indicam "Choose/Select TWO" ou "Elige/Selecciona DOS"; os escopos da Generative AI Security Scoping Matrix aparecem como "Scope N" e "alcance N".
- Gabaritos e número de alternativas conferidos contra o português: nenhuma divergência.

### CLF-C02 em inglês e espanhol
- As 214 questões (banco de prática e simulados A e B) foram traduzidas à mão a partir do português corrigido, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas.
- Nomes de serviços, planos e opções de compra seguem a nomenclatura oficial da AWS em cada idioma (On-Demand/bajo demanda, Spot/de spot, AWS Management Console).
- Gabaritos e número de alternativas conferidos contra o português: nenhuma divergência.

### Databricks Data Engineer Associate em inglês e espanhol
- As 246 questões (156 do banco de prática e 90 dos simulados) foram traduzidas à mão a partir do português, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas. Antes, 60% das questões em inglês e 50% em espanhol entregavam a resposta por esse tipo de palavra.
- Das 90 questões dos simulados, 66 são cópias idênticas de questões do banco de prática e receberam a mesma tradução; as 24 que têm alternativas próprias foram traduzidas separadamente.
- Nomes de produto, comando e API ficam no original (Unity Catalog, Auto Loader, Lakeflow Jobs, `COPY INTO`, `run_as`). Condições Run if aparecem pelo valor da API (`ALL_SUCCESS`, `AT_LEAST_ONE_FAILED`).
- Gabaritos e número de alternativas conferidos contra o português: nenhuma divergência.

### Databricks Data Engineer Professional em português, inglês e espanhol
- Português: 60 questões do banco (as de id `B-*`) tinham enunciado e alternativas em inglês, com justificativas em português. Enunciado e alternativas foram traduzidos para o português, sem palavras absolutas nas alternativas erradas; gabarito e justificativas não mudaram.
- As 210 questões foram traduzidas à mão para inglês e espanhol a partir do português, com justificativa por alternativa e sem palavras absolutas nas alternativas erradas. Antes, 59% das questões em inglês e 47% em espanhol entregavam a resposta por esse tipo de palavra, e as 60 questões `B-*` em espanhol eram tradução automática do inglês, com erros como "Figura de la equidad DataFrame".
- Gabaritos e número de alternativas conferidos contra o português: nenhuma divergência.

### Interface em inglês e espanhol (DBA, DBP, CLF, AIF e DEA)
- Os textos de interface dos cinco portais (menus, botões, simulado, prática, progresso, busca, glossário da interface e mensagens) foram retraduzidos à mão a partir do português: 1.286 textos por idioma. Saíram restos em português, como "Importar backup e ver progresso", "0 respondidas" e "Sair and continue after", e traduções erradas, como "0 replies", "Pendant", "Clear theme", "23 Mapa de la ciudad", "I'm taking ABAC." e "Me llevaré a ABAC.".
- A tradução automática anterior tinha alterado código dentro das páginas EN e ES: classes CSS (`pbtn sm` virou "PBVS S"), seletores (`[data-match]` virou "[Data de la encuesta]"), atributos (`aria-current`), rotas (`#teoria/` virou `#theory/`), `'use strict'` e chaves de armazenamento do progresso (`DBDEA-2026-08-v1`). Esses trechos foram restaurados. Isso corrige, por exemplo, os botões sem estilo do simulado em espanhol. O conjunto de literais usados em comparações e chaves agora é idêntico nos três idiomas.
- Termos técnicos e comandos traduzidos por engano voltaram ao original (`MSCK REPAIR TABLE`, `DESCRIBE HISTORY`, BERTScore, Intelligent-Tiering, Schema-on-read).

### Conteúdo do Databricks Data Engineer Associate em inglês e espanhol
- Teoria, cheatsheets, mapas mentais, fluxogramas, árvores de decisão, casos, laboratórios e glossário foram retraduzidos à mão a partir do português: 1.747 trechos por idioma, substituindo a tradução automática.
- Os comentários dos exemplos de código foram traduzidos e o código corrompido pela tradução automática foi restaurado. No espanhol, por exemplo, `CREATE OR REFRESH STREAMING TABLE`, `value=True`, `SET MANAGED`, `OPTIMIZE` e `DESCRIBE EXTENDED` tinham virado texto em espanhol, e o cabeçalho `# Databricks notebook source` do laboratório tinha sido traduzido, o que impediria a importação do notebook. No inglês, "Stages" tinha virado "Internships" e `DESCRIBE EXTENDED` tinha virado "DESCRIPTION EXTENDED".
- O exemplo da habilidade 2.7 (catalogar PDFs de um volume) estava incompleto em inglês e espanhol e foi completado.
- Correções no português: o título do cheatsheet dizia "AWS DE Associate"; a descrição dos mapas mentais citava a certificação AWS Certified Machine Learning Engineer Associate; o mapa de decisão mandava comparar "os caminhos AWS". Os três agora se referem ao Databricks.

### Conteúdo do CLF-C02 em inglês e espanhol
- Teoria, cheatsheets, mapas mentais, fluxogramas, árvores de decisão, casos e fontes foram retraduzidos à mão a partir do português: 2.334 trechos por idioma, substituindo a tradução automática.
- O arquivo de questões da versão anterior do banco (usado ao rever tentativas antigas) também foi retraduzido. O banco atual, já revisado, não foi alterado.
- Correção no português: um caso de rightsizing dizia que CPU e memória ficavam "abaixo do necessário" para a família atual, o que invertia o sentido. Agora diz que o uso fica bem abaixo da capacidade da família atual, mesmo no pico.

### Conteúdo do Databricks Data Engineer Professional em inglês e espanhol
- Teoria, cheatsheets, mapas mentais, fluxogramas, árvores de decisão, casos, laboratórios e fontes foram retraduzidos à mão a partir do português: 3.196 trechos por idioma, substituindo a tradução automática. O arquivo de questões da versão anterior do banco também foi retraduzido; o banco atual, já revisado, não foi alterado.
- Os comentários e mensagens dos exemplos de código foram traduzidos sem alterar o código. No espanhol, o cabeçalho `# Databricks notebook source` do laboratório de bundle tinha virado "# Fuente de datos de notebook", o que impediria a importação do notebook; foi restaurado.
- Correções no português: "teste reconstrução depois corrigir a regra" passou a "teste a reconstrução depois de corrigir a regra"; "compare status da primeira falha com o run interface" passou a "com o da interface do run"; "a primeira evidência temporária coerente com o erro" passou a "a evidência mais antiga coerente com o erro"; "A equipe precisa uma execução" passou a "precisa de uma execução"; "escritura e privilégios" passou a "escrita e privilégios".

### Conteúdo do AIF-C01 em inglês e espanhol
- Cheatsheets completos, fontes, mapas mentais, fluxogramas, interface da teoria, índice de busca das árvores e as fichas de habilidade dos domínios 1 a 5 (inclusive as tabelas de serviços de voz, documentos, visão, recomendação, Quick/Kiro/Transform, Strands/AgentCore, custo e capacidade, armazenamento vetorial e ações de agentes) retraduzidos à mão a partir do português: os 5.152 trechos por idioma: fichas de habilidade, matriz de escopo, árvores mestras, casos de arquitetura, pegadinhas, flashcards, laboratórios, os exercícios do banco antigo (usado ao rever tentativas antigas) e os 97 textos de padrão ("Atende ao requisito.", "O cenário exige esta condição?" etc.).
- Nas alternativas erradas dos exercícios das fichas, as palavras que entregavam a resposta ("apenas", "só", "sempre", "qualquer") foram reescritas em EN/ES sem esse tipo de pista ("and nothing else", "by itself", "y nada más", "por sí mismo").
- Correção no português: um item da tabela de explicação proporcional ao público começava com espaço e letra minúscula (" equilibra o trade-off..."); agora começa com "Equilibra".
- Correção no português: a descrição dos mapas mentais citava a certificação AWS Certified Machine Learning Engineer Associate; agora cita AWS Certified AI Practitioner.

### Conteúdo do DEA-C01 em inglês e espanhol
- Exportação do conteúdo: 9.209 trechos (E0001..E9209), 346 deles de padrão. Nenhum trecho é exclusivo do banco de questões atual.
- Os 9.209 trechos foram retraduzidos à mão a partir do português nos dois idiomas: cheatsheets dos quatro domínios, página de blueprint e formato da prova, resumos por domínio, mapas mentais, fluxogramas interativos, árvores mestras, biblioteca de habilidades com os casos resolvidos, laboratórios, flashcards e questões de fixação da biblioteca. Os índices de busca agregados (E4230..E4296) foram compostos a partir dos trechos já traduzidos, e os 346 textos de padrão ("Atende ao requisito. X" etc.) reaproveitam a tradução de X.
- Nas alternativas erradas dos casos resolvidos e das questões de fixação, nenhuma palavra absoluta entrega a resposta (EN sem only/all/every/never…, ES sem solo/todos los/ningún…).
- "CPF" no texto corrido virou "tax ID" / "número de identificación fiscal"; nomes de coluna em código (`cpf`) ficaram como estão. Datas no formato dd/mm/aaaa viraram "May 31, 2026" no EN e continuam dd/mm/aaaa no ES; horas como "14h" viraram "2 p.m." no EN e "14:00" no ES.

### Correção no português (DEA-C01)
- E3037, descrição do mapa mental: citava "AWS Certified Machine Learning Engineer Associate DEA-C01"; agora "AWS Certified Data Engineer Associate DEA-C01".
- E8111, explicação sobre `VisibilityTimeout`: "18 minutes" (em inglês dentro do português) virou "18 minutos".

### Interface do MLA-C02 em inglês e espanhol
- Página principal (painel, simulados, arquiteturas, playbook, matriz IAM/VPC/KMS, quotas, glossário, auditoria de links, prontidão, mensagens e avisos) retraduzida à mão a partir do português: 1.462 trechos por idioma.
- As 16 arquiteturas comentadas, a tabela "Se a questão disser X, procure Y" e a matriz de diagnóstico em 10 camadas agora seguem o português ponto a ponto; a tradução automática anterior tinha erros como "Piedra de piedra" (Bedrock) e "Verdad de la tierra" (Ground Truth).
- Glossário: no espanhol, a coluna de tradução passou a ser em espanhol (inglês ↔ espanhol); no inglês, virou uma coluna de conceito em linguagem simples.
- Inglês: o aviso do simulado beta tinha perdido parágrafos e o botão "Start timed exam" mostrava as instruções; restaurado.
- Inglês: o selo de cadência da auditoria de links voltou a diferenciar trimestral e semestral; o rótulo da dimensão "Troubleshooting" voltou a aparecer.
- Espanhol: uma regra de CSS (`hover: none`) e um estilo (`background:`) tinham sido traduzidos pela tradução automática; restaurados.

### Fluxogramas e guia dos 18 algoritmos do MLA-C02 em inglês e espanhol
- Fluxogramas interativos (621 trechos) e guia dos 18 algoritmos integrados do SageMaker AI (944 trechos: fichas, hiperparâmetros, pegadinhas, árvore mestra de decisão e filtros) retraduzidos à mão a partir do português.
- Nomes de parâmetros, formatos (`recordIO-protobuf`, `Float32`, `__label__`) e valores de código ficaram iguais ao original. Datas no inglês por extenso ("November 25, 2025"); no espanhol, dd/mm/aaaa.

### Correção no português (guia dos algoritmos do MLA-C02)
- Uma substituição automática antiga tinha traduzido nomes de hiperparâmetros e duplicado trechos. Restaurados: `normalize_label`, `max_seq_len_target`, `target`, `__label__`, `multi_label`, `num_topics`, `dimension_reduction_type / dimension_reduction_target` e "Define `classifier` ou `regressor`."; removidas as repetições de "(variáveis de entrada (features))" e de "local".
- Concordância: "o cópia" → "a cópia"; "(análise de desempenho)" → "(benchmark)", termo usado no resto do portal.
- Um trecho sobre Image Classification estava em inglês dentro do português; agora está em português.

### Mapas mentais e cheatsheets do MLA-C02 em inglês e espanhol
- Mapas mentais interativos (1.153 trechos: visão geral dos quatro domínios e mapas por Task) e os 20 cheatsheets (1.700 trechos: tabelas de decisão, microcenários, pegadinhas, matriz de formatos dos algoritmos, métricas do Clarify, deployment guardrails, fontes oficiais) retraduzidos à mão a partir do português.
- Parâmetros e literais de API (`ALL_AT_ONCE`, `EnableNetworkIsolation=True`, `InferenceId`, `application/x-recordio-protobuf` etc.) mantidos iguais; nomes oficiais dos domínios em inglês também no espanhol.

### Correção no português (mapas mentais e cheatsheets do MLA-C02)
- Três trechos estavam em inglês dentro do português (explicação de SHAP/feature importance, metadata filter, "supervisioned fine-tuning"); agora estão em português.
- "governar/prometer versões" → "governar/promover versões"; "conforme execução role" → "conforme execution role".

### Teoria do Domínio 1 do MLA-C02 em inglês e espanhol
- Guia interativo do Domain 1 (1.508 trechos: mapa do domínio, cheatsheet de formatos/storage/vetores, serviços de processamento e streaming, árvores de decisão, as 25 fichas de skill com parâmetros, pegadinhas e microcenários) retraduzido à mão a partir do português.
- Exemplos de palavras em português usados como amostra (negações, stemming, n-gramas, nomes para deduplicação) trocados por equivalentes no idioma de cada versão; nomes de colunas e código ficaram iguais.

### Correção no português (Domínio 1 do MLA-C02)
- "OpenSearch ofrece" → "OpenSearch oferece"; "Deduplicate pela identidade do evento" → "Desduplique pela identidade do evento".

### Teoria do Domínio 2 do MLA-C02 em inglês e espanhol
- Guia interativo do Domain 2 completo (1.622 trechos por idioma) retraduzido à mão a partir do português: mapa do domínio, cheatsheet de customização de FMs e AI Services, matriz das 27 skills, engenharia de treinamento, referência dos 18 algoritmos integrados, árvores de decisão e as 27 fichas de skill (FMs, customização, RAG, custos, AI Services, algoritmos integrados, Script Mode, HPO, treino distribuído, regularização, ensembles, otimização, prompts, busca vetorial, MLflow, Model Monitor, Shadow/A-B, Clarify, Debugger, métricas, avaliação humana, NLP, LLM-as-a-Judge e métricas de RAG).
- Exemplos em português usados como amostra (frases de BLEU/ROUGE, negação em métricas léxicas, nomes de variáveis) trocados por equivalentes no idioma de cada versão; textos em português dentro de fórmulas (passos por época, batch efetivo) traduzidos.
- Inglês: o parágrafo "Escala" das estratégias de HPO saía embaralhado ("Use Use for…") e foi refeito; espanhol: o mesmo parágrafo tinha sobra da tradução automática ("donde dice").
- Inglês: o rótulo da dimensão "Troubleshooting" tinha voltado a sumir do relatório de questões; corrigido de novo e protegido no script de aplicação.

### Correção no português (Domínio 2 do MLA-C02)
- M8533: "cuadraticamente" (grafia espanhola) virou "quadraticamente".

### Teoria do Domínio 3 do MLA-C02 em inglês e espanhol (primeira parte)
- Guia interativo do Domain 3: 440 trechos por idioma retraduzidos à mão a partir do português, cobrindo as fichas de CI/CD e MLOps (CodePipeline/CodeBuild, SageMaker Pipelines, testes automatizados, retreinamento por drift, Model Registry e Lineage, Prompt Management, versões e aliases de Bedrock Agents, testes de regressão de prompts e RAG, deploy de FMs ajustados e atualização de Knowledge Bases), o resumo das 30 skills e o início das árvores de decisão.
- Nomes de variáveis e arquivos em português usados como exemplo dentro de código (`{{variavel}}`, `cliente`, `documento.pdf`) foram adaptados no inglês.

### Teoria do Domínio 3 do MLA-C02 em inglês e espanhol (segunda parte)
- Mais 760 trechos por idioma retraduzidos à mão a partir do português: o resto das árvores de decisão e da cobertura das 30 skills, o mapa mental do Domain 3, o cheatsheet de inferência e consolidação (Real-Time, Serverless, Async, Batch Transform, MME, MCE, Inference Pipeline, Inference Components e opções de FMs no Bedrock e no JumpStart), a matriz filtrável, o guia técnico de infraestrutura (contrato BYOC, VPC e PrivateLink, Auto Scaling, checklist de diagnóstico e Deployment Guardrails), o resumo comparativo de MLOps e as fichas das skills 3.1.1 a 3.1.8 até a de RAG (hosting, consolidação, modalidades de inferência, FMs, BYOM, Bedrock Agents, containers LMI e busca híbrida com rerank).
- Exemplos em português dentro de código (`modelo_cliente_X.tar.gz`, `departamento='RH'`, `contrato.pdf`, a fórmula de VRAM) foram adaptados ao idioma.

### Teoria do Domínio 3 do MLA-C02 em inglês e espanhol (conclusão)
- Os 446 trechos restantes por idioma, retraduzidos à mão a partir do português: fichas de RAG (rerank, decomposição de consultas, filtros implícitos), otimização de custo (Spot, Savings Plans, Inference Recommender), IaC multi-conta (Service Catalog, CloudFormation, EventBridge), contrato BYOC, endpoints em VPC, deploy com Boto3, métricas de auto scaling, Knowledge Bases e bancos vetoriais, chunking e parsing, estado de agentes, escala de GPU com Inference Components, colaboração multiagente, Deployment Guardrails e CI/CD. O Domain 3 está completo nos dois idiomas.
- Marcadores dentro de código que vinham em português (`<imagem>`, `<nome>`, `<canal>`, `<nome_do_arquivo_original>`) agora aparecem no idioma da página.
- No espanhol, dois nomes de VPC endpoint deturpados pela tradução automática antiga (`Com.amazonaws.<región>.sagemaker.urntime` e um `bedrock-runtime` truncado) foram restaurados.

### Teoria do Domínio 4 do MLA-C02 em inglês e espanhol (primeira parte)
- 420 trechos por idioma retraduzidos à mão a partir do português: mapa mental do Domain 4, cheatsheet de monitoramento (os 4 monitores do Model Monitor, métricas de endpoints e de observabilidade GenAI), matriz filtrável, guia de otimização e segurança (famílias de instância, FinOps, defesa em profundidade), início das árvores de decisão e as primeiras fichas (observabilidade, telemetria de endpoints e Data Quality Monitor).

### Palavras soltas e trechos sem tradução manual no MLA-C02 (EN e ES)
- Palavras e rótulos curtos entre tags (por exemplo "cliente", "precisa", "Pegadinha:", "Parquet:", "DOMÍNIO") e alguns trechos com aparência de código ficavam fora da tradução manual e mantinham a tradução automática antiga, às vezes absurda ("Here's a little something.", "Prosecutor's office:", "DOMESTIC", "- ¿Qué?"; no espanhol, nomes como XGBoost, k-NN e X-Amzn-Trace-Id viravam frases inteiras sem relação com o assunto). Cerca de 220 desses segmentos foram corrigidos à mão, inclusive rótulos de campo, aliases de busca, três diagramas ASCII e linhas de cheatsheet.
- No espanhol, a tradução automática tinha quebrado código: os seletores `#compatTable tbody` e `#decisionCoverage tbody` viraram "cuerpo" (as tabelas de compatibilidade e de cobertura das árvores ficavam vazias), um atributo `value=` virou `valor=` e `EnableNetworkIsolation=True` virou `=Verdad`. Restaurados.

### Teoria do Domínio 4 do MLA-C02 em inglês e espanhol (segunda parte)
- Mais 370 trechos por idioma retraduzidos à mão a partir do português: fichas de Data Quality Monitor (final), validação em produção com ProductionVariants e Shadow Testing, observabilidade de agentes, métricas operacionais de FMs, dimensionamento de instâncias e aceleradores, Container Insights e X-Ray, dashboards com percentis e Metric Math, Auto Scaling e Multi-AZ, FinOps (Budgets, Cost Explorer, Cost Anomaly Detection, Application Inference Profiles), modelos de compra (Spot, Savings Plans, Capacity Blocks) e economia de inferência no Bedrock.

### Teoria do Domínio 4 do MLA-C02 em inglês e espanhol (conclusão)
- Os últimos 689 trechos por idioma retraduzidos à mão a partir do português: custos de Provisioned Throughput e Batch Inference, controle de loops e subagentes, Prompt Caching, roteamento e destilação, custos de vetores e embeddings, DevSecOps de containers, IAM Condition Keys e KMS, Execution Roles e PassRole, CloudTrail/Config/Macie/Artifact, resolução de falhas de IAM, KMS, VPC e ECR, rede privada e isolamento, segurança adversarial, credenciais (STS, Identity Center, Bedrock API Keys), Bedrock Guardrails, o resumo das 25 skills e as árvores de decisão do domínio. Com isso, a teoria dos quatro domínios do MLA-C02 está toda retraduzida nos dois idiomas.
- Exemplos com termos brasileiros foram adaptados ao leitor de cada idioma: CPF virou "tax ID"/"número de identificación fiscal", valores em reais aparecem como BRL e nomes de variáveis em português dentro de fórmulas de exemplo foram traduzidos.

### Segmentos curtos do Domínio 4 do MLA-C02 (EN e ES)
- Revisados os 303 segmentos curtos sem identificador do Domain 4. Na ficha do Feature Attribution Drift Monitor, o alinhamento antigo tinha deslocado o texto: o rótulo "Configuração:" mostrava a frase sobre SHAP, a frase "Usa o processador do SageMaker Clarify" aparecia duplicada e sem o nome do serviço, e o espanhol trazia "base de referencia de SHOP". Corrigido nos dois idiomas.
- No espanhol, "NO!" virou "¡NO!" e um "donde dice" sem sentido, na lista de VPC Endpoints, voltou a ser "para".

### Índice de busca do MLA-C02 em inglês e espanhol
- O índice da busca global (182 entradas: as 107 skills, 20 cheatsheets, 19 mapas mentais, 20 fluxogramas e 16 arquiteturas) estava com a tradução automática antiga ou em português. Os títulos e os resumos dos fluxogramas foram traduzidos à mão; os demais resumos e as palavras-chave foram compostos a partir das traduções revisadas do conteúdo, de modo que a busca encontra termos em inglês e em espanhol.
- O selo do tipo de resultado (Skill teórica, Cheatsheet, Mapa mental, Fluxograma, Arquitetura) aparecia em português nas versões EN e ES; agora aparece no idioma da página.

### Glossário bilíngue dos portais (PT, EN e ES)
- O "glossário da interface do Databricks Associate com termos da AWS" não aparecia para o leitor: as páginas de DBA, DEA e AIF compartilhavam um único objeto com as listas dos três portais (e DBP e CLF, outro com duas), e cada página mostrava só a sua. As listas que não são usadas pela página foram removidas nas três versões dos cinco portais; cada glossário agora traz apenas os próprios termos (Databricks no DBA e no DBP, AWS no DEA, no AIF e no CLF). Conferido abrindo a aba do glossário nas 15 páginas.

### Revisão final (EN e ES)
- Varredura de restos de português nas 12 páginas em inglês e espanhol e navegação automática pelas rotas de cada portal, sem erros de JavaScript. Só sobraram falsos positivos: nomes de rota internos (`teoria`, `progresso`, `simulado`), comentários de código, "São Paulo" no nome da região e palavras que também existem em espanhol.
- DEA-C01: a tabela "Schema inferido × definido; partição × índice" tinha o cabeçalho "Quando/efeito" em português no inglês e no espanhol, e a célula "Crawler/inferido" no inglês. Traduzidos.
- MLA-C02: uma frase das palavras-chave do índice de busca (atributos de sessão dos agentes) continuava em português; traduzida.

### Índice de busca do MLA-C02: textos antigos
- O índice de busca em português ainda guardava versões antigas de alguns trechos, com os erros já corrigidos no conteúdo ("supervisioned", "execução role", "Deduplicate pela", "governar/prometer", "cuadraticamente"). Corrigidos no índice em português; com isso, e com algumas frases antigas mapeadas à mão, as palavras-chave do índice em inglês e espanhol ficaram praticamente sem restos de português.
- As palavras-chave do índice em inglês e espanhol passaram a ficar todas em minúsculas, como a consulta digitada (antes, termos com maiúsculas no meio do texto não eram encontrados).

### Correção no português (Domínio 2 do MLA-C02)
- "Regras Integrados" → "Regras Integradas"; "analisados pelas containers" → "analisados pelos containers" (SageMaker Debugger).

### Pendente
- Nenhum item pendente conhecido. Os seis portais estão revisados em português e retraduzidos à mão em inglês e espanhol.
