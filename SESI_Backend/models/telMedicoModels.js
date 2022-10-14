// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const medicoModels = require('./medicoModels');


const tel_medModels = database.define('tel_medico', {
    idtel_med:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ddd : Sequelize.CHAR(2),
    numero : Sequelize.STRING(9),
    tipo : Sequelize.ENUM('RESIDENCIAL' , 'COMERCIAL', 'CELULAR'),
    id_tel_med : {
        type : Sequelize.INTEGER,
        references : {
            model : medicoModels,
            key : 'idmedico'
        }
    }
})

database.sync()

module.exports = tel_medModels;