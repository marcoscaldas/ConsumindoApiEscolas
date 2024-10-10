const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importa o middleware CORS


const app = express();


// Ativa o CORS para todas as rotas
app.use(cors());


app.get('/api/escolas', async (req, res) => {
  try {
    const response = await axios.get('http://educacao.dadosabertosbr.org/api/escolas?nome=aplicacao');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
});


app.listen(3000, () => console.log('Servidor proxy rodando na porta 3000'));