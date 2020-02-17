//o arquivo server.js serve apenas para iniciar o servidor que escutará as rotas

const express = require("express"); //aqui a funcao express será repassada para a constante express
const app = express(); //aqui a funcao será executada na constante app

const routes = require("./src/app/routes"); //aqui chamamos para a constante routes a exportacao do arq. routes dando o seu end.

app.use("/", routes); //aqui aplicamos a rota chamando a constante routes declarada anteriormente

//aqui inserimos a porta em que o servidor irá escutar as requisicoes e as respostas
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 ...");
});

//aqui exportamos a execucao do express que esta na constante app
//module.exports = app;