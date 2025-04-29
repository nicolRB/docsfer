# docsfer

File data transfer based on cloud.

Architecture:
- Monolith: Application.
- Migrator: Database migrations
- Nginx: Reverse proxy.
- PostgreSQL: Database.
- Azurite (Azure Blob Storage) (dev): File hosting.
- Smtp4dev (dev): SMTP test server.

External Modules:
- SMTP: SendGrid

Requisitos funcionais:
- RF001: O sistema deve permitir a autenticação do usuário por Microsoft Entra ID.
- RF002: O sistema deve permitir a troca de arquivos entre usuários singulares. e.g.: José e Carlos.
- RF003: O sistema deve permitir a troca de arquivos entre usuários singulares e grupos de usuários. e.g.: José e RH.
- RF004: O sistema deve permitir a troca de arquivos entre grupos de usuários. e.g.: RH e Financeiro.
- RF005: O sistema deve permitir o versionamento de arquivos. e.g.: Arquivo X v1.0, o usuário sobe uma versão do mesmo arquivo, Arquivo X v2.0
- RF006: O sistema deve permitir a troca de mensagens dentro do mesmo arquivo.
- RF007: O sistema deve enviar mensagens do próprio sistema, como "nova versão criada", dentro do mesmo arquivo.
- RF008: O sistema deve enviar um e-mail anunciando a chegada de um novo arquivo compartilhado ao usuário.
- RF009: O sistema deve enviar um e-mail anunciando a chegada de um novo arquivo compartilhado ao participante do grupo.

Requisitos não funcionais:
- RNF001: O sistema deve responder em até 2 segundos.
- RNF002: O sistema deve possuir a interface responsiva.
- RNF003: O sistema deve suportar os navegadores mais avançados do mercado (Firefox, Chrome e Edge).
- RNF004: O sistema deve possuir a estilização feita com TailwindCSS para facilidade de manutenção.
- RNF005: O sistema deve possuir o back-end na linguagem C# utilizando ASP.NET Core para o cliente conseguir fazer manutenção.

