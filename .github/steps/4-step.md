## Passo 4: Criar, Revisar e Mesclar seu Pull Request

Duck está pronto para finalizar o trabalho de desenvolvimento criando um pull request, vinculando-o às duas issues, obtendo uma revisão do Copilot e mesclando as alterações—tudo pela linha de comando com o Copilot CLI.

### 📖 Teoria: Pull Requests e Revisão de Código com o Copilot CLI

#### Entendendo Pull Requests (PRs)

Pull requests são a forma padrão de propor alterações no desenvolvimento colaborativo:

- Permitem que membros da equipe revisem o código antes de mesclar
- Mantêm um histórico de alterações e decisões
- Podem ser vinculados a issues para melhor rastreamento do projeto
- Habilitam testes automatizados e validação por meio de CI/CD

#### Conectando PRs a Issues

Vincular pull requests a issues ajuda no gerenciamento de projetos:

- Fecha issues automaticamente quando o PR é mesclado
- Fornece rastreabilidade entre itens de trabalho e alterações de código
- Ajuda a acompanhar o progresso ao longo do ciclo de desenvolvimento
- Melhora a comunicação da equipe sobre o que está sendo construído

#### Revisão de Código com Assistência de IA

O GitHub Copilot pode atuar como revisor para:

- Sugerir melhorias na qualidade do código
- Identificar possíveis bugs ou casos extremos
- Recomendar boas práticas e padrões de design
- Fornecer feedback construtivo sobre a implementação

O Copilot CLI permite que você:

- Crie pull requests diretamente do terminal
- Solicite revisões do Copilot ou de membros da equipe
- Mescle alterações sem sair do CLI
- Automatize todo o fluxo de trabalho para iterações mais rápidas

#### Referências

- [Criando Pull Requests com o GitHub CLI](https://cli.github.com/manual/gh_pr_create)
- [Vinculando Issues e PRs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [GitHub Copilot como Revisor de Código](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

> [!IMPORTANT]
> Se você reiniciou seu codespace, pode ser necessário executar `copilot --allow-all` e autenticar-se com o GitHub novamente executando `!gh auth login` no terminal,
> ou usar `!gh auth login` de dentro da sessão do Copilot CLI.

### ⌨️ Atividade: Completar seu Fluxo de Trabalho de Pull Request

1. Inicie uma sessão interativa do Copilot CLI (se ainda não estiver em uma sessão):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

2. Crie um pull request para suas alterações e adicione o Copilot como revisor:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Crie um pull request da branch atual com o título "Add calculator enhancements"
   > e uma descrição que inclua as principais alterações: operações básicas de calculadora e
   > funcionalidade expandida com módulo, potência e raiz quadrada. Certifique-se de adicionar @copilot como revisor
   > e solicitar uma revisão no PR.
   > Liste o link do PR quando estiver completamente criado
   > ```

3. Vincule o pull request às duas issues criadas anteriormente:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Vincule o pull request que acabei de criar às issues "Create a calculator" e
   > "Add more operations" para que sejam fechadas automaticamente quando mescladas.
   > ```

1. Mescle o pull request após a revisão do Copilot estar concluída:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Mescle o pull request e feche as issues vinculadas
   > ```

> [!NOTE]
> Quando você mescla um PR vinculado a issues usando "Closes #<número-da-issue>",
> o GitHub fecha automaticamente essas issues. A opção de merge squash mantém o
> histórico da branch principal limpo.

4. Verifique que ambas as issues estão agora fechadas:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Liste as issues fechadas no repositório para confirmar que as issues "Create a calculator"
   > e "Add more operations" estão agora fechadas.
   > ```

5. Aguarde um momento para Mona verificar seu trabalho, fornecer feedback e compartilhar a próxima lição.

> [!TIP]
> Use `/share gist` na sua sessão do Copilot CLI para salvar sua sessão do exercício do GitHub Skills
> como um GitHub gist para documentação e referência futura!

<details>
<summary>Tendo problemas? 🤷</summary><br/>

- Certifique-se de ter feito commit e enviado todas as alterações antes de criar o PR
- Verifique sua autenticação no GitHub com `gh auth status` ou `!gh auth status` no Copilot CLI
- Se a criação do PR falhar, verifique se você está em uma branch diferente de main/master
- Para vincular uma issue manualmente, edite a descrição do PR para incluir "Closes #<número-da-issue>"
- Você pode ver os detalhes do PR com `!gh pr view` ou `!gh pr list` para ver seus PRs
- Para issues que não fecham automaticamente, vincule-as manualmente na interface web do GitHub
- Lembre-se de verificar se a revisão do Copilot foi enviada antes de mesclar
- Use `!gh pr merge --squash` para mesclar com um histórico limpo

</details>
