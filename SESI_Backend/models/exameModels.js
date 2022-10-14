// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const atletaModels = require('./atletaModels')
const medicoModels = require('./medicoModels')

const examesModels = database.define('exame', {
    idexame:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipo : Sequelize.STRING(100),
    descricao : Sequelize.TEXT,
    data_ex : Sequelize.DATE,
    situacao : Sequelize.ENUM('CONCLUIDO', 'ANALISE', 'PENDENTE'),
    observacao : Sequelize.TEXT,
    pdf : Sequelize.BLOB('long'),
    id_exame_atl : {
        type : Sequelize.INTEGER,
        references : {
            model : atletaModels,
            key : 'idatleta'
        }
    },
    id_exame_med : {
        type : Sequelize.INTEGER,
        references : {
            model : medicoModels,
            key : 'idmedico'
        }
    }
})

database.sync()

module.exports = examesModels