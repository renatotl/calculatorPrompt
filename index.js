const express = require('express');// trazendo o express
const app = express();

const port = process.env.PORT || 3000;//acessa ou a porta 3000 ou o process.env já no forma padronizada do deploy. caso seja necessário alterar a porta para 3001

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);// porta que pode ser a porta do sistema ou 3000
});