// Importar biblioteca
const Sequelize = require('sequelize'); // Vai receber o sequelize

// Conectar com banco de dados
const database = new Sequelize('SESI','api','Senai115',{
    dialect: 'mysql',
    host:'10.105.75.146',
    port: 30306,
});

// Exportar módulo
module.exports = database;
