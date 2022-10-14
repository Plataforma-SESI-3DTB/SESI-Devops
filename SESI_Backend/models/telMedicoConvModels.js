// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const med_convModels = require('./medicoConvModels')

const tel_med_convModels = database.define('tel_medico_conv', {
    idtel_med_conv:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ddd : Sequelize.CHAR(2),
    numero : Sequelize.STRING(9),
    tipo : Sequelize.ENUM('RESIDENCIAL', 'COMERCIAL', 'CELULAR'),
    id_tel_conv : {
        type : Sequelize.INTEGER,
        references : {
            model : med_convModels,
            key : 'id_med_conv'
        }
    }
})

database.sync()

module.exports = tel_med_convModels