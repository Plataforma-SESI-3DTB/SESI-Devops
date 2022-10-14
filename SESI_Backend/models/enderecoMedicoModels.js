// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const medicoModels = require('./medicoModels')

const end_medModels = database.define('endereco_medico', {
    idmed_end: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cep : Sequelize.CHAR(8),
    logradouro : Sequelize.STRING(100),
    numero : Sequelize.STRING(5),
    bairro : Sequelize.STRING(100),
    complemento : Sequelize.STRING(50),
    pt_ref : Sequelize.STRING(50),
    cidade : Sequelize.STRING(60),
    estado : Sequelize.CHAR(2),
    pais : Sequelize.STRING(30),
    tipo : Sequelize.ENUM('RESIDENCIAL', 'COMERCIAL'),
    id_end_med : {
        type : Sequelize.INTEGER,
        references : {
            model : medicoModels,
            key : 'idmedico'
        }
    }
})

database.sync()

module.exports = end_medModels