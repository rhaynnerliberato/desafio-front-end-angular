const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/desafio-front-end"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/desafio-front-end/index.html");
});

app.listen(port, () => {
  console.info(`Servidor iniciado na porta ${port}`);
});
