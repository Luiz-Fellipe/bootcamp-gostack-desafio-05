<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 5: Primeiro projeto com ReactJS
</h3>

<p align="center">“Para quem fica melhor a cada dia, ficar pronto é utopia”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-05?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-05/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-05?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tela-da-aplicação">Telas da Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio adicionei novas funcionalidades na aplicação que foi desenvolvida ao longo desse módulo.

## Tela da Aplicação
<img src=".github/1.png " alt="Kitten"
	title="A cute kitten" width="300" height="300" />
  <img src=".github/2.png " alt="Kitten"
	title="A cute kitten" width="300" height="300" />
  <img src=".github/3.png " alt="Kitten"
	title="A cute kitten" width="300" height="300" />
  <img src=".github/4.png " alt="Kitten"
	title="A cute kitten" width="300" height="300" />
  <img src=".github/5.png " alt="Kitten"
	title="A cute kitten" width="300" height="300" />


## Funcionalidades

#### 1. Captando erros

Adicionei um `try/catch` por volta do código presente na função `handleSubmit` presente no componente `Main` e caso um repositório não seja encontrado na API do Github adicionei uma borda vermelha por volta do input em que o usuário digitou o nome do repositório.

#### 2. Repositório duplicado

Antes de fazer a chamada à API na função `handleSubmit` fiz uma verificação para ver se o repositório não está duplicado, ou seja, se ele ainda não existe no estado de `repositories`.

Caso exista, dispare um erro, e com isso o código cairá no `catch` do `try/catch` criado na funcionalidade anterior.

#### 3. Filtro de estado

Adicionei um filtro de estado na listagem de Issues que criamos no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

#### 4. Paginação

Adicionei paginação nas issues listadas no detalhe do repositório.

Adicionei apenas um botão de próxima página e página anterior. O botão de página anterior fica desativado na primeira página.

