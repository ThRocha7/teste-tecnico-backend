# 👨🏽‍💻 Teste Técnico 👨🏽‍💻

Olá, Seja bem-vindo! Aqui você encontrará uma API desenvolvida em **TypeScript** que gerencia intenções de frete e leads comerciais. 🤝

---

## 📚 Índice

- [💬 Tecnologias](#tecnologias)
- [▶️ Como rodar na sua máquina](#️como-rodar-na-sua-máquina)
- [🗂 Organização do projeto](#organização-do-projeto)
- [📡 Endpoints](#endpoints)

---

## 👩🏽‍💻 Tecnologias

- Projeto construído com **Node.js + TypeScript** 🧠
- Framework utilizado: **Express** ⚡
- Testes unitários com **Jest** ✅
- A API segue princípios RESTful e documentada com **Swagger** 🧾
- Persitencia com **PostgreSQL** utilizando **pg + node-pg-migrations** 🎲

---

## ▶️ Como rodar na sua máquina

Siga os passos abaixo para executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/ThRocha7/teste-tecnico-backend.git
   cd teste-tecnico-backend
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Inicie todos os serviços de uma vez:

   ```bash
   npm run up-all-services
   ```

4. Acesse a documentação interativa da API:
   ```
   http://localhost:3000/docs
   ```

5. Atualize as credencias do Email:
   ```
    # preencha com seu email e senha. Se for gmail, precisará gerar uma Senha de app 
    # https://support.google.com/accounts/answer/185833?hl=pt-BR
    EMAIL_USER=
    EMAIL_PASSWORD=
    EMAIL_SMTP=smtp.gmail.com
   ```

---

## 🗂 Organização do projeto

A estrutura do projeto foi pensada para ser simples e clara:

```
.
├── infra/
│   ├── migrations/
│   └── database.ts
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── app.ts
├── test/
│   ├── apis/
│   |    ├── intention/
│   |    └── lead/
├── package.json
├── tsconfig.json
├── docker-compose.yml
├── jest.config.json
├── .env
└── README.md
```

- `routes/`: Definição das rotas e a documentação da API's.
- `controllers/`: Lógica de controle das requisições.
- `middleware/`: Trata os dados antes de chegar na API.
- `models/`: Tipagens e modelos de dados.
- `app.ts`: Ponto de entrada da aplicação.

---

## 📡 Endpoints

### 1. **POST /intention**

📥 Cadastra uma nova intenção de frete.

**Request body**:

```json
{
  "zipcode_start": "string",
  "zipcode_end": "string"
}
```

---

### 2. **PUT /intention/{intention_id}**

🔄 Atualiza uma intenção, associando-a a um lead existente.

**Request body**:

```json
{
  "lead_id": "string"
}
```

---

### 3. **POST /lead**

🧍 Cadastra um novo lead.

**Request body**:

```json
{
  "name": "string",
  "email": "string"
}
```

---

### 4. **GET /docs**

📖 Exibe a documentação da API (Swagger).

---

Sinta-se à vontade para contribuir ou abrir issues se tiver dúvidas ou sugestões! 😄
