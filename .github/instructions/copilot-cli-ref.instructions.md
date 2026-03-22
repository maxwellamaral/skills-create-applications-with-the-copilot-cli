---
applyTo: "**/**"
---

# Orientações de Prompt

Siga os prompts e o contexto fornecidos. Não pule etapas.
Apenas adicione, faça commit e envie arquivos quando solicitado pelo usuário.

# Novas funcionalidades

Use .github/ISSUE_TEMPLATE/feature_request.md para solicitar todas as novas funcionalidades para calculator.js.

# Atalhos globais

```
@             mencionar arquivos, incluir conteúdos no contexto
Esc           cancelar a operação atual
!             executar comando no shell local (ignorar Copilot)
ctrl+c        cancelar operação / limpar entrada / sair
ctrl+d        encerrar
ctrl+l        limpar tela
```

## Atalhos para expandir conteúdo do histórico

```
Ctrl+o - expandir todo o histórico/recolher histórico
Ctrl+r - expandir histórico recente/recolher histórico
```

## Atalhos de navegação

```
Ctrl+a - mover para o início da linha
Ctrl+e - mover para o fim da linha
Ctrl+h - apagar caractere anterior
Ctrl+w - apagar palavra anterior
Ctrl+u - apagar do cursor até o início da linha
Ctrl+k - apagar do cursor até o fim da linha
Meta+←/→ - mover cursor por palavra
```

Use as teclas ↑↓ para navegar pelo histórico de comandos

## Fontes de instruções

Respeita instruções provenientes de vários locais:

- `.github/instructions/**/*.instructions.md` (na raiz do git e no diretório atual)
- `.github/copilot-instructions.md`
- `AGENTS.md` (na raiz do git e no diretório atual)
- `CLAUDE.md`
- `GEMINI.md`
- `$HOME/.copilot/copilot-instructions.md`
- Diretórios adicionais via `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`

## Saiba mais

Para aprender sobre o que posso fazer:

- Pergunte-me "O que você pode fazer?"
- Ou acesse: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli

## Comandos disponíveis

```
/add-dir <diretório> - Adicionar um diretório à lista de acesso permitido
/agent - Navegar e selecionar entre agentes disponíveis (se houver)
/clear - Limpar o histórico de conversas
/compact - Resumir histórico de conversas para reduzir uso do contexto
/context - Mostrar uso e visualização do contexto
/cwd [diretório] - Mudar o diretório de trabalho ou exibir o atual
/delegate <prompt> - Delegar alterações ao repositório remoto com PR gerado por IA
/exit, /quit - Sair do CLI
/share [file|gist] [caminho] - Compartilhar sessão em arquivo markdown ou GitHub gist
/feedback - Fornecer feedback sobre o CLI
/help - Exibir ajuda para comandos interativos
/list-dirs - Exibir todos os diretórios permitidos para acesso a arquivos
/login - Fazer login no Copilot
/logout - Fazer logout do Copilot
/mcp [show|add|edit|delete|disable|enable] [nome-servidor] - Gerenciar configuração de servidor MCP
/model [modelo] - Selecionar modelo de IA a usar
/reset-allowed-tools - Redefinir a lista de ferramentas permitidas
/session - Mostrar informações sobre a sessão atual do CLI
/skills [list|info|add|remove|reload] [args...] - Gerenciar habilidades para capacidades aprimoradas
/terminal-setup - Configurar terminal para suporte a entrada multilinha (Shift+Enter e Ctrl+Enter)
/theme [show|set|list] [auto|dark|light] - Ver ou configurar tema do terminal
/usage - Exibir métricas de uso e estatísticas da sessão
/user [show|list|switch] - Gerenciar lista de usuários do GitHub
```
