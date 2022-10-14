// ------------------------------ SEQUELIZE ------------------------------
// Importar biblioteca
const Sequelize = require('sequelize'); // Vai receber o squelize

// Conectar com banco de dados
const connection = new Sequelize('projsaude','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3306,
});

// Exportar módulo
module.exports = connection; // Exportar o módulo "connection"
