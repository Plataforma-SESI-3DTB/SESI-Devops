// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const gestorModels = require('./gestorModels');
const exameModels = require('./exameModels')

const med_convModels = database.define('medico_conv', {
    id_med_conv:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    cpf : Sequelize.CHAR(11),
    especialidade : Sequelize.STRING(30),
    email : Sequelize.STRING(100),
    crm : Sequelize.CHAR(9),
    sexo : Sequelize.ENUM('M', 'F', 'PREFIRO NÃO INFORMAR'),
    id_gest_conv : {
        type : Sequelize.INTEGER,
        references : {
            model : gestorModels,
            key : 'idgestor'
        }
    },
    id_exame_conv : {
        type : Sequelize.INTEGER,
        references : {
            model : exameModels,
            key : 'idexame'
        }
    }
})

database.sync()

module.exports = med_convModels;