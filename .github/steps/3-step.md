## Passo 3: Expandir a Funcionalidade da Calculadora

Duck quer expandir a calculadora com operações adicionais criando uma nova issue e trabalhando com o Copilot CLI para implementar as melhorias.

### 📖 Teoria: Desenvolvimento Iterativo com o Copilot CLI

#### Mantendo o Ritmo com o Copilot CLI

O Copilot CLI standalone ajuda a manter o ritmo de desenvolvimento:

- Gerando rapidamente código para novas funcionalidades usando os modelos de IA mais recentes
- Sugerindo boas práticas e padrões
- Ajudando a depurar e testar novas funcionalidades
- Reduzindo a troca de contexto ao mantê-lo no terminal
- Lidando com comandos shell de longa duração com mais eficiência
- Suportando automação aprimorada com o modo headless `-p`

#### Delegando Tarefas Maiores

Para tarefas mais complexas, você pode usar o comando `/delegate` exemplificado abaixo para atribuir trabalho ao agente de codificação do Copilot:

> ```bash
> copilot
> ```
>
> ```text
> /delegate Adicione funções de módulo, exponenciação e raiz quadrada ao calculator.js com tratamento adequado de erros
> ```

O agente de codificação do Copilot irá:

1. Criar uma nova branch automaticamente
2. Abrir um pull request em rascunho
3. Trabalhar na tarefa de forma autônoma
4. Transmitir a saída para o seu terminal
5. Solicitar sua revisão quando concluído

> [!NOTE]
> Usar o comando `/delegate` para aproveitar o Agente de Codificação do Copilot (CCA) consumirá requisições premium da sua assinatura do GitHub Copilot. O Copilot CLI também pode ser usado com modelos regulares, que não usam requisições premium.

#### Fluxos de Trabalho de Teste e Melhoria

À medida que você adiciona funcionalidades, o Copilot CLI pode ajudá-lo a:

- Gerar casos de teste para novas operações
- Sugerir casos extremos a considerar
- Criar documentação
- Refatorar código para melhor manutenibilidade
- Salvar e compartilhar suas sessões de desenvolvimento usando `/share`

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all --enable-all-github-mcp-tools` e autenticar-se com o GitHub novamente executando `!gh auth login` na sessão do Copilot CLI.

> [!NOTE]
> A opção `--allow-all` no Copilot CLI habilita todas as permissões de uma vez:
> é equivalente a `--allow-all-tools`, `--allow-all-paths` e `--allow-all-urls`.
> Isso permite que o CLI acesse qualquer caminho de arquivo, use qualquer ferramenta e acesse qualquer URL sem solicitar confirmação.
> Use com cautela, pois concede ao CLI acesso total e capacidades de automação.

### ⌨️ Atividade: Adicionar Mais Operações à Calculadora

1. Inicie uma sessão interativa do Copilot CLI (se ainda não estiver em uma sessão):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

1. Peça ao Copilot CLI para ajudá-lo a criar outra issue para expandir a calculadora:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie uma issue no GitHub para um aplicativo de calculadora CLI em Node.js usando o modelo feature_request.md
   > como formato markdown.
   > Quero solicitar uma funcionalidade para adicionar mais operações incluindo
   > - módulo
   > - exponenciação (potência)
   > - raiz quadrada
   > Crie a issue diretamente para o proprietário e repositório atual nesta sessão em github.com usando os comandos `gh` CLI.
   > Liste o link da issue quando concluído
   > ```

1. Trabalhe com o Copilot CLI para implementar as novas operações:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione estas funções ao meu calculator.js existente com base na issue mais recente criada:
   > 1. modulo(a, b) - retorna o resto de a dividido por b
   > 2. power(base, exponent) - retorna a base elevada ao expoente
   > 3. squareRoot(n) - retorna a raiz quadrada de n com tratamento de erros para números negativos
   > ```

   1. Opcionalmente, use o modo headless:

      > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
      >
      > ```prompt
      > copilot -p "Adicione estas funções ao meu calculator.js existente com base na issue mais recente criada:
      > 1. modulo(a, b) - retorna o resto de a dividido por b
      > 2. power(base, exponent) - retorna a base elevada ao expoente
      > 3. squareRoot(n) - retorna a raiz quadrada de n com tratamento de erros para números negativos"
      > ```

1. Teste suas novas funções e adicione testes:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione testes para as novas operações da calculadora:
   > - Expanda os testes com base no seguinte exemplo:
   >   - @images/calc-extended-operations.png
   > - Adicione novos testes para as novas operações ao arquivo src/tests/calculator.test.js existente
   > - Use um framework de testes Node.js popular se não houver um instalado
   > - Certifique-se de incluir testes de casos extremos como raiz quadrada de números negativos
   > - Certifique-se de que todos os testes sejam executados e passem
   > ```

1. Faça commit das alterações:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Adicione todos os arquivos da calculadora e de testes ao git.
   > Faça commit com a mensagem "Implemented additional calculator operations and tests: 
   > modulo, power, square root"
   > Envie as alterações
   > ```

1. Aguarde um momento para Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Use `/share gist` na sua sessão do Copilot CLI para salvar sua sessão do exercício do GitHub Skills como um GitHub gist para referência futura!

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- Certifique-se de que o título da issue inclua "Calculator" ou "Operations"
- O arquivo calculator.js deve exportar funções que possam ser importadas/requeridas
- Você pode testar operações manualmente usando o REPL do Node.js: `node` e então digitar seu código
- Para raiz quadrada de números negativos, considere retornar `NaN` ou lançar um erro
- Lembre-se de fazer commit e enviar quaisquer alterações de código que você fizer
- Use `copilot --help` para ver todas as opções de comando disponíveis

</details>
