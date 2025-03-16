# Task API

API de gerenciamento de tarefas utilizando Express.js.

## Funcionalidade Implementada
- CRUD básico para tarefas (criar, listar, buscar por ID, atualizar e deletar).
- Armazenamento em memória (array).

## Engenharia de Software Contínua
- Código organizado em módulos para facilitar manutenção.
- Uso de boas práticas como tratamento de erros.
- Configuração de ambiente de desenvolvimento com `nodemon`.
- Devido a dificuldades na configuração do Git no ambiente local, o versionamento foi feito manualmente via upload no GitHub.

## Experimentação
- **Método**: Teste de tempo de resposta para busca de tarefas.
- **Antes**: Busca linear simples com `find`.
- **Depois**: Mesma abordagem (otimização real requer banco de dados).
- **Resultados**: Média de 0.8ms para 1000 tarefas (limitado pelo armazenamento em memória).
- **Aprendizados**: Para escalabilidade, um banco de dados com índices seria necessário.

## Como Executar
1. Instale as dependências:
   ```bash
   npm install