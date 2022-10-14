// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const gestor_adminModels = require('./gestorAdminModels')

// Criar models
const gestorModels = database.define('gestore', {
    idgestor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: Sequelize.STRING(50),
    cpf: Sequelize.CHAR(11),
    senha: Sequelize.STRING(30),
    email: Sequelize.STRING(50),
    id_admin: {
        type: Sequelize.INTEGER,
        references: {
            model: gestor_adminModels,
            key: 'idadmin'
        }
    }
});

// Exportar módulo
database.sync()
module.exports = gestorModels;
