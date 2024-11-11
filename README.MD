# Projeto Node.js Unimar - PÓS FullStack

Projeto API em Node.js com Sequelize e MySQL, desenvolvido para o gerenciamento de produtos, usuários e categorias.

**Aluno**: Fabiano Souza de Oliveira  
**RA**: 8093500

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para manipulação de banco de dados.
- **MySQL**: Banco de dados relacional.

---

## Instruções para Instalação e Configuração

1. **Clone o repositório**:
   Para clonar o repositório e navegar até a pasta do projeto, execute:

   ```bash
   git clone https://github.com/fsouzaweb/unimar-api-nodejs && cd unimar-api-nodejs
   ```

2. **Instale as dependências**:
   Instale todas as dependências do projeto listadas no `package.json`:

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**:
   
   Crie um banco de dados MySQL e configure as variáveis no arquivo `.env` para que o Sequelize possa se conectar corretamente. Exemplo de configuração do arquivo `.env`:

   ```env
   # JWT Secret
   JWT_SECRET=sua_chave_secreta

   # Database MySQL
   DB_USERNAME=root
   DB_PASSWORD=sua_senha
   DB_NAME=nodejs_unimar_db
   DB_HOST=127.0.0.1
   DB_DIALECT=mysql
   ```

   - **DB_USERNAME**: Usuário do banco de dados MySQL.
   - **DB_PASSWORD**: Senha do banco de dados MySQL.
   - **DB_NAME**: Nome do banco de dados.
   - **DB_HOST**: Endereço do banco de dados (localhost por padrão).
   - **DB_DIALECT**: Dialeto do banco de dados (MySQL neste caso).
   - **JWT_SECRET**: Chave secreta para geração de tokens JWT (necessária para autenticação).

4. **Execute as Migrações**:
   As migrações do Sequelize criarão as tabelas necessárias no banco de dados. Execute:

   ```bash
   npx sequelize db:migrate
   ```

5. **(Opcional) Popular o Banco com Dados Iniciais**:
   Se desejar, você pode executar os seeders para popular o banco de dados com dados iniciais:

   ```bash
   npx sequelize db:seed:all
   ```

---

## Execução do Projeto

Para iniciar o servidor Node.js:

```bash
npm start
```

O projeto estará acessível em `http://localhost:3000` por padrão.

---

## Estrutura de Pastas

- **`controllers`**: Contém os controladores das rotas que gerenciam a lógica de negócio.
- **`models`**: Contém os modelos Sequelize que representam as tabelas do banco de dados.
- **`routes`**: Define as rotas da API, cada rota é associada a uma ação nos controladores.
- **`config`**: Configurações do banco de dados, incluindo o arquivo `config.js` usado pelo Sequelize.
- **`migrations`**: Arquivos de migração do Sequelize, usados para criar, atualizar ou remover tabelas.
- **`seeders`**: Arquivos para popular o banco de dados com dados iniciais, úteis para testes.

---

## Endpoints da API

Aqui estão as principais rotas da API:

### Usuários

- **Criar Usuário**  
  **POST** `/users/new_user`  
  Cria um novo usuário. Envie um JSON com `name`, `email`, `user` e `pass`.

- **Login de Usuário**  
  **POST** `/users/login`  
  Realiza o login de um usuário. Envie um JSON com `user` e `pass`. Retorna um token JWT se as credenciais estiverem corretas.

### Produtos

- **Listar Produtos**  
  **GET** `/products`  
  Lista todos os produtos disponíveis, incluindo a categoria associada.

- **Criar Produto**  
  **POST** `/products`  
  Cria um novo produto. Envie um JSON com as informações do produto.

- **Atualizar Produto**  
  **PUT** `/products/:id`  
  Atualiza um produto específico pelo ID. Envie os novos dados em JSON.

---

## Dicas para Desenvolvimento

1. **Verificar Conexão com o Banco de Dados**:
   Certifique-se de que o MySQL está em execução e que o Sequelize consegue se conectar usando as credenciais do arquivo `.env`.

2. **Testar Endpoints com Insomnia ou Postman**:
   Use ferramentas como Insomnia ou Postman para testar os endpoints da API e verificar as respostas JSON.

3. **Logs de Erro**:
   Ao iniciar o servidor, verifique o console para logs de erro ou mensagens, especialmente para problemas de autenticação ou conexão com o banco de dados.

4. **Atualização de Dados**:
   Após realizar atualizações de dados com sucesso, confirme a atualização usando um endpoint GET correspondente ou inspecionando diretamente o banco de dados.

---

### Contato

Para dúvidas e sugestões, entre em contato com **Fabiano Souza de Oliveira** (RA: 8093500).
```

Esse `README.md` contém instruções detalhadas para clonar o repositório, instalar dependências, configurar o banco de dados, executar o projeto e testar os endpoints da API, além de dicas úteis para desenvolvimento.
