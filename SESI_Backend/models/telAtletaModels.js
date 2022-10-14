// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const atletaModels = require('./atletaModels')

const tel_atlModels = database.define('tel_atleta', {
    idtel_atl:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ddd: Sequelize.CHAR(2),
    numero : Sequelize.STRING(9),
    tipo : Sequelize.ENUM('RESIDENCIAL', 'COMERCIAL', 'CELULAR'),
    id_tel_atl : {
        type : Sequelize.INTEGER,
        references : {
            model : atletaModels,
            key : 'idatleta' 
        }
    }
})

database.sync()

module.exports = tel_atlModels;