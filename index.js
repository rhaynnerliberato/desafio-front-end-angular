const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(__dirname + "/dist/desafio-front-end");
});

app.listen(port, () => {
  console.info(`Aplicacao rodando na porta ${port}`);
})
