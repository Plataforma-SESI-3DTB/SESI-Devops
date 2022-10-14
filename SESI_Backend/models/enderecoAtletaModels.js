// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const atletaModels = require('./atletaModels')

const end_atlModels = database.define('endereco_atleta', {
    idend_atl:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cep : Sequelize.CHAR(8),
    logradouro : Sequelize.STRING(100),
    numero_end : Sequelize.STRING(5),
    bairro : Sequelize.STRING(100),
    complemento : Sequelize.STRING(50),
    cidade : Sequelize.STRING(60),
    pt_ref : Sequelize.STRING(50),
    estado : Sequelize.CHAR(2),
    pais : Sequelize.STRING(30),
    tipo_end : Sequelize.ENUM('RESIDENCIAL', 'COMERCIAL'),
    id_end_atl : {
        type : Sequelize.INTEGER,
        references : {
            model : atletaModels,
            key : 'idatleta'
        }
    }
})

database.sync()

// Exportação do módulo
module.exports = end_atlModels