# API de Times

Uma simples API para estudo do node/express com mongodb/mongoose na qual farei as interações de um CRUD.

## Guia

-[Instalação clonando](#instalação-clonando) -[Instalação do zero](#instalação-do-zero) -[Uso](#uso) -[Contribuição](#contribuição) -[Licença](#licença)

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

6. Nossa estrutura de pasta será a seguinte
   ![Estrutura de pasta](https://imgur.com/ULfRum6)
