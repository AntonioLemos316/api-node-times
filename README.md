# API de Times

Uma simples API para estudo do node/express com mongodb/mongoose na qual farei as interações de um CRUD.

## Guia

- [Instalação clonando](#instalação-clonando)
- [Instalação do zero](#instalação-do-zero)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação clonando

1. Clone o repositorio:

```bash
 git clone https://github.com/AntonioLemos316/api-node-times.git
```

2. Instale as dependências:

```bash
 npm install
```

## Instalação do zero

1. Use o comando abaixo para iniciar a criação do arquivo package.json:

```bash
 npm init -y
```

2. Use os comandos abaixo para instalar as dependências que iremos usar no projeto:

```bash
 npm install express dotenv mongoose
 npm install nodemon --save-dev
```

3. Vamos utilizar o formato import e não o require, então precisamos adicionar no arquivo package.json o type como module:

```bash
 "type": "module"
```

4. Na parte dos scripts substitui o test e adicionei o start e o dev.

```bash
 "scripts:" {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
 },
```

5. Aqui uma visão de como ficara nosso package.json:

```bash
 {
  "name": "api-node-times",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.2.3"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

## Uso

1. Após a configuração inicial do package.json e instalação das dependências vamos configurar nossa estrutura das pastas:

- Estrutura das pastas

  <img src="/img/Capturar001.PNG">

2. Em index.js importamos o express, em seguida iniciamos o express() em uma const chamada app e definimos a const PORT como 3000, por fim chamamos app.listen para indicar a porta na qual nosso servidor sera escutado e rodaremos no terminal o comando npm run dev para iniciar nosso servidor.

- Importação do express

  <img src="/img/Capturar002.PNG">

- Atribuindo valores as constantes

  <img src="/img/Capturar003.PNG">

- Onde o servidor será escutado

  <img src="/img/Capturar004.PNG">

- Comando para iniciar o servidor

  <img src="/img/Capturar004c.PNG">

- Servidor iniciado

  <img src="/img/Capturar004b.PNG">

3. Usaremos um software chamado postman no qual testaremos nossas rotas, nesse caso testaremos a rota '/teste' segue abaixo nossa rota, requisição e resposta:

- Rota de teste

  <img src="/img/Capturar007.PNG">

- Requisição do cliente ao servidor/postman

  <img src="/img/Capturar005.PNG">

- Respota do servidor/postman ao cliente

  <img src="/img/Capturar006.PNG">

4. Em seguida vamos configurar nossa pasta database e o arquivo mongodb.js para fazer nossa conexão com o mongodbAtlas
