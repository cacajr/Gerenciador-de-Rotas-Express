const express = require("express");

const app = express();

const routes = require("./src/app/routes");

app.use("/", routes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 ...");
});

module.exports = app;