# Boarding Pass

Este projeto é uma extensão do desafio #boraCodar lançado pela Rocketseat. Neste projeto eu adicionei mais algumas páginas para selecionar voo, escolher assento, inserir dados do passageiro e mostrar o cartão de embarque o qual foi criado para o desafio da Rocketseat.

[Veja aqui uma demonstração](https://imgur.com/a/OK3Ggev)

Neste projeto eu utilizei as seguintes tecnologias:

- Typescript
- React.js
- Styled Components
- Nest.js
- Prisma.js
- SQLite

---

## Rodando o projeto

## Server

### Instalando dependências no server

```bash
cd server
```

```bash
yarn
```

ou

```bash
npm install
```

### Rodando migrations

Este comando irá criar o banco de dados na pasta do prisma.

```bash
npx prisma migrate dev
```

### Criando registros no banco de dados

Este comando roda o arquivo `prisma/seed.ts` para criar registros no banco de dados.

```bash
npx prisma db seed
```

### Rodando server

```bash
yarn start:dev
```

ou

```bash
npm run start:dev
```

O projeto irá rodar no http://localhost:3333.

## Client

### Instalando dependências no client

```bash
cd client
```

```bash
yarn
```

ou

```bash
npm install
```

### Rodando client

```bash
yarn start
```

ou

```bash
npm start
```

O projeto irá rodar no http://localhost:3000.
