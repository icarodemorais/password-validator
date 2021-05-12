const express = require('express');
const app = express();

// Importação de rotas
const passwordRouter = require('./routes/passwordRouter');

// Uso das rotas no módulo passwordRouter
app.use('/password', passwordRouter);

module.exports = app;