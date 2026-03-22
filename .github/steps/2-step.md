## Passo 2: Trabalhar na Issue da Calculadora com o Copilot CLI

Com a issue criada, Duck trabalha com o Copilot CLI standalone de forma interativa para começar a construir o aplicativo de calculadora.

### 📖 Teoria: Desenvolvimento Colaborativo com o Copilot CLI

#### Desenvolvimento Interativo com o Copilot CLI

O Copilot CLI standalone (comando `copilot`) oferece uma experiência interativa rica para desenvolvimento:

- Inicie uma sessão simplesmente executando `copilot` no terminal
- Tenha conversas naturais sobre seu código e receba sugestões inteligentes
- Gere código boilerplate com base nos seus requisitos
- Use os modelos de IA mais recentes para respostas de ponta
- `/share [file|gist] [caminho]` - Compartilhe a sessão em arquivo markdown ou GitHub gist

#### Agentes Personalizados

O Copilot CLI suporta agentes personalizados que você pode definir no seu repositório:

- Crie perfis de agentes no diretório `.github/agents/`
- Codifique prompts especializados, seleções de ferramentas e fluxos de trabalho
- Invoque agentes usando o comando `/agent <nome>`
- Ótimo para documentação, infraestrutura, segurança ou tarefas específicas de domínio

#### Delegando Tarefas

Quando você tiver tarefas maiores, pode delegá-las ao agente de codificação do Copilot:

- Use `/delegate DESCRIÇÃO-DA-TAREFA` para atribuir trabalho
- O Copilot cria uma nova branch e um pull request em rascunho
- O agente de codificação trabalha de forma autônoma em segundo plano
- Revise as alterações quando concluído

> [!NOTE]
> Referências:
>
> - [Usando o GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Agentes personalizados no Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [Sobre agentes personalizados](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all --enable-all-github-mcp-tools` e autenticar-se com o GitHub novamente executando `!gh auth login` no Copilot CLI.

### ⌨️ Atividade: Criar uma Nova Branch para o Aplicativo de Calculadora

1. Inicie uma nova sessão interativa do Copilot CLI (feche a sessão anterior com `/exit`):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> A opção `--allow-all` no Copilot CLI habilita todas as permissões de uma vez:
> é equivalente a `--allow-all-tools`, `--allow-all-paths` e `--allow-all-urls`.
> Isso permite que o CLI acesse qualquer caminho de arquivo, use qualquer ferramenta e acesse qualquer URL sem solicitar confirmação.
> Use com cautela, pois concede ao CLI acesso total e capacidades de automação.

2. Crie e envie uma nova branch chamada `create-calc-app`:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie e envie uma nova branch chamada 'create-calc-app'
   > ```

<details>
<summary>Tendo problemas? 🤷</summary><br/>

Use o comando `!` no Copilot CLI para executar comandos shell diretamente da sua sessão de chat. Por exemplo, para criar e enviar a branch sem sair do chat:

 ```prompt
 !git checkout -b create-calc-app && git push -u origin create-calc-app
 ```

 Verifique a branch atual depois:

 ```prompt
 !git branch --show-current
 ```
</details>

### ⌨️ Atividade: Gerar Código da Calculadora com o Copilot CLI Baseado em uma Imagem

1. Peça ao Copilot CLI para ajudá-lo a criar as funções da calculadora com base na imagem e na issue do GitHub criada anteriormente:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > @images/js-calculator.png ajude-me a criar um aplicativo de calculadora CLI em Node.js
   > baseado apenas nas quatro operações matemáticas básicas nesta imagem e descritas
   > na issue mais recente neste proprietário/repositório.
   > Crie o código e coloque-o no diretório 'src'.
   > Certifique-se de que a calculadora esteja comentada com as operações que suporta.
   > ```

   1. Opcionalmente, use o modo headless com um prompt:

      > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
      >
      > ```bash
      > copilot -p "@images/js-calculator.png ajude-me a criar um aplicativo de calculadora CLI em Node.js
      > baseado apenas nas quatro operações matemáticas básicas nesta imagem e descritas
      > na issue mais recente neste proprietário/repositório.
      > Crie o código e coloque-o no diretório 'src'.
      > Certifique-se de que a calculadora esteja comentada com as operações que suporta."
      > ```

> [!NOTE]
> Embora este exemplo use uma imagem de uma calculadora JavaScript web, ele demonstra como você pode usar arquivos (incluindo imagens) com o Copilot CLI para fornecer contexto às suas solicitações.

2. Execute e teste as funções da calculadora pedindo ao Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Execute e teste as funções da calculadora com algumas operações de exemplo
   > mostradas na imagem @images/calc-basic-operations.png.
   > ```

3. Peça ao Copilot CLI para criar testes abrangentes para as funções da calculadora:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie testes unitários abrangentes para todas as funções da calculadora:
   > - Expanda os testes com base no seguinte exemplo:
   >   - @images/calc-basic-operations.png
   > - Adicione esses testes a um arquivo src/tests/calculator.test.js
   > - Use um framework de testes Node.js popular se não houver um instalado
   > - adição, subtração, multiplicação e divisão
   > - teste casos extremos como divisão por zero
   > - Certifique-se de que todos os testes sejam executados e passem
   > ```

> [!NOTE]
> Pressione ctrl+o para ver a saída dos testes aprovados que o Copilot CLI executou para você!
  
4. Uma vez satisfeito com o código, faça commit das alterações pelo Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione todos os arquivos da calculadora e de testes ao git.
   > Faça commit com a mensagem "Implement basic calculator operations and tests: 
   > addition, subtraction, multiplication, division"
   > Envie as alterações
   > ```

5. Aguarde um momento para Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Você pode colar ou arrastar e soltar imagens no Copilot CLI para fornecer contexto visual às suas perguntas!

> [!NOTE]
> Enviar suas alterações acionará o workflow para verificar seu trabalho e preparar o próximo passo!

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- Certifique-se de estar no diretório do repositório ao executar os comandos
- O comando `copilot` requer Node.js 22+ instalado
- Se a autenticação falhar, execute `copilot` e siga os prompts de login
- Você também pode editar o arquivo calculator.js manualmente com base nas sugestões do Copilot
- Lembre-se de exportar suas funções usando `module.exports`

</details>
