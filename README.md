<h1 align="center">
    <img alt="Pokedex" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1615171218/logo_2_axvkoe.png" width="250px" />
</h1>

<p align="center">🚀 Uma aplicação para adicionar seus pokemons preferidos.</p>

<h1 align="center">

 ![align="center"](https://img.shields.io/github/issues/CampossCaio/GoMarketplace?color="FF3D00")
 ![Badge](https://img.shields.io/github/forks/CampossCaio/GoMarketplace?color="FF3D00")
 ![Badge](https://img.shields.io/github/stars/CampossCaio/GoMarketplace?color="FF3D00") 
 
</h1>

<h4 align="center"> 
	🚧  Pokedex 🚀 Em construção  🚧
</h4>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a> 
</p>

## 💻 Sobre o projeto

👾   Pokedex - é uma aplicação onde os usuários podem realizar um simples CRUD com seus pokemos preferidos.

Projeto desenvolvido durante um workshop ministrado por mim para os alunos de programação web da universidade [FAPAM](http://fapam.edu.br/).

O intuito de seu desenvolvimento foi apresentar para os alunos, um pouco sobre as tecnologias [Node.JS](https://nodejs.org/en/), [React.JS](https://reactnative.dev/)
e também alguns conceitos sobre aplicações REST.  

---

## 🎨 Layout


<a href="">
  <img alt="POkedex" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1615173909/Peek_2020-11-26_18-38_1_jwwxge.gif">
</a>


## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Frontend (pasta web)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Ter um banco de dados sql, de preferência postgres.


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/_Pokedex

# Acesse a pasta do projeto no terminal/cmd
$ cd Pokedex

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute o comando abaixo para executar as migrations
$ npx knex migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

---

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/_Pokedex

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Pokedex

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)**

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Sqlite](https://www.sqlite.org/index.html)**
-   **[KnexJS](http://knexjs.org/)**


## 🦸 Autor

<a href="https://github.com/CampossCaio">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/52550525?s=400&u=c8dfc4e1c8ef1bf3ed5890ecc40ee98f086ca72b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Campos</b></sub></a> <a href="https://github.com/CampossCaio" title="Caio Campos">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por **Caio Campos** 👋🏻 [Get in touch!](https://github.com/CampossCaio)
