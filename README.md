# Boarding Pass

Este projeto é uma extensão do desafio #boraCodar lançado pela Rocketseat. Neste projeto eu adicionei mais algumas páginas para selecionar voo, escolher assento, inserir dados do passageiro e mostrar o cartão de embarque o qual foi criado para o desafio da Rocketseat.

<div align="center">
    <img src="http://i.imgur.com/RrLI5eph.gif" alt="Project demo"/>
</div>

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

```
cd server
```

```
yarn
```

```
npm install
```

### Rodando migrations

Este comando irá criar o banco de dados na pasta do prisma.

```
npx prisma migrate dev
```

### Criando registros no banco de dados

Este comando roda o arquivo `prisma/seed.ts` para criar registros no banco de dados.

```
npx prisma db seed
```

### Rodando server

```
yarn start:dev
```

```
npm run start:dev
```

O projeto irá rodar no http://localhost:3333.

## Client

### Instalando dependências no client

```
cd client
```

```
yarn
```

```
npm install
```

### Rodando client

```
yarn start
```

```
npm start
```

O projeto irá rodar no http://localhost:3000.
