// Arquivo de inicialização do servidor

// Importação do módulo APP, que é onde a configuração do express foi feita
const app = require('./src/app');

// Inicializa o servidor na porta 8080, passando como callback uma função de log
app.listen(8080, function () {
    console.log('Iti Password Test listening on port 8080')
})

/*

@TO-DO:

-Padronização de código
    -Comentarios
    -Identação
    -Aspas simples e duplas
    -Tipos de variáveis
    -Nomes de variaveis
-Testes unitários
-Readme
-Deploy do código na aws

*/