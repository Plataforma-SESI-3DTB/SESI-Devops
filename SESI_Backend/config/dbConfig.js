// Importar biblioteca
const Sequelize = require('sequelize'); // Vai receber o sequelize

// Conectar com banco de dados
const database = new Sequelize('SESI','api','passwd',{
    dialect: 'mysql',
    host:'10.105.75.181',
    port: 30306,
});

// Exportar módulo
module.exports = database;
