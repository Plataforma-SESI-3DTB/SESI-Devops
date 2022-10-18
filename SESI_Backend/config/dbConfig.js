// ------------------------------ SEQUELIZE ------------------------------
// Importar biblioteca

const Sequelize = require('sequelize'); // Vai receber o squelize

// Conectar com banco de dados
const connection = new Sequelize('SESI','api','passwd',{
    dialect: 'mysql',
    host:'10.105.75.85',
    port: 30306,
});


// Exportar módulo
module.exports = connection; // Exportar o módulo "connection"
