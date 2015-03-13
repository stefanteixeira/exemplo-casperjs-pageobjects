# exemplo-casperjs-pageobjects [![Circle CI](https://circleci.com/gh/stefanteixeira/exemplo-casperjs-pageobjects.svg?style=shield)](https://circleci.com/gh/stefanteixeira/exemplo-casperjs-pageobjects)

Projeto de exemplo com testes do CasperJS utilizando o pattern Page Objects, que fazem parte do post "Usando Page Objects em testes com CasperJS": http://goo.gl/c3jOH0

Pré-requisitos: PhantomJS e CasperJS instalados **OU** NodeJS instalado

Para rodar:

- Caso **NÃO** esteja usando o NodeJS, mas possua o PhantomJS e CasperJS instalados, basta navegar até o diretório do projeto e rodar `casperjs test teste.js`
- Caso queira usar o NodeJS (recomendado), basta rodar `npm install` (que irá instalar o CasperJS/PhantomJS automaticamente) e, para executar os testes `npm test`.
